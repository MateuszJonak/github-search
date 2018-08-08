/* @flow */

import React from 'react';
import { get } from 'lodash/fp';
import TableCell from '@material-ui/core/TableCell';
import { type Column } from '../../lib/columns';

const identity = ({ value }) => value;

class BodyCell extends React.Component<{ column: Column, row: Object }> {
  render() {
    const { column, row } = this.props;
    const valueFormatter = column.valueFormatter || identity;
    const valueRenderer = column.valueRenderer || identity;

    return (
      <TableCell
        component={column.component}
        scope={column.component}
        numeric={column.numeric}>
        {valueRenderer({
          value: valueFormatter({
            value: get(column.path, row),
            row,
            ...this.props,
          }),
          row,
          ...this.props,
        })}
      </TableCell>
    );
  }
}

export default BodyCell;
