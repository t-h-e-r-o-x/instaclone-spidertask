import React from 'react';
import "./UserStory.css";

const UserStory = ({user, handleClick}) => {
  const {name, username, profile_pic} = user;

  return(
    <div className = "User">
      <img src = {profile_pic} alt = {name} className = "User_pic" onClick = {() => handleClick(user)}/>
      <div className = "User_details">
        <p className = "User_details-name">{name}</p>
        <p className = "User_details-username">{username}</p>
      </div>
    </div>
  );
}

export default UserStory;


//onClick = {() => handleClick(user)}
