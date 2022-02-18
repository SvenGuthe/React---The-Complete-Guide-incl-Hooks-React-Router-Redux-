import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartIsShown: false,
    cartItems: [],
    changed: false
};

const findCartItemsIndex = (cartItems, title) => {
    return cartItems.findIndex(cartItem => cartItem.title === title);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            state.cartItems = action.payload.cartItems;
        },
        addItem(state, action) {
            let index = findCartItemsIndex(state.cartItems, action.payload.title)
            if (index === -1) {
                state.cartItems.push({
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price
                });
            } else {
                state.cartItems[index] = {
                    ...state.cartItems[index],
                    quantity: state.cartItems[index].quantity + 1,
                }
            }
            state.changed = true;
        },
        removeItem(state, action) {
            let index = findCartItemsIndex(state.cartItems, action.payload.title)
            if (index === -1) {
                console.log("ERROR!")
            } else {
                if (state.cartItems[index].quantity === 1) {
                    state.cartItems.splice(index, 1);
                } else {
                    state.cartItems[index] = {
                        ...state.cartItems[index],
                        quantity: state.cartItems[index].quantity - 1,
                    }
                }
            }
            state.changed = true;
        },
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown;
        }
    }
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;