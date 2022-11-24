import crab from "./photos/crab.jpg";

const home = ()=>{
    const homeContent = document.createElement("div");
    homeContent.setAttribute("class", "homeContent");

    const brief = document.createElement("div");
    brief.setAttribute("class", "brief");
    
    const image = new Image(280, 280);
    image.src = crab;
    homeContent.appendChild(image);


    const head = document.createElement("h2");
    head.setAttribute("class", "h2");
    head.textContent ="The most authentic and delicious dumpling in America";
    brief.appendChild(head);

    const background = document.createElement("p");
    background.setAttribute("class", "background");
    background.textContent = "Every dumpling is carefully weighted and handmade and stuffed with top quality pork and the freshest vegetables in a blend of seasonings. In the mean time, \
    it adds the freshest ginger and green onion, every bite is a refresh entertainment.";

    brief.appendChild(background);
    homeContent.appendChild(brief);

    return homeContent;

}

export default home;