// part 1

const parseText1 = (originalText) => {
  const textLines = originalText.split("\n");
  const calibrationValues = textLines.map(textLineToNumber1);
  return calibrationValues.reduce((acc, value) => acc + value, 0);
};

const textLineToNumber1 = (textLine) => {
  let hasReachedANumeral = false;
  let digit1 = 0;
  let digit2 = 0;
  textLine.split("").forEach((character) => {
    const possibleNumeral = parseInt(character);
    if (!Number.isNaN(possibleNumeral)) {
      if (!hasReachedANumeral) digit1 = possibleNumeral;
      hasReachedANumeral = true;
      digit2 = possibleNumeral;
    }
  });
  return digit1 * 10 + digit2;
};

// part 2

const numberStringConstants = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const stringToNumberMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const parseText2 = (originalText) => {
  const textLines = originalText.split("\n");
  const calibrationValues = textLines.map(textLineToNumber2);
  return calibrationValues.reduce((acc, value) => acc + value, 0);
};

const textLineToNumber2 = (textLine) => {
  let firstNumberInTextLine = "0";
  let firstNumberIndex = textLine.length;

  let lastNumberInTextLine = "0";
  let lastNumberIndex = -1;

  numberStringConstants.forEach((constant) => {
    const constantFirstIndex = textLine.indexOf(constant);
    const constantLastIndex = textLine.lastIndexOf(constant);

    if (constantFirstIndex >= 0 && constantFirstIndex < firstNumberIndex) {
      firstNumberInTextLine = constant;
      firstNumberIndex = constantFirstIndex;
    }

    if (constantLastIndex >= 0 && constantLastIndex > lastNumberIndex) {
      lastNumberInTextLine = constant;
      lastNumberIndex = constantLastIndex;
    }
  });

  const firstNumber = stringToNumberMap[firstNumberInTextLine];
  const lastNumber = stringToNumberMap[lastNumberInTextLine];

  return firstNumber * 10 + lastNumber;
};
