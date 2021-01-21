import React, { useContext } from "react";
import bookContext from "../context/book/bookContext";

export const TableBody = ({ book }) => {
  const { removeBook } = useContext(bookContext);

    books.forEach(function (book, index) {
  return (
    <tbody>
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.id}</td>
        <td>
          <a href="#" className="delete" onClick={() => removeBook(book.id)}>
            X
          </a>
        </td>
      </tr>
    </tbody>
  );
};
