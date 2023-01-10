import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={true} className="text-center ">
        <div className="content text-center bg-dark text-white my-2">
            <h6>{item.text}</h6>
            <p id="rating">Rating: {item.rating}</p>
            <button onClick={()=>deleteFeedback(item.id)}><FaTimes/></button>
        </div>
    </Card>
  )
}

export default FeedbackItem