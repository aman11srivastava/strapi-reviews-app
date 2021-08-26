import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
import useFetch from '../hooks/useFetch'

const ReviewDetails = () => {
    const {id} = useParams()
    const {data, error, loading} = useFetch(`http://localhost:1337/reviews/${id}`)

    if(loading) return <LoadingScreen/>
    if(error) return <ErrorScreen/>

    console.log(data.data);
    return (
        <div className="review-card" key={data?.data?.id}>
            <div className="rating">{data?.data?.rating}</div>
            <h2>{data?.data?.title}</h2>
            <small>Console list</small>
            <p>{data?.data?.content}</p>
        </div>
    )
}

export default ReviewDetails
