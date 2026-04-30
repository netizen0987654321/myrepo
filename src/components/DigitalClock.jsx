import { useState, useEffect } from 'react'
import './DigitalClock.css'

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return { hours, minutes, seconds }
  }

  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    return date.toLocaleDateString(undefined, options)
  }

  const { hours, minutes, seconds } = formatTime(time)

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="time-display">
          <span className="time-segment">{hours}</span>
          <span className="separator">:</span>
          <span className="time-segment">{minutes}</span>
          <span className="separator">:</span>
          <span className="time-segment">{seconds}</span>
        </div>
        <div className="date-display">
          {formatDate(time)}
        </div>
      </div>
    </div>
  )
}

export default DigitalClock
