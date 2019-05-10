import React, { Component } from 'react'

import NavTile from "../components/NavTile"

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let navInformation = [
      {
        iconClass: "fa fa-home",
        label: "Home",
        view: "/"
      },
      {
        iconClass: "fa fa-map",
        label: "Spaces",
        view: "spaces"
      },
      {
        iconClass: "fa fa-map-marked",
        label: "Add Space",
        view: "addSpace"
      },
      {
        iconClass: "fa fa-calendar-alt",
        label: "Events",
        view: "events"
      },
      {
        iconClass: "fa fa-calendar-plus",
        label: "Add Event",
        view: "addEvent"
      },
    ]

    let currentView = this.props.currentView

    let navigation = navInformation.map((nav, index) => {
      let active = false
      if (`nav-${nav.view}` === currentView) {
        active = true
      }
      return (
        <NavTile
          key={index}
          isActive={active}
          iconClass={nav.iconClass}
          label={nav.label}
          view={nav.view}
          handleClickMethod={this.props.onClick}
        />
      )
    })

    return(
      <section id="sideMenu" className="dashboard-sidemenu">
        <nav className="dashboard-sidemenu-nav">
          { navigation }
        </nav>
      </section>
    )
  }
}

export default SideMenu
