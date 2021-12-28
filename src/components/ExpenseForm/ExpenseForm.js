import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [formVisibile, setFormVisible] = useState(false);

    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        toggleFormVisibleHandler();
    }

    const toggleFormVisibleHandler = () => {
        setFormVisible((prevState) => {
            return !prevState
        })
    }

    let form = <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input value={enteredTitle} onChange={titleChangeHandler} type='text' />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input value={enteredAmount} onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input value={enteredDate} onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31' />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={toggleFormVisibleHandler}>
                Cancel
            </button>
            <button type="submit">
                Add Expense
            </button>
        </div>
    </form>

    let addButton = <button type="button" onClick={toggleFormVisibleHandler}>
        Add New Expense
    </button>

    if (formVisibile) {
        return form;
    } else {
        return addButton;
    }

}

export default ExpenseForm;