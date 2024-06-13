const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
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
      }
    ]
  }

  return (
    <div>
      <Header Course={course} />
      <Content Course={course} />
      <Total Course={course} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.Part} {props.Exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.Course.parts[0].exercises + props.Course.parts[1].exercises + props.Course.parts[2].exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part Part={props.Course.parts[0].name} Exercises={props.Course.parts[0].exercises} />
      <Part Part={props.Course.parts[1].name} Exercises={props.Course.parts[1].exercises} />
      <Part Part={props.Course.parts[2].name} Exercises={props.Course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.Course.name}</h1>
    </div>
  )
}

export default App