const slider = document.querySelector('.slider__range');
const icon = document.querySelector('.icon-sun');


function changeColorBackground(contextoThis){
    document.documentElement.style.setProperty('--lightness',`${contextoThis.value}%`)
}


function changeColorRange(contextoThis){
    document.documentElement.style.setProperty('--colorPorcentage',`${contextoThis.value}%`)
}

function animateIconInit(contextoThis){
    document.documentElement.style.setProperty('--grades',`${contextoThis.value}deg`)
   
}





function mainEvents(){
   
    changeColorRange(this);
    changeColorBackground(this);
    animateIconInit(this);

}

slider.addEventListener('change', mainEvents)
slider.addEventListener('mousemove', mainEvents)
