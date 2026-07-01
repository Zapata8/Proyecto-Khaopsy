const lamparaAnimada = lottie.loadAnimation({
    container: document.getElementById("lampara"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "img/lampara.json"
});

document.getElementById("lampara").addEventListener("click", function () {
    lamparaAnimada.stop();
    lamparaAnimada.play();
});

// Reproducir / pausar audio con imagen
function reproducirAudio() {
    const audio = document.getElementById("audioComic");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}