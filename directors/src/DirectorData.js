import React from 'react';

const DirectorData = (props) => {
    return (
        <div>
            <img src={props.image}></img>
            <p>{props.bio}</p>
        </div>
    )
};

export default DirectorData;