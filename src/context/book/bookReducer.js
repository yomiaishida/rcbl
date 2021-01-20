import { ADD_BOOK, REMOVE_BOOK } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
