import React from 'react';
import renderer from 'react-test-renderer';
import Firework from '../Firework';

describe('<Firework />', () => {
  it('component render', () => {
    let firework = renderer.create(<Firework />).toJSON();
    expect(firework).toMatchSnapshot();

    firework = renderer.create(<Firework gameover="1" />).toJSON();
    expect(firework).toMatchSnapshot();

    firework = renderer
      .create(
        <Firework>
          <span>test</span>
        </Firework>
      )
      .toJSON();
    expect(firework).toMatchSnapshot();
  });
});
