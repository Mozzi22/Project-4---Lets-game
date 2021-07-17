import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';
import HeaderControlPanel from '../HeaderControlPanel';
import Logo from '../Logo';

describe('Header', () => {
  it('Should match snapshot', () => {
    const component = shallow(<Header />);
    expect(component.html()).toMatchSnapshot();
  });
    it('Should have Logo', () => {
    const component = mount(<Logo />);
    expect(component.find('Logo')).toHaveLength(1);
    });
    it('Should have HeaderControlPanel', () => {
    const component = mount(<HeaderControlPanel />);
    expect(component.find('HeaderControlPanel')).toHaveLength(1);
    });
});
