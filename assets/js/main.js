/**
 * Check if a number is even.
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
    let numberIsEven = false;
    const result = number % 2;

    if (!result) {
        numberIsEven = true;
    }

    return numberIsEven;

    // number % 2 === 0
}

/**
 * Count the number of characters in a string.
 * @param {string} text
 * @returns {number}
 */
function getLength(text) {

    let charLong = 0;

    for (let i = 0; i < text.length; i++) {
        charLong++;
    }

    return charLong;
}

/**
 * Capitalize the first letter of a word and keeps the others in lower case.
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
    const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let capitatFirstChar = 'Argument void';

    if (word === undefined) {
        return capitatFirstChar;
    }

    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
    
        if (char === word[0].toUpperCase()) {
            capitatFirstChar = char;
            break;
        }
    }

    return capitatFirstChar + word.slice(1);
}

/**
 * Count how many even numbers are in an array.
 * @param {number[]} numbers
 * @returns {number}
 */
function countEvens(numbers) {
    let countEven = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (number % 2 === 0) {
            countEven++;
        }
    }

    return countEven;

    // LLamar a la función resuelta
}


/**
 * Repeat the given word a specified number of times.
 * @param {string} word - The word to repeat.
 * @param {number} times - How many times to repeat it.
 * @returns {string}
 */
function repeat(word, times) {
    let repeatWord = word;

    for (let i = 1; i < times; i++) {
        repeatWord += ' ' + word;       
    }

    return repeatWord;
}

/**
 * Reverse the characters in a string.
 * @param {string} text
 * @returns {string}
 */
function reverse(text) {
    let stringNew = '';

    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        stringNew += element;
    }

    return stringNew;
}

/**
 * Check if a element exists in an array.
 * @param {(string|number|boolean)[]} elements
 * @param {string|number|boolean} element
 * @returns {boolean}
 */
function includes(elements, element) {
    
    for (let i = 0; i < elements.length; i++) {
        const word = elements[i];
        
        if (word === element) {
            return true
        }
    }

    return false
}

/**
 * Returns words from the array that are longer than the specified number of characters.
 * @param {string[]} words - The list of words to filter.
 * @param {number} minLength - Minimum number of characters a word must have to be included.
 * @returns {string[]} - Array of words longer than minLength.
 */
function getWordsLongerThan(words, minLength) {
    let listWords = [];

    for (let i = 0; i < words.length; i++) {
        const element = words[i];

        if (element.length >= minLength) {
            listWords.push(element);
        }
    }

    return listWords;
}

/**
 * Return a new array with numbers greater than minValue.
 * @param {number[]} numbers
 * @param {number} minValue
 * @returns {number[]}
 */
function filterGreaterThan(numbers, minValue) {
    let numberGreater = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element > minValue) {
            numberGreater.push(element);
        }        
    }

    return numberGreater;
}

/**
 * Remove all duplicate spaces from a string.
 * @param {string} text
 * @returns {string}
 */
function cleanDuplicateSpaces(text) {
    let stringClean = '';

    for (let i = 0; i < text.length; i++) {
        const element = text[i];

        if (element !== ' ') {
            stringClean += element; 
        }
    }

    return stringClean;
}

/**
 * Join an array of words using 'separator'.
 * @param {string[]} words
 * @param {string} separator
 * @returns {string}
 */
function joinWith(words, separator) {
    let arraySeparator;

    for (let i = 0; i < words.length; i++) {
        const element = words[i];

        if (arraySeparator === undefined) {
            arraySeparator = element;
        }

        arraySeparator += separator;
        arraySeparator += element;
    }

    return arraySeparator;
}

console.log('Is Even:', isEven(5));
console.log('Char Length', getLength('Raf'));
console.log('Capitalize:', capitalize('casamiento'));
console.log('Count Evens:', countEvens([2,4,1,5,6,8,7,13]));
console.log('Repeat:', repeat('Carolina', 3));
console.log('Reverse: ', reverse('el palmar'));
const elements = ['costa', 'mar', 'playa', 'ola', 'sal'];
console.log('Includes: ', includes(elements, 'playa'));
console.log('Words Longer: ', getWordsLongerThan(elements, 4));
const numbers = [3,5,23,7,6,1,9,8,2];
console.log('Filter Greater: ', filterGreaterThan(numbers, 6));
console.log('clean Duplicate Spaces: ', cleanDuplicateSpaces('    Anto n i o   '));
console.log('join With: ', joinWith(elements, '|'));
