import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const ListCard = props => {
  console.log('props from ListCard', props)
  return <ListGroupItem>{props.name}</ListGroupItem>
}

export default ListCard
