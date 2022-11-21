import React, { useState, useEffect } from "react";

import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/search-page/SearchPage";
import BooksShelf from "./components/BooksShelf";
import { Routes, Route } from "react-router-dom";
import { BookInterface, BookShelfType } from "./interface/Books";

const BooksApp = () => {
  const [books, setBooks] = useState<BookInterface[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const books = await BooksAPI.getAll();
      setBooks(books);
    };
    getBooks();
  }, []);

  const handleSelect = async (shelf: BookShelfType, book: BookInterface) => {
    await BooksAPI.update(book, shelf);
    const newBooks = books.filter((b) => {
      if (b.id === book.id) {
        return (book.shelf = shelf);
      } else {
        return book;
      }
    });
    setBooks(newBooks);
  };

  // Add books from search page to bookshelf
  const handleSelectSearchPage = async (
    shelf: BookShelfType,
    book: BookInterface
  ) => {
    await BooksAPI.update(book, shelf);

    book.shelf = shelf;

    // If a book is already on the homepage and its shelf is changed on the searchpage, remove it and add incoming one
    const newBooks = [...books.filter((b) => b.id !== book.id), book];
    setBooks(newBooks);
  };

  return (
    // <div className="app">
    <Routes>
      <Route
        path="/"
        element={<BooksShelf books={books} handleSelect={handleSelect} />}
      />
      <Route
        path="/search"
        element={
          <SearchPage books={books} handleSelect={handleSelectSearchPage} />
        }
      />
    </Routes>
    // </div>
  );
};

export default BooksApp;
