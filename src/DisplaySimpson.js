import React from 'react';

const DisplaySimpson = ({simpson}) => {
    return (
        <div className = "displaySimpson">
            <img src = {simpson.image} alt="simpson-img"/>
            <ul>
                <li>Quote: {simpson.quote}</li>
                <li>Character: {simpson.character}</li>
            </ul>
        </div>
    )
}

export default DisplaySimpson;