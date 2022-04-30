import {
  DECREMENT,
  FETCH_POSTS,
  INCREMENT,
  LOADING,
  NEW_POST,
} from "../types/types";

export const increment = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const fetchPosts = () => (dispatch) => {
  console.log("fetching");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
      // console.log(posts);
    });
};

export const createPost = (post) => (dispatch) => {
  console.log("create new");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((post) => {
      dispatch({
        type: NEW_POST,
        payload: post,
      });
      console.log(post);
    });
};
