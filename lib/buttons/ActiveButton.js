'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveButton = function (_Component) {
    _inherits(ActiveButton, _Component);

    function ActiveButton() {
        _classCallCheck(this, ActiveButton);

        var _this = _possibleConstructorReturn(this, (ActiveButton.__proto__ || Object.getPrototypeOf(ActiveButton)).call(this));

        _this.state = {
            hover: false,
            selectedStatus: false
        };

        _this.handleMouseEnter = function () {
            if (_this.props.disabled) return;
            _this.setState({
                hover: true
            });
        };

        _this.handleMouseLeave = function () {
            if (_this.props.disabled) return;
            _this.setState({
                hover: false
            });
        };

        _this.handleClick = function () {
            _this.setState({
                selectedStatus: !_this.state.selectedStatus
            }, function () {
                this.props.onClick && this.props.onClick(this.props.value, this.state.selectedStatus);
            });
        };

        return _this;
    }

    _createClass(ActiveButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                onClick = _props.onClick,
                disabled = _props.disabled,
                selected = _props.selected,
                label = _props.label,
                btnStyle = _props.btnStyle,
                selectedStyle = _props.selectedStyle,
                defaultStyle = _props.defaultStyle,
                disabledStyle = _props.disabledStyle;
            var _state = this.state,
                hover = _state.hover,
                selectedStatus = _state.selectedStatus;
            // const styles = getStyles && getStyles(this.props, this.state);

            return React.createElement(
                'button',
                { className: btnStyle, onClick: this.handleClick, disabled: typeof disabled === 'undefined' || !disabled ? false : true },
                React.createElement(
                    'span',
                    { className: selected ? defaultStyle + ' ' + selectedStyle : disabled ? defaultStyle + ' ' + disabledStyle : '' + defaultStyle },
                    label
                )
            );
        }
    }]);

    return ActiveButton;
}(_react.Component);

ActiveButton.propTypes = {
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.object]).isRequired,
    label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
    onClick: _react.PropTypes.func,
    selected: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    selectedStyle: _react.PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
    defaultStyle: _react.PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
    disabledStyle: _react.PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
    btnStyle: _react.PropTypes.string.isRequired };
exports.default = ActiveButton;