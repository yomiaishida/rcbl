import React, { useReducer } from "react";
import BookContext from "./bookContext";
import BookReducer from "./bookReducer";
import { ADD_BOOK } from "../types";

const BookState = ({ children }) => {
  const initialState = {
    books: [],
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  // Add Book

  // Remove Book

  return (
    <BookContext.Provider
      value={{
        books: state.books,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookState;
