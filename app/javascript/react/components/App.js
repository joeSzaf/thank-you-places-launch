import React, { Component } from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import Dashboard from '../containers/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="app">
        <Router history={browserHistory}>
          <Route path='/spaces/new' component={Dashboard} />
          <Route path='/spaces/:id' component={Dashboard} />
          <Route path='/spaces' component={Dashboard} />
          <Route path='/events/new' component={Dashboard} />
          <Route path='/events/:id' component={Dashboard} />
          <Route path='/events' component={Dashboard} />
          <Route path='/' component={Dashboard} />
        </Router>
      </div>
    )
  }
}

export default App
