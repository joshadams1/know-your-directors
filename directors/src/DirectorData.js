import React from 'react';
import { checkPropTypes } from 'prop-types';

const DirectorData = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>{props.bio}</p>
        </div>
    )
};

export default DirectorData;