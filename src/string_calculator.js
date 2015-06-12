var calculator = {
    add: function(numbers){
        var sum = 0,
            re;
        if (numbers){
            if (numbers.substr(0,2) === '//'){
                re = new RegExp(numbers.substr(2,1));
                numbers = numbers.substr(4);
            } else{
                re = /[,\n]/;
            }
            var array =  numbers.split(re);
            for (var i in array){
                sum = sum + Number(array[i]);
            }
        }
        return sum;
    }
}