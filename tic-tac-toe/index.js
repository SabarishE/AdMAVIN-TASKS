const boxes = Array.from(document.getElementsByClassName("box"));

const spaces = [null, null, null, null, null, null, null, null, null];

const restartBtn = document.getElementById("restart");

const value_O = "O";
const value_X = "X";
let currentPlayer = value_O;

const Board = () => {
  boxes.forEach((box, ind) => {
    box.addEventListener("click", boxclicked);
  });
};

Board();

// ---function for value input(X or O) into the boxes

function boxclicked(e) {
  const Id = e.target.id;
  console.log("box-clicked", Id);
  console.log(spaces);
  if (!spaces[Id]) {
    spaces[Id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      alert(`${currentPlayer} wins!!!`);
      return;
    }
    if (isDraw()) {
      alert("it's a Draw");
    }
    currentPlayer = currentPlayer == value_O ? value_X : value_O;
  }
}
restartBtn.addEventListener("click", () => {
  spaces.forEach((item, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });

  currentPlayer = value_O;
});

// const elements = document.querySelectorAll(".box");

function isDraw() {
  spaces.every((item) => {
    if (item === "O" || item === "x") {
      return true;
    } else {
      return false;
    }
  });
}

function hasPlayerWon(player) {
  //from top left >>> left-right, left-bottom, and diagonal

  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      console.log(`${player} wins up top`);
      return true;
    }
    if (spaces[3] === player && spaces[6] === player) {
      console.log(`${player} wins on the left`);
      return true;
    }
    if (spaces[4] === player && spaces[8] === player) {
      console.log(`${player} wins on the diagonal`);
      return true;
    }
  }
  //from bottom-right >>> to top right and to bottom left

  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      console.log(`${player} wins on the right`);
      return true;
    }
    if (spaces[7] === player && spaces[6] === player) {
      console.log(`${player} wins on the bottom`);
      return true;
    }
  }

  //from centre cell >>> middle horizontal,middle vertical,diagonal from top right to bottom left

  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      console.log(`${player} wins on the middle horizontal`);
      return true;
    }
    if (spaces[1] === player && spaces[7] === player) {
      console.log(`${player} wins on the middle vertical`);
      return true;
    }
    if (spaces[2] === player && spaces[6] === player) {
      console.log(`${player} wins on the digonal from right to left`);
      return true;
    }
  }
}
