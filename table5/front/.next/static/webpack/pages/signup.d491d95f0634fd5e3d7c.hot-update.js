webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _hooks_userInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/userInput */ "./hooks/userInput.js");



var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\nogo0\\#code\\Learnworkspace\\table5\\front\\pages\\signup.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: red;\n"])));
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  var _userInput = Object(_hooks_userInput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _userInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_userInput, 2),
      id = _userInput2[0],
      onChangeId = _userInput2[1];

  var _userInput3 = Object(_hooks_userInput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _userInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_userInput3, 2),
      nickname = _userInput4[0],
      onChangeNickname = _userInput4[1];

  var _userInput5 = Object(_hooks_userInput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _userInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_userInput5, 2),
      password = _userInput6[0],
      onChangePassword = _userInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      passwordConfirm = _useState[0],
      setPasswordConfirm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordConfirm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordConfirm(e.target.value);
    setPasswordError(e.target.value !== password);
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    console.log("체크됌");
    console.log("체크여부", term);
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (password !== passwordConfirm) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log("Register User Info : ", id, nickname, password);
  }, [password, passwordConfirm, term]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Node Bird | \uD68C\uC6D0\uAC00\uC785")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-nickname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-nickname",
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    name: "user-password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password-confirm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "password",
    name: "user-password-confirm",
    value: passwordConfirm,
    required: true,
    onChange: onChangePasswordConfirm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    name: "use-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "1\uC77C 1 \uBC84\uB4DC\uB97C \uD560 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4"), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC544 \uD569\uB2C8\uB2E4."), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "\uB2E4\uC74C")))));
};

_s(Signup, "WFawEy9e+o8M2NTVH3ejiBMRDEM=");

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsInVzZXJJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwicGFzc3dvcmRDb25maXJtIiwic2V0UGFzc3dvcmRDb25maXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkQ29uZmlybSIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVRlcm0iLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsIm9uU3VibWl0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLGdLQUFsQjtLQUFNRixZOztBQUlOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsbUJBQXlCQyxnRUFBUyxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9DLEVBQVA7QUFBQSxNQUFXQyxVQUFYOztBQUNBLG9CQUFxQ0YsZ0VBQVMsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLGdCQUFqQjs7QUFDQSxvQkFBcUNKLGdFQUFTLENBQUMsRUFBRCxDQUE5QztBQUFBO0FBQUEsTUFBT0ssUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBRUEsa0JBQThDQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPQyxlQUFQ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LEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsWUFBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FsREYsQ0FERixDQUxGLENBREY7QUFrRUQsQ0FoR0Q7O0dBQU0zQixNOztNQUFBQSxNO0FBa0dTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuZDQ5MWQ5NWYwNjM0ZmQ1ZTNkN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCB1c2VySW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZXJJbnB1dFwiO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VySW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZXJJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlcklucHV0KFwiXCIpO1xyXG5cclxuICBjb25zdCBbcGFzc3dvcmRDb25maXJtLCBzZXRQYXNzd29yZENvbmZpcm1dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDb25maXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFBhc3N3b3JkQ29uZmlybShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwi7LK07YGs65CMXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCLssrTtgazsl6zrtoBcIiwgdGVybSk7XHJcbiAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgc2V0VGVybUVycm9yKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0ZXIgVXNlciBJbmZvIDogXCIsIGlkLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtLCB0ZXJtXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ob2RlIEJpcmQgfCDtmozsm5DqsIDsnoU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXItaWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxyXG4gICAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLW5pY2tuYW1lXCI+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX1cclxuICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZC1jb25maXJtXCI+67mE67CA67KI7Zi4IO2ZleyduDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkLWNvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENvbmZpcm19XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENvbmZpcm19XHJcbiAgICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENoZWNrYm94IG5hbWU9XCJ1c2UtdGVybVwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PlxyXG4gICAgICAgICAgICAx7J28IDEg67KE65Oc66W8IO2VoCDqsoPsnYQg64+Z7J2Y7ZWp64uI64ukXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAge3Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZjtlZjshZTslYQg7ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAg64uk7J2MXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=