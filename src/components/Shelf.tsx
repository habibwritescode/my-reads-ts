import React from "react";
import { BookInterface, BookShelfType } from "../interface/Books";
import Book from "./book/Book";

type MyProps = {
  books: BookInterface[];
  shelf: BookShelfType;
  handleSelect: (a: BookShelfType, b: BookInterface) => void;
};

const Shelf = (props: MyProps) => {
  const { books, shelf, handleSelect } = props;

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books
          .filter((book) => book.shelf === shelf)
          .map((book) => (
            <Book book={book} key={book.id} handleSelect={handleSelect} />
          ))}
      </ol>
    </div>
  );
};

export default Shelf;
