const form =  document.querySelector("form");
//this usecase will give an empty value/string
const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit",function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else{
       const BMI = (weight/ ((height*height) / 10000)).toFixed(2);
       //show the result
    //  results.innerHTML = `<span>${BMI}</span>`;
       if(BMI<18.6){
        results.innerHTML=`<span>Under weigth :${BMI}</span>`;
        }else if(BMI>18.6 && BMI<24.9){
            results.textContent=`Normal Weight Range:${BMI}`;
        }else{
            results.textContent=`Over Weight : ${BMI}`
        }
    }


})