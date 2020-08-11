import React, { useState, useEffect } from 'react';
import Tab from '@material-ui/core/Tab';

const DataFetching = (props) => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});


    async function fetchData() {
        const res = await fetch(`https://api.themoviedb.org/3/person/${props.id}?api_key=c4da3b1a9df6fc0121e72f785daa41a8&language=en-US`);
        res
            .json()
            .then(res => setData(res))
            .catch(err => setErrors(err), console.log(hasError))
    }

    useEffect(() => {
        fetchData()
    }, []);

    function showDirectorData() {
        props.setBio(data.biography)
        props.setPhoto(props.img)
        props.setAlt(props.alt)
    }

    function hideDirectorData() {
        props.setBio("")
        props.setAlt("")
        props.setPhoto("")
    }

    return (
        <div>
            {/* <h1 onMouseEnter={showDirectorData} onMouseLeave={hideDirectorData}> {data.name} <span className="padding">/</span></h1> */}
            <Tab
                indicatorColor="primary"
                label={data.name}
                onMouseEnter={showDirectorData}
                onMouseLeave={hideDirectorData}
            >Test</Tab>
        </div>
    );
};

export default DataFetching;