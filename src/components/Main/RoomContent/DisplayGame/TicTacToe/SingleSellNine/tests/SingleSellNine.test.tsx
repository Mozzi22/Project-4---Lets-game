import React from 'react';
import SingleSellNine from '../SingleSellNine';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({
      ticTacToe: {}
});
describe('SingleSellNine', () => {
   const props = {
            id: 1,
            doStep: jest.fn(),
            status: '',
          };
    it('Should match snapshot', () => {
        const component = shallow(<SingleSellNine {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render SingleSellNine ', () => {
        const component = mount(<SingleSellNine {...props} />);
        expect(component.find('styled__StSingleSellNine')).toHaveLength(1);
    });
    it('Should render img CROSS ', () => {
        props.status = 'X';
        const component = mount(<SingleSellNine {...props} />);
        expect(component.find('styled__StSingleSellNine')).toBe('X');
    });
    it('Should render img ZEROTIC ', () => {
        props.status = 'O';
        const component = mount(<SingleSellNine {...props} />);
        expect(component.find('styled__StSingleSellNine')).toBe('O');
    });
    it('Should click tic-tac-toe field and call doStep ', () => {
        props.status = '';
        const component = mount(<SingleSellNine {...props} />);
        component.find('styled__StSingleSellNine').props().onClick();
        expect(props.doStep).toHaveBeenCalledWith(props.id);
    });
});
