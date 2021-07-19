import React from 'react';
import SingleSellNine from '../SingleSellNine';
import { mount, shallow } from 'enzyme';

describe('SingleSellNine', () => {
    const props = {
        id: ''
    }
    it('Should match snapshot', () => {
        const component = shallow(<SingleSellNine {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleSellNine', () => {
        const component = mount(<SingleSellNine {...props}/>);
        expect(component.find('styled__StSingleSellNine')).toHaveLength(1);
    });
});
