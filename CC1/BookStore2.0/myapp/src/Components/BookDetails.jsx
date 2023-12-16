import { useLocation } from "react-router-dom";

function BookDetails(props) {

  return (
    <div>
      
      <h2>Book Details</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      
    </div>
  );
}

export default BookDetails;
