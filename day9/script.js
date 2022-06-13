const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
initBtn()
function initBtn() {
  const container = document.querySelector('#buttons')
  container.addEventListener('click', e => {
    stopSongs()
    document.getElementById(e.target.dataset.sound).play()
  })
  sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.dataset.sound = sound
    container.appendChild(btn)
  })
}
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}
