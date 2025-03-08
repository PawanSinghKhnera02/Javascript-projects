const clock = document.querySelector("#clock");

// let date = new Date();
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleString());
// console.log(date.toString());

setInterval(function(){
let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000)