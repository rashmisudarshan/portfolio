import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Bookshelf.css';

const Bookshelf = ({ books }) => {
    const currentlyReading = books.filter(book => book.readStatus === "Currently Reading");
    const readBooks = books.filter(book => book.readStatus === "Read");

    return (
        <div>
            <Header />
            <div className="bookshelf-container">
                <h2>Currently Reading</h2>
                <div className="bookshelf-section">
                    {currentlyReading.map(book => (
                        <div key={book.id} className="book-card">
                            <img src={book.image} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.description}</p>
                        </div>
                    ))}
                </div>
                <h2>Books I've Read</h2>
                <div className="bookshelf-section">
                    {readBooks.map(book => (
                        <Link key={book.id} to={`/book/${book.id}`} className="book-card-link">
                            <div className="book-card">
                                <img src={book.image} alt={book.title} />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Bookshelf;
