import { useState } from "react"



function Crud(){

    const [tasks, setTask] = useState([])
    const [taskInput, setTaskInput] = useState("")

    const handleAddTask= ()=>{
        if(taskInput.trim() !== ""){
            setTask([...tasks, taskInput])
            setTaskInput('')
        }
    } 
    const handleDeleteTask=(index)=>{
        const updateTasks = tasks.filter((_, i)=>i !== index)
        setTask(updateTasks)
    }
    const handleUpdateTask=(index)=>{
        const updatedTask = prompt("Enter new task ", tasks[index])
        if(updatedTask){
            const updatedTasks = tasks.map((task, i)=>
            i === index ? updatedTask :  task
        )
        setTask(updatedTasks)
        }
    }

    return(<>
    <div>
    <h1>CRUD App</h1>
    <input type="text" placeholder="Enter your task" 
           value={taskInput}
           onChange={(e)=> setTaskInput(e.target.value)}
    />
    <button onClick={handleAddTask}>Add Task</button>
        <ul>
            {
                tasks.map((task, index)=>(
                    <>
                        <li key={index}>{task}
                            <button onClick={()=>handleDeleteTask(index)}>Delete</button>
                            <button onClick={()=>handleUpdateTask(index)}>Update</button>
                        </li>
                    </>
                ))
            }
        </ul>
    </div>
    </>)
}
export default Crud