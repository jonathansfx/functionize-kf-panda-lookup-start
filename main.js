// Kung Fu Panda Character Look Up
let nameH2 = document.getElementById("character-name");
let mainImg = document.getElementById("main-img");
let quote = document.getElementById("quoteHTML");
// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // HTML Variables

  // Test Input Variable and update the page

  if (name === "po" || name === "dragon warrior") {
    setCharacter("Po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    setCharacter("Tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    setCharacter("Mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    setCharacter("Monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    setCharacter(
      "Crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    setCharacter("viper", "I don't need a bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    setCharacter("Shifu", "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    setCharacter(
      "Mr.Ping",
      "We are noodle folk, broth runs through our veins!"
    );
  } else {
    setCharacter("CharacterNotFound", "?????");
  }

  function setCharacter(charName, charQuote) {
    nameH2.innerHTML = charName;
    quote.innerHTML = charQuote;
    mainImg.src = `img/${charName}.png`;
  }
}
