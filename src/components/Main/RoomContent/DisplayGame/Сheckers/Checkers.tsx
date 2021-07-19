import React from 'react';
import { StCheckers } from './styled';
import SingleSell from './SingleSell';

const Checkers = () => {
    const items = React.useMemo(() => Array.from({length: 64}, (_, i) => 63 - i), [])
    return (
        <StCheckers>
            {items.map(item => <SingleSell id={item} key={item}/>,
            )}
        </StCheckers>
    );
};

export default Checkers;
