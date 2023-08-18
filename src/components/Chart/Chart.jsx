import React from 'react';
import classNames from 'classnames/bind';

import ChartBar from './ChartBar';
import styles from './Chart.module.scss';

const cx = classNames.bind(styles);

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className={cx('chart')}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
