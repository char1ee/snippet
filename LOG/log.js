// 'use strict';
(function (window, document) {
    var defaultColors = 'darkpink,blue,orange,darkgreen'.split(','),
    _console = window.console || {
        isNative: false,
        log: function (s) {
            s = s == null ? {}.toString.call(s) : s.toString();
            var printer  = document.getElementById('char1ee-console');
            if(!printer) {
                printer = document.createElement('div');
                printer.id = 'char1ee-console';
                printer.setAttribute('unselectable', 'on');
                printer.style.cssText =
                    'position:absolute;' +
                    'z-index:999999;' +
                    'top:0;' +
                    'right:0;' +
                    'width:200px;' +
                    'height:400px;'+
                    'padding:5px;' +
                    'background:#000;' +
                    'color:#fff;' +
                    'font-size:10px;' +
                    'overflow:auto;' +
                    '-webkit-user-select: none;' +
                    '-moz-user-select: none;' +
                    'user-select: none;' +
                    'cursor:move';
                document.body.appendChild(printer);
            }
            var item = document.createElement('div');
            item.innerHTML = s.toString().replace(/\n/g, '<br>');
            printer.appendChild(item);
            printer.onmousedown = function (e) {
                var _x = e.pageX - printer.offsetLeft,
                    _y = e.pageY - printer.offsetTop;
                document.onmousemove = function (e) {
                    printer.style.left = (e.pageX - _x) + 'px';
                    printer.style.top = (e.pageY - _y) + 'px';
                }
                document.onmouseup = function () {
                    _x =  _y =  document.onmousemove = null;
                }
            }
        }
    };

    function random(m, n) {
        return 0 | Math.random() * (n - m) + m;
    }

    function log(s, colors) {
        if(_console.isNative === false){
            return _console.log(s);
        }
        s = s || '';
        colors = colors || defaultColors;
        var as = s.split(/\s+/),
            al = as.length,
            cl = colors.length,
            tmp = [];
        s = s.replace(/(^|\s+)/g, '$1%c');
        for (var i = 0; al > i; ++i){
            tmp.push(colors[random(0, cl)]);
        }
        tmp = tmp.map(function (s) {
            return 'color:' + s;
        });
        tmp.unshift(s);
        _console.log.apply(_console, tmp);
    }
    window.log = log;
})(this, this.document);