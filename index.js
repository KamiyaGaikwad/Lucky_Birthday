var DoB = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");

checkButton.addEventListener('click',takeInputForOperation);

function takeInputForOperation(){
    var bday = DoB.value;
    // bday = bday.replaceAll("-","");
    // sum = sumTheNumber(bday);
    bday = replaceAllByNullProgram(bday);
    sum = sumTheNumber(bday);
   
}

function sumTheNumber(bday){
    let sum=0;
    for(let i=0;i<bday.length;i++){
        sum = sum + Number(bday.charAt(i));
        console.log(sum)
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
    console.log("y:",y);
    return y;
    
}







//bonus- try to do replaceAll with manual coding