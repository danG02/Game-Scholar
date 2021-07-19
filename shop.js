const triggerFlip = document.querySelector('.Card')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')



triggerFlip.addEventListener('click', function() {
  triggerFlip.classList.toggle('flipped')
})

box2.addEventListener('click', function() {
  box2.classList.toggle('flipped')
})

box3.addEventListener('click', function() {
    box3.classList.toggle('flipped')
  })

  box4.addEventListener('click', function() {
    box4.classList.toggle('flipped')
  })

  box5.addEventListener('click', function() {
    box5.classList.toggle('flipped')
  })

  box6.addEventListener('click', function() {
    box6.classList.toggle('flipped')
  })

