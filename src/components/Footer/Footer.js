import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {withNamespaces} from 'react-i18next'
import i18n from '../../translations/i18n'

import {URLS} from '../../constants'
import './footer.css'

class Footer extends Component {
  changeLang = () => {
    const {lng} = this.props

    if (lng === 'fi') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('fi')
    }
  }

  render() {
    const {t} = this.props
    const {changeLang} = this

    return (
      <Container id="Footer" as="footer">
        <hr />

        <Row>
          <Col>
            <p>
              {t('FOOTER.APP_TITLE')} &copy;{' '}
              <a
                href={URLS.APP_AUTHOR_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('FOOTER.APP_AUTHOR')}
              </a>{' '}
              {t('FOOTER.APP_YEAR')}
            </p>
          </Col>
          <Col>
            <Button variant="link" onClick={changeLang}>
              {t('FOOTER.LANGUAGE')}
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withNamespaces()(Footer)
