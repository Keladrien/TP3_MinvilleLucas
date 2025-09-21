let deferredPrompt;
const installBtn = document.getElementById("installBtn");

// Par défaut on cache le bouton
installBtn.style.display = "none";

// Détecte si l'appli est déjà installée
if (
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true
) {
  installBtn.style.display = "none";
} else {
  // Attend l'événement beforeinstallprompt
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "block"; // Affiche le bouton
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Résultat utilisateur: ${outcome}`);

    if (outcome === "accepted") {
      console.log("L'utilisateur a installé l'application");
      installBtn.style.display = "none"; // Cache le bouton
    }
    deferredPrompt = null;
  });

  // Cache aussi le bouton si l'appli est installée après coup
  window.addEventListener("appinstalled", () => {
    console.log("PWA installée !");
    installBtn.style.display = "none";
  });
}
