const smallCup = document.querySelector('.cups')
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
updateBigCup()

smallCup.addEventListener('click', e => {
  if (e.target.classList.contains('cup-small')) highlightCups(e.target.dataset.index)
  else return
})

function highlightCups(idx) {
  let curSmallCup = smallCups[idx]
  let isFulled = curSmallCup.classList.contains('full')
  if (idx == 7 && isFulled) {
    console.log('last')
    idx--
  } else if (isFulled && !curSmallCup.nextElementSibling.classList.contains('full')) {
    idx--
  }
  console.log(idx)
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
