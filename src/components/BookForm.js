import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import bookContext from "../context/book/bookContext";

export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const { addBook } = useContext(bookContext);

  const getBooks = () => {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  };

  const displayBooks = () => {
    const books = getBooks();

    books.forEach(function (book) {
      // const ui = new UI();

      // Add book to UI
      addBook(book);
    });
  };

  useEffect(() => {
    displayBooks();
  }, []);

  const addBookToLs = (book) => {
    const books = getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || author === "" || isbn === "") {
      setAlert("Please fill in all fields", "error");
    } else {
      // Add book to list
      const newBook = {
        id: isbn,
        title,
        author,
      };
      addBook(newBook);

      // Add to Ls
      addBookToLs(newBook);

      // Show Success
      setAlert("Book Added!", "success");

      // Clear fields
      setTitle("");
      setAuthor("");
      setIsbn("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="u-full-width"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          className="u-full-width"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isbn">ISBN#</label>
        <input
          type="text"
          id="isbn"
          className="u-full-width"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Submit" className="u-full-width" />
      </div>
    </form>
  );
};
