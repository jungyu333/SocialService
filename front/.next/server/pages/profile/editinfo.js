"use strict";
(() => {
var exports = {};
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 6538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1943);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LogInForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9064);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2918);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _action_userAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8571);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4601);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const LoginForm = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`
  space-y-4
  px-16
`;
const SubmitButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)`
  text-white
  hover:bg-indigo-600
  hover:font-bold
  border
  p-2
  px-4
  mt-8
  rounded-md
  bg-indigo-400
`;
const InputHead = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  text-sm
  text-gray-500
  text-start
`;
const PreAvatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`
  rounded-full
  w-16
  h-16
`;
const Avatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`
 bg-slate-500
  w-16
  h-16
  rounded-full
`;
const InputAvatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`
  hidden
`;
const AvatarButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  cursor-pointer
  text-sm
  text-gray-500
  hover:text-indigo-600
  hover:font-bold
  border-2
  rounded-md
  p-2
`;
function editinfo() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const avatarInput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { me , avatarPaths , editDone  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.userReducer
    );
    const { register , handleSubmit , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const onClickAvater = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        avatarInput.current.click();
    }, [
        avatarInput.current
    ]);
    const onChangeAvatar = (e)=>{
        const avatarEditFormData = new FormData();
        [].forEach.call(e.target.files, (file)=>{
            avatarEditFormData.append("avataredit", file);
        });
        dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_12__/* .avatarEditRequestAction */ .ni)(avatarEditFormData));
        e.target.value = "";
    };
    const onClickDeleteAvatar = ()=>{
        dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_12__/* .avatarEditDeleteAction */ .aj)());
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (me) {
            if (me.nickname) {
                setValue("nickname", me.nickname);
            }
            if (me.avatar) {
                dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_12__/* .avatarSetAction */ .Ds)(me.avatar));
            }
        }
    }, [
        me
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!me) {
            router.replace("/");
        }
    }, [
        me
    ]);
    const onValid = ({ nickname  })=>{
        const formData = new FormData();
        formData.append("nickname", nickname);
        formData.append("avatar", avatarPaths);
        dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_12__/* .editInfoRequestAction */ .sr)(formData));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (editDone) {
            router.push("/profile");
        }
    }, [
        editDone
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: me ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LogInForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                headTitle: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginForm, {
                    onSubmit: handleSubmit(onValid),
                    encType: "multipart/form-data",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                me?.avatar !== "null" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreAvatar, {
                                    src: `http://localhost:4000/${me?.avatar}`
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {}),
                                me.avatar === "null" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AvatarButton, {
                                    onClick: onClickAvater,
                                    children: "\uC774\uBBF8\uC9C0"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AvatarButton, {
                                    onClick: onClickDeleteAvatar,
                                    children: "\uCD08\uAE30\uD654"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputAvatar, {
                            name: "avataredit",
                            type: "file",
                            ref: avatarInput,
                            onChange: onChangeAvatar
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputHead, {
                            children: "Nick Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            register: register("nickname"),
                            type: "text",
                            placeholder: "Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubmitButton, {
                                children: "\uC218\uC815\uD558\uAE30"
                            })
                        })
                    ]
                })
            })
        }) : null
    });
}
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getServerSideProps */ .Z.getServerSideProps((store)=>async (context)=>{
        const cookie = context.req ? context.req.headers.cookie : "";
        (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.common.Cookie) = "";
        if (context.req && cookie) {
            (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.common.Cookie) = cookie;
        }
        store.dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_12__/* .myInfoLoadRequestAction */ .YE)());
        store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_11__.END);
        await store.sagaTask.toPromise();
        return {
            props: {}
        };
    }
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editinfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6537:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 4191:
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ }),

/***/ 9810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,571,943,601,8], () => (__webpack_exec__(6538)));
module.exports = __webpack_exports__;

})();