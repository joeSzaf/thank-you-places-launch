import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import TextField from '../components/TextField';

class SpaceNewFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceName: '',
      spaceLocation: '',
      spaceCapacity: '',
      spaceDescription: '',
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateInput = this.validateInput.bind(this)
    this.addNewSpace = this.addNewSpace.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewSpace(formPayload){
    fetch("/api/v1/spaces",{
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
          browserHistory.push('/spaces')
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
      this.validateInput(this.state.spaceName) &&
      this.validateInput(this.state.spaceLocation) &&
      this.validateInput(this.state.spaceDescription)
    ) {
      let formPayload = {
        name: this.state.spaceName,
        location: this.state.spaceLocation,
        capacity: this.state.spaceCapacity,
        description: this.state.spaceDescription,
      }
      this.addNewSpace(formPayload)
      this.handleClearForm(event)
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
      spaceName: '',
      spaceLocation: '',
      spaceCapacity: '',
      spaceDescription: '',
      errors: {}
    })
  }

  validateInput(selection){
    if (selection.trim() === '') {
      if (selection === this.state.spaceName) {
        let newError = { nameError: 'You must enter a name for the space.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      else if (selection === this.state.spaceLocation) {
        let newError = { nameError: 'You must enter a location (like an address) for this space.' }
        this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      }
      else if (selection === this.state.spaceDescription) {
        let newError = { nameError: 'You must enter a description for the space.' }
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

  render(){
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
          name="spaceName"
          content={this.state.spaceName}
          label="Space Name:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="spaceLocation"
          content={this.state.spaceLocation}
          label="Location of Space:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="spaceCapacity"
          content={this.state.spaceCapacity}
          label="Capacity of Space:"
          handleChangeMethod={this.handleChange}
        />
        <TextField
          name="spaceDescription"
          content={this.state.spaceDescription}
          label="Description:"
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

export default SpaceNewFormContainer
