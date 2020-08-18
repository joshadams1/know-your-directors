import React, { useState } from 'react';
import directors from './directors';
import DataFetching from './DataFetching';
import DirectorImage from './DirectorImage';
import DirectorBio from './DirectorBio';
import Tabs from '@material-ui/core/Tabs';

const DirectorNavigator = () => {
    const [photo, setPhoto] = useState("");
    const [bio, setBio] = useState("");
    const [alt, setAlt] = useState("");
    const [value, setValue] = useState(-1);

    return (
        <div className="display2">
            <Tabs
                value={value}
                centered
                indicatorColor="primary"
            >
                {directors.map(director =>
                    <DataFetching
                        key={director.id}
                        id={director.id}
                        directorId={director.directorId}
                        img={director.img}
                        alt={director.alt}
                        setPhoto={setPhoto}
                        setBio={setBio}
                        setAlt={setAlt}
                        setValue={setValue}
                        name={director.name}
                    />
                )}
            </Tabs>
            <DirectorImage url={photo} alternateText={alt} />
            <DirectorBio bio={bio} />
        </div>
    )
}

export default DirectorNavigator;