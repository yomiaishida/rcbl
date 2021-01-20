import React, { useReducer } from "react";
import BookContext from "./bookContext";
import BookReducer from "./bookReducer";
import { ADD_BOOK, REMOVE_BOOK } from "../types";

const BookState = ({ children }) => {
  const initialState = {
    books: [],
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Add Book
  function addBook(book) {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }

  // Remove Book
  function removeBook(id) {
    dispatch({
      type: REMOVE_BOOK,
      payload: id,
    });
  }

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        addBook,
        removeBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookState;
