// ---- Selectors

  // --Buttons--

  // Стартовый экран
  const btnStart = document.querySelector('.btn-start')

  // Основной экран
  const btnNext = document.querySelector('.btn-next')
  const btnPrev = document.querySelector('.btn-prev')
  const btnRandom = document.querySelector('.btn-rand')
  const btnList = document.querySelector('.btn-list')

  // экран просмотра горизонтальных изображений
  const btnNextHoriz = document.querySelector('.btn-next-horiz')
  const btnPrevHoriz = document.querySelector('.btn-prev-horiz')


  // --Containers--
  const containerStartPage = document.querySelector('.container-Start_Page')  // Стартовый экран
  const containerImg = document.querySelector('.container-Main_Img_View')    // Основной экран просмотра
  const changePanel = document.querySelector('.buttons-Box--Main_Img_View')    // Блок кнопок на основном экране
  const containerAllPreview = document.querySelector('.container-Img_Preview') // Контейнер выезжающий с превью изображений
  const scrollBox = document.querySelector('.container-Img_Preview--scrollBox') // Скролл контейнер внутри "Контейнерf с превью изображений"
  const horizontalImgBox = document.querySelector('.horiz-img-view-box') // контейнер в который вставляются горизонтальные изображения

  const overlay = document.querySelector('.overlay') // overlay на основном эксране при открытии блока превью
//



// Array для базы изображений
const imgBaseArr = [
  ['img1', 'horizontal', 'https://i.pinimg.com/564x/0b/d8/51/0bd851f332f80d078972213793062f98.jpg', 'https://www.pinterest.ru/pin/714031715923216495/', ''],
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
  ['img41', 'vertical', 'https://i.pinimg.com/564x/ab/e7/8e/abe78e8ee030ed992cdfa1fcc76da3f8.jpg', 'https://www.pinterest.ru/pin/714031715922814877/', '', ['forest', 'night']],
  ['img42', 'vertical', 'https://i.pinimg.com/564x/41/13/0d/41130d5bd4426dde930a8d3aeeacf4e0.jpg', 'https://www.pinterest.ru/pin/714031715922814873/', '', ['forest', 'night', 'mountains']],
  ['img43', 'vertical', 'https://i.pinimg.com/564x/f0/eb/e4/f0ebe49f0a55e386981c027fd0140205.jpg', 'https://www.pinterest.ru/pin/714031715923312225/', '', ['lake']],
  ['img44', 'vertical', 'https://cdn.dribbble.com/users/995236/screenshots/2803964/attachments/574346/232323.png', 'https://www.pinterest.ru/pin/714031715923312007/', '', ['night']],
  ['img45', 'vertical', 'https://i.pinimg.com/564x/ee/b9/ab/eeb9abadf828414138686042fbf446e1.jpg', 'https://www.pinterest.ru/pin/714031715923311993/', '', ['night']],
  ['img45', 'vertical', 'https://cdn-0.idownloadblog.com/wp-content/uploads/2018/05/camping-iphone-wallpaper-paul-e-bhoy-768x1536.png', 'https://www.pinterest.ru/pin/714031715923311976/', 'https://www.idownloadblog.com/2018/05/13/cartoon-landscapes-wallpapers/', ['']],
  ['img46', 'vertical', 'https://i.pinimg.com/564x/53/57/84/5357842d632b26e0b4f762cd830a5b12.jpg', 'https://www.pinterest.ru/pin/648729521319011697/', '', ['']],
  ['img47', 'vertical', 'https://i.pinimg.com/564x/d4/1f/c1/d41fc116f371abe852886b4928c6436d.jpg', 'https://www.pinterest.ru/pin/563442603372753621/', '', ['night']],
  ['img48', 'horizontal', 'https://cdn.dribbble.com/users/192276/screenshots/2500960/attachments/491748/midnightinthevalley-2560x1440.png', 'https://www.pinterest.ru/pin/714031715923172475/', 'https://dribbble.com/shots/2500960-Midnight-in-the-Valley/attachments/491748', ['night']],
  ['img49', 'horizontal', 'https://i.pinimg.com/564x/72/96/9f/72969fd2668e33d52f215a3573b485a0.jpg', 'https://www.pinterest.ru/pin/465207836506248851/', '', ['night']],
  ['img50', 'horizontal', 'https://i.pinimg.com/564x/e3/bb/d8/e3bbd89d4f1af87d9fa6607d5f2e7382.jpg', 'https://www.pinterest.ru/pin/714031715923216502/', '', ['']],

  ['img51', 'vertical', 'https://i.pinimg.com/564x/7f/cb/88/7fcb886a50663fd94842c526068e987d.jpg', 'https://www.pinterest.ru/pin/411797959670539181/', '', ['']],

  ['img52', 'vertical', 'https://i.pinimg.com/564x/6a/4a/de/6a4adec7a358f20b3957856dc6eddede.jpg', 'https://www.pinterest.ru/pin/202662051954345909/', 'https://www.deviantart.com/balance-sheet/art/SV3-5-Sundown-330292991', ['']],

  ['img53', 'vertical', 'https://i.pinimg.com/564x/88/03/05/8803058270278d313eff2eb5e354ab57.jpg', 'https://www.pinterest.ru/pin/458311699573919927/', 'https://www.wattpad.com/405208886-daily-inspiration-day-3?utm_source=web&utm_medium=pinterest&utm_content=share_reading', ['']],

  ['img54', 'vertical', 'https://i.pinimg.com/564x/37/f6/03/37f6031bf63a5cedeb394d1246270cb1.jpg', 'https://www.pinterest.ru/pin/44684221289241004/', '', ['']],

  ['img55', 'vertical', 'https://i.redd.it/cfo4zqs7hur01.png', 'https://www.pinterest.ru/pin/808818414302714610/', 'https://www.reddit.com/r/Art/comments/8c6kld/hills_digital_1500x2287px/?utm_source=ifttt', ['']],

  ['img56', 'vertical', 'https://i.pinimg.com/564x/da/67/11/da6711a71b6c8c17fc79bc3e6f08c351.jpg', 'https://www.pinterest.ru/pin/769200811344729381/', '', ['']],

  ['img56', 'vertical', 'https://i.pinimg.com/564x/c3/de/be/c3debeb47ec21910170a8b6619e4f995.jpg', 'https://www.pinterest.ru/pin/839428818028569558/', '', ['']],

  ['img57', 'vertical', 'https://i.pinimg.com/564x/8e/92/60/8e92608f30827965f99c7792598d9200.jpg', 'https://www.pinterest.ru/pin/714031715923312062/', '', ['']],

  ['img58', 'vertical', 'https://i.pinimg.com/564x/76/f4/08/76f4086b08db98587576cf2304570367.jpg', 'https://www.pinterest.ru/pin/714031715923312037/', '', ['']],

  ['img59', 'vertical', 'https://i.pinimg.com/564x/96/af/bf/96afbf8dd580a8fe959a8723aa233918.jpg', 'https://www.pinterest.ru/pin/714031715923237596/', '', ['']],

  ['img60', 'horizontal', 'https://i.pinimg.com/564x/91/5e/4c/915e4cf8f21f1ed8cfce9f66ac4c64d4.jpg', 'https://www.pinterest.ru/pin/714031715923445339/', '', ['']],

  ['img61', 'horizontal', 'https://i.pinimg.com/564x/53/da/3a/53da3ab238c3dc4f88e09bed9c2a2653.jpg', 'https://www.pinterest.ru/pin/714031715923385820/', '', ['']],

  ['img62', 'horizontal', 'https://free4kwallpapers.com/uploads/originals/2019/01/29/minimal-japan-wallpaper.jpg', 'https://www.pinterest.ru/pin/714031715923385817/', '', ['']],

  ['img63', 'horizontal', 'https://i.pinimg.com/564x/61/3e/53/613e53cc12574047390b3092424c19bb.jpg', 'https://www.pinterest.ru/pin/714031715923385811/', '', ['']],

  ['img64', 'horizontal', 'https://i.pinimg.com/564x/ad/66/17/ad66173fbfb98ff0458cfc7cd1d4be12.jpg', 'https://www.pinterest.ru/pin/714031715923385807/', '', ['']],

  ['img65', 'horizontal', 'https://i.pinimg.com/564x/7b/23/eb/7b23ebe8e8230e543d1669a864fa3996.jpg', 'https://www.pinterest.ru/pin/714031715923385779/', '', ['']],

  ['img66', 'horizontal', 'https://i.pinimg.com/564x/75/82/57/75825789a3dae9d79d39313e4bde1868.jpg', 'https://www.pinterest.ru/pin/714031715923385755/', '', ['']],

  ['img67', 'horizontal', 'https://i.pinimg.com/564x/b8/58/25/b85825b47e3af963481835d1c540ff64.jpg', 'https://www.pinterest.ru/pin/714031715923385774/', '', ['']],

  ['img68', 'horizontal', 'https://i.pinimg.com/564x/ff/4c/a0/ff4ca09a82803447d00fc6f942ea35c5.jpg', 'https://www.pinterest.ru/pin/714031715923385741/', '', ['']],

  ['img69', 'horizontal', 'https://i.pinimg.com/564x/53/18/62/5318621ee33750927f2f78a30a67816d.jpg', 'https://www.pinterest.ru/pin/714031715923384869/', '', ['']],

  ['img70', 'horizontal', 'https://i.pinimg.com/564x/43/10/be/4310be2a1e733e14169ea5117d86c23a.jpg', 'https://www.pinterest.ru/pin/714031715923384814/', '', ['']],

  ['img71', 'horizontal', 'https://i.pinimg.com/564x/83/b0/11/83b0117384e82632e83cc4741bdc5081.jpg', 'https://www.pinterest.ru/pin/714031715923216706/', '', ['']],

  ['img72', 'horizontal', 'https://i.pinimg.com/564x/47/6b/17/476b1793984a510710f431dc68432365.jpg', 'https://www.pinterest.ru/pin/714031715923385737/', '', ['']],

  ['img73', 'horizontal', 'https://i.pinimg.com/564x/84/55/bc/8455bc57cafc1049fc8eb6d40a240b0a.jpg', 'https://www.pinterest.ru/pin/714031715923276931/', '', ['']],

  ['img74', 'horizontal', 'https://i.pinimg.com/564x/48/e4/6d/48e46d86f9fc73b3e9b009b6907dbc0a.jpg', 'https://www.pinterest.ru/pin/714031715923276944/', '', ['']],

  ['img75', 'horizontal', 'https://i.pinimg.com/564x/86/37/96/863796feee8a8ec21578b08150975564.jpg', 'https://www.pinterest.ru/pin/621567186065334105/', '', ['']],

  ['img76', 'horizontal', 'https://i.pinimg.com/564x/a9/87/08/a987088fea7fad2df0ccb1305fabcc36.jpg', 'https://www.pinterest.ru/pin/714031715923216569/', '', ['']],

  ['img77', 'horizontal', 'https://i.pinimg.com/564x/8e/3f/59/8e3f59787f6802df7cf2b31b8b36d396.jpg', 'https://www.pinterest.ru/pin/508273507944052418/', '', ['']],

  ['img78', 'horizontal', 'https://i.pinimg.com/564x/d1/0c/d8/d10cd853ce75f3e5bfa2cf6f42e371d1.jpg', 'https://www.pinterest.ru/pin/741194051160492223/', '', ['']],

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


// Выбираем из массива элементы Horizontal

  // пустой массив, который будет заполняться url вертикальных элементов при фильтрации
  const imgUrlFilterArrHorizontal = []


  // прогоняем циклом и фильтруем элементы с фильтром 'vertical', их url загоняем в массив imgUrlFilterArrVertical
  for(let i = 0; i < imgBaseArr.length; i++) {
    if(imgBaseArr[i][1] == 'horizontal') {
      imgUrlFilterArrHorizontal.push(imgBaseArr[i][2])
    }
  }

  const numbersHorisArray = imgUrlFilterArrHorizontal.length
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

  let countHorizontal = 0;

  // вставляем первую картинку в главное окнг просмотра изображений
  containerImg.style.backgroundImage = `url(${imgUrlFilterArrVertical[count]})`

  // вставляем первую картинку в окно просмотра горизонтальных изображений
  horizontalImgBox.src = `${imgUrlFilterArrHorizontal[countHorizontal]}`

  console.log(imgUrlFilterArrHorizontal);
//



// Buttons Actions + Overlay

  btnStart.addEventListener('click', function() {
    containerStartPage.style.transform = 'translateY(-100vh)'
  })

  // вертикальные изображения
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

  // горизонтальные изображения
  btnNextHoriz.addEventListener('click', function() {

    if (countHorizontal < numbersHorisArray - 1) {
      countHorizontal++
      horizontalImgBox.src = imgUrlFilterArrHorizontal[countHorizontal]
    } else {
      countHorizontal = 0
      horizontalImgBox.src = imgUrlFilterArrHorizontal[countHorizontal]
    }
  })

  btnPrevHoriz.addEventListener('click', function() {

    if (countHorizontal >= 1) {
      countHorizontal--
      horizontalImgBox.src = imgUrlFilterArrHorizontal[countHorizontal]
    } else {
      countHorizontal = numbersHorisArray - 1
      horizontalImgBox.src = imgUrlFilterArrHorizontal[countHorizontal]
    }
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


// при клике на заголовок Horizontal главная страница скрывается, а просмотр изображений появляется
document.querySelector('.section-Main_Page-Horizontal-button').addEventListener('click', function() {

  document.querySelector('.section-Main_Page').style.display = 'none'
  document.querySelector('.section-Horizontal_Img').style.display = 'block'
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
