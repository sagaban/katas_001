var calculator = {
    add: function(numbers){
        if (numbers){
            var array =  numbers.split(',');
            var sum = 0;
            for (var i in array){
                sum = sum + Number(array[i]);
            }
            return sum;
        }
        return 0;
    }
}