"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Datepicker = _interopRequireDefault(require("./lib/components/Datepicker"));
var _react = _interopRequireDefault(require("react"));
var _stylesModule = _interopRequireDefault(require("../styles.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  DatePicker: _Datepicker["default"],
  styles: _stylesModule["default"]
};