import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('Should match snapshot', () => {
    const component = shallow(<Header />);
    expect(component.html()).toMatchSnapshot();
  });
});
