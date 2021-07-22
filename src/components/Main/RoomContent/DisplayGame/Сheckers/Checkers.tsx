import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';
const Checkers = () => {
    const items = React.useMemo(() =>
        Array.from({ length: 64 }, (_, i) => {
            let color = null
            let isChecked = null
            if (i >= 41 && i <= 64) {
                color = "black"
                if (parseInt((i / 8) + i) % 2 === 0) {
                    isChecked = true
                }
            } else if (i >= 1 && i <= 23) {
                color = "white"
                if (parseInt((i / 8) + i) % 2 !== 0) {
                    isChecked = true
                }
            }
            return { position: 63 - i, isChecked, color }
        }), [])
    console.log(items);
    
    return (
        <StCheckers>
            {items.map(item => <SingleSell id={item.position} key={item.position} isChecked={item.isChecked}/>)}
        </StCheckers>
    );
};