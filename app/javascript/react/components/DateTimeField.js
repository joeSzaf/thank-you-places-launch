import React from 'react'

const DateTimeField = props => {
  return(
    <label>{props.label}
      <input
      name={props.name}
      type='datetime-local'
      value={props.content}
      onChange={props.handleChangeMethod}
      />
    </label>
  )
}

export default DateTimeField
