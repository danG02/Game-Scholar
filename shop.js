const triggerFlip = document.querySelector('.Card')
const box2 = document.querySelector('#box2')


triggerFlip.addEventListener('click', function() {
  triggerFlip.classList.toggle('flipped')
})

box2.addEventListener('click', function() {
  box2.classList.toggle('flipped')
})


