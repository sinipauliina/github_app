import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Table} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import {withNamespaces} from 'react-i18next'

import './repoTable.css'

class RepoTable extends Component {
  handleClickRow = e => {
    const {userName, history} = this.props
    const targetRepoName = e.target.parentElement.id

    history.push(`${userName}/${targetRepoName}`)
  }

  // TODO: Siirrä helpereihin!
  getLanguage = lng => {
    if (lng === 'fi') {
      return 'fi'
    } else {
      return 'en-GB'
    }
  }

  render() {
    const {repos, t, lng} = this.props
    const {handleClickRow, getLanguage} = this

    console.log('PROPSIT: ', this.props)

    return (
      <Table id="RepoTable" variant="dark" hover>
        <thead>
          <tr>
            <th className="col-xs-12 col-md-3">
              <span className="fas fa-folder" />
              {t('REPO_TABLE.REPOSITORY')}
            </th>

            <th className="hideSm col-md-6">{t('REPO_TABLE.DESCRIPTION')}</th>

            <th className="hideSm col-md-3">{t('REPO_TABLE.LAST_UPDATED')}</th>
          </tr>
        </thead>

        <tbody>
          {repos.map(repo => {
            const date = repo.updated_at
              ? new Date(repo.updated_at).toLocaleString(getLanguage(lng))
              : new Date(repo.created_at).toLocaleString(getLanguage(lng))

            return (
              <tr key={repo.id} id={repo.name} onClick={handleClickRow}>
                <td className="link col-xs-12 col-md-3">{repo.name}</td>

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

export default withNamespaces()(withRouter(RepoTable))
