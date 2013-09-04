(function (exports, window) {
    // 'use strict';
    var document = window.document,
        defaultColors = 'darkpink,blue,orange,darkgreen'.split(','),
        _console = window.console || {
            isNative: false,
            log: function (s) {
                function is(type, o) {
                    return type === 'Null' ? o === null :
                           type === 'Undefined' ? typeof o === 'undefined' :
                           Object.prototype.toString.call(o) === '[object ' + type + ']';
                }
                s = is('Null', s) ? 'null' :
                    is('Undefined', s) ? 'undefined' :
                    is('String', s) ? '"' + s + '"' :
                    is('Array', s) ? '[' + s.toString() + ']' :
                    is('Object', s) ? JSON.stringify(s) :
                    s.toString();

                var printer  = document.getElementById('char1ee-console');
                if (!printer) {
                    printer = document.createElement('div');
                    printer.id = 'char1ee-console';
                    printer.setAttribute('unselectable', 'on');
                    printer.style.cssText =
                        'position:absolute;' +
                        'z-index:999999;' +
                        'top:0;' +
                        'right:0;' +
                        'width:200px;' +
                        'height:400px;' +
                        'padding:5px;' +
                        'background:#000;' +
                        'color:#fff;' +
                        'font-size:12px;' +
                        'overflow:auto;' +
                        'cursor:move';
                    document.body.appendChild(printer);
                }
                var item = document.createElement('div');
                item.innerHTML = s.toString().replace(/\n/g, '<br>');
                printer.appendChild(item);
                printer.onmousedown = function () {
                    var e = window.event;
                    var _x = e.clientX - printer.offsetLeft,
                        _y = e.clientY - printer.offsetTop;
                    document.onmousemove = function () {
                        var e = window.event;
                        printer.style.left = e.clientX - _x + 'px';
                        printer.style.top  = e.clientY - _y + 'px';
                    };
                    document.onmouseup = function () {
                        document.onmousemove = document.onmouseup = null;
                    };
                };
            }
        };

    function random(m, n) {
        return 0 | Math.random() * (n - m) + m;
    }

    function log(s, colors) {
        if (_console.isNative === false) {
            return _console.log(s);
        }
        colors = colors || defaultColors;
        if (typeof s === 'string') {
            var as = s.split(/\s+/),
                al = as.length,
                cl = colors.length,
                tmp = [];
            s = s.replace(/(^|\s+)/g, '$1%c');
            for (var i = 0; al > i; ++i) {
                tmp.push(colors[random(0, cl)]);
            }
            tmp = tmp.map(function (s) {
                return 'color:' + s;
            });
            tmp.unshift(s);
            _console.log.apply(_console, tmp);
            return;
        }
        _console.log(s);
    }
    exports.log = log;
})(this, this);