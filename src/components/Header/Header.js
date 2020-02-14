import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Navbar, Form, Button} from 'react-bootstrap'

import {setUserName} from '../../redux/modules/names'
import {getRepos} from '../../redux/modules/repos'
import {CONTENT} from '../../constants'
import './header.css'

class Header extends Component {
  state = {
    searchInput: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSearch = () => {
    const {setUserName, getRepos, history} = this.props
    const {searchInput} = this.state

    setUserName(searchInput)
    getRepos(searchInput)

    history.push(`/${searchInput}`)

    this.setState({
      searchInput: '',
    })
  }

  handleKeyDown = e => {
    const {handleSearch} = this

    if (e.key === 'Enter') {
      e.preventDefault()

      handleSearch()
    }
  }

  render() {
    const {searchInput} = this.state
    const {handleChange, handleSearch, handleKeyDown} = this

    return (
      <Navbar id="Navbar">
        <Navbar.Brand href="/">{CONTENT.HEADER.APP_TITLE}</Navbar.Brand>

        <Form inline>
          <Form.Control
            as="input"
            name="searchInput"
            value={searchInput}
            type="text"
            placeholder={CONTENT.HEADER.SEARCH_BOX_PLACEHOLDER}
            className="mr-sm-2"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />

          <Button variant="outline-light" onClick={handleSearch}>
            {CONTENT.HEADER.BUTTON_TEXT}
          </Button>
        </Form>
      </Navbar>
    )
  }
}

const mapDispatchToProps = {
  setUserName: userName => setUserName(userName),
  getRepos: userName => getRepos(userName),
}

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Header))
