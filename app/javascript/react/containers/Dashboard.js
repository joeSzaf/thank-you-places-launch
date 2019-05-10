import React, { Component } from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import SpacesContainer from '../containers/SpacesContainer'
import SpaceShowContainer from '../containers/SpaceShowContainer'
import SpaceNewFormContainer from '../containers/SpaceNewFormContainer'
import EventsContainer from '../containers/EventsContainer'
import EventShowContainer from '../containers/EventShowContainer'
import EventNewFormContainer from '../containers/EventNewFormContainer'

import SideMenu from '../containers/SideMenu'
import Home from '../containers/Home'


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "nav-/"
    }
    this.handleNavChange = this.handleNavChange.bind(this)
  }

  handleNavChange(event) {
    this.setState( { currentView: event.target.id } )
  }

  render(){
    let content

    if (this.state.currentView === 'nav-spaces') {
      content = <SpacesContainer />
    } else if (this.state.currentView === 'nav-events') {
      content = <EventsContainer />
    } else if (this.state.currentView === 'nav-addSpace') {
      content = <SpaceNewFormContainer />
    } else if (this.state.currentView === 'nav-addEvent') {
      content = <EventNewFormContainer />
    } else {
      content = <Home />
    }

    return(
      <div className="dashboard-wrapper">
        <SideMenu
          currentView={this.state.currentView}
          onClick={this.handleNavChange}
        />
        <section className="dashboard-content-area">
          {content}
        </section>

      </div>
    )
  }
}

export default Dashboard
