import React, { useState } from "react";

const Isolate = (props) => {
    return (
      <div>
        <p>{props.anec[Math.round(Math.random() * 6)]}</p>
      </div>
    )
}

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

const App = () => {
  const [selected, setSelected] = useState(0)
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)    
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [vote, setVote] = useState([])
 
  const handleGood = () => {setGood(good + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1)}
  const handleBad = () => {setBad(bad + 1)}
  const handleSelected = () => {setSelected(selected + 1)}
  const handleVote = () => {setVote(vote.concat())}
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} 
      bad={bad} total={good + neutral + bad} 
      average={(good - bad) / (good + neutral + bad)} 
      positive={(good / (good + neutral + bad))* 100 + '%'}/>

      <Isolate anec={anecdotes} select={selected}/>
      <Button handleClick={handleVote} text= 'vote'/><Button handleClick={handleSelected} text='next anecdote'/>
    </div>
  )
}

export default App;
