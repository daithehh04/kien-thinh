// Footer - mobile
const headingsIcon = document.querySelectorAll('.footer .row-footer .arr-down')
const listUl = document.querySelectorAll('.footer .col-item ul')
headingsIcon.forEach((heading,index) => {
  heading.addEventListener('click', function() {
    listUl[index].classList.toggle('hide')
    this.classList.toggle('active')
  })
})