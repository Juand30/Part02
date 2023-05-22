import React, { useState } from 'react'
import "./index.css"


const Total = ({clicks})=>{
  console.log({clicks})
  return <p>Total: {clicks}</p>
}

const WarningNotUsed = () =>{
  return <h2>No stats available yet</h2>
}

const Exercise1 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)


  const handleClickGood = (e) => {
    console.log(e);
    setGood(good + 1);
    setClicks(clicks + 1);
  };
  
  const handleClickNeutral = (e) => {
    console.log(e);
    setNeutral(neutral + 1);
    setClicks(clicks + 1);

  };

  const handleClickBad = (e) => {
    console.log(e);
    setBad(bad + 1);
    setClicks(clicks + 1);
  };
  

  return (
    <div> 
      <h1>Give Feedback</h1>
      <div className='button-container'>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      </div>
      <h1>Statics</h1>
      {clicks >= 1 && <p>Good: {good}</p>}
      {clicks >= 1 && <p>Neutral: {neutral}</p>}
      {clicks >= 1 && <p>Bad: {bad}</p>}
      {clicks === 0 ? (
            <WarningNotUsed />
        ) : (
            <Total clicks={clicks} />
        )}
    </div>
  )
}

export default Exercise1;
