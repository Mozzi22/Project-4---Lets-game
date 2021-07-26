import React from 'react';
import CrossAndZero from '../CrossAndZero';
import { mount, shallow } from 'enzyme';

describe('CrossAndZero', () => {
    const props = {
        figure: 'X'
    }
    it('Should match snapshot', () => {
        const component = shallow(<CrossAndZero {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StSingleSellNine', () => {
        const component = mount(<CrossAndZero {...props}/>);
        expect(component.find('styled__StCrossAndZero')).toHaveLength(1);
    });
});
