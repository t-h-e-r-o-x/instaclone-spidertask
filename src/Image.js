import React from "react";
import "./Image.css";

const Image = ({user, onClickHandle}) => {
  const {name, username, profile_pic, post} = user;
  return(
    <div className = "Img" onClick ={() => onClickHandle(user)}>
      <div className = "Img_intro">
        <img src = {profile_pic} alt = {name} className = "Img_profile_pic" />
        <p className = "Img_username">{username}</p>
      </div>
        <img className = "Img_pic" src = {post.image} alt = {name} />
    </div>
  );
};

export default Image;
