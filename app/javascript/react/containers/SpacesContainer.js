import React, { Component } from 'react'
import { Link } from 'react-router'

import SpaceTile from '../components/SpaceTile'

class SpacesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spaces: []
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

  render() {

    let spaces = this.state.spaces.map(space => {
        return(
          <SpaceTile
            key={space.id}
            id={space.id}
            name={space.name}
            location={space.location}
            capacity={space.capacity}
            description={space.description}
            onClick={this.props.onClick}
          />
        )
      })

    return(
      <div className="content-container">
        <h1 className="title-h1">Your Places</h1>
        <p>Click on a place to edit it!</p>
        {spaces}
      </div>
    )
  }
}

export default SpacesContainer
