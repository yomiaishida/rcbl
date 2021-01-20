import React, { useState, useContext } from "react";
import bookContext from "../context/book/bookContext";

export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const { addBook } = useContext(bookContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || author === "" || isbn === "") {
      alert("error");
      // ui.showAlert("Please fill in all fields", "error");
    } else {
      // Add book to list
      const newBook = {
        id: isbn,
        title,
        author,
      };
      // ui.addBookToList(book);

      // Add to Ls
      // Store.addBook(book);

      // Show Success
      // ui.showAlert("Book Added!", "success");

      // Clear fields
      // ui.clearFields();
      addBook(newBook);
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
