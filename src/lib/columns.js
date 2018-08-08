/* @flow */

import * as React from 'react';
import { DateTime } from 'luxon';

export type ValueRendererArgs = { value: string | number, row: Object };
export type ValueFormaterArgs = { value: string, row: Object };

export type Column = {
  id: string,
  path: string,
  numeric?: boolean,
  label: string,
  component?: string,
  scope?: string,
  valueRenderer?: ValueRendererArgs => React.Element<any>,
  valueFormatter?: ValueFormaterArgs => string | number,
};

const COLUMNS: Array<Column> = [
  {
    id: 'id',
    path: 'id',
    numeric: false,
    label: 'ID',
    component: 'th',
    scope: 'col',
  },
  {
    id: 'name',
    path: 'name',
    numeric: false,
    label: 'Repo Title',
    valueRenderer: ({ value, row }: ValueRendererArgs) => (
      <a href={row.html_url}>{value}</a>
    ),
  },
  { id: 'owner', path: 'owner.login', numeric: false, label: 'Owner' },
  { id: 'stars', path: 'stargazers_count', numeric: true, label: 'Stars' },
  {
    id: 'createdAt',
    path: 'created_at',
    numeric: false,
    label: 'Created at',
    valueFormatter: ({ value }: ValueFormaterArgs) => {
      const date = DateTime.fromISO(value);

      return date.toFormat('yyyy-MM-dd');
    },
  },
];

export const getColumnById = (id: string): Column | void =>
  COLUMNS.find(column => column.id === id);

export default COLUMNS;
