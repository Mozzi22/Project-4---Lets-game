import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from 'src/components/UI/Button';
import Select from 'src/components/UI/Select';
import HeaderControlPanel from '../HeaderControlPanel';

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
    const component = mount(<Button />);
    expect(component.find('Button')).toHaveLength(1);
    });
  it('Should have Select', () => {
    const component = mount(<Select />);
    expect(component.find('Select')).toHaveLength(1);
  });
});
