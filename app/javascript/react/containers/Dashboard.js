import React, { Component } from 'react'

import Table from '../components/Table'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="dashboard-wrapper">
        <section id="sideMenu" className="dashboard-sidemenu">
          <nav className="dashboard-sidemenu-nav">
            <a href='#' className="active">
              <i className="fa fa-home"></i>Item</a>
            <a href='#'><i className="fa fa-home"></i> Item</a>
            <a href='#'><i className="fa fa-plane"></i> Item</a>
            <a href='#'><i className="fa fa-home"></i> Item</a>
            <a href='#'><i className="fa fa-home"></i> Item</a>
            <a href='#'><i className="fa fa-home"></i> Item</a>
          </nav>
        </section>

        <section className="dashboard-content-area">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to Thank you places</p>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <Table />
            </div>
            <div className="large-6 columns">
              <Table />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard
