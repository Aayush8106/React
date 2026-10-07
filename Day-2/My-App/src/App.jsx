import React from 'react'

function User(props){

  return(
    <>
    <h2>Below shown values are props which are comming from another component.</h2>
    <p>Name:{props.name} <br/> Age:{props.age}</p>
    </>
  )

}

const App = () => {

  const name="Aayush";
  const age=20;

  return (
    <>
    <h1>I am {name}.</h1>
    <p>My current Age is {age}.</p>
    <User name={name} age={age}/>
    </>
  )
}

export default App;
