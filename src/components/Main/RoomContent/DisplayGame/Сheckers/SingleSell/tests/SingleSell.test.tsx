import React from 'react';
import SingleSell from '../SingleSell';
import { mount, shallow } from 'enzyme';

describe('SingleSell', () => {
        let props;
    beforeEach(() => {
        props = {
            id: 1,
            status: { checker: null, blackSquare: false },
            getPosibleStep: jest.fn(),
            position: null,
            doCheckerStep: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<SingleSell {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should render StSingleSell with blackPic', () => {
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
        expect(component.find('styled__StSingleSell').props().color).toBe('white');
    });
    it('Should render StSingleSell with white', () => {
        props.status.blackSquare = true;
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StSingleSell')).toHaveLength(1);
        expect(component.find('styled__StSingleSell').props().color).toBe('grey');
    });
    it('Should render StPossition', () => {
        props.position = true;
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('styled__StPossition')).toHaveLength(1);
    });
    it('Should render CheckerB', () => {
        props.status.checker = { blackChecker: true };
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('CheckerB')).toHaveLength(0);
    });
    it('Should render Checker', () => {
        props.status.checker = { blackChecker: false };
        const component = mount(<SingleSell {...props}/>);
        expect(component.find('Checker')).toHaveLength(0);
    });
    it('Should call getPosibleStep', () => {
        props.status.checker = { blackChecker: false };
        const component = mount(<SingleSell {...props}/>);
        (component.find('styled__StSingleSell').props().onClick({ target: { id: 1 } }));
        expect(props.getPosibleStep).toHaveBeenCalled();
    });
    it('Should call doCheckerStep', () => {
        props.position = true;
        const component = mount(<SingleSell {...props}/>);
        (component.find('styled__StSingleSell').props().onClick({ target: { id: 1 } }));
        expect(props.doCheckerStep).toHaveBeenCalledWith(props.id);
    });
});
