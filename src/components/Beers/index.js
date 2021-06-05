import { Component } from "react";

export default class Beers extends Component {
  //props - what we recieve
  constructor(props) {
    super(props);

    //state - local storage
    this.state = {}; //this has to be an object
  }

  //render - what gets displayed
  //JSX
  //who translate JSX - Babel. which translate to react elements

  render() {
      const{name,age} = this.props;
       
      return (
        <div>{name},{age}</div>
    );
  }

}
