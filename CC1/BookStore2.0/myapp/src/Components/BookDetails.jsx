import React from "react";
import { useSelector } from "react-redux";
import NavBook from "./NavBook";
import "../Assets/BookDetails.css"; // Import the CSS file for styling
import NavHome from "./NavHome";

const BookDetails = () => {
  const selectedBook = useSelector((state) => state.book.selectedBook);

  if (!selectedBook) {
    return <p>No book selected.</p>;
  }

  const { title, author, price, reviews, imageUrl } = selectedBook;

  return (
    <>
      <NavHome/>
      <div className="book-details-container">
        <div className="book-details-card">
          <div className="book-details-image-card">
            <img src={imageUrl} alt={title} className="book-details-image" />
          </div>
          <div className="book-details-info-card">
            <h1>{title}</h1>
            <p>By {author}</p>
            <p>Price: {price}</p>
            <div className="reviews">
              Reviews:
              {Array.from({ length: reviews }, (_, index) => (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
            </div>
            <button className="buy-button">Add to Cart</button>
            {/* Additional details or buttons can be added here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
