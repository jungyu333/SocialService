"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 3728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ userPostLoadFailureAction),
/* harmony export */   "Ef": () => (/* binding */ postLoadSuccessAction),
/* harmony export */   "Fz": () => (/* binding */ removeLikeSuccessAction),
/* harmony export */   "Ht": () => (/* binding */ addLikeSuccessAction),
/* harmony export */   "I_": () => (/* binding */ hashtagLoadRequestAction),
/* harmony export */   "Kt": () => (/* binding */ addLikeFailureAction),
/* harmony export */   "LR": () => (/* binding */ addPostRequestAction),
/* harmony export */   "MF": () => (/* binding */ postImageUploadSuccessAction),
/* harmony export */   "QB": () => (/* binding */ userPostLoadRequestAcion),
/* harmony export */   "Qt": () => (/* binding */ postImageUploadRequestAction),
/* harmony export */   "W2": () => (/* binding */ removeLikeRequestAction),
/* harmony export */   "WO": () => (/* binding */ searchLoadRequestAction),
/* harmony export */   "X1": () => (/* binding */ addCommentFailureAction),
/* harmony export */   "XX": () => (/* binding */ addPostFailureAction),
/* harmony export */   "Yu": () => (/* binding */ commentRemoveFailureAction),
/* harmony export */   "_F": () => (/* binding */ postLoadFailureAction),
/* harmony export */   "c$": () => (/* binding */ commentRemoveSuccessAction),
/* harmony export */   "c5": () => (/* binding */ postDeleteRequestAction),
/* harmony export */   "cs": () => (/* binding */ hashtagLoadFailureAction),
/* harmony export */   "dH": () => (/* binding */ postDeleteSuccessAction),
/* harmony export */   "gG": () => (/* binding */ searchLoadSuccessAction),
/* harmony export */   "iu": () => (/* binding */ postDeleteFailureAction),
/* harmony export */   "j$": () => (/* binding */ commentRemoveRequestAction),
/* harmony export */   "j6": () => (/* binding */ addCommentRequestAction),
/* harmony export */   "jO": () => (/* binding */ addCommentSuccessAction),
/* harmony export */   "jY": () => (/* binding */ hashtagLoadSuccessAction),
/* harmony export */   "k8": () => (/* binding */ addLikeRequestAction),
/* harmony export */   "k_": () => (/* binding */ userPostLoadSuccessAction),
/* harmony export */   "oO": () => (/* binding */ searchLoadFailureAction),
/* harmony export */   "tO": () => (/* binding */ postImageUploadFailureAction),
/* harmony export */   "uV": () => (/* binding */ postLoadRequestAction),
/* harmony export */   "wq": () => (/* binding */ addPostSuccessAction),
/* harmony export */   "y_": () => (/* binding */ removeLikeFailureAction),
/* harmony export */   "yv": () => (/* binding */ postImageDeleteAction)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);

const addPostRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_POST_REQUEST */ .z9,
        data
    };
};
const addPostSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_POST_SUCCESS */ ._s,
        data
    };
};
const addPostFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_POST_FAILURE */ .tP,
        data
    };
};
const postImageUploadRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_IMAGE_UPLOAD_REQUEST */ .JR,
        data
    };
};
const postImageUploadSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_IMAGE_UPLOAD_SUCCESS */ .M0,
        data
    };
};
const postImageUploadFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_IMAGE_UPLOAD_FAILURE */ ._z,
        data
    };
};
const postImageDeleteAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_IMAGE_DELETE */ .i8,
        data
    };
};
const addCommentRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_COMMENT_REQUEST */ .Ot,
        data
    };
};
const addCommentSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_COMMENT_SUCCESS */ .nv,
        data
    };
};
const addCommentFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_COMMENT_FAILURE */ .rX,
        data
    };
};
const postDeleteRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_DELETE_REQUEST */ .cE,
        data
    };
};
const postDeleteSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_DELETE_SUCCESS */ .kN,
        data
    };
};
const postDeleteFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_DELETE_FAILURE */ .xk,
        data
    };
};
const postLoadRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_LOAD_REQUEST */ .TL,
        data
    };
};
const postLoadSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_LOAD_SUCCESS */ .uf,
        data
    };
};
const postLoadFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .POST_LOAD_FAILURE */ .mC,
        data
    };
};
const commentRemoveRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .COMMENT_REMOVE_REQUEST */ .sW,
        data
    };
};
const commentRemoveSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .COMMENT_REMOVE_SUCCESS */ .tS,
        data
    };
};
const commentRemoveFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .COMMENT_REMOVE_FAILURE */ .tH,
        data
    };
};
const addLikeRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_LIKE_REQUEST */ .vS,
        data
    };
};
const addLikeSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_LIKE_SUCCESS */ .Nv,
        data
    };
};
const addLikeFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_LIKE_FAILURE */ .Ss,
        data
    };
};
const removeLikeRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_LIKE_REQUEST */ .jb,
        data
    };
};
const removeLikeSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_LIKE_SUCCESS */ .d4,
        data
    };
};
const removeLikeFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_LIKE_FAILURE */ .WU,
        data
    };
};
const userPostLoadRequestAcion = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .USER_POST_LOAD_REQUEST */ .h4,
        data
    };
};
const userPostLoadSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .USER_POST_LOAD_SUCCESS */ .pn,
        data
    };
};
const userPostLoadFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .USER_POST_LOAD_FAILURE */ .Cx,
        data
    };
};
const hashtagLoadRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .HASHTAG_LOAD_REQUEST */ .rI,
        data
    };
};
const hashtagLoadSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .HASHTAG_LOAD_SUCCESS */ .Bs,
        data
    };
};
const hashtagLoadFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .HASHTAG_LOAD_FAILURE */ .DY,
        data
    };
};
const searchLoadRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SEARCH_LOAD_REQUEST */ .fc,
        data
    };
};
const searchLoadSuccessAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SEARCH_LOAD_SUCCESS */ .GD,
        data
    };
};
const searchLoadFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SEARCH_LOAD_FAILURE */ .J7,
        data
    };
};


/***/ }),

/***/ 4362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E6": () => (/* binding */ signUpFailureAction),
/* harmony export */   "JE": () => (/* binding */ signUpRequestAction),
/* harmony export */   "KX": () => (/* binding */ signUpSuccessAction)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3967);

const signUpRequestAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SIGN_UP_REQUEST */ .pK,
        data
    };
};
const signUpSuccessAction = ()=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SIGN_UP_SUCCESS */ .I,
        data: null
    };
};
const signUpFailureAction = (data)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SIGN_UP_FAILURE */ .bP,
        data
    };
};


/***/ }),

/***/ 9762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7212);
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5522);
/* harmony import */ var _signUpReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6418);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userReducer__WEBPACK_IMPORTED_MODULE_2__, _postReducer__WEBPACK_IMPORTED_MODULE_3__, _signUpReducer__WEBPACK_IMPORTED_MODULE_4__]);
([_userReducer__WEBPACK_IMPORTED_MODULE_2__, _postReducer__WEBPACK_IMPORTED_MODULE_3__, _signUpReducer__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const rootReducer = (state, action)=>{
    switch(action.type){
        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
            return action.payload;
        default:
            {
                const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
                    userReducer: _userReducer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                    postReducer: _postReducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    signUpReducer: _signUpReducer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                });
                return combinedReducer(state, action);
            }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3967);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    postImageUploadLoading: false,
    postImageUploadDone: false,
    postImageUploadError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    postDeleteLoading: false,
    postDeleteDone: false,
    postDeleteError: null,
    postLoadLoading: false,
    postLoadDone: false,
    postLoadError: null,
    hasMorePosts: true,
    commentRemoveLoading: false,
    commentRemoveDone: false,
    commentRemoveError: null,
    addLikeLoading: false,
    addLikeDone: false,
    addLikeError: null,
    removeLikeLoading: false,
    removeLikeDone: false,
    removeLikeError: null,
    imagePaths: [],
    mainPosts: []
};
const postReducer = (state = initialState, action)=>(0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, (draft)=>{
        switch(action.type){
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_IMAGE_UPLOAD_REQUEST */ .JR:
                draft.postImageUploadLoading = true;
                draft.postImageUploadDone = false;
                draft.postImageUploadError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_IMAGE_UPLOAD_SUCCESS */ .M0:
                draft.postImageUploadLoading = false;
                draft.postImageUploadDone = true;
                draft.postImageUploadError = null;
                draft.imagePaths = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_IMAGE_UPLOAD_FAILURE */ ._z:
                draft.postImageUploadLoading = false;
                draft.postImageUploadDone = false;
                draft.postImageUploadError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_IMAGE_DELETE */ .i8:
                draft.imagePaths = draft.imagePaths.filter((image)=>image !== action.data
                );
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_POST_REQUEST */ .z9:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_POST_SUCCESS */ ._s:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.addPostError = null;
                draft.mainPosts.unshift(action.data);
                draft.imagePaths = [];
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_POST_FAILURE */ .tP:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_COMMENT_REQUEST */ .Ot:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_COMMENT_SUCCESS */ .nv:
                const post1 = draft.mainPosts.find((post)=>post.id === action.data.PostId
                );
                post1.Comments.push(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                draft.addCommentError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_COMMENT_FAILURE */ .rX:
                draft.addCommentLoading = false;
                draft.addCommentDone = false;
                draft.addCommentError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_DELETE_REQUEST */ .cE:
                draft.postDeleteLoading = true;
                draft.postDeleteDone = false;
                draft.postDeleteError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_DELETE_SUCCESS */ .kN:
                draft.postDeleteLoading = false;
                draft.postDeleteDone = true;
                draft.postDeleteError = null;
                draft.mainPosts = draft.mainPosts.filter((post)=>post.id !== parseInt(action.data.postId)
                );
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_DELETE_FAILURE */ .xk:
                draft.postDeleteLoading = false;
                draft.postDeleteDone = false;
                draft.postDeleteError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .SEARCH_LOAD_REQUEST */ .fc:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .HASHTAG_LOAD_REQUEST */ .rI:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_LOAD_REQUEST */ .TL:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_POST_LOAD_REQUEST */ .h4:
                draft.postLoadLoading = true;
                draft.postLoadDone = false;
                draft.postLoadError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .SEARCH_LOAD_SUCCESS */ .GD:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .HASHTAG_LOAD_SUCCESS */ .Bs:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_LOAD_SUCCESS */ .uf:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_POST_LOAD_SUCCESS */ .pn:
                draft.postLoadLoading = false;
                draft.postLoadDone = true;
                draft.postLoadError = null;
                draft.mainPosts = draft.mainPosts.concat(action.data);
                draft.hasMorePosts = action.data.length === 10;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .SEARCH_LOAD_FAILURE */ .J7:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .POST_LOAD_FAILURE */ .mC:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_POST_LOAD_FAILURE */ .Cx:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .HASHTAG_LOAD_FAILURE */ .DY:
                draft.postLoadLoading = false;
                draft.postLoadDone = false;
                draft.postLoadError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .COMMENT_REMOVE_REQUEST */ .sW:
                draft.commentRemoveLoading = true;
                draft.commentRemoveDone = false;
                draft.commentRemoveError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .COMMENT_REMOVE_SUCCESS */ .tS:
                draft.commentRemoveLoading = false;
                draft.commentRemoveDone = true;
                draft.commentRemoveError = null;
                const postWithComment = draft.mainPosts.find((post)=>post.id === parseInt(action.data.postId)
                );
                postWithComment.Comments = postWithComment.Comments.filter((comment)=>comment.id !== parseInt(action.data.commentId)
                );
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .COMMENT_REMOVE_FAILURE */ .tH:
                draft.commentRemoveLoading = false;
                draft.commentRemoveDone = false;
                draft.commentRemoveError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_LIKE_REQUEST */ .vS:
                draft.addLikeLoading = true;
                draft.addLikeDone = false;
                draft.addLikeError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_LIKE_SUCCESS */ .Nv:
                draft.addLikeLoading = false;
                draft.addLikeDone = true;
                draft.addLikeError = null;
                const postLiked = draft.mainPosts.find((post)=>post.id === parseInt(action.data.postId)
                );
                postLiked.Likers.push({
                    id: action.data.userId
                });
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .ADD_LIKE_FAILURE */ .Ss:
                draft.addLikeLoading = false;
                draft.addLikeDone = true;
                draft.addLikeError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_LIKE_REQUEST */ .jb:
                draft.removeLikeLoading = true;
                draft.removeLikeDone = false;
                draft.removeLikeError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_LIKE_SUCCESS */ .d4:
                draft.removeLikeLoading = false;
                draft.removeLikeDone = true;
                draft.removeLikeError = null;
                const postUnLiked = draft.mainPosts.find((post)=>post.id === parseInt(action.data.postId)
                );
                postUnLiked.Likers = postUnLiked.Likers.filter((like)=>like.id !== parseInt(action.data.userId)
                );
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_LIKE_REQUEST */ .jb:
                draft.removeLikeLoading = false;
                draft.removeLikeDone = false;
                draft.removeLikeError = action.data;
                break;
            default:
                break;
        }
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3967);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    signUpLoading: false,
    signUpDone: false,
    signUpError: null
};
const signUpReducer = (state = initialState, action)=>(0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, (draft)=>{
        switch(action.type){
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_REQUEST */ .pK:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_SUCCESS */ .I:
                draft.signUpDone = true;
                draft.signUpLoading = false;
                draft.signUpError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_FAILURE */ .bP:
                draft.signUpDone = false;
                draft.signUpLoading = false;
                draft.signUpError = action.data;
                break;
            default:
                break;
        }
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signUpReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3967);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    logInDone: false,
    logInLoading: false,
    logInError: null,
    logOutDone: false,
    logOutLoading: false,
    logOutError: null,
    editLoading: false,
    editDone: false,
    editError: null,
    avatarUploadLoading: false,
    avatarUploadDone: false,
    avatarUploadError: null,
    avatarEditLoading: false,
    avatarEditDone: false,
    avatarEditError: null,
    myInfoLoadLoading: false,
    myInfoLoadDone: false,
    myInfoLoadError: null,
    userLoadLoading: false,
    userLoadDone: false,
    userLoadError: null,
    userFollowLoading: false,
    userFollowDone: false,
    userFollowError: null,
    userUnFollowLoading: false,
    userUnFollowDone: false,
    userUnFollowError: null,
    followListLoadLoading: false,
    followListLoadDone: false,
    followListLoadError: null,
    hasMoreFollow: true,
    userInfo: null,
    removeFollowingLoading: false,
    removeFollowingDone: false,
    removeFollowingError: null,
    FollowersList: [],
    me: null,
    avatarPaths: "null"
};
const userReducer = (state = initialState, action)=>(0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, (draft)=>{
        switch(action.type){
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_REQUEST */ .uF:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_SUCCESS */ .RZ:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.logInError = null;
                draft.logOutDone = false;
                draft.me = action.data;
                draft.avatarPaths = action.data.avatar;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_FAILURE */ .yK:
                draft.logInDone = false;
                draft.logInLoading = false;
                draft.logInError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_REQUEST */ .Xd:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_SUCCESS */ .kV:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.logOutError = null;
                draft.logInDone = false;
                draft.me = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_FAILURE */ .mD:
                draft.logOutLoading = false;
                draft.logOutDone = false;
                draft.logOutError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_ERROR_INIT */ .KH:
                draft.logInError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_INFO_REQUEST */ .iM:
                draft.editLoading = true;
                draft.editDone = false;
                draft.editError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_INFO_SUCCESS */ .wv:
                draft.editLoading = false;
                draft.editDone = true;
                draft.editError = null;
                draft.me.nickname = action.data.nickname;
                draft.me.avatar = action.data.avatar;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .EDIT_INFO_FAILURE */ .ld:
                draft.editLoading = false;
                draft.editDone = false;
                draft.editError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_EDIT_REQUEST */ .BE:
                draft.avatarEditLoading = true;
                draft.avatarEditDone = false;
                draft.avatarEditError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_EDIT_SUCCESS */ .oR:
                draft.avatarEditLoading = false;
                draft.avatarEditDone = true;
                draft.avatarEditError = null;
                draft.avatarPaths = action.data;
                draft.me.avatar = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_EDIT_FAILURE */ .fH:
                draft.avatarEditLoading = false;
                draft.avatarEditDone = false;
                draft.avatarEditError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_UPLOAD_REQUEST */ .FI:
                draft.avatarUploadLoading = true;
                draft.avatarUploadDone = false;
                draft.avatarUploadError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_UPLOAD_SUCCESS */ .eT:
                draft.avatarUploadLoading = false;
                draft.avatarUploadDone = true;
                draft.avatarUploadError = null;
                draft.avatarPaths = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_UPLOAD_FAILURE */ .sp:
                draft.avatarUploadLoading = false;
                draft.avatarUploadDone = false;
                draft.avatarUploadError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_DELETE */ .qd:
                draft.avatarPaths = "null";
                draft.avatarUploadDone = false;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_EDIT_DELETE */ .b7:
                draft.avatarPaths = "null";
                draft.me.avatar = "null";
                draft.avatarUploadDone = false;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .MY_INFO_LOAD_REQUEST */ .Cf:
                draft.myInfoLoadLoading = true;
                draft.myInfoLoadDone = false;
                draft.myInfoLoadError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .MY_INFO_LOAD_SUCCESS */ .n$:
                draft.myInfoLoadLoading = false;
                draft.myInfoLoadDone = true;
                draft.myInfoLoadError = null;
                draft.me = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .MY_INFO_LOAD_FAILURE */ .uC:
                draft.myInfoLoadLoading = false;
                draft.myInfoLoadDone = false;
                draft.myInfoLoadError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_LOAD_REQUEST */ .es:
                draft.userLoadLoading = true;
                draft.userLoadDone = false;
                draft.userLoadError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_LOAD_SUCCESS */ .BA:
                draft.userLoadLoading = false;
                draft.userLoadDone = true;
                draft.userLoadError = null;
                draft.userInfo = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_LOAD_FAILURE */ .PQ:
                draft.userLoadLoading = false;
                draft.userLoadDone = false;
                draft.userLoadError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_FOLLOW_REQUEST */ .DL:
                draft.userFollowLoading = true;
                draft.userFollowDone = false;
                draft.userFollowError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_FOLLOW_SUCCESS */ .Yv:
                draft.userFollowLoading = false;
                draft.userFollowDone = true;
                draft.userFollowError = null;
                draft.me.Followings.push({
                    id: action.userId
                });
                draft.userInfo.Followers.push({
                    id: action.myId
                });
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_FOLLOW_FAILURE */ .YA:
                draft.userFollowLoading = false;
                draft.userFollowDone = false;
                draft.userFollowError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_UNFOLLOW_REQUEST */ .fJ:
                draft.userUnFollowLoading = true;
                draft.userUnFollowDone = false;
                draft.userUnFollowError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_UNFOLLOW_SUCCESS */ .Pr:
                draft.userUnFollowLoading = false;
                draft.userUnFollowDone = true;
                draft.userUnFollowError = null;
                draft.me.Followings = draft.me.Followings.filter((user)=>user.id !== action.userId
                );
                draft.userInfo.Followers = draft.userInfo.Followers.filter((user)=>user.id !== action.myId
                );
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .USER_UNFOLLOW_FAILURE */ .t6:
                draft.userUnFollowLoading = false;
                draft.userUnFollowDone = false;
                draft.userUnFollowError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .AVATAR_SET */ .QQ:
                draft.avatarPaths = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOWER_LOAD_REQUEST */ .Pq:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOWING_LOAD_REQUEST */ .xy:
                draft.followListLoadLoading = true;
                draft.followListLoadDone = false;
                draft.followListLoadError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOWER_LOAD_SUCCESS */ .KA:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOWING_LOAD_SUCCESS */ .RC:
                draft.followListLoadLoading = false;
                draft.followListLoadDone = true;
                draft.followListLoadError = null;
                draft.FollowersList = draft.FollowersList.concat(action.data);
                draft.hasMoreFollow = action.data.length === 8;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOWER_LOAD_FAILURE */ .rJ:
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOWING_LOAD_FAILURE */ .$f:
                draft.followListLoadLoading = false;
                draft.followListLoadDone = false;
                draft.followListLoadError = action.data;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_MY_FOLLOWING_REQUEST */ .dV:
                draft.removeFollowingLoading = true;
                draft.removeFollowingDone = false;
                draft.removeFollowingError = null;
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_MY_FOLLOWING_SUCCESS */ .R:
                draft.removeFollowingLoading = false;
                draft.removeFollowingDone = true;
                draft.removeFollowingError = null;
                draft.FollowersList = draft.FollowersList.filter((following)=>following.id !== action.data.userId
                );
                break;
            case _action_types__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_MY_FOLLOWING_FAILURE */ .NJ:
                draft.removeFollowingLoading = false;
                draft.removeFollowingDone = false;
                draft.removeFollowingError = action.data;
            default:
                break;
        }
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rootSaga)
});

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./action/postActions.ts
var postActions = __webpack_require__(3728);
// EXTERNAL MODULE: ./action/types.ts
var types = __webpack_require__(3967);
;// CONCATENATED MODULE: ./sagas/postSaga.ts




function addPostAPI(data) {
    return external_axios_default().post("/post", data);
}
function* addPost(action) {
    try {
        const result = yield (0,effects_.call)(addPostAPI, action.data);
        yield (0,effects_.put)((0,postActions/* addPostSuccessAction */.wq)(result.data));
    } catch (err) {
        yield (0,effects_.put)((0,postActions/* addPostFailureAction */.XX)(err.response.data));
    }
}
function postImageAPI(data) {
    return external_axios_default().post("/postimg", data);
}
function* addPostImage(action) {
    try {
        const result = yield (0,effects_.call)(postImageAPI, action.data);
        yield (0,effects_.put)((0,postActions/* postImageUploadSuccessAction */.MF)(result.data));
    } catch (err) {
        yield (0,effects_.put)((0,postActions/* postImageUploadFailureAction */.tO)(err.response.data));
    }
}
function addCommentAPI(data) {
    return external_axios_default().post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
    try {
        const result = yield (0,effects_.call)(addCommentAPI, action.data);
        yield (0,effects_.put)((0,postActions/* addCommentSuccessAction */.jO)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* addCommentFailureAction */.X1)(err.response.data));
    }
}
function postDeleteAPI(data) {
    return external_axios_default()["delete"](`/post/${data}`, data);
}
function* postDelete(action) {
    try {
        const result = yield (0,effects_.call)(postDeleteAPI, action.data);
        yield (0,effects_.put)((0,postActions/* postDeleteSuccessAction */.dH)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* postDeleteFailureAction */.iu)(err.response.data));
        alert(err.response.data);
    }
}
function postLoadAPI(data) {
    return external_axios_default().get(`/posts?lastId=${data || 0}`);
}
function* postLoad(action) {
    try {
        const result = yield (0,effects_.call)(postLoadAPI, action.data);
        yield (0,effects_.put)((0,postActions/* postLoadSuccessAction */.Ef)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* postLoadFailureAction */._F)(err.response?.data));
    }
}
function commentRemoveAPI(data) {
    return external_axios_default()["delete"](`/post/${data.postId}/${data.commentId}`);
}
function* commentRemove(action) {
    try {
        const result = yield (0,effects_.call)(commentRemoveAPI, action.data);
        yield (0,effects_.put)((0,postActions/* commentRemoveSuccessAction */.c$)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* commentRemoveFailureAction */.Yu)(err.response.data));
    }
}
function addLikeAPI(data) {
    return external_axios_default().patch(`/post/${data}/like`);
}
function* addLike(action) {
    try {
        const result = yield (0,effects_.call)(addLikeAPI, action.data);
        yield (0,effects_.put)((0,postActions/* addLikeSuccessAction */.Ht)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* addLikeFailureAction */.Kt)(err.response.data));
    }
}
function removeLikeAPI(data) {
    return external_axios_default()["delete"](`/post/${data}/like`);
}
function* removeLike(action) {
    try {
        const result = yield (0,effects_.call)(removeLikeAPI, action.data);
        yield (0,effects_.put)((0,postActions/* removeLikeSuccessAction */.Fz)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* removeLikeFailureAction */.y_)(err.response.data));
    }
}
function userPostLoadAPI(data) {
    return external_axios_default().get(`/posts/${data.userId}?lastId=${data.lastId || 0}`);
}
function* userPostLoad(action) {
    try {
        const result = yield (0,effects_.call)(userPostLoadAPI, action.data);
        yield (0,effects_.put)((0,postActions/* userPostLoadSuccessAction */.k_)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* userPostLoadFailureAction */.AM)(err.response.data));
    }
}
function hashtagLoadAPI(data) {
    return external_axios_default().get(`/hashtag/${encodeURIComponent(data.hashtag)}?lastId=${data.lastId || 0}`);
}
function* hashtagLoad(action) {
    try {
        const result = yield (0,effects_.call)(hashtagLoadAPI, action.data);
        yield (0,effects_.put)((0,postActions/* hashtagLoadSuccessAction */.jY)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* hashtagLoadFailureAction */.cs)(err.response.data));
    }
}
function searchPostAPI(data) {
    return external_axios_default().get(`/search/${encodeURIComponent(data.keyword)}?lastId=${data.lastId || 0}`);
}
function* searchPost(action) {
    try {
        const result = yield (0,effects_.call)(searchPostAPI, action.data);
        yield (0,effects_.put)((0,postActions/* searchLoadSuccessAction */.gG)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,postActions/* searchLoadFailureAction */.oO)(err.response.data));
    }
}
function* watchAddPost() {
    yield (0,effects_.takeLatest)(types/* ADD_POST_REQUEST */.z9, addPost);
}
function* watchAddPostImg() {
    yield (0,effects_.takeLatest)(types/* POST_IMAGE_UPLOAD_REQUEST */.JR, addPostImage);
}
function* watchAddComment() {
    yield (0,effects_.takeLatest)(types/* ADD_COMMENT_REQUEST */.Ot, addComment);
}
function* watchPostDelete() {
    yield (0,effects_.takeLatest)(types/* POST_DELETE_REQUEST */.cE, postDelete);
}
function* watchPostLoad() {
    yield (0,effects_.takeLatest)(types/* POST_LOAD_REQUEST */.TL, postLoad);
}
function* watchCommentRemove() {
    yield (0,effects_.takeLatest)(types/* COMMENT_REMOVE_REQUEST */.sW, commentRemove);
}
function* watchAddLike() {
    yield (0,effects_.takeLatest)(types/* ADD_LIKE_REQUEST */.vS, addLike);
}
function* watchRemoveLike() {
    yield (0,effects_.takeLatest)(types/* REMOVE_LIKE_REQUEST */.jb, removeLike);
}
function* watchUserPostLoad() {
    yield (0,effects_.takeLatest)(types/* USER_POST_LOAD_REQUEST */.h4, userPostLoad);
}
function* watchHashtagLoad() {
    yield (0,effects_.takeLatest)(types/* HASHTAG_LOAD_REQUEST */.rI, hashtagLoad);
}
function* watchSearchPost() {
    yield (0,effects_.takeLatest)(types/* SEARCH_LOAD_REQUEST */.fc, searchPost);
}
function* postSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchAddPost),
        (0,effects_.fork)(watchAddPostImg),
        (0,effects_.fork)(watchAddComment),
        (0,effects_.fork)(watchPostDelete),
        (0,effects_.fork)(watchPostLoad),
        (0,effects_.fork)(watchCommentRemove),
        (0,effects_.fork)(watchAddLike),
        (0,effects_.fork)(watchRemoveLike),
        (0,effects_.fork)(watchUserPostLoad),
        (0,effects_.fork)(watchHashtagLoad),
        (0,effects_.fork)(watchSearchPost), 
    ]);
};

// EXTERNAL MODULE: ./action/signUpAction.ts
var signUpAction = __webpack_require__(4362);
// EXTERNAL MODULE: ./action/userAction.ts
var userAction = __webpack_require__(8571);
;// CONCATENATED MODULE: ./sagas/signUpSaga.ts





function signUpAPI(data) {
    return external_axios_default().post("/signup", data);
}
function* signUp(action) {
    try {
        yield (0,effects_.call)(signUpAPI, action.data);
        yield (0,effects_.put)((0,signUpAction/* signUpSuccessAction */.KX)());
    } catch (err) {
        yield (0,effects_.put)((0,signUpAction/* signUpFailureAction */.E6)(err.response.data));
        alert(err.response.data);
    }
}
function avatarUploadAPI(data) {
    return external_axios_default().post("/avatar", data);
}
function* avatarUpload(action) {
    try {
        const result = yield (0,effects_.call)(avatarUploadAPI, action.data);
        yield (0,effects_.put)((0,userAction/* avatarUploadSuccessAction */.dp)(result.data));
    } catch (err) {
        yield (0,effects_.put)((0,userAction/* avatarUploadFailureAction */.hr)(err.response.data));
    }
}
function* watchUploadAvatar() {
    yield (0,effects_.takeLatest)(types/* AVATAR_UPLOAD_REQUEST */.FI, avatarUpload);
}
function* watchSignUp() {
    yield (0,effects_.takeLatest)(types/* SIGN_UP_REQUEST */.pK, signUp);
}
function* signUpSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchSignUp),
        (0,effects_.fork)(watchUploadAvatar)
    ]);
};

;// CONCATENATED MODULE: ./sagas/userSaga.ts




function logInAPI(data) {
    return external_axios_default().post("/login", data);
}
function* logIn(action) {
    try {
        const result = yield (0,effects_.call)(logInAPI, action.data);
        yield (0,effects_.put)((0,userAction/* logInSuccessAction */.Bx)(result.data));
    } catch (err) {
        yield (0,effects_.put)((0,userAction/* logInFailureAction */.fr)(err.response.data));
        alert(err.response.data);
    }
}
function logOutAPI() {
    return external_axios_default().post("/logout");
}
function* logOut() {
    try {
        yield (0,effects_.call)(logOutAPI);
        yield (0,effects_.put)((0,userAction/* logOutSuccessAction */.Xr)());
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* logOutFailureAction */.BO)(err.response.data));
    }
}
function myInfoLoadAPI() {
    return external_axios_default().get("/user");
}
function* myInfoLoad() {
    try {
        const result = yield (0,effects_.call)(myInfoLoadAPI);
        yield (0,effects_.put)((0,userAction/* myInfoLoadSuccessAction */.N1)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* myInfoLoadFailureAction */.SP)(err.response?.data));
    }
}
function userLoadAPI(data) {
    return external_axios_default().get(`/user/${data}`);
}
function* userLoad(action) {
    try {
        const result = yield (0,effects_.call)(userLoadAPI, action.data);
        yield (0,effects_.put)((0,userAction/* userLoadSuccessAction */.hh)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* userLoadFailureAction */.aH)(err.response.data));
    }
}
function followAPI(data) {
    return external_axios_default().post(`/user/${data}/follow`);
}
function* userFollow(action) {
    try {
        const result = yield (0,effects_.call)(followAPI, action.data);
        yield (0,effects_.put)((0,userAction/* userFollowSuccessAction */.ui)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* userFollowFailureAction */.N0)(err.response.data));
        alert(err.response.data);
    }
}
function unFollowAPI(data) {
    return external_axios_default()["delete"](`/user/${data}/follow`);
}
function* userUnFollow(action) {
    try {
        const result = yield (0,effects_.call)(unFollowAPI, action.data);
        yield (0,effects_.put)((0,userAction/* userUnFollowSuccessAction */.mE)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* userUnFollowFailureAction */.hz)(err.response?.data));
        alert(err.response.data);
    }
}
function followingLoadAPI(data) {
    return external_axios_default().get(`/user/followinglist?lastId=${data || 0}`);
}
function* followingLoad(action) {
    try {
        const result = yield (0,effects_.call)(followingLoadAPI, action.data);
        yield (0,effects_.put)((0,userAction/* followingLoadSuccessAction */.ah)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* followingLoadFailureAction */.SQ)(err.response?.data));
    }
}
function* removeMyFollowing(action) {
    try {
        const result = yield (0,effects_.call)(unFollowAPI, action.data);
        yield (0,effects_.put)((0,userAction/* removeMyFollowingSuccessAction */.$)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* removeMyFollowingFailureAction */.qV)(err.response?.data));
    }
}
function followerLoadAPI(data) {
    return external_axios_default().get(`/user/followerlist?lastId=${data || 0}`);
}
function* followerLoad(action) {
    try {
        const result = yield (0,effects_.call)(followerLoadAPI, action.data);
        yield (0,effects_.put)((0,userAction/* followerLoadSuccessAction */.pc)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* followerLoadFailureAction */.Pi)(err.response?.data));
    }
}
function* watchUserLoad() {
    yield (0,effects_.takeLatest)(types/* USER_LOAD_REQUEST */.es, userLoad);
}
function* watchLogin() {
    yield (0,effects_.takeLatest)(types/* LOG_IN_REQUEST */.uF, logIn);
}
function* watchLogOut() {
    yield (0,effects_.takeLatest)(types/* LOG_OUT_REQUEST */.Xd, logOut);
}
function* watchMyInfoLoad() {
    yield (0,effects_.takeLatest)(types/* MY_INFO_LOAD_REQUEST */.Cf, myInfoLoad);
}
function* watchFollow() {
    yield (0,effects_.takeLatest)(types/* USER_FOLLOW_REQUEST */.DL, userFollow);
}
function* watchUnFollow() {
    yield (0,effects_.takeLatest)(types/* USER_UNFOLLOW_REQUEST */.fJ, userUnFollow);
}
function* watchFollowingLoad() {
    yield (0,effects_.takeLatest)(types/* FOLLOWING_LOAD_REQUEST */.xy, followingLoad);
}
function* watchMyFollowingRemove() {
    yield (0,effects_.takeLatest)(types/* REMOVE_MY_FOLLOWING_REQUEST */.dV, removeMyFollowing);
}
function* watchFollowerLoad() {
    yield (0,effects_.takeLatest)(types/* FOLLOWER_LOAD_REQUEST */.Pq, followerLoad);
}
function* userSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchLogin),
        (0,effects_.fork)(watchLogOut),
        (0,effects_.fork)(watchMyInfoLoad),
        (0,effects_.fork)(watchUserLoad),
        (0,effects_.fork)(watchFollow),
        (0,effects_.fork)(watchUnFollow),
        (0,effects_.fork)(watchFollowingLoad),
        (0,effects_.fork)(watchFollowerLoad),
        (0,effects_.fork)(watchMyFollowingRemove), 
    ]);
};

;// CONCATENATED MODULE: ./sagas/editInfoSaga.ts




function editInfoAPI(data) {
    return external_axios_default().post("/editinfo", data);
}
function* editInfo(action) {
    try {
        const result = yield (0,effects_.call)(editInfoAPI, action.data);
        yield (0,effects_.put)((0,userAction/* editInfoSuccessAction */.N6)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* editInfoFailureAction */.GJ)(err.response.data));
    }
}
function avatarEditAPI(data) {
    return external_axios_default().post("/editavatar", data);
}
function* avatarEdit(action) {
    try {
        const result = yield (0,effects_.call)(avatarEditAPI, action.data);
        yield (0,effects_.put)((0,userAction/* avatarEditSuccessAction */.oi)(result.data));
    } catch (err) {
        console.error(err);
        yield (0,effects_.put)((0,userAction/* avatarEditFailureAction */.SI)(err.response.data));
    }
}
function* watchEditInfo() {
    yield (0,effects_.takeLatest)(types/* EDIT_INFO_REQUEST */.iM, editInfo);
}
function* watchAvatarEdit() {
    yield (0,effects_.takeLatest)(types/* AVATAR_EDIT_REQUEST */.BE, avatarEdit);
}
function* editInfoSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchEditInfo),
        (0,effects_.fork)(watchAvatarEdit)
    ]);
};

;// CONCATENATED MODULE: ./sagas/index.ts






(external_axios_default()).defaults.baseURL = "http://localhost:4000";
(external_axios_default()).defaults.withCredentials = true;
function* rootSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(userSaga),
        (0,effects_.fork)(postSaga),
        (0,effects_.fork)(signUpSaga),
        (0,effects_.fork)(editInfoSaga), 
    ]);
};


/***/ }),

/***/ 4601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9762);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6537);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3553);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers__WEBPACK_IMPORTED_MODULE_3__]);
_reducers__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const configureStore = ()=>{
    const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
    const middlewares = [
        sagaMiddleware
    ];
    const enhancer =  true ? (0,redux__WEBPACK_IMPORTED_MODULE_1__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)) : 0;
    const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, enhancer);
    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
    debug: "production" === "development"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;