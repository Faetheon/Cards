const newCard = (x = 0, y = 0, message = "", index = 0) => {
  const cardIndex = index;
  const card = document.createElement("div");
  const cardText = document.createElement("div");
  cardText.className = "cardText";
  cardText.innerText = message;
  card.append(cardText);
  card.className = "card";
  card.tabIndex = 0;
  card.style.left = x;
  card.style.top = y;

  card.addEventListener("mousedown", e => {
    down = true;
    selected = card;
    selectedCardIndex = cardIndex;
    offset[0] = card.offsetLeft - e.x;
    offset[1] = card.offsetTop - e.y;
  });

  card.addEventListener("click", e => {
    if (e.shiftKey) {
      cards.push([0, 0, ""]);
      document.getElementById("root").append(newCard());
    }
  });

  return card;
};
