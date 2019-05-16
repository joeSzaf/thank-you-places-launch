import React from 'react'

const SpaceTile = props => {

  return(

    <div className="callout space-callout">
      <hr />
      <h4 className="title-h2 space-index-space-name" onClick={props.onClick} className="link-showSpace" to={props.id}> {props.name}</h4>
      <p>Location: { props.location }</p>
      <p>Description: { props.description }</p>
    </div>

  )
}

export default SpaceTile
