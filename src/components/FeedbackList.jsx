import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext) 

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <div className="container text-center"><p>No Feedback yet</p></div>
    }

    return isLoading ? (<div className='container text-center'><Spinner/></div>):(
      <div>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div 
              key={item.id}
              inital = {{opacity:0}}
              animate= {{opacity:1}}
              exit= {{opacity:0}}
            >
           <FeedbackItem key ={item.id} item = {item}/>
           </motion.div>
        ))}
        </AnimatePresence>
    </div>
    )

  
}

export default FeedbackList