var nurseryBox = document.querySelectorAll(".nursery-box");
//nurseryBox[0].children[0].querySelector("img").src = "img/spider.jpg";
var wrapperBox = document.querySelector(".wrapper-box");
wrapperBox.querySelector("p").remove();


for(let i = 0; i < nurseryBox.length; i++){
    nurseryBox[i].querySelector("img").src= "img/spider.jpg";
    var firstP = nurseryBox[i].children[1].querySelector("p");

    // create a strong element
    var emEle = document.createElement("strong");
    // create an introduction text
    var text = document.createTextNode("Introduction: ");
    // append the text to the element
    emEle.append(text);

    // prepend the element to the first p
    firstP.prepend(emEle);

    // get the title of each nursery box
    var title = nurseryBox[i].children[1].querySelector("h2");
    // change the color of the title to green
    title.style.color="green"

}
