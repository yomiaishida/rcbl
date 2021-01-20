import React, { useState, useContext } from "react";
import bookContext from "../context/book/bookContext";

export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState(0);

  const { addBook } = useContext(bookContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: isbn,
      title,
      author,
    };

    addBook(newBook);
    setTitle("");
    setAuthor("");
    setIsbn(0);
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
