// returns a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function playGame(game, doors) {
  console.log ("=============");
  console.log ("Game #" + game);
  prizeDoor = getRandomInt(doors);
  console.log ("The prize is behind door " + prizeDoor);
  if (prizeDoor == 1) {
    // Players guessed correctly, Monty chooses a random door to not reveal
    hiddenDoor = getRandomInt(doors - 1) + 1;
  }
  else {
    // Players guessed wrong, Monty reveals all doors except the prize door
    hiddenDoor = prizeDoor
  }
  console.log ("Monty opens all doors except 1 and " + hiddenDoor);
  console.log ("Freddy switches his guess to door " + hiddenDoor);
  console.log ("Stanley stays with door 1");
  if (prizeDoor == 1) {
    console.log ("Stanley Wins!!!!");
    stanleyScore++;
  }
  else if (prizeDoor == hiddenDoor) {
    console.log ("Freddy Wins");
    freddyScore++;
  }
  else {
    console.log ("ERROR: Something has gone badly wrong");
  }
}

/*************************************************************/
/**                      BEGIN                              **/
/*************************************************************/

if (process.argv.length != 4) {
  console.log ("Usage: node monty.js <num_doors> <num_games>");
  process.exit(1);
}

const num_doors = process.argv[2];
const num_games = process.argv[3];

console.log ("Welcome to the Monty Hall Game");
console.log ("We will play " + num_games + " games")
console.log ("We will play with " + num_doors + " doors")
console.log ("All players guess Door 1 initially");
console.log ("Freddy Flipflop always changes his guess");
console.log ("Stanley Standfast always sticks with his initial guess");
var freddyScore = 0;
var stanleyScore = 0;
for (var g = 0; g < num_games; g++) {
  playGame(g, num_doors);
}

console.log ("---------------------");
console.log ("After " + num_games + " games");
console.log ("Fred Flipflop won " + freddyScore + " games");
console.log ("Stanley Standfast won " + stanleyScore + " games");
