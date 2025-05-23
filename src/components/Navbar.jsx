import React from 'react'
import { Link } from 'react-router-dom';

function Narbar() {
  return (
    <nav>
    <h1>Shopping Cart</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
  )
}

export default Narbar;
