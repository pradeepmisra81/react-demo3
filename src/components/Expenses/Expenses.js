import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
//import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    let expenseItemIdForDeletion;
    // const [filteredYear,setFilteredYear] = useState('2022');
    // const filteredExpense = props.items.filter( (expense) => {
    //   return expense.date.getFullYear().toString() === filteredYear;
    // });

    const [updatedExpensesAfterDeletion,setUpdatedExpensesAfterDeletion] = useState(props.items);
    

    // const filterChangeHandler = (selectedYear) => {
    //   setFilteredYear(selectedYear);

    // }

    const deleteExpenseItemHandler = (itemId) => {
      console.log("itemId in deleteExpenseItemHandler:");
      console.log(itemId);
      expenseItemIdForDeletion = itemId;
      console.log("expenseItemIdForDeletion in deleteExpenseItemHandler:");
      console.log(expenseItemIdForDeletion);
      const updatedExpense = updatedExpensesAfterDeletion.filter( (expense) => {
        //return expense.id !== deletedItemId;
        console.log("expenseItemIdForDeletion:");
        console.log(expenseItemIdForDeletion);
        return expense.id !== expenseItemIdForDeletion;
      });
      console.log("updatedExpense:");
      console.log(updatedExpense);
      setUpdatedExpensesAfterDeletion(updatedExpense);
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
      <ExpensesChart expenses={updatedExpensesAfterDeletion}/>
      <ExpensesList items={updatedExpensesAfterDeletion} onDeleteItem={deleteExpenseItemHandler}/>
    </Card>
    </div>
  );

}

export default Expenses;