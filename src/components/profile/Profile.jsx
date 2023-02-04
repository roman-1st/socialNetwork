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
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        
      />
    </main>
  )
}

export default Profile

