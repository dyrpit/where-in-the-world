export const getPopulationNumberWithComas = (value: number): string => {
	const valueArr = value.toString().split('').reverse();
	const lenght = valueArr.length;

	const resultArr = [];

	for (let i = 0; i <= lenght - 1; i++) {
		if (i % 3 === 0 && i) {
			resultArr.push(',');
		}

		resultArr.push(valueArr[i]);
	}

	return resultArr.reverse().join('');
};
