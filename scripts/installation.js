let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");

// Quand on clique sur le bouton
installButton.addEventListener("click", installPWA);

// Écouter l’événement `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

/**
 * Sauvegarde l’événement et affiche le bouton
 */
function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButton.removeAttribute("hidden"); // Affiche le bouton
}

/**
 * Lance le prompt d’installation
 */
function installPWA(evt) {
  deferredInstallPrompt.prompt();
  // Masquer le bouton, on ne peut pas appeler deux fois
  evt.srcElement.setAttribute("hidden", true);

  // Gérer la réponse de l’utilisateur
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log(" Utilisateur a accepté l’installation", choice);
    } else {
      console.log(" Utilisateur a refusé l’installation", choice);
    }
    deferredInstallPrompt = null;
  });
}

// Détecter si l’installation se fait via le menu Chrome
window.addEventListener("appinstalled", logAppInstalled);

function logAppInstalled(evt) {
  console.log("📱 Application installée avec succès.", evt);
}
