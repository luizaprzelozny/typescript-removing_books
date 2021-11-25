import React from "react";
import './BooksList.css';
import { Book } from '../../interfaces/Book.interface';
import BookItem from '../BookItem/BookItem'

interface Props {
    books: Book[],
    removeBook: (index: string) => void
  }

const BooksList: React.FC<Props> = ({ books, removeBook }) => {

    return (
        <ul className='books-list'>
            {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook}/>)}
        </ul>
    )
}

export default BooksList;