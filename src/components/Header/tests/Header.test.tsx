import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../Header';
import HeaderControlPanel from '../HeaderControlPanel';
import Nav from '../Nav';

describe('Header', () => {
  it('Should match snapshot', () => {
    const component = shallow(<Header />);
    expect(component.html()).toMatchSnapshot();
  });
    it('Should have Nav', () => {
    const component = mount(<Nav />);
    expect(component.find('Nav')).toHaveLength(1);
    });
    it('Should have HeaderControlPanel', () => {
    const component = mount(<HeaderControlPanel />);
    expect(component.find('HeaderControlPanel')).toHaveLength(1);
    });
});
