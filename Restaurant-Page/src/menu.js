
const menu = ()=>{
    const menu = document.createElement("div");
    let images = ["./menu/barbecue-pork.jpg", "./menu/dumplings.jpg", "./menu/holiday-special-mooncake.jpg"];
    menu.setAttribute("class", "menu");
    addImg(images, menu);

    return menu;
   
}

function addImg(folder, menu){
    
    for(let i=0; i<folder.length; i++){
        let img = document.createElement("img");
        img.src = folder[i]; 
        menu.appendChild(img);
    }
    
}
export default menu;