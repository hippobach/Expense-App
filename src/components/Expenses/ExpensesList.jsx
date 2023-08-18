// Library
import React from 'react';
import classNames from 'classnames/bind';

// Configuration Files
import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.scss';

const cx = classNames.bind(styles);

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={cx('fallback')}>Found no expenses.</h2>;
  }

  return (
    <ul className={cx('list')}>
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
