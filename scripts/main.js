/*! modernizr 3.11.8 (Custom Build) | MIT *
 * https://modernizr.com/download/?-contains-cssmask-csstransitions-dataset-history-json-localstorage-objectfit-requestanimationframe-sizes-srcset-svg-touchevents-addtest-fnbind-prefixes-setclasses-testprop-teststyles !*/
!function(e, t, n, r) {
    function o(e, t) {
        return typeof e === t
    }
    function i(e) {
        var t = b.className
          , n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)),
        x ? b.className.baseVal = t : b.className = t)
    }
    function s(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                S(e, n) && s(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split(".")
              , o = Modernizr[r[0]];
            if (2 === r.length && (o = o[r[1]]),
            void 0 !== o)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 === r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]]instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            Modernizr[r[0]][r[1]] = t),
            i([(t && !1 !== t ? "" : "no-") + r.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function l() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function u() {
        var e = n.body;
        return e || (e = l(x ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function f(e, t, r, o) {
        var i, s, a, f, c = "modernizr", d = l("div"), p = u();
        if (parseInt(r, 10))
            for (; r--; )
                a = l("div"),
                a.id = o ? o[r] : c + (r + 1),
                d.appendChild(a);
        return i = l("style"),
        i.type = "text/css",
        i.id = "s" + c,
        (p.fake ? p : d).appendChild(i),
        p.appendChild(d),
        i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)),
        d.id = c,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        f = b.style.overflow,
        b.style.overflow = "hidden",
        b.appendChild(p)),
        s = t(d, e),
        p.fake && p.parentNode ? (p.parentNode.removeChild(p),
        b.style.overflow = f,
        b.offsetHeight) : d.parentNode.removeChild(d),
        !!s
    }
    function c(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function d(e, n, r) {
        var o;
        if ("getComputedStyle"in t) {
            o = getComputedStyle.call(t, e, n);
            var i = t.console;
            if (null !== o)
                r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            o = !n && e.currentStyle && e.currentStyle[r];
        return o
    }
    function p(e, n) {
        var o = e.length;
        if ("CSS"in t && "supports"in t.CSS) {
            for (; o--; )
                if (t.CSS.supports(c(e[o]), n))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in t) {
            for (var i = []; o--; )
                i.push("(" + c(e[o]) + ":" + n + ")");
            return i = i.join(" or "),
            f("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" === d(e, null, "position")
            })
        }
        return r
    }
    function m(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function h(e, t, n, i) {
        function s() {
            f && (delete O.style,
            delete O.modElem)
        }
        if (i = !o(i, "undefined") && i,
        !o(n, "undefined")) {
            var u = p(e, n);
            if (!o(u, "undefined"))
                return u
        }
        for (var f, c, d, h, v, A = ["modernizr", "tspan", "samp"]; !O.style && A.length; )
            f = !0,
            O.modElem = l(A.shift()),
            O.style = O.modElem.style;
        for (d = e.length,
        c = 0; c < d; c++)
            if (h = e[c],
            v = O.style[h],
            a(h, "-") && (h = m(h)),
            O.style[h] !== r) {
                if (i || o(n, "undefined"))
                    return s(),
                    "pfx" !== t || h;
                try {
                    O.style[h] = n
                } catch (e) {}
                if (O.style[h] !== v)
                    return s(),
                    "pfx" !== t || h
            }
        return s(),
        !1
    }
    function v(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function A(e, t, n) {
        var r;
        for (var i in e)
            if (e[i]in t)
                return !1 === n ? e[i] : (r = t[e[i]],
                o(r, "function") ? v(r, n || t) : r);
        return !1
    }
    function g(e, t, n, r, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + P.join(s + " ") + s).split(" ");
        return o(t, "string") || o(t, "undefined") ? h(a, t, r, i) : (a = (e + " " + j.join(s + " ") + s).split(" "),
        A(a, t, n))
    }
    function y(e, t, n) {
        return g(e, r, r, t, n)
    }
    var w = []
      , C = {
        _version: "3.11.8",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            w.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            w.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = C,
    Modernizr = new Modernizr;
    var S, _ = [], b = n.documentElement, x = "svg" === b.nodeName.toLowerCase();
    !function() {
        var e = {}.hasOwnProperty;
        S = o(e, "undefined") || o(e.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        }
        : function(t, n) {
            return e.call(t, n)
        }
    }(),
    C._l = {},
    C.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    C._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e;
                for (e = 0; e < n.length; e++)
                    (0,
                    n[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        C.addTest = s
    });
    var T = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function() {
        delete T.elem
    });
    var O = {
        style: T.elem.style
    };
    Modernizr._q.unshift(function() {
        delete O.style
    });
    var E = (C.testProp = function(e, t, n) {
        return h([e], r, t, n)
    }
    ,
    C.testStyles = f,
    C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]);
    C._prefixes = E;
    var z = "Moz O ms Webkit"
      , P = C._config.usePrefixes ? z.split(" ") : [];
    C._cssomPrefixes = P;
    var j = C._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    C._domPrefixes = j,
    C.testAllProps = g,
    C.testAllProps = y,
    Modernizr.addTest("cssmask", y("maskRepeat", "repeat-x", !0));
    var N = function(e) {
        var n, o = E.length, i = t.CSSRule;
        if (void 0 === i)
            return r;
        if (!e)
            return !1;
        if (e = e.replace(/^@/, ""),
        (n = e.replace(/-/g, "_").toUpperCase() + "_RULE")in i)
            return "@" + e;
        for (var s = 0; s < o; s++) {
            var a = E[s];
            if (a.toUpperCase() + "_" + n in i)
                return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    C.atRule = N;
    var B = C.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? N(e) : (-1 !== e.indexOf("-") && (e = m(e)),
        t ? g(e, t, n) : g(e, "pfx"))
    }
    ;
    Modernizr.addTest("objectfit", !!B("objectFit"), {
        aliases: ["object-fit"]
    }),
    Modernizr.addTest("csstransitions", y("transition", "all", !0)),
    Modernizr.addTest("dataset", function() {
        var e = l("div");
        return e.setAttribute("data-a-b", "c"),
        !(!e.dataset || "c" !== e.dataset.aB)
    }),
    Modernizr.addTest("contains", o(String.prototype.contains, "function")),
    Modernizr.addTest("history", function() {
        var e = navigator.userAgent;
        return !!e && ((-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState"in t.history))
    }),
    Modernizr.addAsyncTest(function() {
        var e, t, n, r = l("img"), o = "sizes"in r;
        !o && "srcset"in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
        e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        n = function() {
            s("sizes", 2 === r.width)
        }
        ,
        r.onload = n,
        r.onerror = n,
        r.setAttribute("sizes", "9px"),
        r.srcset = e + " 1w," + t + " 8w",
        r.src = e) : s("sizes", o)
    }),
    Modernizr.addTest("srcset", "srcset"in l("img")),
    Modernizr.addTest("json", "JSON"in t && "parse"in JSON && "stringify"in JSON),
    Modernizr.addTest("requestanimationframe", !!B("requestAnimationFrame", t), {
        aliases: ["raf"]
    }),
    Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e),
            localStorage.removeItem(e),
            !0
        } catch (e) {
            return !1
        }
    }),
    Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var L = function() {
        var e = t.matchMedia || t.msMatchMedia;
        return e ? function(t) {
            var n = e(t);
            return n && n.matches || !1
        }
        : function(e) {
            var t = !1;
            return f("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                t = "absolute" === d(e, null, "position")
            }),
            t
        }
    }();
    C.mq = L,
    Modernizr.addTest("touchevents", function() {
        if ("ontouchstart"in t || t.TouchEvent || t.DocumentTouch && n instanceof DocumentTouch)
            return !0;
        var e = ["(", E.join("touch-enabled),("), "heartz", ")"].join("");
        return L(e)
    }),
    function() {
        var e, t, n, r, i, s, a;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (e = [],
                t = w[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = o(t.fn, "function") ? t.fn() : t.fn,
                i = 0; i < e.length; i++)
                    s = e[i],
                    a = s.split("."),
                    1 === a.length ? Modernizr[a[0]] = r : (Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean) || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                    Modernizr[a[0]][a[1]] = r),
                    _.push((r ? "" : "no-") + a.join("-"))
            }
    }(),
    i(_),
    delete C.addTest,
    delete C.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++)
        Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, window, document);
