import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

function ExpenseItem(props) {
  // funtion clickhandler
  const [amount, setTitle] = useState(props.amount);

  const clickHandler = () => {
    setTitle('100$');
    console.log(amount);
    
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <button onClick={clickHandler}>Delete</button>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
