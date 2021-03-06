import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from 'react-bootstrap'

const Header = ({ showBackNav, title }) => {
  let utilSpace
  if (showBackNav) {
    utilSpace = <Link to='/'>Back</Link>
  }
  return (
    <PageHeader className='header'>
      {title}
      {utilSpace}
    </PageHeader>
  )
}

export default Header
