import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Fade } from 'react-reveal'

import { repos } from '../data/url'

class Project extends Component {

  constructor (props) {
    super(props)
    this.state = {
      repos: [],
      all: false,
      loading: true
    }
    this.handleShowAll = this.handleShowAll.bind(this)
  }

  componentWillMount () {
    fetch(repos)
    .then(response => response.json())
    .then(repos => {
      let limitRepos = repos.slice(0, 6)
      if(!this.state.all) {
        this.setState({
          repos: limitRepos,
          loading: false
        })
      } else {
        this.setState({
          repos,
          loading: false
        })
      }
    })
    .catch((error) => console.log(error))
  }

  handleShowAll(){
    this.setState({
      all: true
    })
    this.componentWillMount()
  }

  render() {
    const loading = "Loading..."

    return (
      <div className="rm-project mb-5">
        { (this.state.loading) ?
          <Fade>{ loading }</Fade> :
          <div>
            <div className="rm-project__filter"></div>
            <div className="rm-project__grid mb-5">
              { this.state.repos.map(item =>
                <Fade bottom key={ item.id } className="rm-project__grid__item">
                  <div className={ "rm-project__grid__item__title " + (item.homepage ? "web" : "") }>
                    <h3 className="h3">{ item.name }</h3>
                    <small>{ item.description }</small>
                  </div>
                  <div className="rm-project__grid__item__links">
                    <a href={ item.clone_url } className="rm-btn" color="primary" target="_blank">Repo</a>
                    { (item.homepage) ? <a href={ item.homepage } className="rm-btn" color="primary" target="_blank">Web</a> : '' }
                  </div>
                </Fade>
              ) }
            </div>
            { (!this.state.all) ? <Button className="rm-btn" color="primary" onClick={this.handleShowAll}>Show more</Button> : '' }
          </div>
        }
      </div>
    )
  }
}

export default Project;
