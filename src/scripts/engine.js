const teclasPiano = document.querySelectorAll(".teclas-piano .tecla");

let audio = new Audio("src/tunes/a.wav");

const playTune = (tecla) => {
    audio.src = `src/tunes/${tecla}.wav`;
    audio.play();
};

teclasPiano.forEach((tecla) => {
    tecla.addEventListener("click", () => playTune(tecla.dataset.key));
});