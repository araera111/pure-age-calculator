"use strict";
exports.__esModule = true;
exports.getAgePure = void 0;
var dayjs_1 = require("dayjs");
var ramda_1 = require("ramda");
var calcDiff = function (from, to, format) {
    var dayjsFrom = dayjs_1["default"](from);
    var dayjsTo = dayjs_1["default"](to);
    if (!ramda_1.isNil(format))
        return dayjsTo.diff(dayjsFrom, format);
    var years = dayjsTo.diff(dayjsFrom, 'year');
    var months = dayjsTo.diff(dayjsFrom, 'months');
    var days = dayjsTo.diff(dayjsFrom, 'days');
    return { years: years, months: months, days: days };
};
var getAgePure = function (fromDate, toDate, format) {
    if (!(fromDate instanceof Date))
        throw new Error('fromDate is Invalid date.');
    if (!(toDate instanceof Date))
        throw new Error('toDate is Invalid date.');
    if (dayjs_1["default"](fromDate).isAfter(toDate))
        throw new Error('toDate is dated earlier than fromDate.');
    return calcDiff(fromDate, toDate, format);
};
exports.getAgePure = getAgePure;
