import React from 'react';
// Remember to add back in alt for image before deploying
const DirectorData = (props) => {
    return (
        <div>
            <img src={props.image}></img>
            <p>{props.bio}</p>
        </div>
    )
};

export default DirectorData;