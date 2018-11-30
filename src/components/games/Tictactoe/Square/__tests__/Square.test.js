import React from 'react';
import renderer from 'react-test-renderer';
import { TictactoeSquare } from '../Square';

describe('<TictactoeSquare />', () => {
  it('component render', () => {
    let victory = renderer
      .create(<TictactoeSquare heightLine value="O" onClick={() => {}} />)
      .toJSON();
    expect(victory).toMatchSnapshot();

    victory = renderer.create(<TictactoeSquare onClick={() => {}} />).toJSON();
    expect(victory).toMatchSnapshot();

    victory = renderer
      .create(<TictactoeSquare value="X" onClick={() => {}} />)
      .toJSON();
    expect(victory).toMatchSnapshot();
  });
});
