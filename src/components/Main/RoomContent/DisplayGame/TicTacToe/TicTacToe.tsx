import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = ({ ticTacToe, do_step }) => {
    console.log(ticTacToe)
    return (
        <StTicTacToe>
            {ticTacToe.map(item =>
                <SingleSellNine
                    id={item.position}
                    key={item.position}
                    isChecked={item.isChecked}
                    figure={item.figure}
                    onClick={do_step}
                />
            )}
        </StTicTacToe>
    );
};

export default TicTacToe;
