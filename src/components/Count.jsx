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
      <div className="rm-count">
        <Container>
          <Row>
            <Col>
              <h3 className="h3">Coming soon:</h3>
              <Countdown
                date={ Date.now() + 10000000000 }
                renderer={ renderer }
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Count
