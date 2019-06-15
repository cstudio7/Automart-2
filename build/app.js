"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _car_route = _interopRequireDefault(require("./routes/car_route"));

var _user_route = _interopRequireDefault(require("./routes/user_route"));

var _order_route = _interopRequireDefault(require("./routes/order_route"));

var _cloudinary_route = _interopRequireDefault(require("./routes/cloudinary_route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.use('/', _cloudinary_route["default"]);
app.use('/', _user_route["default"]);
app.use('/', _car_route["default"]);
app.use('/', _order_route["default"]);
module.exports = app;
//# sourceMappingURL=app.js.map