import React from 'react';
import renderer from 'react-test-renderer';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { Player } from '../Player';

// Enzyme.configure({ adapter: new Adapter() });

describe('<Player />', () => {
  it('component render', () => {
    const position = {
      top: 0.1,
      left: 0.1
    };
    let player = renderer.create(<Player position={position} />).toJSON();
    expect(player).toMatchSnapshot();

    player = renderer.create(<Player position={position} />).toJSON();
    expect(player).toMatchSnapshot();
  });

  // it('componentDidMount', () => {
  //   const fn = jest.fn();
  //   const position = {
  //     top: 0.1,
  //     left: 0.1
  //   };
  //   const player = mount(<Player position={position} ControllPlayer={fn} />);
  //   player.instance().componentDidMount();
  //   expect(fn.mock.calls.length).toBe(1);
  // });
});
