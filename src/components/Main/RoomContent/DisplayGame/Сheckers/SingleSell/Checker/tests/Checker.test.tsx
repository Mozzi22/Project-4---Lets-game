import React from 'react';
import Checker from '../Checker';
import { mount, shallow } from 'enzyme';

describe('Checkers', () => {
    const props = {
        colors: ''
    }
    it('Should match snapshot', () => {
        const component = shallow(<Checker {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StCheckers', () => {
        const component = mount(<Checker {...props}/>);
        expect(component.find('styled__StChecker')).toHaveLength(1);
    });
});