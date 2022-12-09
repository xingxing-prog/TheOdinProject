import "./style.css";

//import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/js/fontawesome"
//import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/solid"

import inboxContent from './inbox.js';
import createTask from "./createTodo.js";


function component(){
    const element = document.createElement("div");
    element.setAttribute("class", "start");
    const div = document.createElement("div");
    div.appendChild(inboxContent());
    document.getElementById("inbox").classList.add("clicked"); 

    

    const tasks = document.querySelectorAll(".sidebar");
    tasks.forEach((task)=>{
        task.addEventListener("click", (e)=>{
            deleteClicked();
            task.classList.toggle("clicked");
            div.innerHTML = null;

            console.log(e.target.textContent);
            if(e.target.textContent == "Inbox"){
                div.appendChild(inboxContent());
            }
           
        });
    });

    element.appendChild(div);

    return element;
}

document.querySelector(".content").appendChild(component());

function deleteClicked(){
    var tasks = document.querySelectorAll(".sidebar");
    tasks.forEach((task)=>{
        if(task.classList.contains("clicked")){
            task.classList.toggle("clicked");
        }
    });
}

function showNavBarsMobile(){
    let items = document.querySelector(".items");
    let toggle = document.getElementById("toggle");
    
    
    toggle.addEventListener("click", (e)=>{
         if(!toggle.checked){
            items.style.display = "none";
         }
         else{
            items.style.display = "block";
         }
    })
    

}
showNavBarsMobile();

