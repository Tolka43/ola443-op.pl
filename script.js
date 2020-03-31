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

function drawImage(file) {
    const container = document.querySelector('.first-image');

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.addEventListener('load', function() {
    const ourWidth = 250;
    const ourHeight = (img.height / img.width) * 250;

    canvas.width = ourWidth;
    canvas.height = ourHeight;

    context.drawImage(img, 0, 0, ourWidth, ourHeight);

    container.appendChild(canvas);
  });
}

inputFile.addEventListener('change', function(event) {
  drawImage(inputFile.files[0]);
});