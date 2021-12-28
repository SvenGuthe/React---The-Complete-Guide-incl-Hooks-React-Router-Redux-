import './Expenses.css';

import React, { useState } from 'react';

import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const setYearFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(filteredYear);
    }

    const filteredData = props.data.filter(element => element.date.getFullYear().toString() === filteredYear)

    return <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={setYearFilterHandler} />
        <ExpensesChart expenses={filteredData} />
        <ExpensesList filteredData={filteredData} />
    </Card>;

}

export default Expenses;