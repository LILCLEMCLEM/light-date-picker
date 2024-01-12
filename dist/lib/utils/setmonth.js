"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthInt2Str = MonthInt2Str;
var monthStr = ["jan", "feb", "mar", "apr", "may", "jun", "jui", "aug", "sep", "oct", "nov", "dec"];
function MonthInt2Str(month) {
  return monthStr[month];
}