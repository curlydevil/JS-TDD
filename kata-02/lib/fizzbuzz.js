function FizzBuzz(input){
    var temp = [];
    if (input % 3 === 0) temp.push('Fizz');
    if (input % 5 === 0) temp = ('Buzz');
    return (temp.length == 0) ? input : temp.join(' ');
}

module.exports = FizzBuzz;