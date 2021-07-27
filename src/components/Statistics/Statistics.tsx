import React, { useEffect } from 'react';

const Statistics = ({ getStatistics, statistics }) => {
useEffect(() => {
    getStatistics();
    
}, []);
    console.log(getStatistics());
    return (
        <div>
             {statistics.map((el) => (
            <p id={el.login} key={el.login} />
        ))}
        <div>GHJGHJHGHJHG</div>
        </div>
    );
};

export default Statistics;

// {statistics.length > 0 ? statistics.map((el) => (
//             <p id={el.login} key={el.login} {...el}></p>)) : null}