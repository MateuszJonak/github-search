import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BodyCell from './BodyCell';

describe('BodyCell', () => {
  let props;
  let tree;
  const shallowEnzyme = properties => shallow(<BodyCell {...properties} />);

  beforeEach(() => {
    props = {
      column: {
        id: 'id',
        path: 'id',
        label: 'ID',
      },
      row: {
        id: 1,
        name: 'name1',
        profile: {
          firstName: 'My name',
        },
      },
    };
    tree = shallowEnzyme(props);
  });

  it('should render component correctly with default props', () => {
    expect(toJson(tree.dive())).toMatchSnapshot();
  });

  it('should render component correctly with nested key', () => {
    tree.setProps({
      column: {
        id: 'firstName',
        path: 'profile.firstName',
        label: 'First name',
      },
    });
    expect(toJson(tree.dive())).toMatchSnapshot();
  });

  it('should render component correctly with some valueFormatter and valueRenderer props', () => {
    tree.setProps({
      column: {
        id: 'firstName',
        path: 'profile.firstName',
        label: 'First name',
        valueFormatter: ({ value }) => `${value}2`,
        valueRenderer: ({ value }) => <span>{value}</span>,
      },
    });
    expect(toJson(tree.dive())).toMatchSnapshot();
  });
});
