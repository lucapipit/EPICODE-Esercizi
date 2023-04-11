

function h1Substitute(str){
    let h1Tag = document.getElementById("h1");
    h1Tag.innerText = str;
    return h1Tag;
}

function changeBcgColor(){
    /* let newProducts = document.getElementById("products");
    newProducts.style.backgroundColor = "green"; */
    document.body.style.backgroundColor = "green";
}

function addressSubstitute(str2){
    let pTag = document.getElementById("address");
    pTag.innerText = str2;
    return pTag;
}

/* function linkChanger(){
    let linkArray = document.getElementsByClassName("link");
    let finalArray = [];
    for(i = 0; i < 3; i++){
        let newClass = linkArray.classList.add("link2");
        finalArray.push(newClass);
    }
    return finalArray;
} */

/* function linkChanger(){
    let element = document.getElementsByClassName("link");
    let newElement = [];
    for(i = 0; i < 4; i++){
       newElement = element[i].classList.add("link2");
    }
    return newElement;
} */


/* let items = document.getElementsByClassName("price");

function changeColor(items){
    let newColor = [];
    for(i = 0; i < items.length; i++){
        newColor = items[i].classList.add("price2");
    }
    return newColor;
} */

let rnd1 = (Math.random())*255;
let rnd2 = (Math.random())*255;
let rnd3 = (Math.random())*255;

let items = document.getElementsByClassName("price");
function changeColor(items){
    for(i = 0; i < items.length; i++){
        items[i].style.color = "rgb(" + rnd1 + ", " + rnd2 + ", " + rnd3 +")";
    }
    return items;
}
console.log(changeColor(items));

/* let items = document.getElementsByClassName("price")[0];
items.style.color = "purple"; */

let str = "Tutto a 2 euro";
let str2 = "via2euro 2";

/* console.log(h1Substitute(str));
console.log(addressSubstitute(str2)); */
/* console.log(changeBcgColor());
console.log(linkChanger()); */

