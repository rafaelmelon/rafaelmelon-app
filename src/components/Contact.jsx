import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Fade } from 'react-reveal'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        rmName: '',
        rmEmail: ''
      },
      submitted: false,
      modal: false,
      ERRORrmName: false,
      ERRORrmEmail: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleInputChange(event) {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  handleSubmit(event) {
    //event.preventDefault()
    this.setState({
      submitted: true
    })
    const { user } = this.state
    if (user.rmName && user.rmEmail) {

      // fetch('/', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({user: this.state.user})
      // }).then((res) => {
      //   console.log("this is res", res)
      // }).catch((err) => {
      //   console.log(err)
      // })

      this.setState({
        modal: true,
        ERRORrmName: false,
        ERRORrmEmail: false
      })
    }else{
      this.setState({
        modal: false
      })
      if (user.rmName && !user.rmEmail) {
        this.setState({
          ERRORrmEmail: true
        })
      }else if(!user.rmName && user.rmEmail){
        this.setState({
          ERRORrmName: true
        })
      }else{
        this.setState({
          ERRORrmName: true,
          ERRORrmEmail: true
        })
      }
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <Container>
        <Fade>
          <div className="rm-contact mb-5">
            <Row>
              <Col>
                <Form name="form" action="contact.php" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="rmName" hidden>Name</Label>
                    <Input
                      name="rmName"
                      type="text"
                      placeholder="Name"
                      value={this.state.user.rmName}
                      onChange={this.handleInputChange}
                    />
                    { (this.state.ERRORrmName) ? <FormFeedback>I would like to know your name</FormFeedback> : '' }
                  </FormGroup>
                  <FormGroup>
                    <Label for="rmEmail" hidden>Email</Label>
                    <Input
                      name="rmEmail"
                      type="email"
                      placeholder="Email"
                      value={this.state.user.rmEmail}
                      onChange={this.handleInputChange}
                    />
                    { (this.state.ERRORrmEmail) ? <FormFeedback>I need your email to answer you</FormFeedback> : '' }
                  </FormGroup>
                  <Button className="rm-btn mt-4" color="primary">Send</Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Fade>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="rm-modal">
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            Thanks for contacting me, I will send you an answer soon
          </ModalBody>
        </Modal>
      </Container>
    )
  }
}

export default Contact
