import React from 'react';
import "./ModalImage.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const ModalImage = ({user, onGoBack}) => {
  const {post, profile_pic, name, username} = user;
  return(
    <div className = "Img_card" onClick = {() => onGoBack()}>
      <div className = "Img_infoo">
        <img src = {profile_pic} alt = {name} className = "Img_profile_picc" />
        <p>{username}</p>
        <p>{`${post.time} hours ago`}</p>
        <p className = "Img_profile_picc">{post.likes}<i className="fa fa-heart"></i></p>
        <p>{`\"${post.caption}\"`}</p>
        <p>{post.hashtag}</p>
      </div>
        <img className = "Img_picc" src = {post.image} alt = {name} />
    </div>
  );
}

export default ModalImage;
