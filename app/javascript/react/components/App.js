import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import SpacesContainer from '../containers/SpacesContainer'
import SpaceShowContainer from '../containers/SpaceShowContainer'
import SpaceNewFormContainer from '../containers/SpaceNewFormContainer'
import EventsContainer from '../containers/EventsContainer'
import EventShowContainer from '../containers/EventShowContainer'
import EventNewFormContainer from '../containers/EventNewFormContainer'

export const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={SpacesContainer} />
        <Route path='/spaces/new' component={SpaceNewFormContainer} />
        <Route path='/spaces/:id' component={SpaceShowContainer} />
        <Route path='/spaces' component={SpacesContainer} />
        <Route path='/events/new' component={EventNewFormContainer} />
        <Route path='/events/:id' component={EventShowContainer} />
        <Route path='/events' component={EventsContainer} />
      </Router>
    </div>
  )
}

export default App
