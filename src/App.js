import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const STATIC_EXPENSES = [
  {
    id: 'e1',
    title: 'Kitchen Item',
    amount: 10000,
    date: new Date(2021, 6, 20)
  },
  {
    id: 'e2',
    title: "Ayushmaan's Tution Fees",
    amount: 6000,
    date: new Date(2021, 7, 22)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 12200,
    date: new Date(2021, 11, 15)
  },
  {
    id: 'e4',
    title: 'Mobile Recharge',
    amount: 1200,
    date: new Date(2022, 0, 10)
  },
  {
    id: 'e5',
    title: 'Tatasky Recharge',
    amount: 600,
    date: new Date(2022, 0, 10)
  },
  {
    id: 'e6',
    title: 'Indane Gas Booking',
    amount: 903,
    date: new Date(2022, 0, 11)
  },
];

const App = () => {

  const [expenses,setExpenses] = useState(STATIC_EXPENSES);

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
      let updatedExpenses = [expense,...prevExpenses];
      //console.log("In setExpenses\n");
      //console.log(updatedExpenses);
      return updatedExpenses;
    });
  };

  //console.log(expenses);

  return (
    <div>
      <p>Let's use the below form to add new expense in the Expense List below the form</p>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      <h2>Hi, Pradeep</h2>
      <p>Let's start the Expense App in ReactJS</p>
    </div>
  );
};

export default App;
