//console.log("Up and running!");

// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardFour);
let cards=[
	{
		"rank": "queen" ,
		"suit": "hearts",
		"cardImage": "images/queen-of-hearts.png"
	
	},
		{
		"rank": "queen" ,
		"suit": "diamonds",
		"cardImage": "images/queen-of-diamonds.png"
	
	},	
	{
		"rank": "king",
		"suit": "hearts",
		"cardImage": "images/king-of-hearts.png"
	
	},	
	{
		"rank": "king",
		"suit": "diamonds",
		"cardImage":"images/king-of-diamonds.png"	
	}

];
let cardsInPlay=[];

const checkForMatch = () => {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

const flipCard = (cardId) => {
	let cardOne = cards[cardId].rank;
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	let cardTwo = cards[cardId].rank;
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch()
}

 flipCard(0);
 flipCard(2);