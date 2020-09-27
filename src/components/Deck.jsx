import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	width: 100%;
	border: 1px solid white;
`;

const Play = ({ deckArray }) => {
	return(
		<Container>
			DECK
		</Container>
	);
};

export default Deck;