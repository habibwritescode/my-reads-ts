import React, { useState } from "react";

import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import { BookInterface, BookShelfType } from "../../interface/Books";
import Book from "../book/Book";

type SearchPageProps = {
  handleSelect: (a: BookShelfType, b: BookInterface) => void;
  books: BookInterface[];
};

const SearchPage = (props: SearchPageProps) => {
  const { handleSelect, books } = props;

  const [loading, setLoading] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState<BookInterface[]>(books);
  const [query, setQuery] = useState("");

  const updateQuery = (query: string) => {
    setQuery(query);
    search(query);
  };

  const search = (query: string) => {
    if (query.length > 0) {
      setLoading(true);
      BooksAPI.search(query).then((res) => {
        if (res.error) {
          setSearchedBooks([]);
          setLoading(false);
        } else {
          // When books that are on the bookshelf show up on the searchpage,
          // let them show the shelf they belong to

          const newBooks = res.filter((b: BookInterface) =>
            books.map((x) => {
              if (b.id === x.id) {
                b.shelf = x.shelf;
                return b;
              } else {
                return b;
              }
            })
          );
          setSearchedBooks(newBooks);
          setLoading(false);
        }
      });
    } else {
      setSearchedBooks(books);
      setLoading(false);
    }
  };

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
            onChange={(e) => updateQuery(e.target.value)}
            value={query}
            data-testid="search-input"
          />
        </div>
      </div>
      <div className="search-books-results">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {searchedBooks?.length > 0 ? (
              <ol className="books-grid">
                {searchedBooks.map((book) => (
                  <Book book={book} key={book.id} handleSelect={handleSelect} />
                ))}
              </ol>
            ) : (
              <p>There are no books for this search</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
