import React, { useMemo } from 'react';
import { StTicTacToe } from './styled';
import SingleSellNine from './SingleSellNine';

const TicTacToe = ({ ticTacToe, do_step }) => {
    console.log(ticTacToe)
      const renderSquares = useMemo(() => {
    return ticTacToe.map((item) => (
      <SingleSellNine
        key={new Date().getDate()}
        id={item.position}
        figure={item.figure}
        isChecked={item.isChecked}
        onClick={do_step}
      />
    ));
  },[ticTacToe]);
    return (
        <StTicTacToe>
            {renderSquares}
        </StTicTacToe>
    );
};

export default TicTacToe;
