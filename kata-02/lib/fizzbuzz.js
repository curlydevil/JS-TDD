function FizzBuzz(input){
    var temp = input;
    if (input % 3 === 0) temp = 'Fizz';
    if (input % 5 === 0) temp = 'Buzz';
    else return input;
}

module.exports = FizzBuzz;