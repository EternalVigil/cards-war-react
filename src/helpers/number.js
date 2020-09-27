export const generateRandomNumber = (upperLimit) => {
	const random = Math.floor( Math.random() * upperLimit);
	return random;
};
