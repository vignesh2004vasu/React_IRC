import '../Assets/Home.css';
import axios from 'axios';
import {useEffect,useState} from "react";
import NavHome from "./NavHome";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Footer from './Footer';
import { useDispatch, useSelector} from "react-redux";

import { selectBook } from './Store';
import { addToCart } from './CartSlice';




export default function Home() {
  const [books, setBooks] = useState([]);
  const [localStorageItem, setLocalStorageItem] = useState('');
  const selectedBook = useSelector((state) => state.book.selectedBook);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    const itemFromLocalStorage = localStorage.getItem('username');
    loadBooks();

    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
     
    }
  

    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/books");
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();

    
  }, []);
  
  const loadBooks = async () => {
    try {
        const result = await axios.get('http://localhost:8080/books'); 
        setBooks(result.data);
    } catch (error) {
        console.error('Error loading books:', error);
        
    }
};
 
  const handleClick = (book) => {
    dispatch(selectBook(book));
    navigate(`/book/${book.id}`); 
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart(book)); 
  };

  return (
    <>
      <NavHome />
      <div className="home-container">
        <span className="dash">
        <h1>Hello {localStorageItem},</h1>
        <br />
        <h2>Looking for Books?</h2>

        </span>
        
      <span className="showcase">
        <h1>Showcase</h1>
        <p>Your Books</p>
        <ol>
            <li>Harry Potter</li>
            <li>Maze Runner</li>
            <li>Hunger Games</li>
            <li>Wimpy Kid</li>
        </ol>


      </span>
      </div>
      <div className="book-grid" >
        {books.map((book) => (
        
          <div className="book-item" 
          key={book.id}
          >
            <img src={book.imageUrl} alt={book.title} onClick={() => handleClick(book)} />
            <h3>{book.title}</h3>
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
            <button className="cart-button" onClick={() => handleAddToCart(book)}>
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        ))}
      </div>
     
      <Footer/>
    </>
  );
}
