import './style.css';



import homeContent from './home.js';
import menuContent from './menu.js';
import contactContent from './contact.js';

function component(){
    const element = document.createElement("main");
    const header = document.createElement("div");
    const center = document.createElement("div");
    
    header.setAttribute("class", "head");
    const h1 = document.createElement("h1");
    h1.textContent = "Authentic Chinese Food";
    h1.setAttribute("class", "h1");
    header.appendChild(h1);
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.setAttribute("class", "page");

  

    const home = getNavItems("Home", center);
    home.classList.add("clicked");

    //center.appendChild(homeContent());
   
    ul.appendChild(home);
    
    const menu = getNavItems("Menu", center);
    ul.appendChild(menu);
    center.appendChild(menuContent());

   
    const contact = getNavItems("Contact", center);
    ul.appendChild(contact);

   
    nav.appendChild(ul);
    header.appendChild(nav);


    element.appendChild(header);
    element.appendChild(center);


    return element;
}

function getNavItems(name, center){
      const li = document.createElement("li");

      li.setAttribute("class", "item");
      li.textContent = name;
      li.addEventListener("click", (e)=>{
         
          deleteClicked();
          deleteContent(center);
          e.target.classList.toggle("clicked");
          if(name == "Menu"){
              center.appendChild(menuContent());
          }
          else if(name == "Contact"){
              center.appendChild(contactContent());
          }
          else if(name == "Home"){
              center.appendChild(homeContent());
          }
          
      })

      return li;
}

function deleteClicked(){
    var items = document.querySelectorAll(".item");
    items.forEach((item)=>{
        if(item.classList.contains("clicked")){
            item.classList.toggle("clicked");
        }
    })
}

function deleteContent(center){

    center.innerHTML = "";
}

var content = document.getElementById("content");
content.setAttribute("class", "main");
content.appendChild(component());


