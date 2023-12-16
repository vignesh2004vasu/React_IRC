import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../Assets/Users.css';

function Books() {
    const [books, setBooks] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        loadBooks();
        // Simulating authentication status
        // Replace this with your actual authentication logic
        setAuthenticated(true); // Set to true or false based on authentication
    }, []);

    const loadBooks = async () => {
        try {
            const result = await axios.get('http://localhost:8080/books');
            setBooks(result.data);
        } catch (error) {
            alert('Error loading books');
        }
    };

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/book/${id}`);
            loadBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('Error deleting book. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <Navbar />
                <div className="container">
                    <div className="py-4">
                        <table className="table border shadow">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Reviews</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={index}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.price}</td>
                                        <td>{book.reviews}</td>
                                        <td>
                                            <Link className="btn btn-primary mx-2">View</Link>
                                            {/* Edit link rendered conditionally */}
                                            {authenticated && (
                                                <Link
                                                    className="btn btn-outline-primary mx-2"
                                                    to={`/editbook/${book.id}`}
                                                >
                                                    Edit
                                                </Link>
                                            )}
                                            {/* Delete button */}
                                            <button
                                                className="btn btn-danger mx-2"
                                                onClick={() => deleteBook(book.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;
