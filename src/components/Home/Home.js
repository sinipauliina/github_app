import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Container, Row, Col, Image} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import './home.css'
import image from '../../assets/arrow4.png'

class Home extends Component {
  componentDidMount = () => {
    console.log('PROPSIT: ', this.props)

    /*if (this.props.location.search) {
      this.props.history.push('/')
    }*/
  }

  render() {
    return (
      <Container id="Home">
        <Row className="arrowRow">
          <Col xs={12} sm={10} md={8}>
            <h1>{CONTENT.HOME.TITLE}</h1>

            <p>{CONTENT.HOME.MESSAGE}</p>
          </Col>

          <Col xs={0} sm={2} md={4}>
            <Image src={image} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Home)
