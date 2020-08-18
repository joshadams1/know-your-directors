import React from 'react';

const DirectorImage = (props) => {
    return (
        <div className="director-image">
            <img className="image" src={props.url} alt={props.alternateText}></img>
        </div>
    )
}

export default DirectorImage;