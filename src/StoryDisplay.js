import React from 'react';
import "./StoryDisplay.css";
class StoryDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storyClick:false
    }
  }

  /*storyClicked = () => {
    this.setState({storyClick: true});
    this.props.createDelayforStory(this.state.storyClick);
  }
  */

  onLoadImage = () => {
    this.props.createDelayforStory(this.state.storyClick);
  }

  render(){
    return(
      <div className = "StoryTime">
        <img className = "Story_image" src = {this.props.storyFor.story[this.props.item]}  onLoad ={this.onLoadImage} onClick = {this.storyClicked} />
      </div>
      );
    };
}

export default StoryDisplay;

//({handleStoryEnd, storyFor}) =>
//= ({handleStoryEnd, storyFor}) =>
/*{this.props.storyFor.story.map( url => {
  setTimeout (function() {
    return <img src ={url} className = "Story_image" />
  }, 1000)
})
}*/


/*{this.props.storyFor.story.map( url => {
  return <img src = {url} className = "Story_image" onLoad = {this.onLoadImage} />
})
}
*/
