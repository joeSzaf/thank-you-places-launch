import React from 'react'
import moment from 'moment'

const EventTableRow = props => {

  let timeDisplay = moment(this.props).format()

  return(
    <tr className="">
      <td>{props.name}</td>
      <td>{timeDisplay}</td>
      <td>Location</td>
      <td>Contact Name</td>
    </tr>
  )
}

export default EventTableRow
