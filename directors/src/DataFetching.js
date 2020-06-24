import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DirectorData from './DirectorData';

const DataFetching = (props) => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});
    const [bio, setBio] = useState("");
    const [photo, setPhoto] = useState("");


    async function fetchData() {
        const res = await fetch(`https://api.themoviedb.org/3/person/${props.id}?api_key=c4da3b1a9df6fc0121e72f785daa41a8&language=en-US`);
        res
            .json()
            .then(res => setData(res))
            // .then(setData(JSON.stringify(res)))
            .catch(err => setErrors(err), console.log(hasError))
    }

    useEffect(() => {
        fetchData()
    }, []);

    function showDirectorData() {
        setBio(data.biography)
        setPhoto(props.img)
        console.log("photo", photo)
    }

    function hideDirectorData() {
        setBio("")
        setPhoto("")
    }

    return (
        <div>
            <Button onMouseEnter={showDirectorData} onMouseLeave={hideDirectorData}> {data.name} /</Button>
            <DirectorData bio={bio} image={photo} />
        </div>
    );
};

export default DataFetching;