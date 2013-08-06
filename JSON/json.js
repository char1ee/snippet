'use strict';
Array.isArray = function (arr){
    return ({}).toString.call(arr) === '[object Array]';
}
var _JSON = JSON;
var JSON = {};
JSON.parse = function(string){
    return eval('(' + string + ')');
}
JSON.stringify = function (o, undefined){
    var s = '';
    function log(msg){
        console && console.log && console.log(msg);
    }
    function is (type, o){
        return ({}).toString.call(o) === '[object ' +type+ ']';
    }

    function parseArray (arr) {
        s += '[';
        log('parseArray');
        for (var i = 0,l = arr.length; i < l; ++i) {
            if (
                !is('Array',  arr[i]) &&
                !is('Object', arr[i])
            ){
                if (is ('String', arr[i])){
                    log('String : ' + arr[i]);
                    s += '"' + arr[i] +'"' + ',';
                } else if (is('Number', arr[i])){
                    log('Number: ' + arr[i]);
                    s += arr[i] + ',';
                }
            } else{
                loop(arr[i]);
            }
        }
        s += '],';
    }

    function parseObject (obj) {
        s += '{';
        log('parseObject');
        for (var j in obj){
            if (obj.hasOwnProperty(j)){
                s += '"' + j + '"' + ':';
                if (is('String', obj[j])){
                    log('String : ' + obj[j]);
                    s += '"' + obj[j] + '"' + ',';
                }else if (is('Number', obj[j])){
                    log('Number: ' + obj[j]);
                    s += obj[j] + ',';
                } else if(typeof obj[j] === 'object'){
                    loop(obj[j]);
                }
            }
        }
        s += '},';
    }

    function loop(_o) {
        if(is('Array', _o)){
            parseArray(_o);
        } else if(is('Object', _o)){
            parseObject(_o);
        } else{
            return;
        }
    }

    loop(o);
    s = s.replace(/,(]|})/g,'$1').replace(/,$/,'');
    return s;
};

(function (objs){
    var obj;
    for (var i = 0; i < objs.length; ++i){
        obj = objs[i];
        console.log(JSON.stringify(obj));
        console.log(_JSON.stringify(obj));
        console.warn( JSON.stringify(obj) === _JSON.stringify(obj) );
        console.log('============================================');
    }
})([
    [1,2,3],
    [1,2,"3",{a:1, b:"2"}],
    [
        {
            a:1,
            b:"2",
            c:{
                d:3,
                e:{'___':"4"},
            }
        },
        {
            a:1,
            b:"2",
            c:{
                d:3,
                e:{'___':"4"},
            }
        }
    ],
    {
        "data" : {
            'hello world ': [
                {
                    a:1,
                    b:[
                        {
                            a:1,
                            b:2
                        }
                    ]
                }
            ]
        }
    }

])