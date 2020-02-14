import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import {URLS, CONTENT} from '../../constants'
import './footer.css'

const Footer = () => {
  return (
    <Container id="Footer" as="footer">
      <hr />

      <Row>
        <Col>
          <p>
            {CONTENT.FOOTER.APP_TITLE} &copy;{' '}
            <a
              href={URLS.APP_AUTHOR_SITE}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTENT.FOOTER.APP_AUTHOR}
            </a>{' '}
            {CONTENT.FOOTER.APP_YEAR}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
