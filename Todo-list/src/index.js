import "./style.css";

function component(){
    const element = document.createElement("div");
    element.setAttribute("class", "start");
    element.innerHTML = "Hello World";
    return element;
}

document.body.appendChild(component());