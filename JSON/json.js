JSON.parse = JSON.parse || function (s) {
    return eval('(' + s +')');
};

JSON.stringify = JSON.stringify || function (o, undefined) {
    var s = '';
    function log(msg) {
        // console && console.log && console.log(msg);
    }
    function is(type, o) {
        return Object.prototype.toString.call(o) === '[object ' + type + ']';
    }

    function recurs(_o) {
        if (is('Array', _o)) {
            parseArray(_o);
        } else if (is('Object', _o)) {
            parseObject(_o);
        }
    }

    function parseArray(arr) {
        s += '[';
        log('parseArray');
        for (var i = 0, l = arr.length; i < l; ++i) {
            if (
                !is('Array',  arr[i]) &&
                !is('Object', arr[i])
            ) {
                if (is('String', arr[i])) {
                    log('String : ' + arr[i]);
                    s += '"' + arr[i].replace(/\"/g, '\\\"') + '"' + ',';
                } else if (is('Number', arr[i])) {
                    log('Number: ' + arr[i]);
                    s += arr[i] + ',';
                } else if (is('Boolean', arr[i])) {
                    log('Boolean: ' + arr[i]);
                    s += arr[i] + ',';
                } else if (is('Null', arr[i])) {
                    log('Null: ' + arr[i]);
                    s += 'null' + ',';
                }
            } else {
                recurs(arr[i]);
            }
        }
        s += '],';
    }

    function parseObject(obj) {
        s += '{';
        log('parseObject');
        for (var j in obj) {
            if (obj.hasOwnProperty(j)) {
                s += '"' + j + '"' + ':';
                if (is('String', obj[j])) {
                    log('String : ' + obj[j]);
                    s += '"' + obj[j].replace(/\"/g, '\\\"') + '"' + ',';
                } else if (is('Number', obj[j])) {
                    log('Number: ' + obj[j]);
                    s += obj[j] + ',';
                } else if (is('Boolean', obj[j])) {
                    log('Boolean: ' + obj[j]);
                    s += obj[j] + ',';
                } else if (is('Null', obj[j])) {
                    log('Null: ' + obj[j]);
                    s += 'null' + ',';
                } else if (typeof obj[j] === 'object') {
                    recurs(obj[j]);
                }
            }
        }
        s += '},';
    }

    recurs(o);
    s = s.replace(/,(]|})/g, '$1').replace(/,$/, '');
    return s;
};