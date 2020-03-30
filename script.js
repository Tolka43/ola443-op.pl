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

let resetButton = document.querySelector('.reset')
let resetFunc = event => {guitaristImg.style.removeProperty('filter'); guitaristImg.style.removeProperty('opacity'); guitaristImg.style.removeProperty('border-radius')};
resetButton.addEventListener('click', resetFunc)

const inputFile = document.querySelector('input[type=file]');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const img = new Image();
img.src = URL.createObjectURL(el);
img.onload = function() { context.drawImage(img, 0, 0, 300, 300); }
