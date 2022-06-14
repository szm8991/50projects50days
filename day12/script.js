const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
  faq.addEventListener('click', e => {
    faq.classList.toggle('active')
  })
})
