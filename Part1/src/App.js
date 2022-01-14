import React, { useState } from "react";

//Anecdote Component
const Anec = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const countAdd = () => props.setCount(Math.round(Math.random() * 6))
  return(
    <div>
      <p>Anecdote: {anecdotes[props.count]}</p>
      <button onClick={countAdd}>next anecdote</button>
    </div>
  ) 
}
//Button Component
const Button = ({handleClick, text}) => {
  return( 
    <button onClick={handleClick}>{text}</button>
  )
}
//Works with Statistics to display good, nuetral, and bad
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
      <table>
        <tbody>
        <tr>
          <td>
            <StatisticLine text="good " />
            <StatisticLine text='neutral '/>
            <StatisticLine text='bad '/>
            <StatisticLine text='total '/>
            <StatisticLine text="average" />
            <StatisticLine text='positive '/>
          </td>
          <td>
            <StatisticLine value={props.good}/>
            <StatisticLine value={props.neutral}/>
            <StatisticLine value={props.bad}/>
            <StatisticLine value={props.total}/>
            <StatisticLine value={props.average}/>
            <StatisticLine value={props.positive}/>
          </td>
        </tr>
        </tbody>
      </table>
    )
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}


const App = (props) => {
  //Give Feedback statistics
  const [good, setGood] = useState(0)    
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //statstics functions
  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}
  //privatice anecdote
  const [count, setCount] = useState(0)
  //Vote points hold state

  const [points, setPoints] = useState([])
  


  //const pointsCopy = new Uint8Array(6)
  console.log(count)
  const handlePoints = () => {setPoints(points[count] += 1)}
  console.log(points)
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <hr/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral}
      bad={bad} total={good + neutral + bad}
      average={(good - bad) / (good + neutral + bad)}
      positive={(good / (good + neutral + bad))* 100 + '%'}/>
      <Anec count={count} setCount={setCount}/>

      <Button handleClick={handlePoints} text='vote'/>

    </div>
  )
}

export default App;
