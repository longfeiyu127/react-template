import React from 'react';
import renderer from 'react-test-renderer';
import { TictactoeVictory } from '../Victory';

describe('<TictactoeVictory />', () => {
  it('component render', () => {
    let victory = renderer
      .create(<TictactoeVictory xIsNext reset={() => {}} />)
      .toJSON();
    expect(victory).toMatchSnapshot();

    victory = renderer.create(<TictactoeVictory reset={() => {}} />).toJSON();
    expect(victory).toMatchSnapshot();
  });
});
