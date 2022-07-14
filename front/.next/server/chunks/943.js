"use strict";
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 1943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().div)`
`;
const NavContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().nav)`
  flex
  justify-between
  items-center
  border-b-1
  h-16
  px-10
  bg-gray-100
`;
const MenuContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().div)`
  flex
  items-center
  w-full
  max-w-xl
  space-x-10
`;
const MenuItem = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().div)`
  hidden
  cursor-pointer
  sm:flex text-gray-500 hover:text-indigo-700 hover:border-b-[1px] hover:font-bold
`;
const MobileButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().button)`
  sm:hidden
`;
const SearchInput = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().input)`
  hidden
  sm:flex
  p-2
  bg-transparent
  placeholder:text-gray-400
  focus:outline-indigo-700
  rounded-md
 
`;
const MobileSearchInput = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().input)`
  p-2
  bg-transparent
  placeholder:text-gray-300
  focus:outline-indigo-700
  rounded-md
`;
const MobileNavContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().nav)`
  ${(p)=>p.$isToggled ? "py-4 shadow-md absolute w-full flex-col z-10 justify-center bg-gray-100 text-gray-500 space-y-2 px-2 " : "hidden"
}
  sm:hidden
  
`;
const MobileMenuItem = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().div)`
  hover:font-bold 
  hover:text-indigo-700
  cursor-pointer
`;
const LogIn = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_7___default().a)`
  ${(p)=>p.$isLogIn ? "hidden" : "visible"
}
`;
const Layout = ({ children  })=>{
    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userReducer
    );
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isLogIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userReducer.logInDone
    );
    const { 0: isToggled , 1: setIsToggled  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const onClickMenu = ()=>{
        setIsToggled(!isToggled);
    };
    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const onSearchMobileValid = (data)=>{
        router.push(`/search/${data.searchMobile}`);
        reset();
    };
    const onSearchValid = (data)=>{
        router.push(`/search/${data.search}`);
        reset();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.TwitterOutlined, {
                                style: {
                                    color: "#4F46E5 ",
                                    fontSize: "24px"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "\uD648"
                                    })
                                })
                            }),
                            me ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/profile",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "\uB9C8\uC774\uD398\uC774\uC9C0"
                                    })
                                })
                            }) : null,
                            !isLogIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuItem, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/signin",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogIn, {
                                        $isLogIn: me,
                                        children: "\uB85C\uADF8\uC778"
                                    })
                                })
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileButton, {
                        onClick: onClickMenu,
                        children: !isToggled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 hover:text-indigo-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 hover:text-indigo-600",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: handleSubmit(onSearchValid),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchInput, {
                            autoComplete: "off",
                            ...register("search"),
                            placeholder: "search"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MobileNavContainer, {
                $isToggled: isToggled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileMenuItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "\uD648"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileMenuItem, {
                        children: me ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/profile",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "\uB9C8\uC774\uD398\uC774\uC9C0"
                            })
                        }) : null
                    }),
                    !isLogIn ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileMenuItem, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/signin",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogIn, {
                                $isLogIn: me,
                                children: "\uB85C\uADF8\uC778"
                            })
                        })
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: handleSubmit(onSearchMobileValid),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileSearchInput, {
                            autoComplete: "off",
                            ...register("searchMobile"),
                            placeholder: "search"
                        })
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;