import { useState } from 'react';
import axios from 'axios'; // Assuming Axios for API requests

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: '',
    reviews: 0,
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/books', bookData);
      console.log('Book added:', response.data);
      
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={bookData.title} onChange={handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={bookData.author} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={bookData.price} onChange={handleChange} />
        </label>
        <label>
          Reviews:
          <input type="number" name="reviews" value={bookData.reviews} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={bookData.image} onChange={handleChange} />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
