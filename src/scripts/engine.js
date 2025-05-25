const teclasPiano = document.querySelectorAll(".teclas-piano .tecla");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let teclasMapeadas = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (tecla) => {
    audio.src = `src/tunes/${tecla}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${tecla}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
};

teclasPiano.forEach((tecla) => {
    tecla.addEventListener("click", () => playTune(tecla.dataset.key));
    teclasMapeadas.push(tecla.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(teclasMapeadas.includes(e.key)){
        playTune(e.key)
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    teclasPiano.forEach(tecla => tecla.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);