import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, date, amount }) => { // const {title, date, amount} = props;

    const [itemTitle, setItemTitle] = useState(title);

    const clickHandler = () => {
        setItemTitle("Updated!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{itemTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem