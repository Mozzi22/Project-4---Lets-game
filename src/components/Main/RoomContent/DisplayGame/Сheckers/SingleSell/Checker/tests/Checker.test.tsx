import React from 'react';
import { shallowSmart, mountSmart } from 'src/helpers/tests/testHelper';
import Checker from '../Checker';

describe('Checkers', () => {
    const props = {
        colors: 'black',
        setCurrentChecker: jest.fn(),
        position: 6,
        isChecked: true,
    }
    it('Should match snapshot', () => {
        const component = shallowSmart(<Checker {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StCheckers', () => {
        const component = mountSmart(<Checker {...props}/>);
        expect(component.find('styled__StChecker')).toHaveLength(1);
    });
      it('should click on the button', () => {
          const component = mountSmart(<Checker {...props} />);
          component.find('styled__StChecker').props().onClick();
          expect(props.setCurrentChecker).toHaveBeenCalled();
    });
});