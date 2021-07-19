import React from 'react';
import RoomList from '../RoomList';
import { mount, shallow } from 'enzyme';

describe('RoomList', () => {
    it('Should match snapshot', () => {
        const component = shallow(<RoomList />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomList', () => {
        const component = mount(<RoomList/>);
        expect(component.find('styled__StRoomList')).toHaveLength(1);
    });
     it('should render StControlPanel', () => {
        const component = mount(<RoomList/>);
        expect(component.find('styled__StControlPanel')).toHaveLength(2);
    });
    it('should render StItems', () => {
        const component = mount(<RoomList/>);
        expect(component.find('styled__StItems')).toHaveLength(1);
    });
    it('should render ControlPanel', () => {
        const component = mount(<RoomList/>);
        expect(component.find('ControlPanel')).toHaveLength(1);
    });
    it('should render SearchNoRes', () => {
        const component = mount(<RoomList />);
        expect(component.find('SearchNoRes')).toHaveLength(1);
    });
});
