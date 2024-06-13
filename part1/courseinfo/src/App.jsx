const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.Name}, you are {props.Age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'João'
  const age = 24
  return(
    <div>
      <h1>Greetings</h1>
      <Hello Name={name} Age={age}/>
      <Hello Name='Xica' Age={age - 1}/>
    </div>
  )
}

export default App