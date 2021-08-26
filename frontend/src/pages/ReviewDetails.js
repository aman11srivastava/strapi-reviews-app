import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import ErrorScreen from '../components/ErrorScreen'
import LoadingScreen from '../components/LoadingScreen'
// import useFetch from '../hooks/useFetch'

const GET_REVIEW_BY_ID = gql`
    query GetReviewById($id: ID!) {
        review(id: $id) {
            title
            content
            id
            rating 
        }
    }
`

const ReviewDetails = () => {
    const {id} = useParams()
    // const {data, error, loading} = useFetch(`http://localhost:1337/reviews/${id}`)
    const {data, loading, error} = useQuery(GET_REVIEW_BY_ID, {
        variables: {
            id
        }
    })

    if(loading) return <LoadingScreen/>
    if(error) return <ErrorScreen/>

    return (
        <div className="review-card" key={data?.review?.id}>
            <div className="rating">{data?.review?.rating}</div>
            <h2>{data?.review?.title}</h2>
            <small>Console list</small>
            <p>{data?.review?.content}</p>
        </div>
    )
}

export default ReviewDetails
