import { useState, useRef } from 'react';

import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                'title': 'Invalid Input',
                'message': 'Please enter a valid name and age.'
            });
            return;
        }

        if (+enteredUserAge < 1) {
            setError({
                'title': 'Invalid Age',
                'message': 'Please enter a valid age (> 0).'
            });
            return;
        }

        console.log(enteredName, enteredUserAge);

        props.onAddUser({
            'name': enteredName,
            'age': enteredUserAge,
            'id': Math.random().toString()
        })

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    }

    const resetErrorHandler = () => {
        setError();
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onResetError={resetErrorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' ref={ageInputRef}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    );

}

export default AddUser;