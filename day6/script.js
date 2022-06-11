const boxes = document.querySelectorAll('.box')
const h1Height = document.querySelector('h1').getBoundingClientRect().height

window.addEventListener('scroll', e => {
  checkBoxes()
})
function checkBoxes() {
  // 滑动超过视口高度80%就重新计算并添加样式
  const triggerBottom = (window.innerHeight / 5) * 4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
