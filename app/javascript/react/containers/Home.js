import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="home">
        <h1>Dashboard</h1>
        <p>Welcome to Thank you places</p>
        <h3>This is where a cool overview will go</h3>
        <p>I am thinking of having all the spaces here showing what event is happening this hour and the next hour</p>
        <p>Maybe a cool button that will randomly select and present the user a space that is not in use?</p>
      </div>
    )
  }
}

export default Home
