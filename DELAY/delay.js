(function (exports){
    function delay (stack, callback){
       var flag = 0, l = stack.length, result = [];
       function call (flag){
           if (flag === l){
               callback.apply(this, result);
           }
       }

        for (var i = 0; i < l; ++i){
            stack[i](function(data){
                result.push(data)
                flag ++;
                call(flag);
            })
        }

    }

    exports.delay = delay;
})(this);