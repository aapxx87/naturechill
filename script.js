// Selectors

  // Buttons
  const btnNext = document.querySelector('.btn-next')
  const btnPrev = document.querySelector('.btn-prev')
  const btnStart = document.querySelector('.btn-start')
  const btnRandom = document.querySelector('.btn-rand')
  const btnList = document.querySelector('.btn-list')

  // Containers
  const containerStartPage = document.querySelector('.containerStartPage')
  const containerImg = document.querySelector('.container')
  const changePanel = document.querySelector('.changePanel')
  const containerAllPreview = document.querySelector('.containerAllPreview')
  const scrollBox = document.querySelector('.scrollBox')

//


let count = 1;

const imgNumbers = 27;



for (let i = 1; i <= imgNumbers; i++) {
  scrollBox.insertAdjacentHTML("beforeEnd", `<div class="containerAllPreview-preview" style="background-image: url(img/${i}.jpeg);"></div>`)
}

const imgPreviewBoxes = document.querySelectorAll('.containerAllPreview-preview')





// Buttons actions

  btnStart.addEventListener('click', function() {
    containerStartPage.style.transform = 'translateY(-100vh)'
  })


  btnNext.addEventListener('click', function() {

    if (count < 27) {
      count++
      containerImg.style.backgroundImage = `url(img/${count}.jpeg)`
    } else {
      count = 1
      containerImg.style.backgroundImage = `url(img/${count}.jpeg)`
    }
  })


  btnPrev.addEventListener('click', function() {

    if (count > 1) {
      count--
      containerImg.style.backgroundImage = `url(img/${count}.jpeg)`
    } else {
      count = 27
      containerImg.style.backgroundImage = `url(img/${count}.jpeg)`
    }
  })


  btnRandom.addEventListener('click', function() {

    count = Math.trunc(Math.random() * 26) + 1;

    containerImg.style.backgroundImage = `url(img/${count}.jpeg)`
  })


  btnList.addEventListener('click', function() {

    changePanel.style.transform = 'translateY(-300px)'

    containerAllPreview.style.zIndex = '30'
    containerAllPreview.style.transform = 'translateY(0)'
  })


  containerImg.addEventListener('click', function() {

    changePanel.style.transform = 'translateY(0)'
    containerAllPreview.style.zIndex = '-30'
    containerAllPreview.style.transform = 'translateY(300px)'
  })
//



imgPreviewBoxes.forEach(function(unit) {

  unit.addEventListener('click', function() {

    const style = unit.style.backgroundImage

    containerImg.style.backgroundImage = style
  })
})


































// d
