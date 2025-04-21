import "./App.css"

export default function Billis({ name, age }) {
    return (
        <div className="person-box">
            <li>Name: {name}</li>
            <li>Age: {age}</li>
        </div>
    )
}