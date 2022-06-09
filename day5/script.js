const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0
let timer = setInterval(blurring, 30)
function blurring() {
  load++
  if (load > 99) {
    clearInterval(timer)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
// 按输入比例计算输出比例
// 例如输入范围0-10，输出范围0-100，当前输入值为5，则输出值为50
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
