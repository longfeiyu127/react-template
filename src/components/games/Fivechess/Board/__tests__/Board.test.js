import React from 'react';
import renderer from 'react-test-renderer';
import Board, { inWinLine } from '../Board';

const squares = new Array(15).fill(new Array(15).fill(null));
const squaresWhite = new Array(15).fill(new Array(15).fill('White'));
const squaresBlack = new Array(15).fill(new Array(15).fill('Black'));
const winLine = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];

describe('<Board />', () => {
  it('component render', () => {
    const fn = jest.fn();
    let board = renderer
      .create(<Board squares={squares} winnerCoord={null} onClick={fn} />)
      .toJSON();
    expect(board).toMatchSnapshot();

    board = renderer
      .create(<Board squares={squaresWhite} winnerCoord={null} onClick={fn} />)
      .toJSON();
    expect(board).toMatchSnapshot();

    board = renderer
      .create(<Board squares={squaresBlack} winnerCoord={null} onClick={fn} />)
      .toJSON();
    expect(board).toMatchSnapshot();
  });

  it('test inWinLine', () => {
    expect(inWinLine(winLine, 0, 0)).toBe(false);
    expect(inWinLine(winLine, 2, 6)).toBe(false);
    expect(inWinLine(winLine, 3, 2)).toBeUndefined();
    expect(inWinLine(winLine, 1, 1)).toBeDefined();
  });
});
