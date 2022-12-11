import createTask from "./createTodo.js";


const inbox = ()=>{

    const inboxContent = document.createElement("div");
    inboxContent.setAttribute("class", "inboxContent");

    const head = document.createElement("h2");
    head.innerHTML = "Inbox";
    head.setAttribute("class", "head");

    /*const add = document.createElement("div");
    add.setAttribute("class", "addTask");
    const addIcon = document.createElement("span");
    addIcon.setAttribute("class", "addIcon");
    addIcon.innerHTML = "+";
    
    const addContent = document.createElement("span");
    addContent.setAttribute("class", "addContent");
    addContent.innerHTML = "Add Task";

    
    
    add.appendChild(addIcon);
    add.appendChild(addContent);*/
    
    
    inboxContent.appendChild(head);
    //inboxContent.appendChild(add);



    return inboxContent;
}

export default inbox;