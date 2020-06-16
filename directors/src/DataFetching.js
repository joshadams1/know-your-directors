import React, { useState, useEffect } from 'react';

const DataFetching = () => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});

    async function fetchData() {
        const res = await fetch(`https://api.themoviedb.org/3/person/21684?api_key=c4da3b1a9df6fc0121e72f785daa41a8&language=en-US`);
        res
            .json()
            .then(res => setData(res))
            // .then(setData(JSON.stringify(res)))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>{data.biography}</h1>
        </div>
    );
};

export default DataFetching;