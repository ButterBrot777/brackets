module.exports = function check(str, bracketsConfig) {
    let pairs = {};
    bracketsConfig.forEach(elem => {
        pairs[elem[0]] = elem[1];
    }); // transform array into object
    let result = [];
    let brackets = str.split('');
    for (let i = 0; i < str.length; i++) {
        let lastBracket = result[result.length - 1]; // to control last symbol in stack
        if( pairs[lastBracket] === brackets[i] ) {
            result.pop();
        } else {
            result.push(brackets[i]);
        }
    }
    return result.length === 0;
}
