import React from 'react';
import RoomListItems from '../RoomListItems';
import { mount, shallow } from 'enzyme';

describe('SearchNoRes', () => {
    it('Should match snapshot', () => {
        const component = shallow(<RoomListItems/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomListItems', () => {
        const component = mount(<RoomListItems/>);
        expect(component.find('styled__StRoomListItems')).toHaveLength(1);
    });
    it('should render StRoom', () => {
        const component = mount(<RoomListItems/>);
        expect(component.find('styled__StRoom')).toHaveLength(1);
    });
    it('should render StNoResText', () => {
        const component = mount(<RoomListItems/>);
        expect(component.find('Button')).toHaveLength(1);
    });
});