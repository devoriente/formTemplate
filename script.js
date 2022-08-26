// 1 - Je sélectionne et stocke tous les éléments nécessaires
const form = document.getElementById('formulaire');
console.log(form);
const prenom = document.getElementById('prenom');
console.log(prenom);
const nom = document.getElementById('nom');
console.log(nom);
const email = document.getElementById('email');
console.log(email);
const message = document.getElementById('message');
console.log(message);


//Je dois supprimer les mesage d'erreur à chaque envois du formulaire
const msgError = document.querySelectorAll('.error');
console.log(msgError);

//Je dois afficher un message de succès
const titre = document.getElementById('titre');
console.log(titre);


//Je détecte la validation du formulaire
//(e) représente l'événement
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('formulaire envoyé');

//Je récupère les valeurs de chacun des inputs >>> .trim() est un niveau de sécurité pour ne pas mettre un espace
const prenomValue = prenom.value.trim();
console.log(prenomValue, "prenom");
const nomValue = nom.value.trim();
console.log(nomValue, "nom");
const emailValue = email.value.trim();
console.log(emailValue, "email");
const messageValue = message.value.trim();
console.log(messageValue, "message");

//Je dois supprimer les mesage d'erreur à chaque envois du formulaire

    //Amélioration de l'Expérience Utilisateur (UX)
    //Tous les messages d'erreur sont invisibles
    msgError.forEach(error =>{
        error.classList.add('invisible');
    });



//Je vérifie les informations de l'utilisateur >>> LENGTH correspond au nombre de caractère que rentre l'utilisateur
if(prenomValue.length < 2 || prenomValue.length > 10){
    console.log('erreur prénom');
    //Apparition du message erreur
    prenom.nextElementSibling.classList.remove('invisible');
}else if(nomValue.length < 3 || nomValue.length > 15){
    console.log('erreur nom');
    //Apparition du message erreur
    nom.nextElementSibling.classList.remove('invisible');
}else if(messageValue.length < 10 || messageValue.length > 100){
    console.log('erreur message');
    //Apparition du message erreur
    message.nextElementSibling.classList.remove('invisible');
}else{
    console.log('succès');
    //J'intègre un message de succès
    titre.innerText = "Votre message a bien été envoyé !";
    //Suppression du formulaire
    form.remove();
};

});//Fermeture de form.addEventListener('submit', function(e){


