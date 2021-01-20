import React from "react";
import { TableBody } from "./TableBody";

export const BookTable = () => {
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
      <TableBody />
    </table>
  );
};
