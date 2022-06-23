const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const notif = document.createElement('div')

  notif.classList.add('toast')

  notif.classList.add(type ? type : getRandom('type'))

  notif.innerText = message ? message : getRandom('message')

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.style.transform = 'translateY(0)'
    notif.style.opacity = 1
  })

  setTimeout(() => {
    notif.addEventListener('transitionend', () => notif.remove())
    notif.style.transform = 'translateY(-100%)'
    notif.style.opacity = 0
  }, 2000)
}

function getRandom(type) {
  switch (type) {
    case 'message':
      return getRandomMessage()
    case 'type':
      return getRandomType()
    case 'default':
      return
  }
}
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
