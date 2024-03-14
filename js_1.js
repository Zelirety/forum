
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Check if username and password are correct
    if (username === "Ben" && password === "697843") {
        // If correct, display success message and redirect
        window.location.href = "logged_employe.html"; // Redirect to success page
    } else {
        // If incorrect, display error message
        document.getElementById("loginMessage").innerText = "Invalid username or password. Please try again.";
    }
    if (username === "bob" && password === "HgT56*Io;svgFh") {
        // If correct, display success message and redirect
        window.location.href = "logged_admin.html"; // Redirect to success page
    } else {
        // If incorrect, display error message
        document.getElementById("loginMessage").innerText = "Invalid username or password. Please try again.";
    }
});
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
function verifier(){ // fonction exécutée quand on clique sur le bouton
  alert("Erreur !")
};
