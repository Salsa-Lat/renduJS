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

const avantageDesc = ["Une large sélection de pâtisseries artisanales, élaborées avec des ingrédients de qualité pour un plaisir gourmand et authentique.", "Des ingrédients soigneusement sélectionnés, de première qualité et majoritairement locaux pour révéler des saveurs authentiques etnaturelles.", "Une ambiance chaleureuse et conviviale, pensée pour votre confort, et une expérience gourmande unique à savourer."];

const emoticon = ["😋", "👌", "🥰"];

const pfp = ["assets/cat.jpg", "assets/lucat.jpg", "assets/sillycat.jpg"];

// let count = 0;

// GET THE JSON

const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    // for (let i = 0; i < data.avantagesClients.length; i++) {
    //   count++;
    // }

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
    centerContainer.appendChild(productTitle);

    const productContainer = document.createElement('div');
    productContainer.classList.add('container');
    centerContainer.appendChild(productContainer);

    //cards

    data.produits.forEach(cake => {

      const productCards = document.createElement('div');
      productCards.classList.add('cards');
      productContainer.appendChild(productCards);

      const productCardsImage = document.createElement('img');
      productCardsImage.src = cake["image-url"];
      productCards.appendChild(productCardsImage);

      const productCardsName = document.createElement('h3');
      productCardsName.innerHTML = cake.nom;
      productCards.appendChild(productCardsName);

      const productDesc = document.createElement('p');
      productDesc.innerHTML = cake.description;
      productCards.appendChild(productDesc);
      
    });

    const btnMore = document.createElement('a');
    btnMore.classList.add('btn');
    btnMore.innerHTML = "Voir Plus";
    centerContainer.appendChild(btnMore);

    
    // CREATE SERVICE -- container (h2, p) and cards (name, desc)

    const serviceCenterContainer = document.createElement('div');
    serviceCenterContainer.classList.add('center-container');
    service.appendChild(serviceCenterContainer);

    const serviceTitle = document.createElement('h2');
    serviceTitle.innerHTML = "Nos Services";
    serviceCenterContainer.appendChild(serviceTitle);

    const serviceContainer = document.createElement('div');
    serviceContainer.classList.add('container');
    serviceCenterContainer.appendChild(serviceContainer);

    //cards

    data.services.forEach(serv => {
      
      const serviceCards = document.createElement('div');
      serviceCards.classList.add('service-cards');
      serviceContainer.appendChild(serviceCards);
      
      const serviceName = document.createElement('h3');
      serviceName.innerHTML = serv.nom;
      serviceCards.appendChild(serviceName);

      const serviceDesc = document.createElement('p');
      serviceDesc.innerHTML = serv.description;
      serviceCards.appendChild(serviceDesc);

      const buttonCommand = document.createElement('a');
      buttonCommand.classList.add('btn');
      buttonCommand.innerHTML = "Commander";
      serviceCards.appendChild(buttonCommand);

    });


    // CREATE AVANTAGES -- container (h2, p) and cards (name, exp, comms, note)

    const avantageCenterContainer = document.createElement('div');
    avantageCenterContainer.classList.add('center-container');
    avantage.appendChild(avantageCenterContainer);

    const avantageTitle = document.createElement('h2');
    avantageTitle.innerHTML = "Nos Avantages";
    avantageCenterContainer.appendChild(avantageTitle);

    const avantageContainer = document.createElement('div');
    avantageContainer.classList.add('container');
    avantageCenterContainer.appendChild(avantageContainer);

    //cards

    data.avantagesClients.forEach((avantage, index) => {
      
      const avantageCards = document.createElement('div');
      avantageCards.classList.add('avantage-cards');
      avantageContainer.appendChild(avantageCards);

      const avantageImg = document.createElement('p');
      avantageImg.classList.add('avantage-image');
      avantageImg.innerHTML = emoticon[index];
      avantageCards.appendChild(avantageImg);

      const avantageTitle = document.createElement('h3');
      // avantageTitle.innerHTML = `Avantage ${count + 1}`;
      avantageTitle.innerHTML = avantage;
      avantageCards.appendChild(avantageTitle);

      const avantagePara = document.createElement('p');
      avantagePara.innerHTML = avantageDesc[index];
      avantageCards.appendChild(avantagePara);

    });

    const btnMoreAvantage = document.createElement('a');
    btnMoreAvantage.classList.add('btn');
    btnMoreAvantage.innerHTML = "Voir Plus";
    avantageCenterContainer.appendChild(btnMoreAvantage);

    
    // CREATE TEMOIGNAGE -- container (h2, p) and cards (name, exp, comms, note)

    const temoignageCenterContainer = document.createElement('div');
    temoignageCenterContainer.classList.add('center-container');
    temoignage.appendChild(temoignageCenterContainer);

    const temoignageTitle = document.createElement('h2');
    temoignageTitle.innerHTML = "Vos Temoignages";
    temoignageCenterContainer.appendChild(temoignageTitle);

    const temoignageContainer = document.createElement('div');
    temoignageContainer.classList.add('container');
    temoignageCenterContainer.appendChild(temoignageContainer);

    //cards

    data.temoignages.forEach((temoi, index) => {
      
      const temoignageCards = document.createElement('div');
      temoignageCards.classList.add('temoignage-cards');
      temoignageContainer.appendChild(temoignageCards);

      const topTemoi = document.createElement('div');
      topTemoi.classList.add('top-temoi');
      temoignageCards.appendChild(topTemoi);

      const imageTemoi = document.createElement('img');
      imageTemoi.classList.add('image-temoi');
      imageTemoi.src = pfp[index];
      topTemoi.appendChild(imageTemoi);

      const rightTopTemoi = document.createElement('div');
      topTemoi.appendChild(rightTopTemoi);

      const temoignageName = document.createElement('h3');
      temoignageName.innerHTML = temoi.prenom;
      rightTopTemoi.appendChild(temoignageName);

      const temoignageExp = document.createElement('b');
      temoignageExp.innerHTML = temoi.typeExperience;
      rightTopTemoi.appendChild(temoignageExp);

      const rating = document.createElement('p');
      rating.innerHTML = temoi.note + "/5";
      rightTopTemoi.appendChild(rating);

      const comms = document.createElement('p');
      comms.innerHTML = temoi.commentaire;
      temoignageCards.appendChild(comms);

    });

    const btnMoreTemoignage = document.createElement('a');
    btnMoreTemoignage.classList.add('btn');
    btnMoreTemoignage.innerHTML = "Voir Plus";
    temoignageCenterContainer.appendChild(btnMoreTemoignage);

    
    // CREATE FOOTER -- logo icone - li - companyName - copyright cookie

    const topFoot = document.createElement('div');
    topFoot.classList.add('top-foot');
    foot.appendChild(topFoot);;

    const leftFoot = document.createElement('div');
    leftFoot.classList.add('left-foot');
    topFoot.appendChild(leftFoot);

    const logoFooter = document.createElement('a');
    logoFooter.href = '#hero';
    logoFooter.classList.add('logo-nav');
    logoFooter.innerHTML = data.nomCommercial;
    leftFoot.appendChild(logoFooter);

    const icones = document.createElement('div');
    icones.classList.add('icones-align');
    icones.innerHTML = `
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-x-twitter"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-youtube"></i>
    `;
    leftFoot.appendChild(icones);

    const footList = document.createElement('div');
    footList.classList.add('foot-list');
    list.forEach((element, i) => {
      footList.innerHTML += `<a href="#${listHref[i]}" class="navList">` + element + "</a>";  
    });
    topFoot.appendChild(footList);

    const downFootLogo = document.createElement('p');
    downFootLogo.classList.add('down-logo');
    downFootLogo.innerHTML = data.nomCommercial;
    foot.appendChild(downFootLogo);

    const bottomFoot = document.createElement('div');
    bottomFoot.classList.add('bottom-foot');
    foot.appendChild(bottomFoot);

    const copyright = document.createElement('p');
    copyright.innerHTML = `<i class="fa-regular fa-copyright"></i> 2025 - Salsabila LATASSE`;
    bottomFoot.appendChild(copyright);

    const cookie = document.createElement('div');
    cookie.classList.add('cookie-align');
    cookie.innerHTML = `
    <a href="" class="cookie">Politique de confidentialité</a>
    <a href="" class="cookie">Condition d'utilisation</a>
    <a href="" class="cookie">Paramètres des cookies</a>
    `;
    bottomFoot.appendChild(cookie);

  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));