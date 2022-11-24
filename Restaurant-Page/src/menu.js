
import pork from "./photos/steam-dumplings.jpg";
import lobster from "./photos/lobster-dumplings.jpg";
import dimsum from "./photos/dimsum.jpg";
import hanamaki from "./photos/hanamaki.jpg";




const menu = ()=>{
    const menu = document.createElement("div");
   
    let pics=[];

    const porkDumplings = {
        name:"steam-dumplings",
        src:pork,
        price: "$14.35",
        ingredient:"pork, shrimp, flour, cooking oil, ground ginger, ground onion, salt"
    };

    const lobsterDumplings = {
        name:"lobster-dumplings",
        src:lobster,
        price: "$14.99",
        ingredient:"lobster, flour, cooking oil, ground ginger, ground green onion, salt"
    };

    const beefDumplings ={
        name:"beef potstickers",
        src: dimsum,
        price:"$12.99",
        ingredient:"beef, celery, flour, water, cooking oil, ground green onion, salt"
    };

    const huajuan={
        name:"Chinese huajuan",
        src:hanamaki,
        price:"$9.99",
        ingredient:"flour, water, purple sweet potatoes, yeast, sugar"
    }

    pics.push(porkDumplings);
    pics.push(lobsterDumplings);
    pics.push(beefDumplings);
    pics.push(huajuan);

    menu.setAttribute("class", "menu");

    for(let i=0; i<pics.length; i++){

        let figure = document.createElement("figure");
        figure.setAttribute("class", "food");
    
        let image = new Image(250, 200);
   
        image.src = pics[i].src;
        image.style.borderRadius = "70%";
    
        let foodName = document.createElement("p");
        foodName.textContent = pics[i].name + "  " + pics[i].price;

        let foodDescription = document.createElement("p");
        foodDescription.textContent = pics[i].ingredient;

        figure.appendChild(image);
        figure.appendChild(foodName);
        figure.appendChild(foodDescription);
        
        menu.appendChild(figure); 
    
        return menu;
    }
   
}


export default menu;