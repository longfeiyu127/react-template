import React from 'react';
import renderer from 'react-test-renderer';
import Pointer, { slantType, checkLineType } from '../Pointer';

const line = [[0, 0], [1, 1], [2, 2]];
const line1 = [[0, 0], [0, 1], [0, 2]];
const line2 = [[0, 0], [1, 0], [2, 0]];

describe('<Pointer />', () => {
  it('component render', () => {
    let pointer = renderer.create(<Pointer line={line} />).toJSON();
    expect(pointer).toMatchSnapshot();

    pointer = renderer.create(<Pointer line={line1} />).toJSON();
    expect(pointer).toMatchSnapshot();

    pointer = renderer.create(<Pointer line={line2} />).toJSON();
    expect(pointer).toMatchSnapshot();

    pointer = renderer.create(<Pointer line={false} />).toJSON();
    expect(pointer).toMatchSnapshot();
  });

  it('function', () => {
    expect(slantType(line)).toBe('slant0');
    expect(slantType(line2)).toBe('slant1');
    expect(checkLineType(line)).toBe('s');
    expect(checkLineType(line1)).toBe('v');
    expect(checkLineType(line2)).toBe('c');
    expect(checkLineType(undefined)).toBeUndefined();
  });
});
