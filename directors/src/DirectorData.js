import React from 'react';
import { checkPropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';

const DirectorData = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>{props.bio}</p>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    )
};

export default DirectorData;