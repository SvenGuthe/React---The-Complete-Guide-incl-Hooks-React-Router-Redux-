import { useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { dummyQuotes } from "./Quotes";

const Quote = () => {

    const params = useParams();

    const quote = dummyQuotes.find(dummyQuote => dummyQuote.id === parseInt(params.quoteId))

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Comments />
        <CommentsList comments={quote.comments} />
    </Fragment>

};

export default Quote;