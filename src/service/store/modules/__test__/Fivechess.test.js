import {
  Crosswise,
  Vertical,
  TopLeft,
  TopRight,
  computeCoord,
  calculateWinner
} from '../Fivechess';
// import { Crosswise, Vertical, TopLeft, TopRight, computeCoord, calculateWinner } from '../Fivechess';

describe('Fivechess.js', () => {
  it('not throw', () => {
    /**
     * const squares = new Array(15).fill(new Array(15).fill(null));
    const squaresWhite = new Array(15).fill(new Array(15).fill('White'));
    const squaresBlack = new Array(15).fill(new Array(15).fill('Black'));
     */
    // const squares = new Array(15).fill(new Array(15).fill(null));
    const squaresCrosswise = [
      [null, 'black', 'black', 'black', 'black', 'black']
    ];
    const squaresVertical = [
      [null, 'black'],
      [null, 'black'],
      [null, 'black'],
      [null, 'black'],
      [null, 'black'],
      [null, null]
    ];
    const squaresTopLeft = [
      [null, null],
      [null, 'black'],
      [null, null, 'black'],
      [null, null, null, 'black'],
      [null, null, null, null, 'black'],
      [null, null, null, null, null, 'black'],
      [null, null, null, null, null, null, null, null]
    ];
    const squaresTopRight = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 'black'],
      [null, null, null, null, 'black'],
      [null, null, null, 'black'],
      [null, null, 'black'],
      [null, 'black'],
      [null, null]
    ];
    expect(JSON.stringify(Crosswise(squaresCrosswise, 0, 5))).toBe(
      '[[0,1],[0,5]]'
    );
    expect(JSON.stringify(Vertical(squaresVertical, 0, 1))).toBe(
      '[[0,1],[4,1]]'
    );
    expect(JSON.stringify(TopLeft(squaresTopLeft, 1, 1))).toBe('[[1,1],[5,5]]');
    expect(JSON.stringify(TopRight(squaresTopRight, 5, 1))).toBe(
      '[[1,5],[5,1]]'
    );
    expect(JSON.stringify(computeCoord(...[[1, 5], [5, 1]]))).toBe(
      '[[1,5],[2,4],[3,3],[4,2],[5,1]]'
    );
    expect(
      JSON.stringify(calculateWinner(squaresCrosswise, 0, 1))
    ).toBeDefined();
    expect(JSON.stringify(calculateWinner(squaresTopRight, 5, 1))).toBe(
      '{"winnerCoord":[[1,5],[2,4],[3,3],[4,2],[5,1]],"winner":"black"}'
    );
  });
});
