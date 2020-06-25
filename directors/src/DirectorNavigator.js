import React from 'react';
import directors from './directors';
import DataFetching from './DataFetching';

const DirectorNavigator = () => {
    return (
        <div>
            {directors.map(director =>
                <DataFetching key={director.id} id={director.directorId} img={director.img} alt={director.alt} />
            )}
        </div>
    )
}

export default DirectorNavigator;