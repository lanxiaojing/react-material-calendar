'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YearPanel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _buttons = require('../buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _Calendar = require('./Calendar.less');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _YearPanel = require('./YearPanel.less');

var styles = _interopRequireWildcard(_YearPanel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YearPanel = exports.YearPanel = function (_Component) {
    _inherits(YearPanel, _Component);

    function YearPanel() {
        _classCallCheck(this, YearPanel);

        var _this = _possibleConstructorReturn(this, (YearPanel.__proto__ || Object.getPrototypeOf(YearPanel)).call(this));

        _this.setupYearButton = function () {
            var _this$props = _this.props,
                yearRange = _this$props.yearRange,
                currentSelected = _this$props.currentSelected,
                onSelect = _this$props.onSelect,
                yearStartFrom = _this$props.yearStartFrom;

            var ActiveButtonProps = {
                btnStyle: styles.btn,
                defaultStyle: styles.btn_label_default,
                selectedStyle: styles.btn_selected,
                disabledStyle: styles.btn_disabled,

                onClick: onSelect
            };
            var result = [];
            for (var i = 0; i < yearRange; i++) {
                result.push(React.createElement(_buttons2.default, _extends({ value: yearStartFrom + i, label: yearStartFrom + i, selected: yearStartFrom + i === currentSelected ? true : false, key: i, disabled: false }, ActiveButtonProps)));
            }
            return result;
        };

        return _this;
    }

    _createClass(YearPanel, [{
        key: 'render',
        value: function render() {
            var visible = this.props.visible;

            return React.createElement(
                'div',
                { className: _Calendar2.default.selectPanelConstainer, style: { display: visible ? 'block' : 'none' } },
                React.createElement(
                    'div',
                    { className: _Calendar2.default.panelContent },
                    this.setupYearButton()
                )
            );
        }
    }]);

    return YearPanel;
}(_react.Component);

exports.default = YearPanel;