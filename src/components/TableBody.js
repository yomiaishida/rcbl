import React, { useContext } from "react";
import bookContext from "../context/book/bookContext";

export const TableBody = ({ book }) => {
  const { removeBook } = useContext(bookContext);

  const getBooks = () => {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  };

  const removeBookFromLs = (isbn) => {
    const books = getBooks();

    books.forEach(function (book, index) {
      if (book.id === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  };

  const onClick = () => {
    removeBook(book.id);
    removeBookFromLs(book.id);
  };

  return (
    <tbody>
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.id}</td>
        <td>
          <a href="#" className="delete" onClick={onClick}>
            X
          </a>
        </td>
      </tr>
    </tbody>
  );
};
