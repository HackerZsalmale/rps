let choosen = "";

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
  } else {
    document.getElementById("eredmeny").innerText = "Eredmény: Veszítettél :c";
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
}

document.getElementById("retry").onclick = () => {
  choosen = "";
  robot = "";

  document.getElementById("eredmeny").innerText = "Eredmény: ";
  document.getElementById("te").innerText = `Te Választásod: ${choosen}`;
  document.getElementById("robot").innerText = `Robot Választása: ${robot}`;
};
