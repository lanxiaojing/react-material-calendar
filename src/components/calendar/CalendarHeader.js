import React from 'react';
import style from './style/CalendarHeader.less';

const CalendarHeader = (props) => {
  const { year, month, openYearPanel, openMonthPanel } = props;
  return (
    <div className={ style.header }>
      <div className={ style.yearContainer }>
        <div className={ style.year } onClick={ openYearPanel && openYearPanel.bind(this, year) }>
          <span style={ { cursor: 'pointer', width: '100%' } }>{ year }</span>
        </div>
      </div>
      <div className={ style.monthContainer }>
        <div className={ style.month } onClick={ openMonthPanel && openMonthPanel.bind(this, month) }>
          <span style={ { cursor: 'pointer', width: '100%', display: 'block' } }>{ month }</span>
        </div>
      </div>
    </div>
    );
}

export default CalendarHeader