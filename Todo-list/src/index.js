import "./style.css";
//import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/solid"

function component(){
    const element = document.createElement("div");
    element.setAttribute("class", "start");
    element.innerHTML = "Hello World";
    return element;
}

document.body.appendChild(component());