const modalOverlay = document.querySelector('.modalOverlay')
const cardapio = document.querySelectorAll('.cardapio')
const dbFoodfy = require('./data')




for( let card of cardapio) {
  card.addEventListener('click', () => {
    modalOverlay.classList.add('active')
  })
}

document.querySelector('.closeModal').addEventListener('click', () => {
  modalOverlay.classList.remove('active')
})
