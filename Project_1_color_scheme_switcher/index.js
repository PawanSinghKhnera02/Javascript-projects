const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button)=>{
        button.addEventListener("click", function(event){
            console.log(event);
            console.log(event.target);
            body.id = event.target.id;
        })
})