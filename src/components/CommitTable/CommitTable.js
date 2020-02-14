import React from 'react'
import {Table, Image} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import {URLS, CONTENT} from '../../constants'
import './commitTable.css'

const CommitTable = props => {
  const {commits} = props

  return (
    <Table id="CommitTable" variant="dark">
      <thead>
        <tr>
          <th colSpan="2" className="col-sm-3">
            {CONTENT.COMMIT_TABLE.AUTHOR}
          </th>

          <th className="col-sm-6">{CONTENT.COMMIT_TABLE.MESSAGE}</th>

          <th className="col-sm-3">{CONTENT.COMMIT_TABLE.DATE}</th>
        </tr>
      </thead>

      <tbody>
        {commits.slice(0, 10).map(commit => {
          const date = new Date(commit.commit.author.date).toLocaleString()

          return (
            <tr key={commit.node_id}>
              <td className="col-sm-1">
                {commit.author && commit.author.avatar_url ? (
                  <Image
                    className="avatar"
                    src={commit.author.avatar_url}
                    rounded
                  />
                ) : (
                  <Image
                    className="avatar"
                    src={URLS.PLACEHOLDER_IMG}
                    rounded
                  />
                )}
              </td>

              <td className="col-sm-2">
                {commit.commit.author.name ? commit.commit.author.name : '-'}
              </td>

              <td className="col-sm-6">
                {commit.commit.message ? commit.commit.message : '-'}
              </td>

              <td className="col-sm-3">{date}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default CommitTable
