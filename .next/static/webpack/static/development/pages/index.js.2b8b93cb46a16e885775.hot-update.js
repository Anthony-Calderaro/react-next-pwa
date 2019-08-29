webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "C:\\Users\\Anthony\\Code\\react-next-pwa\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(IndexPage, _React$Component);

  function IndexPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, IndexPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(IndexPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      console.log('this.props', this.props);
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Latest News!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-1566993095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, " Hello !"), __jsx("p", {
        className: "jsx-1566993095",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Isn't Nextjs super cool?"), this.props.stories.map(function (story) {
        return __jsx("div", {
          className: "jsx-1566993095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, __jsx("h3", {
          key: story.url + 123,
          className: "jsx-1566993095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, __jsx("a", {
          href: story.url,
          className: "jsx-1566993095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, story.title)), __jsx("p", {
          className: "jsx-1566993095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          prefetch: true,
          href: "/story?id=".concat(story.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-1566993095",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, story.comments_count, " comments"))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1566993095",
        __self: this
      }, "h1.jsx-1566993095{font-family:system-ui;font-weight:300;color:#333;}p.jsx-1566993095{color:green;font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50aG9ueVxcQ29kZVxccmVhY3QtbmV4dC1wd2FcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm9CLEFBR2tDLEFBT1gsWUFDRyxVQVBFLEtBUWxCLFdBUGEsV0FFYiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudGhvbnlcXENvZGVcXHJlYWN0LW5leHQtcHdhXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaGFja2Vyd2ViYXBwLmNvbS9uZXdzJyk7XHJcbiAgICBjb25zdCBzdG9yaWVzID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICByZXR1cm4geyBzdG9yaWVzIH07XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMucHJvcHMnLCB0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9J0xhdGVzdCBOZXdzISc+XHJcbiAgICAgICAgPGgxPiBIZWxsbyAhPC9oMT5cclxuICAgICAgICA8cD5Jc24ndCBOZXh0anMgc3VwZXIgY29vbD88L3A+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc3Rvcmllcy5tYXAoc3RvcnkgPT4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzIGtleT17IHN0b3J5LnVybCArIDEyMyB9PjxhIGhyZWY9eyBzdG9yeS51cmwgfT57IHN0b3J5LnRpdGxlIH08L2E+PC9oMz5cclxuICAgICAgICAgICAgPHA+PExpbmsgcHJlZmV0Y2ggaHJlZj17IGAvc3Rvcnk/aWQ9JHtzdG9yeS5pZH1gIH0+PGE+XHJcbiAgICAgICAgICAgICAgeyBzdG9yeS5jb21tZW50c19jb3VudCB9IGNvbW1lbnRzXHJcbiAgICAgICAgICAgIDwvYT48L0xpbms+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgaDEge1xyXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGgzIHtcclxuICAgICAgICAgfVxyXG4gICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfTtcclxufTtcclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Anthony\\Code\\react-next-pwa\\pages\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, stories;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.hackerwebapp.com/news');

              case 2:
                request = _context.sent;
                _context.next = 5;
                return request.json();

              case 5:
                stories = _context.sent;
                return _context.abrupt("return", {
                  stories: stories
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


;

/***/ })

})
//# sourceMappingURL=index.js.2b8b93cb46a16e885775.hot-update.js.map