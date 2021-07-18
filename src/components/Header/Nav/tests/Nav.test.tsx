import React from 'react';
import { shallowSmart, mountSmart } from 'src/helpers/testHelper';
import Nav from '../Nav';
import 'src/i18n';
import 'react-i18next';

describe('Nav', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<Nav />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render p', () => {
    const component = mountSmart(<Nav />);
    expect(component.find('img')).toHaveLength(1);
  });
  it('should render inputs', () => {
    const component = mountSmart(<Nav />);
    expect(component.find('h1')).toHaveLength(1);
  });
});
