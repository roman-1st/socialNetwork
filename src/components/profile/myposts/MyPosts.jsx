import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();


  let addPost = () => {
    
    props.addPost()


  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3> my posts </h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText} />
        </div>
        <div> <button onClick={addPost}> Add Post </button> </div>
      </div>
      <div className={s.posts}>
        New post
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts