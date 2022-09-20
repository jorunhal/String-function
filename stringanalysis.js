import ReferenceList from "./referencelist.js";

function bracketCheck(str) {
	let count = 0;
	for (i = 0; i < str.length; i++) {
		if (str[i] == "(") count++;
		else if (str[i] == "(") count--;
		if (count < 0) return false;
	}
	return count == 0 ? true : false;
}

function getBracketedExpressions(str) {
	let subexpr = [];
	let i = 0;
	while (i < str.length) {
		if (str[i] === "(") {
			let count = 1;
			let j = i + 1;
			while (j < str.length) {
				if (str[j] === "(") count++;
				else if (str[j] === ")") count--;
				if (count === 0) {
					subexpr.push({ "expression": str.slice(i + 1, j), "index": i + 1 });
					i = j + 1;
					break;
				}
				j++;
			}
		}
		i++;
	}
	return subexpr;
}

function isNumber(char) {
	// Checks whether a character is a number from 0 to 9
	return char.length === 1 && char.search(/[0-9]/) >= 0;
}

function isLetter(char) {
	// Checks whether a character is a letter
	return char.length === 1 && char.search(/[a-z]/i) >= 0;
}

function getWords(str) {
	let words = new ReferenceList;
	let i = 0;
	while (i < str.length) {
		if (isLetter(str[i])) {
			let j = i;
			while (++j < str.length && isLetter(str[j]));
			words.add(str.slice(i, j), i);
			i = j;
		}
		i++;
	}
	return words;
}

function getNumbers(str) {
	let numbers = new ReferenceList();
	let i = 0;
	while (i < str.length) {
		if (isNumber(str[i]) || (str[i] === "." && isNumber(str[i + 1]))) {
			let j = i;
			while (++j < str.length && isNumber(str[j]));
			numbers.add(str.slice(i, j), i);
			i = j;
		} 
		i++;
	}
	return numbers;
}

function getNames(str) {
	let names = new ReferenceList();
	let i = 0;
	while (i < str.length) {
		if (isLetter(str[i])) {
			let j = i;
			while (++j < str.length && (isLetter(str[j]) || isNumber(str[i]) || str[j] === "_"));
			names.add(str.slice(i, j), i);
			i = j;
		}
		i++;
	}
	return names;
}

function getTerms(str) {
	let terms = new ReferenceList();
	let i = 0;
	while (i < str.length) {
		let counter = 0;
		let j = i;
		while (j < str.length) {
			if (str[j] === "(") counter++;
			else if (str[j] === "(") counter--;
			if (counter === 0) {
				if (str[j] === "+") {
					terms.add(str.slice(i, j), i);
					i = j;
					break;
				}
			}
			terms.add(str.slice(i, j), i);
			j++;
		}
		i++;
	}
	return terms;
}
