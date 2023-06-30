
// selecter the header 1 intro using query Selector
var intro = document.querySelector("#zen-intro");
var introh1 = intro.querySelector("h1");
console.log(intro);
introh1.innerHTML = "CSS Playground";
console.log(introh1);

// selecter the header 2 intro using query Selector
var introh2 = intro.querySelector("h2");
introh2.innerHTML = "CSS is Beautiful";
console.log(introh2);

// get element by id : 1
var summary = document.getElementById("zen-summary");
console.log(summary);

// get element by id : 2
var supporting = document.getElementById("zen-supporting");
console.log(supporting);

// get list of element by their tag name : 1
var mainheader = intro.getElementsByTagName("h1");
console.log(mainheader);
// print the 1st element inneHTML content
console.log(mainheader[0].innerHTML);

// get list of element by their tag name : 2
var header3 = intro.getElementsByTagName("h3");
console.log(header3);

// print the inneHTML content
var p = intro.getElementsByTagName("p");
console.log(p);
// print the 4th element inneHTML content
console.log(p[3]);

var zenPreamble = document.getElementById("zen-preamble");
var p = zenPreamble.getElementsByTagName("p");
// print the 1st element inneHTML content of the p tag inside zen-preamble id
console.log(p[0].innerHTML);


var temp = document.getElementsByClassName("design-name");
console.log(temp);
// print the 1st element inneHTML content class name - design-name
console.log(temp[0].innerHTML);

