var numCase = 0;
var compteur = 1



fetch("data.json").then(function (response) {
    response.json().then(function (data) {
        data.forEach(function (donnee) {
            document.querySelector('div.analogie').innerHTML += "<section class=\"container" + donnee.sec + "\" id=\"a" + donnee.num + "\"><div class='container'><h2 class=\"" + donnee.class +
                " analogie\">Si j'étais " + donnee.analogie + ",je serais..<h2 class='h2p1'><br><br>" +
                donnee.valeurAnalogie + "</h2></h2><div class=\"donnees\"><img src=\"" + donnee.photo + "\" alt=\"" + donnee.alt + "\"><p>" + donnee.arguments + "</p></div></div></section>"
        })

        var envoyer = document.querySelector(".send");
        envoyer.addEventListener("click", function () {
            var urlVisitee =
                "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=tania.almeida-gomes&courriel=" +
                document.querySelector("input#mail").value +
                "&message=Si j'étais " +
                document.querySelector("input#mot").value +
                ", je serais" +
                document.querySelector("input#analogie").value +
                "car" +
                document.querySelector("input#car").value +
                "Image proposée : " +
                document.querySelector("input#picture").value;

            fetch(urlVisitee).then(function (response) {
                response.json().then(function (data) {
                    console.log("Réponse reçue : ");
                    console.log(data);
                    alert(data.message);
                });
            });

            document.querySelector('div.analogie').innerHTML += "<section class=\"containerrose\" id=\"p\"><div class='container'><h2 class=\"rose analogie\">Si j'étais " + document.querySelector("input#mot").value + ",je serais..<h2 class='h2p1'><br><br>" +
            document.querySelector("input#analogie").value + "</h2><div class=\"donnees\"><img src=\"" + document.querySelector("input#picture").value + "\"><p>" + document.querySelector("input#car").value + "</p></div></div></section>";

        })

    })
})



    //var numCase=0;
    //var compteur=1

    //data.forEach(function(element){

    //document.querySelector('.liste-analogies').innerHTML=document.querySelector('.liste-analogies').innerHTML+'<section class="sec" id="sec'+numCase+'"><h2>Si j’étais ' + "<span>" + element["analogie"] + "</span>" + ', je serais ' + "<span>" + element["valeurAnalogie"] + "</span>" + '.</h2>\n<img class="images images'+numCase+'" src="' + element["image"] + '"> \n<p class="texte">' + element["explication"] + '</p>\n<a href="#sec'+compteur+'" class="bas"><img src="img/bas.png"></a></section>'

    //numCase++
    / compteur++
//})
function popupAppear() {
    console.log("yesss");
    document.querySelector(".overlay").style.display = "block";
}
function popupDesappear() {
    document.querySelector(".overlay").style.display = "none";
}
document.querySelector(".bouton-popup").addEventListener('click', popupAppear)
document.querySelector(".btnclose").addEventListener('click', popupDesappear)










//https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=tania.almeida-gomes&courriel=&message=test






















































































































