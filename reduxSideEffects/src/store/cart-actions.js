import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async() => {
            const response = await fetch('https://react-http-e35a5-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({cartItems: cartData || []}));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }))
        }
    };
}

export const sendCartData = (cartItems) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-e35a5-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { method: 'PUT', body: JSON.stringify(cartItems) });

            if (!response.ok) {
                throw new Error("Error")
            }
        }

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Send cart data successfully!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }

    };
};