import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from '../Select';

describe('Select', () => {
  let props;
  beforeEach(() => {
    props = {
      id: 'id',
      onClick: jest.fn(),
      value: 'value',
      options: [],
    };
  });
  it('Should match snapshot', () => {
    const component = shallow(<Select {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should render Select', () => {
    const component = shallow(<Select {...props}/>);
        expect(component.find('styled__StSelect')).toHaveLength(1);
  });
  it('should call onClick', () => {
    const component = shallow(<Select {...props} />);
    component.find('styled__StSelect').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
