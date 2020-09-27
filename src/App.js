import React, { useState } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';

import { generateDeck, dealCards } from './factories/setup';

import UserHand from './components/UserHand';
import PlayArea from './components/PlayArea';
import OpponentHand from './components/OpponentHand';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #242424;
`;

const App = () => {
  const [cardPool, updateCardPool] = useState( generateDeck() );
  const [userHand, updateUserHand] = useState([]);
  const [opponentHand, updateOpponentHand] = useState([]);
  const [cardsInPlay, updateCardsInPlay] = useState({});
  const [gameState, updateGameState] = useState('start');

  if(gameState === 'start') {
      dealCards({
        deck: cardPool,
        updateCardPool: updateCardPool,
        updateUserHand: updateUserHand, 
        updateOpponentHand: updateOpponentHand
      });

      updateGameState('in progress');
  }



  return (
    <Container>

      <OpponentHand cards={opponentHand} updateOpponentHand={updateOpponentHand} />
      <PlayArea deckArray={cardPool} cardsInPlay={cardsInPlay} />
      <UserHand cards={userHand} updateUserHand={updateUserHand} />

    </Container>
  );
}

export default App;
