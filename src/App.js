import React, { Component } from 'react';
import "./App.css";
import { data } from "./data";
import Storybar from "./Storybar";
import Feed from "./Feed";
import StoryDisplay from "./StoryDisplay";

const initialStuff = {
    data : data,
    activeStory: false,
    activeFor: {},
    index: 0
  }

class App extends Component {
  constructor(){
    super();
    this.state = initialStuff;
  }

  handleStory = (user) => {
    this.setState({activeStory: true, activeFor: user});
  }

  createDelayforStory = (click) => {
    if(click === false){
      setTimeout(function(){
        this.setState({index: this.state.index + 1});
        if(this.state.index >= this.state.activeFor.story.length)
        this.setState(initialStuff);
      }.bind(this), 3500)
    }
    else {
      this.setState({index: this.state.index + 1});
      if(this.state.index >= this.state.activeFor.story.length)
      this.setState(initialStuff);
    }
  }

  /*advanceStory = () => {
    this.setState({storyClick: true});
    this.createDelayforStory();
  }
  */

  /*handleStoryEnd = () => {
    this.setState(initialStuff);
  }

  */

    render(){
      const filteredData = this.state.data.filter( item => {
        return item.id != 10;
      })

      const viewer = this.state.data[9];
      return(
      <div>
          <div>
            {this.state.activeStory === true?
              <div className = "AppStory">
                <StoryDisplay createDelayforStory = {this.createDelayforStory} advanceStory = {this.advanceStory} item = {this.state.index} storyFor = {this.state.activeFor}/>
                </div>
                :
                <div className = "App">
                <Feed data = {filteredData} viewer = {viewer}  />
                <Storybar data = {filteredData} handleStory = {this.handleStory} />
              </div>
              }
          </div>
      </div>
    );
  }
}

export default App;
/*  {this.state.activeStory === true?
  <StoryDisplay handleStoryEnd = {this.handleStoryEnd} storyFor = {this.state.activeFor} />
  :

  */
