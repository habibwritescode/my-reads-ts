import React from 'react'
import { BookInterface, BookShelfType } from '../interface/Books'
import Book from './Book'

type MyProps = {
    books: BookInterface[];
    shelf: BookShelfType;
    handleSelect: (a: BookShelfType, b: BookInterface) => void
}


const Shelf = (props: MyProps) => {
    const books = props.books.filter(book => book.shelf === props.shelf)
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => (
                    <Book book={book} key={book.id} handleSelect={props.handleSelect} />
                ))}
            </ol>
        </div>
    )
}

export default Shelf;
