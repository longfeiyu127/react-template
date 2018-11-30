import React from 'react';
import renderer from 'react-test-renderer';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Remains from '../Remains';

// Enzyme.configure({ adapter: new Adapter() });

describe('<Remains />', () => {
  it('component render', () => {
    const position = {
      top: 0.1,
      left: 0.1
    };
    const size = {
      height: 0.1,
      width: 0.1
    };
    let remains = renderer
      .create(
        <Remains
          position={position}
          size={size}
          index={1}
          delRemains={() => {}}
        />
      )
      .toJSON();
    expect(remains).toMatchSnapshot();

    remains = renderer
      .create(
        <Remains
          position={position}
          size={size}
          index={1}
          delRemains={() => {}}
        />
      )
      .toJSON();
    expect(remains).toMatchSnapshot();
  });

  // it('componentDidMount', () => {
  //   const remains = new Remains();
  //   console.log(remains.componentDidMount);
  //   // const fn = jest.fn();
  //   // const position = {
  //   //   top: 0.1,
  //   //   left: 0.1
  //   // };
  //   // const size = {
  //   //   height: 0.1,
  //   //   width: 0.1
  //   // };
  //   // const remains = mount(
  //   //   <Remains
  //   //     position={position}
  //   //     size={size}
  //   //     index={1}
  //   //     delRemains={fn}
  //   //   />
  //   // );
  //   // remains.instance().componentDidMount();
  //   // expect(fn.mock.calls.length).toBe(1);
  // });
});
