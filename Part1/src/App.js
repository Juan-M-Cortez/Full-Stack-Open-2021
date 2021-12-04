import React, { useState } from "react";

const Button = ({handleClick, text}) => {
  return( 
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = (Statistics) => {
  return(
    <div>
      <p>{Statistics.text} {Statistics.value}</p>
    </div>
  )
}


const Statistics =(props) => {
  const total=props.good + props.neutral + props.bad 
  //Just Display
  if(total > 0)
    return(
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='total' value={props.neutral}/>
        <StatisticLine text='average' value={props.average}/>
        <StatisticLine text='positive' value={props.positive}/>
      </div>
    )
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}
  


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)    
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} 
      average={(good - bad) / (good + neutral + bad)} positive={(good / (good + neutral + bad))* 100 + '%'}/>   
    </div>
  )
}

export default App;
