import ExpenseItem from "../ExpenseItem/ExpenseItem"
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.filteredData.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    } else {
        return <ul className="expenses-list">
            {props.filteredData.map(element => {
                return <ExpenseItem key={element.id} expenseDate={element.date} expenseTitle={element.title} expenseAmount={element.amount} />
            })}
        </ul>
    }

}

export default ExpensesList;