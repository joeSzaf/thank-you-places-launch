import React from 'react'

const TechTile = props => {

  return(

    <div className="callout space-callout test">
      <h3 className="space-index-space-name test" onClick={props.onClick} className="link-showTech" to={props.id}> {props.first_name} {props.last_name}</h3>
      <p>Email: { props.email }</p>
      <p>Phone: { props.phone_number }</p>
    </div>

  )
}

export default TechTile
