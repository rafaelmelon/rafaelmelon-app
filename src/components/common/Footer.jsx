import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

const Footer = () => {
  return(
    <Container>
      <footer className="rm-footer">
        <Row>
          <Col>
            <div className="rm-footer__icon">
              <a href="https://twitter.com/zitronensaure" target="_blank">
                <FontAwesome
                  name='twitter'
                  size='2x'
                />
              </a>
              <a href="https://github.com/rafaelmelon" target="_blank">
                <FontAwesome
                  name='github'
                  size='2x'
                />
              </a>
              <a href="https://www.linkedin.com/in/rafaelmelon/" target="_blank">
                <FontAwesome
                  name='linkedin'
                  size='2x'
                />
              </a>
              {/* <a href="#">
                <FontAwesome
                  name='file-pdf-o'
                  size='2x'
                />
              </a> */}
            </div>
            <p>Rafael Melón · 2017</p>
          </Col>
        </Row>
      </footer>
    </Container>
  )
};

export default Footer;
