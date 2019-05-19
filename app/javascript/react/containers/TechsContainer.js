import React, { Component } from 'react'
import { Link } from 'react-router'

import TechTile from '../components/TechTile'

class TechsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      techs: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/tech_directors')
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
        techs: body.techs
      })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    let techs = this.state.techs.map(tech => {
        return(
          <TechTile
            key={tech.id}
            id={tech.id}
            first_name={tech.first_name}
            last_name={tech.last_name}
            email={tech.email}
            phone_number={tech.phone_number}
            onClick={this.props.onClick}
          />
        )
      })

    return(
      <div className="content-container">
        <h1 className="title-h1">Employee Info</h1>
        { techs }
      </div>
    )
  }
}

export default TechsContainer
