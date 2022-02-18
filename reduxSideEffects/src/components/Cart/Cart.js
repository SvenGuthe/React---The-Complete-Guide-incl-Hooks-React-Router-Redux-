import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartState = useSelector(state => state.cart)

  const cartItems = cartState.cartItems.map(cartItem => {
    let total = cartItem.quantity * cartItem.price
    return <CartItem key = {Math.random()} item = {{ 
      title: cartItem.title,
      quantity: cartItem.quantity,
      price: cartItem.price,
      total: total
     }}/>
  })

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cartItems }
      </ul>
    </Card>
  );
};

export default Cart;
