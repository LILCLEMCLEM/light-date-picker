"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCalendar = GetCalendar;
var day = ["dim", "lu", "mar", "mer", "jeu", "ven", "sam"];
function GetCalendar(year, month) {
  var lastDay = new Date(year, month + 1, 0);
  var firstDay = new Date(year, month, 1);
  var OrderedDate = {
    dim: [],
    lu: [],
    mar: [],
    mer: [],
    jeu: [],
    ven: [],
    sam: []
  };
  var index = 1;
  for (var i = firstDay.getDay(); i > 0; i--) {
    var tMonth = new Date(year, month, 1 - index);
    console.log(firstDay.getDay());
    OrderedDate[day[tMonth.getDay()]].push(" ");
    index++;
  }
  for (var _i = 1; _i <= lastDay.getDate(); _i++) {
    var date = new Date(year, month, _i);
    OrderedDate[day[date.getDay()]].push(date.getDate());
  }
  index = 1;
  for (var _i2 = lastDay.getDay(); _i2 < 6; _i2++) {
    var _date = new Date(new Date(year, month + 1, index));
    OrderedDate[day[_date.getDay()]].push(" ");
    index++;
  }
  return OrderedDate;
}