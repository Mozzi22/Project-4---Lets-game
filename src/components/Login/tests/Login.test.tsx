import React from 'react';
import { shallowSmart, mountSmart } from 'src/helpers/tests/testHelper';
import Login from '../Login';
import 'src/i18n';

describe('Login', () => {
    let props;
    const sendLoginRequest = jest.fn();
    const setLoginValue = jest.fn();
    const fields = {
        login: '',
        password: '',
        success: null,
    };
    beforeEach(() => {
        props = {
            setLoginValue,
            sendLoginRequest,
            fields,
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<Login {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = mountSmart(<Login {...props} />);
        expect(component.find('p')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = mountSmart(<Login {...props} />);
        expect(component.find('Input')).toHaveLength(2);
    });
    it('should render button', () => {
        const component = mountSmart(<Login {...props} />);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should click on the button', () => {
        const component = mountSmart(<Login {...props} />);
        component.find('Button').simulate('click');
        expect(sendLoginRequest).toHaveBeenCalled();
    });
    it('should click change input', () => {
        const component = mountSmart(<Login {...props} />);
        component.find('input').first().simulate('change', { target: { name: 'login', value: 'loginValue' } });
        expect(setLoginValue).toHaveBeenCalledWith({ name: 'login', value: 'loginValue' });
    });
    it('should redirect', () => {
        props.fields = {
            success: true,
        };
        const component = mountSmart(<Login {...props} />);
        expect(component.find('Redirect')).toHaveLength(1);
    });
});
