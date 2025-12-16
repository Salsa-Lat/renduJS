// SELECT ALL INNERHTML

const nav = document.getElementById('navbar');

const hero = document.getElementById('hero');

const product = document.getElementById('product');

const service = document.getElementById('service');

const avantage = document.getElementById('avantage');

const temoignage = document.getElementById('temoignage');

const list = ["Accueil", "Produits", "Services", "Avantages", "Temoignages"];


// GET THE JSON

const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    // CREATE THE NAVBAR -- logo li button
      
    const logo = document.createElement('p');
    logo.innerHTML = data.nomCommercial;
    //classList
    nav.appendChild(logo);

    const listNav = document.createElement('div');
    //classList
    nav.appendChild(listNav);

    const linkNav = document.createElement('a');
    //classList
    list.forEach(element => {
      linkNav.innerHTML += element;  
    });
    listNav.appendChild(linkNav);

    const button = document.createElement('a');
    //classList
    button.innerHTML = data.texteAppelAction;
    nav.appendChild(button);
    
    
    // CREATE HERO -- slogan p button

    const heroContainer = document.createElement('div');
    //classList
    hero.appendChild(heroContainer);

    const h1 = document.createElement('h1');
    h1.innerHTML = data.nomCommercial;
    //classList
    heroContainer.appendChild(h1);

    const heroDesc = document.createElement('p');
    heroDesc.innerHTML = data.phraseAccroche;
    //classList
    heroContainer.appendChild(heroDesc);

    const heroBtn = document.createElement('a');
    heroBtn.innerHTML = data.texteAppelAction;
    //classList
    heroContainer.appendChild(heroBtn);

    
    // CREATE PRODUCT -- container (h2, p) and cards (name, desc, img)

    const centerContainer = document.createElement('div');
    //classList
    product.appendChild(centerContainer);

    const productTitle = document.createElement('h2');
    productTitle.innerHTML = "Nos Patisserie";
    //classList
    centerContainer.appendChild(productTitle);

    const productContainer = document.createElement('div');
    //classList
    centerContainer.appendChild(productContainer);

    //cards

    data.produits.forEach(cake => {

      const productCards = document.createElement('div');
      //classList
      productContainer.appendChild(productCards);

      const productCardsImage = document.createElement('img');
      //classList
      productCardsImage.src = cake["image-url"];
      productCards.appendChild(productCardsImage);

      const productCardsName = document.createElement('h3');
      //classList
      productCardsName.innerHTML = cake.nom;
      productCards.appendChild(productCardsName);

      const productDesc = document.createElement('p');
      //classList
      productDesc.innerHTML = cake.description;
      productCards.appendChild(productDesc);
      
    });
    
    // CREATE SERVICE -- container (h2, p) and cards (name, desc)

    const serviceCenterContainer = document.createElement('div');
    //classList
    service.appendChild(serviceCenterContainer);

    const serviceTitle = document.createElement('h2');
    serviceTitle.innerHTML = "Nos Services";
    //classList
    serviceCenterContainer.appendChild(serviceTitle);

    const serviceContainer = document.createElement('div');
    //classList
    serviceCenterContainer.appendChild(serviceContainer);

    //cards

    
    // CREATE TEMOIGNAGE -- container (h2, p) and cards (name, exp, comms, note)

    const temoignageCenterContainer = document.createElement('div');
    //classList
    temoignage.appendChild(temoignageCenterContainer);

    const temoignageTitle = document.createElement('h2');
    temoignageTitle.innerHTML = "Vos Temoignages";
    //classList
    temoignageCenterContainer.appendChild(temoignageTitle);

    const temoignageContainer = document.createElement('div');
    //classList
    temoignageCenterContainer.appendChild(temoignageContainer);

    //cards

    
    // CREATE FOOTER -- logo icone - li - companyName - copyright cookie

  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));


  // const prodcutTitle = "lorem";
  // const serviceTitle = "lorem";
  // const avantageTitle = "lorem";
  // const temoignageTitle = "lorem";

  // function section(para, h2) {

  // const centerContainer = document.createElement('div');
  //   //classList
  //   product.appendChild(centerContainer);

  //   const title = document.createElement('h2');
  //   productTitle.innerHTML = h2;
  //   //classList
  //   centerContainer.appendChild(title);

  //   //ici

  //   const container = document.createElement('div');
  //   //classList
  //   centerContainer.appendChild(container);

  //   para.forEach(cake => {

  //     const cards = document.createElement('div');
  //     //classList
  //     container.appendChild(cards);

  //     const productCardsImage = document.createElement('img');
  //     //classList
  //     productCardsImage.src = cake["image-url"];
  //     cards.appendChild(productCardsImage);

  //     const productCardsName = document.createElement('h3');
  //     //classList
  //     productCardsName.innerHTML = cake.nom;
  //     cards.appendChild(productCardsName);

  //     const productDesc = document.createElement('p');
  //     //classList
  //     productDesc.innerHTML = cake.description;
  //     cards.appendChild(productDesc);
      
  //   });    

  // }