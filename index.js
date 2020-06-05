import React from 'react'
import ReactDOM from 'react-dom'


const Header = (properties) => {
  return (<h1>{properties.course}</h1>);
}

const Content = (props) => {
 return ( 
  <div>
    <Part data={props.data_arr[0]} />
    <Part data={props.data_arr[1]} />
    <Part data={props.data_arr[2]} />
  </div>);
};

const Total = (properties) => {
  let sum = properties.num.reduce((prev, curr) => prev + curr.exercises, 0);
  return (<p>Number of exercises {sum}</p>);
}

const Part = (props) => (
  <p>{props.data.name} {props.data.exercises}</p>
);

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }];

  return (
	  <div>
      <Header course = {course}></Header>
      <Content data_arr={parts}></Content>
      <Total num={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
