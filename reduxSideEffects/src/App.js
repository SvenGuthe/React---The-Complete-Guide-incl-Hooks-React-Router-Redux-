import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {

  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const uiState = useSelector(state => state.ui)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cartState.changed) {
      dispatch(sendCartData(cartState.cartItems));
    }
    
  }, [cartState.cartItems, cartState.changed, dispatch]);

  return (
    <Fragment>
      {uiState.notification && <Notification status={uiState.notification.status} title={uiState.notification.title} message={uiState.notification.message} /> }
      <Layout>
        {cartState.cartIsShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
