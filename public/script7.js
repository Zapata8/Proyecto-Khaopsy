const cicloKael = lottie.loadAnimation({
    container: document.getElementById("ciclokael"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "img/ciclokael.json"
});

document.getElementById("ciclokael").addEventListener("click", function () {
    cicloKael.stop();
    cicloKael.play();
});

// Reproducir / pausar audio
function reproducirAudio() {
    const audio = document.getElementById("audioComic");

    if (!audio) {
        console.log("No se encontró el audio");
        return;
    }

    if (audio.paused) {
        audio.play().catch((error) => {
            console.log("Error al reproducir audio:", error);
        });
    } else {
        audio.pause();
    }
}