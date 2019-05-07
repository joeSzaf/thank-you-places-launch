import React, { Component } from 'react'
import { Link } from 'react-router'

import SpaceTile from '../components/SpaceTile'

class SpacesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
      return(
        <div className="">
         <p>Hello from the Spaces Index Page!</p>
         <SpaceTile />
         <SpaceTile />
        </div>
      )
  }
}

export default SpacesContainer
