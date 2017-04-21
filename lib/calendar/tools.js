'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.monthZhList = exports.monthLongList = exports.monthList = exports.dayList = undefined;
exports.formatNumToStr = formatNumToStr;
exports.getFirstDateOfMonth = getFirstDateOfMonth;
exports.getLastDateOfMonth = getLastDateOfMonth;
exports.getDays = getDays;
exports.getMoment = getMoment;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayList = exports.dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthList = exports.monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthLongList = exports.monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthZhList = exports.monthZhList = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

function formatNumToStr(num) {
    return num >= 10 ? String(num) : '0' + num;
}

function getFirstDateOfMonth(year, month) {
    return (0, _moment2.default)(year + '-' + formatNumToStr(month + 1) + '-01');
}

function getLastDateOfMonth(year, month) {
    return (0, _moment2.default)(year + '-' + formatNumToStr(month + 1) + '-' + (0, _moment2.default)(year + '-' + formatNumToStr(month + 1), 'YYYY-MM').daysInMonth());
}

function getDays(year, month) {
    return (0, _moment2.default)(year + '-' + formatNumToStr(month + 1), 'YYYY-MM').daysInMonth();
}

function getMoment(year, month, date) {
    if (!year && !month && !date) return (0, _moment2.default)();

    return (0, _moment2.default)(year + '-' + formatNumToStr(month + 1) + '-' + formatNumToStr(date));
}