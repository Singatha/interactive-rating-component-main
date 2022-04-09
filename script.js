let rate = 0;
const arrState = [];

for (let i = 0; i < 5; i++){
    arrState.push(false);
}

function handleRate(num){
    if (arrState[Number(num)-1] === false){
        arrState[Number(num)-1] = true;
        rate++;
    } else if (arrState[Number(num)-1] === true){
        arrState[Number(num)-1] = false;
        rate--;
    }
}

function handleSubmit(){
    if (rate === 0){
        alert("Please select atleast one rating.");
    } else {
        document.getElementById("rating-state").style.visibility = "hidden";
        document.getElementById("thank-you-state").style.visibility = "visible";
        document.getElementById("rate").innerHTML = rate;
    }
}

document.getElementById("button-1").addEventListener('click', handleRate);
document.getElementById("button-2").addEventListener('click', handleRate);
document.getElementById("button-3").addEventListener('click', handleRate);
document.getElementById("button-4").addEventListener('click', handleRate);
document.getElementById("button-5").addEventListener('click', handleRate);

document.getElementById("submit-button").addEventListener('click', handleSubmit);

// rating buttons should be clicked in ascending order sequentially
