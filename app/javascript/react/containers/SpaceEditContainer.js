import React, { Component } from 'react'

import TextField from '../components/TextField'

class SpaceEditContainer extends Component {
  constructor(props) {
    super(props)
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

  componentDidMount() {
    let space_id = this.props.id
    fetch(`/api/v1/spaces/${space_id}.json`)
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
        spaceName: body.space.name,
        spaceLocation: body.space.location,
        spaceCapacity: body.space.capacity,
        spaceDescription: body.space.description
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewSpace(formPayload){
    fetch(`/api/v1/spaces/${this.props.id}`,{
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
        <h1 className="title-h1"><strong>EDIT</strong> { this.state.spaceName }</h1>

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
            <input className="button" type="submit" value="Update" />
          </div>
        </form>

        <button to={"nav-spaces"} onClick={this.props.handleNavChange}>Back</button>
      </div>
    )
  }
}

export default SpaceEditContainer
