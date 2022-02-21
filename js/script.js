console.log("I notice that you are very curious");
alert("Welcome to my first iteration with JS"); 

const firstName= prompt (" Ciao! Qual'è il tuo nome?"); 
document.getElementById("name").innerHTML= firstName; 

const last= prompt ("E il tuo cognome?"); 
document.getElementById("lastName").innerHTML= last; 

const color= prompt (" Qual'è il tuo colore preferito?"); 
document.getElementById("favoriteColor").innerHTML= color; 

let passwordGenerator= firstName + last + color;
document.getElementById("password").innerHTML= passwordGenerator;