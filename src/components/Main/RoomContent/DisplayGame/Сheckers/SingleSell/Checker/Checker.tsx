import React from 'react';
import { StChecker } from './styled'
interface IProps {
    color: string
}

const Checker: React.FC<IProps> = ({ color }) => {
    const onCheckerClick = () => {
        
    }
    console.log(color)
    return (
        <StChecker
            bgColors={color === 'black'
                ? 'black'
                : 'white'}
            onClick ={onCheckerClick}
        >
        </StChecker>
    );
};

export default Checker;
