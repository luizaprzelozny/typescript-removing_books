/* ACTIONS */

import { Book } from "../interfaces/Book.interface";
import { ADD_BOOK, REMOVE_BOOK, BookAction } from "./booksTypes";

// action creators
export const addBook = (payload: Book): BookAction => ({ payload, type: ADD_BOOK })
export const removeBook = (payload: string): BookAction => ({ payload, type: REMOVE_BOOK });
export type BooksState = Array<Book>;

// reducer
const reducer = (statePart: BooksState = [], action: BookAction): BooksState => {
    switch (action.type) {
      case ADD_BOOK:
        return [ ...statePart, action.payload ];
      case REMOVE_BOOK:
        return statePart.filter((book: Book) => book.id !== action.payload);
      default:
        return statePart;
    }
  }
  
  export default reducer;