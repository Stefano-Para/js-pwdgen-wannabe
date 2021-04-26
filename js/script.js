/* Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

var nomeUtente = prompt('come ti chiami?');
console.log(nomeUtente);
document.getElementById('nome-utente').innerHTML = nomeUtente;


var cognomeUtente = prompt('quale è il tuo cognome?');
console.log(cognomeUtente);
document.getElementById('cognome-utente').innerHTML = cognomeUtente;


var coloreUtente = prompt('quale è il tuo colore preferito?');
console.log(coloreUtente);
document.getElementById('colore-utente').innerHTML = coloreUtente;


var passwordCreated = nomeUtente + cognomeUtente + coloreUtente + 21;
console.log(passwordCreated);
document.getElementById('password-creata').innerHTML = passwordCreated;
