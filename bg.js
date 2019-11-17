const body = document.querySelector("body");

const IMAGE_NUM = 7;

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `images/${imageNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const Number = Math.floor(Math.random() * IMAGE_NUM);
  return Number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
