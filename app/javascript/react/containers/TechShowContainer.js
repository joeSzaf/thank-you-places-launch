import React, { Component } from 'react'

import TechEventTile from "../components/TechEventTile"

class TechShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tech: {id: '', first_name: '', last_name: '', email: "", phone_number: ''},
      events: []
    }
  }

  componentDidMount() {
    let tech_id = this.props.id
    fetch(`/api/v1/tech_directors/${tech_id}.json`)
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
      this.setState({ tech: body.tech , events: body.events})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let tech_events = this.state.events.map(event => {
      return(
        <TechEventTile
          key={event.id}
          name={event.name}
          date={event.start_time}
        />
      )
    })

    return(
      <div className="content-container">
        <h1> { this.state.tech.first_name } { this.state.tech.last_name } </h1>
        <p> email: { this.state.tech.email } </p>
        <p> phone: { this.state.tech.phone_number } </p>

        <h3>Tech shifts worked:</h3>
        <ol>
          {tech_events}
        </ol>

        <button className="button radius secondary" to={"nav-techs"} onClick={this.props.handleNavChange}>Back</button>
        <button className="button radius" to={"link-editTech"} onClick={this.props.handleNavChange}>Edit</button>
      </div>
    )
  }
}

export default TechShowContainer
