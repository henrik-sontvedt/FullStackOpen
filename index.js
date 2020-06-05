import React from 'react'
import ReactDOM from 'react-dom'


const Header = (properties) => {
  return (<h1>{properties.course}</h1>);
}

const Content = (properties) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

 return ( 
  <div>
    <Part part={part1} num={exercises1}></Part>
    <Part part={part2} num={exercises2} />
    <Part part={part3} num={exercises3} />
  </div>);
};

const Total = (properties) => {
  return (<p>Number of exercises {properties.num}</p>);
}

const Part = (properties) => (
  <p>{properties.part} {properties.num}</p>
);

const App = () => {
  let course_header = "Header";

  return (
	  <div>
	  <Header course="HEYDAWG" />x
      <Header course = {course_header}></Header>
      <Content></Content>
      <Total num={40} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
