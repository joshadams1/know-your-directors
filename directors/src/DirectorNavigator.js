import React, { useState } from 'react';
import directors from './directors';
import DataFetching from './DataFetching';
import DirectorImage from './DirectorImage';
import DirectorBio from './DirectorBio';
import Tabs from '@material-ui/core/Tabs';
import CrossfadeImage from 'react-crossfade-image';

const DirectorNavigator = () => {
    const [photo, setPhoto] = useState("");
    const [bio, setBio] = useState(directors[0].initialBio);
    const [alt, setAlt] = useState("");
    const [value, setValue] = useState(0);

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
            <div className="director-image">
                <CrossfadeImage src={photo} duration={500} bottomSrc={photo} />
            </div>
            <DirectorBio bio={bio} />
        </div>
    )
}

export default DirectorNavigator;