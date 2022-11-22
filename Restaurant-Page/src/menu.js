
import pork from "./photos/steam-dumplings.jpg";
import dumplings from "./photos/lobster-dumplings.jpg";



const menu = ()=>{
    const menu = document.createElement("div");

    let pics = [];
    pics.push(pork);
    pics.push(dumplings);
    
    menu.setAttribute("class", "menu");

    /*let image = document.createElement("img");
    image.src = dumplings;
    menu.appendChild(image);*/

    for(let i=0; i<pics.length; i++){
        //let image = document.createElement("img");
        let image = new Image(350, 350);
        image.src = pics[i];
        image.style.borderRadius = "50%";
        menu.appendChild(image);

    }



    

    return menu;
   
}


export default menu;