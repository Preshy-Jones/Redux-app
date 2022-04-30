import React from "react";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/index";
import PropTypes from "prop-types";
import PostForm from "./PostForm";

const Post = (props) => {
  const previousProp = useRef(props);
  useEffect(() => {
    props.fetchPosts();
    // if (previousProp.current.newPost !== props.newPost) {
    //   props.posts.unshift(props.newPost);
    // }
    // previousProp.current = props;
  }, []);
  useEffect(() => {
    console.log("hello");
    console.log(props.posts);
    props.posts.unshift(props.newPost);
  }, [props.newPost]);
  return (
    <div>
      <PostForm />
      <div>
        <h1>{props.posts.length} posts</h1>
        {props.posts.map((post, index) => {
          return (
            <div key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Post);
