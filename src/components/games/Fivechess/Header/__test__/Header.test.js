import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('component render', () => {
    const fn = () => true;
    let header = renderer.create(<Header isFullscreen={fn} />).toJSON();
    expect(header).toMatchSnapshot();

    header = renderer.create(<Header isFullscreen={fn} winner />).toJSON();
    expect(header).toMatchSnapshot();

    header = renderer.create(<Header isFullscreen={fn} isBlack />).toJSON();
    expect(header).toMatchSnapshot();

    header = renderer
      .create(<Header isFullscreen={fn} winner isBlack />)
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('mount', () => {
    const fn = jest.fn();
    const gameover = mount(
      <Header fullScreen={fn} isFullscreen={fn} winner isBlack />
    );
    gameover.find("[name='fullScreen']").simulate('click');
    expect(fn.mock.calls.length).toBe(1);
  });
});
