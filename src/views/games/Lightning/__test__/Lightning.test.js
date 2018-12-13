import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Lightning from '../Lightning';

describe('<Lightning />', () => {
  it('component render', () => {
    let lightning = renderer
      .create(
        <MemoryRouter>
          <Lightning />
        </MemoryRouter>
      )
      .toJSON();
    expect(lightning).toMatchSnapshot();

    lightning = renderer
      .create(
        <MemoryRouter>
          <Lightning />
        </MemoryRouter>
      )
      .toJSON();
    expect(lightning).toMatchSnapshot();
  });
});
