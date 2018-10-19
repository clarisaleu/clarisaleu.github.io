const hoverEl = document.querySelectorAll('.js-hover')
let imgArray = []
const data = ["https://i.imgur.com/jvJXhRy.jpg", "https://i.imgur.com/bVcdnSY.jpg", "https://i.imgur.com/L0IVveM.png", "https://i.imgur.com/eTuXxgM.png", "https://i.imgur.com/WhvpRKf.jpg", "https://i.imgur.com/mGIkAnB.jpg", "https://i.imgur.com/DkiMyvZ.jpg"]

data.forEach((el, i) => {
  image = document.createElement('img')
  document.body.appendChild(image)

  image.setAttribute('src', el)
  imgArray.push(image)

})

hoverEl.forEach((el, i) => {
  el.addEventListener('mouseover', () => {
    imgArray[i].classList.add('visible')
  })


  el.addEventListener('mouseleave', () => {
    imgArray[i].classList.remove('visible')
  })
})
