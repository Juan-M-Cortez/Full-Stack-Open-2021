import React, { useState } from "react";

const Statistics =(props) => {
  //Just Add
  //Just Display
  return(
    <div>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
} 




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)    
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p>good TESTING: {good}{console.log(good)}</p>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}




export default App;