const inputFile = document.querySelector('input[type=file]');

function drawImage(file) {
  const container = document.querySelector('.first-image');

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.addEventListener('load', function () {
    const ourWidth = 250;
    const ourHeight = (img.height / img.width) * 250;

    canvas.width = ourWidth;
    canvas.height = ourHeight;

    context.drawImage(img, 0, 0, ourWidth, ourHeight);

    container.appendChild(canvas);
  });
}

inputFile.addEventListener('change', function (event) {
  drawImage(inputFile.files[0]);
});

let blackWhiteButton = document.querySelector('.black-white')

let blackWhiteImg = event => {
  const canvas = document.querySelector('canvas')
  if (canvas.style.filter !== 'grayscale(100%)') { canvas.style.filter = 'grayscale(100%)' }
  else { canvas.style.filter = 'none' }
}

blackWhiteButton.addEventListener('click', blackWhiteImg)

let borderRadiusButton = document.querySelector('.border-radius')
let borderRadiusChange = event => {
  const canvas = document.querySelector('canvas')
  if (canvas.style.borderRadius !== '50%') { canvas.style.borderRadius = '50%' }
  else { canvas.style.borderRadius = '0%' }
};
borderRadiusButton.addEventListener('click', borderRadiusChange)

let opacityButton = document.querySelector('.opacity')
let imgOpacity = event => {
  const canvas = document.querySelector('canvas')
  if (canvas.style.opacity !== '0.5') { canvas.style.opacity = '0.5' }
  else { canvas.style.opacity = '1' }
};
opacityButton.addEventListener('click', imgOpacity)

let resetButton = document.querySelector('.reset')
let resetFunc = event => {
  const canvas = document.querySelector('canvas')
   canvas.style.removeProperty('filter'); canvas.style.removeProperty('opacity'); canvas.style.removeProperty('border-radius')
   };
resetButton.addEventListener('click', resetFunc)