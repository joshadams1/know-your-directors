import React, { useState } from 'react';
import directors from './directors';
import DataFetching from './DataFetching';
import DirectorImage from './DirectorImage';

const DirectorNavigator = () => {
    const [photo, setPhoto] = useState("");
    const [alt, setAlt] = useState("")

    return (
        <div className="display">
            {directors.map(director =>
                <DataFetching
                    key={director.id}
                    id={director.directorId}
                    img={director.img}
                    alt={director.alt}
                    setPhoto={setPhoto}
                    setAlt={setAlt}
                    name={director.name}
                />
            )}
            <DirectorImage url={photo} alternateText={alt} />
        </div>
    )
}

export default DirectorNavigator;