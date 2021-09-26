
import React from 'react';
import './intotal.css';
const Intotal = (props) => {
    const { summary } = props;
    let total = 0;
    for (const sum of summary) {
        total = total + sum.salary;
    }

    return (
        <div>
            <h2>Add To Cart : Summary </h2>
            <h3>Total Added: {props.summary.length} </h3>
            <h3>Total : {total}</h3>
            <h4>Added Company List Name:</h4>
            {
                summary.map(sum => <p key={total + Math.random()}>{sum.Name}</p>)
            }
        </div>
    );
};

export default Intotal;