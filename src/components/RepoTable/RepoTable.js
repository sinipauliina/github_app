import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import './repoTable.css'

class RepoTable extends Component {
  handleClickRow = e => {
    const {userName, history} = this.props
    const repoName = e.target.parentElement.id

    history.push(`${userName}/${repoName}`)
  }

  render() {
    const {userName, repos} = this.props
    const {handleClickRow} = this

    return (
      <Table id="RepoTable" variant="dark" hover>
        <thead>
          <tr>
            <th className="col-md-3">
              <span className="fas fa-folder" />
              Repository
            </th>

            <th className="hideSm col-md-6">Description</th>

            <th className="hideSm col-md-3">Last updated</th>
          </tr>
        </thead>

        <tbody>
          {repos.map(repo => {
            const date = repo.updated_at
              ? new Date(repo.updated_at).toLocaleString()
              : new Date(repo.created_at).toLocaleString()

            return (
              <tr key={repo.id} id={repo.name} onClick={handleClickRow}>
                <td className="link col-md-3">{repo.name}</td>

                <td className="hideSm col-md-6">
                  {repo.description ? repo.description : '-'}
                </td>

                <td className="hideSm col-md-3">{date}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export default withRouter(RepoTable)
