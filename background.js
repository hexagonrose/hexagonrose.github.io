const body=document.querySelector('body');

const img_Number=6;

function random(){
    const number=Math.floor(Math.random()*img_Number);
    return number;
}

function paintImage(imgNumber){
    const image = new Image();
    image.src=`hexagonrose.github.io/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    
}

function init(){
    const randomNumber= random();
    paintImage(randomNumber);
}

init();
