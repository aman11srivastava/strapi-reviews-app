import React from 'react'
import { Link } from 'react-router-dom'
// import useFetch from '../hooks/useFetch'
import LoadingScreen from '../components/LoadingScreen'
import ErrorScreen from '../components/ErrorScreen'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
    query GetReviews {
        reviews {
            title
            content
            id
            rating
        }
    }
`

const HomePage = () => {
    // const {data, error, loading} = useFetch('http://localhost:1337/reviews')
    const { loading, error, data } = useQuery(REVIEWS)

    if(loading) return <LoadingScreen/>
    if(error) return <ErrorScreen/>

    return (
        <div>
            {
                data?.reviews?.map((review) => (
                    <div className="review-card" key={review?.id}>
                        <div className="rating">{review?.rating}</div>
                        <h2>{review?.title}</h2>
                        <small>Console list</small>
                        <p>{review?.content.substring(0, 200)}...</p>
                        <Link to={`/details/${review?.id}`}>Read More</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default HomePage
