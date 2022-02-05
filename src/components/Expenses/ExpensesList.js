import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    };

    const deleteHandler = (item) => {
        props.onDeleteItem(item);
    };

    const updateTitleHandler = ( expenseId, updatedTitle ) => {
        props.onUpdateTitle( expenseId, updatedTitle );
    };

    return <ul className="expenses-list">
        {props.items.map((expense) => (  
        <ExpenseItem 
        key={expense.id}
        keyId={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        onDelete={deleteHandler}
        onUpdateTitle={updateTitleHandler}
        />
        ))}
    </ul>
}

export default ExpensesList;