import React from 'react';
import DisplayGame from '../DisplayGame';
import { mount, shallow } from 'enzyme';

describe('DisplayGame', () => {
    it('Should match snapshot', () => {
        const component = shallow(<DisplayGame />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StDisplayGame', () => {
        const component = mount(<DisplayGame/>);
        expect(component.find('styled__StDisplayGame')).toHaveLength(1);
    });
    it('should render TicTacToe', () => {
        const component = mount(<DisplayGame/>);
        expect(component.find('TicTacToe')).toHaveLength(1);
    });
    it('should render Checkers', () => {
        const component = mount(<DisplayGame />);
        expect(component.find('Checkers')).toHaveLength(1);
    });
});