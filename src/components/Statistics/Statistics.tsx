import React, { useEffect } from 'react';

const Statistics = ({ getStatistics, statistics, userLogin }) => {
useEffect(() => {
    getStatistics();
}, []);
    return (
        <div>
            {
                statistics.length > 0
                        ? statistics.map((game) => (
                            <div
                                key={game.userLogin}
                                winnerLogin={game.winnerLogin}
                                guestLogin={game.guestLogin}
                            />
                    ))
                    : '-'
                }
        </div>
    )
};

export default Statistics;

// {statistics.length > 0 ? statistics.map((el) => (
//             <p id={el.login} key={el.login} {...el}></p>)) : null}