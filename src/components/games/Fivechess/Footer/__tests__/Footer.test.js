import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('component render', () => {
    let footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();

    footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
