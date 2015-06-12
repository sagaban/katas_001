var calculator = {
    add: function(numbers){
        var sum = 0;
        if (numbers){
            var re = /[,\n]/;
            var array =  numbers.split(re);
            for (var i in array){
                sum = sum + Number(array[i]);
            }
        }
        return sum;
    }
}