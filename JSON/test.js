
// test
(function (objs) {
    var s, obj;
    for (var i = 0; i < objs.length; ++i) {
        obj = objs[i];
        s = JSON.stringify(obj);
        if (s !== _JSON.stringify(obj)) {
            log(s);
            log(_JSON.stringify(obj));
            console && console.warn && console.warn('%cwrong', 'color:#f00');
            log('===========================================');
        } else {
            // log('ok');
            // log('===========================================');
        }
    }
})([
    'true',
    'string\" string\"',
    'string " string"',
    "string \" string\"",
    true,
    false,
    10,
    'string',
    NaN,
    Infinity,
    {a: '你好'},
    {a: "你好"},
    {a: "你\"好"},
    {a: '你"好'},
    {a: 'i\'am Jack'},
    ["aaaaaaaaaaa\"bbb\""],
    ['aaaaaaaaaaa"bbb"'],
    {a: null},
    [true, false, 1.5, 'hello world', [1, 2, 3], {a: 1}],
    [1, 2, 3],
    [1, 2, "3", {a: 1, b: "2"}],
    [
        {
            a: 1,
            b: "2",
            c: {
                d: 3,
                e: {'___': "4"}
            }
        },
        {
            a: 1,
            b: "2",
            c: {
                d: 3,
                e: {'___': "4"}
            }
        }
    ],
    {
        "data" : {
            'hello world ': [
                {
                    a: 1,
                    b: [
                        {
                            a: 1,
                            b: 2
                        }
                    ]
                }
            ]
        }
    },
    {
        // node环境
        // 强制选项
        // 以下选项设置为true或指定的值,则会在校验时显示此警告(默认不显示警告).


        "bitwise"       : true,     // JavaScript中很少使用位操作符,而且容易和&&混淆
        "curly"         : true,     // 总是把条件或者循环写在大括号里
        "eqeqeq"        : true,     // 总是使用===和!==，而不是==和!=
        "forin"         : false,    // 在for in循环里，必须使用hasOwnProperties过滤元素
        "immed"         : true,     // 使用立即执行的函数时不要把他们包在括号里 e.g. `( function(){}() );`
        "latedef"       : true,     // 变量应该先定义，再使用
        "newcap"        : true,     // 构造函数的名称应该以大写字母开头 e.g. `new F()`.
        "noarg"         : true,     // 禁止使用arguments.caller和argument.callee
        "noempty"       : true,     // 不要使用空代码块
        "nonew"         : true,     // Prohibit use of constructors for side-effects.// 使用构造函数的副作用，比如new xxx();,不把它赋值给一个变量
        "plusplus"      : false,    // 不建议使用++和--
        "regexp"        : true,     // Prohibit `.` and `[^...]` in regular expressions.
        "undef"         : true,     // 禁止使用不声明的变量
        "unused"        : true,     // 禁止声明变量但不使用
        "strict"        : false,    // 要求代码运行于Strict mode Require `use strict` pragma in every file.
        "trailing"      : true,     // 禁止代码行最后留有空格
        "camelcase"     : true,     // 强制变量名使用驼峰式风格或者大写字母加下划线风格
        "quotmark"      : true,     // 引号的风格，true表示不要求一致性，singie表示只使用单引号，double表示只使用双引号


        // == Relaxing Options ================================================
        //
        // These options allow you to suppress certain types of warnings. Use
        // them only if you are absolutely positive that you know what you are
        // doing.


        "asi"           : false,    // 是否要求行尾写分号
        "boss"          : false,    // 是否允许在比较时出现赋值语句
        "debug"         : false,    // 是否允许出现debugger
        "eqnull"        : false,    // 是否允许== null语句
        // "es5"        : true,     // 是否允许使用es5的新特性
        "esnext"        : true,     // 是否允许使用ES.next的新特性 如 `const` and `let`.
        "evil"          : false,    // 是否允许出现 `eval`.
        "expr"          : true,     // 期望出现赋值语句或函数调用时，出现表达式是否警告
        "funcscope"     : false,    // 是否允许在流程控制里声明变量
        "globalstrict"  : false,    // 是否允许使用global strict mode
        "iterator"      : false,    // 是否允许使用__iterator__属性
        "lastsemic"     : false,    // 是否允许遗失最后的分号
        "laxbreak"      : false,    // 是否允许不安全的断行
        "laxcomma"      : true,    // 是否允许object中的属性逗号前置风格
        "loopfunc"      : false,    // 是否允许在循环里定义函数 Allow functions to be defined within loops.
        "multistr"      : false,    // 是否允许多行字符串
        "onecase"       : false,    // 禁止switch里 case穿透 Tolerate switches with just one case.
        "proto"         : false,    // 是否允许使用__proto__属性
        "regexdash"     : false,    // Tolerate unescaped last dash i.e. `[-...]`.
        "scripturl"     : false,    // 是否允许url里出现script,比如javascript:...smarttabs
        "smarttabs"     : false,    // 是否允许tab和空格混用
        "shadow"        : false,    // 是否允许声明其他地方已经声明过的变量
        "sub"           : false,    // 建议使用persion.name而不是persion['name']
        "supernew"      : false,    // 是否允许使用诡异的构造器比如new function() { … }和new Object
        "validthis"     : false,    /// 是否允许在strict mode的非构造函数中使用this




        // == Environments ====================================================
        //
        // These options pre-define global variables that are exposed by
        // popular JavaScript libraries and runtime environments—such as
        // browser or node.js.
        // 环境
        // 以下选项打开表示是否是运行在所指的环境下.


        "browser"       : true,     // Standard browser globals e.g. `window`, `document`.
        "couch"         : false,    // Enable globals exposed by CouchDB.
        "devel"         : false,    // Allow development statements e.g. `console.log();`.
        "dojo"          : false,    // Enable globals exposed by Dojo Toolkit.
        "jquery"        : true,    // Enable globals exposed by jQuery JavaScript library.
        "mootools"      : false,    // Enable globals exposed by MooTools JavaScript framework.
        "node"          : true,     // Enable globals available when code is running inside of the NodeJS runtime environment.
        "nonstandard"   : false,    // 是否使用非标准方法，比如escape和unescape
        "prototypejs"   : false,    // Enable globals exposed by Prototype JavaScript framework.
        "rhino"         : false,    // Enable globals available when your code is running inside of the Rhino runtime environment.
        "wsh"           : false,    // Enable globals available when your code is running as a script for the Windows Script Host.
        "worker"        : true,     // 是否使用Web Worker
        // == JSLint Legacy ===================================================
        //
        // These options are legacy from JSLint. Aside from bug fixes they will
        // not be improved in any way and might be removed at any point.


        "nomen"         : false,    // 是否禁止使用_下划线变量
        "onevar"        : false,    // 是否单var风格 Allow only one `var` statement per function.
        "passfail"      : false,    // 是否第1个错误出处中断
        "white"         : true,     // 强制要求严格的空白


        // == Undocumented Options ============================================
        //
        // While I've found these options in [example1][2] and [example2][3]
        // they are not described in the [JSHint Options documentation][4].
        //
        // [4]: http://www.jshint.com/options/


        "maxerr"        : 100,      // Maximum errors before stopping.
        "maxlen"        : 100,      // 设置每行代码最大长度
        "maxparams"     : 5,        // 设置函数最多允许的参数个数 /* jshint maxparams:3 *
        "maxdepth"      : 10,       // 设置大括号最大的嵌套次数 /* jshint maxdepth:2 *
        // "maxstatements"          // 设置每个函数允许的最多语
        // "maxcomplexity"          // 参考这
        "predef"        : [         // Extra globals.
            "seajs",
            "jQuery",
            "Zepto",
            "$",
            "define"
        ],
        "indent"        : 4        // Specify indentation spacing
    }

]);
