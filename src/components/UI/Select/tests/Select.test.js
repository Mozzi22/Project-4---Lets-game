import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from '../Select';
// import { ISelect } from '../types';

describe('Select', () => {
  // let props;
  // beforeEach(() => {
  //   props = {
  //     id: 'id',
  //     onClick: jest.fn(),
  //     value: 'value',
  //   };
  // });
  it('Should match snapshot', () => {
    const component = shallow(<Select />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Select', () => {
    const component = mount(<Select />);
    expect(component.find('Select')).toHaveLength(1);
  });
  // it('should render StButton', () => {
  //   const component = shallow(<Select {...props} />);
  //   expect(component.find('styled__StSelect')).toHaveLength(1);
  // });
  // it('should call onClick', () => {
  //   const component = shallow(<Select {...props} />);
  //   component.find('styled__StButton').simulate('click');
  //   expect(props.onClick).toHaveBeenCalled();
  // });
});
