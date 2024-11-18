import React from 'react'

const Summary = ({ total = 0 }) => {
  return (
    <div>
      <h1>Total: ${total}</h1>
    </div>
  )
}

export default Summary