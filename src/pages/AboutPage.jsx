import React from 'react'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <div className="container">
      <h3>About</h3>
      <p>This is about Page</p>
      <p>Feedback form about page</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default AboutPage