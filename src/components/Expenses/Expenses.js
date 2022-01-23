import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear,setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);

    }

    const filteredExpensed = props.items.filter( (expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesListContent = <p> No expensed found.</p>;

    if(filteredExpensed.length > 0) {
      expensesListContent = filteredExpensed.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
    }
    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expensesListContent}
      </Card>
      </div>
    );

}

export default Expenses;