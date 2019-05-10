import React, { Component } from 'react'
import moment from 'moment'

class CurrentSpaceUseTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_events: [],
      locations: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/events/now')
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
          current_events: body.current_events,
          locations: body.locations
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){

    let current_use_data = [...this.state.locations]

    this.state.locations.forEach((location, index) =>{
      this.state.current_events.forEach(event =>{
        if (event.space_id === location.id) {
          current_use_data[index].eventName = event.name
          current_use_data[index].startTime = event.start_time
          current_use_data[index].endTime = event.end_time

        }
      })
    })

    let current_events_table = current_use_data.map((location, index) => {
      let eventName = "<open>"
      let startTime = "-"
      let endTime = "-"

      if (location.eventName){
        eventName = location.eventName
        startTime = moment(location.startTime).local().format("hh:mm A")
        endTime = moment(location.endTime).local().format("hh:mm A")
      }
      console.log(startTime)

      return(
        <tr key={index}>
          <td>{location.name}</td>
          <td>{eventName}</td>
          <td>{startTime}</td>
          <td>{endTime}</td>
        </tr>
      )
    })
    return(
      <div className="row">

      <table>
        <caption>Current Space use</caption>
        <thead>
          <tr>
            <th>Space</th>
            <th>Event</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {current_events_table}
        </tbody>
      </table>
      </div>
    )
  }
}

export default CurrentSpaceUseTable
