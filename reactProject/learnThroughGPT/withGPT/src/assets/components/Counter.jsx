import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)
      const [darkMode, setDarkMode] = useState(false)
    
      const toggleDarkMode =()=>setDarkMode(!darkMode);
      
      const appStyles ={
        backgroundColor: darkMode ? '#222' : '#f4f4f4',
        color: darkMode ? "#fff" : '#000',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'Center',
      }
    
      return (
        <>
          <div style={appStyles}>
            <h1>React Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Increase</button>
            <button onClick={()=>{setCount(count-1)}} 
                    disabled={count===0} 
                    style={{marginLeft:'0.5rem'}}>
                      Decrease
            </button>
            <button onClick={()=>{setCount(0)}}
              disabled={count===0} 
              style={{marginLeft:'0.5rem'}}>
                Reset
            </button>
    
            <div style={{marginTop:'2rem'}}>
              <button onClick={toggleDarkMode}>
                Toggle {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
          </div>
        </>)
}
export default Counter
