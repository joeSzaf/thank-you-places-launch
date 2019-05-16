import React, { Component } from 'react'
import { Link } from 'react-router'

import EventTableWeek from '../components/EventTableWeek'

class EventsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return(
      <div className="content-container">
        <h1 className="title-h1">Events this week!</h1>
        <EventTableWeek
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}

export default EventsContainer
