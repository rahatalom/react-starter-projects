import React,{useState} from "react"
import "../components/todo.css"

function Todo() {
  const [text,setText] = useState("")
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
      e.preventDefault()
      setText(e.target.value)
  }
  const handleClick = () => {
    setTodos([...todos,text])
    setText("")
  }
  return(
    <div className="toDoBox">
      <h1>Todo list</h1>
      <div className="todoInput">
        <input value={text} onChange={handleChange}></input>
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="todoList">
        {todos.map((todo) => {
          return(
            <h3>
              {todo}
            </h3>  
          )
        })}

      </div>
    </div>
  )
}

export default Todo