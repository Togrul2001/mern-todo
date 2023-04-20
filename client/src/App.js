import { useEffect, useRef, useState } from 'react';
import axios from "axios"
function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  // const [checked, setChecked] = useState(false)
  useEffect(()=>{
    const getTodos = async () => {
      const res = await axios.get('http://localhost:3001/todos')
      setTodos(res.data)
    }
    getTodos()
  },[])
  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }
  const handleFormSubmit = (e) =>{
    e.preventDefault()
    const oldTodoArr = todos
    axios.post("http://localhost:3001/todos/new", {
      title:todo
    })
    .then((response) => {
      setTodos([...oldTodoArr, response.data])
    });
    
  }

  const completeTodo = (id) =>{
    const todo = todos.find(todo=>todo._id === id)
    const res = axios.put(`http://localhost:3001/todos/edit/${id}`, {
      ...todo,
      complete:!todo.complete
    })
    .then(ress=>{
      const filteredTodos = todos.filter(todo=>todo._id !== id)
      setTodos([ress.data,...filteredTodos])
     })
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/delete/${id}`)
    .then(res=>{
      const filteredTodos = todos.filter(todo=>todo._id!==id)
      setTodos(filteredTodos)
    })
  }
  return (
    <>
      <div style={{width:"300px", display:"flex", alignItems:"center", flexDirection:"column", marginLeft:"40%"}}>
        <h2>Todo App</h2>
        <div style={{width:"270px", display:"flex", justifyContent:"space-between", marginBottom:"10px"}}>
          <form action="" onSubmit={handleFormSubmit}>
            <input onChange={handleInputChange} type="text" style={{padding:"5px", width:"200px"}}/>
            <button type='submit' style={{marginLeft:"10px", width:"30px", fontSize:"20px", backgroundColor:"#8d49e7", border:"none", cursor:"pointer"}}>+</button>
          </form>
          
        </div>

        <div>
          {todos.map(todo=>(
            <div key={todo._id} style={{width:"250px", margin:"5px", backgroundColor:"#f2f2f2", padding:"10px", display:"flex", justifyContent:"space-between"}}>
              <input type="checkbox" name="" id="" checked={todo.complete} onChange={() => completeTodo(todo._id)}/>
              <p key={todo.id} style={{margin:"0", textDecorationLine: todo.complete ? 'line-through': 'none'}}>{todo.title}</p>
              <button type='button' style={{height:"25px"}} onClick={() => deleteTodo(todo._id)}>x</button>
            </div>
          ))}
        </div>
        
      </div>

    </>
  );
}

export default App;
