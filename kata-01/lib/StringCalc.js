function StringCalc(value){
    if(value === '')
        return 0;
    var array = value.split(',');
    var sum = 0;
    for(var i = 0; i< array.length; i++){
        sum +=(+array[i]);
    }
     return sum;
}

module.exports = StringCalc;