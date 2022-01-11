import { useState } from 'react';

import classes from './AddUser.module.css';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                'title': 'Invalid Input',
                'message': 'Please enter a valid name and age.'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                'title': 'Invalid Age',
                'message': 'Please enter a valid age (> 0).'
            });
            return;
        }

        console.log(enteredUserName, enteredAge);

        props.onAddUser({
            'name': enteredUserName,
            'age': enteredAge,
            'id': Math.random().toString()
        })

        setEnteredUserName('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const resetErrorHandler = () => {
        setError();
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onResetError={resetErrorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUserName} onChange={usernameChangeHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );

}

export default AddUser;