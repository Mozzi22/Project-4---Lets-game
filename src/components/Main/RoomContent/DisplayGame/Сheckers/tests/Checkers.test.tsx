import React from 'react';
import Checkers from '../Checkers';
import { mount, shallow } from 'enzyme';

describe('Checkers', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Checkers />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StCheckers', () => {
        const component = mount(<Checkers/>);
        expect(component.find('styled__StCheckers')).toHaveLength(1);
    });
});