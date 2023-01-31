import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea />
        <button> Add Post </button>
      </div>
      <div className={s.posts}>
        New post
        <Post message="Hi, gow are you?" likesCount="15" />
        <Post message="It's my first post" likesCount="20"/>
      </div>
    </div>
  )
}

export default MyPosts