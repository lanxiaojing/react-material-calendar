'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _CalendarHeader = require('./CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarFooter = require('./CalendarFooter');

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _DatePanel = require('./DatePanel');

var _DatePanel2 = _interopRequireDefault(_DatePanel);

var _MonthPanel = require('./MonthPanel');

var _MonthPanel2 = _interopRequireDefault(_MonthPanel);

var _YearPanel = require('./YearPanel');

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _tools = require('./tools');

var _Calendar = require('./Calendar.less');

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this));

        _this.state = {
            daysPanelVisible: true,
            monthPanelVisible: false,
            yearPanelVisible: false,

            currDate: '',
            selectedYear: 2017,

            selectedMonth: 0,

            currentSelectedDate: 0,
            selectedDateArr: [],

            currMoment: {}
        };

        _this.openYearPanel = function () {
            if (_this.state.daysPanelVisible || _this.state.monthPanelVisible) {
                _this.setState({
                    daysPanelVisible: false,
                    monthPanelVisible: false,
                    yearPanelVisible: true
                });
            } else {
                _this.setState({
                    daysPanelVisible: true,
                    monthPanelVisible: false,
                    yearPanelVisible: false
                });
            }
        };

        _this.openMonthPanel = function () {
            if (_this.state.daysPanelVisible || _this.state.yearPanelVisible) {
                _this.setState({
                    daysPanelVisible: false,
                    monthPanelVisible: true,
                    yearPanelVisible: false
                });
            } else {
                _this.setState({
                    daysPanelVisible: true,
                    monthPanelVisible: false,
                    yearPanelVisible: false
                });
            }
        };

        _this.handleSelectYear = function (year) {
            var month = _this.state.selectedMonth;
            while (month < 12) {
                if ((0, _tools.getLastDateOfMonth)(year, month).isBefore((0, _moment2.default)())) {
                    month++;
                } else {
                    break;
                }
            }
            _this.setState({
                selectedYear: year,
                selectedMonth: month,
                daysPanelVisible: true,
                monthPanelVisible: false,
                yearPanelVisible: false
            });

            _this.props.onChangeYear && _this.props.onChangeYear(year, (0, _tools.getMoment)(year, _this.state.selectedMonth, _this.state.currentSelectedDate));
        };

        _this.handleSelectMonth = function (month) {
            _this.setState({
                selectedMonth: month,
                daysPanelVisible: true,
                monthPanelVisible: false,
                yearPanelVisible: false
            });
            _this.props.onChangeMonth && _this.props.onChangeMonth(month, (0, _tools.getMoment)(_this.state.selectedYear, month, _this.state.currentSelectedDate));
        };

        _this.setDisabledMonth = function (currentMonth, year) {
            var currYear = year || _this.state.selectedYear;
            return _this.props.disabledDate((0, _tools.getLastDateOfMonth)(currYear, currentMonth));
        };

        _this.handleMutipleSelect = function (date, selected) {
            var arr = _this.state.selectedDateArr;
            if (selected) {
                arr.push(date.format('YYYY-MM-DD'));
            } else {

                arr.splice(arr.indexOf(date.format('YYYY-MM-DD')), 1);
            }
            _this.setState({
                selectedDateArr: arr
            });
            _this.props.onSelectDate && _this.props.onSelectDate(date, selected);
        };

        _this.handleSingleSelect = function (date, selected) {
            if (selected) {
                _this.setState({
                    selectedDateArr: [date.format('YYYY-MM-DD')]
                });
            } else {
                _this.setState({
                    selectedDateArr: []
                });
            }
            _this.props.onSelectDate && _this.props.onSelectDate(date, selected);
        };

        _this.handleRangeSelect = function () {} // todo

        // footer click cancel
        ;

        _this.onCancel = function () {
            _this.props.onCancel && _this.props.onCancel();
        };

        _this.onOk = function () {
            _this.props.onOk && _this.props.onOk();
        };

        return _this;
    }

    _createClass(Calendar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                selectedYear: this.props.defaultValue ? this.props.defaultValue.year() : (0, _moment2.default)().year(),
                selectedMonth: this.props.defaultValue ? this.props.defaultValue.month() : (0, _moment2.default)().month(),
                currentSelectedDate: this.props.defaultValue ? this.props.defaultValue.date() : (0, _moment2.default)().date()
            });
        }

        // footer click ok 应该传什么值回去？

    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                daysPanelVisible = _state.daysPanelVisible,
                yearPanelVisible = _state.yearPanelVisible,
                monthPanelVisible = _state.monthPanelVisible,
                selectedYear = _state.selectedYear,
                selectedMonth = _state.selectedMonth,
                selectedDateArr = _state.selectedDateArr;
            var _props = this.props,
                onChangeYear = _props.onChangeYear,
                onChangeMonth = _props.onChangeMonth,
                defaultValue = _props.defaultValue,
                monthMode = _props.monthMode,
                selectedMode = _props.selectedMode,
                disabledDate = _props.disabledDate,
                yearRange = _props.yearRange,
                yearStartFrom = _props.yearStartFrom,
                showFooter = _props.showFooter,
                selectedStyle = _props.selectedStyle;


            var handleDateClick = this.handleMutipleSelect;
            if (selectedMode === 'single') {
                handleDateClick = this.handleSingleSelect;
            } else if (selectedMode === 'range') {
                handleDateClick = this.handleRangeSelect;
            }

            var CalendarHeaderProps = {
                year: selectedYear,
                month: monthMode === 'en_long' ? _tools.monthLongList[selectedMonth] : monthMode === 'zh' ? _tools.monthZhList[selectedMonth] : _tools.monthList[selectedMonth],
                openYearPanel: this.openYearPanel,
                openMonthPanel: this.openMonthPanel
            };
            var YearPanelProps = {
                yearRange: yearRange,
                yearStartFrom: yearStartFrom,
                currentSelected: selectedYear ? selectedYear : (0, _moment2.default)().year(),
                onSelect: this.handleSelectYear
            };
            var MonthPanelProps = {
                currentSelected: selectedMonth,
                type: 'zh',
                onSelect: this.handleSelectMonth,
                disabled: this.setDisabledMonth
            };
            var DatePanelProps = {
                selected: selectedDateArr,
                year: selectedYear,
                month: selectedMonth,
                days: (0, _tools.getDays)(selectedYear, selectedMonth),
                onClick: handleDateClick,
                disabledDate: disabledDate,
                selectedStyle: selectedStyle
            };

            var CalendarFooterProps = {
                onCancel: this.onCancel,
                onOk: this.onOk
            };
            return React.createElement(
                'div',
                { className: _Calendar2.default.container },
                React.createElement(_CalendarHeader2.default, CalendarHeaderProps),
                React.createElement('div', { style: { display: 'flex', flexDirection: 'column' } }),
                React.createElement(
                    'div',
                    { className: _Calendar2.default.body },
                    React.createElement(_DatePanel2.default, _extends({}, DatePanelProps, { visible: daysPanelVisible })),
                    React.createElement(_YearPanel2.default, _extends({}, YearPanelProps, { visible: yearPanelVisible })),
                    React.createElement(_MonthPanel2.default, _extends({}, MonthPanelProps, { visible: monthPanelVisible }))
                ),
                React.createElement(_CalendarFooter2.default, _extends({}, CalendarFooterProps, { visible: showFooter }))
            );
        }
    }]);

    return Calendar;
}(_react.Component);

Calendar.propTypes = {
    onChangeYear: _react.PropTypes.func,
    onChangeMonth: _react.PropTypes.func,
    onSelectDate: _react.PropTypes.func,

    showFooter: _react.PropTypes.bool,
    onOk: _react.PropTypes.func,
    onCancel: _react.PropTypes.func,

    defaultValue: _react.PropTypes.instanceOf(_moment2.default),

    selectedMode: _react.PropTypes.oneOf(['mutiple', 'single', 'range']), // 用来控制单选和多选，连选

    mode: _react.PropTypes.oneOf(['horizontal', 'vertical']),

    yearRange: _react.PropTypes.number,
    yearStartFrom: _react.PropTypes.number,

    monthMode: _react.PropTypes.oneOf(['zh', 'en_long', 'en']),

    disabledDate: _react.PropTypes.func
};
Calendar.defaultProps = {
    showFooter: true,

    mode: 'vertical', // todo： 日历显示格式，横向或纵向
    selectedMode: 'mutiple',
    monthMode: 'zh',
    yearRange: 20,
    yearStartFrom: (0, _moment2.default)().year()
};
exports.default = Calendar;