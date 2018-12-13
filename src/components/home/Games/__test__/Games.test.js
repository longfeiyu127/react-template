import React from 'react';
import renderer from 'react-test-renderer';
import Games from '../Games';

describe('<Games />', () => {
  it('component render', () => {
    let games = renderer.create(<Games history={{}} />).toJSON();
    expect(games).toMatchSnapshot();

    games = renderer.create(<Games history={{}} />).toJSON();
    expect(games).toMatchSnapshot();
  });
});
