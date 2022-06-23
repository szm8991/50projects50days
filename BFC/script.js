const btn = document.querySelector('#button')
btn.addEventListener('click', e => {
  const margins = document.querySelectorAll('.margin2')
  console.log(margins)
  margins.forEach(item => {
    item.classList.toggle('bfc')
  })
})
