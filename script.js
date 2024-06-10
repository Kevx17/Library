const myLibrary = [];

let modal = document.querySelector('.modal');
let addBookButton = document.querySelector('#addBook');
let submitButton = document.querySelector('#button');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bTitle = '';
let bAuthor = '';
let bPages = '';
let bRead = true;




addBookButton.onclick = function() {
    modal.showModal();
};

submitButton.onclick = function() {
    // Get form field values
    let bTitle = document.querySelector('#title').value;
    let bAuthor = document.querySelector('#author').value;
    let bPages = document.querySelector('#pages').value;
    let bRead = document.querySelector('#read').checked;

    // Check if form is filled out properly
    if (bTitle !== '' && bAuthor !== '' && bPages !== '') {
        // Clear form fields
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false;

        // Add new book to myLibrary
        myLibrary.push(new Book(bTitle, bAuthor, bPages, bRead));

        console.log(myLibrary);
        modal.close();
    }
};


