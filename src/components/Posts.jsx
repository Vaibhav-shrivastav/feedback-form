import React from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'

function Posts() {
    const status = 200;
    const navigate = useNavigate();

    const onClick = () =>{
        console.log("Hello");
        navigate('/about');
    }
    if(status === 404){
        return <Navigate to='/notfound'/>
    }
  return (
    <div className='container'>
        <h1>Post</h1>
        <button className="btn btn-warning" onClick={onClick}>Click</button>
        <Routes>
            <Route path = '/show' element = {<h1>Hello World</h1>}/>
        </Routes>
    </div>
  )
}

export default Posts