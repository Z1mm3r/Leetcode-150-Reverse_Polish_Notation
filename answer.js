var evalRPN = function(tokens) {

    //Stack to hold passed numbers
    let numberStack = []

    //Could also use set to have set.has(symbol)
    let symbols = {
        '+': true,
        '-': true,
        '*': true,
        '/': true,
    }

    //Helper function to keep code clean
    let calculate = (operand,leftVal,rightVal) =>{
        switch (operand){
            case '+':
                return leftVal + rightVal;
            case '-':
                return leftVal - rightVal;
            case '*':
                return leftVal * rightVal;
            case '/':
                let val = leftVal / rightVal;
                if(val > 0){
                    return Math.floor(val);
                }
                return Math.ceil(val);
            default:
                return false;
        }
    }

    //Go left to right in array
    for(let i = 0; i < tokens.length; i++){
        let val = tokens[i];
        //Is this index a operand?
        if(symbols[val]){
            //If so, get top 2 numbers in stack to operate on
            let right = numberStack.pop();
            let left= numberStack.pop();
            //get answer, push onto stack.
            numberStack.push(calculate(val,left,right));
        }
        else{
            //If not symbol it is number, push on stack.
            numberStack.push(parseInt(val));
        }
    }
    //last value on stack is answer.
    return numberStack.pop();
};
