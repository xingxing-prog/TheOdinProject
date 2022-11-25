

const contact = ()=>{
    const menu = document.createElement("div");
    menu.setAttribute("class", "menuContent");

    const head = document.createElement("h2");
    head.textContent = "Contact us:";
    menu.appendChild(head);

    const address = document.createElement("p");
    address.setAttribute("class", "address");
    address.textContent = "Address: 123 braselton park avenue 102";
    menu.appendChild(address);

    const phoneNumber = document.createElement("p");
    phoneNumber.setAttribute("class", "address");
    phoneNumber.textContent ="Phone number: 11223344";
    menu.appendChild(phoneNumber);

    const email = document.createElement("p");
    email.setAttribute("class", "address");
    email.textContent = "email: dumplings@gmail.com";
    menu.appendChild(email);
    
    const hour = document.createElement("p");
    hour.setAttribute("class", "address");
    hour.textContent = "Mon-Sat: 11:00AM - 2:30PM\n 3:00PM-10:00PM";
    menu.appendChild(hour);
    
    
    return menu;
}

export default contact;