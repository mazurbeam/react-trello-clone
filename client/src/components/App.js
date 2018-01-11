import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home.js'

import preload from '../testData.json'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
