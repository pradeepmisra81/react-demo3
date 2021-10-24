import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>19 Oct 2021</div>
            <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$100</div>
            </div>
        </div>
    );
}

export default ExpenseItem;