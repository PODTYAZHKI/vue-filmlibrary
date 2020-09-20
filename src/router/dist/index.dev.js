"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("@/components/Home"));

var _Login = _interopRequireDefault(require("@/components/Auth/Login"));

var _Registration = _interopRequireDefault(require("@/components/Auth/Registration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: '/',
    component: _Home["default"]
  }, {
    path: '/login',
    name: 'login',
    component: _Login["default"]
  }, {
    path: '/registration',
    name: 'registration',
    component: _Registration["default"]
  }]
});

exports["default"] = _default;