import React, { useState, useEffect } from 'react';
import DirectorData from './DirectorData';
import directors from './directors';

const DataFetching = (props) => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});
    const [name, setName] = useState("");


    async function fetchData() {
        const res = await fetch(`https://api.themoviedb.org/3/person/${props.id}?api_key=c4da3b1a9df6fc0121e72f785daa41a8&language=en-US`);
        res
            .json()
            .then(res => setData(res))
            // .then(setData(JSON.stringify(res)))
            .catch(err => setErrors(err), console.log(hasError))
    }

    useEffect(() => {
        fetchData();
    }, []);

    function showName() {
        setName(data.name)
    }

    function hideName() {
        setName("")
    }


    return (
        <div>
            <h1 onMouseEnter={showName} onMouseLeave={hideName}>Name: {name}</h1>
            <img src={props.image}></img>
        </div>
    );
};

export default DataFetching;