// part 1

interface Draw {
  [color: string]: number;
}

interface GameMetadata {
  draws: Draw[];
  id: number;
}

const sumPossibleGameIds = (gamesText) => {
  const gamesAsMetadata = gamesText.split("\n").map(parseGame);
  const possibleGames = gamesAsMetadata.filter((gameMetadata) =>
    gameMetadata.draws.every(checkDraw)
  );
  return possibleGames.reduce((acc, gameMetadata) => acc + gameMetadata.id, 0);
};

const checkDraw = (draw: Draw) => {
  if (Object.values(draw).reduce((acc, val) => acc + val, 0) > 39) return false;
  if (draw.blue > 14 || draw.green > 13 || draw.red > 12) return false;

  return true;
};

const parseGame = (gameTextLine) => {
  const [idText, colorText] = gameTextLine.split(": ");
  const gameId = parseInt(idText.split(" ")[1]);

  const draws = colorText.split("; ").map(parseDraw);

  return { draws, id: gameId };
};

const parseDraw = (drawText) => {
  const colorTexts = drawText.split(", ");
  return colorTexts.reduce((acc, colorText) => {
    const [count, color] = colorText.split(" ");
    return { ...acc, [color]: parseInt(count) };
  }, {});
};

// part 2

const sumMinimumGamePowers = (gamesText) => {
  const gamesAsMetadata = gamesText.split("\n").map(parseGame);
  return gamesAsMetadata.reduce(
    (acc, gameMetadata) => acc + findGameMinimumPower(gameMetadata.draws),
    0
  );
};

const findGameMinimumPower = (draws: Draw[]) => {
  const minimumPowerDraw = draws.reduce(
    (acc, draw) => ({
      blue: Math.max(acc.blue, draw.blue ?? 0),
      green: Math.max(acc.green, draw.green ?? 0),
      red: Math.max(acc.red, draw.red ?? 0),
    }),
    {
      blue: 0,
      green: 0,
      red: 0,
    }
  );
  return Object.values(minimumPowerDraw).reduce((acc, count) => acc * count, 1);
};
