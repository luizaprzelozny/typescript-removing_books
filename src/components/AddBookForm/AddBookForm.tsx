import React, { useState } from "react";
import './AddBookForm.css';
import { randomId } from '../../utils/randomId';
import { Book } from '../../interfaces/Book.interface';
import { useDispatch } from "react-redux";
import { addBook as addBookAction } from './../../redux/booksRedux';;

const AddBookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const addBook = (book: Book) => dispatch(addBookAction(book));

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    addBook({title, author, price, id: randomId(20)});
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