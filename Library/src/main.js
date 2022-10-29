let library = [];

var title = document.getElementById("title");
var author = document.getElementById("author");
var page = document.getElementById("pages");
var read = document.getElementById("read");
var submit = document.getElementById("submit");
var books = document.querySelector(".books");

var contact = document.getElementById("contact");



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
    
    if(!isInLibrary(book) && (!isEmpty(book.title)) && (!isEmpty(book.author)) && (!isEmpty(book.pages)) &&(!isEmpty(book.read))){
        //newBooks.push(book.title);
        //library.push(book);
       
        library.push(book);   
        localStorage.setItem("books", JSON.stringify(library)); 
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

contact.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e.target);
    library = JSON.parse(localStorage.getItem("books") || '[]');
    addBookToLibrary();

    console.log(library);
    //localStorage.setItem("books", JSON.stringify(library));

    
    displayReset();
    displayLibrary();
    //displayAddedBooks();
    
    
});

console.log(window.localStorage.getItem("books"));

function displayLibrary(){
    var libraryBooks = localStorage.getItem("books");
    var libraryParsed = JSON.parse(libraryBooks);
    for (let book of libraryParsed){
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
displayReset();
displayLibrary();



const isEmpty = value => value === "" || value ===undefined || value ===null;

const validateInput =(value, fieldName)=>isEmpty(value) ? `${fieldName} cannot be left blank`:"";

const isInLibrary = (newBook)=>library.some((book)=>book.title === newBook.title);

