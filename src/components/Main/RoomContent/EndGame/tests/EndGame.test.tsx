import React from 'react';
import { shallow, mount } from 'enzyme';
import EndGame from '../EndGame';

describe('EndGame', () => {
    let props;
    beforeEach(() => {
        props = {
            winner: 'a',
            userLogin: 'aa',
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<EndGame {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render StEndGame', () => {
        props = {
            winner: 'a',
            userLogin: 'a',
        };
        const component = mount(<EndGame {...props} />);
        expect(component.find('styled__StEndGame')).toHaveLength(1);
    });
});
