function StringCalc(input){
    if(!input || input === '')
        return 0;

    if(input.substr(0,2) == "//")
    {
        var customDelimiter = input.substr(2,1);
        input = input.substr(4);
        input = input.replace(customDelimiter, ',');
    }

    input = input.replace('\n',',')
    var array = input.split(',');
    var sum = 0;
    for(var i = 0; i< array.length; i++){
        sum +=(+array[i]);
    }
     return sum;
}

module.exports = StringCalc;