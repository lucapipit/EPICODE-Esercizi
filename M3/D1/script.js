/* esercizio extra 1 */

let twitter = document.querySelector("aside div:last-child li:nth-child(2)");
/* twitter.remove(); */
twitter.style.display = "none";

console.log(twitter);

/* esercizio extra 2 */
let disappear = document.querySelector(".jumbotron p.lead > a");
let father = document.querySelector(".jumbotron");
console.log(father);


disappear.addEventListener("click", () => {
    father.remove();
    return;
})

/* esercizio extra 3 */
let authors = document.querySelectorAll(".blog-post-meta a");

/* for(i = 0; i < authors.length; i++){
    let author = authors[i].innerText;
    authors[i].addEventListener("mouseenter", () => {
        alert(author);
        return;
    })
    console.log(authors[i].innerText);
} */
authors.forEach((author, index) => {
    author.addEventListener("mouseenter", () => {
        alert(author.innerText);
        return;
    })
})
