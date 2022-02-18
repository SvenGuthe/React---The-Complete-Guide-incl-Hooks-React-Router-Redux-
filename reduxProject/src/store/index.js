import { createStore } from 'redux'

const reducer = (state = {
    counter: 0
}, action) => {

    switch(action) {
        case 'increment':
            return {
                counter : state.counter + 1
            };
        case 'decrement':
            return {
                counter : state.counter - 1
            };
        default:
            return state;
    }

};

const store = createStore(reducer)

export default store;