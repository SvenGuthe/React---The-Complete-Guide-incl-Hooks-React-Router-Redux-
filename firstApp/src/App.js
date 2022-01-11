import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React, { useState } from "react";

const App = () => {

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)

    setExpenses((prevState) => {
      return [
        expense,
        ...prevState
      ]
    })

  }

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Car Insurance',
      amount: 2294.67,
      date: new Date(2021, 3, 28)
    },
    {
      id: 2,
      title: 'Car Insurance2',
      amount: 3294.67,
      date: new Date(2021, 4, 28)
    },
    {
      id: 3,
      title: 'Car Insurance3',
      amount: 4294.67,
      date: new Date(2021, 5, 28)
    },
    {
      id: 4,
      title: 'Car Insurance4',
      amount: 5294.67,
      date: new Date(2021, 6, 28)
    }
  ])

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
