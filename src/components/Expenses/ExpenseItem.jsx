import React from 'react';
import classNames from 'classnames/bind';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import styles from './ExpenseItem.module.scss';

const cx = classNames.bind(styles);

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={cx('container')}>
        <ExpenseDate date={props.date} />
        <div className={cx('description')}>
          <h2>{props.title}</h2>
          <div className={cx('price')}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
