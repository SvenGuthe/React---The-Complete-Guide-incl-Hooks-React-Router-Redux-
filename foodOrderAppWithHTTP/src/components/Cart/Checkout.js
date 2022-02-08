import classes from './Checkout.module.css';
import { useRef } from 'react';
import { useState } from 'react/cjs/react.development';

const isEmpty = (val) => val.trim() === '';
const isFiveChars = (val) => val.trim().length === 5;

const Checkout = (props) => {
    const nameInput = useRef();
    const streetInput = useRef();
    const postalCodeInput = useRef();
    const cityInput = useRef();

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostalCode = postalCodeInput.current.value;
        const enteredCity = cityInput.current.value;

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        });

    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInput} />
                {!formInputsValidity.name && <p>Not Valid</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInput} />
                {!formInputsValidity.street && <p>Not Valid</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInput} />
                {!formInputsValidity.postalCode && <p>Not Valid</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInput} />
                {!formInputsValidity.city && <p>Not Valid</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;