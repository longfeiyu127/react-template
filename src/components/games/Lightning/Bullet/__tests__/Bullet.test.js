import React from 'react';
import renderer from 'react-test-renderer';
import Bullet from '../Bullet';

describe('<Bullet />', () => {
  it('component render', () => {
    const position = {
      top: 0.1,
      left: 0.1
    };
    const size = {
      height: 0.1,
      width: 0.1
    };
    let bullet = renderer
      .create(<Bullet position={position} size={size} bulletTpey="player" />)
      .toJSON();
    expect(bullet).toMatchSnapshot();

    bullet = renderer
      .create(<Bullet position={position} size={size} bulletTpey="player" />)
      .toJSON();
    expect(bullet).toMatchSnapshot();
  });
});
