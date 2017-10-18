import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import HomeContainer from './components/HomeContainer'

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <HomeContainer />
        <Footer />
      </div>
    )
  }
}

export default App
