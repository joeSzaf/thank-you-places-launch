import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import TextField from '../components/TextField'
import DateTimeField from '../components/DateTimeField'
import SpaceSelectMenu from '../components/SpaceSelectMenu'
import moment from 'moment'

class EventNewFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventSpace: "",
      startTime: moment().format('YYYY-MM-DDThh:00'),
      endTime: moment().format('YYYY-MM-DDThh:00'),
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
    console.log(event.target.value)
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
          browserHistory.push('/events')
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
        space_id: parseInt(this.state.eventSpace),
        start_time: moment(this.state.startTime).format("YYYY-MM-DD h:mm:ss"),
        end_time: moment(this.state.endTime).format("YYYY-MM-DD h:mm:ss")
      }
      this.addNewEvent(formPayload)
      this.handleClearForm(event)
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      eventName: "",
      startTime: moment().format('YYYY-MM-DDThh:00'),
      endTime: moment().format('YYYY-MM-DDThh:00'),
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
    console.log(moment(this.state.startTime).format("YYYY-MM-DD h:mm:ss"))
    let errorDiv
    let errorItems

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className="" onSubmit={this.handleSubmit}>
      {errorDiv}
        <TextField
          name="eventName"
          content={this.state.eventName}
          label="Event Name:"
          handleChangeMethod={this.handleChange}
        />
        <SpaceSelectMenu
            name="eventSpace"
            content={this.state.eventSpace}
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

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit Form" />
        </div>
      </form>
    )
  }
}

export default EventNewFormContainer
