const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let btitle = 'Nigga';
let bauthor = 'Kevin';
let bpages = '248';
let bread = false;

const myBook = new Book(btitle, bauthor, bpages, bread);

function AddToLibrary(b) {
    myLibrary.push(b);
}

AddToLibrary(myBook);

console.log(myLibrary);


document.getElementById('addBook').onclick = () => {
    document.getElementById('form').style.visibility = 'visible';
}

let submit = document.getElementById('submit');

submit.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}