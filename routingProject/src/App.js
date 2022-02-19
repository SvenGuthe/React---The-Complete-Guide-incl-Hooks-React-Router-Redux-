import { Redirect, Route, Switch } from 'react-router-dom';
import MainHeader from './components/mainheader/MainHeader';
import ProductDetail from './pages/productdetail/ProductDetail';
import Products from './pages/products/Products';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
