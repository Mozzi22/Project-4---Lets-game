import React from 'react';
import Registration from '../Registration';
import { shallowSmart, mountSmart } from '../../../helpers/testHelper';
import 'react-router-dom';
import '/src/i18n';

describe('Registration', () => {
    let props;
    const sendRegistrationRequest = jest.fn();
    const setRegistrationValue = jest.fn();
    const fields = {
        login: '',
        password: '',
        confrim: '',
        success: null,
        error: null,
    };
    beforeEach(() => {
        props = {
            setRegistrationValue,
            sendRegistrationRequest,
            fields,
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<Registration {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = mountSmart(<Registration {...props} />);
        expect(component.find('p')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = mountSmart(<Registration {...props} />);
        expect(component.find('Input')).toHaveLength(5);
    });
    it('should render button', () => {
        const component = mountSmart(<Registration {...props} />);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should click on the button', () => {
        const component = mountSmart(<Registration {...props} />);
        component.find('Button').simulate('click');
        expect(sendRegistrationRequest).toHaveBeenCalled();
    });
    it('should click change input', () => {
        const component = mountSmart(<Registration {...props} />);
        component.find('input').at(0).simulate('change', { target: { name: 'login', value: 'loginValue' } });
        expect(setRegistrationValue).toHaveBeenCalledWith({ name: 'login', value: 'loginValue' });
    });
    it('should click change input with error', () => {
        props.fields = {
            error: true,
        };
        const component = mountSmart(<Registration {...props} />);
        component.find('input').at(0).simulate('change', { target: { name: 'login', value: 'loginValue' } });
        expect(setRegistrationValue).toHaveBeenCalledWith({ name: 'login', value: 'loginValue' });
    });
    it('should redirect', () => {
        props.fields = {
            success: true,
        };
        const component = mountSmart(<Registration {...props} />);
        expect(component.find('Redirect')).toHaveLength(1);
    });
});