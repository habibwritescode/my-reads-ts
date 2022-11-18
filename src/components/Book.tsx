import React from "react";
import { BookInterface, BookShelfType } from "../interface/Books";

type MyProps = {
  handleSelect: (a: BookShelfType, b: BookInterface) => void;
  book: BookInterface;
};

type MyState = {
  value: string;
};

class Book extends React.Component<MyProps, MyState> {
  state = {
    value: "none",
  };

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks
                  ? `url(${book.imageLinks.thumbnail})`
                  : "",
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={book.shelf ? book.shelf : this.state.value}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const newValue  = e.target.value;
                //   @ts-ignore
                  this.props.handleSelect(newValue, book);
                }}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors
            ? book.authors.map((author) => (
                <div key={author} className="book-authors">
                  {author}
                </div>
              ))
            : ""}
        </div>
      </li>
    );
  }
}

export default Book;
