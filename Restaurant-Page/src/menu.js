
import pork from "./photos/steam-dumplings.jpg";
import dumplings from "./photos/lobster-dumplings.jpg";



const menu = ()=>{
    const menu = document.createElement("div");
    
    let images = [];
    images.push(pork);
    images.push(dumplings);
    
    menu.setAttribute("class", "menu");

    for(let i=0; i<images.length; i++){
        let image = document.createElement("img");
        image.src = images[i]; 
        menu.append(img);
    }
    

    return menu;
   
}


export default menu;