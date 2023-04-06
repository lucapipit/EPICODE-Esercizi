/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* 
function area(l1, l2){
    let area = l1 * l2;
    return area;
}
let risultato = area(10, 5);
console.log(risultato); */

/* function area(l1, l2){
    return l1 * l2;
}
console.log(area(10, 5)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* function crazySum(int1, int2){
    if(int1 === int2){
        return (int1 + int2)*3;
    }else{
        return int1 + int2;
    }
}
console.log(crazySum(3, 3)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/* function crazyDiff(int){
    let diff = int - 19;
    if(diff > 19){
        return diff * 3;
    }else{
        return diff;
    }
}

console.log(crazyDiff(40)); */

//codice ousseynou
/* function crazyDiff(num) {
    let diff = Math.abs(num - 19);
    return diff > 19 ? diff * 3 : diff;
  } */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* function boundary(int){
    if((int >= 20 && int <= 100) || int === 400){
        return true;
    }
    return false;
}
console.log(boundary(20)); */

//codice ousseynou
/* function boundary(int){ 
    return ((int >= 20 && int <= 100) || int === 400);
}
console.log(boundary(200)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* let string = "zedes";
function codify(string){
    if(string.startsWith("code")){
        return string;
    }
    return "code" + string;
}
console.log(codify(string)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* function check3and7(int){
    if(int >= 0){
        int = int % 3 === 0 || int % 7 === 0;
        return int
    }
    return "inserire un numero intero positivo";
}
console.log(check3and7(7)); */

/* function check3and7(int){
    int = Math.floor(int);
    return (int > 0) ?(int % 3 === 0 || int % 7 === 0) : "inserire un numero intero positivo";
}
console.log(check3and7(7.3)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* function reverseString(string){
    if(isNaN(string)){
    let arrayString = string.split("");
    let stringa = arrayString.reverse();
    let joinStringa = stringa.join("");
    return joinStringa;
    }else{
        return "Hai sbagliato tutto"
    }
}
console.log(reverseString(true)); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* let arrayString = [];
let array1 = [];
let array2 = [];
function upperFirst(string){
    if(isNaN(string)){
        arrayString = string.split(" ");
        array1 = arrayString[0].split("");
        array2 = array1[0].toUpperCase();

        
        return array2;

    }
}
console.log(upperFirst("ciao bel modello")); */
/* console.log(upperFirst(arrayString)); */
/* console.log(upperFirst(array2)); */


//codice ousseynou
/* function upperFirst(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
      return letter.toUpperCase();
    });
  }
   console.log (upperFirst("ciao mondo")); */

//codice ousseynou
/* function upperFirst(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }
  console.log(upperFirst("ciao mondo!")); */
  


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* 
function cutString(str){
    return str.slice(1, -1);
}
console.log(cutString("ciao")); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* let array = [];
function giveMeRandom(int){
    for(i = 0; i < int; i++){
        let numRandom = Math.floor(Math.random()*10);
        array.push(numRandom);
    }
    return array;
}
console.log(giveMeRandom(30));
console.log(array.length); */

/* SCRIVI QUI LA TUA RISPOSTA */
