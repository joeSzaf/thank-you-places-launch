import React from 'react'

const SpaceTile = props => {

  return(

    <div className="callout space-callout test">
      <h3 className="space-index-space-name test" onClick={props.onClick} className="link-showSpace" to={props.id}> {props.name}</h3>
      <p>Location: { props.location }</p>
      <p>Description: { props.description }</p>
    </div>

  )
}

export default SpaceTile
