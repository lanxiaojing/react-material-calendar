'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _CalendarFooter = require('./CalendarFooter.less');

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarFooter = function (_Component) {
    _inherits(CalendarFooter, _Component);

    function CalendarFooter(props) {
        _classCallCheck(this, CalendarFooter);

        return _possibleConstructorReturn(this, (CalendarFooter.__proto__ || Object.getPrototypeOf(CalendarFooter)).call(this));
    }

    _createClass(CalendarFooter, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                visible = _props.visible,
                onOk = _props.onOk,
                onCancel = _props.onCancel;

            return React.createElement(
                'div',
                { className: _CalendarFooter2.default.footer, style: visible ? null : {
                        display: 'none'
                    } },
                React.createElement(
                    'button',
                    { className: _CalendarFooter2.default.btn, onClick: onOk && onOk() },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: _CalendarFooter2.default.btnText },
                            'CANCEL'
                        )
                    )
                ),
                React.createElement(
                    'button',
                    { className: _CalendarFooter2.default.btn, onClick: onCancel && onCancel() },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'span',
                            { className: _CalendarFooter2.default.btnText },
                            'OK'
                        )
                    )
                )
            );
        }
    }]);

    return CalendarFooter;
}(_react.Component);

exports.default = CalendarFooter;