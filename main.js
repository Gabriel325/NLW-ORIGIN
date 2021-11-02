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

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    /*Scroll maior que a altura do header */
    header.classList.add('scroll')
  } else {
    /*Scroll menor que a altura do header */
    header.classList.remove('scroll')
  }
})
