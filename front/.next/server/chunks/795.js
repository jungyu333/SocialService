"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 2795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);




const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  hidden
  absolute
  xl:flex 
  top-10
  left-10
`;
const ProfileWrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  w-96
  bg-gray-100
  h-48
  shadow-md
  flex-col
  items-center
  space-y-5
`;
const ProfileContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex
  space-x-5
  items-center
  justify-start
  px-4
  mt-8
`;
const Avatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`
  w-20
  h-20
  rounded-full
  shadow-sm
`;
const Image = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  bg-slate-700
  rounded-full
  w-20
  h-20
  shadow-sm
`;
const UserInfo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  space-y-2
`;
const UserName = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  text-2xl
  font-bold
`;
const InfoContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex
  justify-center
`;
const InfoBox = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  w-full
  flex-col
  justify-between
  items-center
  text-center
`;
function MyProfile() {
    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userReducer
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: me ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProfileWrapper, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProfileContainer, {
                            children: [
                                me?.avatar === "null" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {
                                    src: `http://localhost:4000/${me?.avatar}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserInfo, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserName, {
                                        children: me?.nickname
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoContainer, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoBox, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "\uAC8C\uC2DC\uBB3C"
                                        }),
                                        me?.Posts?.length
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoBox, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "\uD314\uB85C\uC789"
                                        }),
                                        me?.Followings?.length
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoBox, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "\uD314\uB85C\uC6CC"
                                        }),
                                        me?.Followers?.length
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }) : null
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProfile);


/***/ })

};
;