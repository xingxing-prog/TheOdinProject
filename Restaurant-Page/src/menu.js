

const menu = ()=>{
    const menu = document.createElement("div");
    let images = ["./barbecue-pork.jpg", "./dumplings.jpg", "./holiday-special-mooncake.jpg"];
    menu.setAttribute("class", "menu");

    for(let i=0; i<images.length; i++){
        let img = document.createElement("img");
        img.src = images[i]; 
        menu.appendChild(img);
    }
    

    return menu;
   
}


export default menu;