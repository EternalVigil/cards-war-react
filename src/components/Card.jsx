import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 9vw;
	height: 12vw;
	color: #ececec;
	border: 1px solid yellow;
	border-radius: 8px;
	transition: all 0.5s;

	:hover {
		transform: scale(1.1);
	}
`;

const Card = ({cardData}) => {
	return(
		<Container>
			<span>
				{ cardData && cardData.faceValue }
			</span>
			<span>
				{ cardData && cardData.suit }
			</span>
		</Container>
	);
};

export default Card;
