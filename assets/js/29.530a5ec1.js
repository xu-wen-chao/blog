(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{264:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel")]),t._v(" "),a("p",[t._v("前端开发中经常能看到Babel这字样，同样的有"),a("code",[t._v("@babel/polyfill")]),t._v("，"),a("code",[t._v("@babel/xxx")]),t._v("等等。")]),t._v(" "),a("p",[t._v("我们只知道这是一个编译器，但很可能不知道为什么需要，很多时候在构建工具加上某个"),a("code",[t._v("Babel")]),t._v("插件只是因为“网上搜到要加这个代码才能正常运行”。")]),t._v(" "),a("p",[t._v("现在根据自己对官方文档以及开发过程中的实践、理解，来解释什么是"),a("code",[t._v("Babel")]),t._v("，及其相关常用的工具链，和为什么需要它们。")]),t._v(" "),a("h2",{attrs:{id:"什么是babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是babel","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是Babel")]),t._v(" "),a("p",[t._v("打开"),a("code",[t._v("Babel")]),t._v("的官网就能看到那显眼的slogan，"),a("strong",[t._v("Babel is a JavaScript compiler")]),t._v("，一句话总结"),a("code",[t._v("Babel")]),t._v("就是一个"),a("code",[t._v("JavaScript")]),t._v("编译器。")]),t._v(" "),a("p",[a("code",[t._v("Babel")]),t._v("是一系列的工具链，主要用于将"),a("code",[t._v("ECMAScript 2015+")]),t._v("的"),a("code",[t._v("JavaScript")]),t._v("代码转换成能够运行在现在或者更古老的浏览器、环境等的兼容版本代码。")]),t._v(" "),a("p",[t._v("从官方文档中可知"),a("code",[t._v("Babel")]),t._v("主要能做以下几个事情：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("转换语法。")])]),t._v(" "),a("li",[a("p",[t._v("Polyfill 实现目标环境中缺少的功能 (通过 "),a("code",[t._v("@babel/polyfill")]),t._v(")。")])]),t._v(" "),a("li",[a("p",[t._v("源代码转换 (codemods)。")])])]),t._v(" "),a("p",[t._v("比如下方ES2015的箭头函数，在IE11执行的话是会报语法错误的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("为了能够使用现代"),a("code",[t._v("JavaScript")]),t._v("的语法，同时又要保证在低版本浏览器中兼容运行，可以通过Babel将箭头函数编译成所有浏览器都能识别的"),a("code",[t._v("function")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"什么是-babel-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-babel-polyfill","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是@babel/polyfill")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-polyfill"),a("OutboundLink")],1),t._v("是"),a("code",[t._v("Babel")]),t._v("的工具链之一，它包含了"),a("a",{attrs:{href:"https://github.com/facebook/regenerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("regenerator runtime"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("core-js"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/facebook/regenerator",target:"_blank",rel:"noopener noreferrer"}},[t._v("regenerator runtime"),a("OutboundLink")],1),t._v("运行时库，能够将"),a("code",[t._v("generators")]),t._v("、"),a("code",[t._v("yield")]),t._v("、"),a("code",[t._v("async")]),t._v("等编译转换成拥有相同功能的"),a("code",[t._v("ES5")]),t._v("兼容代码。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("core-js"),a("OutboundLink")],1),t._v("，现代"),a("code",[t._v("JavaScript")]),t._v("标准库，提供了"),a("code",[t._v("promises")]),t._v("，"),a("code",[t._v("symbols")]),t._v("，"),a("code",[t._v("collections``iterators")]),t._v("，"),a("code",[t._v("typed arrays")]),t._v("等等\n全局变量、实例方法等。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("babel-polyfill")]),t._v("能够模拟完整的"),a("code",[t._v("ES2015+")]),t._v("环境，通常建议在应用中使用，而不是在工具库中使用。")]),t._v(" "),a("p",[t._v("这意味着，通过"),a("code",[t._v("babel-polyfill")]),t._v("你能够使用新的内建函数，比如"),a("code",[t._v("Promise")]),t._v("，静态方法"),a("code",[t._v("Array.from")]),t._v("或者"),a("code",[t._v("Object.assign")]),t._v("，实例方法"),a("code",[t._v("Array.prototype.includes")]),t._v("和"),a("code",[t._v("generator")]),t._v("函数（"),a("code",[t._v("generators")]),t._v("、"),a("code",[t._v("yield")]),t._v("、"),a("code",[t._v("async")]),t._v("等的实现）。这些"),a("code",[t._v("polyfill")]),t._v("和原生"),a("code",[t._v("prototype")]),t._v("上的方法一样被添加到了全局作用域中。")]),t._v(" "),a("p",[t._v("总结，"),a("code",[t._v("Babel")]),t._v("（语法编译）+ "),a("code",[t._v("polyfill")]),t._v("（api 垫片），才能够完整的模拟一套"),a("strong",[t._v("完整的")]),a("code",[t._v("ES2015+")]),t._v(" 环境。")]),t._v(" "),a("p",[t._v("注意，在"),a("code",[t._v("Babel")]),t._v(" 7.4.0中，"),a("code",[t._v("@babel/polyfill")]),t._v("已经被弃用了，取而代之的是直接引用"),a("code",[t._v("core-js/stable")]),t._v("和"),a("code",[t._v("regenerator-runtime/runtime")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/stable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regenerator-runtime/runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"什么是-babel-preset-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-babel-preset-env","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是@babel/preset-env")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/preset-env"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("上面提到了"),a("code",[t._v("babel-polyfill")]),t._v("，那么我们直接在应用入口直接"),a("code",[t._v('import "core-js')]),t._v("就可以了？是，但这把所有"),a("code",[t._v("polyfill")]),t._v("代码都引入了，不管应用中有没有用到，造成应用体积过大。")]),t._v(" "),a("p",[t._v("这时候能够想到，应用中用到了什么新的api，就在代码里面按需"),a("code",[t._v("import")]),t._v("不就可以了吗？比如用到了"),a("code",[t._v("padStart")]),t._v("，那么就在代码中"),a("code",[t._v('import "core-js/modules/es.string.pad-start"')]),t._v("。这样是解决了多余代码的问题，但是这样开发、维护成本很高，每次要用一个api都要手动"),a("code",[t._v("import")]),t._v("对应的"),a("code",[t._v("polyfill")]),t._v("进来，想想就可怕。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/preset-env"),a("OutboundLink")],1),t._v("就是用来解决上面提到的问题，它能够自动的帮我们按需引入"),a("code",[t._v("polyfill")]),t._v("。")]),t._v(" "),a("p",[t._v("常见配置如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entry"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("useBuiltIns")]),t._v("参数决定"),a("code",[t._v("@babel/preset-env")]),t._v("如何处理"),a("code",[t._v("polyfills")]),t._v("。")]),t._v(" "),a("p",[t._v("该参数值可以是"),a("code",[t._v('"usage"，"entry"，false')]),t._v("其中之一，默认是"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("useBuiltIns: 'entry'")]),t._v("，会把应用入口的引入"),a("code",[t._v("polyfills")]),t._v("语句替换为按需引用语句，比如：")]),t._v(" "),a("p",[t._v("输入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js"')]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/modules/es.string.pad-start"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/modules/es.string.pad-end"')]),t._v("\n")])])]),a("p",[a("code",[t._v("useBuiltIns: 'usage'")]),t._v("，无需手动引入"),a("code",[t._v("polyfill")]),t._v("，会按需引入使用到的api，比如：")]),t._v(" "),a("p",[t._v("输入:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/modules/es.promise"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("useBuiltIns: false")]),t._v("，不会自动引入"),a("code",[t._v("polyfill")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"什么是-babel-runtime和-babel-plugin-transform-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-babel-runtime和-babel-plugin-transform-runtime","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是@babel/runtime和@babel/plugin-transform-runtime")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-runtime.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/runtime"),a("OutboundLink")],1),t._v("包含了"),a("code",[t._v("Babel")]),t._v("模块运行时帮助函数以及"),a("code",[t._v("regenerator-runtime")]),t._v("。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/plugin-transform-runtime"),a("OutboundLink")],1),t._v("这是一个能够复用"),a("code",[t._v("Babel")]),t._v("注入的帮助函数的插件，通过它能够节省代码大小。这里的"),a("strong",[t._v("transform-runtime")]),t._v("就指的是"),a("code",[t._v("@babel/runtime")]),t._v("，所以使用"),a("code",[t._v("@babel/plugin-transform-runtime")]),t._v("之前也必须安装"),a("code",[t._v("@babel/runtime")])]),t._v(" "),a("p",[t._v("注意：实例方法比如"),a("code",[t._v('"foobar".includes("foo")')]),t._v("，不会通过"),a("code",[t._v("transform-runtime")]),t._v("注入，你可以使用"),a("code",[t._v("core-js")]),t._v("或者"),a("code",[t._v("@babel/preset-env")]),t._v("来进行"),a("code",[t._v("polyfill")]),t._v("。")]),t._v(" "),a("p",[t._v("看完官方简单的介绍应该还有点模糊，下面用官方的例子再来解释下。")]),t._v(" "),a("p",[t._v("比如下面的代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过babel编译后变成：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_classCallCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cannot call a class as a function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_classCallCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里我们可以看到编译出来了一个全局的帮助函数"),a("code",[t._v("_classCallCheck")]),t._v("，这个在应用中是没问题，但如果在工具库使用就会产生以下问题：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("污染了全局变量。")])]),t._v(" "),a("li",[a("p",[t._v("假如工具库A和工具库B中都编译出了"),a("code",[t._v("_classCallCheck")]),t._v("这就产生了冗余重复的代码，增大了代码体积。")])])]),t._v(" "),a("p",[t._v("而且上面的两个问题是用户无法感知的，如果我们使用了"),a("code",[t._v("transform-runtime")]),t._v("之后编译成如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _classCallCheck2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/runtime/helpers/classCallCheck"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _classCallCheck3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_interopRequireDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_classCallCheck2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_interopRequireDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__esModule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _classCallCheck3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里我们可以看到"),a("code",[t._v("_classCallCheck")]),t._v("作为依赖引入了，而不是直接编译进入代码，"),a("code",[t._v("transform-runtime")]),t._v("就是提供了这么一个沙盒环境，避免了污染全局变量、重复的"),a("code",[t._v("babel")]),t._v("帮助函数代码等问题。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);