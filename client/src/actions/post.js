import axios from 'axios';
import {
   GET_POSTS,
   GET_POST,
   GET_POSTS_BY_TAG,
   ADD_POST,
   DELETE_POST,
   POST_ERROR,
   ADD_COMMENT,
   DELETE_COMMENT,
   UPDATE_LIKES,
   EDIT_POST
} from "./types";
import {UNLIKE} from "../utils/enums";

// Get Posts
export const getPosts = () => async dispatch => {
   try {
      const res = await axios.get('/api/posts');

      dispatch({
         type: GET_POSTS,
         payload: res.data
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
   }
};

// Get Posts
export const getPostsByTag = tag => async dispatch => {
   try {
      const res = await axios.get(`/api/tag/${tag}`);

      dispatch({
         type: GET_POSTS_BY_TAG,
         payload: res.data
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
   }
};

// Get Post
export const getPost = postId => async dispatch => {
   try {
      const res = await axios.get(`/api/posts/${postId}`);

      dispatch({
         type: GET_POST,
         payload: res.data
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
   }
};

// Add Post
export const addPost = formData => async dispatch => {
   try {
      const res = await axios.post('/api/posts', formData);
      dispatch({
         type: ADD_POST,
         payload: res.data
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
      throw e;
   }
};

// Edit Post
export const editPost = (formData) => async dispatch => {
   console.log('hit');
   try {
      const res = await axios.post('/api/posts', formData);
      dispatch({
         type: EDIT_POST,
         payload: res.data
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
      throw e;
   }
};

// Delete Post
export const deletePost = postId => async dispatch => {
   try {
      await axios.delete(`/api/posts/${postId}`);
      dispatch({
         type: DELETE_POST,
         payload: {postId}
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
      throw e;
   }
};

// Add a Comment
export const addComment = (comment, postId) => async dispatch => {
   try {
      const res = await axios.post(`/api/posts/${postId}/comment`, comment);
      dispatch({
         type: ADD_COMMENT,
         payload: res.data
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
      throw e;
   }
};

// Delete a Comment
export const deleteComment = (postId, commentId) => async dispatch => {
   try {
      await axios.delete(`/api/posts/${postId}/comment/${commentId}`);
      dispatch({
         type: DELETE_COMMENT,
         payload: {commentId}
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
      throw e;
   }
};


// Like/unlike a Post
export const updateLikes = (postId, type) => async dispatch => {
   try {
      const res = await axios.put(`/api/posts/${postId}/${type === UNLIKE ? 'un' : ''}like`);
      dispatch({
         type: UPDATE_LIKES,
         payload: {likes: res.data}
      });

   } catch (e) {
      dispatch({
         type: POST_ERROR,
         payload: {msg: e.response.statusText, status: e.response.status}
      });
      throw e;
   }
};


