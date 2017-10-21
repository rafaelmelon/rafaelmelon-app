import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import { Fade } from 'react-reveal'

import Header from './common/Header'
import Footer from './common/Footer'
import Count from './Count'
import Contact from './Contact'
import Project from './Project'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: true,
      project: false,
      contact: false
    }
    this.handleToggleProject = this.handleToggleProject.bind(this)
    this.handleToggleContact = this.handleToggleContact.bind(this)
  }

  handleToggleProject() {
    this.setState({
      project: true,
      contact: false,
      buttons: false
    })
  }

  handleToggleContact() {
    this.setState({
      project: false,
      contact: true,
      buttons: false
    })
  }

  render(){
    return(
      <div>
        <Header />
        <Count />
          { (this.state.buttons) ?
            <Container>
              <Fade>
                <div className="rm-container">
                  <Row>
                    <Col xs="12" sm="6" md="6">
                      <Button className="rm-btn pr" color="primary" onClick={this.handleToggleProject}>View projects</Button>
                    </Col>
                    <Col xs="12" sm="6" md="6">
                      <Button className="rm-btn pl" color="primary" onClick={this.handleToggleContact}>Contact me</Button>
                    </Col>
                  </Row>
                </div>
              </Fade>
            </Container>
            :
            (this.state.project) ? <Project lang={ this.state.lang } /> : <Contact lang={ this.state.lang }/>
          }
        <Footer />
      </div>
    )
  }
}

export default HomeContainer
