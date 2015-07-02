function StringCalc(input){
    if(!input || input === '')
        return 0;
    input = input.replace('\n',',')
    var array = input.split(',');
    var sum = 0;
    for(var i = 0; i< array.length; i++){
        sum +=(+array[i]);
    }
     return sum;
}

module.exports = StringCalc;