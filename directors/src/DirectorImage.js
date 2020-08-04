import React from 'react';

const DirectorImage = (props) => {
    console.log(props.alternateText)
    return (
        <div>
            <img src={props.url} alt={props.alternateText}></img>
        </div>
    )
}

export default DirectorImage;