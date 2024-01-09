// part 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sumPossibleGameIds = function (gamesText) {
    var gamesAsMetadata = gamesText.split("\n").map(parseGame);
    var possibleGames = gamesAsMetadata.filter(function (gameMetadata) {
        return gameMetadata.draws.every(checkDraw);
    });
    return possibleGames.reduce(function (acc, gameMetadata) { return acc + gameMetadata.id; }, 0);
};
var checkDraw = function (draw) {
    if (Object.values(draw).reduce(function (acc, val) { return acc + val; }, 0) > 39)
        return false;
};
var parseGame = function (gameTextLine) {
    var _a = gameTextLine.split(":"), idText = _a[0], colorText = _a[1];
    var gameId = parseInt(idText.split(" ")[1]);
    var draws = colorText.split("; ").map(parseDraw);
    return { draws: draws, id: gameId };
};
var parseDraw = function (drawText) {
    var colorTexts = drawText.split(", ");
    return colorTexts.reduce(function (acc, colorText) {
        var _a;
        var _b = colorText.split(" "), color = _b[0], count = _b[1];
        return __assign(__assign({}, acc), (_a = {}, _a[color] = count, _a));
    }, {});
};
var example = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";
console.log(sumPossibleGameIds(example));
