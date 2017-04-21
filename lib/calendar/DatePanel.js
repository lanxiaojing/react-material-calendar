'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _buttons = require('../buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _DatePanel = require('./DatePanel.less');

var _DatePanel2 = _interopRequireDefault(_DatePanel);

var _tools = require('./tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePanel = function (_Component) {
    _inherits(DatePanel, _Component);

    function DatePanel() {
        _classCallCheck(this, DatePanel);

        var _this = _possibleConstructorReturn(this, (DatePanel.__proto__ || Object.getPrototypeOf(DatePanel)).call(this));

        _this.setDisabledDate = function (currMoment) {
            var disabledDate = _this.props.disabledDate;

            if (disabledDate instanceof Function) {
                return disabledDate(currMoment);
            }
            if (disabledDate.length > 2 && disabledDate.indexOf(currMoment.format('YYYY-MM-DD')) > -1) {
                return true;
            }
            if (disabledDate.length === 2 && currMoment.isAfter(disabledDate[0]) && currMoment.isBefore(disabledDate[1])) {
                return true;
            }
            return false;
        };

        _this.setupWeekLabel = function () {
            var result = [];
            var dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            dayAbbreviation.map(function (item, i) {
                result.push(React.createElement(
                    'span',
                    { style: { width: 42 }, key: i },
                    item
                ));
            });
            return result;
        };

        _this.handleClick = function (value, status) {
            _this.props.onClick && _this.props.onClick(value, status);
        };

        _this.setupDays = function () {
            var _this$props = _this.props,
                year = _this$props.year,
                month = _this$props.month,
                days = _this$props.days,
                disabledDate = _this$props.disabledDate,
                onSelect = _this$props.onSelect,
                selected = _this$props.selected;

            var result = [];

            for (var i = 1; i <= days; i++) {
                var currDate = (0, _tools.formatNumToStr)(i);
                var currMoment = (0, _tools.getMoment)(year, month, i);
                var disabled = _this.setDisabledDate(currMoment);

                var ActiveButtonProps = {
                    onClick: _this.handleClick,

                    value: currMoment,
                    label: currDate,
                    disabled: disabled,
                    selected: selected.indexOf(currMoment.format('YYYY-MM-DD')) > -1 ? true : false,

                    btnStyle: _DatePanel2.default.btn,
                    defaultStyle: _DatePanel2.default.btn_label_default,
                    selectedStyle: _DatePanel2.default.btn_selected,
                    disabledStyle: _DatePanel2.default.btn_disabled
                };
                if (i === 1) {
                    for (var j = 0; j < (0, _tools.getFirstDateOfMonth)(year, month).day(); j++) {
                        result.push(React.createElement('span', { key: 'nan' + j, className: _DatePanel2.default.dayItem }));
                    }
                }
                result.push(React.createElement(_buttons2.default, _extends({ key: currMoment }, ActiveButtonProps)));
            }
            return result;
        };

        return _this;
    }

    _createClass(DatePanel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: _DatePanel2.default.daysContainer, style: { display: this.props.visible ? 'block' : 'none' } },
                React.createElement(
                    'div',
                    { className: _DatePanel2.default.weekLabel },
                    this.setupWeekLabel()
                ),
                React.createElement(
                    'div',
                    { className: _DatePanel2.default.daysContent },
                    React.createElement(
                        'div',
                        { className: _DatePanel2.default.daysContainerPos },
                        this.setupDays()
                    )
                )
            );
        }
    }]);

    return DatePanel;
}(_react.Component);

DatePanel.propTypes = {
    disabledDate: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.string)])
};
exports.default = DatePanel;