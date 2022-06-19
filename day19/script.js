const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggle.addEventListener('click', e => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})
let secondCircle = { num: 0, first: true }
let minuteCircle = { num: 0, first: true }
let hourCircle = { num: 0, first: true }
function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  if (hours === 0) {
    // if (hourCircle.first) hourCircle.first = false
    // else
    hourCircle.num++
  }
  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    360 * hourCircle.num + scale(hoursForClock, 0, 12, 0, 360)
  }deg)`
  if (minutes === 0) {
    // if (minuteCircle.first) minuteCircle.first = false
    // else
    minuteCircle.num++
  }
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    360 * minuteCircle.num + scale(minutes, 0, 60, 0, 360)
  }deg)`
  if (seconds === 0) {
    // if (secondCircle.first) secondCircle.first = false
    // else
    secondCircle.num++
  }
  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    360 * secondCircle.num + scale(seconds, 0, 60, 0, 360)
  }deg)`

  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

setTime()

setInterval(setTime, 1000)
