

const menu = ()=>{
    const menu = document.createElement("div");
    let images = [url("./menu/barbecue-pork.jpg"), url("./menu/dumplings.jpg"), url("./menu/holiday-special-mooncake.jpg")];
    menu.setAttribute("class", "menu");

    for(let i=0; i<folder.length; i++){
        let img = document.createElement("img");
        img.src = folder[i]; 
        menu.appendChild(img);
    }
    

    return menu;
   
}


export default menu;