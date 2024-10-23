const choice = {
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmdqhES9AEhEouS4qL5-hi0HMeHCTA3a6LA&s",
  },
  rock: {
    name: "rock",
    img: "https://games.ccusean.com/img/games/rock-scissors-paper/rock.png",
  },
  paper: {
    name: "paper",
    img: "https://games.ccusean.com/img/games/rock-scissors-paper/paper.png",
  },
};

// console.log(choice);

const array = Object.keys(choice);
// console.log(array);

console.log(array.length);

const choices = ["arra", "bbbb", "dddd"];

const arrasy = choices.keys();

for (let key of arrasy) {
  console.log(key);
}
