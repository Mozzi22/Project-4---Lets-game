import React from 'react';
import TicTacToe from '../TicTacToe';
import { mount, shallow } from 'enzyme';

describe('TicTacToe', () => {
    const props = {
        ticTacToe: [{
            position: 1,
            isChecked: true,
            figure: 'O'
        }],
        do_step: jest.fn()
   }
    it('Should match snapshot', () => {
        const component = shallow(<TicTacToe {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StTicTacToe', () => {
        const component = mount(<TicTacToe {...props}/>);
        expect(component.find('styled__StTicTacToe')).toHaveLength(1);
    });
    it('should render SingleSellNine', () => {
        const component = mount(<TicTacToe {...props}/>);
        expect(component.find('SingleSellNine')).toHaveLength(1);
    });
});
