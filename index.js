var DoB = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");

checkButton.addEventListener('click',takeInputForOperation);

function takeInputForOperation(){
    console.log(DoB.value,luckyNumber.value);
}
