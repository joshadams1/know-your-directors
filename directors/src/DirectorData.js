import React from 'react';
import DirectorImage from './DirectorImage';

// Remember to add back in alt for image before deploying

const DirectorData = (props) => {
    return (
        <div>
            <p>{props.bio}</p>
            <DirectorImage image={props.img} />
        </div>
    )
};

export default DirectorData;