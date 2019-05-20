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
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=MWdndHNzYzlla3RubmtlM2Z2bjg4NGViZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;mode=WEEK" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    )
  }
}

export default EventsContainer
