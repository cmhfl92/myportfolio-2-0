import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import About from './About.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'
import Layout from './Layout.js'
import Home from './Home.js'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
        <Route path='portfolio' component={Portfolio} />
        <Route path='about' component={About} />
        <Route path='contact' component={Contact} />
      </Route>
    </Router>
  }
}

export default App
