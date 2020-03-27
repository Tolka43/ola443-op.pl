const guitaristImg = document.querySelector('.guitarist-img')

let blackWhiteButton = document.querySelector('.black-white')

let blackWhiteImg = event => {
    if (guitaristImg.style.filter !== 'greyscale(100%)') { guitaristImg.style.filter = 'greyscale(100%)' }
    else { guitaristImg.style.filter = 'none' }
}

blackWhiteButton.addEventListener('click', blackWhiteImg)

let borderRadiusButton = document.querySelector('.border-radius')
let borderRadiusChange = event => guitaristImg.style.borderRadius = '50%';
borderRadiusButton.addEventListener('click', borderRadiusChange)

let opacityButton = document.querySelector('.opacity')
let imgOpacity = event => guitaristImg.style.opacity = '0.5';
opacityButton.addEventListener('click', imgOpacity)

