import React from 'react';
import renderer from 'react-test-renderer';
import Developer from '../Developer';

describe('<Developer />', () => {
  it('component render', () => {
    let developer = renderer.create(<Developer />).toJSON();
    expect(developer).toMatchSnapshot();

    developer = renderer.create(<Developer />).toJSON();
    expect(developer).toMatchSnapshot();
  });
});
