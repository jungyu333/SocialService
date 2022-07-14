"use strict";
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 2333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4601);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _action_userAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8571);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _action_postActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3728);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4009);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2122);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__, _store_configureStore__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__, _components_PostCard__WEBPACK_IMPORTED_MODULE_10__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_2__, _store_configureStore__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__, _components_PostCard__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Header = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  max-w-sm
  mx-auto
  sm:max-w-md
  text-2xl
  font-bold
  text-indigo-700
`;
function Hashtag() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { hasMorePosts , postLoadLoading , mainPosts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.postReducer
    );
    const { hashtag  } = router.query;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView && hasMorePosts && !postLoadLoading) {
            const lastId = mainPosts[mainPosts.length - 1]?.id;
            dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_11__/* .hashtagLoadRequestAction */ .I_)({
                lastId: lastId,
                hashtag: hashtag
            }));
        }
    }, [
        inView,
        mainPosts,
        hasMorePosts,
        postLoadLoading
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative mt-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                    children: [
                        "'",
                        hashtag,
                        "' \uAC80\uC0C9 \uACB0\uACFC"
                    ]
                }),
                mainPosts?.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        ...post
                    }, post?.id)
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-3",
                    ref: hasMorePosts && !postLoadLoading ? ref : undefined
                })
            ]
        })
    });
}
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getServerSideProps */ .Z.getServerSideProps((store)=>async (context)=>{
        const cookie = context.req ? context.req.headers.cookie : "";
        (axios__WEBPACK_IMPORTED_MODULE_6___default().defaults.headers.common.Cookie) = "";
        if (context.req && cookie) {
            (axios__WEBPACK_IMPORTED_MODULE_6___default().defaults.headers.common.Cookie) = cookie;
        }
        store.dispatch((0,_action_userAction__WEBPACK_IMPORTED_MODULE_12__/* .myInfoLoadRequestAction */ .YE)());
        store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_7__.END);
        await store.sagaTask.toPromise();
        return {
            props: {}
        };
    }
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hashtag);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;