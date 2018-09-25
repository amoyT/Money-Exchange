// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency < 0)
        return {};
    if (currency > 9999)
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    let res = {};
    let curCopy = currency;
    let curValue = { "H": 50, "Q": 25, "D": 10, "N": 5, "P": 1 };
    for (curType in curValue) {
        if (curCopy === 0)
            break;
        let numbOfPaper = Math.floor(curCopy / curValue[curType]);
        if (numbOfPaper === 0)
            continue;
        res[curType] = numbOfPaper;
        curCopy -= numbOfPaper * curValue[curType];
    }
    return res;
}

