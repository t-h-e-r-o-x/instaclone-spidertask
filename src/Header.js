import React from "react";
import "./Header.css";

const Header = ({user}) => {
  const { name, profile_pic } = user;
  return (
    <header className = "Header">
      <img src = {profile_pic} alt = {name} className = "Header_pic" />
      <h3 className = "Header_name">{`Hi ${name}!`}<i>  Welcome to your InstaFeed</i></h3>
    </header>
  );
};

export default Header;
