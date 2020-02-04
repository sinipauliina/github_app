import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {URLS} from '../../constants'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <Container id="Footer">
        <hr />

        <Row>
          <Col>
            <p>
              GitHub App &copy;{' '}
              <a href={URLS.AUTHOR_SITE} target="_blank">
                Sini Pauliina Kolehmainen
              </a>{' '}
              2020
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
