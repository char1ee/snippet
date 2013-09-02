(function (window) {
    var defaultColors = 'darkpink,blue,orange,darkgreen'.split(','),
    _console = window.console || {
        isNative: false,
        log: function (s) {
            var printer  = document.getElementById('char1ee-console');
            if(!printer) {
                printer = document.createElement('div');
                printer.id = 'char1ee-console';
                printer.style.cssText =
                    'border:1px solid #ccc;'+
                    'background:#eee;'+
                    'position:absolute;'+
                    'top:0;'+
                    'right:0;'+
                    'width:200px;'+
                    'height:400px;'+
                    'overflow:auto;'+
                    'padding:5px;'+
                    'z-index:999999;'+
                    'font-size:10px;';
                document.body.appendChild(printer);
            }
            var item = document.createElement('div');
            item.innerHTML = s.replace(/\n/g, '<br>');
            printer.appendChild(item);
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
})(window);