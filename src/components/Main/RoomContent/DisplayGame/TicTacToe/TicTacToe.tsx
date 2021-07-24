import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = ({ ticTacToe }) => {
    console.log(ticTacToe)
    return (
        <StTicTacToe>
            {ticTacToe.map(item =>
                <SingleSellNine
                    id={item.position}
                    key={item.position}
                    isChecked={item.isChecked}
                    figure={item.figure}
                />
            )}
        </StTicTacToe>
    );
};

export default TicTacToe;
