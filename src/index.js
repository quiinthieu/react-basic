import React from 'react';
import ReactDom from 'react-dom';
import {books} from './books';
import Book from './Book';
import './index.css';


function BookList() {
    // return React.createElement('h1', {}, 'Hello World');
    return (
        <section className="book-list">
            {
                books.map((book, index) => <Book key={book.id} {...book}/>)
            }
        </section>
    );
}


ReactDom.render(<BookList/>, document.getElementById('root'));
