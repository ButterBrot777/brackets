module.exports = function check(str, bracketsConfig) {
    let brackets = str.split('');
    if(brackets.length % 2 !== 0){return false};
    let openBrackets = [];
    let closeBrackets = [];
    for( let i =0; i < bracketsConfig.length; i++){
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);

    }
    console.log('brackets: ', brackets);
    let stack = [];

    for(let i=0; i < brackets.length; i++){
        console.log(`brackets ${i} = `, brackets[i]);
        if(openBrackets.includes(brackets[i])){
            if (closeBrackets.indexOf(brackets[i]) === stack[stack.length - 1]) {
                console.log('asdfasdfbjkasfjkhsghkj');
                // console.log(`closeBrackets.indexOf(brackets[`,i,`]) = `, closeBrackets.indexOf(brackets[i]));
                // console.log(`stack[stack.length - 1]`, stack[stack.length - 1])

                stack.pop()
                console.log('stack.pop: ', stack)
            }
            else stack.push(openBrackets.indexOf(brackets[i]));
            console.log(`stack.push ${i}`, stack);
        }

        else if(closeBrackets.includes(brackets[i])){
            if(stack[stack.length - 1] === closeBrackets.indexOf(brackets[i])){
                stack.pop();
                console.log(`stack.pop ${i}`, stack);


            }

            else {
                console.log('last return', stack);
                return false;
            }
            // console.log('for openBrackets: stack: ', stack);



        }

    }
    // console.log('stack.length: ', stack.length);
    console.log('length of stack: ', stack.length);
    return stack.length === 0;


}

// check('[]()', [['(', ')'], ['[', ']']]);
