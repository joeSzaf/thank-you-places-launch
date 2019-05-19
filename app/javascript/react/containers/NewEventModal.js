import React, { Component } from 'react'
import TextField from '../components/TextField'
import DateTimeField from '../components/DateTimeField'
import SpaceSelectMenu from '../components/SpaceSelectMenu'
import moment from 'moment'

class NewEventModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: this.props.name,
      eventSpaceId: "",
      eventSpaceName: "",
      startTime: moment(this.props.date).format('YYYY-MM-DDTHH:mm'),
      endTime: moment(this.props.date).add(2, 'hours').format('YYYY-MM-DDTHH:mm'),
      eventDescription: "",
      contact_name: "",
      tech_name: "",
      md_name: "",
      spaces: [],
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateInput = this.validateInput.bind(this)
    this.addNewEvent = this.addNewEvent.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewEvent(formPayload){
    fetch("/api/v1/events",{
      credentials: 'same-origin',
      method: 'POST',
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
          this.props.handleClose()
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

      this.addNewEvent(formPayload)
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      eventName: "",
      eventSpaceId: "",
      eventSpaceName: "",
      startTime: moment().format('YYYY-MM-DDTHH:00'),
      endTime: moment().format('YYYY-MM-DDTHH:00'),
      eventDescription: "",
      contact_name: "",
      tech_name: "",
      md_name: "",
      spaces: [],
      errors: {}
    })
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
  }

  render(){
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none"

    let errorDiv
    let errorItems

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div className={showHideClassName}>
        <section className="modal-main">
        <a className="close-modal" onClick={this.props.handleClose}>
          <i className="fa fa-times"></i>
        </a>
          <p>{this.state.name}</p>
          <div className="content-container">
            <h1 className="title-h1">Add a new event</h1>
            <form className="" onSubmit={this.handleSubmit}>
            {errorDiv}
              <TextField
                name="eventName"
                content={this.state.eventName}
                label="Event Name:"
                handleChangeMethod={this.handleChange}
              />
              <p> Space from PatronManager: {this.props.location}</p>
              <SpaceSelectMenu
                  name="eventSpaceId"
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
                <button className="button secondary radius" onClick={this.handleClearForm}>Clear</button>
                <input className="button radius" type="submit" value="Submit Form" />
              </div>

            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default NewEventModal
