import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm/AddBookForm';
import BooksList from './components/BooksList/BooksList';
import { Book } from './interfaces/Book.interface';


const App: React.FC = () => {

  const booksData: Book[] = [
    {id: '1', title: 'Of Mice and Men', author: 'John Steinbeck', price: 25},
    {id: '2', title: 'East of Eden', author: 'John Steinbeck', price: 30}
  ]

  const [books, setBooks] = useState(booksData);

  const addBook = (book: Book) => {
    setBooks([...books, book])
  }

  const removeBook = (index: string) => {
    let clone = [...books]
    clone.splice(parseInt(index), 1)
    setBooks(clone)
  }

  return (
    <div className="container">
      <header>
         <h1>Books App</h1>
      </header>
      <BooksList books={books} removeBook={removeBook}/>
      <AddBookForm addBook={addBook}/>
    </div>
  );
}

export default App;

