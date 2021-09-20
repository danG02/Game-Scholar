const strikewWhenDone = document.querySelector('#done')
const strikewWhenDone1 = document.querySelector('#done1')
const strikewWhenDone2 = document.querySelector('#done2')



strikewWhenDone.addEventListener('click', function() {
  strikewWhenDone.style.setProperty("text-decoration", "line-through")
})

strikewWhenDone1.addEventListener('click', function() {
  strikewWhenDone1.style.setProperty("text-decoration", "line-through")
})

strikewWhenDone2.addEventListener('click', function() {
  strikewWhenDone2.style.setProperty("text-decoration", "line-through")
})
