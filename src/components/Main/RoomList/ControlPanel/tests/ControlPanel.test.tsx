import React from 'react';
import ControlPanel from '../ControlPanel';
import { mount, shallow } from 'enzyme';

describe('ControlPanel', () => {
    const props = {
        setValue: jest.fn(),
        filterByRoomName: jest.fn(),
        changeModalVisibility: jest.fn()
    }
    it('Should match snapshot', () => {
        const component = shallow(<ControlPanel {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StControlPanel', () => {
        const component = mount(<ControlPanel {...props}/>);
        expect(component.find('styled__StControlPanel')).toHaveLength(1);
    });
     it('should render Input', () => {
        const component = mount(<ControlPanel {...props}/>);
        expect(component.find('Input')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = mount(<ControlPanel {...props}/>);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should call handleCreateRoom after click Button', () => {
        const component = mount(<ControlPanel {...props}/>);
        component.find('button').simulate('click');
        expect(props.changeModalVisibility).toHaveBeenCalledWith({
            isOpen: true, data: {}, modalType: 'createChat',
        });
    });
});
