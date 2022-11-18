import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BookInterface, BookShelfType } from "../interface/Books";
import Book from "./Book";

type MyProps = {
  searchedBooks: BookInterface[];
  search: (a: string) => void;
  handleSelect: (a: BookShelfType, b: BookInterface) => void;
  books: BookInterface[];
};

type MyState = {
  query: string;
};

class SearchPage extends Component<MyProps, MyState> {
  state = {
    query: "",
  };

  updateQuery = (query: string) => {
    this.setState({ query });
    this.props.search(query);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchedBooks.map((book) => (
              <Book
                book={book}
                key={book.id}
                handleSelect={this.props.handleSelect}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
