const inbox = ()=>{

    const inboxContent = document.createElement("div");
    inboxContent.setAttribute("class", "inboxContent");

    const head = document.createElement("h2");
    head.innerHTML = "Inbox";
    head.setAttribute("class", "head");
    
    inboxContent.appendChild(head);



    return inboxContent;
}

export default inbox;