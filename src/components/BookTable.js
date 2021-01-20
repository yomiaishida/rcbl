import React, { useContext } from "react";
import bookContext from "../context/book/bookContext";
import { TableBody } from "./TableBody";

export const BookTable = () => {
  const { books } = useContext(bookContext);
  return (
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      </thead>
      {books.map((book) => (
        <TableBody book={book} key={book.id} />
      ))}
    </table>
  );
};
