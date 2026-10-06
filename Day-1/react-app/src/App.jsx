function Greeting(){
  return(
    <h1>This is React.</h1>
  )
}

function App(){

  const name="React Beginner";

  return(
    <>
    <h1>I am {name}</h1>
    <Greeting/>
    </>
  )
}

export default App;