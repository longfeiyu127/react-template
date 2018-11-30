import React from 'react';
import renderer from 'react-test-renderer';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Pause from '../Pause';

// Enzyme.configure({ adapter: new Adapter() });

describe('<Pause />', () => {
  it('component render', () => {
    const start = () => {};
    const pauseFn = () => {};
    let pause = renderer
      .create(<Pause EngineStatus start={start} pause={pauseFn} />)
      .toJSON();
    expect(pause).toMatchSnapshot();

    pause = renderer
      .create(<Pause EngineStatus={false} start={start} pause={pauseFn} />)
      .toJSON();
    expect(pause).toMatchSnapshot();
  });

  // it('mount', () => {
  //   const fn = jest.fn();
  //   // const fn2 = jest.fn();
  //   const pause = mount(<Pause EngineStatus pause={fn} start={fn} />);
  //   pause.find("[name='pause']").simulate('click');
  //   expect(fn.mock.calls.length).toBe(1);
  //   // pause.find("[name='start']").simulate('click');
  //   // expect(fn2.mock.calls.length).toBe(1);
  // });
});
