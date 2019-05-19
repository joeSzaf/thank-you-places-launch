import React from 'react'
import moment from 'moment'

const TechEventTile = props => {

  return(
      <li>{props.name} - {moment(props.date).format("MM/DD/YY | hh:mm a")}</li>
  )
}

export default TechEventTile
