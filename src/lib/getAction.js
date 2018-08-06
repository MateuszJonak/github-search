/* @flow */

import { camelCase, get } from 'lodash/fp';
import { compose } from 'redux';

const typeNamespacer = '/';
const actionNamespacer = '.';

export const getActionPath = (type: string) =>
  type.indexOf(typeNamespacer) === -1
    ? camelCase(type)
    : type
        .split(typeNamespacer)
        .map(part => camelCase(part))
        .join(actionNamespacer);

export default (actions: Object, type: string) =>
  compose(
    get,
    getActionPath
  )(type)(actions);
