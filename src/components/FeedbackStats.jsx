import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating
    },0)/feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div className="container">
        <h5>{feedback.length} Reviews</h5>
        <h5>Average Rating: {isNaN(average)?0:average}</h5>
    </div>
  )
}

export default FeedbackStats