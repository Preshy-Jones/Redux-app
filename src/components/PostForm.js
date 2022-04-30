import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/index";
import PropTypes from "prop-types";

function PostForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
    };
    props.createPost(post);
  };

  return (
    <div>
      <h1>Add post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
