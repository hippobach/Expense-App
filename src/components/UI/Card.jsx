import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const Card = (props) => {
  return <div className={cx('card', props.className)}>{props.children}</div>;
};

export default Card;
