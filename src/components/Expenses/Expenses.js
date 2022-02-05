import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

    const deleteExpenseItemHandler = (itemId) => {
      props.onDeleteExpense(itemId);
    }

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    // return (
    //     <div>
    //     <Card className='expenses'>
    //     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    //     <ExpensesChart expenses={updatedExpensesAfterDeletion}/>
    //     <ExpensesList items={updatedExpensesAfterDeletion} onDeleteItem={deleteExpenseItemHandler}/>
    //   </Card>
    //   </div>
    // );

    return (
      <div>
      <Card className='expenses'>
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} onDeleteItem={deleteExpenseItemHandler}/>
    </Card>
    </div>
  );

}

export default Expenses;