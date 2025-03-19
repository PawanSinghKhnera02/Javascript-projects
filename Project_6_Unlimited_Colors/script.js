//generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color ="#";
    for(let i=0;i<6;i++){
        color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(randomColor());
let interval;
const startColorChange = ()=>{

    if(!interval){
        interval= setInterval(bgColorChange,1000);
    }

    function bgColorChange(){
        document.body.style.backgroundColor = randomColor();
    }
    
};
const stopColorChange = ()=>{
    clearInterval(interval);
    interval = null;  // dereferencing the value once the work is done...
};

document.querySelector('#start').addEventListener('click',startColorChange);
document.querySelector('#stop').addEventListener('click',stopColorChange);