import React from 'react'
import './Navbar.css'

interface Props {
  cartCount: number
}

const Navbar: React.FC<Props> = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">🍔 TASTY BURGER</div>
      <ul className="nav-links">
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">OUR MENU</a></li>
        <li><a href="#">SHOP</a></li>
        <li><a href="#">CONTACT</a></li>
        <li className="cart-badge">
          🛒 {cartCount} items
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

