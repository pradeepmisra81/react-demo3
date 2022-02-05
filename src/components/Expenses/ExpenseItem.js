import React , { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        const enteredNewTitle = prompt('Please enter new title of this expense item');
        if (enteredNewTitle !== null && enteredNewTitle.length > 0) {
            setTitle(enteredNewTitle);
            props.onUpdateTitle( props.keyId, enteredNewTitle );
        }
    };

    const deleteItemHandler = () => {
        const deletedItemId = props.keyId;
        props.onDelete(deletedItemId);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">Rs. {props.amount}</div>
            </div>
            <div className="edit-expense button">
            <button type="button" onClick={clickHandler}>Update Title</button>
            </div>
            <div className="delete-expense button">
            <button type="button" onClick={deleteItemHandler}>Delete</button>
            </div>
            
        </Card>
    );
}

export default ExpenseItem;