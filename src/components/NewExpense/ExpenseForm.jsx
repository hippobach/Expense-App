// Library
import React, { useState } from 'react';
import classNames from 'classnames/bind';

// Configurtion Files
import styles from './ExpenseForm.module.scss';

const cx = classNames.bind(styles);

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={cx('controls')}>
        <div>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className={cx('actions')}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// Another Way

// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

// setUserInput({
//   ...userInput,
//   enteredTitle: event.target.value,
// });
// setUserInput((prevState) => {
//   return { ...prevState, enteredTitle: event.target.value };
// });

// setUserInput({
//   ...userInput,
//   enteredAmount: event.target.value,
// });

// setUserInput({
//   ...userInput,
//   enteredDate: event.target.value,
// });
