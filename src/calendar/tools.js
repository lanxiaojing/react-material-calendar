import moment from 'moment';

export const dayList = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
export const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
export const monthLongList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const monthZhList = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
];

export function formatNumToStr(num) {
    return num >= 10
        ? String(num)
        : '0' + num
}

export function getFirstDateOfMonth(year, month) {
    return moment(year + '-' + formatNumToStr(month + 1) + '-01')
}

export function getLastDateOfMonth(year, month) {
    return moment(year + '-' + formatNumToStr(month + 1) + '-' + moment(year + '-' + formatNumToStr(month + 1), 'YYYY-MM').daysInMonth())
}

export function getDays(year, month) {
    return moment(year + '-' + formatNumToStr(month + 1), 'YYYY-MM').daysInMonth()
}

export function getMoment(year, month, date) {
    if (!year && !month && !date)
        return moment()

    return moment(year + '-' + formatNumToStr(month + 1) + '-' + formatNumToStr(date))
}