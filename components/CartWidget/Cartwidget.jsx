import {AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import './cartwidget.css';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };
  
  // Cantidad total de productos en el carrito
  const totalItems = cartItems.reduce((total, item) => total + parseInt(item.quantity), 0);

  const handleItemQuantityChange = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  

  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <AiOutlineShoppingCart className="cart-icon" />
        <span className="cart-notificacion">{totalItems.toString()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;