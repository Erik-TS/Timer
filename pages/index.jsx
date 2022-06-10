import {useState} from 'react'

export default function(props){
  const [interv, setInterv] = useState()
  const [btnStart, setBtnStart] = useState('Start')
  const [clock, setClock] = useState({
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    tick: () => {
      clock.milliseconds += 100
      if(clock.milliseconds === 1000){
        clock.seconds++
        clock.milliseconds = 0
        if(clock.seconds === 60){
          clock.minutes++
          clock.seconds = 0
          if(clock.minutes === 60){
            clock.reset()
            alert('One hour was completed')
          }
        }
      }
    },
    print: () => {
      let mill, sec, min
      clock.milliseconds < 10 ? mill = '00' + clock.milliseconds : mill = clock.milliseconds
      clock.seconds < 10 ? sec = '0' + clock.seconds : sec = clock.seconds
      clock.minutes < 10 ? min = '0' + clock.minutes : min = clock.minutes

      return min + ':' + sec + ':' + mill
    },
    reset: () => {
      clock.milliseconds = 0
      clock.seconds = 0
      clock.minutes = 0
    },
    run: () => {
      setInterv( setInterval( () => {
        clock.tick()
        setTimerClock(clock.print())
      }, 100) )
    }
  })
  const [timerClock, setTimerClock] = useState(clock.print())

  return(
    <div className="timer-container">
      <h1 className="timer-clock">{timerClock}</h1>
      <div className="buttons-container">
        <input className="btn-start" type="button" defaultValue={btnStart} onClick={() => {
              if(btnStart === 'Pause'){
                clearInterval(interv)
                setBtnStart('Resume')
              }
              else{
                setBtnStart('Pause')
                clock.run()
              }
          }} />
        <input className="btn-reset" type="button" defaultValue="Reset" onClick={() => {
            /*clearInterval needs to be called in the end, otherwise a new
            interval will be created*/
            clock.reset()
            setTimerClock(clock.print())
            setBtnStart('Start')
            clearInterval(interv)
          }}/>
      </div>
    </div>
  )
}
