import React from 'react';
import RoomContent from '../RoomContent';
import { mount, shallow } from 'enzyme';

describe('RoomContent', () => {
    it('Should match snapshot', () => {
        const component = shallow(<RoomContent />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomContent', () => {
        const component = mount(<RoomContent/>);
        expect(component.find('styled__StRoomContent')).toHaveLength(1);
    });
    it('should render Turn', () => {
        const component = mount(<RoomContent/>);
        expect(component.find('Turn')).toHaveLength(1);
    });
    it('should render DisplayGame', () => {
        const component = mount(<RoomContent/>);
        expect(component.find('DisplayGame')).toHaveLength(1);
    });
});
