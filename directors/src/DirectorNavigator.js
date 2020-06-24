import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import directors from './directors';
import DataFetching from './DataFetching';

const DirectorNavigator = () => {
    return (
        <div>
            {directors.map(director =>
                <DataFetching key={director.id} id={director.directorId} img={director.img} />
            )}
        </div>
    )
}

export default DirectorNavigator;