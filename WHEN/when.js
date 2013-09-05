(function (exports){
    function when (stack, callback){
        var flag = 0, l = stack.length, result = [];
        function call (flag){
           if (flag === l){
               callback.apply(this, result);
           }
        }

        for (var i = 0; i < l; ++i){
            (function (i){
                stack[i](function(data){
                    result[i] = data;
                    flag ++;
                    call(flag);
                });
            })(i);
        }
    }

    exports.when = when;
})(this);