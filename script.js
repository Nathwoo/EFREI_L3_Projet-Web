function verifReponses() {
  var div_resultats = document.getElementById("resultats");

  //CREATION DU TITRE
  let res_title = document.createElement("h2");
  res_title.innerHTML = "Résultats";
  div_resultats.append(res_title);

  //CREATION DU SCORE
  var score = 0;
  if (document.getElementById("repQ1").checked) {
    score += 1;
  }
  if (document.getElementById("repQ2").checked) {
    score += 1;
  }
  if (document.getElementById("repQ3").checked) {
    score += 1;
  }
  if (document.getElementById("repQ4").checked) {
    score += 1;
  }
  if (document.getElementById("repQ5").checked) {
    score += 1;
  }
  if (document.getElementById("repQ6").checked) {
    score += 1;
  }
  if (document.getElementById("repQ7").checked) {
    score += 1;
  }
  if (document.getElementById("repQ8").checked) {
    score += 1;
  }
  if (document.getElementById("repQ9").checked) {
    score += 1;
  }
  if (document.getElementById("repQ10").checked) {
    score += 1;
  }
  var doc_score = document.createElement("h3");
  doc_score.innerHTML = "Votre score : " + score + "/10";
  div_resultats.append(doc_score);

  //CREATION DU TABLEAU DE RESULTATS
  var tableau = document.createElement("table");
  tableau.setAttribute("id", "tableau");
  //tableau.setAttribute("class", "tableau");
  div_resultats.append(tableau);

  //EN-TETE DU TABLEAU
  var ligne0 = document.createElement("tr");
  var cellule1 = document.createElement("th");
  var cellule2 = document.createElement("th");
  cellule1.innerHTML = "Questions";
  cellule2.innerHTML = "Points";
  ligne0.append(cellule1);
  ligne0.append(cellule2);
  tableau.append(ligne0);

  //LIGNE 1
  var ligne1 = document.createElement("tr");
  var cellule1L1 = document.createElement("td");
  var cellule2L1 = document.createElement("td");
  cellule1L1.innerHTML = "Quel élément permet de choisir la couleur du texte ?";
  if (document.getElementById("repQ1").checked) {
    cellule2L1.innerHTML = "1";
  } else {
    cellule2L1.innerHTML = "0";
  }
  ligne1.append(cellule1L1);
  ligne1.append(cellule2L1);
  tableau.append(ligne1);

  //LIGNE 2
  var ligne2 = document.createElement("tr");
  var cellule1L2 = document.createElement("td");
  var cellule2L2 = document.createElement("td");
  cellule1L2.innerHTML =
    "Quel élément permet de choisir la couleur de l'arrière plan ?";
  if (document.getElementById("repQ2").checked) {
    cellule2L2.innerHTML = "1";
  } else {
    cellule2L2.innerHTML = "0";
  }
  ligne2.append(cellule1L2);
  ligne2.append(cellule2L2);
  tableau.append(ligne2);

  //LIGNE 3
  var ligne3 = document.createElement("tr");
  var cellule1L3 = document.createElement("td");
  var cellule2L3 = document.createElement("td");
  cellule1L3.innerHTML =
    "Quel élément permet de modifier la police d'écriture ?";
  if (document.getElementById("repQ3").checked) {
    cellule2L3.innerHTML = "1";
  } else {
    cellule2L3.innerHTML = "0";
  }
  ligne3.append(cellule1L3);
  ligne3.append(cellule2L3);
  tableau.append(ligne3);

  //LIGNE 4
  var ligne4 = document.createElement("tr");
  var cellule1L4 = document.createElement("td");
  var cellule2L4 = document.createElement("td");
  cellule1L4.innerHTML = "Comment écrit-on un commentaire ?";
  if (document.getElementById("repQ4").checked) {
    cellule2L4.innerHTML = "1";
  } else {
    cellule2L4.innerHTML = "0";
  }
  ligne4.append(cellule1L4);
  ligne4.append(cellule2L4);
  tableau.append(ligne4);

  //LIGNE 5
  var ligne5 = document.createElement("tr");
  var cellule1L5 = document.createElement("td");
  var cellule2L5 = document.createElement("td");
  cellule1L5.innerHTML =
    "Quel terme est utilisé pour définir les marges extérieurs d'une boîte ?";
  if (document.getElementById("repQ5").checked) {
    cellule2L5.innerHTML = "1";
  } else {
    cellule2L5.innerHTML = "0";
  }
  ligne5.append(cellule1L5);
  ligne5.append(cellule2L5);
  tableau.append(ligne5);

  //LIGNE 6
  var ligne6 = document.createElement("tr");
  var cellule1L6 = document.createElement("td");
  var cellule2L6 = document.createElement("td");
  cellule1L6.innerHTML =
    "Quel terme est utilisé pour définir les marges intérieurs d'une boîte ?";
  if (document.getElementById("repQ6").checked) {
    cellule2L6.innerHTML = "1";
  } else {
    cellule2L6.innerHTML = "0";
  }
  ligne6.append(cellule1L6);
  ligne6.append(cellule2L6);
  tableau.append(ligne6);

  //LIGNE 7
  var ligne7 = document.createElement("tr");
  var cellule1L7 = document.createElement("td");
  var cellule2L7 = document.createElement("td");
  cellule1L7.innerHTML =
    "Quel terme est utilisé pour définir la bordure d'une boîte ?";
  if (document.getElementById("repQ7").checked) {
    cellule2L7.innerHTML = "1";
  } else {
    cellule2L7.innerHTML = "0";
  }
  ligne7.append(cellule1L7);
  ligne7.append(cellule2L7);
  tableau.append(ligne7);

  //LIGNE 8
  var ligne8 = document.createElement("tr");
  var cellule1L8 = document.createElement("td");
  var cellule2L8 = document.createElement("td");
  cellule1L8.innerHTML =
    "Quel élément est utilisé pour controler la façon dont un objet est affiché ?";
  if (document.getElementById("repQ8").checked) {
    cellule2L8.innerHTML = "1";
  } else {
    cellule2L8.innerHTML = "0";
  }
  ligne8.append(cellule1L8);
  ligne8.append(cellule2L8);
  tableau.append(ligne8);

  //LIGNE 9
  var ligne9 = document.createElement("tr");
  var cellule1L9 = document.createElement("td");
  var cellule2L9 = document.createElement("td");
  cellule1L9.innerHTML =
    "Quel élément permet de régler l'épaisseur d'un objet ?";
  if (document.getElementById("repQ9").checked) {
    cellule2L9.innerHTML = "1";
  } else {
    cellule2L9.innerHTML = "0";
  }
  ligne9.append(cellule1L9);
  ligne9.append(cellule2L9);
  tableau.append(ligne9);

  //LIGNE 10
  var ligne10 = document.createElement("tr");
  var cellule1L10 = document.createElement("td");
  var cellule2L10 = document.createElement("td");
  cellule1L10.innerHTML =
    "Quel terme est utilisé pour désigner le fait que la souris passe sur un objet ?";
  if (document.getElementById("repQ10").checked) {
    cellule2L10.innerHTML = "1";
  } else {
    cellule2L10.innerHTML = "0";
  }
  ligne10.append(cellule1L10);
  ligne10.append(cellule2L10);
  tableau.append(ligne10);

  //SUPPRESSION FORMULAIRE
  var formulaire = document.getElementById("formulaire");
  formulaire.remove();

  //AJOUT DES BOUTONS
  var but_recommencer = document.createElement("a");
  var but_reponses = document.createElement("a");
  but_recommencer.setAttribute("href", "formulaire.html");
  but_recommencer.innerText = "Recommencer";
  but_reponses.setAttribute("href", "tableau.html");
  but_reponses.innerText = "Voir les réponses";
  div_resultats.append(but_recommencer);
  div_resultats.append(but_reponses);
}
