import React from 'react'

const SpaceSelectMenu = props => {

  let options = props.options.map(space => {
    return(
      <option key={space.id} value={space.id}>{space.name}</option>
    )
  })
  return(
    <label>{props.label}
      <select
        name={props.name}
        value={props.content}
        onChange={props.handleChangeMethod}
      >
      { options }
    </select>
    </label>
  )
}

export default SpaceSelectMenu
