import React, { useContext } from "react";

export const TableBody = ({ book }) => {
  return (
    <tbody>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.id}</td>
      <td>
        <a href="#" class="delete">
          X
        </a>
      </td>
    </tbody>
  );
};
