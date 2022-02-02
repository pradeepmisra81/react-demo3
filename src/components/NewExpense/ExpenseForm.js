import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValidTitle, setIsValidTitle] = useState(true);
    const [isValidAmount, setIsValidAmount] = useState(true);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredTitle.trim().length === 0 ) {
            setIsValidTitle(false);
            return;
        }

        if (enteredAmount.trim().length === 0 ) {
            setIsValidAmount(false);
            return;
        }
        //const amountNum = Math.floor(enteredAmount);
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    

    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label style={{color: !isValidTitle ? "red":"black"}}>Title</label>
                <input 
                type='text' 
                value={enteredTitle}
                maxLength={50}
                placeholder="Enter title"
                onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label style={{color: !isValidAmount ? "red":"black"}}>Amount</label>
                <input 
                type='number' 
                min="0.01" 
                step="0.01" 
                value={enteredAmount}
                max="10000000.00"
                pattern="[+-]?\d+(?:[.,]\d+)?"
                placeholder="Enter amount"
                onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type='date' 
                min="2018-01-01" 
                max="2022-12-31" 
                value={enteredDate}
                onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;