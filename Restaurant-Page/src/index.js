
function component(){
    const element = document.createElement("div");

    element.innerHTML = "Hello World";
    return element;
}

var content = document.getElementById("content");
content.appendChild(component());