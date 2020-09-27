import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0 20%;
	width: 100%;
	border: 1px solid red;

`;

const UserHand = ({cards}) => {
	return(
		<Container>
			{
				cards.map((card, index) => {
					return <Card key={`${index}-${card.faceValue}-${card.suit}`} cardData={card} />;
				})
			}
		</Container>
	);
};

export default UserHand;
