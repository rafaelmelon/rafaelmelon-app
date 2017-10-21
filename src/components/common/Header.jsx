import React from 'react';
import { Container, Row, Col } from 'reactstrap'

const Header = () => {
  return(
    <Container>
      <header className="rm-header mb-4 mt-4">
        <Row>
          <Col>
            <a href="">
              <svg className="rm-header__svgLogo" version="1.1" role="img" xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" width="500px" height="500px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
  							<path fill="none" stroke="#FFFFFF" strokeWidth="34.5459" strokeMiterlimit="10" d="M360.425,238.286L201.645,397.066L
  							55.079,250.5L201.645,103.934L299.355,201.645L238.286,262.714" className="rm-header__svgLogo__path1"></path>
  							<path fill="none" stroke="#FFFFFF" strokeWidth="34.5459" strokeMiterlimit="10" d="M239.263,164.026L299.355,103.934L
  							445.921,250.5L299.355,397.066L152.79,250.5L213.858,189.431" className="rm-header__svgLogo__path2"></path>
  						</svg>
            </a>
    				<h1 className="h1">Rafael Melón</h1>
    				<h2 className="h2">Front-end Developer</h2>
          </Col>
        </Row>
			</header>
    </Container>
  )
}

export default Header;
