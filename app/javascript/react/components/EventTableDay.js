import React, { Component } from 'react'
import moment from 'moment'

import EventTableRow from '../components/EventTableRow'

class EventTableDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.date,
      events: this.props.events
    }
  }

  render(){
    let rendered_events = this.state.events.map(event => {
      return(
        <tr>
          <td onClick={this.props.onClick} className="link-showEvent" to={event.id}>{event.name}</td>
          <td>{moment(event.start_time).format("HH:mm")}-{moment(event.end_time).format("HH:mm")}</td>
          <td>{event.space_name}</td>
          <td>-</td>
        </tr>
      )
    })

    return(
      <div>
        <h4>{moment(this.state.date).format("dddd, MM/DD")}</h4>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Time</th>
              <th>Space</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {rendered_events}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EventTableDay
