import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../index';

describe('<Home />', () => {
  it('component render', () => {
    let home = renderer.create(<Home history={{}} />).toJSON();
    expect(home).toMatchSnapshot();

    home = renderer.create(<Home history={{}} />).toJSON();
    expect(home).toMatchSnapshot();
  });
});
