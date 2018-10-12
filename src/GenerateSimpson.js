import React from 'react';

const GenerateSimpson = ({selectQuote}) => {
    return(
    <div className = "GenerateSimpson">
        <button onClick={selectQuote}>Get Simpson</button>
    </div> )
}

export default GenerateSimpson;