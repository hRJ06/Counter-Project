const counterValue = document.getElementById("counter");
function inc(){
    let value = parseInt(counterValue.innerText); 
    value = value + 1;
    counterValue.innerText = value;
}
function dec(){
    let value = parseInt(counterValue.innerText); 
    value = value - 1;
    counterValue.innerText = value;
}