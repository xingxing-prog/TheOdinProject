import './style.css';
import './photos/background.jpg';
import homeContent from './home.js';
import menuContent from './menu.js';
import contactContent from './contact.js';

function component(){
    const element = document.createElement("main");
    const header = document.createElement("div");
    header.setAttribute("class", "head");
    const h1 = document.createElement("h1");
    h1.textContent = "Authentic Chinese Food";
    h1.setAttribute("class", "h1");
    header.appendChild(h1);
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.setAttribute("class", "page");
    const home = getNavItems("Home");
    home.classList.add("clicked");
    
    ul.appendChild(home);
    const menu = getNavItems("Menu");
    ul.appendChild(menu);
    const contact = getNavItems("Contact");
    ul.appendChild(contact);

    nav.appendChild(ul);
    header.appendChild(nav);

    
    const center = document.createElement("div");
    if(home.classList.contains("clicked")){
        center.appendChild(homeContent());
    }
    else if(menu.classList.contains("clicked")){
        center.appendChild(menuContent());
    }
    else if(contact.classList.contains("clicked")){
        contact.appendChild(contactContent());
    }
   
    
    
  




    element.appendChild(header);
    element.appendChild(center);


    return element;
}

function getNavItems(name){
      const li = document.createElement("li");
      li.setAttribute("class", "item");
      li.textContent = name;
      li.addEventListener("click", (e)=>{
          e.target.classList.toggle("clicked");
          console.log(e.target);
      })

      return li;
}

var content = document.getElementById("content");
content.setAttribute("class", "main");
content.appendChild(component());


