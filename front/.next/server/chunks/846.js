"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 7846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _action_userAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8571);






const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex 
  items-center 
  justify-between
  shadow-md
  bg-gray-100
  h-24
  px-4
  my-10
`;
const Image = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  bg-slate-500
  rounded-full
  w-12
  h-12
`;
const Avatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().img)`
  rounded-full
  w-12
  h-12
`;
function FollowCard({ id , nickname , avatar , isFollowing  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const onClickUnFollow = ()=>{
        dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_5__/* .removeMyFollowingRequestAction */ .OQ)(id));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex space-x-3 items-center",
                children: [
                    avatar === "null" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {
                        src: `http://localhost:4000/${avatar}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-lg font-bold",
                        children: nickname
                    })
                ]
            }),
            isFollowing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: onClickUnFollow,
                className: "flex items-center text-sm text-gray-500 hover:text-indigo-700",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UserAddOutlined, {}),
                    "UnFollow"
                ]
            }) : null
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowCard);


/***/ })

};
;