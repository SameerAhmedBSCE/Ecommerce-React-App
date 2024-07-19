import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Sameer Ahmed E-commerce App</h1>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" style={styles.link}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout" style={styles.link}>
            Checkout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em',
    backgroundColor: '#333',
    color: '#000',
  },
  title: {
    margin: 0,
    color: '#fff',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1em',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
