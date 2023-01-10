import React from 'react'

function Card({children, reverse}) {
  return (
    <div className={`container ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card