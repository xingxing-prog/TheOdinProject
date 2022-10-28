let library = [];

let newBooks = [];

var title = document.getElementById("title");
var author = document.getElementById("author");
var page = document.getElementById("pages");
var read = document.getElementById("read");
var submit = document.getElementById("submit");
var books = document.querySelector(".books");
var titleError = document.getElementById("titleError");



function Book(title, author, page, read){

    this.title = title;
    this.author = author;
    this.pages = page;
    this.read = read;

}

let gameOfThrone = new Book("Game of Thrones", "George R.R. Martin", 864, "not Read");

library.push(gameOfThrone);

function addBookToLibrary(){
   
    let book = new Book(title.value, author.value, page.value, read.value);
    titleError.innerHTML = validateInput(title.value, "title");
    if(!newBooks.includes(book.title) && (!isEmpty(book.title)) && (!isEmpty(book.author)) && (!isEmpty(book.pages)) &&(!isEmpty(book.read))){
        newBooks.push(book.title);
        library.push(book);
    }
    
}

function displayAddedBooks(){
    for (let book of library){
        const newBook = document.createElement("div");
        newBook.setAttribute("class", "book");
        const bookTitle = document.createElement("h4");
        bookTitle.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const page = document.createElement("p");
        page.textContent = book.pages + " pages";
        const read = document.createElement("button");
        read.textContent = book.read;
        read.setAttribute("class", "bookRead");
        const remove = document.createElement("button");
        remove.setAttribute("class", "bookRemove");
        remove.textContent = "remove";

        newBook.appendChild(bookTitle);
        newBook.appendChild(author);
        newBook.appendChild(page);
        newBook.appendChild(read);
        newBook.appendChild(remove);
        books.appendChild(newBook);
    }
}

function displayReset(){
    books.innerHTML ="";
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e.target);

    addBookToLibrary();
    console.log(library);
    displayReset();
    displayAddedBooks();
    
});


const isEmpty = value => value === "" || value ===undefined || value ===null;

const validateInput =(value, fieldName)=>isEmpty(value) ? `${fieldName} cannot be left blank`:"";

