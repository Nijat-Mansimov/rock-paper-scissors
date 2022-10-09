const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const you = document.querySelector(".you");
const rival = document.querySelector(".rival");
const yenidenBasla = document.querySelector("#butt");

const secimler = ["rock.png", "paper.png", "scissors.png"];
let yourScore = 0;
let rivalScore = 0;
let yourClass = "";

function rivalSil() {
  rival.innerHTML = "";
}

function youlSil() {
  you.innerHTML = "";
}

function checkWinner() {
  if (yourScore == 5) {
    document.body.innerHTML = `<div class="success_container">
    <div class="win-image">
      <img
        src="https://img.icons8.com/arcade/64/000000/experimental-trophy-arcade.png"
      />
    </div>
    <div class="success_message">
      <p>Siz qalibsiniz!</p>
    </div>
    <div class="xbutonu">
      <button onClick="yeniden()" type="submit" id="butt">Yenidən oyna</button>
    </div>
  </div>`;
  } else if (rivalScore == 5) {
    document.body.innerHTML = `<div class="success_container">
    <div class="win-image">
    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-error-security-flaticons-flat-flat-icons.png"/>
    </div>
    <div class="success_message">
      <p>Siz məğlub oldunuz!</p>
    </div>
    <div class="xbutonu">
      <button onClick="yeniden()" type="submit" id="butt">Yenidən oyna</button>
    </div>
  </div>`;
  }
}

function adding() {
  var sekil = secimler[Math.floor(Math.random() * secimler.length)];
  const classN = sekil.split(".")[0];
  rival.innerHTML = `<img style="margin-bottom: 50px; width: 100px;" class="${classN}" src="${sekil}" alt="">`;

  if (classN == "rock" && yourClass == "paper") {
    yourScore++;
    document.querySelector(".your-score").innerHTML = yourScore;
    document.querySelector(".rival-score").innerHTML = rivalScore;
  } else if (classN == "rock" && yourClass == "scissors") {
    rivalScore++;
    document.querySelector(".your-score").innerHTML = yourScore;
    document.querySelector(".rival-score").innerHTML = rivalScore;
  } else if (classN == "paper" && yourClass == "rock") {
    rivalScore++;
    document.querySelector(".your-score").innerHTML = yourScore;
    document.querySelector(".rival-score").innerHTML = rivalScore;
  } else if (classN == "paper" && yourClass == "scissors") {
    yourScore++;
    document.querySelector(".your-score").innerHTML = yourScore;
    document.querySelector(".rival-score").innerHTML = rivalScore;
  } else if (classN == "scissors" && yourClass == "rock") {
    yourScore++;
    document.querySelector(".your-score").innerHTML = yourScore;
    document.querySelector(".rival-score").innerHTML = rivalScore;
  } else if (classN == "scissors" && yourClass == "paper") {
    rivalScore++;
    document.querySelector(".your-score").innerHTML = yourScore;
    document.querySelector(".rival-score").innerHTML = rivalScore;
  }

  setTimeout(rivalSil, 1000);
  setTimeout(youlSil, 1000);
  checkWinner();
}

rock.addEventListener("click", (e) => {
  you.innerHTML = `<img style="margin-bottom: 50px; width: 100px;" class="rock" src="rock.png" alt="">`;
  yourClass = "rock";
  adding();
});

paper.addEventListener("click", (e) => {
  you.innerHTML = `<img style="margin-bottom: 50px; width: 100px;" class="paper" src="paper.png" alt="">`;
  yourClass = "paper";
  adding();
});
scissors.addEventListener("click", (e) => {
  you.innerHTML = `<img style="margin-bottom: 50px; width: 100px;" class="scissors" src="scissors.png" alt="">`;
  yourClass = "scissors";
  adding();
});

function yeniden() {
  window.location.reload();
}
