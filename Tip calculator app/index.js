let bill = 0
let people = 1
let percent = 0
let elem = null

function getBill() {
    bill = document.getElementById('bill').value;
    document.getElementById('tip-amount').innerHTML = "$" + ((percent * (bill / people)) / 100).toFixed(2);
    document.getElementById('total').innerHTML = "$" + (((percent * (bill / people)) / 100) + bill / people).toFixed(2);
}
function nbrPeople() {
    people = document.getElementById('people').value;
    document.getElementById('tip-amount').innerHTML = "$" + ((percent * (bill / people)) / 100).toFixed(2);
    document.getElementById('total').innerHTML = "$" + (((percent * (bill / people)) / 100) + bill / people).toFixed(2);
}
function cutomTip() {
    percent = document.getElementById('cus').value;
    document.getElementById('tip-amount').innerHTML = "$" + ((percent * (bill / people)) / 100).toFixed(2);
    document.getElementById('total').innerHTML = "$" + (((percent * (bill / people)) / 100) + bill / people).toFixed(2);
    if (elem != null){
        elem.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
}
function clickTip(per) {
    percent = per
    document.e
    document.getElementById('tip-amount').innerHTML = "$" + ((percent * (bill / people)) / 100).toFixed(2);
    document.getElementById('total').innerHTML = "$" + (((percent * (bill / people)) / 100) + bill / people).toFixed(2);
}
function resetForm() {
    document.getElementById('form').reset()
    document.getElementById('tip-amount').innerHTML = "$0.00";
    document.getElementById('total').innerHTML = "$0.00";
    if (elem != null){
        elem.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
}
function changeColor(element){
    if (elem != null){
        elem.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    elem = element
    element.style.backgroundColor = "#26c0ab";
}