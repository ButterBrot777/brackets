module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 5) {return false};
    var length = str.length / 2;
    for (var i = 0; i <= length; ++i) {
        str = str
            .replace('()', '')
            .replace('[]', '')
            .replace('{}', '')
            .replace('||', '');
        // console.log(`parents ${i} = `, str)
    }
    // console.log('parents: ', str);
    (str === '') ? console.log('ok') : console.log('false');

    if (str === '') {
        return true;
    } else  {
        return false
    }

}
