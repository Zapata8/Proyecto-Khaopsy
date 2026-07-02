const ciclokael = lottie.loadAnimation({
    container: document.getElementById("ciclokael"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./img/ciclokael.json"
});

document.getElementById("ciclokael").addEventListener("click", () => {
    ciclokael.stop();
    ciclokael.play();
});