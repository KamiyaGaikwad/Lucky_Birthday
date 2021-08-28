var DoB = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outPut = document.querySelector("#output")
checkButton.addEventListener('click',takeInputForOperation);

function takeInputForOperation(){
    var bday = DoB.value;
    // bday = bday.replaceAll("-","");
    // sum = sumTheNumber(bday);
    bday = replaceAllByNullProgram(bday);
    sum = sumTheNumber(bday);
    if(sum&&luckyNumber.value){
        compareSumAndLuckyNumber();
    }
    else{
        outPut.innerText = "Please enter both the fields 🧐";
    }
}

function sumTheNumber(bday){
    let sum=0;
    for(let i=0;i<bday.length;i++){
        sum = sum + Number(bday.charAt(i));
    }
    return sum;
}

function replaceAllByNullProgram(bday) {
    let y="";
    for(let j=0;j<bday.length;j++){
        x = bday.charAt(j)
        if(x!="-"){
            y = y+x;
        }
        else{
           continue;
        }
    }
    return y;
    
}

function compareSumAndLuckyNumber(){
    if(sum%luckyNumber.value){
        outPut.innerText = "Sorry, Your Birthday is Not Lucky ☹️";
    }
    else{
        outPut.innerText = "Congratulations 🤩, Your Birthday is Lucky";
    }
}





//bonus- try to do replaceAll with manual coding