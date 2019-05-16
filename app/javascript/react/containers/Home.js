import React, { Component } from 'react'

import CurrentSpaceUseTable from "../components/CurrentSpaceUseTable"
import EventTableWeek from "../components/EventTableWeek"
import PatronManagerImporter from "../containers/PatronManagerImporter"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="content-container home">
        <h1 className="title-h1">Welcome to Thank you places</h1>
        <p>A place to organize and plan your organizational needs.</p>
        <CurrentSpaceUseTable />
      </div>
    )
  }
}

export default Home
