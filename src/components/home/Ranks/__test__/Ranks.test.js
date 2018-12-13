import React from 'react';
import renderer from 'react-test-renderer';
import Ranks from '../Ranks';

describe('<Ranks />', () => {
  it('component render', () => {
    let ranks = renderer.create(<Ranks />).toJSON();
    expect(ranks).toMatchSnapshot();

    ranks = renderer.create(<Ranks winner="白" />).toJSON();
    expect(ranks).toMatchSnapshot();
  });
});
