// I used JavaScript since on the exercise it was mentioned that php was an option but server side code was prohibited
// which is pretty much a contradiction.

/**
* @param {string} string
* @return {int}
*/
function roundStringToInt(string) {
    // Doesn't support big numbers (power notation would break it) or negative values
    if (string == null || isNaN(string)) return 0;
    const value = parseInt(string);
    if (string.length == 2) return value;
    if (string.length == 1) return value * 10;
    return Math.ceil(parseInt(string.substring(0, 3)) / 10);
}

/**
* @param {string} string
* @return {int}
*/
function stringToPence(string) {
    if (string == null) return;
    // Regex to extract components from the given monetary format
    const regex = /(£?)(\d*)(\.?)(\d*)/;
    const match = string.match(regex);
    if (match == null) return;
    let pounds = match[2] == "" ? "0" : match[2];
    let pence = match[4] == "" ? "0" : match[4];
    // Special case for a unique number that is interpreted as a price in pence
    if ((match[1] !== "£" && match[3] === "") && match[4] == "") {
        pounds = "0";
        pence = match[2] == "" ? "0" : match[2];
    }
    if (pounds === "0") return pence
    return parseInt(pounds) * 100 + roundStringToInt(pence);
}

function coinToString(penceValue) {
    return penceValue >= 100 ? `${penceValue / 100}£` : `${penceValue}p`
}

/**
* @param {string} string
* @return {Object}
*/
function getDecomposition(string) {
    let pence = stringToPence(string);
    const availableCoins = [200, 100, 50, 20, 10, 5, 2, 1];
    let usedCoins = []
    availableCoins.forEach(coin => {
        const divisibility = Math.floor(pence / coin);
        usedCoins.push(divisibility);
        pence -= coin * divisibility;
    });
    return usedCoins.reduce(function (result, field, index) {
        result[coinToString(availableCoins[index])] = field;
        return result;
    }, {});
}




