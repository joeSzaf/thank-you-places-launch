import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import SpacesContainer from '../containers/SpacesContainer'
import SpaceShowContainer from '../containers/SpaceShowContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={SpacesContainer} />
        <Route path='/spaces' component={SpacesContainer} />
        <Route path='/spaces/:id' component={SpaceShowContainer} />
      </Router>
    </div>
  )
}

export default App
