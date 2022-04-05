function removeItem(cards, position) {
     cards.splice(position, 1);
    return cards
};

function removeItemFromTop(cards) {
    cards.pop();
      return cards;
};


  const cards = [1];

//   console.log(removeItem(cards, 2));
console.log(removeItemFromTop(cards))