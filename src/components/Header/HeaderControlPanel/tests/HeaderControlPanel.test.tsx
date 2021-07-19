import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderControlPanel from '../HeaderControlPanel';

jest.spyOn(localStorage, "setItem");
localStorage.setItem = jest.fn();

jest.spyOn(localStorage.__proto__, 'setItem');
localStorage.__proto__.setItem = jest.fn();

jest.mock('react-i18next', () => ({
   useTranslation: jest
     .fn()
     .mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }),
 }));

describe('HeaderControlPanel', () => {
  it('Should match snapshot', () => {
    const component = shallow(<HeaderControlPanel/>);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Button', () => {
    const component = mount(<HeaderControlPanel />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('saves the key to the storage', () => {
    const component = mount(<HeaderControlPanel />);
    component.find('Select').getElement().props.onChange({ target: { value: 'asad' } });
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
