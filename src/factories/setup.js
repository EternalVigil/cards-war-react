import { faceValues, suits } from '../constants/cardValues';
import { generateRandomNumber } from '../helpers/number';

export const generateDeck = () => {
	const deck = [];

	for(let i = 0; i < suits.length; i++) {
		for(let j = 0; j < faceValues.length; j++) {
			const card = {
				faceValue: faceValues[j],
				suit: suits[i]
			};
			deck.push(card);
		}
	}

	const shuffledDeck = shuffleDeck(deck);
	
	return shuffledDeck || deck;
};

export const shuffleDeck = (deck) => {
	const shuffledDeck = [];

	while(deck.length > 0) {
		const randomNumber = generateRandomNumber(deck.length);
		const randomCard = deck.splice(randomNumber, 1)[0];
		shuffledDeck.push(randomCard);
	}

	return(shuffledDeck);
};

export const dealCards = ({ deck, updateCardPool, updateUserHand, updateOpponentHand }) => {

	let myCard = true;

	for(let i = 0; i < 20; i++) {

		const card = deck[deck.length - 1];

		if(myCard === true) {

			updateUserHand(prevState => {
				prevState.push(card);
				return prevState;
			});

			myCard = false;
		} else {
			updateOpponentHand(prevState => {
				prevState.push(card);
				return prevState;
			});

			myCard = true;
		}

		deck.pop();
	
	}

};
