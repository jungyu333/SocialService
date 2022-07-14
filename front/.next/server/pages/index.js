"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,548];
exports.modules = {

/***/ 7366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  max-w-sm
  mx-auto
  sm:max-w-md
  mt-10
`;
const FormContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().form)`
  space-y-1
`;
const TextArea = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().textarea)`
  w-full
  p-2
  focus:outline-none
  focus:ring-2
  focus:ring-indigo-500
  rounded-md
  border-[1px]
  border-gray-400
  
`;
const SubmitButtonContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  flex
  items-center
  justify-between
`;
const SubmitButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().button)`
  bg-indigo-400
  hover:bg-indigo-600
  text-white
  p-2
  px-4
  rounded-md
`;
const PlusPhoto = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.PlusSquareOutlined)`
  text-indigo-400
  hover:text-indigo-700
  text-3xl
  cursor-pointer
`;
const ImageInput = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().input)`
  hidden
`;
const PreImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().img)`
  w-28
  h-28
  bg-cover
`;
function PostForm() {
    const { imagePaths  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.postReducer
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const photoInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const onClickPhoto = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        photoInput.current.click();
    }, [
        photoInput.current
    ]);
    const onValid = ({ content  })=>{
        if (!imagePaths) {
            dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_6__/* .addPostRequestAction */ .LR)({
                content
            }));
        } else {
            const formData = new FormData();
            imagePaths.forEach((image)=>{
                formData.append("image", image);
            });
            formData.append("content", content);
            dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_6__/* .addPostRequestAction */ .LR)(formData));
        }
        reset();
    };
    const onChangePhoto = (e)=>{
        const formData = new FormData();
        [].forEach.call(e.target.files, (file)=>{
            formData.append("postimg", file);
        });
        dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_6__/* .postImageUploadRequestAction */ .Qt)(formData));
        e.target.value = "";
    };
    const onClickPostImgDelete = (index)=>{
        dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_6__/* .postImageDeleteAction */ .yv)(index));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                onSubmit: handleSubmit(onValid),
                encType: "multipart/form-data",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                        ...register("content"),
                        rows: 4
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubmitButtonContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlusPhoto, {
                                onClick: onClickPhoto
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageInput, {
                                multiple: true,
                                type: "file",
                                ref: photoInput,
                                name: "postimg",
                                accept: "image/*",
                                onChange: onChangePhoto
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubmitButton, {
                                children: "\uC9F9\uC9F9"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: imagePaths.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex px-2 items-center space-x-2 mt-2 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100",
                    children: imagePaths.map((image)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "h-36 w-28 min-w-max mb-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreImage, {
                                    src: `http://localhost:4000/${image}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>onClickPostImgDelete(image)
                                    ,
                                    className: "text-lg text-gray-400 hover:text-red-500",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.DeleteOutlined, {})
                                })
                            ]
                        }, image)
                    )
                }) : null
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1943);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2122);
/* harmony import */ var _components_MyProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2795);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7366);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _action_userAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8571);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4009);
/* harmony import */ var _action_postActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3728);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4601);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_PostCard__WEBPACK_IMPORTED_MODULE_4__, _components_PostForm__WEBPACK_IMPORTED_MODULE_7__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__, _store_configureStore__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_3__, _components_PostCard__WEBPACK_IMPORTED_MODULE_4__, _components_PostForm__WEBPACK_IMPORTED_MODULE_7__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__, _store_configureStore__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_6___default().div)`
  flex-col
  relative
`;
const Home = ()=>{
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_10__.useInView)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.userReducer
    );
    const { postDeleteDone , addPostDone , mainPosts , postLoadLoading , hasMorePosts ,  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.postReducer
    );
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inView && hasMorePosts && !postLoadLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_13__/* .postLoadRequestAction */ .uV)(lastId));
        }
    }, [
        inView,
        mainPosts,
        hasMorePosts,
        postLoadLoading
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (addPostDone) {
            dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_14__/* .myInfoLoadRequestAction */ .YE)());
        }
        if (postDeleteDone) {
            dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_14__/* .myInfoLoadRequestAction */ .YE)());
        }
    }, [
        addPostDone,
        postDeleteDone
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Social Service"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                    children: [
                        me ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MyProfile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}) : null,
                        me && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                        mainPosts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                ...post
                            }, post?.id)
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-3",
                            ref: hasMorePosts && !postLoadLoading ? ref : undefined
                        })
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getServerSideProps */ .Z.getServerSideProps((store)=>async (context)=>{
        const cookie = context.req ? context.req.headers.cookie : "";
        (axios__WEBPACK_IMPORTED_MODULE_12___default().defaults.headers.common.Cookie) = "";
        if (context.req && cookie) {
            (axios__WEBPACK_IMPORTED_MODULE_12___default().defaults.headers.common.Cookie) = cookie;
        }
        store.dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_14__/* .myInfoLoadRequestAction */ .YE)());
        store.dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_13__/* .postLoadRequestAction */ .uV)(0));
        store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_9__.END);
        await store.sagaTask.toPromise();
        return {
            props: {}
        };
    }
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,571,943,601,676,795], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();