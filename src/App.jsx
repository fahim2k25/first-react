import './App.css'

function App() {


  return (
    <>
      <h1>React Fundamentals</h1>
      <Person name="Ada Lovelace" age="24" job="Web developer"></Person>
      <Person name="Cathy Wickerman" age="47" job="Data Scientist"></Person>
    </>
  )
}

function Person({ name, age, job }) {

  return (
    <div className="person-box">
      <h3 className='title'>Person Details</h3>
      <ul >
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Profession: {job}</li>
      </ul>
    </div>
  )
}

export default App
