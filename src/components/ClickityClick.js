// Code ClickityClick Component Here
import React, { Component } from 'react'
export default class ClickityClick extends Component{
  constructor(props){
    super(props)
    //initial state upon creation
    this.state ={
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      },
    }
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
  }
  render(){
    return(
      <div>
        <p>I have {this.state.hasBeenClicked? null: 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    ) 
  }
} 