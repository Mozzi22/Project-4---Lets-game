import React from 'react';
import RoomListItems from '../RoomListItems';
import { mount, shallow } from 'enzyme';

describe('SearchNoRes', () => {
    // it('Should match snapshot', () => {
    //     const component = shallow(<RoomListItems/>);
    //     expect(component.html()).toMatchSnapshot();
    // });
    // it('should render StRoomListItems', () => {
    //     const component = mount(<RoomListItems/>);
    //     expect(component.find('styled__StRoomListItems')).toHaveLength(1);
    // });
    // it('should render StRoom', () => {
    //     const component = mount(<RoomListItems/>);
    //     expect(component.find('styled__StRoom')).toHaveLength(1);
    // });
    // it('should render StNoResText', () => {
    //     const component = mount(<RoomListItems/>);
    //     expect(component.find('Button')).toHaveLength(1);
    // });
    let props;
    beforeEach(() => {
    props = {
        creatorLogin: 'KekShrek',
        gameType: 'Checkers',
        userLogin: 'KekShrek',
        id: '21ue321h3hjk21bh21-asdshjdsad',
        joinRoom: jest.fn(),
        playWithBot: jest.fn(),
        subscribeRoom: jest.fn(),
    };
        });
    it('Should match snapshot', () => {
        const component = shallow(<RoomListItems {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StRoomListItems', () => {
        const component = mount(<RoomListItems {...props}/>);
        expect(component.find('styled__StRoomListItems')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = mount(<RoomListItems {...props}/>);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should click on button and call playWithBot func', () => {
        const component = mount(<RoomListItems {...props} />);
        const testEvent = { target: { id: '1' } };
        component.find('Button').props().onClick(testEvent);
        expect(props.playWithBot).toHaveBeenCalledWith(testEvent.target.id);
    });
    it('should click on button and call joinRoom func', () => {
        props.userLogin = 'abba';
        const component = mount(<RoomListItems {...props} />);
        const testEvent = { target: { id: '1' } };
        component.find('Button').props().onClick(testEvent);
        expect(props.joinRoom).toHaveBeenCalledWith(testEvent.target.id);
    });
});