import React, { useState } from "react";
import './AddBookForm.css';
import { randomId } from '../../utils/randomId';
import { Book } from '../../interfaces/Book.interface';

interface Props {
    addBook: (book: Book) => void
}

const AddBookForm: React.FC<Props> = ({addBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const book: Book = {
        id: randomId(10),
        title,
        author,
        price
    }
    addBook(book);
    setTitle('');
    setAuthor('');
    setPrice(0);
}
    return (
        <form className="add-book-form" onSubmit={handleSubmit}>
            Title: <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
            Author: <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text"/>
            Price: <input value={price} onChange={(e) => setPrice(parseInt(e.target.value))} type="number" />
            <button> Add book</button>
        </form>
    );


}










export default AddBookForm;