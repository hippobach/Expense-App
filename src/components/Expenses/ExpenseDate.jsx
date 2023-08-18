import React from 'react';
import classNames from 'classnames/bind';
import styles from './ExpenseDate.module.scss';

const cx = classNames.bind(styles);

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={cx('expense-date')}>
      <div className={cx('expense-month')}>{month}</div>
      <div className={cx('expense-year')}>{year}</div>
      <div className={cx('expense-day')}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
