let library = [];

var title = document.getElementById("title");
var author = document.getElementById("author");
var page = document.getElementById("pages");
var read = document.getElementById("read");
var submit = document.getElementById("submit");
var books = document.querySelector(".books");

var contact = document.getElementById("contact");
var close = document.getElementById("close");
var addBook = document.getElementById("addBook");
var modal = document.querySelector(".modal");


function Book(title, author, page, read){

    this.title = title;
    this.author = author;
    this.pages = page;
    this.read = read;

}


let gameOfThrone = new Book("Game of Throne", "George R.R. Martin", 864, "not Read");

library.push(gameOfThrone);

addBook.addEventListener("click", ()=>{
     modal.style.display="block";
});

close.addEventListener("click", ()=>{
    modal.style.display="none";
})

function addBookToLibrary(){
   
    let book = new Book(title.value, author.value, page.value, read.value);
    
    if(!isInLibrary(book) && (!isEmpty(book.title)) && (!isEmpty(book.author)) && (!isEmpty(book.pages)) &&(!isEmpty(book.read))){
        //newBooks.push(book.title);
        //library.push(book);
       
        library.push(book);   
        localStorage.setItem("books", JSON.stringify(library)); 
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

   
    localStorage.setItem("books", JSON.stringify(library));

    console.log(library);
    displayReset();
    displayLibrary();
    //displayAddedBooks();
    modal.style.display="none";
    contact.reset();
    
    
});

//console.log(window.localStorage.getItem("books"));

function displayLibrary(){
    var libraryBooks = localStorage.getItem("books");
    var libraryParsed = JSON.parse(libraryBooks);
    if(libraryBooks === null){
        libraryParsed = [];
    }
    for (let book of libraryParsed){
        const newBook = document.createElement("div");
        newBook.setAttribute("class", "book");
        const bookTitle = document.createElement("h4");
        bookTitle.setAttribute("value", book.title);
        bookTitle.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const page = document.createElement("p");
        page.textContent = book.pages + " pages";
        const read = document.createElement("button");
        read.textContent = book.read;
        read.setAttribute("class", "bookRead");

        read.addEventListener("click", (e)=>{
            console.log(e.target);
           if(e.target.textContent ==="read"){
               e.target.textContent = "not read";
           }
           else{
               e.target.textContent = "read";
           }
        })

        const remove = document.createElement("button");
        remove.setAttribute("class", "bookRemove");
        remove.textContent = "remove";

        remove.addEventListener("click", (e)=>{
            var title =e.target.parentNode.querySelector("h4").textContent;

            
            var books =JSON.parse(localStorage.getItem("books"));
            books =books.filter((book)=>book.title != title);
            localStorage.setItem("books", JSON.stringify(books));
            //console.log(books);
            
            e.target.parentNode.remove();
           
            
        })

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

