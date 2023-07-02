function drawBoxes(){
    var container = document.querySelector("#timestable");

    // set display to grid in timestable
    container.style.display = "grid";
    // define the number of columnes
    container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";

    // add 100 boxes in timestable
    for(let i = 1;i<=100; i ++){
        // create box
        let box = document.createElement("div");
        // styles
        box.classList.add("boxes-style");
        box.innerHTML = i;

        // append to container
        container.appendChild(box);
    }
    ChangeColor();
}

// Change color of boxes
function ChangeColor(){

    let container = document.querySelector("#timestable");
    let box = document.querySelectorAll(".boxes-style");
    console.log(box);

    // loop through boxes
    box.forEach(element => {
        var r= (Math.random() *255) ;
        var g= (Math.random() *255) ;
        var b= (Math.random() *255) ;
        element.style.backgroundColor= "rgb("+r+", "+g+", "+b+")";
    });
}

// add listener to button
var butn = document.querySelector('#btnChange');
console.log(butn);
butn.addEventListener("click",ChangeColor)


// draw boxes on html load
document.addEventListener("DOMContentLoaded",drawBoxes);
