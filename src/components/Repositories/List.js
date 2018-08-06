/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DateTime } from 'luxon';
import { getRepositories } from '../../store/repositories/selectors';

type Props = {
  repositories: Array<Object>,
};

class List extends Component<Props> {
  static defaultProps = {
    repositories: [],
  };

  render() {
    const { repositories } = this.props;

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Repo Title</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell numeric>Stars</TableCell>
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories.map(repo => (
              <TableRow key={repo.id}>
                <TableCell component="th" scope="row">
                  {repo.id}
                </TableCell>
                <TableCell>
                  <a href={repo.html_url}>{repo.name}</a>
                </TableCell>
                <TableCell>{repo.owner.login}</TableCell>
                <TableCell numeric>{repo.stargazers_count}</TableCell>
                <TableCell>{this._renderCreatedAt(repo.created_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  _renderCreatedAt(createdAt: string) {
    const date = DateTime.fromISO(createdAt);

    return date.toFormat('yyyy-MM-dd');
  }
}

const mapStateToProps = state => ({
  repositories: getRepositories(state),
});

export default connect(
  mapStateToProps,
  null
)(List);
