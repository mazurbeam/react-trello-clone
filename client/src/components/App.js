import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home.js'
import BoardDetails from './BoardDetails'

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
            <Route
              path='/b/:id'
              component={props => {
                const selectedBoard = this.state.boards.find(
                  board => props.match.params.id === board._id
                )
                const selectedBoardLists = [
                  preload.lists.find(
                    list => props.match.params.id === list.boardId
                  )
                ]
                console.log(selectedBoardLists)
                return (
                  <BoardDetails
                    board={selectedBoard}
                    lists={selectedBoardLists}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
