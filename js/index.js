var mailList = ["pippo@gmail.com","pluto@gmail.com","paperino@gmail.com", "giugurtah@gmail.com"];
var userMail = prompt("Inserire laa propria email");
var emailOutcamePlaceHolder = document.getElementById("emailOutcame");
var emailIsPresent = false;
console.log(mailList);
console.log(userMail);

for (var i = 0; i < mailList.length; i++) {
    if (userMail == mailList[i]) {
        emailIsPresent = true;
    }
}

if (emailIsPresent) {
    emailOutcamePlaceHolder.innerHTML = "La tua mail è in lista puoi accedere. <br> Ora giochiamo a dadi:";
    var user1Dice = parseInt((Math.random() * 6) +1);
    var user2Dice = parseInt((Math.random() * 6) +1);
    var gameOutcomePlaceHolder = document.getElementById("gameOutcome");
    document.getElementById("diceOutcome").innerHTML = "Il dado dell'utente 1 ha dato risultato: " + user1Dice + "<br>" + "Il dado dell'utente 2 ha dato risultato: " + user2Dice;
    if (user1Dice > user2Dice) {
        gameOutcomePlaceHolder.innerText = "Utente 1 ha vinto!!";
    } else if (user2Dice > user1Dice) {
        gameOutcomePlaceHolder.innerText = "Utente 2 ha vinto!!";
    } else {
        gameOutcomePlaceHolder.innerText = "C'è stato un pareggio!!";
    }

} else {
    emailOutcamePlaceHolder.innerText = "La tua mail non è in lista non puoi accedere";
}
