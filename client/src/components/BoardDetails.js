import React from 'react'

const BoardDetails = ({ board }) => {
  console.log('props from boarddetails', board)
  return (
    <div>
      <p>board details</p>
      <p>{JSON.stringify(board)}</p>
    </div>
  )
}

export default BoardDetails
