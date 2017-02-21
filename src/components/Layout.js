import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  render () {
    return <div>
      <nav className='navbar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <footer>Icons everywhere</footer>
    </div>
  }
}

export default Layout
