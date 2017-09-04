import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ActiveButton from '../buttons';

import style from './style/DatePanel.less';
import { formatNumToStr, getFirstDateOfMonth, getMoment } from './tools';


class DatePanel extends React.Component {
    constructor() {
        super();
    }
    static propTypes = {
        disabledDate: PropTypes.oneOfType([
            PropTypes.func, PropTypes.arrayOf(PropTypes.string)
        ])
    }
    setDisabledDate = (currMoment) => {
        const { disabledDate } = this.props;
        if (!disabledDate) {
            return
        }
        if (disabledDate instanceof Function) {
            return disabledDate(currMoment);
        }
        if (disabledDate.length > 2 && disabledDate.indexOf(currMoment.format('YYYY-MM-DD')) > -1) {
            return true
        }
        if (disabledDate.length === 2 && currMoment.isAfter(disabledDate[0]) && currMoment.isBefore(disabledDate[1])) {
            return true
        }
        return false
    }
    setupWeekLabel = () => {
        const result = [];
        const dayAbbreviation = [
            'S',
            'M',
            'T',
            'W',
            'T',
            'F',
            'S'
        ];
        dayAbbreviation.map(function(item, i) {
            result.push(
                <span style={ { width: 42 } } key={ i }>{ item }</span>
            )
        })
        return result
    }
    handleClick = (value, status) => {
        this.props.onClick && this.props.onClick(value, status)
    }
    setupDays = () => {
        const {year, month, days, disabledDate, onSelect, selected} = this.props;
        let result = [];

        for (let i = 1; i <= days; i++) {
            const currDate = formatNumToStr(i);
            const currMoment = getMoment(year, month, i);
            const disabled = this.setDisabledDate(currMoment);

            const ActiveButtonProps = {
                onClick: this.handleClick,

                value: currMoment,
                label: currDate,
                disabled: disabled,
                selected: selected.indexOf(currMoment.format('YYYY-MM-DD')) > -1 ? true : false,

                btnStyle: style.btn,
                defaultStyle: style.btn_label_default,
                selectedStyle: style.btn_selected,
                disabledStyle: style.btn_disabled,
                disabledSelctedStyle: style.btn_disabled_selected
            }
            if (i === 1) {
                for (let j = 0; j < getFirstDateOfMonth(year, month).day(); j++) {
                    result.push(
                        <span key={ 'nan' + j } className={ style.dayItem }></span>
                    )
                }

            }
            result.push(<ActiveButton key={ currMoment } {...ActiveButtonProps}/>)
        }
        return result
    }
    render() {
        return (
            <div className={ style.daysContainer } style={ { display: this.props.visible ? 'block' : 'none' } }>
              <div className={ style.weekLabel }>
                { this.setupWeekLabel() }
              </div>
              <div className={ style.daysContent }>
                <div className={ style.daysContainerPos }>
                  { this.setupDays() }
                </div>
              </div>
            </div>
            );
    }
}

export default DatePanel;
