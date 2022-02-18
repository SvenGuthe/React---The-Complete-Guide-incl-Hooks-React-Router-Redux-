import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart)

  const cartToggleHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.cartItems.length}</span>
    </button>
  );
};

export default CartButton;
