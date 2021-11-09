/* Abrir e fechar o menu pelo icone: hamburger e x*/
const nav = document.querySelector('#header nav')
const toggles = document.querySelectorAll('nav .toggle')

for (const element of toggles) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, fechar menu*/
const links = document.querySelectorAll('nav ul li a')
for (var link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /*Scroll maior que a altura do header */
    header.classList.add('scroll')
  } else {
    /*Scroll menor que a altura do header */
    header.classList.remove('scroll')
  }
}

/* Testimonials slider */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scrollreveal: Carregar elementos quando der scroll na pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social',
  {
    interval: 100
  }
)

/* Botão voltar para o top */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

/* Menu ativo de acordo com seção na página*/
const sections = document.querySelectorAll('main section[id]')
function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*When to scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})

/* Altera tema para escuro*/
const themes = document.querySelectorAll('.theme')
const themeButton = document.querySelector('#theme')

for (const theme of themes) {
  theme.addEventListener('click', function () {
    themeButton.classList.toggle('off')
  })
}
