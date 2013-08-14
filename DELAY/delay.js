(function (exports){
    function delay (stack, callback){
        var flag = 0, l = stack.length, result = [];
        function call (flag){
           if (flag === l){
               callback.apply(this, result);
           }
        }

        for (var i = 0; i < l; ++i){
            (function (k){
                stack[k](function(data){
                    result[k] = data;
                    flag ++;
                    call(flag);
                })
            })(i);
        }

    }

    exports.delay = delay;
})(this);