import Navbar from "./Navbar";
import '../Assets/Home.css';




export default function Home() {
  const name = localStorage.getItem('uname');
  const books = [
      {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        price: '$24.99',
        reviews: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZqvYGolHrjBnWdWdGoLS1OMMNHrV22UHVsTq-VV6mQ&s',
      },
      {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        price: '$24.99',
        reviews: 5,
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/6S51pK7uwnyhkS9Io9DsAn/320c162c5150f853b8d8568c4715dcef/English_Harry_Potter_7_Epub_9781781100264.jpg?w=914&q=70&fm=jpg',
      },
      {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        price: '$24.99',
        reviews: 5,
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg',
      },
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: '$19.99',
      reviews: 4,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png',
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
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/sophie-kinsella-the-undomestic-goddess-book-cover-example.jpeg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/novel-book-cover-template-visme-963x1536.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/bedtime-story-book-cover-template-visme.jpg',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: '$24.99',
      reviews: 5,
      image: 'https://marketplace.canva.com/EAFfV74NxCg/1/0/1003w/canva-colorful-blue-illustration-beach-children%27s-book-cover-eTSt5e-cETQ.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <span className="dash">
        <h1>Hello {name},</h1>
        <br />
        <h2>Looking for Books?</h2>

        </span>
        
      <span className="showcase">
        <h1>SHowcase</h1>

      </span>
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
