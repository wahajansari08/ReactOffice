import {useState} from 'react';

function Todo(){
    const[todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const handleAddTodo = ()=>{
        if (newTodo.trim() === '') return;
        
        setTodos([...todos, newTodo]);
        setNewTodo('')
    }

    const handleDeleteTodo = (indexToDelete)=>{
        const updatedTodos = todos.filter((_, index) => index !== indexToDelete)
        setTodos(updatedTodos);
    }

    return(
    <div style={{padding:'2rem'}}>
        <h1>Todo List</h1>
        <input 
        type="text"
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo} style={{marginLeft:'0.5rem'}}>Add</button>
        <ul style={{marginTop:'1rem'}}>
            {todos.map((todo, index)=>(
                <li key={index} style={{marginBottom:'0.5rem'}}>{todo}
                    <button onClick={()=>handleDeleteTodo(index)} style={{marginLeft:'1rem'}}>Delete</button>
                </li>
            ))}

        </ul>
    </div>
    )
}
export default Todo