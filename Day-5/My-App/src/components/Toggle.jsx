import React,{useState} from 'react'

const Toggle = () => {
    const handleClick = () => {
    setHeading((prev) => !prev);
  }

  const [heading , setHeading] = useState(false);

  return (
    <>
      <h2>{heading ? "BTN Clicked":"BTN Not Clicked"}</h2>
      <button onClick={ handleClick }>
        Click Me
      </button>
    </>
  )
}

export default Toggle
