/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash/fp';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import {
  actionsMap,
  PAGINATION_PAGE,
  PAGINATION_ROWS_PER_PAGE,
  ORDER,
} from '../../store/repositories/actions';
import {
  getRepositories,
  getRepositoriesTotal,
  getPage,
  getRowsPerPage,
  getOrderBy,
  getOrderDirection,
} from '../../store/repositories/selectors';
import { getGitHubProfile } from '../../store/auth/selectors';
import columns, { getColumnById } from '../../lib/columns';
import { type Profile } from '../../lib/profile';
import BodyCell from './BodyCell';

type Props = {
  data: Array<Object>,
  total: number,
  rowsPerPage: number,
  page: number,
  setPage: number => void,
  setRowsPerPage: (number | string) => void,
  orderBy: string,
  orderDirection: 'asc' | 'desc',
  setOrder: (string, 'asc' | 'desc') => void,
  profile: Profile,
};

class List extends React.Component<Props> {
  static defaultProps = {
    data: [],
    total: 0,
  };

  handleChangePage = (event, page) => {
    this.props.setPage(page);
  };

  handleChangeRowsPerPage = event => {
    this.props.setRowsPerPage(event.target.value);
  };

  createSortHandler = property => () => {
    const orderBy = property;
    let order = 'desc';

    if (
      this.props.orderBy === property &&
      this.props.orderDirection === 'desc'
    ) {
      order = 'asc';
    }

    this.props.setOrder(orderBy, order);
  };

  render() {
    const { total, rowsPerPage, page } = this.props;
    return (
      <Paper>
        <Table>
          {this._renderTableHead()}
          {this._renderTableBody()}
        </Table>
        <TablePagination
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }

  _renderTableHead() {
    const { orderBy, orderDirection } = this.props;
    return (
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell key={column.id} numeric={column.numeric}>
              <Tooltip
                title="Sort"
                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}>
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderDirection}
                  onClick={this.createSortHandler(column.id)}>
                  {column.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  _renderTableBody() {
    const { data, profile } = this.props;
    const ownerColumn = getColumnById('owner') || {};
    const getValue = get(ownerColumn.path);
    const getId = get('id');

    return (
      <TableBody>
        {data.map(item => {
          const isSelected = getValue(item) === getId(profile);
          return (
            <TableRow
              key={item.id}
              aria-checked={isSelected}
              tabIndex={-1}
              selected={isSelected}>
              {columns.map(column => (
                <BodyCell key={column.id} column={column} row={item} />
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}

const mapStateToProps = state => ({
  data: getRepositories(state),
  total: getRepositoriesTotal(state),
  page: getPage(state),
  rowsPerPage: getRowsPerPage(state),
  orderBy: getOrderBy(state),
  orderDirection: getOrderDirection(state),
  profile: getGitHubProfile(state),
});

const mapDispatchToProps = {
  setPage: get(PAGINATION_PAGE)(actionsMap),
  setRowsPerPage: get(PAGINATION_ROWS_PER_PAGE)(actionsMap),
  setOrder: get(ORDER)(actionsMap),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
