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
    nav.appendChild(logo);

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    const li = document.createElement('li');
    list.forEach(element => {
      li.innerHTML += element;  
    });
    ul.appendChild(li);

    const button = document.createElement('a');
    button.innerHTML = data.texteAppelAction;
    nav.appendChild(button);
    
    
    // CREATE HERO -- slogan p button

    

    
    // CREATE PRODUCT -- container (h2, p) and cards (name, desc, img)
    
    // CREATE SERVICE -- container (h2, p) and cards (name, desc)
    
    // CREATE TEMOIGNAGE -- container (h2, p) and cards (name, exp, comms, note)
    
    // CREATE FOOTER -- logo icone - li - companyName - copyright cookie

  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));
