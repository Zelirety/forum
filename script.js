/*var password = document.getElementById('mdp');

function verifier(){ // fonction exécutée quand on clique sur le bouton
	if (password.value=='azert'){ // Si la case 1 a été cochée
		alert("OK, vous pouvez passer")
       
    }
        else {
      alert("Erreur")
        }
}*/

/* <a href="salle1.html" >*/
// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
var password = document.getElementById('mdp');

function verifier(){ // fonction exécutée quand on clique sur le bouton
	if (password.value=='franklin'){ // Si la case 1 a été cochée
		alert("OK, vous pouvez passer !")
  window.location.href = "page2.html";}

      else{
        alert("Erreur !")
      }
    }

