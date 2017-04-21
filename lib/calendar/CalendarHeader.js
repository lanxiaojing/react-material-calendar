'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CalendarHeader = require('./CalendarHeader.less');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarHeader = function CalendarHeader(props) {
  var year = props.year,
      month = props.month,
      openYearPanel = props.openYearPanel,
      openMonthPanel = props.openMonthPanel;

  return React.createElement(
    'div',
    { className: _CalendarHeader2.default.header },
    React.createElement(
      'div',
      { className: _CalendarHeader2.default.yearContainer },
      React.createElement(
        'div',
        { className: _CalendarHeader2.default.year, onClick: openYearPanel && openYearPanel.bind(year) },
        React.createElement(
          'span',
          { style: { cursor: 'pointer', width: '100%' } },
          '\u9009\u62E9\u5E74\u4EFD\uFF1A',
          year
        )
      )
    ),
    React.createElement(
      'div',
      { className: _CalendarHeader2.default.monthContainer },
      React.createElement(
        'div',
        { className: _CalendarHeader2.default.month, onClick: openMonthPanel && openMonthPanel.bind(month) },
        React.createElement(
          'span',
          { style: { cursor: 'pointer', width: '100%', display: 'block' } },
          month
        )
      )
    )
  );
};

exports.default = CalendarHeader;