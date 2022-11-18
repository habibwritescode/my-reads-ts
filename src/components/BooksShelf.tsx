import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { BookInterface, BookShelfType } from "../interface/Books";

type Props = {
  books: BookInterface[];
  handleSelect: (a: BookShelfType, b: BookInterface) => void;
};

const BooksShelf = (props: Props) => {
  const { books } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <Shelf
              books={books}
              shelf="currentlyReading"
              handleSelect={props.handleSelect}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <Shelf
              books={books}
              shelf="wantToRead"
              handleSelect={props.handleSelect}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <Shelf
              books={books}
              shelf="read"
              handleSelect={props.handleSelect}
            />
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BooksShelf;
