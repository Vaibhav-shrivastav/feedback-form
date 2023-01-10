import React, {useState, useContext} from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const {addFeedback} = useContext(FeedbackContext)

    function handleTextChange(e){
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
            
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)
            setText('')
        }
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <h2 className='mb-4'>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} /> <br />
                <input className='w-50 p-2' onChange={handleTextChange} value={text} type="text" placeholder='Write a review' /><br /><br />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                {message && <div className='message'>{message}</div>}
            </form>
        </div>
    )
}

export default FeedbackForm