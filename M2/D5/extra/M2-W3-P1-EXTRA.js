// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/
/* let array = [];
function giveMeRandom(int){
    for(i = 0; i < int; i++){
        let numRandom = Math.floor(Math.random()*10);
        array.push(numRandom);
    }
    return array;
} */
/* console.log(giveMeRandom(10)); */

/* let giveRand = giveMeRandom(3);
let arrayFive = [];
let final = 0;
console.log(giveRand);
function checkArray(giveRand){
    for(i = 0; i < giveRand.length; i++){
        if(giveRand[i] > 5){
            arrayFive = arrayFive.push(giveRand);
            final += giveRand[i];
            console.log(num > 5);
        }
        continue;
    }
    return final;
}
console.log(checkArray(giveRand)); */

//codice ousseynou
/* let arr = giveMeRandom(3);

function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    console.log(num > 5);
    if (num > 5) {
      sum += num;
    }
  }
  return sum;
}
console.log(arr);
console.log(checkArray(arr)); */
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

let shoppingCart = [
    {
        price: 40,
        name: "iphone13",
        id: 1,
        qnt: 4,
    },
    {
        price: 2,
        name: "scarpa",
        id: 2,
        qnt: 1,
    },
    {
        price: 30,
        name: "rolex",
        id: 3,
        qnt: 1,
    },
    {
        price: 50,
        name: "chiavetta usb",
        id: 4,
        qnt: 6,
    },
    {
        price: 300,
        name: "BMW",
        id: 5,
        qnt: 1,
    },
    {
        price: 100,
        name: "Yaris",
        id: 6,
        qnt: 1,
    },
]
/* let somma = 0;
function shoppingCartTotal(shoppingCart){
    for(i = 0; i < shoppingCart.length; i++){
        somma += (shoppingCart[i].price) * (shoppingCart[i].qnt);
    }
    return somma;
}
console.log(shoppingCartTotal(shoppingCart)); */
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/
/* let newObject = { price: 2400, name: "fujifilm", id: 5, qnt: 1};
function addToShoppingCart(newObject){
    return shoppingCart.push(newObject);
}
console.log(addToShoppingCart(newObject)); */


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/
/* function maxShoppingCart(shoppingCart){
    let maxValue = 0;
    for(i = 0; i < shoppingCart.length; i++){
        if(shoppingCart[i].price > maxValue){
            maxValue = shoppingCart[i].price;
        }
}
return maxValue;
}
console.log(maxShoppingCart(shoppingCart)); */



//codice Ousseynou
/* function maxShoppingCart(shoppingCart){
    let max = shoppingCarts[0];
    for(let i =0; i<shoppingCarts.length;i++){
      if(shoppingCarts[i].prezzo > max.prezzo){
        max= shoppingCarts[i]
      }
    }
    return max
  }
  let objectPuiCostoso = maxShoppingCart(shoppingCarts)
  console.log(objectPuiCostoso); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* function latestShoppingCart(shoppingCart){
    let lastObject;

    for(i = 0; i < shoppingCart.length; i++){
        if(i = shoppingCart.length - 1){
            lastObject = shoppingCart[i];
        }
    }
    return lastObject;
}
console.log(latestShoppingCart(shoppingCart)); */

/* function latestShoppingCart(shoppingCart){
    return shoppingCart[shoppingCart.length -1];
}
console.log(latestShoppingCart(shoppingCart)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/
/* let x = 8;
function loopUntil(){
    let count = 0;
    for(i = 0; i < 3000; i++){
        let numRandom = Math.floor(Math.random()*10);
        if(numRandom <= x){
            console.log(i + ": " + numRandom);
            count = 0;
        }else{
            count += 1;
            console.log(i + ": => " + numRandom);
            console.log("count: (" + count + ")");
            if(count >= 3){
                console.log("dopo " + i + " tentativi abbiamo ottenuto 3 risultati > di " + x)
                return;
            }
        }
        if(i === 2999){
            console.log("Probabilmente hai scelto il numero 9 o un numero molto vicino al 9! Cambia numero o ritenta la fortuna!");
        }
    }
    return count;
}
console.log(loopUntil()); */
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/
/* let array = [23, 22, 23, NaN, 22, "gatto"];
let numArray = [];
let sum = 0;

function average(){
    for(i = 0; i < array.length; i++){
        if(typeof array[i] === "number" && !isNaN(array[i])){
            numArray.push(array[i]);
            sum += array[i];
        }
    }
    let average = sum / numArray.length;
    return average;
}

console.log("la media dell'array è: " + average());
console.log("Nell'array analizzato ci sono " + numArray.length + " numeri!"); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
/* let array = ["rospo", "cane", "gatto", "camaleonte", "pulcino" ]
let length = 0;
let element = "";

function longest(){
    for(i = 0; i < array.length; i++){
        if(array[i].length >= length){
            length = array[i].length;
            element = array[i];
        }
    }
    return element;
}
console.log(longest()); */
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* let emailContent = "spam-email: vuoi un regalo?";

function antiSpam(){
    emailContent.toLowerCase();
    let verify = emailContent.includes("spam") || emailContent.includes("scam");
    return verify;
}
console.log(antiSpam()); */
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/


/* console.log(oggi.getDate());
console.log(xDay.getDate());
console.log(xDay.getDay());
console.log(xDay.getTime());
console.log(oggi.getTime());
console.log(xDay.getFullYear());
console.log(xDay.getMonth());
console.log(xDay.getDay());
console.log(new Intl.DateTimeFormat("en-US", options).format(xDay));
console.log(xDay); */
let oggi = new Date();
let xDay = new Date("1992, 09, 08");
const options = { weekday: "long" };

let xDay_year = xDay.getFullYear();
let xDay_month = xDay.getMonth() + 1;
let xDay_day = xDay.getDate();
let xDay_day_text = new Intl.DateTimeFormat("en-US", options).format(xDay);

let timeOggi = (oggi.getTime())/(86400000);
let timexDay = (xDay.getTime())/(86400000);
let result = Math.round(timeOggi - timexDay);

console.log("Dal 0" + xDay_day + "/" + "0" + xDay_month + "/" + xDay_year + " sono passati " + result + 
            " giorni! Ossia " + Math.floor(result/365) + " anni e circa " + (Math.round((result%365)/30)) + " mesi!")


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
