import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <main>
      <div>
        <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </main>
  )
}

export default ProfileInfo