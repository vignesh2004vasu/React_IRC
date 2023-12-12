import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams(); // Retrieve the 'id' parameter from the URL
  const book = books.find((book) => book.id === parseInt(id, 10)); // Convert 'id' to number

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>Price: {book.price}</p>
      <div className="reviews">
        Reviews:
        {Array.from({ length: book.reviews }, (_, index) => (
          <span key={index} role="img" aria-label="star">
            ⭐
          </span>
        ))}
      </div>
   
    </div>
  );
};

export default BookDetails;
