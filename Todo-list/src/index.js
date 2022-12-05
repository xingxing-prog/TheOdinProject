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

document.querySelector(".content").appendChild(component());

function showNavBarsMobile(){
    let items = document.querySelector(".items");
    let toggle = document.getElementById("toggle");
    toggle.addEventListener("click", (e)=>{
         if(toggle.checked){
            items.style.display = "block";
         }
         else{
            items.style.display = "none";
         }
    })
    

}
showNavBarsMobile();