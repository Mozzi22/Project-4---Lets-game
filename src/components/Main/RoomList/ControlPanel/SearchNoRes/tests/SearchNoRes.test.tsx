import React from 'react';
import SearchNoRes from '../SearchNoRes';
import { mount, shallow } from 'enzyme';

describe('SearchNoRes', () => {
    it('Should match snapshot', () => {
        const component = shallow(<SearchNoRes/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StNoResWrapper', () => {
        const component = mount(<SearchNoRes/>);
        expect(component.find('styled__StNoResWrapper')).toHaveLength(1);
    });
 it('should render StNoResTitle', () => {
        const component = mount(<SearchNoRes/>);
        expect(component.find('styled__StNoResTitle')).toHaveLength(1);
    });
    it('should render StNoResText', () => {
        const component = mount(<SearchNoRes/>);
        expect(component.find('styled__StNoResText')).toHaveLength(1);
    });
});