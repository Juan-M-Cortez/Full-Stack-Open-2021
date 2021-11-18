import React from "react";

const App = () => {
  

  
  return (
    <div>

      
    </div>
  )
}

const Header = () => {
  const course = 'Half Stack application development'
  return
    <div>
      <h1>{course}</h1>
    </div>
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const excersises1 = 10
  const part2 = 'using props to pass data'
  const excersises2 = 7
  const part3 = 'State of a component'
  const excersises3 = 14
  return  (
    <div>
    <p>
      {part1} {excersises1}
    </p>
    <p>
      {part2} {excersises2}
    </p>
    <p>
      {part3} {excersises3}
    </p>
  </div>
  )
}

const Total = () => {
  const excersises1 = 10
  const excersises2 = 7
  const excersises3 = 14
  return (
    <div>
      <p> Number of excersises {excersises1 + excersises2 + excersises3}</p>
    </div>
  )
}

export default App;
