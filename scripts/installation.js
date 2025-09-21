let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.getElementById("installBtn");
  installBtn.style.display = "block";

  installBtn.addEventListener("click", async () => {
    installBtn.style.display = "none";

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Résultat : ${outcome}`);

    deferredPrompt = null;
  });
});

window.addEventListener("appinstalled", () => {
  console.log("PWA installée");
  document.getElementById("installBtn").style.display = "none";
});
