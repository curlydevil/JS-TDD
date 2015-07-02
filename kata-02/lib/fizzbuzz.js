function FizzBuzz(input){
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    else return input;
}

module.exports = FizzBuzz;