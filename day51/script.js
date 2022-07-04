const range = document.getElementById('range')
const imgGap = document.querySelector('.gap')
const imgContainer = document.querySelector('.img-container')
const imgGap_width = getComputedStyle(imgGap).getPropertyValue('width')
const imgContainer_width = getComputedStyle(imgContainer).getPropertyValue('width')
const imgLeft = document.querySelector('.img-slider').dataset.left

range.addEventListener('input', e => {
  const value = +e.target.value

  const num_gap_width = +imgGap_width.substring(0, imgGap_width.length - 2)
  const num_img_width = +imgContainer_width.substring(0, imgContainer_width.length - 2)

  const max = +e.target.max

  const left = value * (num_img_width / max) - num_gap_width / 2

  imgGap.style.left = `${left}px`

  if (Math.abs(left - imgLeft) < 3) alert('sucess')
})
