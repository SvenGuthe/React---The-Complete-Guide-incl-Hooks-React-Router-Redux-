import QuoteList from "../components/quotes/QuoteList";

export const dummyQuotes = [
    {id: 1, author: 'Test1Author', text: 'Test1Quote', comments: [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'}
    ]},
    {id: 2, author: 'Test2Author', text: 'Test2Quote', comments: [
        {id: 1, text: 'Comment 3'}
    ]},
    {id: 3, author: 'Test3Author', text: 'Test3Quote', comments: [

    ]}
]

const Quotes = (props) => {

    return <QuoteList quotes={dummyQuotes} />

};

export default Quotes;