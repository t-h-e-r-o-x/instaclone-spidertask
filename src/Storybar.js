import React from 'react';
import "./Storybar.css";
import UserStory from "./UserStory";

class Storybar extends React.Component{
  constructor(props){
    super(props);
  }

handleClick = (user) => {
    this.props.handleStory(user);
  }

  render(){
  const {data} = this.props;
    return (
    <aside className = "Storybar">
      <h3 className = "Storybar_heading">Stories!</h3>
      {data.map(item => <UserStory user = {item} key = {item.id} handleClick = {this.handleClick} />)}
    </aside>
  );
};
}


export default Storybar;

//handleClick = {this.handleClick}
//= ({data, handleStory}) =>
