console.log("I notice that you are very curious");
alert("Welcome to my first iteration with JS"); 

// Input Name
const firstName= prompt (" Ciao! Qual'è il tuo nome?"); 
document.getElementById("name").innerHTML= firstName; 

// Input LastName
const last= prompt ("E il tuo cognome?"); 
document.getElementById("lastName").innerHTML= last; 

// Input Preferit Color
const color= prompt (" Qual'è il tuo colore preferito?"); 
document.getElementById("favoriteColor").innerHTML= color; 

// Password Generator
let passwordGenerator= "//&&_" + firstName + last + color + "21" + "_%$$";
document.getElementById("password").innerHTML= passwordGenerator; 

// Console
console.log(
	`	
		${firstName}: Nome,
		${last}: Cognome,
		${color}:Colore preferito, 
        ${passwordGenerator}: Password generata  
	`
);