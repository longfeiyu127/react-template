import React from 'react';
import renderer from 'react-test-renderer';
import Victory from '../Victory';

describe('<Victory />', () => {
  it('component render', () => {
    let victory = renderer.create(<Victory />).toJSON();
    expect(victory).toMatchSnapshot();

    victory = renderer.create(<Victory winner="白" />).toJSON();
    expect(victory).toMatchSnapshot();
  });
});
