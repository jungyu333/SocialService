import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  addCommentFailureAction,
  addCommentSuccessAction,
  addLikeFailureAction,
  addLikeSuccessAction,
  addPostFailureAction,
  addPostSuccessAction,
  commentRemoveFailureAction,
  commentRemoveSuccessAction,
  hashtagLoadFailureAction,
  hashtagLoadSuccessAction,
  postDeleteFailureAction,
  postDeleteSuccessAction,
  postImageUploadFailureAction,
  postImageUploadSuccessAction,
  postLoadFailureAction,
  postLoadSuccessAction,
  removeLikeFailureAction,
  removeLikeSuccessAction,
  searchLoadFailureAction,
  searchLoadSuccessAction,
  userPostLoadFailureAction,
  userPostLoadSuccessAction,
} from "../action/postActions";
import {
  ADD_COMMENT_REQUEST,
  ADD_LIKE_REQUEST,
  ADD_POST_REQUEST,
  COMMENT_REMOVE_REQUEST,
  HASHTAG_LOAD_REQUEST,
  POST_DELETE_REQUEST,
  POST_IMAGE_UPLOAD_REQUEST,
  POST_LOAD_REQUEST,
  REMOVE_LIKE_REQUEST,
  SEARCH_LOAD_REQUEST,
  USER_POST_LOAD_REQUEST,
} from "../action/types";

function addPostAPI(data) {
  return axios.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);

    yield put(addPostSuccessAction(result.data));
  } catch (err) {
    yield put(addPostFailureAction(err.response.data));
  }
}

function postImageAPI(data) {
  return axios.post("/postimg", data);
}

function* addPostImage(action) {
  try {
    const result = yield call(postImageAPI, action.data);

    yield put(postImageUploadSuccessAction(result.data));
  } catch (err) {
    yield put(postImageUploadFailureAction(err.response.data));
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);

    yield put(addCommentSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(addCommentFailureAction(err.response.data));
  }
}

function postDeleteAPI(data) {
  return axios.delete(`/post/${data}`, data);
}

function* postDelete(action) {
  try {
    const result = yield call(postDeleteAPI, action.data);
    yield put(postDeleteSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(postDeleteFailureAction(err.response.data));
    alert(err.response.data);
  }
}

function postLoadAPI(data) {
  return axios.get(`/posts?lastId=${data || 0}`);
}

function* postLoad(action) {
  try {
    const result = yield call(postLoadAPI, action.data);

    yield put(postLoadSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(postLoadFailureAction(err.response?.data));
  }
}

function commentRemoveAPI(data) {
  return axios.delete(`/post/${data.postId}/${data.commentId}`);
}

function* commentRemove(action) {
  try {
    const result = yield call(commentRemoveAPI, action.data);

    yield put(commentRemoveSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(commentRemoveFailureAction(err.response.data));
  }
}

function addLikeAPI(data) {
  return axios.patch(`/post/${data}/like`);
}

function* addLike(action) {
  try {
    const result = yield call(addLikeAPI, action.data);

    yield put(addLikeSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(addLikeFailureAction(err.response.data));
  }
}

function removeLikeAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

function* removeLike(action) {
  try {
    const result = yield call(removeLikeAPI, action.data);

    yield put(removeLikeSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(removeLikeFailureAction(err.response.data));
  }
}

function userPostLoadAPI(data) {
  return axios.get(`/posts/${data.userId}?lastId=${data.lastId || 0}`);
}

function* userPostLoad(action) {
  try {
    const result = yield call(userPostLoadAPI, action.data);

    yield put(userPostLoadSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(userPostLoadFailureAction(err.response.data));
  }
}

function hashtagLoadAPI(data) {
  return axios.get(
    `/hashtag/${encodeURIComponent(data.hashtag)}?lastId=${data.lastId || 0}`
  );
}

function* hashtagLoad(action) {
  try {
    const result = yield call(hashtagLoadAPI, action.data);

    yield put(hashtagLoadSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(hashtagLoadFailureAction(err.response.data));
  }
}

function searchPostAPI(data) {
  return axios.get(
    `/search/${encodeURIComponent(data.keyword)}?lastId=${data.lastId || 0}`
  );
}

function* searchPost(action) {
  try {
    const result = yield call(searchPostAPI, action.data);
    yield put(searchLoadSuccessAction(result.data));
  } catch (err) {
    console.error(err);
    yield put(searchLoadFailureAction(err.response.data));
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddPostImg() {
  yield takeLatest(POST_IMAGE_UPLOAD_REQUEST, addPostImage);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchPostDelete() {
  yield takeLatest(POST_DELETE_REQUEST, postDelete);
}

function* watchPostLoad() {
  yield takeLatest(POST_LOAD_REQUEST, postLoad);
}

function* watchCommentRemove() {
  yield takeLatest(COMMENT_REMOVE_REQUEST, commentRemove);
}

function* watchAddLike() {
  yield takeLatest(ADD_LIKE_REQUEST, addLike);
}

function* watchRemoveLike() {
  yield takeLatest(REMOVE_LIKE_REQUEST, removeLike);
}

function* watchUserPostLoad() {
  yield takeLatest(USER_POST_LOAD_REQUEST, userPostLoad);
}

function* watchHashtagLoad() {
  yield takeLatest(HASHTAG_LOAD_REQUEST, hashtagLoad);
}

function* watchSearchPost() {
  yield takeLatest(SEARCH_LOAD_REQUEST, searchPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddPostImg),
    fork(watchAddComment),
    fork(watchPostDelete),
    fork(watchPostLoad),
    fork(watchCommentRemove),
    fork(watchAddLike),
    fork(watchRemoveLike),
    fork(watchUserPostLoad),
    fork(watchHashtagLoad),
    fork(watchSearchPost),
  ]);
}
