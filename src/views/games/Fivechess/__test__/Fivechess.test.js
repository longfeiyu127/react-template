import React from 'react';
import renderer from 'react-test-renderer';
import { Fivechess } from '../Fivechess';

describe('<Fivechess />', () => {
  it('component render', () => {
    const history = [{ squares: [] }];

    const winner = 'whitle';

    const winnerCoord = '';

    const isBlack = false;

    const handleClick = () => {};

    const reset = '';
    let footer = renderer
      .create(
        <Fivechess
          history={history}
          winner={winner}
          winnerCoord={winnerCoord}
          isBlack={isBlack}
          handleClick={handleClick}
          reset={reset}
        />
      )
      .toJSON();
    expect(footer).toMatchSnapshot();

    footer = renderer
      .create(
        <Fivechess
          history={history}
          winner={winner}
          winnerCoord={winnerCoord}
          isBlack={isBlack}
          handleClick={handleClick}
          reset={reset}
        />
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
