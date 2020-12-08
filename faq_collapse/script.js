const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
       const parent = btn.parentNode
       parent.classList.toggle('active')
    })
})