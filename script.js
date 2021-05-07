// ---- Selectors

// --Buttons--

// Стартовый экран
const btnStart = document.querySelector('.btn-start')

// Основной экран
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
const btnRandom = document.querySelector('.btn-rand')
const btnList = document.querySelector('.btn-list')


// --Containers--
const containerStartPage = document.querySelector('.container-Start_Page')  // Стартовый экран

const containerImg = document.querySelector('.container-Main_Img_View')    // Основной экран просмотра
const changePanel = document.querySelector('.buttons-Box--Main_Img_View')    // Блок кнопок на основном экране

const containerAllPreview = document.querySelector('.container-Img_Preview') // Контейнер выезжающий с превью изображений
const scrollBox = document.querySelector('.container-Img_Preview--scrollBox') // Скролл контейнер внутри "Контейнерf с превью изображений"

const overlay = document.querySelector('.overlay') // overlay на основном эксране при открытии блока превью





// ---- Стартовые условия

// перемнная к которой привязаны смены изображений
let count = 1;

// переменная со всем числом загруженных изображений
const imgNumbers = 52;

// Цикл для выгрузки превью img в выезжающий блок предпросмотра (scrollBox)
for (let i = 1; i <= imgNumbers; i++) {
  scrollBox.insertAdjacentHTML("beforeEnd", `<div class="container-Img_Preview--Preview_Img_Box" style="background-image: url(img/vertical/${i}.jpeg);"></div>`)
}




// Buttons Actions + Overlay
btnStart.addEventListener('click', function() {
  containerStartPage.style.transform = 'translateY(-100vh)'
})


btnNext.addEventListener('click', function() {

  if (count < 53) {
    count++
    containerImg.style.backgroundImage = `url(img/vertical/${count}.jpeg)`
  } else {
    count = 1
    containerImg.style.backgroundImage = `url(img/vertical/${count}.jpeg)`
  }
})


btnPrev.addEventListener('click', function() {

  if (count > 1) {
    count--
    containerImg.style.backgroundImage = `url(img/vertical/${count}.jpeg)`
  } else {
    count = 52
    containerImg.style.backgroundImage = `url(img/vertical/${count}.jpeg)`
  }
})


btnRandom.addEventListener('click', function() {

  count = Math.trunc(Math.random() * 51) + 1;

  containerImg.style.backgroundImage = `url(img/vertical/${count}.jpeg)`
})


btnList.addEventListener('click', function() {

  overlay.style.display = 'block'
  changePanel.style.transform = 'translateY(-290px)'
  containerAllPreview.style.zIndex = '30'
  containerAllPreview.style.transform = 'translateY(-20px)'
})


overlay.addEventListener('click', function() {

  overlay.style.display = 'none'
  changePanel.style.transform = 'translateY(0)'
  containerAllPreview.style.zIndex = '-30'
  containerAllPreview.style.transform = 'translateY(300px)'
})







// Открытие картинки из Блока превью на главный экран просмотра изображений по клику
// массив со всеми превьюхами (блоки с выгруженными картинками)
const imgPreviewBoxes = document.querySelectorAll('.container-Img_Preview--Preview_Img_Box')

// перебираем массив, чтобы понять, по какому элеементу кликнули
imgPreviewBoxes.forEach(function(unit) {

  unit.addEventListener('click', function() {

    // забираем у кликнутого элемента свойство backgroundImage, что равно url(img/1.jpeg)
    const style = unit.style.backgroundImage

    // вставляем забранный выше url в свойство backgroundImage основного экрана просмотра изображений
    containerImg.style.backgroundImage = style
  })
})





document.querySelector('.container-Vertical_Img_Link--img1').src = `img/vertical/${Math.trunc(Math.random() * 51) + 1}.jpeg`

document.querySelector('.container-Vertical_Img_Link--img2').src = `img/vertical/${Math.trunc(Math.random() * 50) + 1}.jpeg`

document.querySelector('.container-Vertical_Img_Link--img3').src = `img/vertical/${Math.trunc(Math.random() * 49) + 1}.jpeg`

document.querySelector('.container-Vertical_Img_Link--img4').src = `img/vertical/${Math.trunc(Math.random() * 48) + 1}.jpeg`



document.querySelector('.section-Main_Page-Vertical-button').addEventListener('click', function() {

  document.querySelector('.section-Main_Page').style.display = 'none'
  document.querySelector('.section-Vertical_Img').style.display = 'block'
})


document.querySelector('.btn-menu').addEventListener('click', function() {

  document.querySelector('.section-Main_Page').style.display = 'block'
  document.querySelector('.section-Vertical_Img').style.display = 'none'
})

































// d
