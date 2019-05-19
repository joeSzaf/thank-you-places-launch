import React, { Component } from 'react'

class SpaceShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      space: {id: '', name: '', location: '', capacity: 0, description: ''}
    }
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
      this.setState({ space: body.space })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="content-container">
        <h1 className="title-h1"> { this.state.space.name } </h1>
        <h3> { this.state.space.location } </h3>
        <p> { this.state.space.description } </p>
        <button className="button radius secondary" to={"nav-spaces"} onClick={this.props.handleNavChange}>Back</button>
        <button className="button radius" to={"link-editSpace"} onClick={this.props.handleNavChange}>Edit</button>
      </div>
    )
  }
}

export default SpaceShowContainer
