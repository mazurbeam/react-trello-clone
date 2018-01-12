import React from 'react'
import { Panel, ListGroup } from 'react-bootstrap'
import ListCard from './ListCard'

const List = props => {
  console.log(props)
  return (
    <Panel>
      <Panel.Heading>{props.header}</Panel.Heading>
      <ListGroup>
        {props.cards.map(card => <ListCard key={card._id} {...card} />)}
      </ListGroup>
    </Panel>
  )
}

export default List
