import React from 'react';
import renderer from 'react-test-renderer';
import Equip from '../Equip';

describe('<Equip />', () => {
  it('component render', () => {
    let equip = renderer.create(<Equip life={1} bomb={1} />).toJSON();
    expect(equip).toMatchSnapshot();

    equip = renderer.create(<Equip life={0} bomb={1} />).toJSON();
    expect(equip).toMatchSnapshot();
  });
});
