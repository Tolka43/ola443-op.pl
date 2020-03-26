const guitaristImg = document.querySelector('.guitarist-img')

let blackWhiteButton = document.querySelector('.black-white')
let blackWhiteImg = event => guitaristImg.style.filter = 'grayscale(100%)';
blackWhiteButton.addEventListener('click', blackWhiteImg)

let borderRadiusButton = document.querySelector('.border-radius')
let borderRadiusChange = event => guitaristImg.style.borderRadius = '50%';
borderRadiusButton.addEventListener('click', borderRadiusChange)

let opacityButton = document.querySelector('.opacity')
let imgOpacity = event => guitaristImg.style.opacity = '0.5';
opacityButton.addEventListener('click', imgOpacity)

