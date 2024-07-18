import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './BookDetail.css';

const BookDetail = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="book-detail-container">
                <div className="book-detail-content">
                    <div className="left-column">
                        <img src={book.image} alt={book.title} />
                    </div>
                    <div className="right-column">
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <p>{book.description}</p>
                        <p>{book.review}</p>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default BookDetail;
