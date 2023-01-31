import React from "react";
import MyPosts from "./myposts/MyPosts.jsx";
import s from './Profile.module.css';


const Profile = () => {
    return (
      <main>
      <div>
        <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg' />
      </div>
      <div>
        ava + description
      </div>
     <MyPosts />
    </main>
    )
}

export default Profile