import React from 'react';
import history from 'src/helpers/history';
import { shallow } from 'enzyme';
import Nav from '../Nav';

jest.mock('src/helpers/history', () => ({
  push: jest.fn(),
}));
jest.mock('react-i18next', () => ({
   useTranslation: jest
     .fn()
     .mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }),
 }));

describe('Nav', () => {
   it('Should match snapshot', () => {
    const component = shallow(<Nav />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should call Nav main', () => {
    const component = shallow(<Nav />);
    component
      .find('Link')
      .at(0)
      .getElement()
      .props.onClick();
    expect(history.push).toHaveBeenCalledWith('/main');
  });
   it('should call Nav statistics', () => {
    const component = shallow(<Nav />);
    component
      .find('Link')
      .at(1)
      .getElement()
      .props.onClick();
    expect(history.push).toHaveBeenCalledWith('/statistics');
  });
  it('should render img', () => {
    const component = shallow(<Nav />);
    expect(component.find('img')).toHaveLength(1);
  });
});
