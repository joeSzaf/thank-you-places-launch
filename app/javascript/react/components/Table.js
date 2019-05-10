import React from 'react'

const Table = props => {

  return(
    <div className="card-user-profile 6-small columns">
      <img className="card-user-profile-img" src="https://images.pexels.com/photos/5439/earth-space.jpg?h=350&auto=compress&cs=tinysrgb" alt="picture of space" />
      <div className="card-user-profile-content card-section">
        <div className="card-user-profile-avatar">
          <img src="https://pbs.twimg.com/profile_images/422887689612820482/sZtHMJu5.png" alt="picture of yeti" />
        </div>
        <p className="card-user-profile-name">Abominable Snowman</p>
        <p className="card-user-profile-status">Yeti Web Designer</p>
        <p className="card-user-profile-info">The Yeti, once better known as the Abominable Snowman, is a mysterious bipedal creature said to live in the mountains of Asia. It sometimes leaves tracks in snow, but is also said to dwell below the Himalayan snow line.</p>
      </div>

      <div className="card-user-profile-actions">
        <a href="#" className="card-user-profile-button button hollow">Follow</a>
        <a href="#" className="card-user-profile-button button hollow secondary">More Info</a>
      </div>
    </div>
  )
}

export default Table
