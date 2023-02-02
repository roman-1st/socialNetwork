import React from "react";
import MyPosts from "./myposts/MyPosts.jsx";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {


  return (
    <main >
      <ProfileInfo />
      <MyPosts 
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </main>
  )
}

export default Profile

