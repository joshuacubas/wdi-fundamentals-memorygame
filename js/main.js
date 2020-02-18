//console.log("Up and running!");

// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardFour);
let cards=["queen","queen","king", "king"];
let cardsInPlay=[];

const checkForMatch = () => {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

const flipCard = (cardId) => {
	let cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	let cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);
	checkForMatch()
}

flipCard(0);
flipCard(2);