import React from 'react';
import classNames from 'classnames/bind';

import styles from './ChartBar.module.scss';

const cx = classNames.bind(styles);

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={cx('chart-bar')}>
      <div className={cx('chart-bar__inner')}>
        <div className={cx('chart-bar__fill')} style={{ height: barFillHeight }}></div>
      </div>
      <div className={cx('chart-bar__label')}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
