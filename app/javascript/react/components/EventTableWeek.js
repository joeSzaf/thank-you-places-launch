import React, { Component } from 'react'
import moment from 'moment'

import EventTableDay from "../components/EventTableDay"

class EventTableWeek extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: [],
      events: []
    }
  }

  componentDidMount() {

    const current_date = moment()
    const start_of_week = current_date.startOf('week')
    let days_of_week = []
    for (let i = 1; i < 8; i++) {
      days_of_week.push(moment(start_of_week).add(i, 'days'))
    }

    this.setState({
      dates: days_of_week
    })

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
        let events = []
        this.state.dates.forEach(date => {
          let day_of_events = {
            date: date,
            events: []
          }

          body.events.forEach(event => {
            if (
              moment(event.start_time) > moment(date)
              && moment(event.start_time) < moment(date).add(1, 'days')
            ) {
              day_of_events.events.push(event)
            }
          })

          events.push(day_of_events)
        })
        this.setState({
          events: events
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){

    let weeks_schedule = this.state.events.map(day => {
      return(
        <EventTableDay
          date={day.date}
          events={day.events}
          onClick={this.props.onClick}
        />
      )
    })

    return(
      <div>
        {weeks_schedule}
      </div>
    )
  }
}

export default EventTableWeek
