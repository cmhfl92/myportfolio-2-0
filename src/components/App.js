import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Layout from './Layout'
import Home from './Home'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='about' component={About} />
        <Route path='portfolio' component={Portfolio} />
        <Route path='contact' component={Contact} />
      </Route>
    </Router>
  }
}

export default App
