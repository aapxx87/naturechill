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
//



// Array для базы изображений
const imgBaseArr = [
  ['img1', 'horizontal', 'https://i.pinimg.com/564x/0b/d8/51/0bd851f332f80d078972213793062f98.jpg', '', ''],
  ['img2', 'horizontal', 'https://i.pinimg.com/564x/6e/0e/ad/6e0ead31ba2a883bfb31c995c9830cbe.jpg', '', ''],
  ['img3', 'horizontal', 'https://i.pinimg.com/564x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg', '', ''],
  ['img4', 'vertical', 'https://i.imgur.com/wH3Oo0x.jpg', '', 'https://imgur.com/gallery/T4R7y11'],
  ['img5', 'vertical', 'https://i.imgur.com/VW0C52h.jpg', '', 'https://imgur.com/gallery/T4R7y11'],
  ['img6', 'vertical', 'https://i.imgur.com/6uILNYQ.jpg', '', 'https://imgur.com/gallery/T4R7y11'],
  ['img7', 'vertical', 'https://i.imgur.com/nK4avbl.jpg', '', 'https://imgur.com/gallery/T4R7y11'],
  ['img8', 'vertical', 'https://www.mobilesmspk.net/user/images/upload_images/2020/07/21/www.mobilesmspk.net_trees-image-1.jpg', 'https://www.pinterest.ru/pin/714031715923311922/', 'https://www.mobilesmspk.net/wallpaper/abstract/trees_4895'],
  ['img9', 'vertical', 'https://external-preview.redd.it/X31HSU_mE1zIE10RKL1tZqGkvjixoNaAdDaglOg2_Fw.jpg?auto=webp&s=19030afc14c622a7019356abd9119a779d5d7172', 'https://www.pinterest.ru/pin/92746073565988422/', 'https://www.reddit.com/r/wallpapers/comments/hei8bo/the_lighthouse_view/?utm_source=ifttt'],
  ['img10', 'vertical', 'https://iphoneswallpapers.com/wp-content/uploads/2019/01/Winter-Sunset-Snow-Minimal-iPhone-Wallpaper.jpg', 'https://www.pinterest.ru/pin/714031715923132311/', 'https://iphoneswallpapers.com/winter-sunset-snow-minimal-iphone-wallpaper/'],
  ['img11', 'vertical', 'https://i.imgur.com/Mi1EQBU.jpg', 'https://www.pinterest.ru/pin/714031715923311859/', 'https://imgur.com/gallery/T4R7y11'],
  ['img12', 'vertical', 'https://i.pinimg.com/564x/42/f7/69/42f769c932cd6e1ac78ee3e0b2d669c6.jpg', 'https://www.pinterest.ru/pin/714031715923237763/', ''],
  ['img13', 'vertical', 'https://64.media.tumblr.com/b30e7cb7222158b8d567253e0567b1e4/tumblr_oe5wrwzzZb1qbg3s6o1_500.png', 'https://www.pinterest.ru/pin/714031715923237805/', 'https://zandraart.tumblr.com/post/151032558305/pines'],
  ['img14', 'vertical', 'https://i.imgur.com/0OXogxr.jpg', '', 'https://imgur.com/gallery/y4luQVk'],
  ['img15', 'vertical', 'https://i.imgur.com/sAmQ22y.jpg', '', 'https://imgur.com/gallery/y4luQVk'],
  ['img16', 'vertical', 'https://i.imgur.com/Bddu303.jpg', '', 'https://imgur.com/gallery/y4luQVk'],
  ['img17', 'vertical', 'https://i.imgur.com/mKYBrtA.jpg', '', 'https://imgur.com/gallery/y4luQVk'],
  ['img18', 'vertical', 'https://64.media.tumblr.com/97c2c253e801e6bde46f35e339a6abad/tumblr_o822dtLYRe1qbg3s6o1_500.png', 'https://www.pinterest.ru/pin/714031715923238439/', 'https://zandraart.tumblr.com/post/145217195296/space-ice'],
  ['img19', 'vertical', 'https://64.media.tumblr.com/f6514bfeb3919d0184f8509bf43c63bc/tumblr_oo9xplapDE1qbg3s6o1_500.png', 'https://www.pinterest.ru/pin/714031715923237925/', 'https://zandraart.tumblr.com/post/159473964841/reflecting'],
  ['img20', 'vertical', 'http://designoholic.com/wp-content/uploads/2017/09/4-francescobongiorni.gif', 'https://www.pinterest.ru/pin/714031715923237603/', 'https://www.hipsthetic.com/francesco-bongiorni-mind-blowing-editorial-illustrations/'],
  ['img21', 'vertical', 'https://i.pinimg.com/564x/cc/3f/86/cc3f862b72fcb0c0d1b069a211d99061.jpg', 'https://www.pinterest.ru/pin/714031715923216274/', ''],
  ['img22', 'vertical', 'https://iphoneswallpapers.com/wp-content/uploads/2018/11/Minimal-Mountains-Forest-Nature-iPhone-Wallpaper.jpg', 'https://www.pinterest.ru/pin/714031715923170280/', 'https://iphoneswallpapers.com/minimal-mountains-forest-nature-iphone-wallpaper/'],
  ['img23', 'vertical', 'https://pbs.twimg.com/media/CpJZywfXYAAGWB5?format=jpg&name=medium', 'https://www.pinterest.ru/pin/714031715923170585/', 'https://twitter.com/zandraartt/status/761770356826791937'],
  ['img24', 'vertical', 'https://i.pinimg.com/originals/1e/db/be/1edbbe44380583084b590b81f38bf829.jpg', 'https://www.pinterest.ru/pin/714031715923205061/', ''],
  ['img25', 'vertical', 'https://64.media.tumblr.com/98a9c4287ab468477bd35efcafb8e349/tumblr_oomravXGBO1qbg3s6o1_1280.png', 'https://www.pinterest.ru/pin/714031715923170376/', 'https://zandraart.tumblr.com/image/159734256776'],
  ['img26', 'vertical', 'https://i.pinimg.com/564x/97/15/61/9715614edf4ff9c3888df4061ad4307d.jpg', 'https://www.pinterest.ru/pin/714031715923170617/', ''],
  ['img27', 'vertical', 'https://i.pinimg.com/564x/a3/11/dd/a311dd81161ca0d1b9239e24b3462d9a.jpg', 'https://www.pinterest.ru/pin/853221091892311574/', ''],
  ['img28', 'vertical', 'https://www.backgroundscool.com/wp-content/uploads/2019/05/firewatch-game-graphics-1080x1920.jpg', 'https://www.pinterest.ru/pin/714031715923169992/', 'https://www.backgroundscool.com/art/firewatch-game-graphics-wallpaper/'],
  ['img29', 'vertical', 'https://i.pinimg.com/564x/04/14/2e/04142e18a2673b8f9550e347930cfefd.jpg', 'https://www.pinterest.ru/pin/714031715923169983/', ''],
  ['img30', 'vertical', 'https://i.pinimg.com/564x/7f/22/c1/7f22c19c883b8fa7cac0c5a157a981c1.jpg', 'https://www.pinterest.ru/pin/714031715923169994/', ''],
  ['img31', 'vertical', 'https://i.imgur.com/gzaiyPu.jpg', 'https://www.pinterest.ru/pin/714031715923132338/', 'https://imgur.com/gallery/kxHtWIg'],
  ['img32', 'vertical', 'https://i.pinimg.com/564x/24/6e/2a/246e2a4b3355fd8d0b8778168d97668e.jpg', 'https://www.pinterest.ru/pin/714031715923132334/', ''],
  ['img33', 'vertical', 'https://i.pinimg.com/564x/de/ad/66/dead66442313d76f1a30bff04b23c3ab.jpg', 'https://www.pinterest.ru/pin/714031715923132310/', ''],
  ['img34', 'vertical', 'https://cdn-0.idownloadblog.com/wp-content/uploads/2018/12/snowy-mountain-background-iphone-wallpaper-ongliong11-768x1536.png', 'https://www.pinterest.ru/pin/714031715923132156/', 'https://www.idownloadblog.com/2018/12/09/snow-wallpapers-iphone/', ['night']],
  ['img35', 'vertical', 'https://cdn-0.idownloadblog.com/wp-content/uploads/2018/12/purple-mountains-pine-trees-snow-background-iphone-wallpaper-ongliong11-768x1536.png', '', 'https://www.idownloadblog.com/2018/12/09/snow-wallpapers-iphone/', ['night']],
  ['img36', 'vertical', 'https://cdn-0.idownloadblog.com/wp-content/uploads/2018/12/icy-water-mountain-moon-green-background-iphone-wallpaper-ongliong11-768x1536.jpg', '', 'https://www.idownloadblog.com/2018/12/09/snow-wallpapers-iphone/', ['winter']],
  ['img37', 'vertical', 'https://cdn-0.idownloadblog.com/wp-content/uploads/2018/12/home-house-snow-covered-mountain-background-iphone-wallpaper-ongliong11-768x1536.png', '', 'https://www.idownloadblog.com/2018/12/09/snow-wallpapers-iphone/', ['winter', 'snow']],
  ['img38', 'vertical', 'https://cdn.dribbble.com/users/995236/screenshots/3171258/attachments/674417/________.png', 'https://www.pinterest.ru/pin/714031715923128492/', 'https://dribbble.com/shots/3171258-Sunny-day-snowy-day/attachments/674417', ['japan']],
  ['img39', 'vertical', 'https://i.pinimg.com/564x/88/02/56/880256682f6eb7f89536277189cdca17.jpg', 'https://www.pinterest.ru/pin/714031715923128498/', '', ['japan', 'forest']],
  ['img40', 'vertical', 'https://i.pinimg.com/564x/19/2e/98/192e98497ee5e06c783ffa3517f271f7.jpg', 'https://www.pinterest.ru/pin/714031715922847991/', '', ['forest', 'night']],
]



// Выбираем из массива элементы Vertical

  // пустой массив, который будет заполняться url вертикальных элементов при фильтрации
  const imgUrlFilterArrVertical = []


  // прогоняем циклом и фильтруем элементы с фильтром 'vertical', их url загоняем в массив imgUrlFilterArrVertical
  for(let i = 0; i < imgBaseArr.length; i++) {
    if(imgBaseArr[i][1] == 'vertical') {
      imgUrlFilterArrVertical.push(imgBaseArr[i][2])
    }
  }
//




// Заполняем scrollbox изображениями vertical

  // замеряем длинну (кол-во) веритикальных элементов в массиве
  const numbersVertArray = imgUrlFilterArrVertical.length

  // проходимся циклом (i = длинне массива с url вертикальных изображений) и вставляем в scrollbox с url из массива (превью картинок)
  for (let i = 0; i < numbersVertArray; i++) {
    scrollBox.insertAdjacentHTML("beforeEnd", `<div class="container-Img_Preview--Preview_Img_Box" style="background-image: url(${imgUrlFilterArrVertical[i]});"></div>`)
  }
//




// ---- Стартовые условия

  // перемнная к которой привязаны смены изображений
  let count = 0;

  // вставляем первую картинку в главное окнг просмотра изображений
  containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`
//



// Buttons Actions + Overlay
  btnStart.addEventListener('click', function() {
    containerStartPage.style.transform = 'translateY(-100vh)'
  })


  btnNext.addEventListener('click', function() {

    if (count < numbersVertArray - 1) {
      count++
      containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`
    } else {
      count = 0
      containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`
    }
  })


  btnPrev.addEventListener('click', function() {

    if (count >= 1) {
      count--
      containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`
    } else {
      count = numbersVertArray - 1
      containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`
    }
  })


  btnRandom.addEventListener('click', function() {

    count = Math.trunc(Math.random() * (numbersVertArray - 1)) + 1;

    containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`

    console.log(count);
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
//



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
//




// ---------- v.2. update --------------


// Функция вставки новых изображений в превьб блока Vertical на главной странице
const imgVerticalPrevieDownload = function() {

  document.querySelector('.container-Vertical_Img_Link--img1').src = imgUrlFilterArrVertical[(Math.trunc(Math.random() * numbersVertArray))]

  document.querySelector('.container-Vertical_Img_Link--img2').src = imgUrlFilterArrVertical[(Math.trunc(Math.random() * numbersVertArray))]

  document.querySelector('.container-Vertical_Img_Link--img3').src = imgUrlFilterArrVertical[(Math.trunc(Math.random() * numbersVertArray))]

  document.querySelector('.container-Vertical_Img_Link--img4').src = imgUrlFilterArrVertical[(Math.trunc(Math.random() * numbersVertArray))]
}

// вызов функции обновления изображений
imgVerticalPrevieDownload()






// при клике на заголовок Vertical главная страница скрывается, а просмотр изображений появляется
document.querySelector('.section-Main_Page-Vertical-button').addEventListener('click', function() {

  document.querySelector('.section-Main_Page').style.display = 'none'
  document.querySelector('.section-Vertical_Img').style.display = 'block'
})




// при клике на кнопку menu на экране просомтра изображений при переходе на главный экране обновляются изображения в блоке vertical
document.querySelector('.btn-menu').addEventListener('click', function() {

  imgVerticalPrevieDownload()

  document.querySelector('.section-Main_Page').style.display = 'block'
  document.querySelector('.section-Vertical_Img').style.display = 'none'
})




// драфт Object для базы изображений
const imgBaseObj = {
  img1: {
    url: 'https://i.pinimg.com/564x/0b/d8/51/0bd851f332f80d078972213793062f98.jpg',
    type: 'horisontal',
    tags: []
  },
  img2: {
    url: 'https://i.pinimg.com/564x/6e/0e/ad/6e0ead31ba2a883bfb31c995c9830cbe.jpg',
    type: 'horisontal',
    tags: []
  },
  img3: {
    url: 'https://i.pinimg.com/564x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg',
    type: 'horisontal',
    tags: []
  },
  img4: {
    url: 'https://i.pinimg.com/564x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg',
    type: 'vertical',
    tags: []
  },
  img5: {
    url: 'https://i.pinimg.com/564x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg',
    type: 'vertical',
    tags: []
  },
  filterType: function() {

    return this.img1.type
  }
}






















// d
