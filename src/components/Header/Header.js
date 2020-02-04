import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

import {CONTENT} from '../../constants'
import './header.css'

class Header extends Component {
  state = {
    userName: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // TODO: Korjaa enter-submit!
  handleSearch = () => {
    const {history} = this.props
    const {userName} = this.state

    history.push(`/${userName}`)

    this.setState({
      userName: '',
    })
  }

  render() {
    const {userName} = this.state
    const {handleChange, handleSearch} = this

    return (
      <Navbar id="Navbar">
        <Navbar.Brand href="/">{CONTENT.HEADER.APP_TITLE}</Navbar.Brand>

        <Form inline>
          <FormControl
            name="userName"
            value={userName}
            type="text"
            placeholder={CONTENT.HEADER.SEARCH_BOX_PLACEHOLDER}
            className="mr-sm-2"
            onChange={handleChange}
          />

          <Button variant="outline-light" onClick={handleSearch}>
            {CONTENT.HEADER.BUTTON_TEXT}
          </Button>
        </Form>
      </Navbar>
    )
  }
}

export default withRouter(Header)
