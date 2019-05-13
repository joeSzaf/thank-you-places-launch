import React, { Component } from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import SpacesContainer from '../containers/SpacesContainer'
import SpaceShowContainer from '../containers/SpaceShowContainer'
import SpaceEditContainer from '../containers/SpaceEditContainer'
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
      currentView: this.props.currentView,
      selectedSpaceId: "",
      selectedEventId: ""
    }
    this.handleNavChange = this.handleNavChange.bind(this)
    this.handleSpaceShowClick = this.handleSpaceShowClick.bind(this)
  }

  handleNavChange(event) {
    this.setState( { currentView: event.target.attributes.to.textContent } )
  }

  handleSpaceShowClick(event) {
    this.setState( {
      selectedSpaceId: event.target.attributes.to.textContent,
      currentView: event.target.classList[0]
    } )
  }

  render(){
    let content

    if (this.state.currentView === 'nav-spaces') {
      content =
        <SpacesContainer
          onClick={this.handleSpaceShowClick}
        />
    } else if (this.state.currentView === 'nav-events') {
      content = <EventsContainer />
    } else if (this.state.currentView === 'nav-addSpace') {
      content = <SpaceNewFormContainer />
    } else if (this.state.currentView === 'nav-addEvent') {
      content = <EventNewFormContainer />
    } else if (this.state.currentView === 'link-showSpace') {
      content =
        <SpaceShowContainer
          id={this.state.selectedSpaceId}
          handleNavChange={this.handleNavChange}
        />
    } else if (this.state.currentView === 'link-editSpace') {
      content =
        <SpaceEditContainer
          id={this.state.selectedSpaceId}
          handleNavChange={this.handleNavChange}
        />
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
