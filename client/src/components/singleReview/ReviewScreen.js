import React from 'react'
import { useParams } from 'react-router'

const ReviewScreen = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h1>Individual Review</h1>
        </div>
    )
}

export default ReviewScreen
