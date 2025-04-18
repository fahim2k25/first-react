import './App.css'

function App() {


  return (
    <>
      <h1>React Fundamentals</h1>
      <Person></Person>
      <Person></Person>
    </>
  )
}

function Person() {

  return (
    <>
      <h3>Person Details</h3>
      <ul>
        <li>Name: </li>
        <li>Age: </li>
        <li>Profession: </li>
      </ul>
    </>
  )
}

export default App
