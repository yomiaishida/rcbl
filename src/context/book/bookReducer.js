import { ADD_BOOK } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    default:
      return {
        ...state,
      };
  }
};
