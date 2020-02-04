import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Row, Col, Table, Image, Container} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import {URLS} from '../../constants'
import './commitTable.css'

class CommitTable extends Component {
  render() {
    const {commits} = this.props

    return (
      <Table id="CommitTable" variant="dark">
        <thead>
          <tr>
            <th colSpan="2" className="col-sm-3">
              Author
            </th>
            <th className="col-sm-3">Date</th>
            <th className="col-sm-6">Message</th>
          </tr>
        </thead>

        <tbody>
          {commits.slice(0, 10).map(commit => {
            const date = new Date(commit.commit.author.date).toLocaleString()

            return (
              <tr key={commit.id}>
                <td className="col-sm-1">
                  {commit.author && commit.author.avatar_url ? (
                    <Image className="avatar" src={commit.author.avatar_url} />
                  ) : (
                    <Image className="avatar" src={URLS.PLACEHOLDER_IMG} />
                  )}
                </td>

                <td className="col-sm-2">
                  {commit.commit.author.name ? commit.commit.author.name : '-'}
                </td>

                <td className="col-sm-3">{date}</td>

                <td className="col-sm-6">
                  {commit.commit.message ? commit.commit.message : '-'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export default withRouter(CommitTable)
