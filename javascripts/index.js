const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.openButton a')

  openButtons.forEach((openButton) => {
    openButton.addEventListener('click', function (e) {
      e.preventDefault()
      const faqWrap = this.closest('.faq__wrap')
      const items = faqWrap.querySelectorAll('.faq__item')

      items.forEach((item) => {
        item.classList.add('opened')
        const answer = item.querySelector('.faq__item-answer')
        if (answer) {
          answer.style.display = 'block' // Показать ответ
        }
      })

      this.parentElement.classList.add('hidden')
      this.parentElement.nextElementSibling.classList.remove('hidden')
    })
  })

  const closeButtons = document.querySelectorAll('.closeButton a')

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', function (e) {
      e.preventDefault()
      const faqWrap = this.closest('.faq__wrap')
      const items = faqWrap.querySelectorAll('.faq__item')

      items.forEach((item) => {
        item.classList.remove('opened')
        const answer = item.querySelector('.faq__item-answer')
        if (answer) {
          answer.style.display = 'none' // Скрыть ответ
        }
      })

      this.parentElement.classList.add('hidden')
      this.parentElement.previousElementSibling.classList.remove('hidden')
    })
  })

  // faq

  document.querySelectorAll('.js_faq__item').forEach((item) => {
    if (item.classList.contains('opened')) {
      const answer = item.querySelector('.faq__item-answer')
      if (answer) {
        answer.style.display = 'block'
      }
    }
  })

  document.addEventListener('click', function (e) {
    if (e.target.closest('.js_faq__item .faq__item-question')) {
      e.preventDefault()
      const item = e.target.closest('.js_faq__item')
      item.classList.toggle('opened')
      const answer = item.querySelector('.faq__item-answer')
      if (answer) {
        answer.style.display =
          answer.style.display === 'block' ? 'none' : 'block' // Переключить ответ
      }
      // frame()
    }
  })
})
