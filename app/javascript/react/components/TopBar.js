import React from 'react'

const TopBar = props => {

  return(
    <nav className="top-bar">
      <ul className="title-area">
        <li className="name">
          <h1><a href="/">ImprovBoston</a></h1>
        </li>
      </ul>

      <section className="top-bar-section">
        <ul className="right">
            <li><a href="/users/sign_up">Sign Up</a></li>
            <li><a href="/users/sign_in">Sign In</a></li>
        </ul>
      </section>
    </nav>
  )
}

export default TopBar
