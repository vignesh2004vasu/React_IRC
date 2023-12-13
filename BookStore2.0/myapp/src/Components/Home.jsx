import Navbar from "./Navbar";
import '../Assets/Home.css';
import {useEffect,useState} from "react";
import NavHome from "./NavHome";




export default function Home() {
  const [localStorageItem, setLocalStorageItem] = useState('');
  useEffect(() => {
    
    const itemFromLocalStorage = localStorage.getItem('username');

    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
     
    }
  }, []);
  const books = [
      {
        id: 1,
        title: 'Harry Potter The Scocerers Stone',
        author: 'Author 2',
        price: '₹2499',
        reviews: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZqvYGolHrjBnWdWdGoLS1OMMNHrV22UHVsTq-VV6mQ&s',
      },
      {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        price: '₹2499',
        reviews: 2,
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/6S51pK7uwnyhkS9Io9DsAn/320c162c5150f853b8d8568c4715dcef/English_Harry_Potter_7_Epub_9781781100264.jpg?w=914&q=70&fm=jpg',
      },
      {
        id: 3,
        title: 'Book 2',
        author: 'Author 2',
        price: '₹24.99',
        reviews: 4,
        image: 'https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg',
      },
    {
      id: 4,
      title: 'Book 1',
      author: 'Author 1',
      price: '₹19.99',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/the-godfather-book-cover.png',
    },
    {
      id: 5,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2499',
      reviews: 3,
      image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41gr3r3FSWL.jpg',
    },
    
    {
      id: 6,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹299',
      reviews: 2,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/sophie-kinsella-the-undomestic-goddess-book-cover-example.jpeg',
    },
    {
      id: 7,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2999',
      reviews: 5,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/novel-book-cover-template-visme-963x1536.jpg',
    },
    {
      id: 8,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2099',
      reviews: 4,
      image: 'https://visme.co/blog/wp-content/uploads/2021/06/bedtime-story-book-cover-template-visme.jpg',
    },
    {
      id: 9,
      title: 'Book 2',
      author: 'Author 2',
      price: '₹2499',
      reviews: 3,
      image: 'https://marketplace.canva.com/EAFfV74NxCg/1/0/1003w/canva-colorful-blue-illustration-beach-children%27s-book-cover-eTSt5e-cETQ.jpg',
    },
  ];

  return (
    <>
      <NavHome />
      <div className="container">
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
      <div className="book-grid">
        {books.map((book) => (
          <div to={`/book/${book.id}`} key={book.id} className="book-item">
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
      <div className="footer">

      <div className="card">
      
      
    </div>
      <div class="card">
  <a class="social-link1">
    <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="white">
      </path>
    </svg>
  </a>
  <a class="social-link2">
    <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
      </path>
    </svg> </a>
  <a class="social-link3">
    <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" fill="white">
      </path>
    </svg>
  </a>
  <a class="social-link4">
    <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
      </path>
    </svg> </a>
  <a class="social-link5">
    <svg viewBox="0 0 16 16" class="bi bi-stack-overflow" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"></path>
      <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"></path>
    </svg>
  </a>
</div>

<h3>Follow Our Social Media Handles For Updates</h3>

      </div>
    </>
  );
}
