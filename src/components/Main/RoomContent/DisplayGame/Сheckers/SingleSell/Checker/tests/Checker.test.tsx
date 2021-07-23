import React from 'react';
import { shallowSmart, mountSmart } from 'src/helpers/testHelper';

import Checker from '../Checker';

describe('Checkers', () => {
    const props = {
        colors: 'black'
    }
    it('Should match snapshot', () => {
        const component = shallowSmart(<Checker {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StCheckers', () => {
        const component = mountSmart(<Checker {...props}/>);
        expect(component.find('styled__StChecker')).toHaveLength(1);
    });
});