"use strict";
exports.id = 676;
exports.ids = [676];
exports.modules = {

/***/ 5079:
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
/* harmony import */ var _action_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3728);






const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  max-w-sm
  sm:max-w-md
  mx-auto
`;
const CommentContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  mt-3
  pt-3
  flex
  items-center
  space-x-4
  border-t-[1px]
  border-gray-300
`;
const Avatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  bg-slate-500
  w-10
  h-10
  rounded-full
`;
const CommentBox = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex
  justify-between
  w-full
`;
const Name = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  text-lg
  font-bold
`;
const Content = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  text-sm
  text-gray-500
`;
function Comment(comment) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userReducer
    );
    const onClickCommentRemove = ()=>{
        dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_4__/* .commentRemoveRequestAction */ .j$)({
            commentId: comment.id,
            postId: comment.PostId
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CommentContainer, {
            children: [
                !comment.User.avatar || comment.User.avatar === "null" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "w-10 h-10 rounded-full",
                    src: `http://localhost:4000/${comment.User.avatar}`
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CommentBox, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-3/4 space-y-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Name, {
                                    children: comment.User.nickname
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                                    children: comment.content
                                })
                            ]
                        }),
                        me?.id === comment.UserId ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex text-xs items-start text-gray-400 space-x-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: onClickCommentRemove,
                                children: "\uC0AD\uC81C"
                            })
                        }) : null
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ }),

/***/ 2835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-w-sm
  sm:max-w-md
  mx-auto
  w-full
  flex-col
`;
const TextArea = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().textarea)`
  w-full
  p-2
  mt-2
  border-[1px]
  border-gray-400
  rounded-md
  focus:outline-none
  focus:ring-1
  focus:ring-indigo-600
  text-sm
  text-gray-500
  scrollbar-hide
`;
const SubmitButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  hover:text-indigo-600
  text-lg
  pl-1
  -mt-2
`;
function CommentForm(post) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { id  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.userReducer.me
    );
    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    const onValid = ({ content  })=>{
        dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_6__/* .addCommentRequestAction */ .j6)({
            content: content,
            postId: post.id,
            userId: id
        }));
        reset();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit(onValid),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea, {
                    ...register("content", {
                        required: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
                    }),
                    rows: 3
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubmitButton, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SendOutlined, {})
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _action_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3728);






const ButtonWrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex
  justify-between
  border-t-[1px]
  border-gray-400
  h-9
  pt-2
  mt-2
`;
const IconBox = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  w-1/3
  text-center
  text-lg
  h-full
  hover:shadow-sm
  flex
  items-center
  justify-center
  cursor-pointer
  hover:text-indigo-600
  
`;
function PostButtons({ postId , Likers , setCommentOpened  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { me  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userReducer
    );
    const onClickComment = ()=>{
        if (!me) {
            alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
        } else {
            setCommentOpened((prev)=>!prev
            );
        }
    };
    const onClickDeletePost = ()=>{
        dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_4__/* .postDeleteRequestAction */ .c5)(postId));
    };
    const onClickLike = ()=>{
        if (!me) {
            alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
        } else {
            dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_4__/* .addLikeRequestAction */ .k8)(postId));
        }
    };
    const onClickUnLike = ()=>{
        if (!me) {
            alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
        } else {
            dispatch((0,_action_postActions__WEBPACK_IMPORTED_MODULE_4__/* .removeLikeRequestAction */ .W2)(postId));
        }
    };
    const isLike = Likers.find((like)=>like.id === me?.id
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBox, {
                onClick: onClickDeletePost,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.DeleteOutlined, {})
            }),
            isLike ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBox, {
                onClick: onClickUnLike,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.HeartTwoTone, {
                    twoToneColor: "#eb2f96"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBox, {
                onClick: onClickLike,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.HeartOutlined, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconBox, {
                onClick: onClickComment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CommentOutlined, {})
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostButtons);


/***/ }),

/***/ 2122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5079);
/* harmony import */ var _components_PostImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6625);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2835);
/* harmony import */ var _PostButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7564);
/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4530);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentForm__WEBPACK_IMPORTED_MODULE_5__]);
_CommentForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-w-sm
  mx-auto
  sm:max-w-md
  border-2
  shadow-sm
  flex-col
  justify-center
  mt-4
  mb-2
`;
const ContentWrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  p-2
  w-full
`;
const ContentContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex
  items-center
  space-x-4
  w-full
`;
const Avatar = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  bg-slate-500
  rounded-full
  w-12
  h-12
`;
const ContentInfo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex-col
  justify-start
  space-y-2
  items-start
  w-full
`;
const Name = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  text-lg
  font-bold
`;
const CommentCount = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  text-sm
  text-gray-500
  mt-2
`;
function PostCard(post) {
    const { 0: commentOpened , 1: setCommentOpened  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            post.Images?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                images: post.Images
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentWrapper, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: !post.User?.avatar || post.User?.avatar === "null" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Avatar, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "rounded-full w-12 h-12",
                                    src: `http://localhost:4000/${post.User.avatar}`
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentInfo, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: `/user/${post.UserId}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Name, {
                                                children: post.User?.nickname
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostContent__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        postData: post.content
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostButtons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        postId: post.id,
                        Likers: post.Likers,
                        setCommentOpened: setCommentOpened
                    }),
                    commentOpened ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                ...post
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex space-x-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CommentCount, {
                                        children: [
                                            post.Comments.length,
                                            " \uAC1C\uC758 \uB313\uAE00"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " text-sm text-gray-500 mt-2",
                                        children: [
                                            post.Likers.length,
                                            " \uAC1C\uC758 \uC88B\uC544\uC694"
                                        ]
                                    })
                                ]
                            }),
                            post.Comments.map((comment)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    ...comment
                                }, comment.id)
                            )
                        ]
                    }) : null
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function PostContent({ postData  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: postData?.split(/(#[^\s#]+)/g).map((hash, index)=>{
            if (hash.match(/(#[^\s#]+)/)) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/hashtag/${hash.slice(1)}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-indigo-400",
                        children: hash
                    })
                }, index);
            }
            return hash;
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContent);


/***/ }),

/***/ 6625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "tailwind-styled-components"
var external_tailwind_styled_components_ = __webpack_require__(4191);
var external_tailwind_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_tailwind_styled_components_);
;// CONCATENATED MODULE: ./components/ImageZoom.tsx





const Overlay = (external_tailwind_styled_components_default()).div`
  fixed
  top-0
  bottom-0
  left-0
  right-0
  z-40
  m-auto
`;
const Header = (external_tailwind_styled_components_default()).div`
  flex
  items-center
  justify-center
  text-center
  h-16
  bg-white
  font-bold
  text-2xl
`;
const SliderWrapper = (external_tailwind_styled_components_default()).div`
  bg-gray-700
  h-full
  m-auto
  flex
  items-center
`;
const CustomSlider = external_tailwind_styled_components_default()((external_react_slick_default()))`
  m-auto
  w-96
  sm:w-10/12
  sm:h-10/12
`;
const Button = (external_tailwind_styled_components_default()).button`
  absolute
  top-20
  right-6
  text-white
  border
  flex
  justify-center
  items-center
  p-1
`;
function ImageZoom({ images , onClickClose  }) {
    const { 0: currentSlide , 1: setCurrentSlide  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Overlay, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        onClick: onClickClose,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.CloseOutlined, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SliderWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomSlider, {
                    initialSlide: 0,
                    beforeChange: (slide, newSlide)=>setCurrentSlide(newSlide)
                    ,
                    infinite: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    children: images.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "m-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "m-auto p-10 h-72 sm:h-96",
                                src: `http://localhost:4000/${image.src}`,
                                alt: image.src
                            })
                        }, image.src)
                    )
                })
            })
        ]
    });
}
/* harmony default export */ const components_ImageZoom = (ImageZoom);

;// CONCATENATED MODULE: ./components/PostImage.tsx




function postImage({ images  }) {
    const { 0: imageZoom , 1: setImageZoom  } = (0,external_react_.useState)(false);
    const onClickZoom = ()=>{
        setImageZoom(true);
    };
    const onClickClose = ()=>{
        setImageZoom(false);
    };
    if (images.length === 1) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-96 w-full cursor-pointer",
                    src: `http://localhost:4000/${images[0].src}`,
                    onClick: onClickZoom
                }),
                imageZoom && /*#__PURE__*/ jsx_runtime_.jsx(components_ImageZoom, {
                    images: images,
                    onClickClose: onClickClose
                })
            ]
        });
    } else if (images.length === 2) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-96 w-1/2 cursor-pointer ",
                    src: `http://localhost:4000/${images[0].src}`,
                    onClick: onClickZoom
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-96 w-1/2 cursor-pointer ",
                    src: `http://localhost:4000/${images[1].src}`,
                    onClick: onClickZoom
                }),
                imageZoom && /*#__PURE__*/ jsx_runtime_.jsx(components_ImageZoom, {
                    images: images,
                    onClickClose: onClickClose
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-96 w-1/2 cursor-pointer",
                    src: `http://localhost:4000/${images[0].src}`,
                    onClick: onClickZoom
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-96 w-1/2 flex justify-center items-center ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onClick: onClickZoom,
                        className: "text-sm text-center text-gray-500 hover:font-bold hover:text-indigo-600 cursor-pointer",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons_.PlusOutlined, {
                                className: "text-2xl mb-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm ",
                                children: [
                                    images.length - 1,
                                    "\uAC1C\uC758 \uC0AC\uC9C4 ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " \uB354\uBCF4\uAE30"
                                ]
                            })
                        ]
                    })
                }),
                imageZoom && /*#__PURE__*/ jsx_runtime_.jsx(components_ImageZoom, {
                    images: images,
                    onClickClose: onClickClose
                })
            ]
        });
    }
}
/* harmony default export */ const PostImage = (postImage);


/***/ })

};
;