import React, { useState, useEffect } from 'react';

const DataFetching = (props) => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState();
    const id = [7467, 78160, 136495, 137427, 21684];
    const newId = [];

    async function fetchData() {
        /* CORS error results from the request. Plugin added to temporarily fix it in local enviornment. 
        See this to fix it when ready to deploy ---> https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9 */
        const res = await fetch(`https://api.themoviedb.org/3/person/21684?api_key=c4da3b1a9df6fc0121e72f785daa41a8&language=en-US`);
        res
            .json()
            .then(res => setData(res.biography))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        < div >
            <h1>{id.map(ids => fetchData(ids))}</h1>
        </div >
    );
};

export default DataFetching;