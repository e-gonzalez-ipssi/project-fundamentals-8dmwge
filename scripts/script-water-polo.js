import Team from "./Classes/Team.js";
import Elephant from "./Classes/Elephant.js";
import data from "../Data/data.js";

const newElephant = document.querySelector("#add");
const createTeam = document.querySelector("#validate");
const modalValidation = document.querySelector("#modal");
const randomElephantAPI = "http://82.165.22.111:80/public/elephants/random";

function getRandomElephant() {
  return data[Math.floor(Math.random() * data.length)];
}

function checked(data) {
  // Retourner un string vide si data est égale à "Unavailable"
  return data === "Unavailable" ? "" : data;
}

// Initialiser une nouvelle équipe grâce à la class Team
let myTeam = new Team();

// À l'ajout d'un nouvel éléphant... (événement click)
newElephant.addEventListener("click", function(e) {
  // Gérer le loader sur le bouton (tip = class 'loading')
  newElephant.classList.add("loading");

  // Récupérer un éléphant au hasard grâce à l'API
  let data = getRandomElephant();
  const {
    name,
    affiliation: currentTeam,
    species,
    sex,
    dob: birth,
    image,
    note
  } = data;

  let nouvelElephant = new Elephant(
    name,
    checked(birth),
    species,
    sex,
    image,
    currentTeam,
    note,
    myTeam
  );

  if (myTeam.getMembers().length < 5) {
    nouvelElephant.create();
    myTeam.addMember(nouvelElephant);
  }

  newElephant.classList.remove("loading");
});

// Gérer le cas où la réponse est ok

// Initialiser une nouvelle instance de class Elephant avec les paramètres nécéssaires

// Vérifier si l'équipe n'est pas au complet grâce à une méthode de la class Team

// Créer un élément HTML éléphant grâce à une méthode de la class Elephant

// Ajouter un membre à mon équipe

// Gérer le loader dans la méthode finally()

// 3. Gérer la validation de l'équipe
// Sélectionner la couleur, la stocker dans une variable
// Construire un tableau contenant l'ensemble des membres de l'équipe
// Afficher le tableau dans la modal

/**
 * Gestion de la modal
 */
window.addEventListener("hashchange", function() {
  if (window.location.hash === "#close") {
    modalValidation.classList.remove("active");
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
});
