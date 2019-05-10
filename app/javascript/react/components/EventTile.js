import React from 'react'

const EventTile = props => {

  return(
    <div>
      <h1> { props.name } </h1>
      <p>Start time: { props.start_time }</p>
      <hr />
    </div>
  )
}

export default EventTile
