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
