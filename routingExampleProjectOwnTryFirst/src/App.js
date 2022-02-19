import { Redirect, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import NewQuote from "./pages/NewQuote";
import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";


function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>

      <Layout>
        { /* Redirect to All Quotes */}
        <Redirect path="/" to={"/quotes"} exact />

        { /* All Quotes */}
        <Route path="/quotes" exact>
          <Quotes />
        </Route>

        { /* Adding a new Quote */}
        <Route path="/new-quotes" exact>
          <NewQuote />
        </Route>

        { /* Quote Detail Page */}
        <Route path="/quotes/:quoteId">
          <Quote />
        </Route>
      </Layout>

    </div>
  );
}

export default App;
