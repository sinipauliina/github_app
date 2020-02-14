import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {withNamespaces} from 'react-i18next'

import {setUserName} from '../../redux/modules/names'
import './home.css'
import image from '../../assets/arrow.png'

class Home extends Component {
  componentDidMount = () => {
    setUserName('')
  }

  render() {
    const {t} = this.props

    return (
      <Container id="Home">
        <Row className="imageRow">
          <Col xs={12} sm={10} md={8}>
            <h1>{t('HOME.TITLE')}</h1>

            <p>{t('HOME.MESSAGE')}</p>
          </Col>

          <Col xs={0} sm={2} md={4} className="imageCol">
            <Image src={image} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setUserName: userName => setUserName(userName),
}

export default connect(
  null,
  mapDispatchToProps,
)(withNamespaces()(withRouter(Home)))
