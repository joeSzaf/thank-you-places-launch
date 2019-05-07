import React, { Component } from 'react'
import { Link } from 'react-router'

import EventTile from '../components/EventTile'

class EventsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/events')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
        events: body.events
      })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    let events = this.state.events.map(event => {
        return(
          <EventTile
            key={event.id}
            id={event.id}
            name={event.name}
            start_time={event.start_time}
          />
        )
      })

    return(
      <div className="">
       <p>Hello from the Event Index Page!</p>
       {events}
      </div>
    )
  }
}

export default EventsContainer
