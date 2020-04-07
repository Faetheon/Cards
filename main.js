let down = false;
let selected;
let selectedCardIndex;
const offset = [];
const cards = JSON.parse(window.localStorage.getItem("cards")) || [];
const setTextButton = document.getElementById("setText");

cards.forEach((card, index) => {
  document.getElementById("root").append(newCard(...card, index));
});

setTextButton.addEventListener("click", () => {
  if (selected) {
    const text = document.getElementById("text").value;
    selected.childNodes[0].innerText = text;
    cards[selectedCardIndex][2] = text;
    document.getElementById("text").value = "";
  }
});

document.addEventListener("mousemove", e => {
  if (down && e.ctrlKey) {
    selected.style.left = e.x + offset[0] - ((e.x + offset[0]) % 10);
    selected.style.top = e.y + offset[1] - ((e.y + offset[1]) % 10);
  } else if (down) {
    selected.style.left = e.x + offset[0];
    selected.style.top = e.y + offset[1];
  }
});

document.addEventListener("mouseup", e => {
  down = false;
  if (selectedCardIndex !== undefined) {
    cards[selectedCardIndex][0] = selected.style.left;
    cards[selectedCardIndex][1] = selected.style.top;
  }
});

if (cards.length === 0) {
  document.getElementById("root").append(newCard());
  cards.push(["0px", "0px", ""]);
}

window.onbeforeunload = e => {
  window.localStorage.setItem("cards", JSON.stringify(cards));
};
