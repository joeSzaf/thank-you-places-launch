import React, { Component } from 'react'

import TextField from '../components/TextField'
import DateTimeField from '../components/DateTimeField'
import SpaceSelectMenu from '../components/SpaceSelectMenu'
import moment from 'moment'

class EventEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: "",
      eventSpaceId: "",
      eventSpaceName: "",
      startTime: "",
      endTime: "",
      eventDescription: "",
      contact_name: "",
      tech_name: "",
      md_name: "",
      spaces: [],
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateInput = this.validateInput.bind(this)
    this.editEvent = this.editEvent.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/spaces')
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
        spaces: body.spaces
      })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))

    let event_id = this.props.id
    fetch(`/api/v1/events/${event_id}.json`)
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
      let description
      if (body.event.description){
        description = body.event.description
      } else {
        description = ""
      }
      this.setState({
        eventName: body.event.name,
        startTime: moment(body.event.start_time).format('YYYY-MM-DDTHH:00'),
        endTime: moment(body.event.end_time).format('YYYY-MM-DDTHH:00'),
        eventSpaceId: body.event.space_id,
        eventSpaceName: body.event.space_name,
        contact_name: body.event.contact_name,
        tech_name: body.event.tech_name,
        md_name: body.event.md_name,
        eventDescription: description
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  editEvent(formPayload){
    fetch(`/api/v1/events/${this.props.id}`,{
      credentials: 'same-origin',
      method: 'PUT',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
        })
        .then(response => {
          this.setState({ errors: { success: "Successfully updated!" }})
        })
        .catch(error => {
          let formError = { formError: error.message }
          this.setState({ errors: Object.assign({}, this.state.errors, formError) })
          console.error(`Error in fetch: ${error.message}`)
        });
  }

  handleSubmit(event) {
    event.preventDefault()
    if (
      this.validateInput(this.state.eventName)
    ) {
      let formPayload = {
        name: this.state.eventName,
        space_id: parseInt(this.state.eventSpaceId),
        description: this.state.eventDescription,
        start_time: moment(this.state.startTime).format(),
        end_time: moment(this.state.endTime).format(),
        contact_name: this.state.contact_name,
        tech_name: this.state.tech_name,
        md_name: this.state.md_name
      }
      this.editEvent(formPayload)
    }
  }

  validateInput(selection){
    if (selection.trim() === '') {
      if (selection === this.state.eventName) {
        let newError = { nameError: 'You must enter a name for the event.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.values
      this.setState({ errors: {} })
      return true
    }
  }

  render() {
    let errorDiv
    let errorItems

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div className="content-container">
        <h1 className=""> EDIT { this.state.spaceName } </h1>

        <form className="" onSubmit={this.handleSubmit}>
          {errorDiv}
          <TextField
            name="eventName"
            content={this.state.eventName}
            label="Event Name:"
            handleChangeMethod={this.handleChange}
          />

          <TextField
            name="eventDescription"
            content={this.state.eventDescription}
            label="Description:"
            handleChangeMethod={this.handleChange}
          />

          <SpaceSelectMenu
              name="eventSpace"
              content={this.state.eventSpaceId}
              label="Space:"
              options={this.state.spaces}
              handleChangeMethod={this.handleChange}
            />

          <DateTimeField
            name="startTime"
            content={this.state.startTime}
            label="Start Time:"
            handleChangeMethod={this.handleChange}
          />

          <DateTimeField
            name="endTime"
            content={this.state.endTime}
            label="End Time:"
            handleChangeMethod={this.handleChange}
          />

          <TextField
            name="contact_name"
            content={this.state.contact_name}
            label="Contact Name:"
            handleChangeMethod={this.handleChange}
          />

          <TextField
            name="tech_name"
            content={this.state.tech_name}
            label="Tech Name:"
            handleChangeMethod={this.handleChange}
          />

          <TextField
            name="md_name"
            content={this.state.md_name}
            label="Musical Director Name:"
            handleChangeMethod={this.handleChange}
          />


          <div className="button-group">
            <button className="button radius secondary" to={"nav-events"} onClick={this.props.handleNavChange}>Back</button>
            <input className="button radius" type="submit" value="Update" />
          </div>
        </form>

      </div>
    )
  }
}

export default EventEditContainer
