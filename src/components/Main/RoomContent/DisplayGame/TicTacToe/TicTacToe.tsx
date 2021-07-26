import React from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = ({ ticTacToe, doStepTicTacToe }) => {
 const items = [];
    for (let i = 0; i < 9; i++) { items.push(i); }
    return (
        <StTicTacToe>
            {items.map((item) => <SingleSellNine id={item} key={item} />)}
        </StTicTacToe>
    );
    // return (
    //     <StTicTacToe>
    //        {ticTacToe.map((item) =>
    //             <SingleSellNine
    //                 key={item.position}
    //                 id={item.position}
    //                 figure={item.figure}
    //                 isChecked={item.isChecked}
    //                 onClick={doStepTicTacToe}
    //             />
    //         )}
    //     </StTicTacToe>
    // );
};

export default TicTacToe;
