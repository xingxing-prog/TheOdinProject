import './style.css';
import homeContent from './home.js';
import menuContent from './menu.js';
import contactContent from './contact.js';


function component(){
    const element = document.createElement("main");
    const home = document.getElementById("home");
    const div = document.createElement("div");
    home.classList.add("clicked");
    div.appendChild(homeContent());

    const items = document.querySelectorAll(".item");
    items.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            deleteClicked();
            item.classList.toggle("clicked");
            div.innerHTML = null;
            if(e.target.innerHTML == "Menu"){
                div.appendChild(menuContent());
            }
            else if(e.target.innerHTML == "Contact"){
                div.appendChild(contactContent());
            }
            else{
                div.appendChild(homeContent());
            }
        });
    });

    element.appendChild(div);

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


