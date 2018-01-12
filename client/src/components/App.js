import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home.js'

import preload from '../testData.json'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      boards: preload.boards
    }
  }

  render () {
    console.log(this.state)
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route
              exact
              path='/'
              component={props => <Home boards={this.state.boards} />}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
