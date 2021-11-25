import React from "react";
import './BookItem.css';
import { Book } from "../../interfaces/Book.interface";

interface Props {
    book: Book;
    removeBook: (index: string) => void
  }

const BookItem: React.FC<Props> = ({ book, removeBook }) => {

    const removeItem = function (e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        removeBook(book.id);
    }

    return (
        <li key={book.id} className='book-item'>{book.title} by {book.author}, {book.price}$
        <button className="apply_btn" onClick={removeItem}> Remove book</button>
        </li>
        
    )
}

export default BookItem;