// part 1

const parseText = (originalText) => {
    const textLines = originalText.split('\n')
    const calibrationValues = textLines.map(textLineToNumber)
    return calibrationValues.reduce((acc, value) => acc + value, 0)
}

const textLineToNumber = (textLine) => {
    let hasReachedANumeral = false;
    let digit1 = 0;
    let digit2 = 0;
    textLine.split('').forEach(character => {
        const possibleNumeral = parseInt(character);
        if (!Number.isNaN(possibleNumeral)) {
            if (!hasReachedANumeral) digit1 = possibleNumeral;
            hasReachedANumeral = true;
            digit2 = possibleNumeral;
        }
    })
    return digit1 * 10 + digit2
}