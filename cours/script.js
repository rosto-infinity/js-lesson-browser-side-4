//XMLHttpRequest 

function reqListener() {
    // console.log(this.responseText);
}


let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();
//----------------
//  FECTH
//----------------
// fetch("mon lien", "objet d'options")
// .then((response) => {
//     //console.log(response)
// })
// .catch((error)=>console.log(error));


// fetch("https://api.blablagues.net/?rub=blagues")
// .then((response) => {
//     console.log(response)
// })
// .catch((error)=>console.log(error));

// fetch("data.txt")
//     .then((res) => {
//         console.log(res);
//     })
//-----------pour les code de res  https://developer.mozilla.org/fr/docs/Web/HTTP/Status

//    Codes de réponse HTTP
// Les codes de statut de réponse HTTP indiquent si une requête HTTP a été exécutée avec succès ou non. Les réponses sont regroupées en cinq classes :

// Les réponses informatives (100 - 199),
// Les réponses de succès (200 - 299),
// Les messages de redirection (300 - 399),
// Les erreurs du client (400 - 499),
// Les erreurs du serveur (500 - 599).

fetch("data.text")
    .then((res) => res.text())
    .then((data) => console.log(data));

fetch("data.json")
    .then((res) => res.text())
    .then((data) => console.log(data));