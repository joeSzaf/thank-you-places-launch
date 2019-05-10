import React from 'react'
import { Link } from 'react-router'

const NavTile = props => {
  let displayClass = ""
  if (props.isActive) {
    displayClass = "active"
  }

  return(
    <div id={`nav-${props.view}`} to={`${props.view}`} className={`nav-link ${displayClass}`} onClick={props.handleClickMethod}>
      <i className={props.iconClass}></i>{props.label}
    </div>
  )
}

export default NavTile
