import { useLocation } from "react-router-dom";

function BookDetails(props) {
// Access the passed book details

  // Use the book details object to display specific information

  return (
    <div>
      {/* Display book details */}
      <h2>Book Details</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      {/* Display other book details using the retrieved data */}
    </div>
  );
}

export default BookDetails;
