import React from 'react'

const SpaceTile = props => {
  
  return(
    <div>
      <h1 onClick={props.onClick} className="link-showSpace" to={props.id}> {props.name} </h1>
      <h2> { props.location } </h2>
      <p> { props.description } </p>
      <hr />
    </div>
  )
}

export default SpaceTile
