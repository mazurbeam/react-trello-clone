import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import { Grid, Row, Col } from 'react-bootstrap'

class BoardDetails extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { board, lists } = this.props
    return (
      <div>
        <Header showBackNav title={board.name} />
        <Grid>
          {lists.map(list => (
            <Col key={list._id} xs={6} md={4}>
              <List {...list} />
            </Col>
          ))}
        </Grid>
      </div>
    )
  }
}

export default BoardDetails
