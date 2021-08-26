import {useEffect, useState} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try{
            const json = await axios.get(url);
            setData(json);
            setLoading(false);
        }catch(err){
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return {loading, error, data}
}

export default useFetch