import React from 'react';
import TicTacToe from '../TicTacToe';
import { mount, shallow } from 'enzyme';

describe('TicTacToe', () => {
    it('Should match snapshot', () => {
        const component = shallow(<TicTacToe />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StTicTacToe', () => {
        const component = mount(<TicTacToe/>);
        expect(component.find('styled__StTicTacToe')).toHaveLength(1);
    });
});