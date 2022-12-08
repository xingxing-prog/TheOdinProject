import "./style.css";
//import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/solid"

function component(){
    const element = document.createElement("div");
    element.setAttribute("class", "start");
    
    const tasks = document.querySelectorAll(".sidebar");
    tasks.forEach((task)=>{
        task.addEventListener("click", (e)=>{
            deleteClicked();
            task.classList.toggle("clicked");
            console.log(e.target);
        });
    })

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

