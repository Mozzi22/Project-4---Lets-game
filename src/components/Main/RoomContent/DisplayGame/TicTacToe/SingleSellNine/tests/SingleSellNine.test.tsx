import React from 'react';
import SingleSellNine from '../SingleSellNine';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from 'src/helpers/testHelper';

const mockStore = configureStore();
const store = mockStore({
      ticTacToe: {}
});
describe('SingleSellNine', () => {
    const props = {
        id: 12,
        onClick: jest.fn(),
        isChecked: true ,
        figure: null,
    }
    it('Should match snapshot', () => {
        const component = shallow(<SingleSellNine {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleSellNine', () => {
        const component = mount(<SingleSellNine {...props}/>);
        expect(component.find('styled__StSingleSellNine')).toHaveLength(1);
    });
    it('should not render CrossAndZero', () => {
        const component = mountSmart(<SingleSellNine {...props}/>);
        expect(component.find('CrossAndZero')).toHaveLength(0);
    });
    it('should render CrossAndZero', () => {
        const props = {
            id: 12,
            onClick: jest.fn(),
            isChecked: true, 
            figure: 'X',
        }
            const component = mountSmart(<SingleSellNine {...props} />, store);
        expect(component.find('CrossAndZero')).toHaveLength(1);
    });
    it('should click on the button', () => {
        const component = mountSmart(<SingleSellNine {...props} />);
        component.find('styled__StSingleSellNine').props().onClick();
        expect(props.onClick).toHaveBeenCalled();
    });
});
