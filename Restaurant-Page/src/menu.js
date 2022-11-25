
import pork from "./photos/steam-dumplings.jpg";
import lobster from "./photos/lobster-dumplings.jpg";
import dimsum from "./photos/dimsum.jpg";
import soup from "./photos/soup-dumpling.jpg";
import hanamaki from "./photos/hanamaki.jpg";
import lotusFry from "./photos/lotus-mushroom-shrimp-stirFry.jpg";
import wonton from "./photos/wonton-soup.jpg";
import bun from "./photos/steam-bun.jpg";
import sticky from "./photos/sesame-sticky-rice-ball.jpg";
import crayfish from "./photos/spicy-crayfish.jpg";





const menu = ()=>{
    const menu = document.createElement("div");
   
    let pics=[];

    const porkDumplings = {
        name:"steam-dumplings",
        src:pork,
        price: "$14.35",
        ingredient:"ingredient: pork, shrimp, flour, cooking oil, ground ginger, ground onion, salt"
    };

    const lobsterDumplings = {
        name:"lobster-dumplings",
        src:lobster,
        price: "$14.99",
        ingredient:"ingredient: lobster, flour, cooking oil, ground ginger, ground green onion, salt"
    };

    const beefDumplings ={
        name:"beef potstickers",
        src: dimsum,
        price:"$12.99",
        ingredient:"ingredient: beef, celery, flour, water, cooking oil, ground green onion, salt"
    };

    const soupDumplings ={
        name:"soup dumplings",
        src:soup,
        price:"$15.59",
        ingredient:"ingredient:flour, water, pork, crab, broth,ginger, green onion, cook wine, salt"
    };

    const huajuan={
        name:"Chinese huajuan",
        src:hanamaki,
        price:"$9.99",
        ingredient:"ingredient: flour, water, purple sweet potatoes, yeast, sugar"
    };

    const steamBun = {
        name:"mangTou",
        src:bun,
        price:"$8.56",
        ingredient:"ingredient: flour, water, yeast, sugar"
    };

    const wontonDumplings ={
        name:"wonton",
        src:wonton,
        price:"$15.99",
        ingredient:"ingredient: flour, shrimp, pork, green leaf, ginger, green onion"
    };

    const stickyBall = {
        name:"sesame sticky ball",
        src:sticky,
        price: "$8.55",
        ingredient:"ingredient: sticky-rice-flour, red bean, sesame, sugar"
    };

    const lotusFryDish = {
        name:"stirFry lotus mushroom shrimp",
        src:lotusFry,
        price:"$15.59",
        ingredient:"ingredient: lotus, pork, black mushroom, green vegetable, white mushroom, red ground pepper"
    };

    const crayfishDish = {
        name:"stirFry spicy crayfish",
        src:crayfish,
        price:"$25.99",
        ingredient:"ingredient: crayfish, ground garlic, cooking oil, green onion, ginger, cook wine, sichuang pepper"
    }



    

    pics.push(porkDumplings);
    pics.push(lobsterDumplings);
    pics.push(beefDumplings);
    pics.push(soupDumplings);
    pics.push(huajuan);
    pics.push(steamBun);
    pics.push(wontonDumplings);
    pics.push(stickyBall);
    pics.push(lotusFryDish);
    pics.push(crayfishDish);

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
       }
    
    return menu;
    
   
}


export default menu;