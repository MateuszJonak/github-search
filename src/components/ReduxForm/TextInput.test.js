import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from './TextInput';

describe('TextInput', () => {
  let props;
  let tree;
  const shallowEnzyme = properties => shallow(<TextInput {...properties} />);

  beforeEach(() => {
    props = {
      input: {
        onBlur: jest.fn(),
        onFocus: jest.fn(),
        onChange: jest.fn(),
        value: 'value',
      },
      meta: {
        touched: false,
        error: '',
      },
    };
    tree = shallowEnzyme(props);
  });

  it('should render component correctly with props', () => {
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render component correctly with props error', () => {
    tree.setProps({
      meta: {
        touched: true,
        error: 'error',
      },
    });
    expect(toJson(tree)).toMatchSnapshot();
  });
});
