import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        {/* Redirect to Quotes */}
        <Redirect exact path="/" to="/quotes"/>
        {/* Quotes */}
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        {/* Detailed Quote */}
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        {/* New Quote */}
        <Route exact path="/new-quote">
          <NewQuote />
        </Route>
        {/* Not Found */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
