import React,{Component} from 'react';
import "./Feed.css";
import Header from "./Header";
import Image from "./Image";
import ModalImage from "./ModalImage";

 const initialState = {
   growUser: {},
   active: false
 }

class Feed extends Component{
  constructor(props){
    super(props);
    this.state = initialState;
  }

  onClickHandle = (user) => {
    this.setState({growUser: user, active: true})
  }

  onGoBack = () => {
    this.setState(initialState);
  }

  render(){
  return (
    <main className="Feed">
      {this.state.active === true?
      <ModalImage user = {this.state.growUser}  onGoBack = {this.onGoBack}/>
    :
  <div>
    <Header user = {this.props.viewer}/>
    {this.props.data.map(item => <Image user = {item} key = {item.id} onClickHandle = {this.onClickHandle} />)}
  </div>
      }
    </main>
  );
 };
}

export default Feed;
