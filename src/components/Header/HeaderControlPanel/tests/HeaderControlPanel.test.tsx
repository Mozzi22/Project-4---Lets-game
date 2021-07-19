import React from 'react';
import { shallow, mount } from 'enzyme';
import HeaderControlPanel from '../HeaderControlPanel';

jest.mock('react-i18next', () => ({
   useTranslation: jest
     .fn()
     .mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }),
}));

jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');

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
    const component = shallow(<HeaderControlPanel />);
    component.find('Select').getElement().props.onChange({ target: { key: 'lang', value: 'en' } });
    expect(localStorage.setItem).toHaveBeenCalledWith('lang', 'en');
    });
});
