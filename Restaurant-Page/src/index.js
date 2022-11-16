import './style.css';

function component(){
    const element = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent = "Authentic Chinese Food";
    h1.setAttribute("class", "h1");
    element.appendChild(h1);
    return element;
}

var content = document.getElementById("content");
content.appendChild(component());