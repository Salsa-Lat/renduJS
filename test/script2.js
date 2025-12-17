//======================================================================


// Juste des testes, ne pas prendre en compte /!\


//======================================================================


const nav = document.getElementById('navbar');

const hero = document.getElementById('hero');

const product = document.getElementById('product');

const service = document.getElementById('service');

const avantage = document.getElementById('avantage');

const temoignage = document.getElementById('temoignage');

const foot = document.getElementById('foot');

const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    container(product, "Nos Produits", cardProduct);
    container(service, "Nos Services", cardService);
    container(avantage, "Nos Avantages", cardAvantage);
    container(temoignage, "Vos Temoignage", cardTemoignage);



  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));


function container(idSection, title, card) {

  const centerContainer = document.createElement('div');
  centerContainer.classList.add('center-container'),
  idSection.appendChild(centerContainer);

  const h2 = document.createElement('h2');
  h2.innerHTML = title;
  centerContainer.appendChild(h2);

  const container = document.createElement('div');
  container.classList.add('container');
  centerContainer.appendChild(container);

  const cards = document.createElement('div');
  cards.classList.add('cards');
  container.appendChild(cards);
  cards.innerHTML = card;
  
}