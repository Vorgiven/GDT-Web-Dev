function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);


// fields
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#numPeople");
const tip = document.querySelector("#tip");

// elements
const amt = document.querySelector("#amt");
const ttp = document.querySelector("#ttp");
const app =  document.querySelector("#app");

// listeners when fields change
const inputColl = document.querySelectorAll("input"); //todo
for (let item of inputColl) { // loop each item
  item.addEventListener("change", doCalculate);
  console.log(item);
}

// 
function doCalculate() {
  console.log("h");
  let totalTips = (numPeople.value * bill.value) * (numPeople.value * tip.value) * 0.01;
  let totalAmount = bill.value  * numPeople.value;
  let amountPerPerson = numPeople.value;
  
  amt.innerHTML = "$"+totalAmount;
  ttp.innerHTML = "$"+totalTips;
  app.innerHTML = amountPerPerson;
}