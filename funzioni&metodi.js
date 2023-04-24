

//M2_D7
let element;
let newElement;
let tag;//figlio di body liv.1
let firstTag;//figlio di body liv.1
let lastTag;//figlio di body liv.1
let newTag;//figlio di body liv.1
let tagChild;//figlio del figlio di body liv.2
let body = document.getElementsByTagName("body"); //liv.0
let functionName = function (){};

element.onclick = functionName;
element.addEventListner("click", functionName);
window.onload;

//M2_D6

document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("div");

document.querySelector("body");//restituisce un singolo oggetto
document.querySelectorAll("");//restituisce una gamma di oggetti
node.children("");//restituisce una gamma di nodi figli

document.createElement("div");
tag.appendChild(tagChild); // esempio => appende un li dentro un ul come ultimo figlio
body.insertBefore(newTag, lastTag); //inserisce un tag dento un tagMadre prima di un tag selezionato (lastTag)

element.innerText = "new text";
element.id = "new-id";


//M2_D5 - Metodi per le Stringhe

let str = "stringa";
let subStr = "str";
str.toLowerCase();
str.toUpperCase();
str.includes(subStr); // true
str.concat(subStr); //stringastr
str.repeat(2); //stringastringa
str.replace(str, subStr); // stringa => str //esegue la sostituzione solo per il primo elemento trovato
str.replaceAll(str, subStr); // stringa => str //esegue la sostituzione per tutti gli elementi trovati


//M2_D5 - Metodi per gli Array

let array = [1, 2, 3];
let el1 = 4;
let el2 = 5;

array.concat(el1, el2); // [1, 2, 3, 4, 5]
array.indexOf(2); // 1

let array2 = [1, 2, 3, 2];
array.lastIndexOf(2); // 3

array2.pop(); // [1, 2, 3]
array2.push(array); // [1, 2, 3, 2, 1, 2, 3]
array2.slice(2, 3); // leggere la documentazione
array2.splice(2, 1); // leggere la documentazione
array2.includes(2); // true
array2.join("-"); // 1-2-3-2