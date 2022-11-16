import './style.css';

function component(){
    const element = document.createElement("div");
    element.setAttribute("class", "head");
    const h1 = document.createElement("h1");
    h1.textContent = "Authentic Chinese Food";
    h1.setAttribute("class", "h1");
    element.appendChild(h1);
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.setAttribute("class", "page");
    const home = getNavItems("Home");
    ul.appendChild(home);
    const menu = getNavItems("Menu");
    ul.appendChild(menu);
    const contact = getNavItems("Contact");
    ul.appendChild(contact);
    
    nav.appendChild(ul);
    element.appendChild(nav);
    return element;
}

function getNavItems(name){
      const li = document.createElement("li");
      li.textContent = name;
      return li;
}

var content = document.getElementById("content");
content.appendChild(component());