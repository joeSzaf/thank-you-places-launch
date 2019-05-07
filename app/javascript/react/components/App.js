import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import SpacesContainer from '../containers/SpacesContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={SpacesContainer} />
        <Route path='/spaces' component={SpacesContainer} />
      </Router>
    </div>
  )
}

export default App
