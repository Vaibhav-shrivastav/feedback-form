import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const addFeedback = async (newFeedback) =>{
        const response = fetch('http://localhost:5000/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
      }

    const deleteFeedback = async (id)=>{ 
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`http://localhost:5000/feedback/${id}`,{
                method: "DELETE"
            })
          setFeedback(feedback.filter((item)=> item.id !== id))
        }
       }

    useEffect(()=>{
        fetchFeedback()
    },[])

    const fetchFeedback = async() =>{
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&order=desc`)
        const data = await response.json()

        console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

    return <FeedbackContext.Provider value={{
        feedback, deleteFeedback, addFeedback, isLoading,
    }}>
            {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext