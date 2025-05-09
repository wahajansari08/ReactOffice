import {useState, useEffect} from 'react'
import './styles.css'

function AnalogClock(){
    const [time, setTime] = useState(new Date())
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>clearInterval(timer)
    },[])
    const second = time.getSeconds()
    const mints = time.getMinutes()
    const hour = time.getHours()

    const HandleSecondStyle = {
        transform: `rotate(${second*6}deg)`
    }
    const HandleMinuteStyle = {
        transform: `rotate(${mints*6 + (second * 6) / 60}deg)`
    }
    const HandleHourStyle = {
        transform: `rotate(${(hour%12)*30+mints*0.5 }30deg)`
    }

    return(<>
    <div className="clock-container">
        <h2>Analog Clock</h2>
        <div className="clock">
            <div className="hand hour-hand" style={HandleHourStyle}></div>
            <div className="hand mints-hand" style={HandleMinuteStyle}></div>
            <div className="hand sec-hand" style={HandleSecondStyle}></div>
        </div>
    </div>
    </>)
}

export default AnalogClock