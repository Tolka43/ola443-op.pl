const guitaristImg = document.querySelector('.guitarist-img')

let blackWhiteButton = document.querySelector('.black-white')

let blackWhiteImg = event => {
    if (guitaristImg.style.filter !== 'grayscale(100%)') { guitaristImg.style.filter = 'grayscale(100%)' }
    else { guitaristImg.style.filter = 'none' }
}

blackWhiteButton.addEventListener('click', blackWhiteImg)

let borderRadiusButton = document.querySelector('.border-radius')
let borderRadiusChange = event => {
    if (guitaristImg.style.borderRadius !== '50%') { guitaristImg.style.borderRadius = '50%' }
    else { guitaristImg.style.borderRadius = '0%' }
};
borderRadiusButton.addEventListener('click', borderRadiusChange)

let opacityButton = document.querySelector('.opacity')
let imgOpacity = event => {
    if (guitaristImg.style.opacity !== '0.5') { guitaristImg.style.opacity = '0.5' }
    else { guitaristImg.style.opacity = '1' }
};
opacityButton.addEventListener('click', imgOpacity)

