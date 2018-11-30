import React from 'react';
import renderer from 'react-test-renderer';
import Materials from '../Materials';

describe('<Materials />', () => {
  it('component render', () => {
    const position = {
      top: 0.1,
      left: 0.1
    };
    const size = {
      height: 0.1,
      width: 0.1
    };
    let materials = renderer
      .create(
        <Materials position={position} size={size} materialsType="power" />
      )
      .toJSON();
    expect(materials).toMatchSnapshot();

    materials = renderer
      .create(
        <Materials position={position} size={size} materialsType="power" />
      )
      .toJSON();
    expect(materials).toMatchSnapshot();
  });
});
