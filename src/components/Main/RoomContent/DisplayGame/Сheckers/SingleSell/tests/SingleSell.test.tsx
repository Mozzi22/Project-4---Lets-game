import React from 'react';
import SingleSell from '../SingleSell';
import { mount, shallow } from 'enzyme';
import { shallowSmart, mountSmart } from 'src/helpers/testHelper';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({
    game: {
      currentChecker: {}
  },
});

describe('SingleSell', () => {
    const props = {
        id: '',
        position: 1,
        isChecked: false,
        color: 'red',
    }
    it('Should match snapshot', () => {
        const component = shallow(<SingleSell {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleSell', () => {
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
    });
    it('should not render Checker', () => {
        const props = {
            id: 1,
            isChecked: false, 
            color: 'red',
        }
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('Checker')).toHaveLength(0);
    });
       it('should render Checker', () => {
        const props = {
            id: 1,
            isChecked: true, 
            color: 'red',
        }
           const component = mountSmart(<SingleSell {...props} />, store);
           console.log(component.debug());
        expect(component.find('Checker')).toHaveLength(1);
    });
});
