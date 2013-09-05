// e.g var messager = new Messager(window/*[object window]*/, key /*[object String]*/)
//hack
if(window.postMessage){
    window.postMessage = null;
}
if (window.onmessage === null) {
  window.onmessage = function(){};
}

var log = function (msg){
    window.console ? console.log(msg): function(){}
};
//hack
(function (exports) {
    var window = this;
    var separator = '|-|';

    function Messager(target, key) {
        return new Messager.prototype._init(target, key);
    }

    Messager.prototype = {
        _init : function (target, key) {
            this.target = target;
            this.key = key || '';
            this._onMessage();
            return this;
        },
        post: function (msg, domain) {
            var me = this;
            msg = msg.trim() || '';
            domain = domain || '*';

            if (window.postMessage) {
                msg && me.target.postMessage(me.key + separator + msg, domain);
            } else {
                me._ieChangeName(msg, domain);
            }
            return me;
        },
        receive : function (data) {},
        _onMessage: function () {
            var me = this;
            if (window.onmessage === null) {
                me._bindEvent(window, 'message', function (e) {
                    var _msg = e.data.split(separator),
                        pre = _msg[0],
                        msg = _msg[1] || _msg[0];
                    me.key === pre && me.receive(msg);
                });
            } else {
                me._ieLoop();
            }
            return me;
        },

        _ieChangeName: function (msg) {
            log('_ieChangeName');
            var me = this;
            msg && (window.name = me.key + separator + msg);
        },

        _ieLoop: function () {
            log('_ieLoop');
            var me = this;
            var oldMsg = window.name;
            setTimeout(function loop() {
                var newMsg = window.name;
                var _msg = newMsg.split(separator),
                    pre = _msg[0],
                    msg = _msg[1] || _msg[0];
                if (oldMsg !== newMsg && me.key === pre) {
                    me.receive(msg);
                    oldMsg = newMsg;
                }
                setTimeout(loop, 100);
            }, 0);
        },
        _bindEvent: function (el, type, handle) {
            window.addEventListener ?
                el.addEventListener(type, handle, false) :
                el.attachEvent('on' + type, handle);
        }
    };
    Messager.prototype._init.prototype = Messager.prototype;
    exports.Messager = Messager;
})(this);
