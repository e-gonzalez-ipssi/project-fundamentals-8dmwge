export default class Elephant {
  constructor(
    name = "",
    birth = "",
    specie = "",
    sex,
    image = "",
    currentTeam = "",
    note = "",
    myTeam
  ) {
    this.myTeam = myTeam;
    this._id = myTeam.getMembers().length + 1;
    this._name = name;
    this._image = image;
    this._note = note;
    this._birth = birth;
    this._specie = specie;
    this._sex = sex;
    this._currentTeam = currentTeam;
    this._position = "allier droit";
    this._teethProtector = false;
    this._earsProtector = false;
    this._captain = false;
  }

  updatePostion(e) {
    // Définir la _position de la class courante passée en paramètre
  }

  positionSelect() {
    let array = [
      "ailier droit",
      "ailier gauche",
      "pointe",
      "arrière centre",
      "gardien"
    ];
    // Créer un élément select
    let selectList = document.createElement("select");
    // Ajouter au select la class .form-select
    selectList.classList = "card-body";
    // Pour chaque position...
    for (let i = 0; i < array.length; i++) {
      // Créer un élément option
      const option = document.createElement("option");
      // Définir la value de l'élément option courrant
      option.value = array[i];
      // Définir le text de l'élément option courrant
      option.text = array[i];
      // Ajouter l'option au select
      selectList.appendChild(option);
    }

    // Définir l'action à effectuer au onchange du select
    // Retourner le select
    return selectList;
  }

  buildImage() {
    // Créer un élément div
    let image = document.createElement("div");
    // Ajouter les class .card-image et .text-center
    image.classList = "card-image text-center";
    // Créer un élément img
    let img = document.createElement("img");
    // Créer un élément figure
    let fig = document.createElement("figure");
    // Ajouter à la balise figure les class .avatar et .avatar-xl
    fig.classList = "avatar avatar-x1";
    // Définir la src de l'élément image créé
    img.setAttribute("src", this._image);
    // Ajouter la class .img-responsive à l'élément img
    img.classList = "img-responsive";
    // Ajouter l'img à la figure
    fig.appendChild(img);
    // Ajouter la figure à l'élément div
    image.appendChild(fig);
    // Retourner l'élément div
    return image;
  }

  buildHeader() {
    // Cérer un élément div
    let header = document.createElement("div");
    // Ajouter les class .card-header et .text-center
    header.classList = "card-header text-center";
    // Créer un élément div pour le titre
    let title = document.createElement("div");
    // Ajouter au titre les class .card-title et .h5
    title.classList = "card-title h5";
    // Définir le text de l'émément titre avec le nom de l'éléphant
    title.innerHTML = this._name;
    // Créer un élément div pour le sous-titre
    let sousTitre = document.createElement("div");
    // Ajouter au sous-titre les class .card-subtitle et .text-gray
    sousTitre.classList = "card-subtitle text-gray";
    // Ajouter le titre à l'élément div
    header.appendChild(title);
    // Dans le cas où la date d'anniversaire est définie...
    if (this._birth) {
      // Définir le text du sous-titre sous la forme « Née en 1976 »
      sousTitre.innerHTML = `Né${
        this._sex && this._sex === "Male" ? "" : "e"
      } en  ${this._birth}`;
    }
    // Ajouter le sous-titre à la div parente
    title.appendChild(sousTitre);
    // retourner le div
    return header;
  }

  onCheckboxChange(attr, className) {
    // Inverser la valeur de l'attribut de type booléen (tip => true === !false && false === !true)
    // Mettre à jour l'éléphant de la team
  }

  newCheckbox(title, className, funct) {
    // Créer un élément label
    // Ajouter la class .form-switch
    // Créer un élément input
    // Définir le type de l'input
    // Ajouter la class passée en paramètre
    // Définir la fonction au onchange passée en paramètre
    // Créer un élément i
    // Ajouter à l'élément i la class .form-icon
    // Définir le text label avec le titre passé en paramètre
    // Ajouter l'input au label
    // Ajouter l'icone au label
    // Retourner le label
  }

  buildBodyCard() {
    // Créer un élément de type article
    let body = document.createElement("div");
    // Ajouter à l'article la class .card-body
    body.classList = "card-body";
    // Créer un élément paragraph
    let par = document.createElement("p");

    // Créer un tableau d'objets selon le format [{ label: 'Mon label', value: 'Ma value'}] contenant les labels
    let object = [];
    // Espèce, Sexe, Équipe actuelle, Note
    object.push({ label: "Espece", value: this._specie });
    object.push({ label: "Sexe", value: this._sex });
    object.push({ label: "Équipe actuelle", value: this._currentTeam });
    object.push({ label: "Note", value: this._note });

    // Pour chaque élément du tableau... (tip = forEach)
    object.forEach(element => {
      console.log(element);
      // ajouter le HTML au paragraph (tip = innerHTML)
      par.innerHTML += `<div><span class="text-gray h6">${element.label +
        ": "}</span>${element.value}</div>`;
    });

    // Ajouter le paragraph à l'article
    body.appendChild(par);

    // Ajouter un élément select des positions (ailier, gardien...) à l'élément article
    body.appendChild(this.positionSelect());
    // Créer 3 checkbox pour les options Capitaine, Protections d'oreilles et Protège dents
    // TODO refactoriser
    // Ajouter les 3 checkbox à l'article

    // Retourner l'article
    return body;
  }

  /**
   * 1.
   */
  create() {
    console.log("create");
    // Sélectionner l'élément du DOM avec la class .elephants
    const domElephants = document.querySelector(".elephants");
    // Créer une nouvelle div
    let div = document.createElement("div");
    // Lui ajouter les class .column .col-4 .col-lg-12
    div.classList = "column col-4 col-lg-12";
    // Créer un élément HTML de type article
    let article = document.createElement("article");
    // Lui ajouter la class .card
    article.classList = "card";
    // Lui attribuer un attribut data-id (tip = setAttribute)
    article.setAttribute("data-id", this._id);
    // Contruire un élément image pour la card
    let image = this.buildImage();
    // Contruire un élément header pour la card
    let header = this.buildHeader();
    // 2. Contruire un élément body pour la card
    let body = this.buildBodyCard();
    // Ajouter chaque élément contruit à la card (image, header, body) (tip = appendChild)
    article.appendChild(image);
    article.appendChild(header);
    article.appendChild(body);
    // Ajouter ma card à ma div
    div.appendChild(article);
    // Ajouter ma div dans l'élément .elepants du DOM (tip = appendChild)
    domElephants.appendChild(div);
  }
}
