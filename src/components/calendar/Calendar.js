import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';
import DatePanel from './DatePanel';
import MonthPanel from './MonthPanel';
import YearPanel from './YearPanel';

import { monthList, monthLongList, monthZhList, formatNumToStr, getFirstDateOfMonth, getLastDateOfMonth, getDays, getMoment } from './tools';

import style from './style/Calendar.less';

export default class Calendar extends React.Component {
    static propTypes = {
        onChangeYear: PropTypes.func,
        onChangeMonth: PropTypes.func,
        onSelectDate: PropTypes.func,

        showFooter: PropTypes.bool,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,

        defaultValue: PropTypes.instanceOf(moment),

        selectedMode: PropTypes.oneOf(['mutiple', 'single', 'range']), // 用来控制单选和多选，连选

        mode: PropTypes.oneOf(['horizontal', 'vertical']),

        yearRange: PropTypes.number,
        yearBeginFrom: PropTypes.number,

        monthMode: PropTypes.oneOf(['zh', 'en_long', 'en']),

        disabledDate: PropTypes.func,
    }

    static defaultProps = {
        showFooter: true,
    
        mode: 'vertical', // todo： 日历显示格式，横向或纵向
        selectedMode: 'mutiple',
        monthMode: 'zh',
        yearRange: 0,
        yearBeginFrom: moment().year(),
        disabledSelectYear: false,
        disabledSelectMonth: false,
        
        selectedStyle: {},
        defaultStyle: {},
        disabledStyle: {},
        btnStyle: {}
    }

    constructor(props) {
        super();
    }

    state = {
        daysPanelVisible: true,
        monthPanelVisible: false,
        yearPanelVisible: false,

        currDate: '',
        selectedYear: 2017,

        selectedMonth: 0,

        currentSelectedDate: 0,
        selectedDateArr: [],

        currMoment: {}
    }
    

    componentDidMount() {
        // this.setState({
        //     selectedYear: this.props.defaultValue ? this.props.defaultValue.year() : moment().year(),
        //     selectedMonth: this.props.defaultValue ? this.props.defaultValue.month() : moment().month(),
        //     currentSelectedDate: this.props.defaultValue ? this.props.defaultValue.date() : moment().date(),
        //     selectedDateArr: this.props.selectedDate ? this.props.selectedDate : [],
        // })
    }

    componentWillReceiveProps(nextProps) {
       this.setState({
            selectedYear: nextProps.defaultValue ? nextProps.defaultValue.year() : moment().year(),
            selectedMonth: nextProps.defaultValue ? nextProps.defaultValue.month() : moment().month(),
            currentSelectedDate: nextProps.defaultValue ? nextProps.defaultValue.date() : moment().date(),
            selectedDateArr: nextProps.selectedDate ? nextProps.selectedDate : [],
        })
    }

    openYearPanel = () => {
        if (this.state.daysPanelVisible || this.state.monthPanelVisible) {
            this.setState({
                daysPanelVisible: false,
                monthPanelVisible: false,
                yearPanelVisible: true
            })
        } else {
            this.setState({
                daysPanelVisible: true,
                monthPanelVisible: false,
                yearPanelVisible: false
            })
        }
    }

    openMonthPanel = () => {
        if (this.state.daysPanelVisible || this.state.yearPanelVisible) {
            this.setState({
                daysPanelVisible: false,
                monthPanelVisible: true,
                yearPanelVisible: false
            })
        } else {
            this.setState({
                daysPanelVisible: true,
                monthPanelVisible: false,
                yearPanelVisible: false
            })
        }

    }

    handleSelectYear = (year) => {
        let month = this.state.selectedMonth;
        while (month < 12) {
            if (getLastDateOfMonth(year, month).isBefore(moment())) {
                month++
            } else {
                break
            }
        }
        this.setState({
            selectedYear: year,
            selectedMonth: month,
            daysPanelVisible: true,
            monthPanelVisible: false,
            yearPanelVisible: false
        })

        this.props.onChangeYear && this.props.onChangeYear(year, getMoment(year, this.state.selectedMonth, this.state.currentSelectedDate))
    }

    handleSelectMonth = (month) => {
        this.setState({
            selectedMonth: month,
            daysPanelVisible: true,
            monthPanelVisible: false,
            yearPanelVisible: false
        })
        this.props.onChangeMonth && this.props.onChangeMonth(month, getMoment(this.state.selectedYear, month, this.state.currentSelectedDate))
    }

    setDisabledMonth = (currentMonth, year) => {
        const currYear = year || this.state.selectedYear;
        if (!this.props.disabledDate) return

        return this.props.disabledDate(getLastDateOfMonth(currYear, currentMonth))
    }

    handleMutipleSelect = (date, selected) => {
        let arr = this.state.selectedDateArr.slice(0);
        if (selected) {
            arr.push(date.format('YYYY-MM-DD'));
        } else {
            arr.splice(arr.indexOf(date.format('YYYY-MM-DD')), 1);
        }
        
        this.setState({
            selectedDateArr: arr
        });
        this.props.onSelectDate && this.props.onSelectDate(date, selected);
    }

    handleSingleSelect = (date, selected) => {
        if (selected) {
            this.setState({
                selectedDateArr: [date.format('YYYY-MM-DD')]
            });
        } else {
            this.setState({
                selectedDateArr: []
            });
        }
        this.props.onSelectDate && this.props.onSelectDate(date, selected);
    }

    handleRangeSelect = () => { // todo

    }

    // footer click cancel
    onCancel = () => {
        this.props.onCancel && this.props.onCancel()
    }

    // footer click ok 应该传什么值回去？
    onOk = () => {
        this.props.onOk && this.props.onOk()
    }

    render() {
        const {daysPanelVisible, yearPanelVisible, monthPanelVisible, selectedYear, selectedMonth, selectedDateArr} = this.state;
        const { onChangeYear, onChangeMonth, defaultValue, monthMode, selectedMode, disabledDate, yearRange, yearBeginFrom, showFooter, selectedStyle, disabledSelectMonth, disabledSelectYear } = this.props;
        
        let handleDateClick = this.handleMutipleSelect;
        if (selectedMode === 'single') {
            handleDateClick = this.handleSingleSelect;
        } else if (selectedMode === 'range') {
            handleDateClick = this.handleRangeSelect;
        }

        const CalendarHeaderProps = {
            year: selectedYear,
            month: monthMode === 'en_long' ? monthLongList[selectedMonth] : monthMode === 'zh' ? monthZhList[selectedMonth] : monthList[selectedMonth],
            openYearPanel: disabledSelectYear ? false : this.openYearPanel,
            openMonthPanel: disabledSelectMonth ? false : this.openMonthPanel,
        }
        const YearPanelProps = {
            yearRange: yearRange,
            yearBeginFrom: yearBeginFrom,
            currentSelected: selectedYear ? selectedYear : moment().year(),
            onSelect: this.handleSelectYear
        }
        const MonthPanelProps = {
            currentSelected: selectedMonth,
            type: 'zh',
            onSelect: this.handleSelectMonth,
            disabled: this.setDisabledMonth
        }
        const DatePanelProps = {
            selected: selectedDateArr,
            year: selectedYear,
            month: selectedMonth,
            days: getDays(selectedYear, selectedMonth),
            onClick: handleDateClick,
            disabledDate: disabledDate,
            selectedStyle: selectedStyle
        }

        const CalendarFooterProps = {
            onCancel: this.onCancel,
            onOk: this.onOk
        }
        return (
            <div className={ style.container }>
                <CalendarHeader { ...CalendarHeaderProps}/>
                <div style={ { display: 'flex', flexDirection: 'column' } }></div>
                <div className={ style.body }>
                  <DatePanel {...DatePanelProps} visible={ daysPanelVisible } />
                  <YearPanel {...YearPanelProps} visible={ yearPanelVisible } />
                  <MonthPanel {...MonthPanelProps} visible={ monthPanelVisible } />
                </div>
                <CalendarFooter {...CalendarFooterProps} visible={ showFooter } />
            </div>
        );
        }
}