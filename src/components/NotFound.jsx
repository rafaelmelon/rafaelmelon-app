import React from 'react'
import { Link } from 'react-router-dom'

import Header from './common/Header'
import Footer from './common/Footer'

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="rm-container">
        <h2 className="h2 mb-5">Sorry, the page not found</h2>
        <Link className="rm-btn btn btn-primary" to="/">Go home</Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
