/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* let me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log(me.skills.pop());
console.log(me.skills); */

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

/*   let array = [];
  let number = 1;

  for(number = 1; number < 100; number = number + 2){
    array.push(number);
  }
  console.log(array); */

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

/*   let array = [];

  for (i = 0; i < 10; i++){
    numRandom = Math.round((Math.random()*100));
    array.push(numRandom);
  }

  console.log(array); */

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

 /*  
  // array casuale
  let array = [];
  let arrayEven = [];

  for (i = 0; i < 20; i++){
    numRandom = Math.round((Math.random()*100));
    array.push(numRandom);
  }

  console.log(array);

  for (i = 0; i < 20; i++){
    if(array[i] % 2 === 0){
      arrayEven.push(array[i]);
      array.splice(i, 1);
    }
  }

  console.log(array);
  console.log(arrayEven); */




/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

/* let array = [1, 2, 3, 4];

 i = 0;
 somma = 0;
 while(i <= 3){
  somma += array[i];
  i++;
 }
 console.log(somma); */
 


/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

/* let array = [1, 2, 3, 4];

for(i = 0; i < 4; i++){
  numBase = array[i];
  numSomma = numBase + 1;
  array[i] = numSomma;
}
console.log(array); */

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

/* let array = [1, 2, 3, 4];

for(i = 0; i < 4; i++){
  if (array[i] % 2 === 0){
    array.splice(i, 1);
  }
}
console.log(array); */

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
 // array casuale
 

/*  for(z = 0; z < 5000; z++){
  let array = [];
  
  for (i = 0; i < 10; i++){
    numRandom = Math.round((Math.random()*10));
    array.push(numRandom);
    }
  
  duplicates = array.filter((item, index) => index !== array.indexOf(item));
  console.log(array);
  console.log(duplicates);
  if(duplicates.length === 0){
      console.log(z);
      break;
  }else{
    continue;
  }
  
} */


/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
 
/* let array = ["EPICODE", "is", "great"];

for(i = 0; i < 3; i++){
  array[i] = array[i].length;
}
console.log(array); */

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/*   */

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

/* let filmYear = [];
let yearOrder = [];
for(i = 0; i < 14; i++){
  filmYear.push(movies[i].Year);
} 

yearOrder = filmYear.sort();
/* console.log(yearOrder[0]); */

/* for(z = 0; z < 14; z++){
  if(movies[z].Year === filmYear[0]){
    console.log(movies[z]);
    break;
  }else{
    continue;
  }
}  */ 



/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
/* let ID = [];

for(i = 0; i < movies.length; i++){
  toSlice = movies[i].imdbID;
  sliced = toSlice.slice(2);
  ID.push(sliced);
}
duplicates = ID.filter((item, index) => index !== ID.indexOf(item));

console.log("Nell'archivio ci sono " + ((movies.length) - (duplicates.length)) + " film");

if (duplicates.length !== 0){
console.log("Questi sono i duplicati: " + duplicates);
}else{
  console.log("Non ci sono duplicati nell'archivio");
} */


/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
/* let titles = [];

for(i = 0; i < movies.length; i++){
  titles.push(movies[i].Title);
}
console.log(titles); */

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
/* let titles = [];
let millenialFilms = [];

for(i = 0; i < movies.length; i++){
  titles.push(movies[i].Title);
}
console.log(titles);
for(z = 0; z < titles.length; z++){
  if(parseInt(movies[z].Year) >= 2000){
    millenialFilms.push(movies[z].Title)
  }else{
    continue;
  }
}
console.log(millenialFilms); */
/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
/* const id = 'tt0355702';

for(i = 0; i < movies.length; i++){
  if ((movies[i].imdbID) === id){
    console.log(movies[i]);
  }else{
    continue;
  }
  
} */

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* i = 0;
somma = 0;
while(i < movies.length){
anno = parseInt(movies[i].Year);
somma += anno;
i++;
}
console.log(somma); */

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
/* for(z = 0; z < movies.length; z++){
  title = movies[z].Title;
  splitTitle = title.split(" ");

  for(i = 0; i < splitTitle.length; i++){
    if (splitTitle[i].toLowerCase() === "lord"){
      console.log(movies[z]);
    }
  }
} */


