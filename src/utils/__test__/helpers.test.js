import { isObjEqual } from '../helpers';

describe('helpers.js', () => {
  it('isObjEqual', () => {
    expect(isObjEqual({}, {})).toBe(true);
  });
});
/**
 * describe('mobileEvents.js', () => {
  it('not throw', () => {
    const el = document.createElement('div');
    expect(swipeDetect.bind(Object.create(null), [el, () => {}])).not.toThrow(
      'error'
    );
  });
});
 */
