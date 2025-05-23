// Variabel som lagrar dagens datum
let idag = new Date();
 
// Funktion som visar datumet
function visaDatum() {
  let datumText = idag.toLocaleDateString("sv-SE");
  document.getElementById("datumruta").textContent = datumText;

}
