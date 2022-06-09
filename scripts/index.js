let interval
const btnStart = document.querySelector('.btn-start')
const timerClock = document.querySelector('.timer-clock')
let clock = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  tick: () => {
    clock.milliseconds = clock.milliseconds + 100
    if(clock.milliseconds === 1000){
      if(clock.seconds === 59 && clock.minutes === 59){
        clock.reset()
        alert('1 hour was completed.')
      }
      clock.seconds++
      clock.milliseconds = 0
    }
    if(clock.seconds === 60){
      clock.minutes++
      clock.seconds = 0
    }
  },
  reset: () => {
    clock.milliseconds = 0
    clock.seconds = 0
    clock.minutes = 0
    clearInterval(interval)
    timerClock.innerText = handleTimer(clock.minutes, clock.seconds, clock.milliseconds)
    btnStart.value = 'Start'
  },
  pause: () => clearInterval(interval),
  run: () => {
    interval = setInterval( () => {
      clock.tick()
      timerClock.innerText = handleTimer(clock.minutes, clock.seconds, clock.milliseconds)
    }, 100)
  }
}

document.querySelector('.btn-start').onclick = () => {
  if(btnStart.value === 'Pause'){
    clock.pause()
    btnStart.value = 'Resume'
    return
  }
  else btnStart.value = 'Pause'
  clock.run()
}

document.querySelector('.btn-reset').onclick = () => clock.reset()

function handleTimer(minutes, seconds, milliseconds){
  let min, seg, mill
  seconds < 10 ? seg = '0' + seconds : seg = seconds
  minutes < 10 ? min = '0' + minutes : min = minutes
  milliseconds < 10 ? mill = "00" + milliseconds : mill = milliseconds

  return min + ':' + seg + ':' + mill
}
