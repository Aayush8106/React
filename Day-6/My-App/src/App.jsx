import React, { useState } from 'react'
import './App.css'

const App = () => {

    const [name , setName] = useState('');
    const [submittedName , setSubmittedName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        setSubmittedName(name);
        setName('');
    }

  return (
    <>

    <div className="container mt-2">

      <h1 className='text-center'>Day 6 - React Forms</h1>
      
      <form action="#" onSubmit={handleSubmit}>
            
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="Name" className="col-form-label fs-3">Name</label><span className='fs-3'>:</span>
                </div>
                <div className="col-auto">
                    <input type="text" id="Name" placeholder='Enter your name' value={name} className="form-control" aria-describedby="Name" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
            </div>

            <div className="btn-style d-flex justify-content-center align-items-center">
                <button type='submit' className="btn btn-success">Submit</button>
            </div>

    </form>

            {submittedName && <h3>Hello, {submittedName}</h3>}

    </div>

    </>
  )
}

export default App
