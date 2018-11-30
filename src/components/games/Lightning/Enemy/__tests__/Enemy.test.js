import React from 'react';
import renderer from 'react-test-renderer';
import Enemy from '../Enemy';

describe('<Enemy />', () => {
  it('component render', () => {
    const position = {
      top: 0.1,
      left: 0.1
    };
    const size = {
      height: 0.1,
      width: 0.1
    };
    let enemy = renderer
      .create(<Enemy position={position} size={size} bulletTpey="player" />)
      .toJSON();
    expect(enemy).toMatchSnapshot();

    enemy = renderer
      .create(<Enemy position={position} size={size} bulletTpey="player" />)
      .toJSON();
    expect(enemy).toMatchSnapshot();
  });
});
