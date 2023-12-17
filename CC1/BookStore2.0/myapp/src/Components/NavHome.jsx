// NavHome.jsx

import '../Assets/NavHome.css';
import w1 from '../Assets/icons8-book-64.png';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function NavHome() {
  const logout = (e) => {
    localStorage.setItem('isLoggedIn', false);
  };

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <>
      <div className="navbar-custom">
        <div className="logo">
          <img src={w1} alt='logo' />
        </div>
        <ul className="nav-links-custom" id="home1">
          <Link className='homelink' id="homeb" to="/home">
            <HomeIcon fontSize='large'></HomeIcon>
          </Link>
          <Link className='homelink' to="/cart">
         
          <StyledBadge badgeContent={cartItemCount} color="primary">
            <ShoppingCartIcon fontSize='large'></ShoppingCartIcon>
            </StyledBadge>
       
          </Link>
          <Link className='homelink' to="/login" onClick={logout}>
            <h5>Logout</h5>
          </Link>
        </ul>
      </div>
    </>
  );
}
