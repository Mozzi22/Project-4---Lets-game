import React from 'react';
import { shallow } from 'enzyme';
import { shallowSmart } from 'src/helpers/tests/testHelper';
import ModalComponent from '../ModalComponent';
import Component from '../ModalTestComponent';

jest.mock('react-modal');

describe('ModalComponent', () => {
  let props;
  beforeEach(() => {
    props = {
        isOpen: true,
        changeModalVisibility: jest.fn(),
        modalType: 'notificationSettings',
        Component,
    };
  });
  it('without component', () => {
    const component = shallow(<ModalComponent />);
    expect(component).toMatchSnapshot();
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<ModalComponent {...props}/>);
    expect(component.html).toMatchSnapshot();
  });
  it('check prop value', () => {
    const component = shallow(<ModalComponent {...props} />).find('Modal');
    expect(component.props().isOpen).toEqual(true);
  });
  it('should render button', () => {
    const component = shallow(<ModalComponent {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('should click on the button', () => {
    const component = shallow(<ModalComponent {...props} />);
    component.find('Button').simulate('click');
    expect(props.changeModalVisibility).toHaveBeenCalledWith({ modalType: 'notificationSettings', data: {}, isOpen: false });
  });
});
