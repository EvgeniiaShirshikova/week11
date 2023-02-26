let price1 = document.getElementById('price1');
let a = price1.innerHTML;
let price2 = document.getElementById('price2');
let b = price2.innerHTML;
let price3 = document.getElementById('price3');
let c = price3.innerHTML;
let price4 = document.getElementById('price4');
let d = price4.innerHTML;
let sum = document.getElementById('sum');
sum.textContent = Number(a)+Number(b)+Number(c)+Number(d);
function getDiscount() {
    sum.textContent = sum.innerHTML*0.8
}