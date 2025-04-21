import './App.css'
import Todo from './Todo'

function App() {


  return (
    <>
      <h1>React Fundamentals</h1>
      <Person name="Ada Lovelace" age="24" job="Web developer"></Person>
      <Person name="Cathy Wickerman" age="47" job="Data Scientist"></Person>
      <Student></Student>
      <Student></Student>
      <Players name="Christiano Ronaldo" worth="500million"></Players>
      <Players></Players>
      <Players></Players>
      <h2>To do List</h2>
      <Todo task="Clean Table" status={true}></Todo>
      <Todo task="Read Book" status={false}></Todo>
      <Todo task="Wash Car" status={true}></Todo>

    </>
  )
}

//1.Using css from external css stylesheet
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

// 2.Using CSS from an object variable
function Student() {
  const studentStyle = {
    border: "3px dashed green", borderRadius: "20px"
  }
  return (
    <div style={studentStyle}>
      <h2>Subject: </h2>
      <p>No. of Students: </p>
    </div>
  )
}

// 3.Using CSS directly in the style attribute of the JSX element
function Players({ name, worth }) {
  return (
    <div style={{
      textAlign: "center", color: "yellow", border: "3px dotted red", marginTop: "10px"
    }}>
      <h3>Name of Player: {name}</h3>
      <h3>Worth: {worth}</h3>
      <p>Best Quality</p>
    </div>
  )
}


export default App