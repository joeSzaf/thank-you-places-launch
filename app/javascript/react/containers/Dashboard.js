import React, { Component } from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import SpacesContainer from '../containers/SpacesContainer'
import SpaceShowContainer from '../containers/SpaceShowContainer'
import SpaceEditContainer from '../containers/SpaceEditContainer'
import SpaceNewFormContainer from '../containers/SpaceNewFormContainer'
import EventsContainer from '../containers/EventsContainer'
import EventShowContainer from '../containers/EventShowContainer'
import EventNewFormContainer from '../containers/EventNewFormContainer'
import EventEditContainer from '../containers/EventEditContainer'
import TopBar from '../components/TopBar'
import PatronManagerImporter from '../containers/PatronManagerImporter'
import EmployeesContainer from '../containers/EmployeesContainer'

import SideMenu from '../containers/SideMenu'
import Home from '../containers/Home'

//font Clicker Script logomakr.com

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "nav-home",
      selectedSpaceId: "",
      selectedEventId: ""
    }
    this.handleNavChange = this.handleNavChange.bind(this)
    this.handleSpaceShowClick = this.handleSpaceShowClick.bind(this)
    this.handleEventShowClick = this.handleEventShowClick.bind(this)
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

  handleEventShowClick(event) {
    this.setState( {
      selectedEventId: event.target.attributes.to.textContent,
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
      content =
        <EventsContainer
          onClick={this.handleEventShowClick}
        />
    } else if (this.state.currentView === 'nav-addSpace') {
      content = <SpaceNewFormContainer />
    } else if (this.state.currentView === 'nav-addEvent') {
      content = <EventNewFormContainer />
    } else if (this.state.currentView === 'nav-employees') {
      content = <EmployeesContainer />
    } else if (this.state.currentView === 'link-showSpace') {
      content =
        <SpaceShowContainer
          id={this.state.selectedSpaceId}
          handleNavChange={this.handleNavChange}
        />
    } else if (this.state.currentView === 'link-showEvent') {
      content =
        <EventShowContainer
          id={this.state.selectedEventId}
          handleNavChange={this.handleNavChange}
        />
    } else if (this.state.currentView === 'link-editSpace') {
      content =
        <SpaceEditContainer
          id={this.state.selectedSpaceId}
          handleNavChange={this.handleNavChange}
        />
    } else if (this.state.currentView === 'link-editEvent') {
      content =
        <EventEditContainer
          id={this.state.selectedEventId}
          handleNavChange={this.handleNavChange}
        />
    } else if (this.state.currentView === 'nav-addPmEvent') {
      content =
        <PatronManagerImporter
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

      <section className="dashboard-content-wrapper">
        <TopBar />
        <div className="content-wrapper">
          {content}
        </div>
      </section>

      </div>
    )
  }
}

export default Dashboard
