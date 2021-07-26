import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = ({ ticTacToe, doStepTicTacToe }) => {

    return (
        <StTicTacToe>
           {ticTacToe.map((item) =>
                <SingleSellNine
                    key={item.position}
                    id={item.position}
                    figure={item.figure}
                    isChecked={item.isChecked}
                    onClick={doStepTicTacToe}
                />
            )}
        </StTicTacToe>
    );
};

export default TicTacToe;
