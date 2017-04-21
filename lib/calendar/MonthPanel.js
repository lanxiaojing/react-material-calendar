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

var _Calendar = require('./Calendar.less');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _MonthPanel = require('./MonthPanel.less');

var styles = _interopRequireWildcard(_MonthPanel);

var _tools = require('./tools');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPanel = function (_Component) {
    _inherits(MonthPanel, _Component);

    function MonthPanel() {
        _classCallCheck(this, MonthPanel);

        var _this = _possibleConstructorReturn(this, (MonthPanel.__proto__ || Object.getPrototypeOf(MonthPanel)).call(this));

        _this.getStyles = function (childProps, childState) {
            var selected = childProps.selected,
                value = childProps.value,
                disabled = childProps.disabled;
            var hover = childState.hover;

            return {
                button: {
                    boxSizing: 'border-box',
                    color: hover || selected ? 'rgb(0, 188, 212)' : 'rgba(0, 0, 0, 0.870588)',
                    fontSize: 14,
                    margin: '0 auto',
                    position: 'relative',
                    textAlign: 'center',
                    lineHeight: 'inherit',
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    display: 'inline-block',
                    width: '33.3%',
                    fontFamily: 'Roboto, sans-serif',
                    border: 'none',
                    backgroundColor: '#fff',
                    outline: 'none',
                    height: '25%',
                    cursor: hover ? 'pointer' : 'default'
                },
                label: {
                    alignSelf: 'center',
                    color: hover || selected ? 'rgb(0, 188, 212)' : disabled ? '#eee' : 'rgba(0, 0, 0, 0.870588)',
                    fontSize: 17,
                    fontWeight: hover ? 450 : selected ? 500 : 400,
                    position: 'relative',
                    top: -1,
                    textAlign: 'justify',
                    textJustify: 'inter-ideograph'
                }
            };
        };

        _this.setupMonthButton = function () {
            var _this$props = _this.props,
                currentSelected = _this$props.currentSelected,
                type = _this$props.type,
                onSelect = _this$props.onSelect,
                disabled = _this$props.disabled;

            var result = [];
            var list = type === 'en_long' ? _tools.monthLongList : type === 'en' ? _tools.monthList : _tools.monthZhList;
            var ActiveButtonProps = {
                btnStyle: styles.btn,
                defaultStyle: styles.label,
                selectedStyle: styles.btn_selected,
                disabledStyle: styles.btn_disabled
            };
            for (var i = 0; i < 12; i++) {
                result.push(React.createElement(_buttons2.default, _extends({ onClick: onSelect, key: i, value: i, label: list[i], selected: currentSelected === i ? true : false, disabled: disabled(i)
                }, ActiveButtonProps)));
            }
            return result;
        };

        return _this;
    }

    _createClass(MonthPanel, [{
        key: 'render',
        value: function render() {
            var visible = this.props.visible;

            return React.createElement(
                'div',
                { className: _Calendar2.default.selectPanelConstainer, style: { display: visible ? 'block' : 'none', overflowY: 'hidden' } },
                this.setupMonthButton()
            );
        }
    }]);

    return MonthPanel;
}(_react.Component);

exports.default = MonthPanel;