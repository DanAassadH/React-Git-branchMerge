import React from 'react';

function HelloStudent (props){
    return(
        <>
        <h2> Student Unit</h2>
        <p>Hello , {props.name}</p>
        </>
    );
}

export default HelloStudent;