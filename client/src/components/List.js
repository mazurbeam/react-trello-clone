import React from 'react'
import { Panel } from 'react-bootstrap'

const List = props => {
  console.log(props)
  return (
    <Panel>
      <Panel.Heading>{props.header}</Panel.Heading>
    </Panel>
  )
}

export default List
