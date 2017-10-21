import React, { Component } from 'react'
import Countdown from 'react-countdown-now'
import { Container, Row, Col } from 'reactstrap'

class Count extends Component {
  render() {
    const Completionist = () => <span>You are good to go!</span>
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completionist />
      } else {
        return <span>{hours}h {minutes}m {seconds}s</span>
      }
    }
    return (
      <Container>
        <div className="rm-count mb-4">
          <Row>
            <Col>
              <h3 className="h3">Coming soon:</h3>
              <Countdown
                date={ Date.now() + 10000000000 }
                renderer={ renderer }
              />
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}

export default Count
