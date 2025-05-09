import { useState } from "react"

function EditTodo(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTodo, setEditedTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;
        setTodos([...todos, newTodo])
        setNewTodo('');
    }

    const handleDeletetodo = (indexToDelete) => {
        const updatedTodos = todos.filter((_, index)=> index !== indexToDelete);
        setTodos(updatedTodos);
    }

    const handleEditTodo = (indexToEdit) => {
        setEditingIndex(indexToEdit);
        setEditedTodo(todos[indexToEdit])
    }

    const handleSaveEdit = () => {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = editedTodo;
        setTodos(updatedTodos)
        setEditingIndex(null);
        setEditedTodo('');
    }
    return(
    <div style={{padding:'2rem'}}>
        <h1>Todo List</h1>
        <input
        type="text"
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        placeholder="Enter a new task"
        />
        <button onClick={handleAddTodo} style={{marginLeft:'0.5rem'}}>Add</button>

        <ul style={{marginTop:'1rem'}}>
            {todos.map((todo, index) => (
                <li key={index} style ={{marginBottom:'0.5rem'}}>
                    {editingIndex === index ? (
                        <div>
                            <input
                            type="text"
                            value={editedTodo}
                            onChange={(e)=> setEditedTodo(e.target.value)}
                            />
                            <button onClick={handleSaveEdit} style={{marginLeft:'0.5rem'}}>Save</button>
                        </div>
                    ) : (
                        <span>{todo}</span>
                    )}
                    <button
                    onClick={()=>handleDeletetodo(index)}
                    style={{marginLeft:'1rem'}}
                    >Delete</button>
                    <button
                    onClick={()=> handleEditTodo(index)}
                    style={{marginLeft:'0.5rem'}}
                    >Edit</button>
                </li>
            )
            )}
        </ul>

    </div>
    )
}
export default EditTodo