/* @flow */

import { get } from 'lodash/fp';
import { getColumnById } from './columns';

export default (key: string, orderDirection: 'asc' | 'desc' = 'asc') => (
  a: Object,
  b: Object
) => {
  const column = getColumnById(key);
  if (!column) {
    return 0;
  }
  const getValue = get(column.path);
  let valueA = getValue(a);
  let valueB = getValue(b);

  if (!valueA || !valueB) {
    return 0;
  }

  valueA = typeof valueA === 'string' ? valueA.toUpperCase() : valueA;
  valueB = typeof valueB === 'string' ? valueB.toUpperCase() : valueB;

  let comparison = 0;
  if (valueA > valueB) {
    comparison = 1;
  } else if (valueA < valueB) {
    comparison = -1;
  }
  return orderDirection === 'desc' ? comparison * -1 : comparison;
};
