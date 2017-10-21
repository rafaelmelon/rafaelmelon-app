import React from 'react'
import { Link } from 'react-router-dom'

import Header from './common/Header'
import Footer from './common/Footer'

const NotFound = () => {
  return (
    <div>
      <Header />
        <Container>
          <div className="rm-container">
            <Row>
              <Col>
                <h2 className="h2 mb-5">Sorry, the page not found</h2>
                <Link className="rm-btn btn btn-primary" to="/">Go home</Link>
              </Col>
            </Row>
          </div>
        </Container>
      <Footer />
    </div>
  )
}

export default NotFound
