import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from './../components/comments/Comments';
import HighlightedQuote from './../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const QuoteDetail = () => {

    const params = useParams();
    const routeMatch = useRouteMatch();

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(params.quoteId)
    }, [sendRequest, params.quoteId])

    if(status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if(error) {
        return <p className='centered'>{error}</p>
    }

    if(!loadedQuote.text) {
        return <NoQuotesFound />
    }

    return <section>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Route exact path={routeMatch.path}>
            <div className="centered"><Link className="btn--flat" to={`${routeMatch.url}/comments`}>Load Comments</Link></div>
        </Route>
        {/* Detailed Quote with comments */}
        <Route path={`${routeMatch.path}/comments`}>
            <Comments></Comments>
        </Route>
    </section>
};

export default QuoteDetail;