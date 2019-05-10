import React, { Component } from 'react'

import Home from "../containers/Home"
import SpacesContainer from "../containers/SpacesContainer"

class DashboardContentArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_view: "/"
    }
  }

  render(){

    let content = ""
    if (this.state.current_view === "spaces") {
      content = <SpacesContainer />
    } else {
      content = <Home />
    }

    return(
      <section className="dashboard-content-area">
        <div className="content">
          {content}
        </div>
      </section>
    )
  }
}

export default DashboardContentArea
