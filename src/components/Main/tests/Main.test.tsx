import React from 'react';
import Main from '../Main';
import { mount, shallow } from 'enzyme';

describe('Main', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Main />);
        expect(component.html()).toMatchSnapshot();
    });
     it('should render StMain', () => {
        const component = mount(<Main/>);
        expect(component.find('styled__StMain')).toHaveLength(1);
    });
    it('should render RoomList', () => {
        const component = mount(<Main/>);
        expect(component.find('RoomList')).toHaveLength(1);
    });
    it('should render RoomContent', () => {
        const component = mount(<Main/>);
        expect(component.find('RoomContent')).toHaveLength(1);
    });
});
