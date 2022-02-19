import QuoteForm from "../components/quotes/QuoteForm";

import { useHistory } from 'react-router-dom';

const NewQuote = () => {

    let history = useHistory();

    const isLoading = false;

    const addQuoteHandler = (object) => {
        console.log(object);
        history.push('/quotes')
    };

    return <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler} />
};

export default NewQuote;