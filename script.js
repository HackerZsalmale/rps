
let robotnyeres = "0";
let tenyeres = "0";
let korok = "0";
let szazalek = "0";
let choosen = "";
let wins = 0; 
let robotWins = 0;
let totalGames = 0;


document.getElementById("rock").onclick = () => {
  choosen = "rock";
  Submit();
};
document.getElementById("paper").onclick = () => {
  choosen = "paper";
  Submit();
};
document.getElementById("scissors").onclick = () => {
  choosen = "scissors";
  Submit();
};

function Submit() {
  totalGames ++;
  const options = ["rock", "paper", "scissors"];
  robot = options[Math.floor(Math.random() * 3)];

  if (robot === choosen) {
    document.getElementById("eredmeny").innerText = "Eredmény: Döntetlen";
  } else if (
    (choosen === "rock" && robot === "scissors") ||
    (choosen === "paper" && robot === "rock") ||
    (choosen === "scissors" && robot === "paper")
  ) {
    document.getElementById("eredmeny").innerText = "Eredmény: Nyertél :D";
    wins++;
  } else {
    document.getElementById("eredmeny").innerText = "Eredmény: Veszítettél :c";
    robotnyeres ++;
  }

  document.getElementById("retry").style.visibility = "visible";

  if (choosen === "rock") {
    choosen = "🗿";
  }
  if (choosen === "paper") {
    choosen = "📜";
  }
  if (choosen === "scissors") {
    choosen = "✂️";
  }
  if (robot === "rock") {
    robot = "🗿";
  }
  if (robot === "paper") {
    robot = "📜";
  }
  if (robot === "scissors") {
    robot = "✂️";
  }

  document.getElementById("te").innerText = `Te Választásod: ${choosen}`;
  document.getElementById("robot").innerText = `Robot Választása: ${robot}`;
  toltes();
}

document.getElementById("retry").onclick = () => {
  choosen = "";
  robot = "";

  document.getElementById("eredmeny").innerText = "Eredmény: ";
  document.getElementById("te").innerText = `Te Választásod: ${choosen}`;
  document.getElementById("robot").innerText = `Robot Választása: ${robot}`;
  szazalek = "0";
  fill = "0";
  wins = "0";
  robotWins = "0";
  totalGames = "0";
  const bar = document.getElementById('progress');
  bar.style.width = szazalek + '%';
  bar.innerText = Math.round(szazalek) + '%';
};

function toltes() {
  const bar = document.getElementById('progress');

  if (totalGames === 0) {
    bar.style.display = 'none';
    return;
  } else {
    bar.style.display = 'block';
  }

  let szazalek = (wins / totalGames) * 100;
  szazalek = Math.min(Math.max(szazalek, 0), 100);

  bar.style.width = szazalek + '%';
  bar.innerText = Math.round(szazalek) + '%';
}

