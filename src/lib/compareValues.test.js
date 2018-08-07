import compareValues from './compareValues';
// $FlowFixMe
import { mockGetColumnById } from './columns';

// const mockGetColumnById = jest.fn();
jest.mock('./columns');

describe('compareValues', () => {
  let data;

  beforeEach(() => {
    data = [
      {
        number: 1,
        name: 'name1',
      },
      {
        number: 2.0,
        name: 'name2',
      },
      {
        number: 2.1,
        name: 'Name3',
      },
    ];
  });

  it('should compare two string values', () => {
    mockGetColumnById.mockReturnValue({ path: 'name' });
    expect(compareValues('name', 'asc')(data[0], data[2])).toBe(-1);
    expect(compareValues('name', 'asc')(data[2], data[1])).toBe(1);
    expect(compareValues('name', 'desc')(data[1], data[2])).toBe(1);
    expect(compareValues('name', 'desc')(data[2], data[0])).toBe(-1);
    expect(compareValues('name', 'desc')(data[0], data[0])).toBe(0);
  });

  it('should compare two number values', () => {
    mockGetColumnById.mockReturnValue({ path: 'number' });

    expect(compareValues('number', 'asc')(data[0], data[2])).toBe(-1);
    expect(compareValues('number', 'asc')(data[2], data[1])).toBe(1);
    expect(compareValues('number', 'desc')(data[1], data[2])).toBe(1);
    expect(compareValues('number', 'desc')(data[2], data[0])).toBe(-1);
    expect(compareValues('number', 'desc')(data[0], data[0])).toBe(0);
  });
});
