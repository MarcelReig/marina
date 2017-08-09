"use strict";

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e, t) { "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e, t) { t = t || ne; var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n) }

    function i(e) { var t = !!e && "length" in e && e.length,
            n = me.type(e); return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

    function r(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

    function o(e, t, n) { return me.isFunction(t) ? me.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? me.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? me.grep(e, function(e) { return se.call(t, e) > -1 !== n }) : Se.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) { return se.call(t, e) > -1 !== n && 1 === e.nodeType })) }

    function a(e, t) { for (;
            (e = e[t]) && 1 !== e.nodeType;); return e }

    function s(e) { var t = {}; return me.each(e.match(Ne) || [], function(e, n) { t[n] = !0 }), t }

    function u(e) { return e }

    function l(e) { throw e }

    function c(e, t, n, i) { var r; try { e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }

    function f() { ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), me.ready() }

    function d() { this.expando = me.expando + d.uid++ }

    function p(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e) }

    function h(e, t, n) { var i; if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) { try { n = p(n) } catch (r) {}
                Pe.set(e, t, n) } else n = void 0;
        return n }

    function m(e, t, n, i) { var r, o = 1,
            a = 20,
            s = i ? function() { return i.cur() } : function() { return me.css(e, t, "") },
            u = s(),
            l = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            c = (me.cssNumber[t] || "px" !== l && +u) && Re.exec(me.css(e, t)); if (c && c[3] !== l) { l = l || c[3], n = n || [], c = +u || 1;
            do { o = o || ".5", c /= o, me.style(e, t, c + l) } while (o !== (o = s() / u) && 1 !== o && --a) } return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r }

    function g(e) { var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ye[i]; return r ? r : (t = n.body.appendChild(n.createElement(i)), r = me.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ye[i] = r, r) }

    function v(e, t) { for (var n, i, r = [], o = 0, a = e.length; o < a; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = qe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && We(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", qe.set(i, "display", n))); for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]); return e }

    function y(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? me.merge([e], n) : n }

    function b(e, t) { for (var n = 0, i = e.length; n < i; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval")) }

    function x(e, t, n, i, r) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if (o = e[p], o || 0 === o)
                if ("object" === me.type(o)) me.merge(d, o.nodeType ? [o] : o);
                else if (Ge.test(o)) { for (a = a || f.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ke[s] || Ke._default, a.innerHTML = u[1] + me.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            me.merge(d, a.childNodes), a = f.firstChild, a.textContent = "" } else d.push(t.createTextNode(o)); for (f.textContent = "", p = 0; o = d[p++];)
            if (i && me.inArray(o, i) > -1) r && r.push(o);
            else if (l = me.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && b(a), n)
            for (c = 0; o = a[c++];) Qe.test(o.type || "") && n.push(o); return f }

    function w() { return !0 }

    function T() { return !1 }

    function C() { try { return ne.activeElement } catch (e) {} }

    function E(e, t, n, i, r, o) { var a, s; if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) { "string" != typeof n && (i = i || n, n = void 0); for (s in t) E(e, s, n, i, t[s], o); return e } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = T;
        else if (!r) return e; return 1 === o && (a = r, r = function(e) { return me().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = me.guid++)), e.each(function() { me.event.add(this, t, r, i, n) }) }

    function S(e, t) { return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e }

    function k(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function A(e) { var t = rt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function D(e, t) { var n, i, r, o, a, s, u, l; if (1 === t.nodeType) { if (qe.hasData(e) && (o = qe.access(e), a = qe.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (r in l)
                    for (n = 0, i = l[r].length; n < i; n++) me.event.add(t, r, l[r][n]) }
            Pe.hasData(e) && (s = Pe.access(e), u = me.extend({}, s), Pe.set(t, u)) } }

    function j(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && Ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function _(e, t, i, r) { t = oe.apply([], t); var o, a, s, u, l, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            m = me.isFunction(h); if (m || d > 1 && "string" == typeof h && !pe.checkClone && it.test(h)) return e.each(function(n) { var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), _(o, t, i, r) }); if (d && (o = x(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) { for (s = me.map(y(o, "script"), k), u = s.length; f < d; f++) l = o, f !== p && (l = me.clone(l, !0, !0), u && me.merge(s, y(l, "script"))), i.call(e[f], l, f); if (u)
                for (c = s[s.length - 1].ownerDocument, me.map(s, A), f = 0; f < u; f++) l = s[f], Qe.test(l.type || "") && !qe.access(l, "globalEval") && me.contains(c, l) && (l.src ? me._evalUrl && me._evalUrl(l.src) : n(l.textContent.replace(ot, ""), c)) } return e }

    function N(e, t, n) { for (var i, r = t ? me.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || me.cleanData(y(i)), i.parentNode && (n && me.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i)); return e }

    function L(e, t, n) { var i, r, o, a, s = e.style; return n = n || ut(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || me.contains(e.ownerDocument, e) || (a = me.style(e, t)), !pe.pixelMarginRight() && st.test(a) && at.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function O(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function F(e) { if (e in ht) return e; for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
            if (e = pt[n] + t, e in ht) return e }

    function I(e) { var t = me.cssProps[e]; return t || (t = me.cssProps[e] = F(e) || e), t }

    function q(e, t, n) { var i = Re.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function P(e, t, n, i, r) { var o, a = 0; for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += me.css(e, n + $e[o], !0, r)), i ? ("content" === n && (a -= me.css(e, "padding" + $e[o], !0, r)), "margin" !== n && (a -= me.css(e, "border" + $e[o] + "Width", !0, r))) : (a += me.css(e, "padding" + $e[o], !0, r), "padding" !== n && (a += me.css(e, "border" + $e[o] + "Width", !0, r))); return a }

    function z(e, t, n) { var i, r = ut(e),
            o = L(e, t, r),
            a = "border-box" === me.css(e, "boxSizing", !1, r); return st.test(o) ? o : (i = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), o = parseFloat(o) || 0, o + P(e, t, n || (a ? "border" : "content"), i, r) + "px") }

    function M(e, t, n, i, r) { return new M.prototype.init(e, t, n, i, r) }

    function H() { gt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(H) : e.setTimeout(H, me.fx.interval), me.fx.tick()) }

    function R() { return e.setTimeout(function() { mt = void 0 }), mt = me.now() }

    function $(e, t) { var n, i = 0,
            r = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t) n = $e[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r }

    function W(e, t, n) { for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i }

    function B(e, t, n) { var i, r, o, a, s, u, l, c, f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            m = e.nodeType && We(e),
            g = qe.get(e, "fxshow");
        n.queue || (a = me._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, d.always(function() { d.always(function() { a.unqueued--, me.queue(e, "fx").length || a.empty.fire() }) })); for (i in t)
            if (r = t[i], vt.test(r)) { if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) { if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0 }
                p[i] = g && g[i] || me.style(e, i) }
        if (u = !me.isEmptyObject(t), u || !me.isEmptyObject(p)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = g && g.display, null == l && (l = qe.get(e, "display")), c = me.css(e, "display"), "none" === c && (l ? c = l : (v([e], !0), l = e.style.display || l, c = me.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === me.css(e, "float") && (u || (d.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (i in p) u || (g ? "hidden" in g && (m = g.hidden) : g = qe.access(e, "fxshow", { display: l }), o && (g.hidden = !m), m && v([e], !0), d.done(function() { m || v([e]), qe.remove(e, "fxshow"); for (i in p) me.style(e, i, p[i]) })), u = W(m ? g[i] : 0, i, d), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0)) } }

    function Y(e, t) { var n, i, r, o, a; for (n in e)
            if (i = me.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = me.cssHooks[i], a && "expand" in a) { o = a.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r }

    function U(e, t, n) { var i, r, o = 0,
            a = U.prefilters.length,
            s = me.Deferred().always(function() { delete u.elem }),
            u = function() { if (r) return !1; for (var t = mt || R(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
            l = s.promise({ elem: e, props: me.extend({}, t), opts: me.extend(!0, { specialEasing: {}, easing: me.easing._default }, n), originalProperties: t, originalOptions: n, startTime: mt || R(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = me.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(i), i }, stop: function(t) { var n = 0,
                        i = t ? l.tweens.length : 0; if (r) return this; for (r = !0; n < i; n++) l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }),
            c = l.props; for (Y(c, l.opts.specialEasing); o < a; o++)
            if (i = U.prefilters[o].call(l, e, c, l.opts)) return me.isFunction(i.stop) && (me._queueHooks(l.elem, l.opts.queue).stop = me.proxy(i.stop, i)), i;
        return me.map(c, W, l), me.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), me.fx.timer(me.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l }

    function X(e) { var t = e.match(Ne) || []; return t.join(" ") }

    function Q(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function K(e, t, n, i) { var r; if (Array.isArray(t)) me.each(t, function(t, r) { n || Dt.test(e) ? i(e, r) : K(e + "[" + ("object" === ("undefined" == typeof r ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== me.type(t)) i(e, t);
        else
            for (r in t) K(e + "[" + r + "]", t[r], n, i) }

    function G(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var i, r = 0,
                o = t.toLowerCase().match(Ne) || []; if (me.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

    function V(e, t, n, i) {
        function r(s) { var u; return o[s] = !0, me.each(e[s] || [], function(e, s) { var l = s(t, n, i); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1) }), u } var o = {},
            a = e === Ht; return r(t.dataTypes[0]) || !o["*"] && r("*") }

    function Z(e, t) { var n, i, r = me.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && me.extend(!0, e, i), e }

    function J(e, t, n) { for (var i, r, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) { u.unshift(r); break }
        if (u[0] in n) o = u[0];
        else { for (r in n) { if (!u[0] || e.converters[r + " " + u[0]]) { o = r; break }
                a || (a = r) }
            o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }

    function ee(e, t, n, i) { var r, o, a, s, u, l = {},
            c = e.dataTypes.slice(); if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) { if (a = l[u + " " + o] || l["* " + o], !a)
                for (r in l)
                    if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1])); break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (f) { return { state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } var te = [],
        ne = e.document,
        ie = Object.getPrototypeOf,
        re = te.slice,
        oe = te.concat,
        ae = te.push,
        se = te.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        fe = ce.toString,
        de = fe.call(Object),
        pe = {},
        he = "3.2.1",
        me = function Kt(e, t) { return new Kt.fn.init(e, t) },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function(e, t) { return t.toUpperCase() };
    me.fn = me.prototype = { jquery: he, constructor: me, length: 0, toArray: function() { return re.call(this) }, get: function(e) { return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = me.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return me.each(this, e) }, map: function(e) { return this.pushStack(me.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(re.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: ae, sort: te.sort, splice: te.splice }, me.extend = me.fn.extend = function() { var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" === ("undefined" == typeof a ? "undefined" : _typeof(a)) || me.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (l && i && (me.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, a[t] = me.extend(l, o, i)) : void 0 !== i && (a[t] = i));
        return a }, me.extend({ expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isFunction: function(e) { return "function" === me.type(e) }, isWindow: function(e) { return null != e && e === e.window }, isNumeric: function(e) { var t = me.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== le.call(e)) && (!(t = ie(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && fe.call(n) === de)) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, type: function(e) { return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? ue[le.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e) }, globalEval: function(e) { n(e) }, camelCase: function(e) { return e.replace(ve, "ms-").replace(ye, be) }, each: function(e, t) { var n, r = 0; if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(ge, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : se.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e }, grep: function(e, t, n) { for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o), i !== s && r.push(e[o]); return r }, map: function(e, t, n) { var r, o, a = 0,
                s = []; if (i(e))
                for (r = e.length; a < r; a++) o = t(e[a], a, n), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, n), null != o && s.push(o); return oe.apply([], s) }, guid: 1, proxy: function Gt(e, t) { var n, i, Gt; if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = re.call(arguments, 2), Gt = function() { return e.apply(t || this, i.concat(re.call(arguments))) }, Gt.guid = e.guid = e.guid || me.guid++, Gt }, now: Date.now, support: pe }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { ue["[object " + t + "]"] = t.toLowerCase() }); var xe = function(e) {
        function t(e, t, n, i) { var r, o, a, s, u, l, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n; if (!i && ((t ? t.ownerDocument || t : R) !== O && L(t), t = t || O, I)) { if (11 !== h && (u = ve.exec(e)))
                    if (r = u[1]) { if (9 === h) { if (!(a = t.getElementById(r))) return n; if (a.id === r) return n.push(a), n } else if (d && (a = d.getElementById(r)) && M(t, a) && a.id === r) return n.push(a), n } else { if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n; if ((r = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n }
                if (T.qsa && !U[e + " "] && (!q || !q.test(e))) { if (1 !== h) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) { for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = H), l = k(e), o = l.length; o--;) l[o] = "#" + s + " " + p(l[o]);
                        c = l.join(","), d = ye.test(e) && f(t.parentNode) || t } if (c) try { return Z.apply(n, d.querySelectorAll(c)), n } catch (m) {} finally { s === H && t.removeAttribute("id") } } } return D(e.replace(se, "$1"), t, n, i) }

        function n() {
            function e(n, i) { return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i } var t = []; return e }

        function i(e) { return e[H] = !0, e }

        function r(e) { var t = O.createElement("fieldset"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t }

        function a(e, t) { var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i) return i; if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function s(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

        function u(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function l(e) { return function(t) { return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function c(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r])) }) }) }

        function f(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function p(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function h(e, t, n) { var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = W++; return t.first ? function(t, n, r) { for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1 } : function(t, n, u) { var l, c, f, d = [$, s]; if (u) { for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (f = t[H] || (t[H] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else { if ((l = c[o]) && l[0] === $ && l[1] === s) return d[2] = l[2]; if (c[o] = d, d[2] = e(t, n, u)) return !0 } return !1 } }

        function m(e) { return e.length > 1 ? function(t, n, i) { for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0 } : e[0] }

        function g(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

        function v(e, t, n, i, r) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s))); return a }

        function y(e, t, n, r, o, a) { return r && !r[H] && (r = y(r)), o && !o[H] && (o = y(o, a)), i(function(i, a, s, u) { var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    m = i || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : v(m, d, e, s, u),
                    b = n ? o || (i ? e : h || r) ? [] : a : y; if (n && n(y, b, s, u), r)
                    for (l = v(b, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f)); if (i) { if (o || e) { if (o) { for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u) } for (c = b.length; c--;)(f = b[c]) && (l = o ? ee(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f)) } } else b = v(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Z.apply(a, b) }) }

        function b(e) { for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) { return e === t }, a, !0), l = h(function(e) { return ee(t, e) > -1 }, a, !0), c = [function(e, n, i) { var r = !o && (i || n !== j) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i)); return t = null, r }]; s < r; s++)
                if (n = C.relative[e[s].type]) c = [h(m(c), n)];
                else { if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) { for (i = ++s; i < r && !C.relative[e[i].type]; i++); return y(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, s < i && b(e.slice(s, i)), i < r && b(e = e.slice(i)), i < r && p(e)) }
                    c.push(n) }
            return m(c) }

        function x(e, n) { var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, u, l) { var c, f, d, p = 0,
                        h = "0",
                        m = i && [],
                        g = [],
                        y = j,
                        b = i || o && C.find.TAG("*", l),
                        x = $ += null == y ? 1 : Math.random() || .1,
                        w = b.length; for (l && (j = a === O || a || l); h !== w && null != (c = b[h]); h++) { if (o && c) { for (f = 0, a || c.ownerDocument === O || (L(c), s = !I); d = e[f++];)
                                if (d(c, a || O, s)) { u.push(c); break }
                            l && ($ = x) }
                        r && ((c = !d && c) && p--, i && m.push(c)) } if (p += h, r && h !== p) { for (f = 0; d = n[f++];) d(m, g, a, s); if (i) { if (p > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = G.call(u));
                            g = v(g) }
                        Z.apply(u, g), l && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(u) } return l && ($ = x, j = y), m }; return r ? i(a) : a } var w, T, C, E, S, k, A, D, j, _, N, L, O, F, I, q, P, z, M, H = "sizzle" + 1 * new Date,
            R = e.document,
            $ = 0,
            W = 0,
            B = n(),
            Y = n(),
            U = n(),
            X = function(e, t) { return e === t && (N = !0), 0 },
            Q = {}.hasOwnProperty,
            K = [],
            G = K.pop,
            V = K.push,
            Z = K.push,
            J = K.slice,
            ee = function(e, t) { for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1 },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            de = new RegExp("^" + ie + "$"),
            pe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            Ce = function() { L() },
            Ee = h(function(e) { return e.disabled === !0 && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { Z.apply(K = J.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType } catch (Se) { Z = { apply: K.length ? function(e, t) { V.apply(e, J.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }
        T = t.support = {}, S = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, L = t.setDocument = function(e) { var t, n, i = e ? e.ownerDocument || e : R; return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, F = O.documentElement, I = !S(O), R !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), T.getElementsByTagName = r(function(e) { return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length }), T.getElementsByClassName = ge.test(O.getElementsByClassName), T.getById = r(function(e) { return F.appendChild(e).id = H, !O.getElementsByName || !O.getElementsByName(H).length }), T.getById ? (C.filter.ID = function(e) { var t = e.replace(be, xe); return function(e) { return e.getAttribute("id") === t } }, C.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && I) { var n = t.getElementById(e); return n ? [n] : [] } }) : (C.filter.ID = function(e) { var t = e.replace(be, xe); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, C.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && I) { var n, i, r, o = t.getElementById(e); if (o) { if (n = o.getAttributeNode("id"), n && n.value === e) return [o]; for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o] } return [] } }), C.find.TAG = T.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i } return o }, C.find.CLASS = T.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e) }, P = [], q = [], (T.qsa = ge.test(O.querySelectorAll)) && (r(function(e) { F.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]") }), r(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), F.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:") })), (T.matchesSelector = ge.test(z = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function(e) { T.disconnectedMatch = z.call(e, "*"), z.call(e, "[s!='']:x"), P.push("!=", oe) }), q = q.length && new RegExp(q.join("|")), P = P.length && new RegExp(P.join("|")), t = ge.test(F.compareDocumentPosition), M = t || ge.test(F.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, X = t ? function(e, t) { if (e === t) return N = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === R && M(R, e) ? -1 : t === O || t.ownerDocument === R && M(R, t) ? 1 : _ ? ee(_, e) - ee(_, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return N = !0, 0; var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t]; if (!r || !o) return e === O ? -1 : t === O ? 1 : r ? -1 : o ? 1 : _ ? ee(_, e) - ee(_, t) : 0; if (r === o) return a(e, t); for (n = e; n = n.parentNode;) s.unshift(n); for (n = t; n = n.parentNode;) u.unshift(n); for (; s[i] === u[i];) i++; return i ? a(s[i], u[i]) : s[i] === R ? -1 : u[i] === R ? 1 : 0 }, O) : O }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) { if ((e.ownerDocument || e) !== O && L(e), n = n.replace(ce, "='$1']"), T.matchesSelector && I && !U[n + " "] && (!P || !P.test(n)) && (!q || !q.test(n))) try { var i = z.call(e, n); if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (r) {}
            return t(n, O, null, [e]).length > 0 }, t.contains = function(e, t) { return (e.ownerDocument || e) !== O && L(e), M(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && L(e); var n = C.attrHandle[t.toLowerCase()],
                i = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0; return void 0 !== i ? i : T.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.escape = function(e) { return (e + "").replace(we, Te) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) { var t, n = [],
                i = 0,
                r = 0; if (N = !T.detectDuplicates, _ = !T.sortStable && e.slice(0), e.sort(X), N) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return _ = null, e }, E = t.getText = function(e) { var t, n = "",
                i = 0,
                r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += E(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                for (; t = e[i++];) n += E(t); return n }, C = t.selectors = { cacheLength: 50, createPseudo: i, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(be, xe).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = B[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, r) { var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t; return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, u) { var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            b = !1; if (g) { if (o) { for (; m;) { for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? g.firstChild : g.lastChild], a && y) { for (d = g, f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === $ && l[1], b = p && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) { c[e] = [$, p, b]; break } } else if (y && (d = t, f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === $ && l[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [$, b]), d !== t));); return b -= r, b === i || b % i === 0 && b / i >= 0 } } }, PSEUDO: function(e, n) { var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a]) }) : function(e) { return o(e, 0, r) }) : o } }, pseudos: { not: i(function(e) { var t = [],
                        n = [],
                        r = A(e.replace(se, "$1")); return r[H] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: i(function(e) { return function(n) { return t(e, n).length > 0 } }), contains: i(function(e) { return e = e.replace(be, xe),
                        function(t) { return (t.textContent || t.innerText || E(t)).indexOf(e) > -1 } }), lang: i(function(e) { return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                        function(t) { var n;
                            do { if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === F }, focus: function(e) { return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: l(!1), disabled: l(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) { return !C.pseudos.empty(e) }, header: function(e) { return me.test(e.nodeName) }, input: function(e) { return he.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() { return [0] }), last: c(function(e, t) { return [t - 1] }), eq: c(function(e, t, n) { return [n < 0 ? n + t : n] }), even: c(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: c(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }), gt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }, C.pseudos.nth = C.pseudos.eq; for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[w] = s(w); for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w); return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function(e, n) { var i, r, o, a, s, u, l, c = Y[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = C.preFilter; s;) { i && !(r = ue.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(se, " ") }), s = s.slice(i.length)); for (a in C.filter) !(r = pe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length)); if (!i) break } return n ? s.length : s ? t.error(e) : Y(e, u).slice(0) }, A = t.compile = function(e, t) { var n, i = [],
                r = [],
                o = U[e + " "]; if (!o) { for (t || (t = k(e)), n = t.length; n--;) o = b(t[n]), o[H] ? i.push(o) : r.push(o);
                o = U(e, x(r, i)), o.selector = e } return o }, D = t.select = function(e, t, n, i) { var r, o, a, s, u, l = "function" == typeof e && e,
                c = !i && k(e = l.selector || e); if (n = n || [], 1 === c.length) { if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && I && C.relative[o[1].type]) { if (t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (i = u(a.matches[0].replace(be, xe), ye.test(o[0].type) && f(t.parentNode) || t))) { if (o.splice(r, 1), e = i.length && p(o), !e) return Z.apply(n, i), n; break } } return (l || A(e, c))(i, t, !I, n, !t || ye.test(e) && f(t.parentNode) || t), n }, T.sortStable = H.split("").sort(X).join("") === H, T.detectDuplicates = !!N, L(), T.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(O.createElement("fieldset")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), T.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var i; if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(e);
    me.find = xe, me.expr = xe.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = xe.uniqueSort, me.text = xe.getText, me.isXMLDoc = xe.isXML, me.contains = xe.contains, me.escapeSelector = xe.escape; var we = function(e, t, n) { for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) { if (r && me(e).is(n)) break;
                    i.push(e) }
            return i },
        Te = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Ce = me.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [i] : [] : me.find.matches(e, me.grep(t, function(e) { return 1 === e.nodeType })) }, me.fn.extend({ find: function(e) { var t, n, i = this.length,
                r = this; if ("string" != typeof e) return this.pushStack(me(e).filter(function() { for (t = 0; t < i; t++)
                    if (me.contains(r[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, r[t], n); return i > 1 ? me.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(o(this, e || [], !1)) }, not: function(e) { return this.pushStack(o(this, e || [], !0)) }, is: function(e) { return !!o(this, "string" == typeof e && Ce.test(e) ? me(e) : e || [], !1).length } }); var ke, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        De = me.fn.init = function(e, t, n) { var i, r; if (!e) return this; if (n = n || ke, "string" == typeof e) { if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ee.test(i[1]) && me.isPlainObject(t))
                        for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return r = ne.getElementById(i[2]), r && (this[0] = r, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this) };
    De.prototype = me.fn, ke = me(ne); var je = /^(?:parents|prev(?:Until|All))/,
        _e = { children: !0, contents: !0, next: !0, prev: !0 };
    me.fn.extend({ has: function(e) { var t = me(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (me.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && me(e); if (!Ce.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? se.call(me(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), me.each({ parent: function Vt(e) { var Vt = e.parentNode; return Vt && 11 !== Vt.nodeType ? Vt : null }, parents: function(e) { return we(e, "parentNode") }, parentsUntil: function(e, t, n) { return we(e, "parentNode", n) }, next: function(e) { return a(e, "nextSibling") }, prev: function(e) { return a(e, "previousSibling") }, nextAll: function(e) { return we(e, "nextSibling") }, prevAll: function(e) { return we(e, "previousSibling") }, nextUntil: function(e, t, n) { return we(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return we(e, "previousSibling", n) }, siblings: function(e) { return Te((e.parentNode || {}).firstChild, e) }, children: function(e) { return Te(e.firstChild) }, contents: function(e) { return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), me.merge([], e.childNodes)) } }, function(e, t) { me.fn[e] = function(n, i) { var r = me.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = me.filter(i, r)), this.length > 1 && (_e[e] || me.uniqueSort(r), je.test(e) && r.reverse()), this.pushStack(r) } }); var Ne = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) { e = "string" == typeof e ? s(e) : me.extend({}, e); var t, n, i, r, o = [],
            a = [],
            u = -1,
            l = function() { for (r = r || e.once, i = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "") },
            c = { add: function() { return o && (n && !t && (u = o.length - 1, a.push(n)), function i(t) { me.each(t, function(t, n) { me.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== me.type(n) && i(n) }) }(arguments), n && !t && l()), this }, remove: function() { return me.each(arguments, function(e, t) { for (var n;
                            (n = me.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u-- }), this }, has: function(e) { return e ? me.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return r = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return r = a = [], n || t || (o = n = ""), this }, locked: function() { return !!r }, fireWith: function(e, n) { return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!i } }; return c }, me.extend({ Deferred: function(t) { var n = [
                    ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                    ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = { state: function() { return i }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(e) { return r.then(null, e) }, pipe: function() { var e = arguments; return me.Deferred(function(t) { me.each(n, function(n, i) { var r = me.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() { var e = r && r.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments) }) }), e = null }).promise() }, then: function(t, i, r) {
                        function o(t, n, i, r) { return function() { var s = this,
                                    c = arguments,
                                    f = function() { var e, f; if (!(t < a)) { if (e = i.apply(s, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, me.isFunction(f) ? r ? f.call(e, o(a, n, u, r), o(a, n, l, r)) : (a++, f.call(e, o(a, n, u, r), o(a, n, l, r), o(a, n, u, n.notifyWith))) : (i !== u && (s = void 0, c = [e]), (r || n.resolveWith)(s, c)) } },
                                    d = r ? f : function() { try { f() } catch (e) { me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (i !== l && (s = void 0, c = [e]), n.rejectWith(s, c)) } };
                                t ? d() : (me.Deferred.getStackHook && (d.stackTrace = me.Deferred.getStackHook()), e.setTimeout(d)) } } var a = 0; return me.Deferred(function(e) { n[0][3].add(o(0, e, me.isFunction(r) ? r : u, e.notifyWith)), n[1][3].add(o(0, e, me.isFunction(t) ? t : u)), n[2][3].add(o(0, e, me.isFunction(i) ? i : l)) }).promise() }, promise: function(e) { return null != e ? me.extend(e, r) : r } },
                o = {}; return me.each(n, function(e, t) { var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() { i = s }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), r.promise(o), t && t.call(o, o), o }, when: function(e) { var t = arguments.length,
                n = t,
                i = Array(n),
                r = re.call(arguments),
                o = me.Deferred(),
                a = function(e) { return function(n) { i[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(i, r) } }; if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || me.isFunction(r[n] && r[n].then))) return o.then(); for (; n--;) c(r[n], a(n), o.reject); return o.promise() } }); var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, me.readyException = function(t) { e.setTimeout(function() { throw t }) }; var Oe = me.Deferred();
    me.fn.ready = function(e) { return Oe.then(e)["catch"](function(e) { me.readyException(e) }), this }, me.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || Oe.resolveWith(ne, [me])) } }), me.ready.then = Oe.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f)); var Fe = function Zt(e, t, n, i, r, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === me.type(n)) { r = !0; for (s in n) Zt(e, t, s, n[s], !0, o, a) } else if (void 0 !== i && (r = !0, me.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) { return l.call(me(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n))); return r ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        Ie = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    d.uid = 1, d.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var i, r = this.cache(e); if ("string" == typeof t) r[me.camelCase(t)] = n;
            else
                for (i in t) r[me.camelCase(i)] = t[i]; return r }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length; for (; n--;) delete i[t[n]] }(void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !me.isEmptyObject(t) } }; var qe = new d,
        Pe = new d,
        ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    me.extend({ hasData: function(e) { return Pe.hasData(e) || qe.hasData(e) }, data: function(e, t, n) { return Pe.access(e, t, n) }, removeData: function(e, t) { Pe.remove(e, t) }, _data: function(e, t, n) { return qe.access(e, t, n) }, _removeData: function(e, t) { qe.remove(e, t) } }), me.fn.extend({ data: function Jt(e, t) { var n, i, Jt, r = this[0],
                o = r && r.attributes; if (void 0 === e) { if (this.length && (Jt = Pe.get(r), 1 === r.nodeType && !qe.get(r, "hasDataAttrs"))) { for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = me.camelCase(i.slice(5)), h(r, i, Jt[i])));
                    qe.set(r, "hasDataAttrs", !0) } return Jt } return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? this.each(function() { Pe.set(this, e) }) : Fe(this, function(t) { var n; if (r && void 0 === t) { if (n = Pe.get(r, e), void 0 !== n) return n; if (n = h(r, e), void 0 !== n) return n } else this.each(function() { Pe.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { Pe.remove(this, e) }) } }), me.extend({ queue: function en(e, t, n) { var en; if (e) return t = (t || "fx") + "queue", en = qe.get(e, t), n && (!en || Array.isArray(n) ? en = qe.access(e, t, me.makeArray(n)) : en.push(n)), en || [] }, dequeue: function(e, t) { t = t || "fx"; var n = me.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = me._queueHooks(e, t),
                a = function() { me.dequeue(e, t) }; "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return qe.get(e, n) || qe.access(e, n, { empty: me.Callbacks("once memory").add(function() { qe.remove(e, [t + "queue", n]) }) }) } }), me.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { me.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                r = me.Deferred(),
                o = this,
                a = this.length,
                s = function() {--i || r.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = qe.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s)); return s(), r.promise(t) } }); var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
        $e = ["Top", "Right", "Bottom", "Left"],
        We = function(e, t) { return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display") },
        Be = function(e, t, n, i) { var r, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []); for (o in t) e.style[o] = a[o]; return r },
        Ye = {};
    me.fn.extend({ show: function() { return v(this, !0) }, hide: function() { return v(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { We(this) ? me(this).show() : me(this).hide() }) } }); var Ue = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ke = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td; var Ge = /<|&#?\w+;/;! function() { var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue }(); var Ve = ne.documentElement,
        Ze = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    me.event = { global: {}, add: function(e, t, n, i, r) { var o, a, s, u, l, c, f, d, p, h, m, g = qe.get(e); if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && me.find.matchesSelector(Ve, r), n.guid || (n.guid = me.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) { return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0 }), t = (t || "").match(Ne) || [""], l = t.length; l--;) s = et.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = me.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = me.event.special[p] || {}, c = me.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && me.expr.match.needsContext.test(r), namespace: h.join(".") }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), me.event.global[p] = !0) }, remove: function(e, t, n, i, r) { var o, a, s, u, l, c, f, d, p, h, m, g = qe.hasData(e) && qe.get(e); if (g && (u = g.events)) { for (t = (t || "").match(Ne) || [""], l = t.length; l--;)
                    if (s = et.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) { for (f = me.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || me.removeEvent(e, p, g.handle), delete u[p]) } else
                        for (p in u) me.event.remove(e, p + t[l], n, i, !0);
                me.isEmptyObject(u) && qe.remove(e, "handle events") } }, dispatch: function(e) { var t, n, i, r, o, a, s = me.event.fix(e),
                u = new Array(arguments.length),
                l = (qe.get(this, "events") || {})[s.type] || [],
                c = me.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) { for (a = me.event.handlers.call(this, s, l), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, i = ((me.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, i, r, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) { for (o = [], a = {}, n = 0; n < u; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? me(r, this).index(l) > -1 : me.find(r, this, null, [l]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(e, t) { Object.defineProperty(me.Event.prototype, e, { enumerable: !0, configurable: !0, get: me.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[me.expando] ? e : new me.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== C() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === C() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1 }, _default: function(e) { return r(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, me.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, me.Event = function(e, t) { return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t) }, me.Event.prototype = { constructor: me.Event, isDefaultPrevented: T, isPropagationStopped: T, isImmediatePropagationStopped: T, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, me.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, me.event.addProp), me.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { me.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj; return r && (r === i || me.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), me.fn.extend({ on: function(e, t, n, i) { return E(this, e, t, n, i) }, one: function(e, t, n, i) { return E(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) { for (r in e) this.off(r, t, e[r]); return this } return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function() { me.event.remove(this, e, n, t) }) } }); var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({ htmlPrefilter: function(e) { return e.replace(tt, "<$1></$2>") }, clone: function tn(e, t, n) { var i, r, o, a, tn = e.cloneNode(!0),
                s = me.contains(e.ownerDocument, e); if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (a = y(tn), o = y(e), i = 0, r = o.length; i < r; i++) j(o[i], a[i]); if (t)
                if (n)
                    for (o = o || y(e), a = a || y(tn), i = 0, r = o.length; i < r; i++) D(o[i], a[i]);
                else D(e, tn);
            return a = y(tn, "script"), a.length > 0 && b(a, !s && y(e, "script")), tn }, cleanData: function(e) { for (var t, n, i, r = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) { if (t = n[qe.expando]) { if (t.events)
                            for (i in t.events) r[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                        n[qe.expando] = void 0 }
                    n[Pe.expando] && (n[Pe.expando] = void 0) } } }), me.fn.extend({ detach: function(e) { return N(this, e, !0) }, remove: function(e) { return N(this, e) }, text: function(e) { return Fe(this, function(e) { return void 0 === e ? me.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return _(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = S(this, e);
                    t.appendChild(e) } }) }, prepend: function() { return _(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = S(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return _(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return _(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(y(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return me.clone(this, e, t) }) }, html: function(e) { return Fe(this, function(e) { var t = this[0] || {},
                    n = 0,
                    i = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !nt.test(e) && !Ke[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) { e = me.htmlPrefilter(e); try { for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0 } catch (r) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return _(this, arguments, function(t) { var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)), n && n.replaceChild(t, this)) }, e) } }), me.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { me.fn[e] = function(e) { for (var n, i = [], r = me(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), me(r[a])[t](n), ae.apply(i, n.get()); return this.pushStack(i) } }); var at = /^margin/,
        st = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
        ut = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };! function() {
        function t() { if (s) { s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ve.appendChild(a); var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ve.removeChild(a), s = null } } var n, i, r, o, a = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), me.extend(pe, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), i }, pixelMarginRight: function() { return t(), r }, reliableMarginLeft: function() { return t(), o } })) }(); var lt = /^(none|table(?!-c[ea]).+)/,
        ct = /^--/,
        ft = { position: "absolute", visibility: "hidden", display: "block" },
        dt = { letterSpacing: "0", fontWeight: "400" },
        pt = ["Webkit", "Moz", "ms"],
        ht = ne.createElement("div").style;
    me.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = L(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function nn(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var r, o, a, s = me.camelCase(t),
                    u = ct.test(t),
                    nn = e.style; return u || (t = I(s)), a = me.cssHooks[t] || me.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : nn[t] : (o = "undefined" == typeof n ? "undefined" : _typeof(n), "string" === o && (r = Re.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (me.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (nn[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (u ? nn.setProperty(t, n) : nn[t] = n)), void 0) } }, css: function(e, t, n, i) { var r, o, a, s = me.camelCase(t),
                u = ct.test(t); return u || (t = I(s)), a = me.cssHooks[t] || me.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = L(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r } }), me.each(["height", "width"], function(e, t) { me.cssHooks[t] = { get: function(e, n, i) { if (n) return !lt.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, i) : Be(e, ft, function() { return z(e, t, i) }) }, set: function(e, n, i) { var r, o = i && ut(e),
                    a = i && P(e, t, i, "border-box" === me.css(e, "boxSizing", !1, o), o); return a && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = me.css(e, t)), q(e, n, a) } } }), me.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), me.each({ margin: "", padding: "", border: "Width" }, function(e, t) { me.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + $e[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, at.test(e) || (me.cssHooks[e + t].set = q) }), me.fn.extend({ css: function(e, t) { return Fe(this, function(e, t, n) { var i, r, o = {},
                    a = 0; if (Array.isArray(t)) { for (i = ut(e), r = t.length; a < r; a++) o[t[a]] = me.css(e, t[a], !1, i); return o } return void 0 !== n ? me.style(e, t, n) : me.css(e, t) }, e, t, arguments.length > 1) } }), me.Tween = M, M.prototype = { constructor: M, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (me.cssNumber[n] ? "" : "px") }, cur: function() { var e = M.propHooks[this.prop]; return e && e.get ? e.get(this) : M.propHooks._default.get(this) }, run: function(e) { var t, n = M.propHooks[this.prop]; return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit) } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, me.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, me.fx = M.prototype.init, me.fx.step = {}; var mt, gt, vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    me.Animation = me.extend(U, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return m(n.elem, e, Re.exec(t), n), n }] }, tweener: function(e, t) { me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t) }, prefilters: [B], prefilter: function(e, t) { t ? U.prefilters.unshift(e) : U.prefilters.push(e) } }), me.speed = function(e, t, n) { var i = e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? me.extend({}, e) : { complete: n || !n && t || me.isFunction(e) && e, duration: e, easing: n && t || t && !me.isFunction(t) && t }; return me.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue) }, i }, me.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(We).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) { var r = me.isEmptyObject(e),
                    o = me.speed(t, n, i),
                    a = function() { var t = U(this, me.extend({}, e), o);
                        (r || qe.get(this, "finish")) && t.stop(!0) }; return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) { var i = function(e) { var t = e.stop;
                    delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() { var t = !0,
                        r = null != e && e + "queueHooks",
                        o = me.timers,
                        a = qe.get(this); if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && yt.test(r) && i(a[r]); for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));!t && n || me.dequeue(this, e) }) }, finish: function(e) { return e !== !1 && (e = e || "fx"), this.each(function() { var t, n = qe.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = me.timers,
                        a = i ? i.length : 0; for (n.finish = !0, me.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish }) } }), me.each(["toggle", "show", "hide"], function(e, t) { var n = me.fn[t];
            me.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r) } }), me.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { me.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), me.timers = [], me.fx.tick = function() { var e, t = 0,
                n = me.timers; for (mt = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(), mt = void 0 }, me.fx.timer = function(e) { me.timers.push(e), me.fx.start() }, me.fx.interval = 13, me.fx.start = function() { gt || (gt = !0, H()) }, me.fx.stop = function() { gt = null }, me.fx.speeds = { slow: 600, fast: 200, _default: 400 }, me.fn.delay = function(t, n) { return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) { var r = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(r) } }) },
        function() { var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value }(); var bt, xt = me.expr.attrHandle;
    me.fn.extend({ attr: function(e, t) { return Fe(this, me.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { me.removeAttr(this, e) }) } }), me.extend({ attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (r = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = me.find.attr(e, t), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(e, t) { if (!pe.radioValue && "radio" === t && r(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                r = t && t.match(Ne); if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n) } }), bt = { set: function(e, t, n) { return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n } }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = xt[t] || me.find.attr;
        xt[t] = function(e, t, i) { var r, o, a = t.toLowerCase(); return i || (o = xt[a], xt[a] = r, r = null != n(e, t, i) ? a : null, xt[a] = o), r } }); var wt = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
    me.fn.extend({ prop: function(e, t) { return Fe(this, me.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[me.propFix[e] || e] }) } }), me.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, r = me.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = me.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : wt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), pe.optSelected || (me.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { me.propFix[this.toLowerCase()] = this }), me.fn.extend({ addClass: function(e) { var t, n, i, r, o, a, s, u = 0; if (me.isFunction(e)) return this.each(function(t) { me(this).addClass(e.call(this, t, Q(this))) }); if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[u++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + X(r) + " ") { for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = X(i), r !== s && n.setAttribute("class", s) }
            return this }, removeClass: function(e) { var t, n, i, r, o, a, s, u = 0; if (me.isFunction(e)) return this.each(function(t) { me(this).removeClass(e.call(this, t, Q(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[u++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + X(r) + " ") { for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = X(i), r !== s && n.setAttribute("class", s) }
            return this }, toggleClass: function(e, t) { var n = "undefined" == typeof e ? "undefined" : _typeof(e); return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) { me(this).toggleClass(e.call(this, n, Q(this), t), t) }) : this.each(function() { var t, i, r, o; if ("string" === n)
                    for (i = 0, r = me(this), o = e.match(Ne) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Q(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : qe.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + X(Q(n)) + " ").indexOf(t) > -1) return !0;
            return !1 } }); var Ct = /\r/g;
    me.fn.extend({ val: function(e) { var t, n, i, r = this[0]; { if (arguments.length) return i = me.isFunction(e), this.each(function(n) { var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, me(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = me.map(r, function(e) { return null == e ? "" : e + "" })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) }); if (r) return t = me.valHooks[r.type] || me.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n) } } }), me.extend({ valHooks: { option: { get: function(e) { var t = me.find.attr(e, "value"); return null != t ? t : X(me.text(e)) } }, select: { get: function(e) { var t, n, i, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : o.length; for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                        if (n = o[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) { if (t = me(n).val(), s) return t;
                            u.push(t) }
                    return u }, set: function(e, t) { for (var n, i, r = e.options, o = me.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = me.inArray(me.valHooks.option.get(i), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), me.each(["radio", "checkbox"], function() { me.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1 } }, pe.checkOn || (me.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Et = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, { trigger: function(t, n, i, r) { var o, a, s, u, l, c, f, d = [i || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : []; if (a = s = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(p + me.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[me.expando] ? t : new me.Event(p, "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : me.makeArray(n, [t]), f = me.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) { if (!r && !f.noBubble && !me.isWindow(i)) { for (u = f.delegateType || p, Et.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (i.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e) } for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Ie(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault()); return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Ie(i) || l && me.isFunction(i[p]) && !me.isWindow(i) && (s = i[l], s && (i[l] = null), me.event.triggered = p, i[p](), me.event.triggered = void 0, s && (i[l] = s)), t.result } }, simulate: function(e, t, n) { var i = me.extend(new me.Event, n, { type: e, isSimulated: !0 });
            me.event.trigger(i, null, t) } }), me.fn.extend({ trigger: function(e, t) { return this.each(function() { me.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return me.event.trigger(e, t, n, !0) } }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { me.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), me.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), pe.focusin = "onfocusin" in e, pe.focusin || me.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { me.event.simulate(t, e.target, me.event.fix(e)) };
        me.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                    r = qe.access(i, t);
                r || i.addEventListener(e, n, !0), qe.access(i, t, (r || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                    r = qe.access(i, t) - 1;
                r ? qe.access(i, t, r) : (i.removeEventListener(e, n, !0), qe.remove(i, t)) } } }); var St = e.location,
        kt = me.now(),
        At = /\?/;
    me.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (i) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n }; var Dt = /\[\]$/,
        jt = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) { var n, i = [],
            r = function(e, t) { var n = me.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) K(n, e[n], t, r); return i.join("&") }, me.fn.extend({ serialize: function() { return me.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = me.prop(this, "elements"); return e ? me.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !me(this).is(":disabled") && Nt.test(this.nodeName) && !_t.test(e) && (this.checked || !Ue.test(e)) }).map(function(e, t) { var n = me(this).val(); return null == n ? null : Array.isArray(n) ? me.map(n, function(e) { return { name: t.name, value: e.replace(jt, "\r\n") } }) : { name: t.name, value: n.replace(jt, "\r\n") } }).get() } }); var Lt = /%20/g,
        Ot = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Mt = {},
        Ht = {},
        Rt = "*/".concat("*"),
        $t = ne.createElement("a");
    $t.href = St.href, me.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: St.href, type: "GET", isLocal: qt.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": me.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? Z(Z(e, me.ajaxSettings), t) : Z(me.ajaxSettings, e) }, ajaxPrefilter: G(Mt), ajaxTransport: G(Ht), ajax: function(t, n) {
            function i(t, n, i, s) { var l, d, p, x, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), r = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (x = J(h, C, i)), x = ee(h, x, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (me.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (me.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, p = x.error, l = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(m, [d, T, C]) : v.rejectWith(m, [C, T, p]), C.statusCode(b), b = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? d : p]), y.fireWith(m, [C, T]), f && (g.trigger("ajaxComplete", [C, h]), --me.active || me.event.trigger("ajaxStop"))) } "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {}; var r, o, a, s, u, l, c, f, d, p, h = me.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                v = me.Deferred(),
                y = me.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                C = { readyState: 0, getResponseHeader: function(e) { var t; if (c) { if (!s)
                                for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return c ? a : null }, setRequestHeader: function(e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this }, overrideMimeType: function(e) { return null == c && (h.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this }, abort: function(e) { var t = e || T; return r && r.abort(t), i(0, t), this } }; if (v.promise(C), h.url = ((t || h.url || St.href) + "").replace(zt, St.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) { l = ne.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host } catch (E) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), V(Mt, h, n, C), c) return C;
            f = me.event && h.global, f && 0 === me.active++ && me.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(o.length), h.data && (o += (At.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Ft, "$1"), p = (At.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p), h.ifModified && (me.lastModified[o] && C.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && C.setRequestHeader("If-None-Match", me.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]); for (d in h.headers) C.setRequestHeader(d, h.headers[d]); if (h.beforeSend && (h.beforeSend.call(m, C, h) === !1 || c)) return C.abort(); if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = V(Ht, h, n, C)) { if (C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { C.abort("timeout") }, h.timeout)); try { c = !1, r.send(x, i) } catch (E) { if (c) throw E;
                    i(-1, E) } } else i(-1, "No Transport"); return C }, getJSON: function(e, t, n) { return me.get(e, t, n, "json") }, getScript: function(e, t) { return me.get(e, void 0, t, "script") } }), me.each(["get", "post"], function(e, t) { me[t] = function(e, n, i, r) { return me.isFunction(n) && (r = r || i, i = n, n = void 0), me.ajax(me.extend({ url: e, type: t, dataType: r, data: n, success: i }, me.isPlainObject(e) && e)) } }), me._evalUrl = function(e) { return me.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, me.fn.extend({ wrapAll: function(e) { var t; return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return me.isFunction(e) ? this.each(function(t) { me(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = me.isFunction(e); return this.each(function(n) { me(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { me(this).replaceWith(this.childNodes) }), this } }), me.expr.pseudos.hidden = function(e) { return !me.expr.pseudos.visible(e) }, me.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, me.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (t) {} }; var Wt = { 0: 200, 1223: 204 },
        Bt = me.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, me.ajaxTransport(function(t) { var n, i; if (pe.cors || Bt && !t.crossDomain) return { send: function(r, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"); for (a in r) s.setRequestHeader(a, r[a]);
                n = function(e) { return function() { n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (u) { if (n) throw u } }, abort: function() { n && n() } } }), me.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), me.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return me.globalEval(e), e } } }), me.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), me.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, r) { t = me("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), ne.head.appendChild(t[0]) }, abort: function() { n && n() } } } }); var Yt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Yt.pop() || me.expando + "_" + kt++; return this[e] = !0, e } }), me.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + r) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return a || me.error(r + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { a = arguments }, i.always(function() { void 0 === o ? me(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Yt.push(r)), a && me.isFunction(o) && o(a[0]), a = o = void 0 }), "script" }), pe.createHTMLDocument = function() { var e = ne.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), me.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, r, o; return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), r = Ee.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, o), o && o.length && me(o).remove(), me.merge([], r.childNodes)) }, me.fn.load = function(e, t, n) { var i, r, o, a = this,
            s = e.indexOf(" "); return s > -1 && (i = X(e.slice(s)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (r = "POST"), a.length > 0 && me.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { me.fn[t] = function(e) { return this.on(t, e) } }), me.expr.pseudos.animated = function(e) { return me.grep(me.timers, function(t) { return e === t.elem }).length }, me.offset = { setOffset: function(e, t, n) { var i, r, o, a, s, u, l, c = me.css(e, "position"),
                f = me(e),
                d = {}; "static" === c && (e.style.position = "relative"), s = f.offset(), o = me.css(e, "top"), u = me.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = f.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(u) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d) } }, me.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { me.offset.setOffset(this, e, t) }); var t, n, i, r, o = this[0]; if (o) return o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var e, t, n = this[0],
                    i = { top: 0, left: 0 }; return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + me.css(e[0], "borderTopWidth", !0), left: i.left + me.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - me.css(n, "marginTop", !0), left: t.left - i.left - me.css(n, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent; return e || Ve }) } }), me.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
        me.fn[e] = function(i) { return Fe(this, function(e, i, r) { var o; return me.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r) }, e, i, arguments.length) } }), me.each(["top", "left"], function(e, t) { me.cssHooks[t] = O(pe.pixelPosition, function(e, n) { if (n) return n = L(e, t), st.test(n) ? me(e).position()[t] + "px" : n }) }), me.each({ Height: "height", Width: "width" }, function(e, t) { me.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { me.fn[i] = function(r, o) { var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || o === !0 ? "margin" : "border"); return Fe(this, function(t, n, r) { var o; return me.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? me.css(t, n, s) : me.style(t, n, r, s) }, t, a ? r : void 0, a) } }) }), me.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), me.holdReady = function(e) { e ? me.readyWait++ : me.ready(!0) }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() { return me }); var Xt = e.jQuery,
        Qt = e.$; return me.noConflict = function(t) { return e.$ === me && (e.$ = Qt), t && e.jQuery === me && (e.jQuery = Xt), me }, t || (e.jQuery = e.$ = me), me }),
function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("whatInput", [], t) : "object" == typeof exports ? exports.whatInput = t() : e.whatInput = t() }(this, function() { return function(e) {
        function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { exports: {}, id: i, loaded: !1 }; return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports } var n = {}; return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t) { e.exports = function() { var e = document.documentElement,
                t = "initial",
                n = null,
                i = ["input", "select", "textarea"],
                r = [16, 17, 18, 91, 93],
                o = { keyup: "keyboard", mousedown: "mouse", mousemove: "mouse", MSPointerDown: "pointer", MSPointerMove: "pointer", pointerdown: "pointer", pointermove: "pointer", touchstart: "touch" },
                a = [],
                s = !1,
                u = { 2: "touch", 3: "touch", 4: "mouse" },
                l = null,
                c = function() { o[v()] = "mouse", f(), p() },
                f = function() { window.PointerEvent ? (e.addEventListener("pointerdown", d), e.addEventListener("pointermove", h)) : window.MSPointerEvent ? (e.addEventListener("MSPointerDown", d), e.addEventListener("MSPointerMove", h)) : (e.addEventListener("mousedown", d), e.addEventListener("mousemove", h), "ontouchstart" in window && e.addEventListener("touchstart", m)), e.addEventListener(v(), h), e.addEventListener("keydown", d), e.addEventListener("keyup", d) },
                d = function(e) { if (!s) { var a = e.which,
                            u = o[e.type]; if ("pointer" === u && (u = g(e)), t !== u || n !== u) { var l = document.activeElement,
                                c = !(!l || !l.nodeName || i.indexOf(l.nodeName.toLowerCase()) !== -1);
                            ("touch" === u || "mouse" === u && r.indexOf(a) === -1 || "keyboard" === u && c) && (t = n = u, p()) } } },
                p = function() { e.setAttribute("data-whatinput", t), e.setAttribute("data-whatintent", t), a.indexOf(t) === -1 && (a.push(t), e.className += " whatinput-types-" + t) },
                h = function(t) { if (!s) { var i = o[t.type]; "pointer" === i && (i = g(t)), n !== i && (n = i, e.setAttribute("data-whatintent", n)) } },
                m = function(e) { window.clearTimeout(l), d(e), s = !0, l = window.setTimeout(function() { s = !1 }, 200) },
                g = function(e) { return "number" == typeof e.pointerType ? u[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType },
                v = function() { return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll" }; return "addEventListener" in window && Array.prototype.indexOf && c(), { ask: function(e) { return "loose" === e ? n : t }, types: function() { return a } } }() }]) });
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e) {
    function t(e) { if (void 0 === Function.prototype.name) { var t = /function\s([^(]{1,})\(/,
                n = t.exec(e.toString()); return n && n.length > 1 ? n[1].trim() : "" } return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name }

    function n(e) { return "true" === e || "false" !== e && (isNaN(1 * e) ? e : parseFloat(e)) }

    function i(e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() } var r = "6.3.1",
        o = { version: r, _plugins: {}, _uuids: [], rtl: function() { return "rtl" === e("html").attr("dir") }, plugin: function(e, n) { var r = n || t(e),
                    o = i(r);
                this._plugins[o] = this[r] = e }, registerPlugin: function(e, n) { var r = n ? i(n) : t(e.constructor).toLowerCase();
                e.uuid = this.GetYoDigits(6, r), e.$element.attr("data-" + r) || e.$element.attr("data-" + r, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + r), this._uuids.push(e.uuid) }, unregisterPlugin: function(e) { var n = i(t(e.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + n).removeData("zfPlugin").trigger("destroyed.zf." + n); for (var r in e) e[r] = null }, reInit: function(t) { var n = t instanceof e; try { if (n) t.each(function() { e(this).data("zfPlugin")._init() });
                    else { var r = "undefined" == typeof t ? "undefined" : _typeof(t),
                            o = this,
                            a = { object: function(t) { t.forEach(function(t) { t = i(t), e("[data-" + t + "]").foundation("_init") }) }, string: function() { t = i(t), e("[data-" + t + "]").foundation("_init") }, undefined: function() { this.object(Object.keys(o._plugins)) } };
                        a[r](t) } } catch (s) { console.error(s) } finally { return t } }, GetYoDigits: function(e, t) { return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "") }, reflow: function(t, i) { "undefined" == typeof i ? i = Object.keys(this._plugins) : "string" == typeof i && (i = [i]); var r = this;
                e.each(i, function(i, o) { var a = r._plugins[o],
                        s = e(t).find("[data-" + o + "]").addBack("[data-" + o + "]");
                    s.each(function() { var t = e(this),
                            i = {}; if (t.data("zfPlugin")) return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin."); if (t.attr("data-options")) { t.attr("data-options").split(";").forEach(function(e, t) { var r = e.split(":").map(function(e) { return e.trim() });
                                r[0] && (i[r[0]] = n(r[1])) }) } try { t.data("zfPlugin", new a(e(this), i)) } catch (r) { console.error(r) } finally { return } }) }) }, getFnName: t, transitionend: function(e) { var t, n = { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend" },
                    i = document.createElement("div"); for (var r in n) "undefined" != typeof i.style[r] && (t = n[r]); return t ? t : (t = setTimeout(function() { e.triggerHandler("transitionend", [e]) }, 1), "transitionend") } };
    o.util = { throttle: function(e, t) { var n = null; return function() { var i = this,
                    r = arguments;
                null === n && (n = setTimeout(function() { e.apply(i, r), n = null }, t)) } } }; var a = function(n) { var i = "undefined" == typeof n ? "undefined" : _typeof(n),
            r = e("meta.foundation-mq"),
            a = e(".no-js"); if (r.length || e('<meta class="foundation-mq">').appendTo(document.head), a.length && a.removeClass("no-js"), "undefined" === i) o.MediaQuery._init(), o.reflow(this);
        else { if ("string" !== i) throw new TypeError("We're sorry, " + i + " is not a valid parameter. You must use a string representing the method you wish to invoke."); var s = Array.prototype.slice.call(arguments, 1),
                u = this.data("zfPlugin"); if (void 0 === u || void 0 === u[n]) throw new ReferenceError("We're sorry, '" + n + "' is not an available method for " + (u ? t(u) : "this element") + ".");
            1 === this.length ? u[n].apply(u, s) : this.each(function(t, i) { u[n].apply(e(i).data("zfPlugin"), s) }) } return this };
    window.Foundation = o, e.fn.foundation = a,
        function() { Date.now && window.Date.now || (window.Date.now = Date.now = function() { return (new Date).getTime() }); for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) { var n = e[t];
                window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"] } if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) { var i = 0;
                window.requestAnimationFrame = function(e) { var t = Date.now(),
                        n = Math.max(i + 16, t); return setTimeout(function() { e(i = n) }, n - t) }, window.cancelAnimationFrame = clearTimeout }
            window.performance && window.performance.now || (window.performance = { start: Date.now(), now: function() { return Date.now() - this.start } }) }(), Function.prototype.bind || (Function.prototype.bind = function(e) { if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"); var t = Array.prototype.slice.call(arguments, 1),
                n = this,
                i = function() {},
                r = function() { return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments))) }; return this.prototype && (i.prototype = this.prototype), r.prototype = new i, r }) }(jQuery), ! function(e) {
    function t(e, t, i, r) { var o, a, s, u, l = n(e); if (t) { var c = n(t);
            a = l.offset.top + l.height <= c.height + c.offset.top, o = l.offset.top >= c.offset.top, s = l.offset.left >= c.offset.left, u = l.offset.left + l.width <= c.width + c.offset.left } else a = l.offset.top + l.height <= l.windowDims.height + l.windowDims.offset.top, o = l.offset.top >= l.windowDims.offset.top, s = l.offset.left >= l.windowDims.offset.left, u = l.offset.left + l.width <= l.windowDims.width; var f = [a, o, s, u]; return i ? s === u == !0 : r ? o === a == !0 : f.indexOf(!1) === -1 }

    function n(e, t) { if (e = e.length ? e[0] : e, e === window || e === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that."); var n = e.getBoundingClientRect(),
            i = e.parentNode.getBoundingClientRect(),
            r = document.body.getBoundingClientRect(),
            o = window.pageYOffset,
            a = window.pageXOffset; return { width: n.width, height: n.height, offset: { top: n.top + o, left: n.left + a }, parentDims: { width: i.width, height: i.height, offset: { top: i.top + o, left: i.left + a } }, windowDims: { width: r.width, height: r.height, offset: { top: o, left: a } } } }

    function i(e, t, i, r, o, a) { var s = n(e),
            u = t ? n(t) : null; switch (i) {
            case "top":
                return { left: Foundation.rtl() ? u.offset.left - s.width + u.width : u.offset.left, top: u.offset.top - (s.height + r) };
            case "left":
                return { left: u.offset.left - (s.width + o), top: u.offset.top };
            case "right":
                return { left: u.offset.left + u.width + o, top: u.offset.top };
            case "center top":
                return { left: u.offset.left + u.width / 2 - s.width / 2, top: u.offset.top - (s.height + r) };
            case "center bottom":
                return { left: a ? o : u.offset.left + u.width / 2 - s.width / 2, top: u.offset.top + u.height + r };
            case "center left":
                return { left: u.offset.left - (s.width + o), top: u.offset.top + u.height / 2 - s.height / 2 };
            case "center right":
                return { left: u.offset.left + u.width + o + 1, top: u.offset.top + u.height / 2 - s.height / 2 };
            case "center":
                return { left: s.windowDims.offset.left + s.windowDims.width / 2 - s.width / 2, top: s.windowDims.offset.top + s.windowDims.height / 2 - s.height / 2 };
            case "reveal":
                return { left: (s.windowDims.width - s.width) / 2, top: s.windowDims.offset.top + r };
            case "reveal full":
                return { left: s.windowDims.offset.left, top: s.windowDims.offset.top };
            case "left bottom":
                return { left: u.offset.left, top: u.offset.top + u.height + r };
            case "right bottom":
                return { left: u.offset.left + u.width + o - s.width, top: u.offset.top + u.height + r };
            default:
                return { left: Foundation.rtl() ? u.offset.left - s.width + u.width : u.offset.left + o, top: u.offset.top + u.height + r } } }
    Foundation.Box = { ImNotTouchingYou: t, GetDimensions: n, GetOffsets: i } }(jQuery), ! function(e) {
    function t(e) { var t = {}; for (var n in e) t[e[n]] = e[n]; return t } var n = { 9: "TAB", 13: "ENTER", 27: "ESCAPE", 32: "SPACE", 37: "ARROW_LEFT", 38: "ARROW_UP", 39: "ARROW_RIGHT", 40: "ARROW_DOWN" },
        i = {},
        r = { keys: t(n), parseKey: function(e) { var t = n[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase(); return t = t.replace(/\W+/, ""), e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), e.altKey && (t = "ALT_" + t), t = t.replace(/_$/, "") }, handleKey: function(t, n, r) { var o, a, s, u = i[n],
                    l = this.parseKey(t); if (!u) return console.warn("Component not defined!"); if (o = "undefined" == typeof u.ltr ? u : Foundation.rtl() ? e.extend({}, u.ltr, u.rtl) : e.extend({}, u.rtl, u.ltr), a = o[l], s = r[a], s && "function" == typeof s) { var c = s.apply();
                    (r.handled || "function" == typeof r.handled) && r.handled(c) } else(r.unhandled || "function" == typeof r.unhandled) && r.unhandled() }, findFocusable: function(t) { return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() { return !(!e(this).is(":visible") || e(this).attr("tabindex") < 0) }) }, register: function(e, t) { i[e] = t }, trapFocus: function(e) { var t = Foundation.Keyboard.findFocusable(e),
                    n = t.eq(0),
                    i = t.eq(-1);
                e.on("keydown.zf.trapfocus", function(e) { e.target === i[0] && "TAB" === Foundation.Keyboard.parseKey(e) ? (e.preventDefault(), n.focus()) : e.target === n[0] && "SHIFT_TAB" === Foundation.Keyboard.parseKey(e) && (e.preventDefault(), i.focus()) }) }, releaseFocus: function(e) { e.off("keydown.zf.trapfocus") } };
    Foundation.Keyboard = r }(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e) {
    function t(e) { var t = {}; return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function(e, t) { var n = t.replace(/\+/g, " ").split("="),
                i = n[0],
                r = n[1]; return i = decodeURIComponent(i), r = void 0 === r ? null : decodeURIComponent(r), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r, e }, {}) : t } var n = { queries: [], current: "", _init: function() { var n, i = this,
                r = e(".foundation-mq").css("font-family");
            n = t(r); for (var o in n) n.hasOwnProperty(o) && i.queries.push({ name: o, value: "only screen and (min-width: " + n[o] + ")" });
            this.current = this._getCurrentSize(), this._watcher() }, atLeast: function(e) { var t = this.get(e); return !!t && window.matchMedia(t).matches }, is: function(e) { return e = e.trim().split(" "), e.length > 1 && "only" === e[1] ? e[0] === this._getCurrentSize() : this.atLeast(e[0]) }, get: function(e) { for (var t in this.queries)
                if (this.queries.hasOwnProperty(t)) { var n = this.queries[t]; if (e === n.name) return n.value }
            return null }, _getCurrentSize: function() { for (var e, t = 0; t < this.queries.length; t++) { var n = this.queries[t];
                window.matchMedia(n.value).matches && (e = n) } return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e.name : e }, _watcher: function() { var t = this;
            e(window).on("resize.zf.mediaquery", function() { var n = t._getCurrentSize(),
                    i = t.current;
                n !== i && (t.current = n, e(window).trigger("changed.zf.mediaquery", [n, i])) }) } };
    Foundation.MediaQuery = n, window.matchMedia || (window.matchMedia = function() { var e = window.styleMedia || window.media; if (!e) { var t = document.createElement("style"),
                n = document.getElementsByTagName("script")[0],
                i = null;
            t.type = "text/css", t.id = "matchmediajs-test", n && n.parentNode && n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = { matchMedium: function(e) { var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }"; return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width } } } return function(t) { return { matches: e.matchMedium(t || "all"), media: t || "all" } } }()), Foundation.MediaQuery = n }(jQuery), ! function(e) {
    function t(e, t, n) {
        function i(s) { a || (a = s), o = s - a, n.apply(t), o < e ? r = window.requestAnimationFrame(i, t) : (window.cancelAnimationFrame(r), t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t])) } var r, o, a = null; return 0 === e ? (n.apply(t), void t.trigger("finished.zf.animate", [t]).triggerHandler("finished.zf.animate", [t])) : void(r = window.requestAnimationFrame(i)) }

    function n(t, n, o, a) {
        function s() { t || n.hide(), u(), a && a.apply(n) }

        function u() { n[0].style.transitionDuration = 0, n.removeClass(l + " " + c + " " + o) } if (n = e(n).eq(0), n.length) { var l = t ? i[0] : i[1],
                c = t ? r[0] : r[1];
            u(), n.addClass(o).css("transition", "none"), requestAnimationFrame(function() { n.addClass(l), t && n.show() }), requestAnimationFrame(function() { n[0].offsetWidth, n.css("transition", "").addClass(c) }), n.one(Foundation.transitionend(n), s) } } var i = ["mui-enter", "mui-leave"],
        r = ["mui-enter-active", "mui-leave-active"],
        o = { animateIn: function(e, t, i) { n(!0, e, t, i) }, animateOut: function(e, t, i) { n(!1, e, t, i) } };
    Foundation.Move = t, Foundation.Motion = o }(jQuery), ! function(e) { var t = { Feather: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            t.attr("role", "menubar"); var i = t.find("li").attr({ role: "menuitem" }),
                r = "is-" + n + "-submenu",
                o = r + "-item",
                a = "is-" + n + "-submenu-parent";
            i.each(function() { var t = e(this),
                    i = t.children("ul");
                i.length && (t.addClass(a).attr({ "aria-haspopup": !0, "aria-label": t.children("a:first").text() }), "drilldown" === n && t.attr({ "aria-expanded": !1 }), i.addClass("submenu " + r).attr({ "data-submenu": "", role: "menu" }), "drilldown" === n && i.attr({ "aria-hidden": !0 })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item " + o) }) }, Burn: function(e, t) { var n = "is-" + t + "-submenu",
                i = n + "-item",
                r = "is-" + t + "-submenu-parent";
            e.find(">li, .menu, .menu > li").removeClass(n + " " + i + " " + r + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "") } };
    Foundation.Nest = t }(jQuery), ! function(e) {
    function t(e, t, n) { var i, r, o = this,
            a = t.duration,
            s = Object.keys(e.data())[0] || "timer",
            u = -1;
        this.isPaused = !1, this.restart = function() { u = -1, clearTimeout(r), this.start() }, this.start = function() { this.isPaused = !1, clearTimeout(r), u = u <= 0 ? a : u, e.data("paused", !1), i = Date.now(), r = setTimeout(function() { t.infinite && o.restart(), n && "function" == typeof n && n() }, u), e.trigger("timerstart.zf." + s) }, this.pause = function() { this.isPaused = !0, clearTimeout(r), e.data("paused", !0); var t = Date.now();
            u -= t - i, e.trigger("timerpaused.zf." + s) } }

    function n(t, n) {
        function i() { r--, 0 === r && n() } var r = t.length;
        0 === r && n(), t.each(function() { if (this.complete || 4 === this.readyState || "complete" === this.readyState) i();
            else { var t = e(this).attr("src");
                e(this).attr("src", t + (t.indexOf("?") >= 0 ? "&" : "?") + (new Date).getTime()), e(this).one("load", function() { i() }) } }) }
    Foundation.Timer = t, Foundation.onImagesLoaded = n }(jQuery),
function(e) {
    function t() { this.removeEventListener("touchmove", n), this.removeEventListener("touchend", t), l = !1 }

    function n(n) { if (e.spotSwipe.preventDefault && n.preventDefault(), l) { var i, r = n.touches[0].pageX,
                a = (n.touches[0].pageY, o - r);
            u = (new Date).getTime() - s, Math.abs(a) >= e.spotSwipe.moveThreshold && u <= e.spotSwipe.timeThreshold && (i = a > 0 ? "left" : "right"), i && (n.preventDefault(), t.call(this), e(this).trigger("swipe", i).trigger("swipe" + i)) } }

    function i(e) { 1 == e.touches.length && (o = e.touches[0].pageX, a = e.touches[0].pageY, l = !0, s = (new Date).getTime(), this.addEventListener("touchmove", n, !1), this.addEventListener("touchend", t, !1)) }

    function r() { this.addEventListener && this.addEventListener("touchstart", i, !1) }
    e.spotSwipe = { version: "1.0.0", enabled: "ontouchstart" in document.documentElement, preventDefault: !1, moveThreshold: 75, timeThreshold: 200 }; var o, a, s, u, l = !1;
    e.event.special.swipe = { setup: r }, e.each(["left", "up", "down", "right"], function() { e.event.special["swipe" + this] = { setup: function() { e(this).on("swipe", e.noop) } } }) }(jQuery), ! function(e) { e.fn.addTouch = function() { this.each(function(n, i) { e(i).bind("touchstart touchmove touchend touchcancel", function() { t(event) }) }); var t = function(e) { var t, n = e.changedTouches,
                i = n[0],
                r = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" },
                o = r[e.type]; "MouseEvent" in window && "function" == typeof window.MouseEvent ? t = new window.MouseEvent(o, { bubbles: !0, cancelable: !0, screenX: i.screenX, screenY: i.screenY, clientX: i.clientX, clientY: i.clientY }) : (t = document.createEvent("MouseEvent"), t.initMouseEvent(o, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null)), i.target.dispatchEvent(t) } } }(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e) {
    function t() { a(), i(), r(), o(), n() }

    function n(t) { var n = e("[data-yeti-box]"),
            i = ["dropdown", "tooltip", "reveal"]; if (t && ("string" == typeof t ? i.push(t) : "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && "string" == typeof t[0] ? i.concat(t) : console.error("Plugin names must be strings")), n.length) { var r = i.map(function(e) { return "closeme.zf." + e }).join(" ");
            e(window).off(r).on(r, function(t, n) { var i = t.namespace.split(".")[0],
                    r = e("[data-" + i + "]").not('[data-yeti-box="' + n + '"]');
                r.each(function() { var t = e(this);
                    t.triggerHandler("close.zf.trigger", [t]) }) }) } }

    function i(t) { var n = void 0,
            i = e("[data-resize]");
        i.length && e(window).off("resize.zf.trigger").on("resize.zf.trigger", function(r) { n && clearTimeout(n), n = setTimeout(function() { s || i.each(function() { e(this).triggerHandler("resizeme.zf.trigger") }), i.attr("data-events", "resize") }, t || 10) }) }

    function r(t) { var n = void 0,
            i = e("[data-scroll]");
        i.length && e(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(r) { n && clearTimeout(n), n = setTimeout(function() { s || i.each(function() { e(this).triggerHandler("scrollme.zf.trigger") }), i.attr("data-events", "scroll") }, t || 10) }) }

    function o(t) { var n = e("[data-mutate]");
        n.length && s && n.each(function() { e(this).triggerHandler("mutateme.zf.trigger") }) }

    function a() { if (!s) return !1; var t = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            n = function(t) { var n = e(t[0].target); switch (t[0].type) {
                    case "attributes":
                        "scroll" === n.attr("data-events") && "data-events" === t[0].attributeName && n.triggerHandler("scrollme.zf.trigger", [n, window.pageYOffset]), "resize" === n.attr("data-events") && "data-events" === t[0].attributeName && n.triggerHandler("resizeme.zf.trigger", [n]), "style" === t[0].attributeName && (n.closest("[data-mutate]").attr("data-events", "mutate"), n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [n.closest("[data-mutate]")])); break;
                    case "childList":
                        n.closest("[data-mutate]").attr("data-events", "mutate"), n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [n.closest("[data-mutate]")]); break;
                    default:
                        return !1 } }; if (t.length)
            for (var i = 0; i <= t.length - 1; i++) { var r = new s(n);
                r.observe(t[i], { attributes: !0, childList: !0, characterData: !1, subtree: !0, attributeFilter: ["data-events", "style"] }) } } var s = function() { for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++)
                if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
            return !1 }(),
        u = function(t, n) { t.data(n).split(" ").forEach(function(i) { e("#" + i)["close" === n ? "trigger" : "triggerHandler"](n + ".zf.trigger", [t]) }) };
    e(document).on("click.zf.trigger", "[data-open]", function() { u(e(this), "open") }), e(document).on("click.zf.trigger", "[data-close]", function() { var t = e(this).data("close");
        t ? u(e(this), "close") : e(this).trigger("close.zf.trigger") }), e(document).on("click.zf.trigger", "[data-toggle]", function() { var t = e(this).data("toggle");
        t ? u(e(this), "toggle") : e(this).trigger("toggle.zf.trigger") }), e(document).on("close.zf.trigger", "[data-closable]", function(t) { t.stopPropagation(); var n = e(this).data("closable"); "" !== n ? Foundation.Motion.animateOut(e(this), n, function() { e(this).trigger("closed.zf") }) : e(this).fadeOut().trigger("closed.zf") }), e(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() { var t = e(this).data("toggle-focus");
        e("#" + t).triggerHandler("toggle.zf.trigger", [e(this)]) }), e(window).on("load", function() { t() }), Foundation.IHearYou = t }(jQuery);
var _createClass = function() {
    function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
! function(e) { var t = function() {
        function t(n, i) { _classCallCheck(this, t), this.$element = n, this.options = e.extend({}, t.defaults, this.$element.data(), i), this.$lastTrigger = e(), this.$triggers = e(), this._init(), this._events(), Foundation.registerPlugin(this, "OffCanvas"), Foundation.Keyboard.register("OffCanvas", { ESCAPE: "close" }) } return _createClass(t, [{ key: "_init", value: function() { var t = this.$element.attr("id"); if (this.$element.attr("aria-hidden", "true"), this.$element.addClass("is-transition-" + this.options.transition), this.$triggers = e(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.options.contentOverlay === !0) { var n = document.createElement("div"),
                        i = "fixed" === e(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                    n.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = e(n), "is-overlay-fixed" === i ? e("body").append(this.$overlay) : this.$element.siblings("[data-off-canvas-content]").append(this.$overlay) }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), this.options.isRevealed === !0 && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), !this.options.transitionTime == !0 && (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle(e("[data-off-canvas]")[0]).transitionDuration)) } }, { key: "_events", value: function() { if (this.$element.off(".zf.trigger .zf.offcanvas").on({ "open.zf.trigger": this.open.bind(this), "close.zf.trigger": this.close.bind(this), "toggle.zf.trigger": this.toggle.bind(this), "keydown.zf.offcanvas": this._handleKeyboard.bind(this) }), this.options.closeOnClick === !0) { var t = this.options.contentOverlay ? this.$overlay : e("[data-off-canvas-content]");
                    t.on({ "click.zf.offcanvas": this.close.bind(this) }) } } }, { key: "_setMQChecker", value: function() { var t = this;
                e(window).on("changed.zf.mediaquery", function() { Foundation.MediaQuery.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1) }).one("load.zf.offcanvas", function() { Foundation.MediaQuery.atLeast(t.options.revealOn) && t.reveal(!0) }) } }, { key: "reveal", value: function(e) { var t = this.$element.find("[data-close]");
                e ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), t.length && t.hide()) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.on({ "open.zf.trigger": this.open.bind(this), "toggle.zf.trigger": this.toggle.bind(this) }), t.length && t.show()) } }, { key: "_stopScrolling", value: function(e) { return !1 } }, { key: "_recordScrollable", value: function(e) { var t = this;
                t.scrollHeight !== t.clientHeight && (0 === t.scrollTop && (t.scrollTop = 1), t.scrollTop === t.scrollHeight - t.clientHeight && (t.scrollTop = t.scrollHeight - t.clientHeight - 1)), t.allowUp = t.scrollTop > 0, t.allowDown = t.scrollTop < t.scrollHeight - t.clientHeight, t.lastY = e.originalEvent.pageY } }, { key: "_stopScrollPropagation", value: function(e) { var t = this,
                    n = e.pageY < t.lastY,
                    i = !n;
                t.lastY = e.pageY, n && t.allowUp || i && t.allowDown ? e.stopPropagation() : e.preventDefault() } }, { key: "open", value: function(t, n) { if (!this.$element.hasClass("is-open") && !this.isRevealed) { var i = this;
                    n && (this.$lastTrigger = n), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), i.$element.addClass("is-open"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.options.contentScroll === !1 && (e("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), this.options.contentOverlay === !0 && this.$overlay.addClass("is-visible"), this.options.closeOnClick === !0 && this.options.contentOverlay === !0 && this.$overlay.addClass("is-closable"), this.options.autoFocus === !0 && this.$element.one(Foundation.transitionend(this.$element), function() { i.$element.find("a, button").eq(0).focus() }), this.options.trapFocus === !0 && (this.$element.siblings("[data-off-canvas-content]").attr("tabindex", "-1"), Foundation.Keyboard.trapFocus(this.$element)) } } }, { key: "close", value: function(t) { if (this.$element.hasClass("is-open") && !this.isRevealed) { var n = this;
                    n.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.options.contentScroll === !1 && (e("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), this.options.contentOverlay === !0 && this.$overlay.removeClass("is-visible"), this.options.closeOnClick === !0 && this.options.contentOverlay === !0 && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), this.options.trapFocus === !0 && (this.$element.siblings("[data-off-canvas-content]").removeAttr("tabindex"), Foundation.Keyboard.releaseFocus(this.$element)) } } }, { key: "toggle", value: function(e, t) { this.$element.hasClass("is-open") ? this.close(e, t) : this.open(e, t) } }, { key: "_handleKeyboard", value: function(e) { var t = this;
                Foundation.Keyboard.handleKey(e, "OffCanvas", { close: function() { return t.close(), t.$lastTrigger.focus(), !0 }, handled: function() { e.stopPropagation(), e.preventDefault() } }) } }, { key: "destroy", value: function() { this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas"), Foundation.unregisterPlugin(this) } }]), t }();
    t.defaults = { closeOnClick: !0, contentOverlay: !0, contentScroll: !0, transitionTime: 0, transition: "push", forceTo: null, isRevealed: !1, revealOn: null, autoFocus: !0, revealClass: "reveal-for-", trapFocus: !1 }, Foundation.plugin(t, "OffCanvas") }(jQuery);
var _createClass = function() {
    function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
! function(e) { var t = function() {
        function t(n, i) { _classCallCheck(this, t), this.$element = e(n), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveMenu") } return _createClass(t, [{ key: "_init", value: function() { if ("string" == typeof this.rules) { for (var t = {}, i = this.rules.split(" "), r = 0; r < i.length; r++) { var o = i[r].split("-"),
                            a = o.length > 1 ? o[0] : "small",
                            s = o.length > 1 ? o[1] : o[0];
                        null !== n[s] && (t[a] = n[s]) }
                    this.rules = t }
                e.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || Foundation.GetYoDigits(6, "responsive-menu")) } }, { key: "_events", value: function() { var t = this;
                e(window).on("changed.zf.mediaquery", function() { t._checkMediaQueries() }) } }, { key: "_checkMediaQueries", value: function() { var t, i = this;
                e.each(this.rules, function(e) { Foundation.MediaQuery.atLeast(e) && (t = e) }), t && (this.currentPlugin instanceof this.rules[t].plugin || (e.each(n, function(e, t) { i.$element.removeClass(t.cssClass) }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(this.$element, {}))) } }, { key: "destroy", value: function() { this.currentPlugin.destroy(), e(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this) } }]), t }();
    t.defaults = {}; var n = { dropdown: { cssClass: "dropdown", plugin: Foundation._plugins["dropdown-menu"] || null }, drilldown: { cssClass: "drilldown", plugin: Foundation._plugins.drilldown || null }, accordion: { cssClass: "accordion-menu", plugin: Foundation._plugins["accordion-menu"] || null } };
    Foundation.plugin(t, "ResponsiveMenu") }(jQuery);
var _createClass = function() {
    function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }();
! function(e) { var t = function() {
        function t(n, i) { _classCallCheck(this, t), this.$element = e(n), this.options = e.extend({}, t.defaults, this.$element.data(), i), this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle") } return _createClass(t, [{ key: "_init", value: function() { var t = this.$element.data("responsive-toggle"); if (t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = e("#" + t), this.$toggler = this.$element.find("[data-toggle]").filter(function() { var n = e(this).data("toggle"); return n === t || "" === n }), this.options = e.extend({}, this.options, this.$targetMenu.data()), this.options.animate) { var n = this.options.animate.split(" ");
                    this.animationIn = n[0], this.animationOut = n[1] || null }
                this._update() } }, { key: "_events", value: function() { this._updateMqHandler = this._update.bind(this), e(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this)) } }, { key: "_update", value: function() { Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide()) } }, { key: "toggleMenu", value: function() { var e = this;
                Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? Foundation.Motion.animateIn(this.$targetMenu, this.animationIn, function() { e.$element.trigger("toggled.zf.responsiveToggle"), e.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger") }) : Foundation.Motion.animateOut(this.$targetMenu, this.animationOut, function() { e.$element.trigger("toggled.zf.responsiveToggle") }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), this.$element.trigger("toggled.zf.responsiveToggle"))) } }, { key: "destroy", value: function() { this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), e(window).off("changed.zf.mediaquery", this._updateMqHandler), Foundation.unregisterPlugin(this) } }]), t }();
    t.defaults = { hideFor: "medium", animate: !1 }, Foundation.plugin(t, "ResponsiveToggle") }(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e, t) { "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e, t) { t = t || ne; var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n) }

    function i(e) { var t = !!e && "length" in e && e.length,
            n = me.type(e); return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) }

    function r(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }

    function o(e, t, n) { return me.isFunction(t) ? me.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? me.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? me.grep(e, function(e) { return se.call(t, e) > -1 !== n }) : Se.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) { return se.call(t, e) > -1 !== n && 1 === e.nodeType })) }

    function a(e, t) { for (;
            (e = e[t]) && 1 !== e.nodeType;); return e }

    function s(e) { var t = {}; return me.each(e.match(Ne) || [], function(e, n) { t[n] = !0 }), t }

    function u(e) { return e }

    function l(e) { throw e }

    function c(e, t, n, i) { var r; try { e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }

    function f() { ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), me.ready() }

    function d() { this.expando = me.expando + d.uid++ }

    function p(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e) }

    function h(e, t, n) { var i; if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) { try { n = p(n) } catch (r) {}
                Pe.set(e, t, n) } else n = void 0;
        return n }

    function m(e, t, n, i) { var r, o = 1,
            a = 20,
            s = i ? function() { return i.cur() } : function() { return me.css(e, t, "") },
            u = s(),
            l = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            c = (me.cssNumber[t] || "px" !== l && +u) && Re.exec(me.css(e, t)); if (c && c[3] !== l) { l = l || c[3], n = n || [], c = +u || 1;
            do { o = o || ".5", c /= o, me.style(e, t, c + l) } while (o !== (o = s() / u) && 1 !== o && --a) } return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r }

    function g(e) { var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ye[i]; return r ? r : (t = n.body.appendChild(n.createElement(i)), r = me.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ye[i] = r, r) }

    function v(e, t) { for (var n, i, r = [], o = 0, a = e.length; o < a; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = qe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && We(i) && (r[o] = g(i))) : "none" !== n && (r[o] = "none", qe.set(i, "display", n))); for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]); return e }

    function y(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? me.merge([e], n) : n }

    function b(e, t) { for (var n = 0, i = e.length; n < i; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval")) }

    function x(e, t, n, i, r) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if (o = e[p], o || 0 === o)
                if ("object" === me.type(o)) me.merge(d, o.nodeType ? [o] : o);
                else if (Ge.test(o)) { for (a = a || f.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), u = Ke[s] || Ke._default, a.innerHTML = u[1] + me.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            me.merge(d, a.childNodes), a = f.firstChild, a.textContent = "" } else d.push(t.createTextNode(o)); for (f.textContent = "", p = 0; o = d[p++];)
            if (i && me.inArray(o, i) > -1) r && r.push(o);
            else if (l = me.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && b(a), n)
            for (c = 0; o = a[c++];) Qe.test(o.type || "") && n.push(o); return f }

    function w() { return !0 }

    function T() { return !1 }

    function C() { try { return ne.activeElement } catch (e) {} }

    function E(e, t, n, i, r, o) { var a, s; if ("object" == ("undefined" == typeof t ? "undefined" : _typeof(t))) { "string" != typeof n && (i = i || n, n = void 0); for (s in t) E(e, s, n, i, t[s], o); return e } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = T;
        else if (!r) return e; return 1 === o && (a = r, r = function(e) { return me().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = me.guid++)), e.each(function() { me.event.add(this, t, r, i, n) }) }

    function S(e, t) { return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e }

    function k(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function A(e) { var t = rt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function D(e, t) { var n, i, r, o, a, s, u, l; if (1 === t.nodeType) { if (qe.hasData(e) && (o = qe.access(e), a = qe.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (r in l)
                    for (n = 0, i = l[r].length; n < i; n++) me.event.add(t, r, l[r][n]) }
            Pe.hasData(e) && (s = Pe.access(e), u = me.extend({}, s), Pe.set(t, u)) } }

    function j(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && Ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function _(e, t, i, r) { t = oe.apply([], t); var o, a, s, u, l, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            m = me.isFunction(h); if (m || d > 1 && "string" == typeof h && !pe.checkClone && it.test(h)) return e.each(function(n) { var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), _(o, t, i, r) }); if (d && (o = x(t, e[0].ownerDocument, !1, e, r), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || r)) { for (s = me.map(y(o, "script"), k), u = s.length; f < d; f++) l = o, f !== p && (l = me.clone(l, !0, !0), u && me.merge(s, y(l, "script"))), i.call(e[f], l, f); if (u)
                for (c = s[s.length - 1].ownerDocument, me.map(s, A), f = 0; f < u; f++) l = s[f], Qe.test(l.type || "") && !qe.access(l, "globalEval") && me.contains(c, l) && (l.src ? me._evalUrl && me._evalUrl(l.src) : n(l.textContent.replace(ot, ""), c)) } return e }

    function N(e, t, n) { for (var i, r = t ? me.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || me.cleanData(y(i)), i.parentNode && (n && me.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i)); return e }

    function L(e, t, n) { var i, r, o, a, s = e.style; return n = n || ut(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || me.contains(e.ownerDocument, e) || (a = me.style(e, t)), !pe.pixelMarginRight() && st.test(a) && at.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function O(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function F(e) { if (e in ht) return e; for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
            if (e = pt[n] + t, e in ht) return e }

    function I(e) { var t = me.cssProps[e]; return t || (t = me.cssProps[e] = F(e) || e), t }

    function q(e, t, n) { var i = Re.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function P(e, t, n, i, r) { var o, a = 0; for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += me.css(e, n + $e[o], !0, r)), i ? ("content" === n && (a -= me.css(e, "padding" + $e[o], !0, r)), "margin" !== n && (a -= me.css(e, "border" + $e[o] + "Width", !0, r))) : (a += me.css(e, "padding" + $e[o], !0, r), "padding" !== n && (a += me.css(e, "border" + $e[o] + "Width", !0, r))); return a }

    function z(e, t, n) { var i, r = ut(e),
            o = L(e, t, r),
            a = "border-box" === me.css(e, "boxSizing", !1, r); return st.test(o) ? o : (i = a && (pe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), o = parseFloat(o) || 0, o + P(e, t, n || (a ? "border" : "content"), i, r) + "px") }

    function M(e, t, n, i, r) { return new M.prototype.init(e, t, n, i, r) }

    function H() { gt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(H) : e.setTimeout(H, me.fx.interval), me.fx.tick()) }

    function R() { return e.setTimeout(function() { mt = void 0 }), mt = me.now() }

    function $(e, t) { var n, i = 0,
            r = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t) n = $e[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r }

    function W(e, t, n) { for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i }

    function B(e, t, n) { var i, r, o, a, s, u, l, c, f = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            m = e.nodeType && We(e),
            g = qe.get(e, "fxshow");
        n.queue || (a = me._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, d.always(function() { d.always(function() { a.unqueued--, me.queue(e, "fx").length || a.empty.fire() }) })); for (i in t)
            if (r = t[i], vt.test(r)) { if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) { if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0 }
                p[i] = g && g[i] || me.style(e, i) }
        if (u = !me.isEmptyObject(t), u || !me.isEmptyObject(p)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = g && g.display, null == l && (l = qe.get(e, "display")), c = me.css(e, "display"), "none" === c && (l ? c = l : (v([e], !0), l = e.style.display || l, c = me.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === me.css(e, "float") && (u || (d.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (i in p) u || (g ? "hidden" in g && (m = g.hidden) : g = qe.access(e, "fxshow", { display: l }), o && (g.hidden = !m), m && v([e], !0), d.done(function() { m || v([e]), qe.remove(e, "fxshow"); for (i in p) me.style(e, i, p[i]) })), u = W(m ? g[i] : 0, i, d), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0)) } }

    function Y(e, t) { var n, i, r, o, a; for (n in e)
            if (i = me.camelCase(n), r = t[i], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = me.cssHooks[i], a && "expand" in a) { o = a.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r }

    function U(e, t, n) { var i, r, o = 0,
            a = U.prefilters.length,
            s = me.Deferred().always(function() { delete u.elem }),
            u = function f() { if (r) return !1; for (var t = mt || R(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, f = l.tweens.length; a < f; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), o < 1 && f ? n : (f || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
            l = s.promise({ elem: e, props: me.extend({}, t), opts: me.extend(!0, { specialEasing: {}, easing: me.easing._default }, n), originalProperties: t, originalOptions: n, startTime: mt || R(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = me.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(i), i }, stop: function(t) { var n = 0,
                        i = t ? l.tweens.length : 0; if (r) return this; for (r = !0; n < i; n++) l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }),
            c = l.props; for (Y(c, l.opts.specialEasing); o < a; o++)
            if (i = U.prefilters[o].call(l, e, c, l.opts)) return me.isFunction(i.stop) && (me._queueHooks(l.elem, l.opts.queue).stop = me.proxy(i.stop, i)), i;
        return me.map(c, W, l), me.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), me.fx.timer(me.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l }

    function X(e) { var t = e.match(Ne) || []; return t.join(" ") }

    function Q(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function K(e, t, n, i) { var r; if (Array.isArray(t)) me.each(t, function(t, r) { n || Dt.test(e) ? i(e, r) : K(e + "[" + ("object" == ("undefined" == typeof r ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== me.type(t)) i(e, t);
        else
            for (r in t) K(e + "[" + r + "]", t[r], n, i) }

    function G(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var i, r = 0,
                o = t.toLowerCase().match(Ne) || []; if (me.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n) } }

    function V(e, t, n, i) {
        function r(s) { var u; return o[s] = !0, me.each(e[s] || [], function(e, s) { var l = s(t, n, i); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1) }), u } var o = {},
            a = e === Ht; return r(t.dataTypes[0]) || !o["*"] && r("*") }

    function Z(e, t) { var n, i, r = me.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && me.extend(!0, e, i), e }

    function J(e, t, n) { for (var i, r, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) { u.unshift(r); break }
        if (u[0] in n) o = u[0];
        else { for (r in n) { if (!u[0] || e.converters[r + " " + u[0]]) { o = r; break }
                a || (a = r) }
            o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }

    function ee(e, t, n, i) { var r, o, a, s, u, l = {},
            c = e.dataTypes.slice(); if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) { if (a = l[u + " " + o] || l["* " + o], !a)
                for (r in l)
                    if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1])); break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (f) { return { state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } var te = [],
        ne = e.document,
        ie = Object.getPrototypeOf,
        re = te.slice,
        oe = te.concat,
        ae = te.push,
        se = te.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        fe = ce.toString,
        de = fe.call(Object),
        pe = {},
        he = "3.2.1",
        me = function Kt(e, t) { return new Kt.fn.init(e, t) },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function(e, t) { return t.toUpperCase() };
    me.fn = me.prototype = { jquery: he, constructor: me, length: 0, toArray: function() { return re.call(this) }, get: function(e) { return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = me.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return me.each(this, e) }, map: function(e) { return this.pushStack(me.map(this, function(t, n) { return e.call(t, n, t) })) }, slice: function() { return this.pushStack(re.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: ae, sort: te.sort, splice: te.splice }, me.extend = me.fn.extend = function() { var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == ("undefined" == typeof a ? "undefined" : _typeof(a)) || me.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (l && i && (me.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, a[t] = me.extend(l, o, i)) : void 0 !== i && (a[t] = i));
        return a }, me.extend({ expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isFunction: function(e) { return "function" === me.type(e) }, isWindow: function(e) { return null != e && e === e.window }, isNumeric: function(e) { var t = me.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== le.call(e) || (t = ie(e)) && (n = ce.call(t, "constructor") && t.constructor, "function" != typeof n || fe.call(n) !== de)) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, type: function(e) { return null == e ? e + "" : "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? ue[le.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e) }, globalEval: function(e) { n(e) }, camelCase: function(e) { return e.replace(ve, "ms-").replace(ye, be) }, each: function(e, t) { var n, r = 0; if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(ge, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : se.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e }, grep: function(e, t, n) { for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o), i !== s && r.push(e[o]); return r }, map: function(e, t, n) { var r, o, a = 0,
                s = []; if (i(e))
                for (r = e.length; a < r; a++) o = t(e[a], a, n), null != o && s.push(o);
            else
                for (a in e) o = t(e[a], a, n), null != o && s.push(o); return oe.apply([], s) }, guid: 1, proxy: function(e, t) { var n, i, r; if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = re.call(arguments, 2), r = function() { return e.apply(t || this, i.concat(re.call(arguments))) }, r.guid = e.guid = e.guid || me.guid++, r }, now: Date.now, support: pe }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { ue["[object " + t + "]"] = t.toLowerCase() }); var xe = function(e) {
        function t(e, t, n, i) { var r, o, a, s, u, l, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n; if (!i && ((t ? t.ownerDocument || t : R) !== O && L(t), t = t || O, I)) { if (11 !== h && (u = ve.exec(e)))
                    if (r = u[1]) { if (9 === h) { if (!(a = t.getElementById(r))) return n; if (a.id === r) return n.push(a), n } else if (d && (a = d.getElementById(r)) && M(t, a) && a.id === r) return n.push(a), n } else { if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n; if ((r = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n }
                if (T.qsa && !U[e + " "] && (!q || !q.test(e))) { if (1 !== h) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) { for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = H), l = k(e), o = l.length; o--;) l[o] = "#" + s + " " + p(l[o]);
                        c = l.join(","), d = ye.test(e) && f(t.parentNode) || t } if (c) try { return Z.apply(n, d.querySelectorAll(c)), n } catch (m) {} finally { s === H && t.removeAttribute("id") } } } return D(e.replace(se, "$1"), t, n, i) }

        function n() {
            function e(n, i) { return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i } var t = []; return e }

        function i(e) { return e[H] = !0, e }

        function r(e) { var t = O.createElement("fieldset"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t }

        function a(e, t) { var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i) return i; if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function s(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

        function u(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function l(e) { return function(t) { return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function c(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r])) }) }) }

        function f(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function p(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function h(e, t, n) { var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = W++; return t.first ? function(t, n, r) { for (; t = t[i];)
                    if (1 === t.nodeType || a) return e(t, n, r);
                return !1 } : function(t, n, u) { var l, c, f, d = [$, s]; if (u) { for (; t = t[i];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || a)
                            if (f = t[H] || (t[H] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else { if ((l = c[o]) && l[0] === $ && l[1] === s) return d[2] = l[2]; if (c[o] = d, d[2] = e(t, n, u)) return !0 } return !1 } }

        function m(e) { return e.length > 1 ? function(t, n, i) { for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0 } : e[0] }

        function g(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

        function v(e, t, n, i, r) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), l && t.push(s))); return a }

        function y(e, t, n, r, o, a) { return r && !r[H] && (r = y(r)), o && !o[H] && (o = y(o, a)), i(function(i, a, s, u) { var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    m = i || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : v(m, d, e, s, u),
                    b = n ? o || (i ? e : h || r) ? [] : a : y; if (n && n(y, b, s, u), r)
                    for (l = v(b, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f)); if (i) { if (o || e) { if (o) { for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u) } for (c = b.length; c--;)(f = b[c]) && (l = o ? ee(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f)) } } else b = v(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Z.apply(a, b) }) }

        function b(e) { for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) { return e === t }, a, !0), l = h(function(e) { return ee(t, e) > -1 }, a, !0), c = [function(e, n, i) { var r = !o && (i || n !== j) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i)); return t = null, r }]; s < r; s++)
                if (n = C.relative[e[s].type]) c = [h(m(c), n)];
                else { if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) { for (i = ++s; i < r && !C.relative[e[i].type]; i++); return y(s > 1 && m(c), s > 1 && p(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, s < i && b(e.slice(s, i)), i < r && b(e = e.slice(i)), i < r && p(e)) }
                    c.push(n) }
            return m(c) }

        function x(e, n) { var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, u, l) { var c, f, d, p = 0,
                        h = "0",
                        m = i && [],
                        g = [],
                        y = j,
                        b = i || o && C.find.TAG("*", l),
                        x = $ += null == y ? 1 : Math.random() || .1,
                        w = b.length; for (l && (j = a === O || a || l); h !== w && null != (c = b[h]); h++) { if (o && c) { for (f = 0, a || c.ownerDocument === O || (L(c), s = !I); d = e[f++];)
                                if (d(c, a || O, s)) { u.push(c); break }
                            l && ($ = x) }
                        r && ((c = !d && c) && p--, i && m.push(c)) } if (p += h, r && h !== p) { for (f = 0; d = n[f++];) d(m, g, a, s); if (i) { if (p > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = G.call(u));
                            g = v(g) }
                        Z.apply(u, g), l && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(u) } return l && ($ = x, j = y), m }; return r ? i(a) : a } var w, T, C, E, S, k, A, D, j, _, N, L, O, F, I, q, P, z, M, H = "sizzle" + 1 * new Date,
            R = e.document,
            $ = 0,
            W = 0,
            B = n(),
            Y = n(),
            U = n(),
            X = function(e, t) { return e === t && (N = !0), 0 },
            Q = {}.hasOwnProperty,
            K = [],
            G = K.pop,
            V = K.push,
            Z = K.push,
            J = K.slice,
            ee = function(e, t) { for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1 },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            de = new RegExp("^" + ie + "$"),
            pe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Te = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            Ce = function() { L() },
            Ee = h(function(e) { return e.disabled === !0 && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { Z.apply(K = J.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType } catch (Se) { Z = { apply: K.length ? function(e, t) { V.apply(e, J.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }
        T = t.support = {}, S = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, L = t.setDocument = function(e) { var t, n, i = e ? e.ownerDocument || e : R; return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, F = O.documentElement, I = !S(O), R !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), T.getElementsByTagName = r(function(e) { return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length }), T.getElementsByClassName = ge.test(O.getElementsByClassName), T.getById = r(function(e) { return F.appendChild(e).id = H, !O.getElementsByName || !O.getElementsByName(H).length }), T.getById ? (C.filter.ID = function(e) { var t = e.replace(be, xe); return function(e) { return e.getAttribute("id") === t } }, C.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && I) { var n = t.getElementById(e); return n ? [n] : [] } }) : (C.filter.ID = function(e) { var t = e.replace(be, xe); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, C.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && I) { var n, i, r, o = t.getElementById(e); if (o) { if (n = o.getAttributeNode("id"), n && n.value === e) return [o]; for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o] } return [] } }), C.find.TAG = T.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i } return o }, C.find.CLASS = T.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e) }, P = [], q = [], (T.qsa = ge.test(O.querySelectorAll)) && (r(function(e) { F.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]") }), r(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), F.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:") })), (T.matchesSelector = ge.test(z = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function(e) { T.disconnectedMatch = z.call(e, "*"), z.call(e, "[s!='']:x"), P.push("!=", oe) }), q = q.length && new RegExp(q.join("|")), P = P.length && new RegExp(P.join("|")), t = ge.test(F.compareDocumentPosition), M = t || ge.test(F.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1 }, X = t ? function(e, t) { if (e === t) return N = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === R && M(R, e) ? -1 : t === O || t.ownerDocument === R && M(R, t) ? 1 : _ ? ee(_, e) - ee(_, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return N = !0, 0; var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t]; if (!r || !o) return e === O ? -1 : t === O ? 1 : r ? -1 : o ? 1 : _ ? ee(_, e) - ee(_, t) : 0; if (r === o) return a(e, t); for (n = e; n = n.parentNode;) s.unshift(n); for (n = t; n = n.parentNode;) u.unshift(n); for (; s[i] === u[i];) i++; return i ? a(s[i], u[i]) : s[i] === R ? -1 : u[i] === R ? 1 : 0 }, O) : O }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) { if ((e.ownerDocument || e) !== O && L(e), n = n.replace(ce, "='$1']"), T.matchesSelector && I && !U[n + " "] && (!P || !P.test(n)) && (!q || !q.test(n))) try { var i = z.call(e, n); if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (r) {}
            return t(n, O, null, [e]).length > 0 }, t.contains = function(e, t) { return (e.ownerDocument || e) !== O && L(e), M(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && L(e); var n = C.attrHandle[t.toLowerCase()],
                i = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0; return void 0 !== i ? i : T.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, t.escape = function(e) { return (e + "").replace(we, Te) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) { var t, n = [],
                i = 0,
                r = 0; if (N = !T.detectDuplicates, _ = !T.sortStable && e.slice(0), e.sort(X), N) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return _ = null, e }, E = t.getText = function(e) { var t, n = "",
                i = 0,
                r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += E(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                for (; t = e[i++];) n += E(t); return n }, C = t.selectors = { cacheLength: 50, createPseudo: i, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(be, xe).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = B[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(e, t, n, i, r) { var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t; return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, u) { var l, c, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s,
                            b = !1; if (g) { if (o) { for (; m;) { for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? g.firstChild : g.lastChild], a && y) { for (d = g, f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === $ && l[1], b = p && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) { c[e] = [$, p, b]; break } } else if (y && (d = t, f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === $ && l[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [$, b]), d !== t));); return b -= r, b === i || b % i === 0 && b / i >= 0 } } }, PSEUDO: function(e, n) { var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a]) }) : function(e) { return o(e, 0, r) }) : o } }, pseudos: { not: i(function(e) { var t = [],
                        n = [],
                        r = A(e.replace(se, "$1")); return r[H] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: i(function(e) { return function(n) { return t(e, n).length > 0 } }), contains: i(function(e) { return e = e.replace(be, xe),
                        function(t) { return (t.textContent || t.innerText || E(t)).indexOf(e) > -1 } }), lang: i(function(e) { return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                        function(t) { var n;
                            do { if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function(e) { return e === F }, focus: function(e) { return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: l(!1), disabled: l(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0 }, parent: function(e) { return !C.pseudos.empty(e) }, header: function(e) { return me.test(e.nodeName) }, input: function(e) { return he.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: c(function() { return [0] }), last: c(function(e, t) { return [t - 1] }), eq: c(function(e, t, n) { return [n < 0 ? n + t : n] }), even: c(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: c(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }), gt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }, C.pseudos.nth = C.pseudos.eq; for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[w] = s(w); for (w in { submit: !0, reset: !0 }) C.pseudos[w] = u(w); return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = t.tokenize = function(e, n) { var i, r, o, a, s, u, l, c = Y[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = C.preFilter; s;) { i && !(r = ue.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(se, " ") }), s = s.slice(i.length)); for (a in C.filter) !(r = pe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length)); if (!i) break } return n ? s.length : s ? t.error(e) : Y(e, u).slice(0) }, A = t.compile = function(e, t) { var n, i = [],
                r = [],
                o = U[e + " "]; if (!o) { for (t || (t = k(e)), n = t.length; n--;) o = b(t[n]), o[H] ? i.push(o) : r.push(o);
                o = U(e, x(r, i)), o.selector = e } return o }, D = t.select = function(e, t, n, i) { var r, o, a, s, u, l = "function" == typeof e && e,
                c = !i && k(e = l.selector || e); if (n = n || [], 1 === c.length) { if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && I && C.relative[o[1].type]) { if (t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (i = u(a.matches[0].replace(be, xe), ye.test(o[0].type) && f(t.parentNode) || t))) { if (o.splice(r, 1), e = i.length && p(o), !e) return Z.apply(n, i), n; break } } return (l || A(e, c))(i, t, !I, n, !t || ye.test(e) && f(t.parentNode) || t), n }, T.sortStable = H.split("").sort(X).join("") === H, T.detectDuplicates = !!N, L(), T.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(O.createElement("fieldset")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), T.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var i; if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t }(e);
    me.find = xe, me.expr = xe.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = xe.uniqueSort, me.text = xe.getText, me.isXMLDoc = xe.isXML, me.contains = xe.contains, me.escapeSelector = xe.escape; var we = function(e, t, n) { for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) { if (r && me(e).is(n)) break;
                    i.push(e) }
            return i },
        Te = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Ce = me.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Se = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [i] : [] : me.find.matches(e, me.grep(t, function(e) { return 1 === e.nodeType })) }, me.fn.extend({ find: function(e) { var t, n, i = this.length,
                r = this; if ("string" != typeof e) return this.pushStack(me(e).filter(function() { for (t = 0; t < i; t++)
                    if (me.contains(r[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, r[t], n); return i > 1 ? me.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(o(this, e || [], !1)) }, not: function(e) { return this.pushStack(o(this, e || [], !0)) }, is: function(e) { return !!o(this, "string" == typeof e && Ce.test(e) ? me(e) : e || [], !1).length } }); var ke, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        De = me.fn.init = function(e, t, n) { var i, r; if (!e) return this; if (n = n || ke, "string" == typeof e) { if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ee.test(i[1]) && me.isPlainObject(t))
                        for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return r = ne.getElementById(i[2]), r && (this[0] = r, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this) };
    De.prototype = me.fn, ke = me(ne); var je = /^(?:parents|prev(?:Until|All))/,
        _e = { children: !0, contents: !0, next: !0, prev: !0 };
    me.fn.extend({ has: function(e) { var t = me(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (me.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && me(e); if (!Ce.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? se.call(me(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), me.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return we(e, "parentNode") }, parentsUntil: function(e, t, n) { return we(e, "parentNode", n) }, next: function(e) { return a(e, "nextSibling") }, prev: function(e) { return a(e, "previousSibling") }, nextAll: function(e) { return we(e, "nextSibling") }, prevAll: function(e) { return we(e, "previousSibling") }, nextUntil: function(e, t, n) { return we(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return we(e, "previousSibling", n) }, siblings: function(e) { return Te((e.parentNode || {}).firstChild, e) }, children: function(e) { return Te(e.firstChild) }, contents: function(e) { return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), me.merge([], e.childNodes)) } }, function(e, t) { me.fn[e] = function(n, i) { var r = me.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = me.filter(i, r)), this.length > 1 && (_e[e] || me.uniqueSort(r), je.test(e) && r.reverse()), this.pushStack(r) } }); var Ne = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) { e = "string" == typeof e ? s(e) : me.extend({}, e); var t, n, i, r, o = [],
            a = [],
            u = -1,
            l = function() { for (r = r || e.once, i = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "") },
            c = { add: function() { return o && (n && !t && (u = o.length - 1, a.push(n)), function i(t) { me.each(t, function(t, n) { me.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== me.type(n) && i(n) }) }(arguments), n && !t && l()), this }, remove: function() { return me.each(arguments, function(e, t) { for (var n;
                            (n = me.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u-- }), this }, has: function(e) { return e ? me.inArray(e, o) > -1 : o.length > 0 }, empty: function() { return o && (o = []), this }, disable: function() { return r = a = [], o = n = "", this }, disabled: function() { return !o }, lock: function() { return r = a = [], n || t || (o = n = ""), this }, locked: function() { return !!r }, fireWith: function(e, n) { return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!i } }; return c }, me.extend({ Deferred: function(t) { var n = [
                    ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                    ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = { state: function() { return i }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(e) { return r.then(null, e) }, pipe: function() { var e = arguments; return me.Deferred(function(t) { me.each(n, function(n, i) { var r = me.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() { var e = r && r.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments) }) }), e = null }).promise() }, then: function(t, i, r) {
                        function o(t, n, i, r) { return function() { var s = this,
                                    c = arguments,
                                    f = function p() { var e, p; if (!(t < a)) { if (e = i.apply(s, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p = e && ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, me.isFunction(p) ? r ? p.call(e, o(a, n, u, r), o(a, n, l, r)) : (a++, p.call(e, o(a, n, u, r), o(a, n, l, r), o(a, n, u, n.notifyWith))) : (i !== u && (s = void 0, c = [e]), (r || n.resolveWith)(s, c)) } },
                                    d = r ? f : function() { try { f() } catch (e) { me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (i !== l && (s = void 0, c = [e]), n.rejectWith(s, c)) } };
                                t ? d() : (me.Deferred.getStackHook && (d.stackTrace = me.Deferred.getStackHook()), e.setTimeout(d)) } } var a = 0; return me.Deferred(function(e) { n[0][3].add(o(0, e, me.isFunction(r) ? r : u, e.notifyWith)), n[1][3].add(o(0, e, me.isFunction(t) ? t : u)), n[2][3].add(o(0, e, me.isFunction(i) ? i : l)) }).promise() }, promise: function(e) { return null != e ? me.extend(e, r) : r } },
                o = {}; return me.each(n, function(e, t) { var a = t[2],
                    s = t[5];
                r[t[1]] = a.add, s && a.add(function() { i = s }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), r.promise(o), t && t.call(o, o), o }, when: function(e) { var t = arguments.length,
                n = t,
                i = Array(n),
                r = re.call(arguments),
                o = me.Deferred(),
                a = function(e) { return function(n) { i[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(i, r) } }; if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || me.isFunction(r[n] && r[n].then))) return o.then(); for (; n--;) c(r[n], a(n), o.reject); return o.promise() } }); var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, me.readyException = function(t) { e.setTimeout(function() { throw t }) }; var Oe = me.Deferred();
    me.fn.ready = function(e) { return Oe.then(e)["catch"](function(e) { me.readyException(e) }), this }, me.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || Oe.resolveWith(ne, [me])) } }), me.ready.then = Oe.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f)); var Fe = function Gt(e, t, n, i, r, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === me.type(n)) { r = !0; for (s in n) Gt(e, t, s, n[s], !0, o, a) } else if (void 0 !== i && (r = !0, me.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) { return l.call(me(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n))); return r ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        Ie = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    d.uid = 1, d.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var i, r = this.cache(e); if ("string" == typeof t) r[me.camelCase(t)] = n;
            else
                for (i in t) r[me.camelCase(i)] = t[i]; return r }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [t] : t.match(Ne) || []), n = t.length; for (; n--;) delete i[t[n]] }(void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !me.isEmptyObject(t) } }; var qe = new d,
        Pe = new d,
        ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /[A-Z]/g;
    me.extend({ hasData: function(e) { return Pe.hasData(e) || qe.hasData(e) }, data: function(e, t, n) { return Pe.access(e, t, n) }, removeData: function(e, t) { Pe.remove(e, t) }, _data: function(e, t, n) { return qe.access(e, t, n) }, _removeData: function(e, t) { qe.remove(e, t) } }), me.fn.extend({ data: function(e, t) { var n, i, r, o = this[0],
                a = o && o.attributes; if (void 0 === e) { if (this.length && (r = Pe.get(o), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))) { for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = me.camelCase(i.slice(5)), h(o, i, r[i])));
                    qe.set(o, "hasDataAttrs", !0) } return r } return "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? this.each(function() { Pe.set(this, e) }) : Fe(this, function(t) { var n; if (o && void 0 === t) { if (n = Pe.get(o, e), void 0 !== n) return n; if (n = h(o, e), void 0 !== n) return n } else this.each(function() { Pe.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(e) { return this.each(function() { Pe.remove(this, e) }) } }), me.extend({ queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = qe.get(e, t), n && (!i || Array.isArray(n) ? i = qe.access(e, t, me.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(e, t) { t = t || "fx"; var n = me.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = me._queueHooks(e, t),
                a = function() { me.dequeue(e, t) }; "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return qe.get(e, n) || qe.access(e, n, { empty: me.Callbacks("once memory").add(function() { qe.remove(e, [t + "queue", n]) }) }) } }), me.fn.extend({ queue: function(e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() { var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { me.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, i = 1,
                r = me.Deferred(),
                o = this,
                a = this.length,
                s = function() {--i || r.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = qe.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s)); return s(), r.promise(t) } }); var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
        $e = ["Top", "Right", "Bottom", "Left"],
        We = function(e, t) { return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display") },
        Be = function(e, t, n, i) { var r, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []); for (o in t) e.style[o] = a[o]; return r },
        Ye = {};
    me.fn.extend({ show: function() { return v(this, !0) }, hide: function() { return v(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { We(this) ? me(this).show() : me(this).hide() }) } }); var Ue = /^(?:checkbox|radio)$/i,
        Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ke = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td; var Ge = /<|&#?\w+;/;! function() { var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue }(); var Ve = ne.documentElement,
        Ze = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    me.event = { global: {}, add: function(e, t, n, i, r) { var o, a, s, u, l, c, f, d, p, h, m, g = qe.get(e); if (g)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && me.find.matchesSelector(Ve, r), n.guid || (n.guid = me.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) { return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0 }), t = (t || "").match(Ne) || [""], l = t.length; l--;) s = et.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = me.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = me.event.special[p] || {}, c = me.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && me.expr.match.needsContext.test(r), namespace: h.join(".") }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), me.event.global[p] = !0) }, remove: function(e, t, n, i, r) { var o, a, s, u, l, c, f, d, p, h, m, g = qe.hasData(e) && qe.get(e); if (g && (u = g.events)) { for (t = (t || "").match(Ne) || [""], l = t.length; l--;)
                    if (s = et.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) { for (f = me.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || me.removeEvent(e, p, g.handle), delete u[p]) } else
                        for (p in u) me.event.remove(e, p + t[l], n, i, !0);
                me.isEmptyObject(u) && qe.remove(e, "handle events") } }, dispatch: function(e) { var t, n, i, r, o, a, s = me.event.fix(e),
                u = new Array(arguments.length),
                l = (qe.get(this, "events") || {})[s.type] || [],
                c = me.event.special[s.type] || {}; for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t]; if (s.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, s) !== !1) { for (a = me.event.handlers.call(this, s, l), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, i = ((me.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, s), s.result } }, handlers: function(e, t) { var n, i, r, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) { for (o = [], a = {}, n = 0; n < u; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? me(r, this).index(l) > -1 : me.find(r, this, null, [l]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(e, t) { Object.defineProperty(me.Event.prototype, e, { enumerable: !0, configurable: !0, get: me.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(e) { return e[me.expando] ? e : new me.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== C() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === C() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1 }, _default: function(e) { return r(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, me.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, me.Event = function(e, t) { return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t) }, me.Event.prototype = { constructor: me.Event, isDefaultPrevented: T, isPropagationStopped: T, isImmediatePropagationStopped: T, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, me.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, me.event.addProp), me.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { me.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj; return r && (r === i || me.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), me.fn.extend({ on: function(e, t, n, i) { return E(this, e, t, n, i) }, one: function(e, t, n, i) { return E(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e))) { for (r in e) this.off(r, t, e[r]); return this } return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = T), this.each(function() { me.event.remove(this, e, n, t) }) } }); var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({ htmlPrefilter: function(e) { return e.replace(tt, "<$1></$2>") }, clone: function(e, t, n) { var i, r, o, a, s = e.cloneNode(!0),
                u = me.contains(e.ownerDocument, e); if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (a = y(s), o = y(e), i = 0, r = o.length; i < r; i++) j(o[i], a[i]); if (t)
                if (n)
                    for (o = o || y(e), a = a || y(s), i = 0, r = o.length; i < r; i++) D(o[i], a[i]);
                else D(e, s);
            return a = y(s, "script"), a.length > 0 && b(a, !u && y(e, "script")), s }, cleanData: function(e) { for (var t, n, i, r = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) { if (t = n[qe.expando]) { if (t.events)
                            for (i in t.events) r[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                        n[qe.expando] = void 0 }
                    n[Pe.expando] && (n[Pe.expando] = void 0) } } }), me.fn.extend({ detach: function(e) { return N(this, e, !0) }, remove: function(e) { return N(this, e) }, text: function(e) { return Fe(this, function(e) { return void 0 === e ? me.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return _(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = S(this, e);
                    t.appendChild(e) } }) }, prepend: function() { return _(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = S(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return _(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return _(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(y(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return me.clone(this, e, t) }) }, html: function(e) { return Fe(this, function(e) { var t = this[0] || {},
                    n = 0,
                    i = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !nt.test(e) && !Ke[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) { e = me.htmlPrefilter(e); try { for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0 } catch (r) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var e = []; return _(this, arguments, function(t) { var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)), n && n.replaceChild(t, this)) }, e) } }), me.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { me.fn[e] = function(e) { for (var n, i = [], r = me(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), me(r[a])[t](n), ae.apply(i, n.get()); return this.pushStack(i) } }); var at = /^margin/,
        st = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
        ut = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };! function() {
        function t() { if (s) { s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ve.appendChild(a); var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ve.removeChild(a), s = null } } var n, i, r, o, a = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), me.extend(pe, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), i }, pixelMarginRight: function() { return t(), r }, reliableMarginLeft: function() { return t(), o } })) }(); var lt = /^(none|table(?!-c[ea]).+)/,
        ct = /^--/,
        ft = { position: "absolute", visibility: "hidden", display: "block" },
        dt = { letterSpacing: "0", fontWeight: "400" },
        pt = ["Webkit", "Moz", "ms"],
        ht = ne.createElement("div").style;
    me.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = L(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var r, o, a, s = me.camelCase(t),
                    u = ct.test(t),
                    l = e.style; return u || (t = I(s)), a = me.cssHooks[t] || me.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = "undefined" == typeof n ? "undefined" : _typeof(n), "string" === o && (r = Re.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (me.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n)))) } }, css: function(e, t, n, i) { var r, o, a, s = me.camelCase(t),
                u = ct.test(t); return u || (t = I(s)), a = me.cssHooks[t] || me.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = L(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r } }), me.each(["height", "width"], function(e, t) { me.cssHooks[t] = { get: function(e, n, i) { if (n) return !lt.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, i) : Be(e, ft, function() { return z(e, t, i) }) }, set: function(e, n, i) { var r, o = i && ut(e),
                    a = i && P(e, t, i, "border-box" === me.css(e, "boxSizing", !1, o), o); return a && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = me.css(e, t)), q(e, n, a) } } }), me.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), me.each({ margin: "", padding: "", border: "Width" }, function(e, t) { me.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + $e[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, at.test(e) || (me.cssHooks[e + t].set = q) }), me.fn.extend({ css: function(e, t) { return Fe(this, function(e, t, n) { var i, r, o = {},
                    a = 0; if (Array.isArray(t)) { for (i = ut(e), r = t.length; a < r; a++) o[t[a]] = me.css(e, t[a], !1, i); return o } return void 0 !== n ? me.style(e, t, n) : me.css(e, t) }, e, t, arguments.length > 1) } }), me.Tween = M, M.prototype = { constructor: M, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (me.cssNumber[n] ? "" : "px") }, cur: function() { var e = M.propHooks[this.prop]; return e && e.get ? e.get(this) : M.propHooks._default.get(this) }, run: function(e) { var t, n = M.propHooks[this.prop]; return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit) } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, me.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, me.fx = M.prototype.init, me.fx.step = {}; var mt, gt, vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    me.Animation = me.extend(U, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return m(n.elem, e, Re.exec(t), n), n }] }, tweener: function(e, t) { me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t) }, prefilters: [B], prefilter: function(e, t) { t ? U.prefilters.unshift(e) : U.prefilters.push(e) } }), me.speed = function(e, t, n) { var i = e && "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? me.extend({}, e) : { complete: n || !n && t || me.isFunction(e) && e, duration: e, easing: n && t || t && !me.isFunction(t) && t }; return me.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue) }, i }, me.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(We).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(e, t, n, i) { var r = me.isEmptyObject(e),
                    o = me.speed(t, n, i),
                    a = function() { var t = U(this, me.extend({}, e), o);
                        (r || qe.get(this, "finish")) && t.stop(!0) }; return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) { var i = function(e) { var t = e.stop;
                    delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() { var t = !0,
                        r = null != e && e + "queueHooks",
                        o = me.timers,
                        a = qe.get(this); if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && yt.test(r) && i(a[r]); for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));!t && n || me.dequeue(this, e) }) }, finish: function(e) { return e !== !1 && (e = e || "fx"), this.each(function() { var t, n = qe.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = me.timers,
                        a = i ? i.length : 0; for (n.finish = !0, me.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish }) } }), me.each(["toggle", "show", "hide"], function(e, t) { var n = me.fn[t];
            me.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r) } }), me.each({ slideDown: $("show"), slideUp: $("hide"), slideToggle: $("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { me.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), me.timers = [], me.fx.tick = function() { var e, t = 0,
                n = me.timers; for (mt = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(), mt = void 0 }, me.fx.timer = function(e) { me.timers.push(e), me.fx.start() }, me.fx.interval = 13, me.fx.start = function() { gt || (gt = !0, H()) }, me.fx.stop = function() { gt = null }, me.fx.speeds = { slow: 600, fast: 200, _default: 400 }, me.fn.delay = function(t, n) { return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) { var r = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(r) } }) },
        function() { var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value }(); var bt, xt = me.expr.attrHandle;
    me.fn.extend({ attr: function(e, t) { return Fe(this, me.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { me.removeAttr(this, e) }) } }), me.extend({ attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (r = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = me.find.attr(e, t), null == i ? void 0 : i)) }, attrHooks: { type: { set: function(e, t) { if (!pe.radioValue && "radio" === t && r(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, i = 0,
                r = t && t.match(Ne); if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n) } }), bt = { set: function(e, t, n) { return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n } }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) { var n = xt[t] || me.find.attr;
        xt[t] = function(e, t, i) { var r, o, a = t.toLowerCase(); return i || (o = xt[a], xt[a] = r, r = null != n(e, t, i) ? a : null, xt[a] = o), r } }); var wt = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
    me.fn.extend({ prop: function(e, t) { return Fe(this, me.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[me.propFix[e] || e] }) } }), me.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, r = me.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = me.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : wt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), pe.optSelected || (me.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { me.propFix[this.toLowerCase()] = this }), me.fn.extend({ addClass: function(e) { var t, n, i, r, o, a, s, u = 0; if (me.isFunction(e)) return this.each(function(t) { me(this).addClass(e.call(this, t, Q(this))) }); if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[u++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + X(r) + " ") { for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = X(i), r !== s && n.setAttribute("class", s) }
            return this }, removeClass: function(e) { var t, n, i, r, o, a, s, u = 0; if (me.isFunction(e)) return this.each(function(t) { me(this).removeClass(e.call(this, t, Q(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[u++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + X(r) + " ") { for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = X(i), r !== s && n.setAttribute("class", s) }
            return this }, toggleClass: function(e, t) { var n = "undefined" == typeof e ? "undefined" : _typeof(e); return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) { me(this).toggleClass(e.call(this, n, Q(this), t), t) }) : this.each(function() { var t, i, r, o; if ("string" === n)
                    for (i = 0, r = me(this), o = e.match(Ne) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Q(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : qe.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + X(Q(n)) + " ").indexOf(t) > -1) return !0;
            return !1 } }); var Ct = /\r/g;
    me.fn.extend({ val: function(e) { var t, n, i, r = this[0]; return arguments.length ? (i = me.isFunction(e), this.each(function(n) { var r;
                1 === this.nodeType && (r = i ? e.call(this, n, me(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = me.map(r, function(e) { return null == e ? "" : e + "" })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r)) })) : r ? (t = me.valHooks[r.type] || me.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0 } }), me.extend({ valHooks: { option: { get: function(e) { var t = me.find.attr(e, "value"); return null != t ? t : X(me.text(e)) } }, select: { get: function(e) { var t, n, i, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : o.length; for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                        if (n = o[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) { if (t = me(n).val(), s) return t;
                            u.push(t) }
                    return u }, set: function(e, t) { for (var n, i, r = e.options, o = me.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = me.inArray(me.valHooks.option.get(i), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), me.each(["radio", "checkbox"], function() { me.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1 } }, pe.checkOn || (me.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Et = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, { trigger: function(t, n, i, r) { var o, a, s, u, l, c, f, d = [i || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : []; if (a = s = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(p + me.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[me.expando] ? t : new me.Event(p, "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : me.makeArray(n, [t]), f = me.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) { if (!r && !f.noBubble && !me.isWindow(i)) { for (u = f.delegateType || p, Et.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (i.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e) } for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || p, c = (qe.get(a, "events") || {})[t.type] && qe.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Ie(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault()); return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Ie(i) || l && me.isFunction(i[p]) && !me.isWindow(i) && (s = i[l], s && (i[l] = null), me.event.triggered = p, i[p](), me.event.triggered = void 0, s && (i[l] = s)), t.result } }, simulate: function(e, t, n) { var i = me.extend(new me.Event, n, { type: e, isSimulated: !0 });
            me.event.trigger(i, null, t) } }), me.fn.extend({ trigger: function(e, t) { return this.each(function() { me.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return me.event.trigger(e, t, n, !0) } }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { me.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), me.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), pe.focusin = "onfocusin" in e, pe.focusin || me.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = function(e) { me.event.simulate(t, e.target, me.event.fix(e)) };
        me.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                    r = qe.access(i, t);
                r || i.addEventListener(e, n, !0), qe.access(i, t, (r || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                    r = qe.access(i, t) - 1;
                r ? qe.access(i, t, r) : (i.removeEventListener(e, n, !0), qe.remove(i, t)) } } }); var St = e.location,
        kt = me.now(),
        At = /\?/;
    me.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (i) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n }; var Dt = /\[\]$/,
        jt = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) { var n, i = [],
            r = function(e, t) { var n = me.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) K(n, e[n], t, r); return i.join("&") }, me.fn.extend({ serialize: function() { return me.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = me.prop(this, "elements"); return e ? me.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !me(this).is(":disabled") && Nt.test(this.nodeName) && !_t.test(e) && (this.checked || !Ue.test(e)) }).map(function(e, t) { var n = me(this).val(); return null == n ? null : Array.isArray(n) ? me.map(n, function(e) { return { name: t.name, value: e.replace(jt, "\r\n") } }) : { name: t.name, value: n.replace(jt, "\r\n") } }).get() } }); var Lt = /%20/g,
        Ot = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Mt = {},
        Ht = {},
        Rt = "*/".concat("*"),
        $t = ne.createElement("a");
    $t.href = St.href, me.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: St.href, type: "GET", isLocal: qt.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": me.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? Z(Z(e, me.ajaxSettings), t) : Z(me.ajaxSettings, e) }, ajaxPrefilter: G(Mt), ajaxTransport: G(Ht), ajax: function(t, n) {
            function i(t, n, i, s) { var l, d, p, x, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), r = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (x = J(h, C, i)), x = ee(h, x, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (me.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (me.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, d = x.data, p = x.error, l = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(m, [d, T, C]) : v.rejectWith(m, [C, T, p]), C.statusCode(b), b = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? d : p]), y.fireWith(m, [C, T]), f && (g.trigger("ajaxComplete", [C, h]), --me.active || me.event.trigger("ajaxStop"))) } "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {}; var r, o, a, s, u, l, c, f, d, p, h = me.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                v = me.Deferred(),
                y = me.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                C = { readyState: 0, getResponseHeader: function(e) { var t; if (c) { if (!s)
                                for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return c ? a : null }, setRequestHeader: function(e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this }, overrideMimeType: function(e) { return null == c && (h.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this }, abort: function(e) { var t = e || T; return r && r.abort(t), i(0, t), this } }; if (v.promise(C), h.url = ((t || h.url || St.href) + "").replace(zt, St.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) { l = ne.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host } catch (E) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), V(Mt, h, n, C), c) return C;
            f = me.event && h.global, f && 0 === me.active++ && me.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (p = h.url.slice(o.length), h.data && (o += (At.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Ft, "$1"), p = (At.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p), h.ifModified && (me.lastModified[o] && C.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && C.setRequestHeader("If-None-Match", me.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]); for (d in h.headers) C.setRequestHeader(d, h.headers[d]); if (h.beforeSend && (h.beforeSend.call(m, C, h) === !1 || c)) return C.abort(); if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = V(Ht, h, n, C)) { if (C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { C.abort("timeout") }, h.timeout)); try { c = !1, r.send(x, i) } catch (E) { if (c) throw E;
                    i(-1, E) } } else i(-1, "No Transport"); return C }, getJSON: function(e, t, n) { return me.get(e, t, n, "json") }, getScript: function(e, t) { return me.get(e, void 0, t, "script") } }), me.each(["get", "post"], function(e, t) { me[t] = function(e, n, i, r) { return me.isFunction(n) && (r = r || i, i = n, n = void 0), me.ajax(me.extend({ url: e, type: t, dataType: r, data: n, success: i }, me.isPlainObject(e) && e)) } }), me._evalUrl = function(e) { return me.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, me.fn.extend({ wrapAll: function(e) { var t; return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(e) { return me.isFunction(e) ? this.each(function(t) { me(this).wrapInner(e.call(this, t)) }) : this.each(function() { var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) { var t = me.isFunction(e); return this.each(function(n) { me(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { me(this).replaceWith(this.childNodes) }), this } }), me.expr.pseudos.hidden = function(e) { return !me.expr.pseudos.visible(e) }, me.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, me.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (t) {} }; var Wt = { 0: 200, 1223: 204 },
        Bt = me.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, me.ajaxTransport(function(t) { var n, i; if (pe.cors || Bt && !t.crossDomain) return { send: function(r, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"); for (a in r) s.setRequestHeader(a, r[a]);
                n = function(e) { return function() { n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (u) { if (n) throw u } }, abort: function() { n && n() } } }), me.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), me.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return me.globalEval(e), e } } }), me.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), me.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, r) { t = me("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), ne.head.appendChild(t[0]) }, abort: function() { n && n() } } } }); var Yt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Yt.pop() || me.expando + "_" + kt++; return this[e] = !0, e } }), me.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + r) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return a || me.error(r + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { a = arguments }, i.always(function() { void 0 === o ? me(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Yt.push(r)), a && me.isFunction(o) && o(a[0]), a = o = void 0 }), "script" }), pe.createHTMLDocument = function() { var e = ne.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), me.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, r, o; return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), r = Ee.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, o), o && o.length && me(o).remove(), me.merge([], r.childNodes)) }, me.fn.load = function(e, t, n) { var i, r, o, a = this,
            s = e.indexOf(" "); return s > -1 && (i = X(e.slice(s)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && (r = "POST"), a.length > 0 && me.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { me.fn[t] = function(e) { return this.on(t, e) } }), me.expr.pseudos.animated = function(e) { return me.grep(me.timers, function(t) { return e === t.elem }).length }, me.offset = { setOffset: function(e, t, n) { var i, r, o, a, s, u, l, c = me.css(e, "position"),
                f = me(e),
                d = {}; "static" === c && (e.style.position = "relative"), s = f.offset(), o = me.css(e, "top"), u = me.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = f.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(u) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d) } }, me.fn.extend({ offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { me.offset.setOffset(this, e, t) }); var t, n, i, r, o = this[0]; return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, r = t.defaultView, { top: i.top + r.pageYOffset - n.clientTop, left: i.left + r.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n = this[0],
                    i = { top: 0, left: 0 }; return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = { top: i.top + me.css(e[0], "borderTopWidth", !0), left: i.left + me.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - me.css(n, "marginTop", !0), left: t.left - i.left - me.css(n, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent; return e || Ve }) } }), me.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) { var n = "pageYOffset" === t;
        me.fn[e] = function(i) { return Fe(this, function(e, i, r) { var o; return me.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r) }, e, i, arguments.length) } }), me.each(["top", "left"], function(e, t) { me.cssHooks[t] = O(pe.pixelPosition, function(e, n) { if (n) return n = L(e, t), st.test(n) ? me(e).position()[t] + "px" : n }) }), me.each({ Height: "height", Width: "width" }, function(e, t) { me.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) { me.fn[i] = function(r, o) { var a = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || o === !0 ? "margin" : "border"); return Fe(this, function(t, n, r) { var o; return me.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? me.css(t, n, s) : me.style(t, n, r, s) }, t, a ? r : void 0, a) } }) }), me.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), me.holdReady = function(e) { e ? me.readyWait++ : me.ready(!0) }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() { return me }); var Xt = e.jQuery,
        Qt = e.$; return me.noConflict = function(t) { return e.$ === me && (e.$ = Qt), t && e.jQuery === me && (e.jQuery = Xt), me }, t || (e.jQuery = e.$ = me), me });
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto) }(function(e) { var t, n, i, r, o, a, s = "Close",
        u = "BeforeClose",
        l = "AfterClose",
        c = "BeforeAppend",
        f = "MarkupParse",
        d = "Open",
        p = "Change",
        h = "mfp",
        m = "." + h,
        g = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        b = function() {},
        x = !!window.jQuery,
        w = e(window),
        T = function(e, n) { t.ev.on(h + e + m, n) },
        C = function(t, n, i, r) { var o = document.createElement("div"); return o.className = "mfp-" + t, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o },
        E = function(n, i) { t.ev.triggerHandler(h + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i])) },
        S = function(n) { return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn },
        k = function() { e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t) },
        A = function() { var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== e.transition) return !0; for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1 };
    b.prototype = { constructor: b, init: function() { var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = A(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {} }, open: function(n) { var r; if (n.isObj === !1) { t.items = n.items.toArray(), t.index = 0; var a, s = n.items; for (r = 0; r < s.length; r++)
                    if (a = s[r], a.parsed && (a = a.el[0]), a === n.el[0]) { t.index = r; break } } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; if (t.isOpen) return void t.updateItemHTML();
            t.types = [], o = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = C("bg").on("click" + m, function() { t.close() }), t.wrap = C("wrap").attr("tabindex", -1).on("click" + m, function(e) { t._checkIfClose(e.target) && t.close() }), t.container = C("container", t.wrap)), t.contentContainer = C("content"), t.st.preloader && (t.preloader = C("preloader", t.container, t.st.tLoading)); var u = e.magnificPopup.modules; for (r = 0; r < u.length; r++) { var l = u[r];
                l = l.charAt(0).toUpperCase() + l.slice(1), t["init" + l].call(t) }
            E("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (T(f, function(e, t, n, i) { n.close_replaceWith = S(i.type) }), o += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (o += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: w.scrollTop(), position: "absolute" }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup" + m, function(e) { 27 === e.keyCode && t.close() }), w.on("resize" + m, function() { t.updateSize() }), t.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && t.wrap.addClass(o); var c = t.wH = w.height(),
                p = {}; if (t.fixedContentPos && t._hasScrollBar(c)) { var h = t._getScrollbarSize();
                h && (p.marginRight = h) }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden"); var v = t.st.mainClass; return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), E("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() { t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), i.on("focusin" + m, t._onFocusIn) }, 16), t.isOpen = !0, t.updateSize(c), E(d), n }, close: function() { t.isOpen && (E(u), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() { t._close() }, t.st.removalDelay)) : t._close()) }, _close: function() { E(s); var n = v + " " + g + " "; if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) { var r = { marginRight: "" };
                t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r) }
            i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, E(l) }, updateSize: function(e) { if (t.isIOS) { var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i } else t.wH = e || w.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), E("Resize") }, updateItemHTML: function() { var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index)); var i = n.type; if (E("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) { var o = !!t.st[i] && t.st[i].markup;
                E("FirstMarkupParse", o), o ? t.currTemplate[i] = e(o) : t.currTemplate[i] = !0 }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder"); var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, E(p, n), r = n.type, t.container.prepend(t.contentContainer), E("AfterChange") }, appendContent: function(e, n) { t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", E(c), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content) }, parseEl: function(n) { var i, r = t.items[n]; if (r.tagName ? r = { el: e(r) } : (i = r.type, r = { data: r, src: r.src }), r.el) { for (var o = t.types, a = 0; a < o.length; a++)
                    if (r.el.hasClass("mfp-" + o[a])) { i = o[a]; break }
                r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href")) } return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, E("ElementParse", r), t.items[n] }, addGroup: function(e, n) { var i = function(i) { i.mfpEl = this, t._openClick(i, e, n) };
            n || (n = {}); var r = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? e.off(r).on(r, n.delegate, i) : (n.items = e, e.off(r).on(r, i))) }, _openClick: function(n, i, r) { var o = void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick; if (o || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) { var a = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn; if (a)
                    if (e.isFunction(a)) { if (!a.call(t)) return !0 } else if (w.width() < a) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), r.el = e(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), t.open(r) } }, updateStatus: function(e, i) { if (t.preloader) { n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading); var r = { status: e, text: i };
                E("UpdateStatus", r), e = r.status, i = r.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) { e.stopImmediatePropagation() }), t.container.addClass("mfp-s-" + e), n = e } }, _checkIfClose: function(n) { if (!e(n).hasClass(y)) { var i = t.st.closeOnContentClick,
                    r = t.st.closeOnBgClick; if (i && r) return !0; if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0; if (n === t.content[0] || e.contains(t.content[0], n)) { if (i) return !0 } else if (r && e.contains(document, n)) return !0; return !1 } }, _addClassToMFP: function(e) { t.bgOverlay.addClass(e), t.wrap.addClass(e) }, _removeClassFromMFP: function(e) { this.bgOverlay.removeClass(e), t.wrap.removeClass(e) }, _hasScrollBar: function(e) { return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || w.height()) }, _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus() }, _onFocusIn: function(n) { return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1) }, _parseMarkup: function(t, n, i) { var r;
            i.data && (n = e.extend(i.data, n)), E(f, [t, n, i]), e.each(n, function(n, i) { if (void 0 === i || i === !1) return !0; if (r = n.split("_"), r.length > 1) { var o = t.find(m + "-" + r[0]); if (o.length > 0) { var a = r[1]; "replaceWith" === a ? o[0] !== i[0] && o.replaceWith(i) : "img" === a ? o.is("img") ? o.attr("src", i) : o.replaceWith(e("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(r[1], i) } } else t.find(m + "-" + n).html(i) }) }, _getScrollbarSize: function() { if (void 0 === t.scrollbarSize) { var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e) } return t.scrollbarSize } }, e.magnificPopup = { instance: null, proto: b.prototype, modules: [], open: function(t, n) { return k(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t) }, close: function() { return e.magnificPopup.instance && e.magnificPopup.instance.close() }, registerModule: function(t, n) { n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function(n) { k(); var i = e(this); if ("string" == typeof n)
            if ("open" === n) { var r, o = x ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                o.items ? r = o.items[a] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(a)), t._openClick({ mfpEl: r }, i, o) } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), x ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n); return i }; var D, j, _, N = "inline",
        L = function() { _ && (j.after(_.addClass(D)).detach(), _ = null) };
    e.magnificPopup.registerModule(N, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { t.types.push(N), T(s + "." + N, function() { L() }) }, getInline: function(n, i) { if (L(), n.src) { var r = t.st.inline,
                        o = e(n.src); if (o.length) { var a = o[0].parentNode;
                        a && a.tagName && (j || (D = r.hiddenClass, j = C(D), D = "mfp-" + D), _ = o.after(j).detach().removeClass(D)), t.updateStatus("ready") } else t.updateStatus("error", r.tNotFound), o = e("<div>"); return n.inlineElement = o, o } return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i } } }); var O, F = "ajax",
        I = function() { O && e(document.body).removeClass(O) },
        q = function() { I(), t.req && t.req.abort() };
    e.magnificPopup.registerModule(F, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { t.types.push(F), O = t.st.ajax.cursor, T(s + "." + F, q), T("BeforeChange." + F, q) }, getAjax: function(n) { O && e(document.body).addClass(O), t.updateStatus("loading"); var i = e.extend({ url: n.src, success: function(i, r, o) { var a = { data: i, xhr: o };
                        E("ParseAjax", a), t.appendContent(e(a.data), F), n.finished = !0, I(), t._setFocus(), setTimeout(function() { t.wrap.addClass(g) }, 16), t.updateStatus("ready"), E("AjaxContentAdded") }, error: function() { I(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src)) } }, t.st.ajax.settings); return t.req = e.ajax(i), "" } } }); var P, z = function(n) { if (n.data && void 0 !== n.data.title) return n.data.title; var i = t.st.image.titleSrc; if (i) { if (e.isFunction(i)) return i.call(t, n); if (n.el) return n.el.attr(i) || "" } return "" };
    e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() { var n = t.st.image,
                    i = ".image";
                t.types.push("image"), T(d + i, function() { "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor) }), T(s + i, function() { n.cursor && e(document.body).removeClass(n.cursor), w.off("resize" + m) }), T("Resize" + i, t.resizeImage), t.isLowIE && T("AfterChange", t.resizeImage) }, resizeImage: function() { var e = t.currItem; if (e && e.img && t.st.image.verticalFit) { var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n) } }, _onImageHasSize: function(e) { e.img && (e.hasSize = !0, P && clearInterval(P), e.isCheckingImgSize = !1, E("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1)) }, findImageSize: function(e) { var n = 0,
                    i = e.img[0],
                    r = function o(r) { P && clearInterval(P), P = setInterval(function() { return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(P), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500))) }, r) };
                r(1) }, getImage: function(n, i) { var r = 0,
                    o = function c() { n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, E("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(c, 100) : a())) },
                    a = function() { n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0) },
                    s = t.st.image,
                    u = i.find(".mfp-img"); if (u.length) { var l = document.createElement("img");
                    l.className = "mfp-img", n.el && n.el.find("img").length && (l.alt = n.el.find("img").attr("alt")), n.img = e(l).on("load.mfploader", o).on("error.mfploader", a), l.src = n.src, u.is("img") && (n.img = n.img.clone()), l = n.img[0], l.naturalWidth > 0 ? n.hasSize = !0 : l.width || (n.hasSize = !1) } return t._parseMarkup(i, { title: z(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (P && clearInterval(P), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i) } } }); var M, H = function() { return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M };
    e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(e) { return e.is("img") ? e : e.find("img") } }, proto: { initZoom: function() { var e, n = t.st.zoom,
                    i = ".zoom"; if (n.enabled && t.supportsTransition) { var r, o, a = n.duration,
                        l = function(e) { var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                r = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                o = "transition"; return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, t.css(r), t },
                        c = function() { t.content.css("visibility", "visible") };
                    T("BuildControls" + i, function() { if (t._allowZoom()) { if (clearTimeout(r), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                            o = l(e), o.css(t._getOffset()), t.wrap.append(o), r = setTimeout(function() { o.css(t._getOffset(!0)), r = setTimeout(function() { c(), setTimeout(function() { o.remove(), e = o = null, E("ZoomAnimationEnded") }, 16) }, a) }, 16) } }), T(u + i, function() { if (t._allowZoom()) { if (clearTimeout(r), t.st.removalDelay = a, !e) { if (e = t._getItemToZoom(), !e) return;
                                o = l(e) }
                            o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() { o.css(t._getOffset()) }, 16) } }), T(s + i, function() { t._allowZoom() && (c(), o && o.remove(), e = null) }) } }, _allowZoom: function() { return "image" === t.currItem.type }, _getItemToZoom: function() { return !!t.currItem.hasSize && t.currItem.img }, _getOffset: function(n) { var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem); var r = i.offset(),
                    o = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                r.top -= e(window).scrollTop() - o; var s = { width: i.width(), height: (x ? i.innerHeight() : i[0].offsetHeight) - a - o }; return H() ? s["-moz-transform"] = s.transform = "translate(" + r.left + "px," + r.top + "px)" : (s.left = r.left, s.top = r.top), s } } }); var R = "iframe",
        $ = "//about:blank",
        W = function(e) { if (t.currTemplate[R]) { var n = t.currTemplate[R].find("iframe");
                n.length && (e || (n[0].src = $), t.isIE8 && n.css("display", e ? "block" : "none")) } };
    e.magnificPopup.registerModule(R, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { t.types.push(R), T("BeforeChange", function(e, t, n) { t !== n && (t === R ? W() : n === R && W(!0)) }), T(s + "." + R, function() { W() }) }, getIframe: function(n, i) { var r = n.src,
                    o = t.st.iframe;
                e.each(o.patterns, function() { return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0 }); var a = {}; return o.srcAction && (a[o.srcAction] = r), t._parseMarkup(i, a, n), t.updateStatus("ready"), i } } }); var B = function(e) { var n = t.items.length; return e > n - 1 ? e - n : 0 > e ? n + e : e },
        Y = function(e, t, n) { return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n) };
    e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() { var n = t.st.gallery,
                    r = ".mfp-gallery"; return t.direction = !0, !(!n || !n.enabled) && (o += " mfp-gallery", T(d + r, function() { n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() { return t.items.length > 1 ? (t.next(), !1) : void 0 }), i.on("keydown" + r, function(e) { 37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next() }) }), T("UpdateStatus" + r, function(e, n) { n.text && (n.text = Y(n.text, t.currItem.index, t.items.length)) }), T(f + r, function(e, i, r, o) { var a = t.items.length;
                    r.counter = a > 1 ? Y(n.tCounter, o.index, a) : "" }), T("BuildControls" + r, function() { if (t.items.length > 1 && n.arrows && !t.arrowLeft) { var i = n.arrowMarkup,
                            r = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            o = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        r.click(function() { t.prev() }), o.click(function() { t.next() }), t.container.append(r.add(o)) } }), T(p + r, function() { t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() { t.preloadNearbyImages(), t._preloadTimeout = null }, 16) }), void T(s + r, function() { i.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null })) }, next: function() { t.direction = !0, t.index = B(t.index + 1), t.updateItemHTML() }, prev: function() { t.direction = !1, t.index = B(t.index - 1), t.updateItemHTML() }, goTo: function(e) { t.direction = e >= t.index, t.index = e, t.updateItemHTML() }, preloadNearbyImages: function() { var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    r = Math.min(n[1], t.items.length); for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index + e); for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index - e) }, _preloadItem: function(n) { if (n = B(n), !t.items[n].preloaded) { var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), E("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() { i.hasSize = !0 }).on("error.mfploader", function() { i.hasSize = !0, i.loadError = !0, E("LazyLoadError", i) }).attr("src", i.src)), i.preloaded = !0 } } } }); var U = "retina";
    e.magnificPopup.registerModule(U, { options: { replaceSrc: function(e) { return e.src.replace(/\.\w+$/, function(e) { return "@2x" + e }) }, ratio: 1 }, proto: { initRetina: function() { if (window.devicePixelRatio > 1) { var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (T("ImageHasSize." + U, function(e, t) { t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" }) }), T("ElementParse." + U, function(t, i) { i.src = e.replaceSrc(i, n) })) } } } }), k() });
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e, t) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) { return t(e, n) }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery) }(window, function(e, t) {
    function n(n, o, s) {
        function u(e, t, i) { var r, o = "$()." + n + '("' + t + '")'; return e.each(function(e, u) { var l = s.data(u, n); if (!l) return void a(n + " not initialized. Cannot call methods, i.e. " + o); var c = l[t]; if (!c || "_" == t.charAt(0)) return void a(o + " is not a valid method"); var f = c.apply(l, i);
                r = void 0 === r ? f : r }), void 0 !== r ? r : e }

        function l(e, t) { e.each(function(e, i) { var r = s.data(i, n);
                r ? (r.option(t), r._init()) : (r = new o(i, t), s.data(i, n, r)) }) }
        s = s || t || e.jQuery, s && (o.prototype.option || (o.prototype.option = function(e) { s.isPlainObject(e) && (this.options = s.extend(!0, this.options, e)) }), s.fn[n] = function(e) { if ("string" == typeof e) { var t = r.call(arguments, 1); return u(this, e, t) } return l(this, e), this }, i(s)) }

    function i(e) {!e || e && e.bridget || (e.bridget = n) } var r = Array.prototype.slice,
        o = e.console,
        a = "undefined" == typeof o ? function() {} : function(e) { o.error(e) }; return i(t || e.jQuery), n }),
function(e, t) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t() }("undefined" != typeof window ? window : void 0, function() {
    function e() {} var t = e.prototype; return t.on = function(e, t) { if (e && t) { var n = this._events = this._events || {},
                i = n[e] = n[e] || []; return -1 == i.indexOf(t) && i.push(t), this } }, t.once = function(e, t) { if (e && t) { this.on(e, t); var n = this._onceEvents = this._onceEvents || {},
                i = n[e] = n[e] || {}; return i[t] = !0, this } }, t.off = function(e, t) { var n = this._events && this._events[e]; if (n && n.length) { var i = n.indexOf(t); return -1 != i && n.splice(i, 1), this } }, t.emitEvent = function(e, t) { var n = this._events && this._events[e]; if (n && n.length) { var i = 0,
                r = n[i];
            t = t || []; for (var o = this._onceEvents && this._onceEvents[e]; r;) { var a = o && o[r];
                a && (this.off(e, r), delete o[r]), r.apply(this, t), i += a ? 0 : 1, r = n[i] } return this } }, e }),
function(e, t) { "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return t() }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.getSize = t() }(window, function() {
    function e(e) { var t = parseFloat(e),
            n = -1 == e.indexOf("%") && !isNaN(t); return n && t }

    function t() {}

    function n() { for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; l > t; t++) { var n = u[t];
            e[n] = 0 } return e }

    function i(e) { var t = getComputedStyle(e); return t || s("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t }

    function r() { if (!c) { c = !0; var t = document.createElement("div");
            t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box"; var n = document.body || document.documentElement;
            n.appendChild(t); var r = i(t);
            o.isBoxSizeOuter = a = 200 == e(r.width), n.removeChild(t) } }

    function o(t) { if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == ("undefined" == typeof t ? "undefined" : _typeof(t)) && t.nodeType) { var o = i(t); if ("none" == o.display) return n(); var s = {};
            s.width = t.offsetWidth, s.height = t.offsetHeight; for (var c = s.isBorderBox = "border-box" == o.boxSizing, f = 0; l > f; f++) { var d = u[f],
                    p = o[d],
                    h = parseFloat(p);
                s[d] = isNaN(h) ? 0 : h } var m = s.paddingLeft + s.paddingRight,
                g = s.paddingTop + s.paddingBottom,
                v = s.marginLeft + s.marginRight,
                y = s.marginTop + s.marginBottom,
                b = s.borderLeftWidth + s.borderRightWidth,
                x = s.borderTopWidth + s.borderBottomWidth,
                w = c && a,
                T = e(o.width);
            T !== !1 && (s.width = T + (w ? 0 : m + b)); var C = e(o.height); return C !== !1 && (s.height = C + (w ? 0 : g + x)), s.innerWidth = s.width - (m + b), s.innerHeight = s.height - (g + x), s.outerWidth = s.width + v, s.outerHeight = s.height + y, s } } var a, s = "undefined" == typeof console ? t : function(e) { console.error(e) },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        l = u.length,
        c = !1; return o }),
function(e, t) { "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.matchesSelector = t() }(window, function() { var e = function() { var e = Element.prototype; if (e.matches) return "matches"; if (e.matchesSelector) return "matchesSelector"; for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) { var i = t[n],
                r = i + "MatchesSelector"; if (e[r]) return r } }(); return function(t, n) { return t[e](n) } }),
function(e, t) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) { return t(e, n) }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector) }(window, function(e, t) { var n = {};
    n.extend = function(e, t) { for (var n in t) e[n] = t[n]; return e }, n.modulo = function(e, t) { return (e % t + t) % t }, n.makeArray = function(e) { var t = []; if (Array.isArray(e)) t = e;
        else if (e && "number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e); return t }, n.removeFrom = function(e, t) { var n = e.indexOf(t); - 1 != n && e.splice(n, 1) }, n.getParent = function(e, n) { for (; e != document.body;)
            if (e = e.parentNode, t(e, n)) return e }, n.getQueryElement = function(e) { return "string" == typeof e ? document.querySelector(e) : e }, n.handleEvent = function(e) { var t = "on" + e.type;
        this[t] && this[t](e) }, n.filterFindElements = function(e, i) { e = n.makeArray(e); var r = []; return e.forEach(function(e) { if (e instanceof HTMLElement) { if (!i) return void r.push(e);
                t(e, i) && r.push(e); for (var n = e.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o]) } }), r }, n.debounceMethod = function(e, t, n) { var i = e.prototype[t],
            r = t + "Timeout";
        e.prototype[t] = function() { var e = this[r];
            e && clearTimeout(e); var t = arguments,
                o = this;
            this[r] = setTimeout(function() { i.apply(o, t), delete o[r] }, n || 100) } }, n.docReady = function(e) { var t = document.readyState; "complete" == t || "interactive" == t ? e() : document.addEventListener("DOMContentLoaded", e) }, n.toDashed = function(e) { return e.replace(/(.)([A-Z])/g, function(e, t, n) { return t + "-" + n }).toLowerCase() }; var i = e.console; return n.htmlInit = function(t, r) { n.docReady(function() { var o = n.toDashed(r),
                a = "data-" + o,
                s = document.querySelectorAll("[" + a + "]"),
                u = document.querySelectorAll(".js-" + o),
                l = n.makeArray(s).concat(n.makeArray(u)),
                c = a + "-options",
                f = e.jQuery;
            l.forEach(function(e) { var n, o = e.getAttribute(a) || e.getAttribute(c); try { n = o && JSON.parse(o) } catch (s) { return void(i && i.error("Error parsing " + a + " on " + e.className + ": " + s)) } var u = new t(e, n);
                f && f.data(e, r, u) }) }) }, n }),
function(e, t) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize)) }(window, function(e, t) {
    function n(e) { for (var t in e) return !1; return t = null, !0 }

    function i(e, t) { e && (this.element = e, this.layout = t, this.position = { x: 0, y: 0 }, this._create()) }

    function r(e) { return e.replace(/([A-Z])/g, function(e) { return "-" + e.toLowerCase() }) } var o = document.documentElement.style,
        a = "string" == typeof o.transition ? "transition" : "WebkitTransition",
        s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[a],
        l = { transform: s, transition: a, transitionDuration: a + "Duration", transitionProperty: a + "Property", transitionDelay: a + "Delay" },
        c = i.prototype = Object.create(e.prototype);
    c.constructor = i, c._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, c.handleEvent = function(e) { var t = "on" + e.type;
        this[t] && this[t](e) }, c.getSize = function() { this.size = t(this.element) }, c.css = function(e) { var t = this.element.style; for (var n in e) { var i = l[n] || n;
            t[i] = e[n] } }, c.getPosition = function() { var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            i = e[t ? "left" : "right"],
            r = e[n ? "top" : "bottom"],
            o = this.layout.size,
            a = -1 != i.indexOf("%") ? parseFloat(i) / 100 * o.width : parseInt(i, 10),
            s = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
        a = isNaN(a) ? 0 : a, s = isNaN(s) ? 0 : s, a -= t ? o.paddingLeft : o.paddingRight, s -= n ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = s }, c.layoutPosition = function() { var e = this.layout.size,
            t = {},
            n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            r = n ? "paddingLeft" : "paddingRight",
            o = n ? "left" : "right",
            a = n ? "right" : "left",
            s = this.position.x + e[r];
        t[o] = this.getXValue(s), t[a] = ""; var u = i ? "paddingTop" : "paddingBottom",
            l = i ? "top" : "bottom",
            c = i ? "bottom" : "top",
            f = this.position.y + e[u];
        t[l] = this.getYValue(f), t[c] = "", this.css(t), this.emitEvent("layout", [this]) }, c.getXValue = function(e) { var t = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px" }, c.getYValue = function(e) { var t = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px" }, c._transitionTo = function(e, t) { this.getPosition(); var n = this.position.x,
            i = this.position.y,
            r = parseInt(e, 10),
            o = parseInt(t, 10),
            a = r === this.position.x && o === this.position.y; if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition(); var s = e - n,
            u = t - i,
            l = {};
        l.transform = this.getTranslate(s, u), this.transition({ to: l, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, c.getTranslate = function(e, t) { var n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"); return e = n ? e : -e, t = i ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)" }, c.goTo = function(e, t) { this.setPosition(e, t), this.layoutPosition() }, c.moveTo = c._transitionTo, c.setPosition = function(e, t) { this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10) }, c._nonTransition = function(e) { this.css(e.to), e.isCleaning && this._removeStyles(e.to); for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this) }, c.transition = function(e) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e); var t = this._transn; for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n]; for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0); if (e.from) { this.css(e.from); var i = this.element.offsetHeight;
            i = null }
        this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0 }; var f = "opacity," + r(s);
    c.enableTransition = function() { if (!this.isTransitioning) { var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({ transitionProperty: f, transitionDuration: e, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1) } }, c.onwebkitTransitionEnd = function(e) { this.ontransitionend(e) }, c.onotransitionend = function(e) { this.ontransitionend(e) }; var d = { "-webkit-transform": "transform" };
    c.ontransitionend = function(e) { if (e.target === this.element) { var t = this._transn,
                i = d[e.propertyName] || e.propertyName; if (delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) { var r = t.onEnd[i];
                r.call(this), delete t.onEnd[i] }
            this.emitEvent("transitionEnd", [this]) } }, c.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1 }, c._removeStyles = function(e) { var t = {}; for (var n in e) t[n] = "";
        this.css(t) }; var p = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return c.removeTransitionStyles = function() { this.css(p) }, c.stagger = function(e) { e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms" }, c.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, c.remove = function() { return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, c.reveal = function() { delete this.isHidden, this.css({ display: "" }); var e = this.layout.options,
            t = {},
            n = this.getHideRevealTransitionEndProperty("visibleStyle");
        t[n] = this.onRevealTransitionEnd, this.transition({ from: e.hiddenStyle, to: e.visibleStyle, isCleaning: !0, onTransitionEnd: t }) }, c.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, c.getHideRevealTransitionEndProperty = function(e) { var t = this.layout.options[e]; if (t.opacity) return "opacity"; for (var n in t) return n }, c.hide = function() { this.isHidden = !0, this.css({ display: "" }); var e = this.layout.options,
            t = {},
            n = this.getHideRevealTransitionEndProperty("hiddenStyle");
        t[n] = this.onHideTransitionEnd, this.transition({ from: e.visibleStyle, to: e.hiddenStyle, isCleaning: !0, onTransitionEnd: t }) }, c.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, c.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, i }),
function(e, t) { "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, i, r, o) { return t(e, n, i, r, o) }) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item) }(window, function(e, t, n, i, r) {
    function o(e, t) { var n = i.getQueryElement(e); if (!n) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || e)));
        this.element = n, l && (this.$element = l(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t); var r = ++f;
        this.element.outlayerGUID = r, d[r] = this, this._create(); var o = this._getOption("initLayout");
        o && this.layout() }

    function a(e) {
        function t() { e.apply(this, arguments) } return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t }

    function s(e) { if ("number" == typeof e) return e; var t = e.match(/(^\d*\.?\d*)(\w*)/),
            n = t && t[1],
            i = t && t[2]; if (!n.length) return 0;
        n = parseFloat(n); var r = h[i] || 1; return n * r } var u = e.console,
        l = e.jQuery,
        c = function() {},
        f = 0,
        d = {};
    o.namespace = "outlayer", o.Item = r, o.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var p = o.prototype;
    i.extend(p, t.prototype), p.option = function(e) { i.extend(this.options, e) }, p._getOption = function(e) { var t = this.constructor.compatOptions[e]; return t && void 0 !== this.options[t] ? this.options[t] : this.options[e] }, o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, p._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle); var e = this._getOption("resize");
        e && this.bindResize() }, p.reloadItems = function() { this.items = this._itemize(this.element.children) }, p._itemize = function(e) { for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], r = 0; r < t.length; r++) { var o = t[r],
                a = new n(o, this);
            i.push(a) } return i }, p._filterFindItemElements = function(e) { return i.filterFindElements(e, this.options.itemSelector) }, p.getItemElements = function() { return this.items.map(function(e) { return e.element }) }, p.layout = function() { this._resetLayout(), this._manageStamps(); var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0 }, p._init = p.layout, p._resetLayout = function() { this.getSize() }, p.getSize = function() { this.size = n(this.element) }, p._getMeasurement = function(e, t) { var i, r = this.options[e];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[e] = i ? n(i)[t] : r) : this[e] = 0 }, p.layoutItems = function(e, t) { e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout() }, p._getItemsForLayout = function(e) { return e.filter(function(e) { return !e.isIgnored }) }, p._layoutItems = function(e, t) { if (this._emitCompleteOnItems("layout", e), e && e.length) { var n = [];
            e.forEach(function(e) { var i = this._getItemLayoutPosition(e);
                i.item = e, i.isInstant = t || e.isLayoutInstant, n.push(i) }, this), this._processLayoutQueue(n) } }, p._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, p._processLayoutQueue = function(e) { this.updateStagger(), e.forEach(function(e, t) { this._positionItem(e.item, e.x, e.y, e.isInstant, t) }, this) }, p.updateStagger = function() { var e = this.options.stagger; return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = s(e), this.stagger) }, p._positionItem = function(e, t, n, i, r) { i ? e.goTo(t, n) : (e.stagger(r * this.stagger), e.moveTo(t, n)) }, p._postLayout = function() { this.resizeContainer() }, p.resizeContainer = function() { var e = this._getOption("resizeContainer"); if (e) { var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)) } }, p._getContainerSize = c, p._setContainerMeasure = function(e, t) { if (void 0 !== e) { var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px" } }, p._emitCompleteOnItems = function(e, t) {
        function n() { r.dispatchEvent(e + "Complete", null, [t]) }

        function i() { a++, a == o && n() } var r = this,
            o = t.length; if (!t || !o) return void n(); var a = 0;
        t.forEach(function(t) { t.once(e, i) }) }, p.dispatchEvent = function(e, t, n) { var i = t ? [t].concat(n) : n; if (this.emitEvent(e, i), l)
            if (this.$element = this.$element || l(this.element), t) { var r = l.Event(t);
                r.type = e, this.$element.trigger(r, n) } else this.$element.trigger(e, n) }, p.ignore = function(e) { var t = this.getItem(e);
        t && (t.isIgnored = !0) }, p.unignore = function(e) { var t = this.getItem(e);
        t && delete t.isIgnored }, p.stamp = function(e) { e = this._find(e), e && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this)) }, p.unstamp = function(e) { e = this._find(e), e && e.forEach(function(e) { i.removeFrom(this.stamps, e), this.unignore(e) }, this) }, p._find = function(e) { return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = i.makeArray(e)) : void 0 }, p._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, p._getBoundingRect = function() { var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = { left: e.left + t.paddingLeft + t.borderLeftWidth, top: e.top + t.paddingTop + t.borderTopWidth, right: e.right - (t.paddingRight + t.borderRightWidth), bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth) } }, p._manageStamp = c, p._getElementOffset = function(e) { var t = e.getBoundingClientRect(),
            i = this._boundingRect,
            r = n(e),
            o = { left: t.left - i.left - r.marginLeft, top: t.top - i.top - r.marginTop, right: i.right - t.right - r.marginRight, bottom: i.bottom - t.bottom - r.marginBottom }; return o }, p.handleEvent = i.handleEvent, p.bindResize = function() { e.addEventListener("resize", this), this.isResizeBound = !0 }, p.unbindResize = function() { e.removeEventListener("resize", this), this.isResizeBound = !1 }, p.onresize = function() { this.resize() }, i.debounceMethod(o, "onresize", 100), p.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, p.needsResizeLayout = function() { var e = n(this.element),
            t = this.size && e; return t && e.innerWidth !== this.size.innerWidth }, p.addItems = function(e) { var t = this._itemize(e); return t.length && (this.items = this.items.concat(t)), t }, p.appended = function(e) { var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t)) }, p.prepended = function(e) { var t = this._itemize(e); if (t.length) { var n = this.items.slice(0);
            this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n) } }, p.reveal = function(e) { if (this._emitCompleteOnItems("reveal", e), e && e.length) { var t = this.updateStagger();
            e.forEach(function(e, n) { e.stagger(n * t), e.reveal() }) } }, p.hide = function(e) { if (this._emitCompleteOnItems("hide", e), e && e.length) { var t = this.updateStagger();
            e.forEach(function(e, n) { e.stagger(n * t), e.hide() }) } }, p.revealItemElements = function(e) { var t = this.getItems(e);
        this.reveal(t) }, p.hideItemElements = function(e) { var t = this.getItems(e);
        this.hide(t) }, p.getItem = function(e) { for (var t = 0; t < this.items.length; t++) { var n = this.items[t]; if (n.element == e) return n } }, p.getItems = function(e) { e = i.makeArray(e); var t = []; return e.forEach(function(e) { var n = this.getItem(e);
            n && t.push(n) }, this), t }, p.remove = function(e) { var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) { e.remove(), i.removeFrom(this.items, e) }, this) }, p.destroy = function() { var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) { e.destroy() }), this.unbindResize(); var t = this.element.outlayerGUID;
        delete d[t], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace) }, o.data = function(e) { e = i.getQueryElement(e); var t = e && e.outlayerGUID; return t && d[t] }, o.create = function(e, t) { var n = a(o); return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = e, n.data = o.data, n.Item = a(r), i.htmlInit(n, e), l && l.bridget && l.bridget(e, n), n }; var h = { ms: 1, s: 1e3 }; return o.Item = r, o }),
function(e, t) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize) }(window, function(e, t) { var n = e.create("masonry"); return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0 }, n.prototype.measureColumns = function() { if (this.getContainerWidth(), !this.columnWidth) { var e = this.items[0],
                n = e && e.element;
            this.columnWidth = n && t(n).outerWidth || this.containerWidth } var i = this.columnWidth += this.gutter,
            r = this.containerWidth + this.gutter,
            o = r / i,
            a = i - r % i,
            s = a && 1 > a ? "round" : "floor";
        o = Math[s](o), this.cols = Math.max(o, 1) }, n.prototype.getContainerWidth = function() { var e = this._getOption("fitWidth"),
            n = e ? this.element.parentNode : this.element,
            i = t(n);
        this.containerWidth = i && i.innerWidth }, n.prototype._getItemLayoutPosition = function(e) { e.getSize(); var t = e.size.outerWidth % this.columnWidth,
            n = t && 1 > t ? "round" : "ceil",
            i = Math[n](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols); for (var r = this._getColGroup(i), o = Math.min.apply(Math, r), a = r.indexOf(o), s = { x: this.columnWidth * a, y: o }, u = o + e.size.outerHeight, l = this.cols + 1 - r.length, c = 0; l > c; c++) this.colYs[a + c] = u; return s }, n.prototype._getColGroup = function(e) { if (2 > e) return this.colYs; for (var t = [], n = this.cols + 1 - e, i = 0; n > i; i++) { var r = this.colYs.slice(i, i + e);
            t[i] = Math.max.apply(Math, r) } return t }, n.prototype._manageStamp = function(e) { var n = t(e),
            i = this._getElementOffset(e),
            r = this._getOption("originLeft"),
            o = r ? i.left : i.right,
            a = o + n.outerWidth,
            s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s); var u = Math.floor(a / this.columnWidth);
        u -= a % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u); for (var l = this._getOption("originTop"), c = (l ? i.top : i.bottom) + n.outerHeight, f = s; u >= f; f++) this.colYs[f] = Math.max(c, this.colYs[f]) }, n.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var e = { height: this.maxY }; return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e }, n.prototype._getContainerFitWidth = function() { for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++; return (this.cols - e) * this.columnWidth - this.gutter }, n.prototype.needsResizeLayout = function() { var e = this.containerWidth; return this.getContainerWidth(), e != this.containerWidth }, n }), $(document).foundation(), $(window).bind("load", function() { var e = $("footer"),
        t = e.position(),
        n = $(window).height();
    n -= t.top, n -= e.height(), n > 0 && e.css({ "margin-top": n + "px" }) }), $(window).load(function() { $(".grid").masonry({ itemSelector: ".grid-item", columnWidth: ".grid-sizer", gutter: 10, isFitWidth: !0 }) }), $(document).ready(function() { $(".image-link").magnificPopup({ gallery: { enabled: !0, preload: [0, 2], navigateByImgClick: !0, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: '<span class="mfp-counter">%curr% of %total%</span>' }, type: "image" }) }), $(document).ready(function() { $(".parent-container").magnificPopup({ delegate: "a", type: "image", gallery: { enabled: !0 } }) });