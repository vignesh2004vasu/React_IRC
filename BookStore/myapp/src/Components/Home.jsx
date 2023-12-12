import Navbar from "./Navbar";
import '../Assets/Home.css';



export default function Home() {
  const name = localStorage.getItem('uname');
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: '$19.99',
      reviews: 4,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41gr3r3FSWL.jpg',
    },
    
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'url_to_book_1_image.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="dash">
        <h1>Hello {name},</h1>
        <br />
        <h2>Looking for Books?</h2>
      </div>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
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
          </div>
        ))}
      </div>
    </>
  );
}
