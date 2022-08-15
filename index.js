! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1);
    addEventListener("fetch", e => {
        const t = e.request;
        "GET" === t.method ? e.respondWith((0, r.handleRequest)(t)) : e.respondWith(new Response(null, {
            status: 405,
            statusText: "Method Not Allowed"
        }))
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleRequest = void 0, t.handleRequest = async function(e) {
        const t = new URL(e.url),
            n = t.pathname,
            r = t.host + t.pathname,
            o = await REDIRECT_KV.get(r) || await REDIRECT_KV.get(n);
        if (!o || "404" === o) {
            const n = await REDIRECT_KV.get(t.host + "/404") || await REDIRECT_KV.get("404");
            return "pass" === n ? fetch(e) : n ? Response.redirect(n, 301) : new Response("Sorry, page not found.", {
                status: 404,
                statusText: "page not found"
            })
        }
        if ("pass" === o) return fetch(e);
        const s = new URL(o);
        Array.from(t.searchParams).forEach(([e, t]) => {
            !1 === s.searchParams.has(e) && s.searchParams.set(e, t)
        });
        const a = s.toString();
        return Response.redirect(a, 301)
    }
}]);