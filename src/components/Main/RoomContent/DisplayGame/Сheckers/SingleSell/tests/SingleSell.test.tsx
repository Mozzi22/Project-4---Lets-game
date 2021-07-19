import React from 'react';
import SingleSell from '../SingleSell';
import { mount, shallow } from 'enzyme';

describe('SingleSell', () => {
    const props = {
        id: ''
    }
    it('Should match snapshot', () => {
        const component = shallow(<SingleSell {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleSell', () => {
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
    });
});