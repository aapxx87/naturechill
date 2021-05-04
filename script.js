// Selectors
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
const btnStart = document.querySelector('.btn-start')
const btnRandom = document.querySelector('.btn-rand')

let count = 1;


btnStart.addEventListener('click', function() {
  // document.querySelector('.containerStartPage').style.display = 'none'
    document.querySelector('.containerStartPage').style.transform = 'translateY(-100vh)'
})


btnNext.addEventListener('click', function() {

  if (count < 27) {
    count++
    document.querySelector('.container').style.backgroundImage = `url(img/${count}.jpeg)`
  } else {
    count = 1
    document.querySelector('.container').style.backgroundImage = `url(img/${count}.jpeg)`
  }
})


btnPrev.addEventListener('click', function() {

  if (count > 1) {
    count--
    document.querySelector('.container').style.backgroundImage = `url(img/${count}.jpeg)`
  } else {
    count = 27
    document.querySelector('.container').style.backgroundImage = `url(img/${count}.jpeg)`
  }
})


btnRandom.addEventListener('click', function() {

  count = Math.trunc(Math.random() * 26) + 1;

  document.querySelector('.container').style.backgroundImage = `url(img/${count}.jpeg)`
})
