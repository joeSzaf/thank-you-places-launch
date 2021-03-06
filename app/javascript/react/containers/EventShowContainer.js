import React, { Component } from 'react'
import moment from 'moment'

class EventShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {id: '', name: '', space_id: '', start_time: 0, end_time: 0, description: ''}
    }
  }

  componentDidMount() {
    let event_id = this.props.id
    fetch(`/api/v1/events/${event_id}.json`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ event: body.event })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    return(
      <div className="content-container">
        <h1 className=""> { this.state.event.name } </h1>
        <p> { this.state.event.description } </p>
        <p> { moment(this.state.event.start_time).format("MM-DD-YYYY, h:mm a") } - { moment(this.state.event.end_time).format("MM-DD-YYYY, h:mm a")} </p>
        <button className="button radius secondary" to={"nav-events"} onClick={this.props.handleNavChange}>Back</button>
        <button className="button radius" to={"link-editEvent"} onClick={this.props.handleNavChange}>Edit</button>
      </div>
    )
  }
}

export default EventShowContainer
