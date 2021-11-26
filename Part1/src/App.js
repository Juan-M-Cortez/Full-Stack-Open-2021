import React from "react";

const App = () => {
  const course = {
    name: 'test Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h>{props.course}</h>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} /> 
      <Part part = {props.part2} exercises = {props.exercises2} /> 
      <Part part = {props.part3} exercises = {props.exercises3} /> 
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const Part = (props) =>{
  return (
    <div>
      <p>{props.exercises} {props.part}</p>
    </div>
  )
}



export default App;
