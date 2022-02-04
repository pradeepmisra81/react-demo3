import React from 'react';

import Card from '../UI/Card';
import './Expenses.css';
//import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    
    const deleteExpenseItemHandler = (itemId) => {
      props.onDeleteExpense(itemId);
    }
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
      <ExpensesChart expenses={props.items}/>
      <ExpensesList items={props.items} onDeleteItem={deleteExpenseItemHandler}/>
    </Card>
    </div>
  );

}

export default Expenses;