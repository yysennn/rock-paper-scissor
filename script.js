const choices = ["batu", "gunting", "kertas"];
let userScore = 0;
let compScore = 0;

// Load audio
const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.mp3");
const clickSound = new Audio("click.mp3");

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    clickSound.play();

    const userChoice = button.dataset.choice;
    const compChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(userChoice, compChoice);

    const resultEl = document.getElementById("result");
    resultEl.classList.remove("show");
    void resultEl.offsetWidth;

    resultEl.textContent =
      `Kamu pilih ${userChoice}, Komputer pilih ${compChoice}. ${result}`;
    resultEl.classList.add("show");

    document.getElementById("score").textContent =
      `Skor: Kamu ${userScore} - ${compScore} Komputer`;

    if (result.includes("Menang")) {
      winSound.play();
    } else if (result.includes("Kalah")) {
      loseSound.play();
    }
  });
});

function getResult(user, comp) {
  if (user === comp) return "Seri!";
  if (
    (user === "batu" && comp === "gunting") ||
    (user === "gunting" && comp === "kertas") ||
    (user === "kertas" && comp === "batu")
  ) {
    userScore++;
    return "Kamu Menang! 🎉";
  } else {
    compScore++;
    return "Kamu Kalah 😢";
  }
}
