let lengthEl = document.getElementById("length-el");
let volumnEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let errorEl = document.getElementById("error-el");

let inputEl = document.getElementById("input-el");

let meters = 0;
let feet = 0;

let leters = 0;
let gallons = 0;

let kilograms;
let pounds;


function convert() {
    

    if (inputEl.value.length == 0) {

        let error ="You entered nothing"
        errorEl.textContent=error
        lengthEl.textContent=""
        volumnEl.textContent=""
        massEl.textContent=""
        
       

    }else{

        errorEl.textContent=""

        
    // meter/feet conversion

        feet = inputEl.value * 	3.280839895;
        meters = inputEl.value / 3.280839895;

        lengthEl.textContent = inputEl.value + " meters = " + feet.toFixed(3) + " feet | " +
                            inputEl.value + " feet = " + meters.toFixed(3) + " meters";

        // liters/gallons conversion

        liters = inputEl.value * 3.78541178;
        gallons = inputEl.value / 3.78541178;

        volumnEl.textContent = inputEl.value + " liters = " + gallons.toFixed(3) + " gallons   | " +
        inputEl.value + " gallons = " + liters.toFixed(3) + " leters";

        // kilograms / pounds conversion

        pounds = inputEl.value * 2.20462262;
        kilograms = inputEl.value / 2.20462262;

        massEl.textContent =  inputEl.value + " kilograms = " + pounds.toFixed(3) + " pounds   | " + inputEl.value + " pounds = " + kilograms.toFixed(3) + " kilogramss";






    }
}
  

