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

    

  })
  .catch(error => console.error('Erreur lors de la récupération des données :', error));


  function container(data, idSection) {
    const centerContainer = document.createElement('div');
    
  }