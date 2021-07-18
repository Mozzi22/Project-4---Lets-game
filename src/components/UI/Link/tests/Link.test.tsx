import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link';

describe('Link', () => {
    let props;
    beforeEach(() => {
        props = {
            id: 'id',
            onClick: jest.fn(),
            title: 'Link',
            name: 'name',
            type: 'Button',
            value: 'value',
            isDisabled: 'false',
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Link {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StLink', () => {
        const component = shallow(<Link {...props}/>);
        expect(component.find('styled__StLink')).toHaveLength(1);
    });
    it('should call onClick', () => {
        const component = shallow(<Link {...props}/>);
        component.find('styled__StLink').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});
