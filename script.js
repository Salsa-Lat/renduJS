// SELECT ALL INNERHTML

const nav = document.getElementById('navbar');

const hero = document.getElementById('hero');

const product = document.getElementById('product');

const service = document.getElementById('service');

const avantage = document.getElementById('avantage');

const temoignage = document.getElementById('temoignage');

const foot = document.getElementById('foot');

const list = ["Accueil", "Produits", "Services", "Avantages", "Temoignages"];

const listHref = ["hero", "product", "service", "avantage", "temoignage"];


// GET THE JSON

const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    // CREATE THE NAVBAR -- logo li button
      
    const logo = document.createElement('a');
    logo.href = "";
    logo.innerHTML = data.nomCommercial;
    logo.classList.add('logo-nav');
    nav.appendChild(logo);

    const linkNav = document.createElement('div');
    linkNav.classList.add('navListDiv');
    list.forEach((element, i) => {
      linkNav.innerHTML += `<a href="#${listHref[i]}" class="navList">` + element + "</a>";  
    });
    nav.appendChild(linkNav);

    const button = document.createElement('a');
    button.href = "";
    button.classList.add('btn');
    button.innerHTML = data.texteAppelAction;
    nav.appendChild(button);
    
    
    // CREATE HERO -- slogan p button

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('center-hero');
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
    heroBtn.classList.add('btn');
    heroContainer.appendChild(heroBtn);

    
    // CREATE PRODUCT -- container (h2, p) and cards (name, desc, img)

    const centerContainer = document.createElement('div');
    centerContainer.classList.add('center-container');
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

    data.services.forEach(serv => {
      
      const serviceCards = document.createElement('div');
      //classList
      serviceContainer.appendChild(serviceCards);
      
      const serviceName = document.createElement('h3');
      serviceName.innerHTML = serv.nom;
      serviceCards.appendChild(serviceName);

      const serviceDesc = document.createElement('p');
      //classList
      serviceDesc.innerHTML = serv.description;
      serviceCards.appendChild(serviceDesc);

    });


    // CREATE AVANTAGES -- container (h2, p) and cards (name, exp, comms, note)

    const avantageCenterContainer = document.createElement('div');
    //classList
    avantage.appendChild(avantageCenterContainer);

    const avantageTitle = document.createElement('h2');
    avantageTitle.innerHTML = "Nos Avantages";
    //classList
    avantageCenterContainer.appendChild(avantageTitle);

    const avantageContainer = document.createElement('div');
    //classList
    avantageCenterContainer.appendChild(avantageContainer);

    //cards

    data.avantagesClients.forEach(avantage => {
      
      const avantageCards = document.createElement('div');
      //classList
      avantageContainer.appendChild(avantageCards);

      const avantagePara = document.createElement('p');
      avantagePara.innerHTML = avantage;
      avantageCards.appendChild(avantagePara);

    });

    
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

    data.temoignages.forEach(temoi => {
      
      const temoignageCards = document.createElement('div');
      //classList
      temoignageCenterContainer.appendChild(temoignageCards);

      const temoignageName = document.createElement('h3');
      temoignageName.innerHTML = temoi.prenom;
      temoignageCards.appendChild(temoignageName);

      const temoignageExp = document.createElement('b');
      temoignageExp.innerHTML = temoi.typeExperience;
      temoignageCards.appendChild(temoignageExp);

      const comms = document.createElement('p');
      comms.innerHTML = temoi.commentaire;
      temoignageCards.appendChild(comms);

      const rating = document.createElement('p');
      rating.innerHTML = temoi.note + "/5";
      temoignageCards.appendChild(rating);

    });

    
    // CREATE FOOTER -- logo icone - li - companyName - copyright cookie

    const topFoot = document.createElement('div');
    foot.appendChild(topFoot);;

    const leftFoot = document.createElement('div');
    topFoot.appendChild(leftFoot);

    const logoFooter = document.createElement('a');
    //classList
    logoFooter.innerHTML = data.nomCommercial;
    leftFoot.appendChild(logoFooter);

    const icones = document.createElement('div');
    //classList
    leftFoot.appendChild(icones);

    const icone = document.createElement('p');
    icone.innerHTML = `
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-x-twitter"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-youtube"></i>
    `;
    icones.appendChild(icone);

    const rightFoot = document.createElement('div');
    //classList
    topFoot.appendChild(rightFoot);

    const footList = document.createElement('a');
    //classList
    list.forEach(element => {
      footList.innerHTML += element;  
    });
    rightFoot.appendChild(footList);

    const bottomFoot = document.createElement('div');
    //classList
    foot.appendChild(bottomFoot);

    const copyright = document.createElement('p');
    //classList
    copyright.innerHTML = `<i class="fa-regular fa-copyright"></i> 2025 - Salsabila LATASSE`;
    bottomFoot.appendChild(copyright);

    const cookie = document.createElement('div');
    //classList
    cookie.innerHTML = `
    <a href="">Politique de confidentialité</a>
    <a href="">Condition d'utilisation</a>
    <a href="">Paramètres des cookies</a>
    `;
    bottomFoot.appendChild(cookie);

  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));