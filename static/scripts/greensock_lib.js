
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.17.0", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, l.updateTo = function(t, e) {
                    var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || n) {
                        this._initted = !1, this._init();
                        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next
                    }
                    return this
                }, l.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === n) && v !== t && (i = !0, v > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = g + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && l >= .5) && (l = 1 - l), 3 === _ && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === _ ? 1 - l : 2 === _ ? l : .5 > this._time / g ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && d === this._cycle) return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, c) {
                    a = a || 0;
                    var f, p, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(c || n.callbackScope || this, u || _)
                        };
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        p = {};
                        for (d in n) p[d] = n[d];
                        p.delay = g, m === f && l && (p.onComplete = y), v[m] = new r(t[m], e, p), g += a
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    c = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = c(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, l, _, u, c, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in f)
                                for (l = f[_].target.parentNode; l;) l === t && (n = n.concat(f[_].tweens)), l = l.parentNode;
                            for (c = n.length, u = 0; c > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = c(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, l.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, l.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = s._internals = {},
                    o = n.isSelector,
                    h = n.isArray,
                    l = n.lazyTweens,
                    _ = n.lazyRender,
                    u = [],
                    c = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = a.pauseCallback = function(t, e, i, s) {
                        var n, a = t._timeline,
                            o = a._totalTime,
                            h = t._startTime,
                            l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                            _ = l ? 0 : r,
                            c = l ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = c, n = n._prev;
                            for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                            e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                        }
                    },
                    m = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    d = s.prototype = new e;
                return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                    var n = s.repeat && c.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, d.from = function(t, e, s, r) {
                    return this.add((s.repeat && c.TweenMax || i).from(t, e, s), r)
                }, d.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && c.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                    var u, c = new s({
                        onComplete: h,
                        onCompleteParams: l,
                        callbackScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = f(r.startAt)), c.to(t[u], e, f(r), u * n);
                    return this.add(c, a)
                }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, d.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, d.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, d.add = function(r, n, a, o) {
                    var l, _, u, c, f, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && h(r)) {
                            for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(c = r[u]) && (c = new s({
                                tweens: c
                            })), this.add(c, l), "string" != typeof c && "function" != typeof c && ("sequence" === a ? l = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), l += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, d.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && h(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, d._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, d.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, d.insert = d.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, d.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, d.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, d.addPause = function(t, e, s, r) {
                    var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
                    return n.data = "isPause", this.add(n, t)
                }, d.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, d.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, d._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && h(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, d.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, d.stop = function() {
                    return this.paused(!0)
                }, d.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, d.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, d.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        p = this._timeScale,
                        m = this._paused;
                    if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== c && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c)
                            for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (f === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, d._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, d.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, d.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, d.recent = function() {
                    return this._recent
                }, d._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, d.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, d._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, d.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, d.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, d._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, d.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, d.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, d.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, d.paused = function(e) {
                    if (!e)
                        for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, d.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, d.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = e._internals,
                    a = n.lazyTweens,
                    o = n.lazyRender,
                    h = new i(null, null, 1, 0),
                    l = s.prototype = new t;
                return l.constructor = s, l.kill()._gc = !1, s.version = "1.17.0", l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, l.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, l.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, l.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, l.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, n, a = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function() {
                        n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
                    }, n
                }, l.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, l.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, h, l, _, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        p = this._time,
                        m = this._totalTime,
                        d = this._startTime,
                        g = this._timeScale,
                        v = this._rawPrevTime,
                        y = this._paused,
                        T = this._cycle;
                    if (t >= c) this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, l = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > v || v === r) && v !== t && this._first && (_ = !0, v > r && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === f && v !== r && (v > 0 || 0 > t && v >= 0) && !this._locked) && (l = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, l = "onReverseComplete") : v >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                            t = 0, this._initted || (_ = !0)
                        }
                    else 0 === f && 0 > v && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = f + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== T && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & T),
                            w = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            b = this._totalTime,
                            P = this._cycle,
                            k = this._rawPrevTime,
                            S = this._time;
                        if (this._totalTime = T * f, T > this._cycle ? x = !x : this._totalTime += f, this._time = p, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = T, this._locked = !0, p = x ? 0 : f, this.render(p, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (p = x ? f + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !y) return;
                        this._time = S, this._totalTime = b, this._cycle = P, this._rawPrevTime = k
                    }
                    if (!(this._time !== p && this._first || i || _)) return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= p)
                        for (s = this._first; s && (h = s._next, !this._paused || y);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    else
                        for (s = this._last; s && (h = s._prev, !this._paused || y);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = h;
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (d === this._startTime || g !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                }, l.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, l.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, l.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, l.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, l.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, l.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, l.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, l.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            c = (l + _) / 2,
                            f = (c - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    l = function(t, r, n, a, o) {
                        var l, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; w > l; l++) f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[l], T = i[l], x = .25 * (T + y) * r / (a ? .5 : s[l] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = h(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    _ = function(t, s, r, n) {
                        var o, h, l, _, u, c, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(c = t[h][s]) && "=" === c.charAt(1) && (t[h][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
                        if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][s], 0, 0, t[h + 1][s]), f
                    },
                    u = function(t, n, a, h, u, c) {
                        var f, p, m, d, g, v, y, T, x = {},
                            w = [],
                            b = c || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
                        for (p in t[0]) w.push(p);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                                    y = !1;
                                    break
                                } y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!h) {
                            for (f = w.length; --f > -1;)
                                if (r[p])
                                    for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
                        }
                        for (f = w.length, d = a ? 4 : 1; --f > -1;) p = w[f], m = x[p], l(m, n, a, h, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return x
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, c, f, p, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (l = v.length; --l > -1;) {
                            for (c = v[l], m[c] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, c, f, p = 1 / i, m = t.length; --m > -1;)
                            for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, h = c.b - n, s = r = 0, _ = 1; i >= _; _++) l = p * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            c = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, c[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = c, o[n] = l, h = 0, c = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in _) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, c = this._segCount,
                                f = this._func,
                                p = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                                    for (l = c - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), f[n] ? p[n](h) : p[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, x, w, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](h) : p[n] = h)
                            }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = n.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new m;
                                var l, _, u, c = e.values,
                                    f = c.length - 1,
                                    p = [],
                                    d = {};
                                if (0 > f) return o;
                                for (l = 0; f >= l; l++) u = i(t, c[l], a, o, h, f !== l), p[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, d._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, d._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var _, u, c, f, p, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    F = {},
                    N = document,
                    E = function(t) {
                        return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                    },
                    L = E("div"),
                    X = E("img"),
                    B = a._internals = {
                        _specialProps: h
                    },
                    Y = navigator.userAgent,
                    j = function() {
                        var t = Y.indexOf("Android"),
                            e = E("a");
                        return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), p = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), f = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    U = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    V = "",
                    G = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
                    },
                    Z = N.defaultView ? N.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
                    },
                    $ = B.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = A.test(i),
                            u = t,
                            c = L.style,
                            f = 0 > s;
                        if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || N.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                c[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
                        }
                        return f ? -o : o
                    },
                    H = B.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i);
                        return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, s, r, n = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || Pe === r) && (n[r.replace(S, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || be === i) && (n[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
                        return j || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Se && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                    },
                    J = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new fe(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    te = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length;
                        for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    se = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    re = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ae = function(t, e, i, s) {
                        var r, n, a, o, h, l = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    he = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    le = a.parseColor = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                    },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) _e += "|" + l + "\\b";
                _e = RegExp(_e + ")", "gi");
                var ue = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, c, f, p;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++) p[f] = r(p[f]);
                                return p.join(",")
                            }
                            if (e = (t.match(_e) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--)
                                for (; _ > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                            return o + c.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, c;
                            if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) {
                                for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++) n[c] = r(n[c]);
                                return n.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, _ > c--)
                                for (; _ > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    ce = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    fe = (B._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    pe = (B._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            c = {},
                            f = {},
                            p = i._transform,
                            m = F;
                        for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (l = new fe(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], c[o] = s[h], n || (l = new fe(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, B.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, c) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this)
                    }),
                    me = function(t, e, i, s, r, n) {
                        var a = new pe(t, e, i, s - i, r, -1, n);
                        return a.b = i, a.e = a.xs0 = s, a
                    },
                    de = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) {
                        i = i || n || "", a = new pe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, c, f, p, m, v, y, T, x, w, b, k, S = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            O = S.length,
                            A = _ !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = h, a.setRatio = l, u = 0; O > u; u++)
                            if (p = S[u], m = R[u], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === p.charAt(0) || oe[p] || P.test(p))) k = "," === m.charAt(m.length - 1) ? ")," : ")", p = le(p), m = le(m), x = p.length + m.length > 6, x && !j && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (j || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : k, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, k, !1)));
                        else if (v = p.match(d)) {
                            if (y = m.match(g), !y || y.length !== v.length) return a;
                            for (f = 0, c = 0; v.length > c; c++) b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                            a["xs" + a.l] += p.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + p : p;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++) k += a["xs" + u] + a.data["xn" + u];
                            a.e = k + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    ge = 9;
                for (l = pe.prototype, l.l = l.pr = 0; --ge > 0;) l["xn" + ge] = 0, l["xs" + ge] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ve = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    ye = B._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ve(n[s], e)
                    },
                    Te = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ye(t, {
                                parser: function(t, i, s, r, n, a, l) {
                                    var _ = o.com.greensock.plugins[e];
                                    return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                l = ve.prototype, l.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, c = this.keyword;
                    if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : c && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return de(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, l.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    ye(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                }, a.useSVGTransformAttr = c || f;
                var xe, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    be = W("transform"),
                    Pe = V + "transform",
                    ke = W("transformOrigin"),
                    Se = null !== W("perspective"),
                    Re = B.Transform = function() {
                        this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
                    },
                    Oe = window.SVGElement,
                    Ae = function(t, e, i) {
                        var s, r = N.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g;
                        for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    Ce = N.documentElement,
                    De = function() {
                        var t, e, i, s = m || /Android/i.test(Y) && !window.chrome;
                        return N.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[ke] = "50% 50%", e.style[be] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Se), Ce.removeChild(t)), s
                    }(),
                    Me = function(t, e, i, s, r) {
                        var n, o, h, l, _, u, c, f, p, m, d, g, v, y, T = t._gsTransform,
                            x = Fe(t, !0);
                        T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = l = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = l * (p / g) + _ * (-f / g) + (f * d - p * m) / g, h = l * (-c / g) + _ * (u / g) - (u * d - c * m) / g, l = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = h), T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = l - v, h = _ - y, T.xOffset += o * x[0] + h * x[2] - o, T.yOffset += o * x[1] + h * x[3] - h) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                    },
                    ze = function(t) {
                        return !!(Oe && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Ie = [1, 0, 0, 1, 0, 0],
                    Fe = function(t, e) {
                        var i, s, r, n, a, o = t._gsTransform || new Re,
                            h = 1e5;
                        if (be ? s = Q(t, Pe, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && ze(t)) && (i && -1 !== (t.style[be] + "").indexOf("matrix") && (s = t.style[be], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ie;
                        for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ge = r.length; --ge > -1;) n = Number(r[ge]), r[ge] = (a = n - (n |= 0)) ? (0 | a * h + (0 > a ? -.5 : .5)) / h + n : n;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Ne = B.getTransform = function(t, i, s, n) {
                        if (t._gsTransform && s && !n) return t._gsTransform;
                        var o, h, l, _, u, c, f = s ? t._gsTransform || new Re : new Re,
                            p = 0 > f.scaleX,
                            m = 2e-5,
                            d = 1e5,
                            g = Se ? parseFloat(Q(t, ke, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(a.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !ze(t)), f.svg && (Me(t, Q(t, ke, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), xe = a.useSVGTransformAttr || De), o = Fe(t), o !== Ie) {
                            if (16 === o.length) {
                                var y, T, x, w, b, P = o[0],
                                    k = o[1],
                                    S = o[2],
                                    R = o[3],
                                    O = o[4],
                                    A = o[5],
                                    C = o[6],
                                    D = o[7],
                                    M = o[8],
                                    z = o[9],
                                    F = o[10],
                                    N = o[12],
                                    E = o[13],
                                    L = o[14],
                                    X = o[11],
                                    B = Math.atan2(C, F);
                                f.zOrigin && (L = -f.zOrigin, N = M * L - o[12], E = z * L - o[13], L = F * L + f.zOrigin - o[14]), f.rotationX = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + F * b, M = O * -b + M * w, z = A * -b + z * w, F = C * -b + F * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, F), f.rotationY = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - F * b, z = k * b + z * w, F = S * b + F * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * I, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + F * F) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = N, f.y = E, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                            } else if (!(Se && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var Y = o.length >= 6,
                                    j = Y ? o[0] : 1,
                                    U = o[1] || 0,
                                    q = o[2] || 0,
                                    V = Y ? o[3] : 1;
                                f.x = o[4] || 0, f.y = o[5] || 0, l = Math.sqrt(j * j + U * U), _ = Math.sqrt(V * V + q * q), u = j || U ? Math.atan2(U, j) * I : f.rotation || 0, c = q || V ? Math.atan2(q, V) * I + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (l *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = l, f.scaleY = _, f.rotation = u, f.skewX = c, Se && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V))
                            }
                            f.zOrigin = g;
                            for (h in f) m > f[h] && f[h] > -m && (f[h] = 0)
                        }
                        return s && (t._gsTransform = f, f.svg && (xe && t.style[be] ? e.delayedCall(.001, function() {
                            Be(t.style, be)
                        }) : !xe && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Ee = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = h, h = -l, l = -i, e = c.filter, u.filter = "";
                            var f, p, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                w = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * h), b += p - (f * l + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * h) + w) + ", Dy=" + (p - (f * l + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, k, S, R = 8 > m ? 1 : -1;
                                for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), ge = 0; 4 > ge; ge++) k = ee[ge], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ge ? -s.ieOffsetX : -s.ieOffsetY : 2 > ge ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ge || 2 === ge ? 1 : R))) + "px"
                            }
                        }
                    },
                    Le = B.set3DTransformRatio = B.setTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, c, p, m, d, g, v, y, T, x, w, b, P, k = this.data,
                            S = this.t.style,
                            R = k.rotation,
                            O = k.rotationX,
                            A = k.rotationY,
                            C = k.scaleX,
                            D = k.scaleY,
                            M = k.scaleZ,
                            I = k.x,
                            F = k.y,
                            N = k.z,
                            E = k.svg,
                            L = k.perspective,
                            X = k.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || N || L || A || O) && (!xe || !E) && Se)) return R || k.skewX || E ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), E && (I += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, F += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, xe && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), I += .01 * k.xPercent * m.width, F += .01 * k.yPercent * m.height), m = 1e-6, m > I && I > -m && (I = 0), m > F && F > -m && (F = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + I + "," + F + ")", E && xe ? this.t.setAttribute("transform", "matrix(" + T) : S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + I + "," + F + ")", void 0;
                        if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX) R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d;
                        else {
                            if (!(A || O || 1 !== M || L || E)) return S[be] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + F + "px," + N + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;
                            e = n = 1, i = r = 0
                        }
                        l = 1, s = a = o = h = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", R = A * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, l = d, c *= d, e *= d, r *= d), R = O * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, h = l * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, l *= M, c *= M), 1 !== D && (i *= D, n *= D, h *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || E) && (p && (I += s * -p, F += a * -p, N += l * -p + p), E && (I += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, F += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > I && I > -m && (I = w), m > F && F > -m && (F = w), m > N && N > -m && (N = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > h && h > -m ? w : h) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > l && l > -m ? w : l) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += I + x + F + x + N + x + (L ? 1 + -N / L : 1) + ")", S[be] = T
                    };
                l = Re.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h;
                        var l, _, u, c, f, p, m, d, g, v = t._gsTransform,
                            y = s._transform = Ne(t, r, !0, h.parseTransform),
                            T = t.style,
                            x = 1e-6,
                            w = we.length,
                            b = h,
                            P = {},
                            k = "transformOrigin";
                        if ("string" == typeof b.transform && be) u = L.style, u[be] = b.transform, u.display = "block", u.position = "absolute", N.body.appendChild(L), l = Ne(L, null, !1), N.body.removeChild(L), null != b.xPercent && (l.xPercent = ne(b.xPercent, y.xPercent)), null != b.yPercent && (l.yPercent = ne(b.yPercent, y.yPercent));
                        else if ("object" == typeof b) {
                            if (l = {
                                    scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, y.scaleX),
                                    scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, y.scaleY),
                                    scaleZ: ne(b.scaleZ, y.scaleZ),
                                    x: ne(b.x, y.x),
                                    y: ne(b.y, y.y),
                                    z: ne(b.z, y.z),
                                    xPercent: ne(b.xPercent, y.xPercent),
                                    yPercent: ne(b.yPercent, y.yPercent),
                                    perspective: ne(b.transformPerspective, y.perspective)
                                }, m = b.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) b[u] = m[u];
                                else b.rotation = m;
                            "string" == typeof b.x && -1 !== b.x.indexOf("%") && (l.x = 0, l.xPercent = ne(b.x, y.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (l.y = 0, l.yPercent = ne(b.y, y.yPercent)), l.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : y.rotation, y.rotation, "rotation", P), Se && (l.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), l.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), l.skewX = null == b.skewX ? y.skewX : ae(b.skewX, y.skewX), l.skewY = null == b.skewY ? y.skewY : ae(b.skewY, y.skewY), (_ = l.skewY - y.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (Se && null != b.force3D && (y.force3D = b.force3D, p = !0), y.skewType = b.skewType || y.skewType || a.defaultSkewType, f = y.force3D || y.z || y.rotationX || y.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, f || null == b.scale || (l.scaleZ = 1); --w > -1;) i = we[w], c = l[i] - y[i], (c > x || -x > c || null != b[i] || null != F[i]) && (p = !0, n = new pe(y, i, y[i], c, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return c = b.transformOrigin, y.svg && (c || b.svgOrigin) && (d = y.xOffset, g = y.yOffset, Me(t, se(c), l, b.svgOrigin, b.smoothOrigin), n = me(y, "xOrigin", (v ? y : l).xOrigin, l.xOrigin, n, k), n = me(y, "yOrigin", (v ? y : l).yOrigin, l.yOrigin, n, k), (d !== y.xOffset || g !== y.yOffset) && (n = me(y, "xOffset", v ? d : y.xOffset, y.xOffset, n, k), n = me(y, "yOffset", v ? g : y.yOffset, y.yOffset, n, k)), c = xe ? null : "0px 0px"), (c || Se && f && y.zOrigin) && (be ? (p = !0, i = ke, c = (c || Q(t, i, r, !1, "50% 50%")) + "", n = new pe(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Se ? (u = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === u || "0px" !== c[2]) ? parseFloat(c[2]) : u) || 0, n.xs0 = n.e = c[0] + " " + (c[1] || "50%") + " 0px", n = new pe(y, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = y.zOrigin) : n.xs0 = n.e = c) : se(c + "", y)), p && (s._transformType = y.svg && xe || !f && 3 !== this._transformType ? 2 : 3), n
                    },
                    prefix: !0
                }), ye("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ye("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, c, f, p, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, l = parseFloat(_) + p + g)), a = de(P, b[h], u + " " + _, c + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), ye("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, c, f = "background-position",
                            p = r || Z(t, null),
                            d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, ""), c && "none" !== c)) {
                            for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", c), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: se
                }), ye("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: se
                }), ye("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ye("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ye("transformStyle", {
                    prefix: !0
                }), ye("backfaceVisibility", {
                    prefix: !0
                }), ye("userSelect", {
                    prefix: !0
                }), ye("margin", {
                    parser: ce("marginTop,marginRight,marginBottom,marginLeft")
                }), ye("padding", {
                    parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ye("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), ye("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ye("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), ye("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0]
                    }
                }), ye("borderWidth", {
                    parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ye("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Xe = function(t) {
                    var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
                };
                ye("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), j ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Xe), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Be = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Ye = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Be(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ye("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, c, f, p = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                            for (c = {}, f = u.data; f;) c[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), l = J(t, _, K(t), h, c), t.setAttribute("class", p), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)
                    }
                });
                var je = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n, a = this.t.style,
                            o = h.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === o ? r = !0 : i = "transformOrigin" === i ? ke : h[i].p), Be(a, i);
                        r && (Be(a, be), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (ye("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = je, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ge = l.length; ge--;) Te(l[ge]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var l, f, m, d, g, v, y, T, x, b = t.style;
                    if (u && "" === b.zIndex && (l = Q(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, l = K(t, r), b.cssText = d + ";" + e, l = J(t, l, K(t)).difs, !j && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = d), this._firstPT = f = e.className ? h.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, be ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;) m = m._next;
                        T = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = be ? Le : Ee, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = d; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : g) ? f._prev._next = f: d = f, (f._next = m) ? m._prev = f : g = f, f = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, l.parse = function(t, e, i, n) {
                    var a, o, l, u, c, f, p, m, d, g, v = t.style;
                    for (a in e) f = e[a], o = h[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = le(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = de(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (l = parseFloat(c), p = l || 0 === l ? c.substr((l + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (l = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (l = H(t, a, r), p = "px") : (l = "opacity" !== a ? 0 : 1, p = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + l : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, p), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new pe(v, a, u || l || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = de(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && xe || !t && 3 !== this._transformType ? 2 : 3
                };
                var Ue = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Ue, s.data = this
                }, l._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var qe = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) qe(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || qe(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o, h = e.to(t, i, s),
                        l = [h],
                        _ = [],
                        u = [],
                        c = [],
                        f = e._internals.reservedProps;
                    for (t = h._targets || h.target, qe(t, _, c), h.render(i, !0, !0), qe(t, u), h.render(0, !0, !0), h._enabled(!0), r = c.length; --r > -1;)
                        if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) f[a] && (n[a] = s[a]);
                            o = {};
                            for (a in n) o[a] = _[r][a];
                            l.push(e.fromTo(c[r], i, o, n))
                        } return l
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                var t = /(?:\d|\-|\+|=|#|\.)*/g,
                    e = /[A-Za-z%]/g;
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.4.0",
                    init: function(i, s) {
                        var r, n, a, o, h;
                        if ("function" != typeof i.setAttribute) return !1;
                        this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                        for (r in s) this._start[r] = this._proxy[r] = n = i.getAttribute(r) + "", this._end[r] = a = s[r] + "", this._suffix[r] = o = e.test(a) ? a.replace(t, "") : e.test(n) ? n.replace(t, "") : "", o && (h = a.indexOf(o), -1 !== h && (a = a.substr(0, h))), this._addTween(this._proxy, r, parseFloat(n), a, r) || (this._suffix[r] = ""), "=" === a.charAt(1) && (this._end[r] = this._firstPT.s + this._firstPT.c + o), this._overwriteProps.push(r);
                        return !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start, n = r === this._proxy; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + (n ? this._suffix[e] : ""))
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    p = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new c(1, 1, null), f = u; --f > -1;) a = l[f], o = new c(a.x, a.y, o);
                    this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                p = {},
                m = function(s, r, n, a) {
                    this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(l) {
                        for (var _, u, c, f, d = r.length, g = d; --d > -1;)(_ = p[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), c = u.pop(), f = h(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = l._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = T.map = {},
                w = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
            x.linear = l.easing.Linear.easeIn, x.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var P = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                R = S();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, h, l = this,
                    u = S(),
                    f = e !== !1 && P,
                    p = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) {
                        var e, a, o = S() - R;
                        o > p && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d)
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function() {
                    g(!0)
                }, l.lagSmoothing = function(t, e) {
                    p = t || 1 / _, m = Math.min(e, p, 0)
                }, l.sleep = function() {
                    null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, l === a && (o = !1))
                }, l.wake = function() {
                    null !== r ? l.sleep() : l.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                    }, l === a && (o = !0), g(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), f = t, l.fps(i), void 0) : f
                }, l.fps(t), setTimeout(function() {
                    f && 5 > l.frame && l.useRAF(!1)
                }, 1500)
            }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
            var O = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, U) {
                    o || a.wake();
                    var i = this.vars.useFrames ? j : U;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new l.Ticker, n = O.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var A = function() {
                o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && V())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var C = g("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = C.prototype = new O, n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (O.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = G(n, this, !1), 1 === h && this._siblings[r].length > 1 && Z(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === h && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!E[i] || E[i] && E[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new O, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.17.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [],
                F = {},
                N = D._internals = {
                    isArray: f,
                    isSelector: M,
                    lazyTweens: I
                },
                E = D._plugins = {},
                L = N.tweenLookup = {},
                X = 0,
                B = N.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                j = O._rootFramesTimeline = new C,
                U = O._rootTimeline = new C,
                q = 30,
                V = N.lazyRender = function() {
                    var t, e = I.length;
                    for (F = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            U._startTime = a.time, j._startTime = a.frame, U._active = j._active = !0, setTimeout(V, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && V(), U.render((a.time - U._startTime) * U._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && V(), a.frame >= q) {
                    q = a.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if (i = U._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var G = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return L[n].tweens
                },
                W = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                Z = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + _,
                        c = [],
                        f = 0,
                        p = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Q(e, 0, p), 0 === Q(o, l, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !W(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        } return a
                },
                Q = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (s in n) B[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : x[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && E.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], B[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (E[n] && (h = new E[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Z(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / h ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (h = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in l) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !W(this, i, e, u)) return !1
                        }
                        for (n in l)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, h = !0), a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = G(s[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = G(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var $ = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = $.prototype
            }, !0);
            if (n = $.prototype, $.version = "1.10.1", $.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - Number(i) : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, n.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, $.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === $.API && (E[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            $.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new $(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, $.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in p) p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.THREE = {})
}(this, function(e) {
    "use strict";

    function t() {}

    function n(e, t) {
        this.x = e || 0, this.y = t || 0
    }

    function i() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function r(e, t, n, i) {
        this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
    }

    function o(e, t, n) {
        this.x = e || 0, this.y = t || 0, this.z = n || 0
    }

    function a() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    function s(e, t, i, r, o, c, l, u, h, p) {
        Object.defineProperty(this, "id", {
            value: ac++
        }), this.uuid = oc.generateUUID(), this.name = "", this.image = void 0 !== e ? e : s.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : s.DEFAULT_MAPPING, this.wrapS = void 0 !== i ? i : es, this.wrapT = void 0 !== r ? r : es, this.magFilter = void 0 !== o ? o : os, this.minFilter = void 0 !== c ? c : ss, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== l ? l : _s, this.type = void 0 !== u ? u : cs, this.offset = new n(0, 0), this.repeat = new n(1, 1), this.center = new n(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new a, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== p ? p : Ys, this.version = 0, this.onUpdate = null
    }

    function c(e, t, n, i) {
        this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
    }

    function l(e, t, n) {
        this.uuid = oc.generateUUID(), this.width = e, this.height = t, this.scissor = new c(0, 0, e, t), this.scissorTest = !1, this.viewport = new c(0, 0, e, t), n = n || {}, void 0 === n.minFilter && (n.minFilter = os), this.texture = new s(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.depthBuffer = void 0 !== n.depthBuffer ? n.depthBuffer : !0, this.stencilBuffer = void 0 !== n.stencilBuffer ? n.stencilBuffer : !0, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }

    function u(e, t, n) {
        l.call(this, e, t, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function h(e, t, n, i, r, o, a, c, l, u, h, p) {
        s.call(this, null, o, a, c, l, u, i, r, h, p), this.image = {
            data: e,
            width: t,
            height: n
        }, this.magFilter = void 0 !== l ? l : ns, this.minFilter = void 0 !== u ? u : ns, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function p(e, t, n, i, r, o, a, c, l, u) {
        e = void 0 !== e ? e : [], t = void 0 !== t ? t : Wa, s.call(this, e, t, n, i, r, o, a, c, l, u), this.flipY = !1
    }

    function d() {
        this.seq = [], this.map = {}
    }

    function f(e, t, n) {
        var i = e[0];
        if (0 >= i || i > 0) return e;
        var r = t * n,
            o = lc[r];
        if (void 0 === o && (o = new Float32Array(r), lc[r] = o), 0 !== t) {
            i.toArray(o, 0);
            for (var a = 1, s = 0; a !== t; ++a) s += n, e[a].toArray(o, s)
        }
        return o
    }

    function m(e, t) {
        var n = uc[t];
        void 0 === n && (n = new Int32Array(t), uc[t] = n);
        for (var i = 0; i !== t; ++i) n[i] = e.allocTextureUnit();
        return n
    }

    function v(e, t) {
        e.uniform1f(this.addr, t)
    }

    function g(e, t) {
        e.uniform1i(this.addr, t)
    }

    function y(e, t) {
        void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
    }

    function x(e, t) {
        void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
    }

    function b(e, t) {
        void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
    }

    function w(e, t) {
        e.uniformMatrix2fv(this.addr, !1, t.elements || t)
    }

    function _(e, t) {
        void 0 === t.elements ? e.uniformMatrix3fv(this.addr, !1, t) : (pc.set(t.elements), e.uniformMatrix3fv(this.addr, !1, pc))
    }

    function M(e, t) {
        void 0 === t.elements ? e.uniformMatrix4fv(this.addr, !1, t) : (hc.set(t.elements), e.uniformMatrix4fv(this.addr, !1, hc))
    }

    function T(e, t, n) {
        var i = n.allocTextureUnit();
        e.uniform1i(this.addr, i), n.setTexture2D(t || sc, i)
    }

    function E(e, t, n) {
        var i = n.allocTextureUnit();
        e.uniform1i(this.addr, i), n.setTextureCube(t || cc, i)
    }

    function S(e, t) {
        e.uniform2iv(this.addr, t)
    }

    function C(e, t) {
        e.uniform3iv(this.addr, t)
    }

    function A(e, t) {
        e.uniform4iv(this.addr, t)
    }

    function P(e) {
        switch (e) {
            case 5126:
                return v;
            case 35664:
                return y;
            case 35665:
                return x;
            case 35666:
                return b;
            case 35674:
                return w;
            case 35675:
                return _;
            case 35676:
                return M;
            case 35678:
            case 36198:
                return T;
            case 35680:
                return E;
            case 5124:
            case 35670:
                return g;
            case 35667:
            case 35671:
                return S;
            case 35668:
            case 35672:
                return C;
            case 35669:
            case 35673:
                return A
        }
    }

    function R(e, t) {
        e.uniform1fv(this.addr, t)
    }

    function L(e, t) {
        e.uniform1iv(this.addr, t)
    }

    function I(e, t) {
        e.uniform2fv(this.addr, f(t, this.size, 2))
    }

    function O(e, t) {
        e.uniform3fv(this.addr, f(t, this.size, 3))
    }

    function B(e, t) {
        e.uniform4fv(this.addr, f(t, this.size, 4))
    }

    function D(e, t) {
        e.uniformMatrix2fv(this.addr, !1, f(t, this.size, 4))
    }

    function N(e, t) {
        e.uniformMatrix3fv(this.addr, !1, f(t, this.size, 9))
    }

    function F(e, t) {
        e.uniformMatrix4fv(this.addr, !1, f(t, this.size, 16))
    }

    function U(e, t, n) {
        var i = t.length,
            r = m(n, i);
        e.uniform1iv(this.addr, r);
        for (var o = 0; o !== i; ++o) n.setTexture2D(t[o] || sc, r[o])
    }

    function k(e, t, n) {
        var i = t.length,
            r = m(n, i);
        e.uniform1iv(this.addr, r);
        for (var o = 0; o !== i; ++o) n.setTextureCube(t[o] || cc, r[o])
    }

    function z(e) {
        switch (e) {
            case 5126:
                return R;
            case 35664:
                return I;
            case 35665:
                return O;
            case 35666:
                return B;
            case 35674:
                return D;
            case 35675:
                return N;
            case 35676:
                return F;
            case 35678:
                return U;
            case 35680:
                return k;
            case 5124:
            case 35670:
                return L;
            case 35667:
            case 35671:
                return S;
            case 35668:
            case 35672:
                return C;
            case 35669:
            case 35673:
                return A
        }
    }

    function H(e, t, n) {
        this.id = e, this.addr = n, this.setValue = P(t.type)
    }

    function G(e, t, n) {
        this.id = e, this.addr = n, this.size = t.size, this.setValue = z(t.type)
    }

    function V(e) {
        this.id = e, d.call(this)
    }

    function j(e, t) {
        e.seq.push(t), e.map[t.id] = t
    }

    function $(e, t, n) {
        var i = e.name,
            r = i.length;
        for (dc.lastIndex = 0;;) {
            var o = dc.exec(i),
                a = dc.lastIndex,
                s = o[1],
                c = "]" === o[2],
                l = o[3];
            if (c && (s = 0 | s), void 0 === l || "[" === l && a + 2 === r) {
                j(n, void 0 === l ? new H(s, e, t) : new G(s, e, t));
                break
            }
            var u = n.map,
                h = u[s];
            void 0 === h && (h = new V(s), j(n, h)), n = h
        }
    }

    function W(e, t, n) {
        d.call(this), this.renderer = n;
        for (var i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), r = 0; i > r; ++r) {
            var o = e.getActiveUniform(t, r),
                a = o.name,
                s = e.getUniformLocation(t, a);
            $(o, s, this)
        }
    }

    function X(e, t, n) {
        return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }

    function q(e, t) {
        this.min = void 0 !== e ? e : new n(+(1 / 0), +(1 / 0)), this.max = void 0 !== t ? t : new n(-(1 / 0), -(1 / 0))
    }

    function Y(e, t, i, r, a) {
        function s() {
            var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                n = new Uint16Array([0, 1, 2, 0, 2, 3]);
            l = t.createBuffer(), u = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, l), t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, u), t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW), m = t.createTexture(), v = t.createTexture(), i.bindTexture(t.TEXTURE_2D, m), t.texImage2D(t.TEXTURE_2D, 0, t.RGB, 16, 16, 0, t.RGB, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), i.bindTexture(t.TEXTURE_2D, v), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 16, 16, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), h = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "	vUV = uv;", "	vec2 pos = position;", "	if ( renderType == 2 ) {", "		vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "		visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "		vVisibility =        visibility.r / 9.0;", "		vVisibility *= 1.0 - visibility.g / 9.0;", "		vVisibility *=       visibility.b / 9.0;", "		vVisibility *= 1.0 - visibility.a / 9.0;", "		pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "		pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "	}", "	gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "	if ( renderType == 0 ) {", "		gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "	} else if ( renderType == 1 ) {", "		gl_FragColor = texture2D( map, vUV );", "	} else {", "		vec4 texture = texture2D( map, vUV );", "		texture.a *= opacity * vVisibility;", "		gl_FragColor = texture;", "		gl_FragColor.rgb *= color;", "	}", "}"].join("\n")
            }, p = c(h), d = {
                vertex: t.getAttribLocation(p, "position"),
                uv: t.getAttribLocation(p, "uv")
            }, f = {
                renderType: t.getUniformLocation(p, "renderType"),
                map: t.getUniformLocation(p, "map"),
                occlusionMap: t.getUniformLocation(p, "occlusionMap"),
                opacity: t.getUniformLocation(p, "opacity"),
                color: t.getUniformLocation(p, "color"),
                scale: t.getUniformLocation(p, "scale"),
                rotation: t.getUniformLocation(p, "rotation"),
                screenPosition: t.getUniformLocation(p, "screenPosition")
            }
        }

        function c(e) {
            var n = t.createProgram(),
                i = t.createShader(t.FRAGMENT_SHADER),
                r = t.createShader(t.VERTEX_SHADER),
                o = "precision " + a.precision + " float;\n";
            return t.shaderSource(i, o + e.fragmentShader), t.shaderSource(r, o + e.vertexShader), t.compileShader(i), t.compileShader(r), t.attachShader(n, i), t.attachShader(n, r), t.linkProgram(n), n
        }
        var l, u, h, p, d, f, m, v;
        this.render = function(e, a, c, h) {
            if (0 !== e.length) {
                var g = new o,
                    y = h.w / h.z,
                    x = .5 * h.z,
                    b = .5 * h.w,
                    w = 16 / h.w,
                    _ = new n(w * y, w),
                    M = new o(1, 1, 0),
                    T = new n(1, 1),
                    E = new q;
                E.min.set(h.x, h.y), E.max.set(h.x + (h.z - 16), h.y + (h.w - 16)), void 0 === p && s(), i.useProgram(p), i.initAttributes(), i.enableAttribute(d.vertex), i.enableAttribute(d.uv), i.disableUnusedAttributes(), t.uniform1i(f.occlusionMap, 0), t.uniform1i(f.map, 1), t.bindBuffer(t.ARRAY_BUFFER, l), t.vertexAttribPointer(d.vertex, 2, t.FLOAT, !1, 16, 0), t.vertexAttribPointer(d.uv, 2, t.FLOAT, !1, 16, 8), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, u), i.disable(t.CULL_FACE), i.buffers.depth.setMask(!1);
                for (var S = 0, C = e.length; C > S; S++) {
                    w = 16 / h.w, _.set(w * y, w);
                    var A = e[S];
                    if (g.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), g.applyMatrix4(c.matrixWorldInverse), g.applyMatrix4(c.projectionMatrix), M.copy(g), T.x = h.x + M.x * x + x - 8, T.y = h.y + M.y * b + b - 8, E.containsPoint(T) === !0) {
                        i.activeTexture(t.TEXTURE0), i.bindTexture(t.TEXTURE_2D, null), i.activeTexture(t.TEXTURE1), i.bindTexture(t.TEXTURE_2D, m), t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGB, T.x, T.y, 16, 16, 0), t.uniform1i(f.renderType, 0), t.uniform2f(f.scale, _.x, _.y), t.uniform3f(f.screenPosition, M.x, M.y, M.z), i.disable(t.BLEND), i.enable(t.DEPTH_TEST), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), i.activeTexture(t.TEXTURE0), i.bindTexture(t.TEXTURE_2D, v), t.copyTexImage2D(t.TEXTURE_2D, 0, t.RGBA, T.x, T.y, 16, 16, 0), t.uniform1i(f.renderType, 1), i.disable(t.DEPTH_TEST), i.activeTexture(t.TEXTURE1), i.bindTexture(t.TEXTURE_2D, m), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), A.positionScreen.copy(M), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), t.uniform1i(f.renderType, 2), i.enable(t.BLEND);
                        for (var P = 0, R = A.lensFlares.length; R > P; P++) {
                            var L = A.lensFlares[P];
                            L.opacity > .001 && L.scale > .001 && (M.x = L.x, M.y = L.y, M.z = L.z, w = L.size * L.scale / h.w, _.x = w * y, _.y = w, t.uniform3f(f.screenPosition, M.x, M.y, M.z), t.uniform2f(f.scale, _.x, _.y), t.uniform1f(f.rotation, L.rotation), t.uniform1f(f.opacity, L.opacity), t.uniform3f(f.color, L.color.r, L.color.g, L.color.b), i.setBlending(L.blending, L.blendEquation, L.blendSrc, L.blendDst), r.setTexture2D(L.texture, 1), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                i.enable(t.CULL_FACE), i.enable(t.DEPTH_TEST), i.buffers.depth.setMask(!0), i.reset()
            }
        }
    }

    function Z(e, t, n, i, r, o, a, c, l) {
        s.call(this, e, t, n, i, r, o, a, c, l), this.needsUpdate = !0
    }

    function J(e, t, n, i, a) {
        function s() {
            var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                n = new Uint16Array([0, 1, 2, 0, 2, 3]);
            u = t.createBuffer(), h = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, u), t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, h), t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW), p = c(), d = {
                position: t.getAttribLocation(p, "position"),
                uv: t.getAttribLocation(p, "uv")
            }, f = {
                uvOffset: t.getUniformLocation(p, "uvOffset"),
                uvScale: t.getUniformLocation(p, "uvScale"),
                rotation: t.getUniformLocation(p, "rotation"),
                scale: t.getUniformLocation(p, "scale"),
                color: t.getUniformLocation(p, "color"),
                map: t.getUniformLocation(p, "map"),
                opacity: t.getUniformLocation(p, "opacity"),
                modelViewMatrix: t.getUniformLocation(p, "modelViewMatrix"),
                projectionMatrix: t.getUniformLocation(p, "projectionMatrix"),
                fogType: t.getUniformLocation(p, "fogType"),
                fogDensity: t.getUniformLocation(p, "fogDensity"),
                fogNear: t.getUniformLocation(p, "fogNear"),
                fogFar: t.getUniformLocation(p, "fogFar"),
                fogColor: t.getUniformLocation(p, "fogColor"),
                fogDepth: t.getUniformLocation(p, "fogDepth"),
                alphaTest: t.getUniformLocation(p, "alphaTest")
            };
            var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            i.width = 8, i.height = 8;
            var r = i.getContext("2d");
            r.fillStyle = "white", r.fillRect(0, 0, 8, 8), m = new Z(i)
        }

        function c() {
            var e = t.createProgram(),
                n = t.createShader(t.VERTEX_SHADER),
                i = t.createShader(t.FRAGMENT_SHADER);
            return t.shaderSource(n, ["precision " + a.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "	vUV = uvOffset + uv * uvScale;", "	vec2 alignedPosition = position * scale;", "	vec2 rotatedPosition;", "	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "	vec4 mvPosition;", "	mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "	mvPosition.xy += rotatedPosition;", "	gl_Position = projectionMatrix * mvPosition;", "	fogDepth = - mvPosition.z;", "}"].join("\n")), t.shaderSource(i, ["precision " + a.precision + " float;", "#define SHADER_NAME SpriteMaterial", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "varying float fogDepth;", "void main() {", "	vec4 texture = texture2D( map, vUV );", "	gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "	if ( gl_FragColor.a < alphaTest ) discard;", "	if ( fogType > 0 ) {", "		float fogFactor = 0.0;", "		if ( fogType == 1 ) {", "			fogFactor = smoothstep( fogNear, fogFar, fogDepth );", "		} else {", "			const float LOG2 = 1.442695;", "			fogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );", "			fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "		}", "		gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );", "	}", "}"].join("\n")), t.compileShader(n), t.compileShader(i), t.attachShader(e, n), t.attachShader(e, i), t.linkProgram(e), e
        }

        function l(e, t) {
            return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
        }
        var u, h, p, d, f, m, v = new o,
            g = new r,
            y = new o;
        this.render = function(r, o, a) {
            if (0 !== r.length) {
                void 0 === p && s(), n.useProgram(p), n.initAttributes(), n.enableAttribute(d.position), n.enableAttribute(d.uv), n.disableUnusedAttributes(), n.disable(t.CULL_FACE), n.enable(t.BLEND), t.bindBuffer(t.ARRAY_BUFFER, u), t.vertexAttribPointer(d.position, 2, t.FLOAT, !1, 16, 0), t.vertexAttribPointer(d.uv, 2, t.FLOAT, !1, 16, 8), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, h), t.uniformMatrix4fv(f.projectionMatrix, !1, a.projectionMatrix.elements), n.activeTexture(t.TEXTURE0), t.uniform1i(f.map, 0);
                var c = 0,
                    x = 0,
                    b = o.fog;
                b ? (t.uniform3f(f.fogColor, b.color.r, b.color.g, b.color.b), b.isFog ? (t.uniform1f(f.fogNear, b.near), t.uniform1f(f.fogFar, b.far), t.uniform1i(f.fogType, 1), c = 1, x = 1) : b.isFogExp2 && (t.uniform1f(f.fogDensity, b.density), t.uniform1i(f.fogType, 2), c = 2, x = 2)) : (t.uniform1i(f.fogType, 0), c = 0, x = 0);
                for (var w = 0, _ = r.length; _ > w; w++) {
                    var M = r[w];
                    M.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
                }
                r.sort(l);
                for (var T = [], w = 0, _ = r.length; _ > w; w++) {
                    var M = r[w],
                        E = M.material;
                    if (E.visible !== !1) {
                        M.onBeforeRender(e, o, a, void 0, E, void 0), t.uniform1f(f.alphaTest, E.alphaTest), t.uniformMatrix4fv(f.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(v, g, y), T[0] = y.x, T[1] = y.y;
                        var S = 0;
                        o.fog && E.fog && (S = x), c !== S && (t.uniform1i(f.fogType, S), c = S), null !== E.map ? (t.uniform2f(f.uvOffset, E.map.offset.x, E.map.offset.y), t.uniform2f(f.uvScale, E.map.repeat.x, E.map.repeat.y)) : (t.uniform2f(f.uvOffset, 0, 0), t.uniform2f(f.uvScale, 1, 1)), t.uniform1f(f.opacity, E.opacity), t.uniform3f(f.color, E.color.r, E.color.g, E.color.b), t.uniform1f(f.rotation, E.rotation), t.uniform2fv(f.scale, T), n.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst, E.blendEquationAlpha, E.blendSrcAlpha, E.blendDstAlpha, E.premultipliedAlpha), n.buffers.depth.setTest(E.depthTest), n.buffers.depth.setMask(E.depthWrite), n.buffers.color.setMask(E.colorWrite), i.setTexture2D(E.map || m, 0), t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0), M.onAfterRender(e, o, a, void 0, E, void 0)
                    }
                }
                n.enable(t.CULL_FACE), n.reset()
            }
        }
    }

    function Q() {
        Object.defineProperty(this, "id", {
            value: bu++
        }), this.uuid = oc.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = ca, this.side = Ko, this.flatShading = !1, this.vertexColors = ra, this.opacity = 1, this.transparent = !1, this.blendSrc = _a, this.blendDst = Ma, this.blendEquation = da, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ia, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function K(e) {
        Q.call(this), this.type = "MeshDepthMaterial", this.depthPacking = ic, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function ee(e) {
        Q.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new o, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function te(e, t) {
        this.min = void 0 !== e ? e : new o(+(1 / 0), +(1 / 0), +(1 / 0)), this.max = void 0 !== t ? t : new o(-(1 / 0), -(1 / 0), -(1 / 0))
    }

    function ne(e, t) {
        this.center = void 0 !== e ? e : new o, this.radius = void 0 !== t ? t : 0
    }

    function ie(e, t) {
        this.normal = void 0 !== e ? e : new o(1, 0, 0), this.constant = void 0 !== t ? t : 0
    }

    function re(e, t, n, i, r, o) {
        this.planes = [void 0 !== e ? e : new ie, void 0 !== t ? t : new ie, void 0 !== n ? n : new ie, void 0 !== i ? i : new ie, void 0 !== r ? r : new ie, void 0 !== o ? o : new ie]
    }

    function oe(e, t, r) {
        function a(t, n, i, r, o, a) {
            var s = t.geometry,
                c = null,
                l = x,
                u = t.customDepthMaterial;
            if (i && (l = b, u = t.customDistanceMaterial), u) c = u;
            else {
                var h = !1;
                n.morphTargets && (s && s.isBufferGeometry ? h = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (h = s.morphTargets && s.morphTargets.length > 0)), t.isSkinnedMesh && n.skinning === !1 && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t);
                var p = t.isSkinnedMesh && n.skinning,
                    d = 0;
                h && (d |= v), p && (d |= g), c = l[d]
            }
            if (e.localClippingEnabled && n.clipShadows === !0 && 0 !== n.clippingPlanes.length) {
                var f = c.uuid,
                    m = n.uuid,
                    y = w[f];
                void 0 === y && (y = {}, w[f] = y);
                var _ = y[m];
                void 0 === _ && (_ = c.clone(), y[m] = _), c = _
            }
            c.visible = n.visible, c.wireframe = n.wireframe;
            var M = n.side;
            return R.renderSingleSided && M == ta && (M = Ko), R.renderReverseSided && (M === Ko ? M = ea : M === ea && (M = Ko)), c.side = M, c.clipShadows = n.clipShadows, c.clippingPlanes = n.clippingPlanes, c.clipIntersection = n.clipIntersection, c.wireframeLinewidth = n.wireframeLinewidth, c.linewidth = n.linewidth, i && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = o, c.farDistance = a), c
        }

        function s(n, i, r, o) {
            if (n.visible !== !1) {
                var c = n.layers.test(i.layers);
                if (c && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || u.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, n.matrixWorld);
                    var l = t.update(n),
                        h = n.material;
                    if (Array.isArray(h))
                        for (var p = l.groups, d = 0, f = p.length; f > d; d++) {
                            var v = p[d],
                                g = h[v.materialIndex];
                            if (g && g.visible) {
                                var y = a(n, g, o, m, r.near, r.far);
                                e.renderBufferDirect(r, null, l, y, n, v)
                            }
                        } else if (h.visible) {
                            var y = a(n, h, o, m, r.near, r.far);
                            e.renderBufferDirect(r, null, l, y, n, null)
                        }
                }
                for (var x = n.children, b = 0, w = x.length; w > b; b++) s(x[b], i, r, o)
            }
        }
        for (var u = new re, h = new i, p = new n, d = new n(r, r), f = new o, m = new o, v = 1, g = 2, y = (v | g) + 1, x = new Array(y), b = new Array(y), w = {}, _ = [new o(1, 0, 0), new o(-1, 0, 0), new o(0, 0, 1), new o(0, 0, -1), new o(0, 1, 0), new o(0, -1, 0)], M = [new o(0, 1, 0), new o(0, 1, 0), new o(0, 1, 0), new o(0, 1, 0), new o(0, 0, 1), new o(0, 0, -1)], T = [new c, new c, new c, new c, new c, new c], E = 0; E !== y; ++E) {
            var S = 0 !== (E & v),
                C = 0 !== (E & g),
                A = new K({
                    depthPacking: rc,
                    morphTargets: S,
                    skinning: C
                });
            x[E] = A;
            var P = new ee({
                morphTargets: S,
                skinning: C
            });
            b[E] = P
        }
        var R = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Jo, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function(t, n, i) {
            if (R.enabled !== !1 && (R.autoUpdate !== !1 || R.needsUpdate !== !1) && 0 !== t.length) {
                var r = e.context,
                    o = e.state;
                o.disable(r.BLEND), o.buffers.color.setClear(1, 1, 1, 1), o.buffers.depth.setTest(!0), o.setScissorTest(!1);
                for (var a, c = 0, v = t.length; v > c; c++) {
                    var g = t[c],
                        y = g.shadow,
                        x = g && g.isPointLight;
                    if (void 0 !== y) {
                        var b = y.camera;
                        if (p.copy(y.mapSize), p.min(d), x) {
                            var w = p.x,
                                E = p.y;
                            T[0].set(2 * w, E, w, E), T[1].set(0, E, w, E), T[2].set(3 * w, E, w, E), T[3].set(w, E, w, E), T[4].set(3 * w, 0, w, E), T[5].set(w, 0, w, E), p.x *= 4, p.y *= 2
                        }
                        if (null === y.map) {
                            var S = {
                                minFilter: ns,
                                magFilter: ns,
                                format: _s
                            };
                            y.map = new l(p.x, p.y, S), y.map.texture.name = g.name + ".shadowMap", b.updateProjectionMatrix()
                        }
                        y.isSpotLightShadow && y.update(g);
                        var C = y.map,
                            A = y.matrix;
                        m.setFromMatrixPosition(g.matrixWorld), b.position.copy(m), x ? (a = 6, A.makeTranslation(-m.x, -m.y, -m.z)) : (a = 1, f.setFromMatrixPosition(g.target.matrixWorld), b.lookAt(f), b.updateMatrixWorld(), A.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), A.multiply(b.projectionMatrix), A.multiply(b.matrixWorldInverse)), e.setRenderTarget(C), e.clear();
                        for (var P = 0; a > P; P++) {
                            if (x) {
                                f.copy(b.position), f.add(_[P]), b.up.copy(M[P]), b.lookAt(f), b.updateMatrixWorld();
                                var L = T[P];
                                o.viewport(L)
                            }
                            h.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), u.setFromMatrix(h), s(n, i, b, x)
                        }
                    } else console.warn("THREE.WebGLShadowMap:", g, "has no shadow.")
                }
                R.needsUpdate = !1
            }
        }
    }

    function ae(e) {
        function t(t, n) {
            var i = t.array,
                r = t.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW,
                o = e.createBuffer();
            e.bindBuffer(n, o), e.bufferData(n, i, r), t.onUploadCallback();
            var a = e.FLOAT;
            return i instanceof Float32Array ? a = e.FLOAT : i instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : i instanceof Uint16Array ? a = e.UNSIGNED_SHORT : i instanceof Int16Array ? a = e.SHORT : i instanceof Uint32Array ? a = e.UNSIGNED_INT : i instanceof Int32Array ? a = e.INT : i instanceof Int8Array ? a = e.BYTE : i instanceof Uint8Array && (a = e.UNSIGNED_BYTE), {
                buffer: o,
                type: a,
                bytesPerElement: i.BYTES_PER_ELEMENT,
                version: t.version
            }
        }

        function n(t, n, i) {
            var r = n.array,
                o = n.updateRange;
            e.bindBuffer(i, t), n.dynamic === !1 ? e.bufferData(i, r, e.STATIC_DRAW) : -1 === o.count ? e.bufferSubData(i, 0, r) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(i, o.offset * r.BYTES_PER_ELEMENT, r.subarray(o.offset, o.offset + o.count)), o.count = -1)
        }

        function i(e) {
            return e.isInterleavedBufferAttribute && (e = e.data), a[e.uuid]
        }

        function r(t) {
            t.isInterleavedBufferAttribute && (t = t.data);
            var n = a[t.uuid];
            n && (e.deleteBuffer(n.buffer), delete a[t.uuid])
        }

        function o(e, i) {
            e.isInterleavedBufferAttribute && (e = e.data);
            var r = a[e.uuid];
            void 0 === r ? a[e.uuid] = t(e, i) : r.version < e.version && (n(r.buffer, e, i), r.version = e.version)
        }
        var a = {};
        return {
            get: i,
            remove: r,
            update: o
        }
    }

    function se(e, t, n, i) {
        this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = i || se.DefaultOrder
    }

    function ce() {
        this.mask = 1
    }

    function le() {
        function e() {
            c.setFromEuler(s, !1)
        }

        function t() {
            s.setFromQuaternion(c, void 0, !1)
        }
        Object.defineProperty(this, "id", {
            value: wu++
        }), this.uuid = oc.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = le.DefaultUp.clone();
        var n = new o,
            s = new se,
            c = new r,
            l = new o(1, 1, 1);
        s.onChange(e), c.onChange(t), Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: n
            },
            rotation: {
                enumerable: !0,
                value: s
            },
            quaternion: {
                enumerable: !0,
                value: c
            },
            scale: {
                enumerable: !0,
                value: l
            },
            modelViewMatrix: {
                value: new i
            },
            normalMatrix: {
                value: new a
            }
        }), this.matrix = new i, this.matrixWorld = new i, this.matrixAutoUpdate = le.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new ce, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function ue() {
        le.call(this), this.type = "Camera", this.matrixWorldInverse = new i, this.projectionMatrix = new i
    }

    function he(e, t, n, i, r, o) {
        ue.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
    }

    function pe(e, t, n, i, r, a) {
        this.a = e, this.b = t, this.c = n, this.normal = i && i.isVector3 ? i : new o, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new X, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }

    function de() {
        Object.defineProperty(this, "id", {
            value: _u += 2
        }), this.uuid = oc.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function fe(e, t, n) {
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = oc.generateUUID(), this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = n === !0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function() {}, this.version = 0
    }

    function me(e, t, n) {
        fe.call(this, new Int8Array(e), t, n)
    }

    function ve(e, t, n) {
        fe.call(this, new Uint8Array(e), t, n)
    }

    function ge(e, t, n) {
        fe.call(this, new Uint8ClampedArray(e), t, n)
    }

    function ye(e, t, n) {
        fe.call(this, new Int16Array(e), t, n)
    }

    function xe(e, t, n) {
        fe.call(this, new Uint16Array(e), t, n)
    }

    function be(e, t, n) {
        fe.call(this, new Int32Array(e), t, n)
    }

    function we(e, t, n) {
        fe.call(this, new Uint32Array(e), t, n)
    }

    function _e(e, t, n) {
        fe.call(this, new Float32Array(e), t, n)
    }

    function Me(e, t, n) {
        fe.call(this, new Float64Array(e), t, n)
    }

    function Te() {
        this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function Ee(e) {
        if (0 === e.length) return -(1 / 0);
        for (var t = e[0], n = 1, i = e.length; i > n; ++n) e[n] > t && (t = e[n]);
        return t
    }

    function Se() {
        Object.defineProperty(this, "id", {
            value: Mu += 2
        }), this.uuid = oc.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }

    function Ce(e, t, n, i, r, o) {
        de.call(this), this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: o
        }, this.fromBufferGeometry(new Ae(e, t, n, i, r, o)), this.mergeVertices()
    }

    function Ae(e, t, n, i, r, a) {
        function s(e, t, n, i, r, a, s, m, v, g, y) {
            var x, b, w = a / v,
                _ = s / g,
                M = a / 2,
                T = s / 2,
                E = m / 2,
                S = v + 1,
                C = g + 1,
                A = 0,
                P = 0,
                R = new o;
            for (b = 0; C > b; b++) {
                var L = b * _ - T;
                for (x = 0; S > x; x++) {
                    var I = x * w - M;
                    R[e] = I * i, R[t] = L * r, R[n] = E, u.push(R.x, R.y, R.z), R[e] = 0, R[t] = 0, R[n] = m > 0 ? 1 : -1, h.push(R.x, R.y, R.z), p.push(x / v), p.push(1 - b / g), A += 1
                }
            }
            for (b = 0; g > b; b++)
                for (x = 0; v > x; x++) {
                    var O = d + x + S * b,
                        B = d + x + S * (b + 1),
                        D = d + (x + 1) + S * (b + 1),
                        N = d + (x + 1) + S * b;
                    l.push(O, B, N), l.push(B, D, N), P += 6
                }
            c.addGroup(f, P, y), f += P, d += A
        }
        Se.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a
        };
        var c = this;
        e = e || 1, t = t || 1, n = n || 1, i = Math.floor(i) || 1, r = Math.floor(r) || 1, a = Math.floor(a) || 1;
        var l = [],
            u = [],
            h = [],
            p = [],
            d = 0,
            f = 0;
        s("z", "y", "x", -1, -1, n, t, e, a, r, 0), s("z", "y", "x", 1, -1, n, t, -e, a, r, 1), s("x", "z", "y", 1, 1, e, n, t, i, a, 2), s("x", "z", "y", 1, -1, e, n, -t, i, a, 3), s("x", "y", "z", 1, -1, e, t, n, i, r, 4), s("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.addAttribute("position", new _e(u, 3)), this.addAttribute("normal", new _e(h, 3)), this.addAttribute("uv", new _e(p, 2))
    }

    function Pe(e, t, n, i) {
        de.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        }, this.fromBufferGeometry(new Re(e, t, n, i)), this.mergeVertices()
    }

    function Re(e, t, n, i) {
        Se.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        }, e = e || 1, t = t || 1;
        var r, o, a = e / 2,
            s = t / 2,
            c = Math.floor(n) || 1,
            l = Math.floor(i) || 1,
            u = c + 1,
            h = l + 1,
            p = e / c,
            d = t / l,
            f = [],
            m = [],
            v = [],
            g = [];
        for (o = 0; h > o; o++) {
            var y = o * d - s;
            for (r = 0; u > r; r++) {
                var x = r * p - a;
                m.push(x, -y, 0), v.push(0, 0, 1), g.push(r / c), g.push(1 - o / l)
            }
        }
        for (o = 0; l > o; o++)
            for (r = 0; c > r; r++) {
                var b = r + u * o,
                    w = r + u * (o + 1),
                    _ = r + 1 + u * (o + 1),
                    M = r + 1 + u * o;
                f.push(b, w, M), f.push(w, _, M)
            }
        this.setIndex(f), this.addAttribute("position", new _e(m, 3)), this.addAttribute("normal", new _e(v, 3)), this.addAttribute("uv", new _e(g, 2))
    }

    function Le(e) {
        Q.call(this), this.type = "MeshBasicMaterial", this.color = new X(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Fa, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(e)
    }

    function Ie(e) {
        Q.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }

    function Oe(e, t) {
        this.origin = void 0 !== e ? e : new o, this.direction = void 0 !== t ? t : new o
    }

    function Be(e, t) {
        this.start = void 0 !== e ? e : new o, this.end = void 0 !== t ? t : new o
    }

    function De(e, t, n) {
        this.a = void 0 !== e ? e : new o, this.b = void 0 !== t ? t : new o, this.c = void 0 !== n ? n : new o
    }

    function Ne(e, t) {
        le.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new Se, this.material = void 0 !== t ? t : new Le({
            color: 16777215 * Math.random()
        }), this.drawMode = Ws, this.updateMorphTargets()
    }

    function Fe(e, t, n, i) {
        function r(t, i, r, h) {
            var p = i.background;
            null === p ? o(l, u) : p && p.isColor && (o(p, 1), h = !0), (e.autoClear || h) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), p && p.isCubeTexture ? (void 0 === c && (c = new Ne(new Ae(1, 1, 1), new Ie({
                uniforms: xu.cube.uniforms,
                vertexShader: xu.cube.vertexShader,
                fragmentShader: xu.cube.fragmentShader,
                side: ea,
                depthTest: !0,
                depthWrite: !1,
                fog: !1
            })), c.geometry.removeAttribute("normal"), c.geometry.removeAttribute("uv"), c.onBeforeRender = function(e, t, n) {
                this.matrixWorld.copyPosition(n.matrixWorld)
            }, n.update(c.geometry)), c.material.uniforms.tCube.value = p, t.push(c, c.geometry, c.material, 0, null)) : p && p.isTexture && (void 0 === a && (a = new he(-1, 1, 1, -1, 0, 1), s = new Ne(new Re(2, 2), new Le({
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), n.update(s.geometry)), s.material.map = p, e.renderBufferDirect(a, null, s.geometry, s.material, s, null))
        }

        function o(e, n) {
            t.buffers.color.setClear(e.r, e.g, e.b, n, i)
        }
        var a, s, c, l = new X(0),
            u = 0;
        return {
            getClearColor: function() {
                return l
            },
            setClearColor: function(e, t) {
                l.set(e), u = void 0 !== t ? t : 1, o(l, u)
            },
            getClearAlpha: function() {
                return u
            },
            setClearAlpha: function(e) {
                u = e, o(l, u)
            },
            render: r
        }
    }

    function Ue(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program && t.program && e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
    }

    function ke(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
    }

    function ze() {
        function e() {
            r = 0, o.length = 0, a.length = 0
        }

        function t(e, t, n, s, c) {
            var l = i[r];
            void 0 === l ? (l = {
                id: e.id,
                object: e,
                geometry: t,
                material: n,
                program: n.program,
                renderOrder: e.renderOrder,
                z: s,
                group: c
            }, i[r] = l) : (l.id = e.id, l.object = e, l.geometry = t, l.material = n, l.program = n.program, l.renderOrder = e.renderOrder, l.z = s, l.group = c), (n.transparent === !0 ? a : o).push(l), r++
        }

        function n() {
            o.length > 1 && o.sort(Ue), a.length > 1 && a.sort(ke)
        }
        var i = [],
            r = 0,
            o = [],
            a = [];
        return {
            opaque: o,
            transparent: a,
            init: e,
            push: t,
            sort: n
        }
    }

    function He() {
        function e(e, t) {
            var i = e.id + "," + t.id,
                r = n[i];
            return void 0 === r && (r = new ze, n[i] = r), r
        }

        function t() {
            n = {}
        }
        var n = {};
        return {
            get: e,
            dispose: t
        }
    }

    function Ge(e, t) {
        return Math.abs(t[1]) - Math.abs(e[1])
    }

    function Ve(e) {
        function t(t, r, o, a) {
            var s = t.morphTargetInfluences,
                c = s.length,
                l = n[r.id];
            if (void 0 === l) {
                l = [];
                for (var u = 0; c > u; u++) l[u] = [u, 0];
                n[r.id] = l
            }
            for (var h = o.morphTargets && r.morphAttributes.position, p = o.morphNormals && r.morphAttributes.normal, u = 0; c > u; u++) {
                var d = l[u];
                0 !== d[1] && (h && r.removeAttribute("morphTarget" + u), p && r.removeAttribute("morphNormal" + u))
            }
            for (var u = 0; c > u; u++) {
                var d = l[u];
                d[0] = u, d[1] = s[u]
            }
            l.sort(Ge);
            for (var u = 0; 8 > u; u++) {
                var d = l[u];
                if (d) {
                    var f = d[0],
                        m = d[1];
                    if (m) {
                        h && r.addAttribute("morphTarget" + u, h[f]), p && r.addAttribute("morphNormal" + u, p[f]), i[u] = m;
                        continue
                    }
                }
                i[u] = 0
            }
            a.getUniforms().setValue(e, "morphTargetInfluences", i)
        }
        var n = {},
            i = new Float32Array(8);
        return {
            update: t
        }
    }

    function je(e, t, n) {
        function i(e) {
            s = e
        }

        function r(e) {
            c = e.type, l = e.bytesPerElement
        }

        function o(t, i) {
            e.drawElements(s, i, c, t * l), n.calls++, n.vertices += i, s === e.TRIANGLES ? n.faces += i / 3 : s === e.POINTS && (n.points += i)
        }

        function a(i, r, o) {
            var a = t.get("ANGLE_instanced_arrays");
            return null === a ? void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (a.drawElementsInstancedANGLE(s, o, c, r * l, i.maxInstancedCount), n.calls++, n.vertices += o * i.maxInstancedCount, void(s === e.TRIANGLES ? n.faces += i.maxInstancedCount * o / 3 : s === e.POINTS && (n.points += i.maxInstancedCount * o)))
        }
        var s, c, l;
        this.setMode = i, this.setIndex = r, this.render = o, this.renderInstances = a
    }

    function $e(e, t, n) {
        function i(e) {
            a = e
        }

        function r(t, i) {
            e.drawArrays(a, t, i), n.calls++, n.vertices += i, a === e.TRIANGLES ? n.faces += i / 3 : a === e.POINTS && (n.points += i)
        }

        function o(i, r, o) {
            var s = t.get("ANGLE_instanced_arrays");
            if (null === s) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            var c = i.attributes.position;
            c.isInterleavedBufferAttribute ? (o = c.data.count, s.drawArraysInstancedANGLE(a, 0, o, i.maxInstancedCount)) : s.drawArraysInstancedANGLE(a, r, o, i.maxInstancedCount), n.calls++, n.vertices += o * i.maxInstancedCount, a === e.TRIANGLES ? n.faces += i.maxInstancedCount * o / 3 : a === e.POINTS && (n.points += i.maxInstancedCount * o)
        }
        var a;
        this.setMode = i, this.render = r, this.renderInstances = o
    }

    function We(e, t, n) {
        function i(e) {
            var r = e.target,
                o = s[r.id];
            null !== o.index && t.remove(o.index);
            for (var a in o.attributes) t.remove(o.attributes[a]);
            r.removeEventListener("dispose", i), delete s[r.id];
            var l = c[r.id];
            l && (t.remove(l), delete c[r.id]), l = c[o.id], l && (t.remove(l), delete c[o.id]), n.geometries--
        }

        function r(e, t) {
            var r = s[t.id];
            return r ? r : (t.addEventListener("dispose", i), t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new Se).setFromObject(e)), r = t._bufferGeometry), s[t.id] = r, n.geometries++, r)
        }

        function o(n) {
            var i = n.index,
                r = n.attributes;
            null !== i && t.update(i, e.ELEMENT_ARRAY_BUFFER);
            for (var o in r) t.update(r[o], e.ARRAY_BUFFER);
            var a = n.morphAttributes;
            for (var o in a)
                for (var s = a[o], c = 0, l = s.length; l > c; c++) t.update(s[c], e.ARRAY_BUFFER)
        }

        function a(n) {
            var i = c[n.id];
            if (i) return i;
            var r = [],
                o = n.index,
                a = n.attributes;
            if (null !== o)
                for (var s = o.array, l = 0, u = s.length; u > l; l += 3) {
                    var h = s[l + 0],
                        p = s[l + 1],
                        d = s[l + 2];
                    r.push(h, p, p, d, d, h)
                } else
                    for (var s = a.position.array, l = 0, u = s.length / 3 - 1; u > l; l += 3) {
                        var h = l + 0,
                            p = l + 1,
                            d = l + 2;
                        r.push(h, p, p, d, d, h)
                    }
            return i = new(Ee(r) > 65535 ? we : xe)(r, 1), t.update(i, e.ELEMENT_ARRAY_BUFFER), c[n.id] = i, i
        }
        var s = {},
            c = {};
        return {
            get: r,
            update: o,
            getWireframeAttribute: a
        }
    }

    function Xe() {
        var e = {};
        return {
            get: function(t) {
                if (void 0 !== e[t.id]) return e[t.id];
                var i;
                switch (t.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new o,
                            color: new X,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new o,
                            direction: new o,
                            color: new X,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new o,
                            color: new X,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n,
                            shadowCameraNear: 1,
                            shadowCameraFar: 1e3
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new o,
                            skyColor: new X,
                            groundColor: new X
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new X,
                            position: new o,
                            halfWidth: new o,
                            halfHeight: new o
                        }
                }
                return e[t.id] = i, i
            }
        }
    }

    function qe() {
        function e(e, i, o) {
            for (var c = 0, l = 0, u = 0, h = 0, p = 0, d = 0, f = 0, m = 0, v = o.matrixWorldInverse, g = 0, y = e.length; y > g; g++) {
                var x = e[g],
                    b = x.color,
                    w = x.intensity,
                    _ = x.distance,
                    M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
                if (x.isAmbientLight) c += b.r * w, l += b.g * w, u += b.b * w;
                else if (x.isDirectionalLight) {
                    var T = t.get(x);
                    if (T.color.copy(x.color).multiplyScalar(x.intensity), T.direction.setFromMatrixPosition(x.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(v), T.shadow = x.castShadow, x.castShadow) {
                        var E = x.shadow;
                        T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize
                    }
                    n.directionalShadowMap[h] = M, n.directionalShadowMatrix[h] = x.shadow.matrix, n.directional[h] = T, h++
                } else if (x.isSpotLight) {
                    var T = t.get(x);
                    if (T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), T.color.copy(b).multiplyScalar(w), T.distance = _, T.direction.setFromMatrixPosition(x.matrixWorld), r.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(r), T.direction.transformDirection(v), T.coneCos = Math.cos(x.angle), T.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), T.decay = 0 === x.distance ? 0 : x.decay, T.shadow = x.castShadow, x.castShadow) {
                        var E = x.shadow;
                        T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize
                    }
                    n.spotShadowMap[d] = M, n.spotShadowMatrix[d] = x.shadow.matrix, n.spot[d] = T, d++
                } else if (x.isRectAreaLight) {
                    var T = t.get(x);
                    T.color.copy(b).multiplyScalar(w / (x.width * x.height)), T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), s.identity(), a.copy(x.matrixWorld), a.premultiply(v), s.extractRotation(a), T.halfWidth.set(.5 * x.width, 0, 0), T.halfHeight.set(0, .5 * x.height, 0), T.halfWidth.applyMatrix4(s), T.halfHeight.applyMatrix4(s), n.rectArea[f] = T, f++
                } else if (x.isPointLight) {
                    var T = t.get(x);
                    if (T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), T.color.copy(x.color).multiplyScalar(x.intensity), T.distance = x.distance, T.decay = 0 === x.distance ? 0 : x.decay, T.shadow = x.castShadow, x.castShadow) {
                        var E = x.shadow;
                        T.shadowBias = E.bias, T.shadowRadius = E.radius, T.shadowMapSize = E.mapSize, T.shadowCameraNear = E.camera.near, T.shadowCameraFar = E.camera.far
                    }
                    n.pointShadowMap[p] = M, n.pointShadowMatrix[p] = x.shadow.matrix, n.point[p] = T, p++
                } else if (x.isHemisphereLight) {
                    var T = t.get(x);
                    T.direction.setFromMatrixPosition(x.matrixWorld), T.direction.transformDirection(v), T.direction.normalize(), T.skyColor.copy(x.color).multiplyScalar(w), T.groundColor.copy(x.groundColor).multiplyScalar(w), n.hemi[m] = T, m++
                }
            }
            n.ambient[0] = c, n.ambient[1] = l, n.ambient[2] = u, n.directional.length = h, n.spot.length = d, n.rectArea.length = f, n.point.length = p, n.hemi.length = m, n.hash = h + "," + p + "," + d + "," + f + "," + m + "," + i.length
        }
        var t = new Xe,
            n = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            },
            r = new o,
            a = new i,
            s = new i;
        return {
            setup: e,
            state: n
        }
    }

    function Ye(e, t) {
        function n(n) {
            var i = t.frame,
                o = n.geometry,
                a = e.get(n, o);
            return r[a.id] !== i && (o.isGeometry && a.updateFromObject(n), e.update(a), r[a.id] = i), a
        }

        function i() {
            r = {}
        }
        var r = {};
        return {
            update: n,
            clear: i
        }
    }

    function Ze(e) {
        for (var t = e.split("\n"), n = 0; n < t.length; n++) t[n] = n + 1 + ": " + t[n];
        return t.join("\n")
    }

    function Je(e, t, n) {
        var i = e.createShader(t);
        return e.shaderSource(i, n), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(i), Ze(n)), i
    }

    function Qe(e) {
        switch (e) {
            case Ys:
                return ["Linear", "( value )"];
            case Zs:
                return ["sRGB", "( value )"];
            case Qs:
                return ["RGBE", "( value )"];
            case ec:
                return ["RGBM", "( value, 7.0 )"];
            case tc:
                return ["RGBM", "( value, 16.0 )"];
            case nc:
                return ["RGBD", "( value, 256.0 )"];
            case Js:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + e)
        }
    }

    function Ke(e, t) {
        var n = Qe(t);
        return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }

    function et(e, t) {
        var n = Qe(t);
        return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    }

    function tt(e, t) {
        var n;
        switch (t) {
            case Ha:
                n = "Linear";
                break;
            case Ga:
                n = "Reinhard";
                break;
            case Va:
                n = "Uncharted2";
                break;
            case ja:
                n = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + t)
        }
        return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }

    function nt(e, t, n) {
        e = e || {};
        var i = [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
        return i.filter(ot).join("\n")
    }

    function it(e) {
        var t = [];
        for (var n in e) {
            var i = e[n];
            i !== !1 && t.push("#define " + n + " " + i)
        }
        return t.join("\n")
    }

    function rt(e, t) {
        for (var n = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), r = 0; i > r; r++) {
            var o = e.getActiveAttrib(t, r),
                a = o.name;
            n[a] = e.getAttribLocation(t, a)
        }
        return n
    }

    function ot(e) {
        return "" !== e
    }

    function at(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }

    function st(e) {
        function t(e, t) {
            var n = yu[t];
            if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
            return st(n)
        }
        var n = /^[ \t]*#include +<([\w\d.]+)>/gm;
        return e.replace(n, t)
    }

    function ct(e) {
        function t(e, t, n, i) {
            for (var r = "", o = parseInt(t); o < parseInt(n); o++) r += i.replace(/\[ i \]/g, "[ " + o + " ]");
            return r
        }
        var n = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
        return e.replace(n, t)
    }

    function lt(e, t, n, i, r, o) {
        var a = e.context,
            s = i.defines,
            c = r.vertexShader,
            l = r.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        o.shadowMapType === Jo ? u = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === Qo && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var h = "ENVMAP_TYPE_CUBE",
            p = "ENVMAP_MODE_REFLECTION",
            d = "ENVMAP_BLENDING_MULTIPLY";
        if (o.envMap) {
            switch (i.envMap.mapping) {
                case Wa:
                case Xa:
                    h = "ENVMAP_TYPE_CUBE";
                    break;
                case Ja:
                case Qa:
                    h = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case qa:
                case Ya:
                    h = "ENVMAP_TYPE_EQUIREC";
                    break;
                case Za:
                    h = "ENVMAP_TYPE_SPHERE"
            }
            switch (i.envMap.mapping) {
                case Xa:
                case Ya:
                    p = "ENVMAP_MODE_REFRACTION"
            }
            switch (i.combine) {
                case Fa:
                    d = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case Ua:
                    d = "ENVMAP_BLENDING_MIX";
                    break;
                case ka:
                    d = "ENVMAP_BLENDING_ADD"
            }
        }
        var f, m, v = e.gammaFactor > 0 ? e.gammaFactor : 1,
            g = nt(i.extensions, o, t),
            y = it(s),
            x = a.createProgram();
        i.isRawShaderMaterial ? (f = [y].filter(ot).join("\n"), f.length > 0 && (f += "\n"), m = [g, y].filter(ot).join("\n"), m.length > 0 && (m += "\n")) : (f = ["precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, y, o.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + v, "#define MAX_BONES " + o.maxBones, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + p : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.displacementMap && o.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.skinning ? "#define USE_SKINNING" : "", o.useVertexTexture ? "#define BONE_TEXTURE" : "", o.morphTargets ? "#define USE_MORPHTARGETS" : "", o.morphNormals && o.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + o.numClippingPlanes, o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && t.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(ot).join("\n"), m = [g, "precision " + o.precision + " float;", "precision " + o.precision + " int;", "#define SHADER_NAME " + r.name, y, o.alphaTest ? "#define ALPHATEST " + o.alphaTest : "", "#define GAMMA_FACTOR " + v, o.useFog && o.fog ? "#define USE_FOG" : "", o.useFog && o.fogExp ? "#define FOG_EXP2" : "", o.map ? "#define USE_MAP" : "", o.envMap ? "#define USE_ENVMAP" : "", o.envMap ? "#define " + h : "", o.envMap ? "#define " + p : "", o.envMap ? "#define " + d : "", o.lightMap ? "#define USE_LIGHTMAP" : "", o.aoMap ? "#define USE_AOMAP" : "", o.emissiveMap ? "#define USE_EMISSIVEMAP" : "", o.bumpMap ? "#define USE_BUMPMAP" : "", o.normalMap ? "#define USE_NORMALMAP" : "", o.specularMap ? "#define USE_SPECULARMAP" : "", o.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", o.metalnessMap ? "#define USE_METALNESSMAP" : "", o.alphaMap ? "#define USE_ALPHAMAP" : "", o.vertexColors ? "#define USE_COLOR" : "", o.gradientMap ? "#define USE_GRADIENTMAP" : "", o.flatShading ? "#define FLAT_SHADED" : "", o.doubleSided ? "#define DOUBLE_SIDED" : "", o.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + o.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (o.numClippingPlanes - o.numClipIntersection), o.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", o.shadowMapEnabled ? "#define " + u : "", o.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", o.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", o.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", o.logarithmicDepthBuffer && t.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", o.envMap && t.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", o.toneMapping !== za ? "#define TONE_MAPPING" : "", o.toneMapping !== za ? yu.tonemapping_pars_fragment : "", o.toneMapping !== za ? tt("toneMapping", o.toneMapping) : "", o.dithering ? "#define DITHERING" : "", o.outputEncoding || o.mapEncoding || o.envMapEncoding || o.emissiveMapEncoding ? yu.encodings_pars_fragment : "", o.mapEncoding ? Ke("mapTexelToLinear", o.mapEncoding) : "", o.envMapEncoding ? Ke("envMapTexelToLinear", o.envMapEncoding) : "", o.emissiveMapEncoding ? Ke("emissiveMapTexelToLinear", o.emissiveMapEncoding) : "", o.outputEncoding ? et("linearToOutputTexel", o.outputEncoding) : "", o.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(ot).join("\n")), c = st(c), c = at(c, o), l = st(l), l = at(l, o), i.isShaderMaterial || (c = ct(c), l = ct(l));
        var b = f + c,
            w = m + l,
            _ = Je(a, a.VERTEX_SHADER, b),
            M = Je(a, a.FRAGMENT_SHADER, w);
        a.attachShader(x, _), a.attachShader(x, M), void 0 !== i.index0AttributeName ? a.bindAttribLocation(x, 0, i.index0AttributeName) : o.morphTargets === !0 && a.bindAttribLocation(x, 0, "position"), a.linkProgram(x);
        var T = a.getProgramInfoLog(x),
            E = a.getShaderInfoLog(_),
            S = a.getShaderInfoLog(M),
            C = !0,
            A = !0;
        a.getProgramParameter(x, a.LINK_STATUS) === !1 ? (C = !1, console.error("THREE.WebGLProgram: shader error: ", a.getError(), "gl.VALIDATE_STATUS", a.getProgramParameter(x, a.VALIDATE_STATUS), "gl.getProgramInfoLog", T, E, S)) : "" !== T ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", T) : ("" === E || "" === S) && (A = !1), A && (this.diagnostics = {
            runnable: C,
            material: i,
            programLog: T,
            vertexShader: {
                log: E,
                prefix: f
            },
            fragmentShader: {
                log: S,
                prefix: m
            }
        }), a.deleteShader(_), a.deleteShader(M);
        var P;
        this.getUniforms = function() {
            return void 0 === P && (P = new W(a, x, e)), P
        };
        var R;
        return this.getAttributes = function() {
            return void 0 === R && (R = rt(a, x)), R
        }, this.destroy = function() {
            a.deleteProgram(x), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.id = Tu++, this.code = n, this.usedTimes = 1, this.program = x, this.vertexShader = _, this.fragmentShader = M, this
    }

    function ut(e, t, n) {
        function i(e) {
            var t = e.skeleton,
                i = t.bones;
            if (n.floatVertexTextures) return 1024;
            var r = n.maxVertexUniforms,
                o = Math.floor((r - 20) / 4),
                a = Math.min(o, i.length);
            return a < i.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + i.length + " bones. This GPU supports " + a + "."), 0) : a
        }

        function r(e, t) {
            var n;
            return e ? e.isTexture ? n = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = e.texture.encoding) : n = Ys, n === Ys && t && (n = Js), n
        }
        var o = [],
            a = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow"
            },
            s = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
        this.getParameters = function(t, o, s, c, l, u, h) {
            var p = a[t.type],
                d = h.isSkinnedMesh ? i(h) : 0,
                f = n.precision;
            null !== t.precision && (f = n.getMaxPrecision(t.precision), f !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", f, "instead."));
            var m = e.getRenderTarget(),
                v = {
                    shaderID: p,
                    precision: f,
                    supportsVertexTextures: n.vertexTextures,
                    outputEncoding: r(m ? m.texture : null, e.gammaOutput),
                    map: !!t.map,
                    mapEncoding: r(t.map, e.gammaInput),
                    envMap: !!t.envMap,
                    envMapMode: t.envMap && t.envMap.mapping,
                    envMapEncoding: r(t.envMap, e.gammaInput),
                    envMapCubeUV: !!t.envMap && (t.envMap.mapping === Ja || t.envMap.mapping === Qa),
                    lightMap: !!t.lightMap,
                    aoMap: !!t.aoMap,
                    emissiveMap: !!t.emissiveMap,
                    emissiveMapEncoding: r(t.emissiveMap, e.gammaInput),
                    bumpMap: !!t.bumpMap,
                    normalMap: !!t.normalMap,
                    displacementMap: !!t.displacementMap,
                    roughnessMap: !!t.roughnessMap,
                    metalnessMap: !!t.metalnessMap,
                    specularMap: !!t.specularMap,
                    alphaMap: !!t.alphaMap,
                    gradientMap: !!t.gradientMap,
                    combine: t.combine,
                    vertexColors: t.vertexColors,
                    fog: !!c,
                    useFog: t.fog,
                    fogExp: c && c.isFogExp2,
                    flatShading: t.flatShading,
                    sizeAttenuation: t.sizeAttenuation,
                    logarithmicDepthBuffer: n.logarithmicDepthBuffer,
                    skinning: t.skinning && d > 0,
                    maxBones: d,
                    useVertexTexture: n.floatVertexTextures,
                    morphTargets: t.morphTargets,
                    morphNormals: t.morphNormals,
                    maxMorphTargets: e.maxMorphTargets,
                    maxMorphNormals: e.maxMorphNormals,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numClippingPlanes: l,
                    numClipIntersection: u,
                    dithering: t.dithering,
                    shadowMapEnabled: e.shadowMap.enabled && h.receiveShadow && s.length > 0,
                    shadowMapType: e.shadowMap.type,
                    toneMapping: e.toneMapping,
                    physicallyCorrectLights: e.physicallyCorrectLights,
                    premultipliedAlpha: t.premultipliedAlpha,
                    alphaTest: t.alphaTest,
                    doubleSided: t.side === ta,
                    flipSided: t.side === ea,
                    depthPacking: void 0 !== t.depthPacking ? t.depthPacking : !1
                };
            return v
        }, this.getProgramCode = function(t, n) {
            var i = [];
            if (n.shaderID ? i.push(n.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
                for (var r in t.defines) i.push(r), i.push(t.defines[r]);
            for (var o = 0; o < s.length; o++) i.push(n[s[o]]);
            return i.push(t.onBeforeCompile.toString()), i.push(e.gammaOutput), i.join()
        }, this.acquireProgram = function(n, i, r, a) {
            for (var s, c = 0, l = o.length; l > c; c++) {
                var u = o[c];
                if (u.code === a) {
                    s = u, ++s.usedTimes;
                    break
                }
            }
            return void 0 === s && (s = new lt(e, t, a, n, i, r), o.push(s)), s
        }, this.releaseProgram = function(e) {
            if (0 === --e.usedTimes) {
                var t = o.indexOf(e);
                o[t] = o[o.length - 1], o.pop(), e.destroy()
            }
        }, this.programs = o
    }

    function ht(e, t, n, i, r, o, a) {
        function s(e, t) {
            if (e.width > t || e.height > t) {
                var n = t / Math.max(e.width, e.height),
                    i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                i.width = Math.floor(e.width * n), i.height = Math.floor(e.height * n);
                var r = i.getContext("2d");
                return r.drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height, e), i
            }
            return e
        }

        function c(e) {
            return oc.isPowerOfTwo(e.width) && oc.isPowerOfTwo(e.height)
        }

        function l(e) {
            if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap) {
                var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                t.width = oc.floorPowerOfTwo(e.width), t.height = oc.floorPowerOfTwo(e.height);
                var n = t.getContext("2d");
                return n.drawImage(e, 0, 0, t.width, t.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e), t
            }
            return e
        }

        function u(e) {
            return e.wrapS !== es || e.wrapT !== es || e.minFilter !== ns && e.minFilter !== os
        }

        function h(e, t) {
            return e.generateMipmaps && t && e.minFilter !== ns && e.minFilter !== os
        }

        function p(t) {
            return t === ns || t === is || t === rs ? e.NEAREST : e.LINEAR
        }

        function d(e) {
            var t = e.target;
            t.removeEventListener("dispose", d), m(t), t.isVideoTexture && delete R[t.id], a.textures--
        }

        function f(e) {
            var t = e.target;
            t.removeEventListener("dispose", f), v(t), a.textures--
        }

        function m(t) {
            var n = i.get(t);
            if (t.image && n.__image__webglTextureCube) e.deleteTexture(n.__image__webglTextureCube);
            else {
                if (void 0 === n.__webglInit) return;
                e.deleteTexture(n.__webglTexture)
            }
            i.remove(t)
        }

        function v(t) {
            var n = i.get(t),
                r = i.get(t.texture);
            if (t) {
                if (void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture), t.depthTexture && t.depthTexture.dispose(), t.isWebGLRenderTargetCube)
                    for (var o = 0; 6 > o; o++) e.deleteFramebuffer(n.__webglFramebuffer[o]), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[o]);
                else e.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer);
                i.remove(t.texture), i.remove(t)
            }
        }

        function g(t, r) {
            var o = i.get(t);
            if (t.version > 0 && o.__version !== t.version) {
                var a = t.image;
                if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
                else {
                    if (a.complete !== !1) return void w(o, t, r);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
                }
            }
            n.activeTexture(e.TEXTURE0 + r), n.bindTexture(e.TEXTURE_2D, o.__webglTexture)
        }

        function y(t, l) {
            var u = i.get(t);
            if (6 === t.image.length)
                if (t.version > 0 && u.__version !== t.version) {
                    u.__image__webglTextureCube || (t.addEventListener("dispose", d), u.__image__webglTextureCube = e.createTexture(), a.textures++), n.activeTexture(e.TEXTURE0 + l), n.bindTexture(e.TEXTURE_CUBE_MAP, u.__image__webglTextureCube), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                    for (var p = t && t.isCompressedTexture, f = t.image[0] && t.image[0].isDataTexture, m = [], v = 0; 6 > v; v++) p || f ? m[v] = f ? t.image[v].image : t.image[v] : m[v] = s(t.image[v], r.maxCubemapSize);
                    var g = m[0],
                        y = c(g),
                        x = o.convert(t.format),
                        w = o.convert(t.type);
                    b(e.TEXTURE_CUBE_MAP, t, y);
                    for (var v = 0; 6 > v; v++)
                        if (p)
                            for (var _, M = m[v].mipmaps, T = 0, E = M.length; E > T; T++) _ = M[T], t.format !== _s && t.format !== ws ? n.getCompressedTextureFormats().indexOf(x) > -1 ? n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, T, x, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, T, x, _.width, _.height, 0, x, w, _.data);
                        else f ? n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, x, m[v].width, m[v].height, 0, x, w, m[v].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + v, 0, x, x, w, m[v]);
                    h(t, y) && e.generateMipmap(e.TEXTURE_CUBE_MAP), u.__version = t.version, t.onUpdate && t.onUpdate(t)
                } else n.activeTexture(e.TEXTURE0 + l), n.bindTexture(e.TEXTURE_CUBE_MAP, u.__image__webglTextureCube)
        }

        function x(t, r) {
            n.activeTexture(e.TEXTURE0 + r), n.bindTexture(e.TEXTURE_CUBE_MAP, i.get(t).__webglTexture)
        }

        function b(n, a, s) {
            var c;
            if (s ? (e.texParameteri(n, e.TEXTURE_WRAP_S, o.convert(a.wrapS)), e.texParameteri(n, e.TEXTURE_WRAP_T, o.convert(a.wrapT)), e.texParameteri(n, e.TEXTURE_MAG_FILTER, o.convert(a.magFilter)), e.texParameteri(n, e.TEXTURE_MIN_FILTER, o.convert(a.minFilter))) : (e.texParameteri(n, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(n, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), (a.wrapS !== es || a.wrapT !== es) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", a), e.texParameteri(n, e.TEXTURE_MAG_FILTER, p(a.magFilter)), e.texParameteri(n, e.TEXTURE_MIN_FILTER, p(a.minFilter)), a.minFilter !== ns && a.minFilter !== os && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", a)), c = t.get("EXT_texture_filter_anisotropic")) {
                if (a.type === fs && null === t.get("OES_texture_float_linear")) return;
                if (a.type === ms && null === t.get("OES_texture_half_float_linear")) return;
                (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (e.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
            }
        }

        function w(t, i, p) {
            void 0 === t.__webglInit && (t.__webglInit = !0, i.addEventListener("dispose", d), t.__webglTexture = e.createTexture(), i.isVideoTexture && (R[i.id] = i), a.textures++), n.activeTexture(e.TEXTURE0 + p), n.bindTexture(e.TEXTURE_2D, t.__webglTexture), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, i.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, i.unpackAlignment);
            var f = s(i.image, r.maxTextureSize);
            u(i) && c(f) === !1 && (f = l(f));
            var m = c(f),
                v = o.convert(i.format),
                g = o.convert(i.type);
            b(e.TEXTURE_2D, i, m);
            var y, x = i.mipmaps;
            if (i.isDepthTexture) {
                var w = e.DEPTH_COMPONENT;
                if (i.type === fs) {
                    if (!P) throw new Error("Float Depth Texture only supported in WebGL2.0");
                    w = e.DEPTH_COMPONENT32F
                } else P && (w = e.DEPTH_COMPONENT16);
                i.format === Ss && w === e.DEPTH_COMPONENT && i.type !== hs && i.type !== ds && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = hs, g = o.convert(i.type)), i.format === Cs && (w = e.DEPTH_STENCIL, i.type !== xs && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = xs, g = o.convert(i.type))), n.texImage2D(e.TEXTURE_2D, 0, w, f.width, f.height, 0, v, g, null)
            } else if (i.isDataTexture)
                if (x.length > 0 && m) {
                    for (var _ = 0, M = x.length; M > _; _++) y = x[_], n.texImage2D(e.TEXTURE_2D, _, v, y.width, y.height, 0, v, g, y.data);
                    i.generateMipmaps = !1
                } else n.texImage2D(e.TEXTURE_2D, 0, v, f.width, f.height, 0, v, g, f.data);
            else if (i.isCompressedTexture)
                for (var _ = 0, M = x.length; M > _; _++) y = x[_], i.format !== _s && i.format !== ws ? n.getCompressedTextureFormats().indexOf(v) > -1 ? n.compressedTexImage2D(e.TEXTURE_2D, _, v, y.width, y.height, 0, y.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(e.TEXTURE_2D, _, v, y.width, y.height, 0, v, g, y.data);
            else if (x.length > 0 && m) {
                for (var _ = 0, M = x.length; M > _; _++) y = x[_], n.texImage2D(e.TEXTURE_2D, _, v, v, g, y);
                i.generateMipmaps = !1
            } else n.texImage2D(e.TEXTURE_2D, 0, v, v, g, f);
            h(i, m) && e.generateMipmap(e.TEXTURE_2D), t.__version = i.version, i.onUpdate && i.onUpdate(i)
        }

        function _(t, r, a, s) {
            var c = o.convert(r.texture.format),
                l = o.convert(r.texture.type);
            n.texImage2D(s, 0, c, r.width, r.height, 0, c, l, null), e.bindFramebuffer(e.FRAMEBUFFER, t), e.framebufferTexture2D(e.FRAMEBUFFER, a, s, i.get(r.texture).__webglTexture, 0), e.bindFramebuffer(e.FRAMEBUFFER, null)
        }

        function M(t, n) {
            e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer && !n.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : n.depthBuffer && n.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, n.width, n.height), e.bindRenderbuffer(e.RENDERBUFFER, null)
        }

        function T(t, n) {
            var r = n && n.isWebGLRenderTargetCube;
            if (r) throw new Error("Depth Texture with cube render targets is not supported");
            if (e.bindFramebuffer(e.FRAMEBUFFER, t), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), g(n.depthTexture, 0);
            var o = i.get(n.depthTexture).__webglTexture;
            if (n.depthTexture.format === Ss) e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, o, 0);
            else {
                if (n.depthTexture.format !== Cs) throw new Error("Unknown depthTexture format");
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, o, 0)
            }
        }

        function E(t) {
            var n = i.get(t),
                r = t.isWebGLRenderTargetCube === !0;
            if (t.depthTexture) {
                if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                T(n.__webglFramebuffer, t)
            } else if (r) {
                n.__webglDepthbuffer = [];
                for (var o = 0; 6 > o; o++) e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[o]), n.__webglDepthbuffer[o] = e.createRenderbuffer(), M(n.__webglDepthbuffer[o], t)
            } else e.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), M(n.__webglDepthbuffer, t);
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }

        function S(t) {
            var r = i.get(t),
                o = i.get(t.texture);
            t.addEventListener("dispose", f), o.__webglTexture = e.createTexture(), a.textures++;
            var s = t.isWebGLRenderTargetCube === !0,
                l = c(t);
            if (s) {
                r.__webglFramebuffer = [];
                for (var u = 0; 6 > u; u++) r.__webglFramebuffer[u] = e.createFramebuffer()
            } else r.__webglFramebuffer = e.createFramebuffer();
            if (s) {
                n.bindTexture(e.TEXTURE_CUBE_MAP, o.__webglTexture), b(e.TEXTURE_CUBE_MAP, t.texture, l);
                for (var u = 0; 6 > u; u++) _(r.__webglFramebuffer[u], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + u);
                h(t.texture, l) && e.generateMipmap(e.TEXTURE_CUBE_MAP), n.bindTexture(e.TEXTURE_CUBE_MAP, null)
            } else n.bindTexture(e.TEXTURE_2D, o.__webglTexture), b(e.TEXTURE_2D, t.texture, l), _(r.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D), h(t.texture, l) && e.generateMipmap(e.TEXTURE_2D), n.bindTexture(e.TEXTURE_2D, null);
            t.depthBuffer && E(t)
        }

        function C(t) {
            var r = t.texture,
                o = c(t);
            if (h(r, o)) {
                var a = t.isWebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D,
                    s = i.get(r).__webglTexture;
                n.bindTexture(a, s), e.generateMipmap(a), n.bindTexture(a, null)
            }
        }

        function A() {
            for (var e in R) R[e].update()
        }
        var P = "undefined" != typeof WebGL2RenderingContext && e instanceof window.WebGL2RenderingContext,
            R = {};
        this.setTexture2D = g, this.setTextureCube = y, this.setTextureCubeDynamic = x, this.setupRenderTarget = S, this.updateRenderTargetMipmap = C, this.updateVideoTextures = A
    }

    function pt() {
        function e(e) {
            var t = e.uuid,
                n = i[t];
            return void 0 === n && (n = {}, i[t] = n), n
        }

        function t(e) {
            delete i[e.uuid]
        }

        function n() {
            i = {}
        }
        var i = {};
        return {
            get: e,
            remove: t,
            clear: n
        }
    }

    function dt(e, t, n) {
        function i() {
            var t = !1,
                n = new c,
                i = null,
                r = new c(0, 0, 0, 0);
            return {
                setMask: function(n) {
                    i === n || t || (e.colorMask(n, n, n, n), i = n)
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t, i, o, a, s) {
                    s === !0 && (t *= a, i *= a, o *= a), n.set(t, i, o, a), r.equals(n) === !1 && (e.clearColor(t, i, o, a), r.copy(n))
                },
                reset: function() {
                    t = !1, i = null, r.set(-1, 0, 0, 0)
                }
            }
        }

        function r() {
            var t = !1,
                n = null,
                i = null,
                r = null;
            return {
                setTest: function(t) {
                    t ? p(e.DEPTH_TEST) : d(e.DEPTH_TEST)
                },
                setMask: function(i) {
                    n === i || t || (e.depthMask(i), n = i)
                },
                setFunc: function(t) {
                    if (i !== t) {
                        if (t) switch (t) {
                            case Pa:
                                e.depthFunc(e.NEVER);
                                break;
                            case Ra:
                                e.depthFunc(e.ALWAYS);
                                break;
                            case La:
                                e.depthFunc(e.LESS);
                                break;
                            case Ia:
                                e.depthFunc(e.LEQUAL);
                                break;
                            case Oa:
                                e.depthFunc(e.EQUAL);
                                break;
                            case Ba:
                                e.depthFunc(e.GEQUAL);
                                break;
                            case Da:
                                e.depthFunc(e.GREATER);
                                break;
                            case Na:
                                e.depthFunc(e.NOTEQUAL);
                                break;
                            default:
                                e.depthFunc(e.LEQUAL)
                        } else e.depthFunc(e.LEQUAL);
                        i = t
                    }
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t) {
                    r !== t && (e.clearDepth(t), r = t)
                },
                reset: function() {
                    t = !1, n = null, i = null, r = null
                }
            }
        }

        function o() {
            var t = !1,
                n = null,
                i = null,
                r = null,
                o = null,
                a = null,
                s = null,
                c = null,
                l = null;
            return {
                setTest: function(t) {
                    t ? p(e.STENCIL_TEST) : d(e.STENCIL_TEST)
                },
                setMask: function(i) {
                    n === i || t || (e.stencilMask(i), n = i)
                },
                setFunc: function(t, n, a) {
                    (i !== t || r !== n || o !== a) && (e.stencilFunc(t, n, a), i = t, r = n, o = a)
                },
                setOp: function(t, n, i) {
                    (a !== t || s !== n || c !== i) && (e.stencilOp(t, n, i), a = t, s = n, c = i)
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t) {
                    l !== t && (e.clearStencil(t), l = t)
                },
                reset: function() {
                    t = !1, n = null, i = null, r = null, o = null, a = null, s = null, c = null, l = null
                }
            }
        }

        function a(t, n, i) {
            var r = new Uint8Array(4),
                o = e.createTexture();
            e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
            for (var a = 0; i > a; a++) e.texImage2D(n + a, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
            return o
        }

        function s() {
            for (var e = 0, t = B.length; t > e; e++) B[e] = 0
        }

        function l(n) {
            if (B[n] = 1, 0 === D[n] && (e.enableVertexAttribArray(n), D[n] = 1), 0 !== N[n]) {
                var i = t.get("ANGLE_instanced_arrays");
                i.vertexAttribDivisorANGLE(n, 0), N[n] = 0
            }
        }

        function u(n, i) {
            if (B[n] = 1, 0 === D[n] && (e.enableVertexAttribArray(n), D[n] = 1), N[n] !== i) {
                var r = t.get("ANGLE_instanced_arrays");
                r.vertexAttribDivisorANGLE(n, i), N[n] = i
            }
        }

        function h() {
            for (var t = 0, n = D.length; t !== n; ++t) D[t] !== B[t] && (e.disableVertexAttribArray(t), D[t] = 0)
        }

        function p(t) {
            F[t] !== !0 && (e.enable(t), F[t] = !0)
        }

        function d(t) {
            F[t] !== !1 && (e.disable(t), F[t] = !1)
        }

        function f() {
            if (null === U && (U = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
                for (var n = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), i = 0; i < n.length; i++) U.push(n[i]);
            return U
        }

        function m(t) {
            return k !== t ? (e.useProgram(t), k = t, !0) : !1
        }

        function v(t, i, r, o, a, s, c, l) {
            if (t !== sa ? p(e.BLEND) : d(e.BLEND), t !== pa) {
                if (t !== z || l !== X) switch (t) {
                    case la:
                        l ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE));
                        break;
                    case ua:
                        l ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR));
                        break;
                    case ha:
                        l ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR));
                        break;
                    default:
                        l ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA))
                }
                H = null, G = null, V = null, j = null, $ = null, W = null
            } else a = a || i, s = s || r, c = c || o, (i !== H || a !== j) && (e.blendEquationSeparate(n.convert(i), n.convert(a)), H = i, j = a), (r !== G || o !== V || s !== $ || c !== W) && (e.blendFuncSeparate(n.convert(r), n.convert(o), n.convert(s), n.convert(c)), G = r, V = o, $ = s, W = c);
            z = t, X = l
        }

        function g(t, n) {
            t.side === ta ? d(e.CULL_FACE) : p(e.CULL_FACE);
            var i = t.side === ea;
            n && (i = !i), y(i), t.transparent === !0 ? v(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : v(sa), L.setFunc(t.depthFunc), L.setTest(t.depthTest), L.setMask(t.depthWrite), R.setMask(t.colorWrite), w(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        }

        function y(t) {
            q !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), q = t)
        }

        function x(t) {
            t !== jo ? (p(e.CULL_FACE), t !== Y && (t === $o ? e.cullFace(e.BACK) : t === Wo ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : d(e.CULL_FACE), Y = t
        }

        function b(t) {
            t !== Z && (te && e.lineWidth(t), Z = t)
        }

        function w(t, n, i) {
            t ? (p(e.POLYGON_OFFSET_FILL), (J !== n || Q !== i) && (e.polygonOffset(n, i), J = n, Q = i)) : d(e.POLYGON_OFFSET_FILL)
        }

        function _(t) {
            t ? p(e.SCISSOR_TEST) : d(e.SCISSOR_TEST)
        }

        function M(t) {
            void 0 === t && (t = e.TEXTURE0 + K - 1), ne !== t && (e.activeTexture(t), ne = t)
        }

        function T(t, n) {
            null === ne && M();
            var i = ie[ne];
            void 0 === i && (i = {
                type: void 0,
                texture: void 0
            }, ie[ne] = i), (i.type !== t || i.texture !== n) && (e.bindTexture(t, n || ae[t]), i.type = t, i.texture = n)
        }

        function E() {
            try {
                e.compressedTexImage2D.apply(e, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        }

        function S() {
            try {
                e.texImage2D.apply(e, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        }

        function C(t) {
            re.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), re.copy(t))
        }

        function A(t) {
            oe.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), oe.copy(t))
        }

        function P() {
            for (var t = 0; t < D.length; t++) 1 === D[t] && (e.disableVertexAttribArray(t), D[t] = 0);
            F = {}, U = null, ne = null, ie = {}, k = null, z = null, q = null, Y = null, R.reset(), L.reset(), I.reset()
        }
        var R = new i,
            L = new r,
            I = new o,
            O = e.getParameter(e.MAX_VERTEX_ATTRIBS),
            B = new Uint8Array(O),
            D = new Uint8Array(O),
            N = new Uint8Array(O),
            F = {},
            U = null,
            k = null,
            z = null,
            H = null,
            G = null,
            V = null,
            j = null,
            $ = null,
            W = null,
            X = !1,
            q = null,
            Y = null,
            Z = null,
            J = null,
            Q = null,
            K = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            ee = parseFloat(/^WebGL\ ([0-9])/.exec(e.getParameter(e.VERSION))[1]),
            te = parseFloat(ee) >= 1,
            ne = null,
            ie = {},
            re = new c,
            oe = new c,
            ae = {};
        return ae[e.TEXTURE_2D] = a(e.TEXTURE_2D, e.TEXTURE_2D, 1), ae[e.TEXTURE_CUBE_MAP] = a(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), R.setClear(0, 0, 0, 1), L.setClear(1), I.setClear(0), p(e.DEPTH_TEST), L.setFunc(Ia), y(!1), x($o), p(e.CULL_FACE), p(e.BLEND), v(ca), {
            buffers: {
                color: R,
                depth: L,
                stencil: I
            },
            initAttributes: s,
            enableAttribute: l,
            enableAttributeAndDivisor: u,
            disableUnusedAttributes: h,
            enable: p,
            disable: d,
            getCompressedTextureFormats: f,
            useProgram: m,
            setBlending: v,
            setMaterial: g,
            setFlipSided: y,
            setCullFace: x,
            setLineWidth: b,
            setPolygonOffset: w,
            setScissorTest: _,
            activeTexture: M,
            bindTexture: T,
            compressedTexImage2D: E,
            texImage2D: S,
            scissor: C,
            viewport: A,
            reset: P
        }
    }

    function ft(e, t, n) {
        function i() {
            if (void 0 !== o) return o;
            var n = t.get("EXT_texture_filter_anisotropic");
            return o = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }

        function r(t) {
            if ("highp" === t) {
                if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
                t = "mediump"
            }
            return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        var o, a = void 0 !== n.precision ? n.precision : "highp",
            s = r(a);
        s !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", s, "instead."), a = s);
        var c = n.logarithmicDepthBuffer === !0,
            l = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
            u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            h = e.getParameter(e.MAX_TEXTURE_SIZE),
            p = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
            d = e.getParameter(e.MAX_VERTEX_ATTRIBS),
            f = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
            m = e.getParameter(e.MAX_VARYING_VECTORS),
            v = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
            g = u > 0,
            y = !!t.get("OES_texture_float"),
            x = g && y;
        return {
            getMaxAnisotropy: i,
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: l,
            maxVertexTextures: u,
            maxTextureSize: h,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: v,
            vertexTextures: g,
            floatFragmentTextures: y,
            floatVertexTextures: x
        }
    }

    function mt(e, t, n, i) {
        ue.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function vt(e) {
        mt.call(this), this.cameras = e || []
    }

    function gt(e) {
        function t() {
            if (null !== r && r.isPresenting) {
                var t = r.getEyeParameters("left"),
                    i = t.renderWidth,
                    o = t.renderHeight;
                d = e.getPixelRatio(), p = e.getSize(), e.setDrawingBufferSize(2 * i, o, 1)
            } else n.enabled && e.setDrawingBufferSize(p.width, p.height, d)
        }
        var n = this,
            r = null,
            o = null,
            a = null;
        "undefined" != typeof window && "VRFrameData" in window && (o = new window.VRFrameData);
        var s = new i,
            l = new mt;
        l.bounds = new c(0, 0, .5, 1), l.layers.enable(1);
        var u = new mt;
        u.bounds = new c(.5, 0, .5, 1), u.layers.enable(2);
        var h = new vt([l, u]);
        h.layers.enable(1), h.layers.enable(2);
        var p, d;
        "undefined" != typeof window && window.addEventListener("vrdisplaypresentchange", t, !1), this.enabled = !1, this.getDevice = function() {
            return r
        }, this.setDevice = function(e) {
            void 0 !== e && (r = e)
        }, this.setPoseTarget = function(e) {
            void 0 !== e && (a = e)
        }, this.getCamera = function(e) {
            if (null === r) return e;
            r.depthNear = e.near, r.depthFar = e.far, r.getFrameData(o);
            var t = o.pose,
                n = null !== a ? a : e;
            if (null !== t.position ? n.position.fromArray(t.position) : n.position.set(0, 0, 0), null !== t.orientation && n.quaternion.fromArray(t.orientation), n.updateMatrixWorld(), r.isPresenting === !1) return e;
            l.near = e.near, u.near = e.near, l.far = e.far, u.far = e.far, h.matrixWorld.copy(e.matrixWorld), h.matrixWorldInverse.copy(e.matrixWorldInverse), l.matrixWorldInverse.fromArray(o.leftViewMatrix), u.matrixWorldInverse.fromArray(o.rightViewMatrix);
            var i = n.parent;
            null !== i && (s.getInverse(i.matrixWorld), l.matrixWorldInverse.multiply(s), u.matrixWorldInverse.multiply(s)), l.matrixWorld.getInverse(l.matrixWorldInverse), u.matrixWorld.getInverse(u.matrixWorldInverse), l.projectionMatrix.fromArray(o.leftProjectionMatrix), u.projectionMatrix.fromArray(o.rightProjectionMatrix), h.projectionMatrix.copy(l.projectionMatrix);
            var c = r.getLayers();
            if (c.length) {
                var p = c[0];
                null !== p.leftBounds && 4 === p.leftBounds.length && l.bounds.fromArray(p.leftBounds), null !== p.rightBounds && 4 === p.rightBounds.length && u.bounds.fromArray(p.rightBounds)
            }
            return h
        }, this.submitFrame = function() {
            r && r.isPresenting && r.submitFrame()
        }, this.dispose = function() {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", t)
        }
    }

    function yt(e) {
        var t = {};
        return {
            get: function(n) {
                if (void 0 !== t[n]) return t[n];
                var i;
                switch (n) {
                    case "WEBGL_depth_texture":
                        i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        i = e.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        i = e.getExtension(n)
                }
                return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = i, i
            }
        }
    }

    function xt() {
        function e() {
            u.value !== i && (u.value = i, u.needsUpdate = r > 0), n.numPlanes = r, n.numIntersection = 0
        }

        function t(e, t, i, r) {
            var o = null !== e ? e.length : 0,
                a = null;
            if (0 !== o) {
                if (a = u.value, r !== !0 || null === a) {
                    var s = i + 4 * o,
                        h = t.matrixWorldInverse;
                    l.getNormalMatrix(h), (null === a || a.length < s) && (a = new Float32Array(s));
                    for (var p = 0, d = i; p !== o; ++p, d += 4) c.copy(e[p]).applyMatrix4(h, l), c.normal.toArray(a, d), a[d + 3] = c.constant
                }
                u.value = a, u.needsUpdate = !0
            }
            return n.numPlanes = o, a
        }
        var n = this,
            i = null,
            r = 0,
            o = !1,
            s = !1,
            c = new ie,
            l = new a,
            u = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = u, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, n, a) {
            var s = 0 !== e.length || n || 0 !== r || o;
            return o = n, i = t(e, a, 0), r = e.length, s
        }, this.beginShadows = function() {
            s = !0, t(null)
        }, this.endShadows = function() {
            s = !1, e()
        }, this.setState = function(n, a, c, l, h, p) {
            if (!o || null === n || 0 === n.length || s && !c) s ? t(null) : e();
            else {
                var d = s ? 0 : r,
                    f = 4 * d,
                    m = h.clippingState || null;
                u.value = m, m = t(n, l, f, p);
                for (var v = 0; v !== f; ++v) m[v] = i[v];
                h.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
            }
        }
    }

    function bt(e, t) {
        function n(n) {
            var i;
            if (n === Ka) return e.REPEAT;
            if (n === es) return e.CLAMP_TO_EDGE;
            if (n === ts) return e.MIRRORED_REPEAT;
            if (n === ns) return e.NEAREST;
            if (n === is) return e.NEAREST_MIPMAP_NEAREST;
            if (n === rs) return e.NEAREST_MIPMAP_LINEAR;
            if (n === os) return e.LINEAR;
            if (n === as) return e.LINEAR_MIPMAP_NEAREST;
            if (n === ss) return e.LINEAR_MIPMAP_LINEAR;
            if (n === cs) return e.UNSIGNED_BYTE;
            if (n === vs) return e.UNSIGNED_SHORT_4_4_4_4;
            if (n === gs) return e.UNSIGNED_SHORT_5_5_5_1;
            if (n === ys) return e.UNSIGNED_SHORT_5_6_5;
            if (n === ls) return e.BYTE;
            if (n === us) return e.SHORT;
            if (n === hs) return e.UNSIGNED_SHORT;
            if (n === ps) return e.INT;
            if (n === ds) return e.UNSIGNED_INT;
            if (n === fs) return e.FLOAT;
            if (n === ms && (i = t.get("OES_texture_half_float"), null !== i)) return i.HALF_FLOAT_OES;
            if (n === bs) return e.ALPHA;
            if (n === ws) return e.RGB;
            if (n === _s) return e.RGBA;
            if (n === Ms) return e.LUMINANCE;
            if (n === Ts) return e.LUMINANCE_ALPHA;
            if (n === Ss) return e.DEPTH_COMPONENT;
            if (n === Cs) return e.DEPTH_STENCIL;
            if (n === da) return e.FUNC_ADD;
            if (n === fa) return e.FUNC_SUBTRACT;
            if (n === ma) return e.FUNC_REVERSE_SUBTRACT;
            if (n === ya) return e.ZERO;
            if (n === xa) return e.ONE;
            if (n === ba) return e.SRC_COLOR;
            if (n === wa) return e.ONE_MINUS_SRC_COLOR;
            if (n === _a) return e.SRC_ALPHA;
            if (n === Ma) return e.ONE_MINUS_SRC_ALPHA;
            if (n === Ta) return e.DST_ALPHA;
            if (n === Ea) return e.ONE_MINUS_DST_ALPHA;
            if (n === Sa) return e.DST_COLOR;
            if (n === Ca) return e.ONE_MINUS_DST_COLOR;
            if (n === Aa) return e.SRC_ALPHA_SATURATE;
            if ((n === As || n === Ps || n === Rs || n === Ls) && (i = t.get("WEBGL_compressed_texture_s3tc"), null !== i)) {
                if (n === As) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Ps) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === Rs) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === Ls) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if ((n === Is || n === Os || n === Bs || n === Ds) && (i = t.get("WEBGL_compressed_texture_pvrtc"), null !== i)) {
                if (n === Is) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === Os) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === Bs) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === Ds) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (n === Ns && (i = t.get("WEBGL_compressed_texture_etc1"), null !== i)) return i.COMPRESSED_RGB_ETC1_WEBGL;
            if ((n === va || n === ga) && (i = t.get("EXT_blend_minmax"), null !== i)) {
                if (n === va) return i.MIN_EXT;
                if (n === ga) return i.MAX_EXT
            }
            return n === xs && (i = t.get("WEBGL_depth_texture"), null !== i) ? i.UNSIGNED_INT_24_8_WEBGL : 0
        }
        return {
            convert: n
        }
    }

    function wt(e) {
        function t() {
            return null === te ? ve : 1
        }

        function n() {
            Le = new yt(Ae), Le.get("WEBGL_depth_texture"), Le.get("OES_texture_float"), Le.get("OES_texture_float_linear"), Le.get("OES_texture_half_float"), Le.get("OES_texture_half_float_linear"), Le.get("OES_standard_derivatives"), Le.get("OES_element_index_uint"), Le.get("ANGLE_instanced_arrays"), nt = new bt(Ae, Le), Ie = new ft(Ae, Le, e), Oe = new dt(Ae, Le, nt), Oe.scissor(he.copy(ye).multiplyScalar(ve)), Oe.viewport(ue.copy(ge).multiplyScalar(ve)), Be = new pt, De = new ht(Ae, Le, Oe, Be, Ie, nt, Se), Ne = new ae(Ae), Ue = new We(Ae, Ne, Se), ke = new Ye(Ue, Ce), Je = new Ve(Ae), Ge = new ut(K, Le, Ie), ze = new qe, Xe = new He, Ze = new Fe(K, Oe, Ue, G), Qe = new $e(Ae, Le, Ce), Ke = new je(Ae, Le, Ce), et = new Y(K, Ae, Oe, De, Ie), tt = new J(K, Ae, Oe, De, Ie), K.info.programs = Ge.programs, K.context = Ae, K.capabilities = Ie, K.extensions = Le, K.properties = Be, K.renderLists = Xe, K.state = Oe
        }

        function r(e) {
            e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), ee = !0
        }

        function a() {
            console.log("THREE.WebGLRenderer: Context Restored."), ee = !1, n()
        }

        function s(e) {
            var t = e.target;
            t.removeEventListener("dispose", s), l(t)
        }

        function l(e) {
            u(e), Be.remove(e)
        }

        function u(e) {
            var t = Be.get(e).program;
            e.program = void 0, void 0 !== t && Ge.releaseProgram(t)
        }

        function p(e, t, n) {
            e.render(function(e) {
                K.renderBufferImmediate(e, t, n)
            })
        }

        function d(e, t, n, i) {
            if (n && n.isInstancedBufferGeometry && null === Le.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            void 0 === i && (i = 0), Oe.initAttributes();
            var r = n.attributes,
                o = t.getAttributes(),
                a = e.defaultAttributeValues;
            for (var s in o) {
                var c = o[s];
                if (c >= 0) {
                    var l = r[s];
                    if (void 0 !== l) {
                        var u = l.normalized,
                            h = l.itemSize,
                            p = Ne.get(l);
                        if (void 0 === p) continue;
                        var d = p.buffer,
                            f = p.type,
                            m = p.bytesPerElement;
                        if (l.isInterleavedBufferAttribute) {
                            var v = l.data,
                                g = v.stride,
                                y = l.offset;
                            v && v.isInstancedInterleavedBuffer ? (Oe.enableAttributeAndDivisor(c, v.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = v.meshPerAttribute * v.count)) : Oe.enableAttribute(c), Ae.bindBuffer(Ae.ARRAY_BUFFER, d), Ae.vertexAttribPointer(c, h, f, u, g * m, (i * g + y) * m)
                        } else l.isInstancedBufferAttribute ? (Oe.enableAttributeAndDivisor(c, l.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = l.meshPerAttribute * l.count)) : Oe.enableAttribute(c), Ae.bindBuffer(Ae.ARRAY_BUFFER, d), Ae.vertexAttribPointer(c, h, f, u, 0, i * h * m)
                    } else if (void 0 !== a) {
                        var x = a[s];
                        if (void 0 !== x) switch (x.length) {
                            case 2:
                                Ae.vertexAttrib2fv(c, x);
                                break;
                            case 3:
                                Ae.vertexAttrib3fv(c, x);
                                break;
                            case 4:
                                Ae.vertexAttrib4fv(c, x);
                                break;
                            default:
                                Ae.vertexAttrib1fv(c, x)
                        }
                    }
                }
            }
            Oe.disableUnusedAttributes()
        }

        function f() {
            if (!ot) {
                var e = it.getDevice();
                e && e.isPresenting ? e.requestAnimationFrame(m) : window.requestAnimationFrame(m), ot = !0
            }
        }

        function m(e) {
            null !== at && at(e);
            var t = it.getDevice();
            t && t.isPresenting ? t.requestAnimationFrame(m) : window.requestAnimationFrame(m)
        }

        function v(e, t, n) {
            if (e.visible !== !1) {
                var i = e.layers.test(t.layers);
                if (i)
                    if (e.isLight) $.push(e), e.castShadow && X.push(e);
                    else if (e.isSprite)(!e.frustumCulled || be.intersectsSprite(e)) && Z.push(e);
                else if (e.isLensFlare) Q.push(e);
                else if (e.isImmediateRenderObject) n && Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te), q.push(e, null, e.material, Ee.z, null);
                else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || be.intersectsObject(e))) {
                    n && Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);
                    var r = ke.update(e),
                        o = e.material;
                    if (Array.isArray(o))
                        for (var a = r.groups, s = 0, c = a.length; c > s; s++) {
                            var l = a[s],
                                u = o[l.materialIndex];
                            u && u.visible && q.push(e, r, u, Ee.z, l)
                        } else o.visible && q.push(e, r, o, Ee.z, null)
                }
                for (var h = e.children, s = 0, c = h.length; c > s; s++) v(h[s], t, n)
            }
        }

        function g(e, t, n, i) {
            for (var r = 0, o = e.length; o > r; r++) {
                var a = e[r],
                    s = a.object,
                    c = a.geometry,
                    l = void 0 === i ? a.material : i,
                    u = a.group;
                if (n.isArrayCamera) {
                    le = n;
                    for (var h = n.cameras, p = 0, d = h.length; d > p; p++) {
                        var f = h[p];
                        if (s.layers.test(f.layers)) {
                            var m = f.bounds,
                                v = m.x * fe,
                                g = m.y * me,
                                x = m.z * fe,
                                b = m.w * me;
                            Oe.viewport(ue.set(v, g, x, b).multiplyScalar(ve)), y(s, t, f, c, l, u)
                        }
                    }
                } else le = null, y(s, t, n, c, l, u)
            }
        }

        function y(e, t, n, i, r, o) {
            if (e.onBeforeRender(K, t, n, i, r, o), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
                var a = e.isMesh && e.matrixWorld.determinant() < 0;
                Oe.setMaterial(r, a);
                var s = b(n, t.fog, r, e);
                se = "", p(e, s, r)
            } else K.renderBufferDirect(n, t.fog, i, r, e, o);
            e.onAfterRender(K, t, n, i, r, o)
        }

        function x(e, t, n) {
            var i = Be.get(e),
                r = Ge.getParameters(e, ze.state, X, t, we.numPlanes, we.numIntersection, n),
                o = Ge.getProgramCode(e, r),
                a = i.program,
                c = !0;
            if (void 0 === a) e.addEventListener("dispose", s);
            else if (a.code !== o) u(e);
            else {
                if (void 0 !== r.shaderID) return;
                c = !1
            }
            if (c) {
                if (r.shaderID) {
                    var l = xu[r.shaderID];
                    i.shader = {
                        name: e.type,
                        uniforms: vc.clone(l.uniforms),
                        vertexShader: l.vertexShader,
                        fragmentShader: l.fragmentShader
                    }
                } else i.shader = {
                    name: e.type,
                    uniforms: e.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                };
                e.onBeforeCompile(i.shader), a = Ge.acquireProgram(e, i.shader, r, o), i.program = a, e.program = a
            }
            var h = a.getAttributes();
            if (e.morphTargets) {
                e.numSupportedMorphTargets = 0;
                for (var p = 0; p < K.maxMorphTargets; p++) h["morphTarget" + p] >= 0 && e.numSupportedMorphTargets++
            }
            if (e.morphNormals) {
                e.numSupportedMorphNormals = 0;
                for (var p = 0; p < K.maxMorphNormals; p++) h["morphNormal" + p] >= 0 && e.numSupportedMorphNormals++
            }
            var d = i.shader.uniforms;
            (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (i.numClippingPlanes = we.numPlanes, i.numIntersection = we.numIntersection, d.clippingPlanes = we.uniform), i.fog = t, i.lightsHash = ze.state.hash, e.lights && (d.ambientLightColor.value = ze.state.ambient, d.directionalLights.value = ze.state.directional, d.spotLights.value = ze.state.spot, d.rectAreaLights.value = ze.state.rectArea, d.pointLights.value = ze.state.point, d.hemisphereLights.value = ze.state.hemi, d.directionalShadowMap.value = ze.state.directionalShadowMap, d.directionalShadowMatrix.value = ze.state.directionalShadowMatrix, d.spotShadowMap.value = ze.state.spotShadowMap, d.spotShadowMatrix.value = ze.state.spotShadowMatrix, d.pointShadowMap.value = ze.state.pointShadowMap, d.pointShadowMatrix.value = ze.state.pointShadowMatrix);
            var f = i.program.getUniforms(),
                m = W.seqWithValue(f.seq, d);
            i.uniformsList = m
        }

        function b(e, t, n, i) {
            de = 0;
            var r = Be.get(n);
            if (_e && (Me || e !== ce)) {
                var o = e === ce && n.id === ie;
                we.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, e, r, o)
            }
            n.needsUpdate === !1 && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== t ? n.needsUpdate = !0 : n.lights && r.lightsHash !== ze.state.hash ? n.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === we.numPlanes && r.numIntersection === we.numIntersection || (n.needsUpdate = !0)), n.needsUpdate && (x(n, t, i), n.needsUpdate = !1);
            var a = !1,
                s = !1,
                c = !1,
                l = r.program,
                u = l.getUniforms(),
                p = r.shader.uniforms;
            if (Oe.useProgram(l.program) && (a = !0, s = !0, c = !0), n.id !== ie && (ie = n.id, s = !0), a || e !== ce) {
                if (u.setValue(Ae, "projectionMatrix", e.projectionMatrix), Ie.logarithmicDepthBuffer && u.setValue(Ae, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), ce !== (le || e) && (ce = le || e, s = !0, c = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                    var d = u.map.cameraPosition;
                    void 0 !== d && d.setValue(Ae, Ee.setFromMatrixPosition(e.matrixWorld))
                }(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && u.setValue(Ae, "viewMatrix", e.matrixWorldInverse)
            }
            if (n.skinning) {
                u.setOptional(Ae, i, "bindMatrix"), u.setOptional(Ae, i, "bindMatrixInverse");
                var f = i.skeleton;
                if (f) {
                    var m = f.bones;
                    if (Ie.floatVertexTextures) {
                        if (void 0 === f.boneTexture) {
                            var v = Math.sqrt(4 * m.length);
                            v = oc.ceilPowerOfTwo(v), v = Math.max(v, 4);
                            var g = new Float32Array(v * v * 4);
                            g.set(f.boneMatrices);
                            var y = new h(g, v, v, _s, fs);
                            f.boneMatrices = g, f.boneTexture = y, f.boneTextureSize = v
                        }
                        u.setValue(Ae, "boneTexture", f.boneTexture), u.setValue(Ae, "boneTextureSize", f.boneTextureSize)
                    } else u.setOptional(Ae, f, "boneMatrices")
                }
            }
            return s && (u.setValue(Ae, "toneMappingExposure", K.toneMappingExposure), u.setValue(Ae, "toneMappingWhitePoint", K.toneMappingWhitePoint), n.lights && B(p, c), t && n.fog && E(p, t), n.isMeshBasicMaterial ? w(p, n) : n.isMeshLambertMaterial ? (w(p, n), S(p, n)) : n.isMeshPhongMaterial ? (w(p, n), n.isMeshToonMaterial ? A(p, n) : C(p, n)) : n.isMeshStandardMaterial ? (w(p, n), n.isMeshPhysicalMaterial ? R(p, n) : P(p, n)) : n.isMeshDepthMaterial ? (w(p, n), L(p, n)) : n.isMeshDistanceMaterial ? (w(p, n), I(p, n)) : n.isMeshNormalMaterial ? (w(p, n), O(p, n)) : n.isLineBasicMaterial ? (_(p, n), n.isLineDashedMaterial && M(p, n)) : n.isPointsMaterial ? T(p, n) : n.isShadowMaterial && (p.color.value = n.color, p.opacity.value = n.opacity), void 0 !== p.ltcMat && (p.ltcMat.value = mc.LTC_MAT_TEXTURE), void 0 !== p.ltcMag && (p.ltcMag.value = mc.LTC_MAG_TEXTURE), W.upload(Ae, r.uniformsList, p, K)), u.setValue(Ae, "modelViewMatrix", i.modelViewMatrix), u.setValue(Ae, "normalMatrix", i.normalMatrix), u.setValue(Ae, "modelMatrix", i.matrixWorld), l
        }

        function w(e, t) {
            e.opacity.value = t.opacity, t.color && (e.diffuse.value = t.color), t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.specularMap && (e.specularMap.value = t.specularMap), t.envMap && (e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap && t.envMap.isCubeTexture ? -1 : 1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity);
            var n;
            if (t.map ? n = t.map : t.specularMap ? n = t.specularMap : t.displacementMap ? n = t.displacementMap : t.normalMap ? n = t.normalMap : t.bumpMap ? n = t.bumpMap : t.roughnessMap ? n = t.roughnessMap : t.metalnessMap ? n = t.metalnessMap : t.alphaMap ? n = t.alphaMap : t.emissiveMap && (n = t.emissiveMap), void 0 !== n) {
                if (n.isWebGLRenderTarget && (n = n.texture), n.matrixAutoUpdate === !0) {
                    var i = n.offset,
                        r = n.repeat,
                        o = n.rotation,
                        a = n.center;
                    n.matrix.setUvTransform(i.x, i.y, r.x, r.y, o, a.x, a.y)
                }
                e.uvTransform.value.copy(n.matrix)
            }
        }

        function _(e, t) {
            e.diffuse.value = t.color, e.opacity.value = t.opacity
        }

        function M(e, t) {
            e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
        }

        function T(e, t) {
            if (e.diffuse.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size * ve, e.scale.value = .5 * me, e.map.value = t.map, null !== t.map) {
                if (t.map.matrixAutoUpdate === !0) {
                    var n = t.map.offset,
                        i = t.map.repeat,
                        r = t.map.rotation,
                        o = t.map.center;
                    t.map.matrix.setUvTransform(n.x, n.y, i.x, i.y, r, o.x, o.y)
                }
                e.uvTransform.value.copy(t.map.matrix)
            }
        }

        function E(e, t) {
            e.fogColor.value = t.color, t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
        }

        function S(e, t) {
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
        }

        function C(e, t) {
            e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
        }

        function A(e, t) {
            C(e, t), t.gradientMap && (e.gradientMap.value = t.gradientMap)
        }

        function P(e, t) {
            e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
        }

        function R(e, t) {
            e.clearCoat.value = t.clearCoat, e.clearCoatRoughness.value = t.clearCoatRoughness, P(e, t)
        }

        function L(e, t) {
            t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
        }

        function I(e, t) {
            t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
        }

        function O(e, t) {
            t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
        }

        function B(e, t) {
            e.ambientLightColor.needsUpdate = t, e.directionalLights.needsUpdate = t, e.pointLights.needsUpdate = t, e.spotLights.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t
        }

        function D() {
            var e = de;
            return e >= Ie.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + e + " texture units while this GPU supports only " + Ie.maxTextures), de += 1, e
        }
        console.log("THREE.WebGLRenderer", Go), e = e || {};
        var N = void 0 !== e.canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            F = void 0 !== e.context ? e.context : null,
            U = void 0 !== e.alpha ? e.alpha : !1,
            k = void 0 !== e.depth ? e.depth : !0,
            z = void 0 !== e.stencil ? e.stencil : !0,
            H = void 0 !== e.antialias ? e.antialias : !1,
            G = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
            V = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
            j = void 0 !== e.powerPreference ? e.powerPreference : "default",
            $ = [],
            X = [],
            q = null,
            Z = [],
            Q = [];
        this.domElement = N, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Ha, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var K = this,
            ee = !1,
            te = null,
            ne = null,
            ie = -1,
            se = "",
            ce = null,
            le = null,
            ue = new c,
            he = new c,
            pe = null,
            de = 0,
            fe = N.width,
            me = N.height,
            ve = 1,
            ge = new c(0, 0, fe, me),
            ye = new c(0, 0, fe, me),
            xe = !1,
            be = new re,
            we = new xt,
            _e = !1,
            Me = !1,
            Te = new i,
            Ee = new o,
            Se = {
                geometries: 0,
                textures: 0
            },
            Ce = {
                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: Ce,
            memory: Se,
            programs: null
        };
        var Ae;
        try {
            var Pe = {
                alpha: U,
                depth: k,
                stencil: z,
                antialias: H,
                premultipliedAlpha: G,
                preserveDrawingBuffer: V,
                powerPreference: j
            };
            if (N.addEventListener("webglcontextlost", r, !1), N.addEventListener("webglcontextrestored", a, !1), Ae = F || N.getContext("webgl", Pe) || N.getContext("experimental-webgl", Pe), null === Ae) throw null !== N.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === Ae.getShaderPrecisionFormat && (Ae.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            })
        } catch (Re) {
            console.error("THREE.WebGLRenderer: " + Re.message)
        }
        var Le, Ie, Oe, Be, De, Ne, Ue, ke, ze, Ge, Xe, Ze, Je, Qe, Ke, et, tt, nt;
        n();
        var it = new gt(K);
        this.vr = it;
        var rt = new oe(K, ke, Ie.maxTextureSize);
        this.shadowMap = rt, this.getContext = function() {
            return Ae
        }, this.getContextAttributes = function() {
            return Ae.getContextAttributes()
        }, this.forceContextLoss = function() {
            var e = Le.get("WEBGL_lose_context");
            e && e.loseContext()
        }, this.forceContextRestore = function() {
            var e = Le.get("WEBGL_lose_context");
            e && e.restoreContext()
        }, this.getPixelRatio = function() {
            return ve
        }, this.setPixelRatio = function(e) {
            void 0 !== e && (ve = e, this.setSize(fe, me, !1))
        }, this.getSize = function() {
            return {
                width: fe,
                height: me
            }
        }, this.setSize = function(e, t, n) {
            var i = it.getDevice();
            return i && i.isPresenting ? void console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (fe = e, me = t, N.width = e * ve, N.height = t * ve, n !== !1 && (N.style.width = e + "px", N.style.height = t + "px"), void this.setViewport(0, 0, e, t))
        }, this.getDrawingBufferSize = function() {
            return {
                width: fe * ve,
                height: me * ve
            }
        }, this.setDrawingBufferSize = function(e, t, n) {
            fe = e, me = t, ve = n, N.width = e * n, N.height = t * n, this.setViewport(0, 0, e, t)
        }, this.setViewport = function(e, t, n, i) {
            ge.set(e, me - t - i, n, i), Oe.viewport(ue.copy(ge).multiplyScalar(ve))
        }, this.setScissor = function(e, t, n, i) {
            ye.set(e, me - t - i, n, i), Oe.scissor(he.copy(ye).multiplyScalar(ve))
        }, this.setScissorTest = function(e) {
            Oe.setScissorTest(xe = e)
        }, this.getClearColor = function() {
            return Ze.getClearColor()
        }, this.setClearColor = function() {
            Ze.setClearColor.apply(Ze, arguments)
        }, this.getClearAlpha = function() {
            return Ze.getClearAlpha()
        }, this.setClearAlpha = function() {
            Ze.setClearAlpha.apply(Ze, arguments)
        }, this.clear = function(e, t, n) {
            var i = 0;
            (void 0 === e || e) && (i |= Ae.COLOR_BUFFER_BIT), (void 0 === t || t) && (i |= Ae.DEPTH_BUFFER_BIT), (void 0 === n || n) && (i |= Ae.STENCIL_BUFFER_BIT), Ae.clear(i)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function(e, t, n, i) {
            this.setRenderTarget(e), this.clear(t, n, i)
        }, this.dispose = function() {
            N.removeEventListener("webglcontextlost", r, !1), N.removeEventListener("webglcontextrestored", a, !1), Xe.dispose(), it.dispose()
        }, this.renderBufferImmediate = function(e, t, n) {
            Oe.initAttributes();
            var i = Be.get(e);
            e.hasPositions && !i.position && (i.position = Ae.createBuffer()), e.hasNormals && !i.normal && (i.normal = Ae.createBuffer()), e.hasUvs && !i.uv && (i.uv = Ae.createBuffer()), e.hasColors && !i.color && (i.color = Ae.createBuffer());
            var r = t.getAttributes();
            if (e.hasPositions && (Ae.bindBuffer(Ae.ARRAY_BUFFER, i.position), Ae.bufferData(Ae.ARRAY_BUFFER, e.positionArray, Ae.DYNAMIC_DRAW), Oe.enableAttribute(r.position), Ae.vertexAttribPointer(r.position, 3, Ae.FLOAT, !1, 0, 0)), e.hasNormals) {
                if (Ae.bindBuffer(Ae.ARRAY_BUFFER, i.normal), !n.isMeshPhongMaterial && !n.isMeshStandardMaterial && !n.isMeshNormalMaterial && n.flatShading === !0)
                    for (var o = 0, a = 3 * e.count; a > o; o += 9) {
                        var s = e.normalArray,
                            c = (s[o + 0] + s[o + 3] + s[o + 6]) / 3,
                            l = (s[o + 1] + s[o + 4] + s[o + 7]) / 3,
                            u = (s[o + 2] + s[o + 5] + s[o + 8]) / 3;
                        s[o + 0] = c, s[o + 1] = l, s[o + 2] = u, s[o + 3] = c, s[o + 4] = l, s[o + 5] = u, s[o + 6] = c, s[o + 7] = l, s[o + 8] = u
                    }
                Ae.bufferData(Ae.ARRAY_BUFFER, e.normalArray, Ae.DYNAMIC_DRAW), Oe.enableAttribute(r.normal), Ae.vertexAttribPointer(r.normal, 3, Ae.FLOAT, !1, 0, 0)
            }
            e.hasUvs && n.map && (Ae.bindBuffer(Ae.ARRAY_BUFFER, i.uv), Ae.bufferData(Ae.ARRAY_BUFFER, e.uvArray, Ae.DYNAMIC_DRAW), Oe.enableAttribute(r.uv), Ae.vertexAttribPointer(r.uv, 2, Ae.FLOAT, !1, 0, 0)), e.hasColors && n.vertexColors !== ra && (Ae.bindBuffer(Ae.ARRAY_BUFFER, i.color), Ae.bufferData(Ae.ARRAY_BUFFER, e.colorArray, Ae.DYNAMIC_DRAW), Oe.enableAttribute(r.color), Ae.vertexAttribPointer(r.color, 3, Ae.FLOAT, !1, 0, 0)), Oe.disableUnusedAttributes(), Ae.drawArrays(Ae.TRIANGLES, 0, e.count), e.count = 0
        }, this.renderBufferDirect = function(e, n, i, r, o, a) {
            var s = o.isMesh && o.matrixWorld.determinant() < 0;
            Oe.setMaterial(r, s);
            var c = b(e, n, r, o),
                l = i.id + "_" + c.id + "_" + (r.wireframe === !0),
                u = !1;
            l !== se && (se = l, u = !0), o.morphTargetInfluences && (Je.update(o, i, r, c), u = !0);
            var h = i.index,
                p = i.attributes.position,
                f = 1;
            r.wireframe === !0 && (h = Ue.getWireframeAttribute(i), f = 2);
            var m, v = Qe;
            null !== h && (m = Ne.get(h), v = Ke, v.setIndex(m)), u && (d(r, c, i), null !== h && Ae.bindBuffer(Ae.ELEMENT_ARRAY_BUFFER, m.buffer));
            var g = 0;
            null !== h ? g = h.count : void 0 !== p && (g = p.count);
            var y = i.drawRange.start * f,
                x = i.drawRange.count * f,
                w = null !== a ? a.start * f : 0,
                _ = null !== a ? a.count * f : 1 / 0,
                M = Math.max(y, w),
                T = Math.min(g, y + x, w + _) - 1,
                E = Math.max(0, T - M + 1);
            if (0 !== E) {
                if (o.isMesh)
                    if (r.wireframe === !0) Oe.setLineWidth(r.wireframeLinewidth * t()), v.setMode(Ae.LINES);
                    else switch (o.drawMode) {
                        case Ws:
                            v.setMode(Ae.TRIANGLES);
                            break;
                        case Xs:
                            v.setMode(Ae.TRIANGLE_STRIP);
                            break;
                        case qs:
                            v.setMode(Ae.TRIANGLE_FAN)
                    } else if (o.isLine) {
                        var S = r.linewidth;
                        void 0 === S && (S = 1), Oe.setLineWidth(S * t()), o.isLineSegments ? v.setMode(Ae.LINES) : o.isLineLoop ? v.setMode(Ae.LINE_LOOP) : v.setMode(Ae.LINE_STRIP)
                    } else o.isPoints && v.setMode(Ae.POINTS);
                i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && v.renderInstances(i, M, E) : v.render(M, E)
            }
        }, this.compile = function(e, t) {
            $.length = 0, X.length = 0, e.traverse(function(e) {
                e.isLight && ($.push(e), e.castShadow && X.push(e))
            }), ze.setup($, X, t), e.traverse(function(t) {
                if (t.material)
                    if (Array.isArray(t.material))
                        for (var n = 0; n < t.material.length; n++) x(t.material[n], e.fog, t);
                    else x(t.material, e.fog, t)
            })
        };
        var ot = !1,
            at = null;
        this.animate = function(e) {
            at = e, f()
        }, this.render = function(e, t, n, i) {
            if (!t || !t.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!ee) {
                se = "", ie = -1, ce = null, e.autoUpdate === !0 && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), it.enabled && (t = it.getCamera(t)), Te.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), be.setFromMatrix(Te), $.length = 0, X.length = 0, Z.length = 0, Q.length = 0, Me = this.localClippingEnabled, _e = we.init(this.clippingPlanes, Me, t), q = Xe.get(e, t), q.init(), v(e, t, K.sortObjects), K.sortObjects === !0 && q.sort(), De.updateVideoTextures(), _e && we.beginShadows(), rt.render(X, e, t), ze.setup($, X, t), _e && we.endShadows(), Ce.frame++, Ce.calls = 0, Ce.vertices = 0, Ce.faces = 0, Ce.points = 0, void 0 === n && (n = null), this.setRenderTarget(n), Ze.render(q, e, t, i);
                var r = q.opaque,
                    o = q.transparent;
                if (e.overrideMaterial) {
                    var a = e.overrideMaterial;
                    r.length && g(r, e, t, a), o.length && g(o, e, t, a)
                } else r.length && g(r, e, t), o.length && g(o, e, t);
                tt.render(Z, e, t), et.render(Q, e, t, ue), n && De.updateRenderTargetMipmap(n), Oe.buffers.depth.setTest(!0), Oe.buffers.depth.setMask(!0), Oe.buffers.color.setMask(!0), Oe.setPolygonOffset(!1), it.enabled && it.submitFrame()
            }
        }, this.setFaceCulling = function(e, t) {
            Oe.setCullFace(e), Oe.setFlipSided(t === qo)
        }, this.allocTextureUnit = D, this.setTexture2D = function() {
            var e = !1;
            return function(t, n) {
                t && t.isWebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), De.setTexture2D(t, n)
            }
        }(), this.setTexture = function() {
            var e = !1;
            return function(t, n) {
                e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), De.setTexture2D(t, n)
            }
        }(), this.setTextureCube = function() {
            var e = !1;
            return function(t, n) {
                t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? De.setTextureCube(t, n) : De.setTextureCubeDynamic(t, n)
            }
        }(), this.getRenderTarget = function() {
            return te
        }, this.setRenderTarget = function(e) {
            te = e, e && void 0 === Be.get(e).__webglFramebuffer && De.setupRenderTarget(e);
            var t = null,
                n = !1;
            if (e) {
                var i = Be.get(e).__webglFramebuffer;
                e.isWebGLRenderTargetCube ? (t = i[e.activeCubeFace], n = !0) : t = i, ue.copy(e.viewport), he.copy(e.scissor), pe = e.scissorTest
            } else ue.copy(ge).multiplyScalar(ve), he.copy(ye).multiplyScalar(ve), pe = xe;
            if (ne !== t && (Ae.bindFramebuffer(Ae.FRAMEBUFFER, t), ne = t), Oe.viewport(ue), Oe.scissor(he), Oe.setScissorTest(pe), n) {
                var r = Be.get(e.texture);
                Ae.framebufferTexture2D(Ae.FRAMEBUFFER, Ae.COLOR_ATTACHMENT0, Ae.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, r.__webglTexture, e.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function(e, t, n, i, r, o) {
            if (!e || !e.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            var a = Be.get(e).__webglFramebuffer;
            if (a) {
                var s = !1;
                a !== ne && (Ae.bindFramebuffer(Ae.FRAMEBUFFER, a), s = !0);
                try {
                    var c = e.texture,
                        l = c.format,
                        u = c.type;
                    if (l !== _s && nt.convert(l) !== Ae.getParameter(Ae.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(u === cs || nt.convert(u) === Ae.getParameter(Ae.IMPLEMENTATION_COLOR_READ_TYPE) || u === fs && (Le.get("OES_texture_float") || Le.get("WEBGL_color_buffer_float")) || u === ms && Le.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    Ae.checkFramebufferStatus(Ae.FRAMEBUFFER) === Ae.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && Ae.readPixels(t, n, i, r, nt.convert(l), nt.convert(u), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    s && Ae.bindFramebuffer(Ae.FRAMEBUFFER, ne)
                }
            }
        }
    }

    function _t(e, t) {
        this.name = "", this.color = new X(e), this.density = void 0 !== t ? t : 25e-5
    }

    function Mt(e, t, n) {
        this.name = "", this.color = new X(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== n ? n : 1e3
    }

    function Tt() {
        le.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function Et(e, t, n, i, r) {
        le.call(this), this.lensFlares = [], this.positionScreen = new o, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, n, i, r)
    }

    function St(e) {
        Q.call(this), this.type = "SpriteMaterial", this.color = new X(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(e)
    }

    function Ct(e) {
        le.call(this), this.type = "Sprite", this.material = void 0 !== e ? e : new St
    }

    function At() {
        le.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function Pt(e, t) {
        if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses();
        else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
            for (var n = 0, r = this.bones.length; r > n; n++) this.boneInverses.push(new i)
        }
    }

    function Rt() {
        le.call(this), this.type = "Bone"
    }

    function Lt(e, t) {
        Ne.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new i, this.bindMatrixInverse = new i;
        var n = this.initBones(),
            r = new Pt(n);
        this.bind(r, this.matrixWorld), this.normalizeSkinWeights()
    }

    function It(e) {
        Q.call(this), this.type = "LineBasicMaterial", this.color = new X(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(e)
    }

    function Ot(e, t, n) {
        return 1 === n ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new Bt(e, t)) : (le.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new Se, void(this.material = void 0 !== t ? t : new It({
            color: 16777215 * Math.random()
        })))
    }

    function Bt(e, t) {
        Ot.call(this, e, t), this.type = "LineSegments"
    }

    function Dt(e, t) {
        Ot.call(this, e, t), this.type = "LineLoop"
    }

    function Nt(e) {
        Q.call(this), this.type = "PointsMaterial", this.color = new X(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(e)
    }

    function Ft(e, t) {
        le.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new Se, this.material = void 0 !== t ? t : new Nt({
            color: 16777215 * Math.random()
        })
    }

    function Ut() {
        le.call(this), this.type = "Group"
    }

    function kt(e, t, n, i, r, o, a, c, l) {
        function u() {
            e.removeEventListener("loadeddata", u, !1), h.needsUpdate = !0
        }
        s.call(this, e, t, n, i, r, o, a, c, l), this.generateMipmaps = !1;
        var h = this;
        e.addEventListener("loadeddata", u, !1)
    }

    function zt(e, t, n, i, r, o, a, c, l, u, h, p) {
        s.call(this, null, o, a, c, l, u, i, r, h, p), this.image = {
            width: t,
            height: n
        }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
    }

    function Ht(e, t, n, i, r, o, a, c, l, u) {
        if (u = void 0 !== u ? u : Ss, u !== Ss && u !== Cs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && u === Ss && (n = hs), void 0 === n && u === Cs && (n = xs), s.call(this, null, i, r, o, a, c, u, n, l), this.image = {
            width: e,
            height: t
        }, this.magFilter = void 0 !== a ? a : ns, this.minFilter = void 0 !== c ? c : ns, this.flipY = !1, this.generateMipmaps = !1
    }

    function Gt(e) {
        Se.call(this), this.type = "WireframeGeometry";
        var t, n, i, r, a, s, c, l, u, h, p = [],
            d = [0, 0],
            f = {},
            m = ["a", "b", "c"];
        if (e && e.isGeometry) {
            var v = e.faces;
            for (t = 0, i = v.length; i > t; t++) {
                var g = v[t];
                for (n = 0; 3 > n; n++) c = g[m[n]], l = g[m[(n + 1) % 3]], d[0] = Math.min(c, l), d[1] = Math.max(c, l), u = d[0] + "," + d[1], void 0 === f[u] && (f[u] = {
                    index1: d[0],
                    index2: d[1]
                })
            }
            for (u in f) s = f[u], h = e.vertices[s.index1], p.push(h.x, h.y, h.z), h = e.vertices[s.index2], p.push(h.x, h.y, h.z)
        } else if (e && e.isBufferGeometry) {
            var y, x, b, w, _, M, T, E;
            if (h = new o, null !== e.index) {
                for (y = e.attributes.position, x = e.index, b = e.groups, 0 === b.length && (b = [{
                        start: 0,
                        count: x.count,
                        materialIndex: 0
                    }]), r = 0, a = b.length; a > r; ++r)
                    for (w = b[r], _ = w.start, M = w.count, t = _, i = _ + M; i > t; t += 3)
                        for (n = 0; 3 > n; n++) c = x.getX(t + n), l = x.getX(t + (n + 1) % 3), d[0] = Math.min(c, l), d[1] = Math.max(c, l), u = d[0] + "," + d[1], void 0 === f[u] && (f[u] = {
                            index1: d[0],
                            index2: d[1]
                        });
                for (u in f) s = f[u], h.fromBufferAttribute(y, s.index1), p.push(h.x, h.y, h.z), h.fromBufferAttribute(y, s.index2), p.push(h.x, h.y, h.z)
            } else
                for (y = e.attributes.position, t = 0, i = y.count / 3; i > t; t++)
                    for (n = 0; 3 > n; n++) T = 3 * t + n, h.fromBufferAttribute(y, T), p.push(h.x, h.y, h.z), E = 3 * t + (n + 1) % 3, h.fromBufferAttribute(y, E), p.push(h.x, h.y, h.z)
        }
        this.addAttribute("position", new _e(p, 3))
    }

    function Vt(e, t, n) {
        de.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: e,
            slices: t,
            stacks: n
        }, this.fromBufferGeometry(new jt(e, t, n)), this.mergeVertices()
    }

    function jt(e, t, n) {
        Se.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: e,
            slices: t,
            stacks: n
        };
        var i, r, a = [],
            s = [],
            c = [],
            l = [],
            u = 1e-5,
            h = new o,
            p = new o,
            d = new o,
            f = new o,
            m = new o,
            v = t + 1;
        for (i = 0; n >= i; i++) {
            var g = i / n;
            for (r = 0; t >= r; r++) {
                var y = r / t;
                p = e(y, g, p), s.push(p.x, p.y, p.z), y - u >= 0 ? (d = e(y - u, g, d), f.subVectors(p, d)) : (d = e(y + u, g, d), f.subVectors(d, p)), g - u >= 0 ? (d = e(y, g - u, d), m.subVectors(p, d)) : (d = e(y, g + u, d), m.subVectors(d, p)), h.crossVectors(f, m).normalize(), c.push(h.x, h.y, h.z), l.push(y, g)
            }
        }
        for (i = 0; n > i; i++)
            for (r = 0; t > r; r++) {
                var x = i * v + r,
                    b = i * v + r + 1,
                    w = (i + 1) * v + r + 1,
                    _ = (i + 1) * v + r;
                a.push(x, b, _), a.push(b, w, _)
            }
        this.setIndex(a), this.addAttribute("position", new _e(s, 3)), this.addAttribute("normal", new _e(c, 3)), this.addAttribute("uv", new _e(l, 2))
    }

    function $t(e, t, n, i) {
        de.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: n,
            detail: i
        }, this.fromBufferGeometry(new Wt(e, t, n, i)), this.mergeVertices()
    }

    function Wt(e, t, i, r) {
        function a(e) {
            for (var n = new o, i = new o, r = new o, a = 0; a < t.length; a += 3) p(t[a + 0], n), p(t[a + 1], i), p(t[a + 2], r), s(n, i, r, e)
        }

        function s(e, t, n, i) {
            var r, o, a = Math.pow(2, i),
                s = [];
            for (r = 0; a >= r; r++) {
                s[r] = [];
                var c = e.clone().lerp(n, r / a),
                    l = t.clone().lerp(n, r / a),
                    u = a - r;
                for (o = 0; u >= o; o++) 0 === o && r === a ? s[r][o] = c : s[r][o] = c.clone().lerp(l, o / u)
            }
            for (r = 0; a > r; r++)
                for (o = 0; 2 * (a - r) - 1 > o; o++) {
                    var p = Math.floor(o / 2);
                    o % 2 === 0 ? (h(s[r][p + 1]), h(s[r + 1][p]), h(s[r][p])) : (h(s[r][p + 1]), h(s[r + 1][p + 1]), h(s[r + 1][p]))
                }
        }

        function c(e) {
            for (var t = new o, n = 0; n < g.length; n += 3) t.x = g[n + 0], t.y = g[n + 1], t.z = g[n + 2], t.normalize().multiplyScalar(e), g[n + 0] = t.x, g[n + 1] = t.y, g[n + 2] = t.z
        }

        function l() {
            for (var e = new o, t = 0; t < g.length; t += 3) {
                e.x = g[t + 0], e.y = g[t + 1], e.z = g[t + 2];
                var n = m(e) / 2 / Math.PI + .5,
                    i = v(e) / Math.PI + .5;
                y.push(n, 1 - i)
            }
            d(), u()
        }

        function u() {
            for (var e = 0; e < y.length; e += 6) {
                var t = y[e + 0],
                    n = y[e + 2],
                    i = y[e + 4],
                    r = Math.max(t, n, i),
                    o = Math.min(t, n, i);
                r > .9 && .1 > o && (.2 > t && (y[e + 0] += 1), .2 > n && (y[e + 2] += 1), .2 > i && (y[e + 4] += 1))
            }
        }

        function h(e) {
            g.push(e.x, e.y, e.z)
        }

        function p(t, n) {
            var i = 3 * t;
            n.x = e[i + 0], n.y = e[i + 1], n.z = e[i + 2]
        }

        function d() {
            for (var e = new o, t = new o, i = new o, r = new o, a = new n, s = new n, c = new n, l = 0, u = 0; l < g.length; l += 9, u += 6) {
                e.set(g[l + 0], g[l + 1], g[l + 2]), t.set(g[l + 3], g[l + 4], g[l + 5]), i.set(g[l + 6], g[l + 7], g[l + 8]), a.set(y[u + 0], y[u + 1]), s.set(y[u + 2], y[u + 3]), c.set(y[u + 4], y[u + 5]), r.copy(e).add(t).add(i).divideScalar(3);
                var h = m(r);
                f(a, u + 0, e, h), f(s, u + 2, t, h), f(c, u + 4, i, h)
            }
        }

        function f(e, t, n, i) {
            0 > i && 1 === e.x && (y[t] = e.x - 1), 0 === n.x && 0 === n.z && (y[t] = i / 2 / Math.PI + .5)
        }

        function m(e) {
            return Math.atan2(e.z, -e.x)
        }

        function v(e) {
            return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
        }
        Se.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: e,
            indices: t,
            radius: i,
            detail: r
        }, i = i || 1, r = r || 0;
        var g = [],
            y = [];
        a(r), c(i), l(), this.addAttribute("position", new _e(g, 3)), this.addAttribute("normal", new _e(g.slice(), 3)), this.addAttribute("uv", new _e(y, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function Xt(e, t) {
        de.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new qt(e, t)), this.mergeVertices()
    }

    function qt(e, t) {
        var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
            i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        Wt.call(this, n, i, e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function Yt(e, t) {
        de.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new Zt(e, t)), this.mergeVertices()
    }

    function Zt(e, t) {
        var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
            i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        Wt.call(this, n, i, e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function Jt(e, t) {
        de.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new Qt(e, t)), this.mergeVertices()
    }

    function Qt(e, t) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
            r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        Wt.call(this, i, r, e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function Kt(e, t) {
        de.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: e,
            detail: t
        }, this.fromBufferGeometry(new en(e, t)), this.mergeVertices()
    }

    function en(e, t) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = 1 / n,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i],
            o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        Wt.call(this, r, o, e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: e,
            detail: t
        }
    }

    function tn(e, t, n, i, r, o) {
        de.call(this), this.type = "TubeGeometry", this.parameters = {
            path: e,
            tubularSegments: t,
            radius: n,
            radialSegments: i,
            closed: r
        }, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed.");
        var a = new nn(e, t, n, i, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices()
    }

    function nn(e, t, i, r, a) {
        function s() {
            for (p = 0; t > p; p++) c(p);
            c(a === !1 ? t : 0), u(), l()
        }

        function c(n) {
            g = e.getPointAt(n / t, g);
            var o = h.normals[n],
                a = h.binormals[n];
            for (d = 0; r >= d; d++) {
                var s = d / r * Math.PI * 2,
                    c = Math.sin(s),
                    l = -Math.cos(s);
                m.x = l * o.x + c * a.x, m.y = l * o.y + c * a.y, m.z = l * o.z + c * a.z, m.normalize(), x.push(m.x, m.y, m.z), f.x = g.x + i * m.x, f.y = g.y + i * m.y, f.z = g.z + i * m.z, y.push(f.x, f.y, f.z)
            }
        }

        function l() {
            for (d = 1; t >= d; d++)
                for (p = 1; r >= p; p++) {
                    var e = (r + 1) * (d - 1) + (p - 1),
                        n = (r + 1) * d + (p - 1),
                        i = (r + 1) * d + p,
                        o = (r + 1) * (d - 1) + p;
                    w.push(e, n, o), w.push(n, i, o)
                }
        }

        function u() {
            for (p = 0; t >= p; p++)
                for (d = 0; r >= d; d++) v.x = p / t, v.y = d / r, b.push(v.x, v.y)
        }
        Se.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: e,
            tubularSegments: t,
            radius: i,
            radialSegments: r,
            closed: a
        }, t = t || 64, i = i || 1, r = r || 8, a = a || !1;
        var h = e.computeFrenetFrames(t, a);
        this.tangents = h.tangents, this.normals = h.normals, this.binormals = h.binormals;
        var p, d, f = new o,
            m = new o,
            v = new n,
            g = new o,
            y = [],
            x = [],
            b = [],
            w = [];
        s(), this.setIndex(w), this.addAttribute("position", new _e(y, 3)), this.addAttribute("normal", new _e(x, 3)), this.addAttribute("uv", new _e(b, 2))
    }

    function rn(e, t, n, i, r, o, a) {
        de.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: o
        }, void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new on(e, t, n, i, r, o)), this.mergeVertices()
    }

    function on(e, t, n, i, r, a) {
        function s(e, t, n, i, r) {
            var o = Math.cos(e),
                a = Math.sin(e),
                s = n / t * e,
                c = Math.cos(s);
            r.x = i * (2 + c) * .5 * o, r.y = i * (2 + c) * a * .5, r.z = i * Math.sin(s) * .5
        }
        Se.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: a
        }, e = e || 1, t = t || .4, n = Math.floor(n) || 64, i = Math.floor(i) || 8, r = r || 2, a = a || 3;
        var c, l, u = [],
            h = [],
            p = [],
            d = [],
            f = new o,
            m = new o,
            v = new o,
            g = new o,
            y = new o,
            x = new o,
            b = new o;
        for (c = 0; n >= c; ++c) {
            var w = c / n * r * Math.PI * 2;
            for (s(w, r, a, e, v), s(w + .01, r, a, e, g), x.subVectors(g, v), b.addVectors(g, v), y.crossVectors(x, b), b.crossVectors(y, x), y.normalize(), b.normalize(), l = 0; i >= l; ++l) {
                var _ = l / i * Math.PI * 2,
                    M = -t * Math.cos(_),
                    T = t * Math.sin(_);
                f.x = v.x + (M * b.x + T * y.x), f.y = v.y + (M * b.y + T * y.y), f.z = v.z + (M * b.z + T * y.z), h.push(f.x, f.y, f.z), m.subVectors(f, v).normalize(), p.push(m.x, m.y, m.z), d.push(c / n), d.push(l / i)
            }
        }
        for (l = 1; n >= l; l++)
            for (c = 1; i >= c; c++) {
                var E = (i + 1) * (l - 1) + (c - 1),
                    S = (i + 1) * l + (c - 1),
                    C = (i + 1) * l + c,
                    A = (i + 1) * (l - 1) + c;
                u.push(E, S, A), u.push(S, C, A)
            }
        this.setIndex(u), this.addAttribute("position", new _e(h, 3)), this.addAttribute("normal", new _e(p, 3)), this.addAttribute("uv", new _e(d, 2))
    }

    function an(e, t, n, i, r) {
        de.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, this.fromBufferGeometry(new sn(e, t, n, i, r)), this.mergeVertices()
    }

    function sn(e, t, n, i, r) {
        Se.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, e = e || 1, t = t || .4, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
        var a, s, c = [],
            l = [],
            u = [],
            h = [],
            p = new o,
            d = new o,
            f = new o;
        for (a = 0; n >= a; a++)
            for (s = 0; i >= s; s++) {
                var m = s / i * r,
                    v = a / n * Math.PI * 2;
                d.x = (e + t * Math.cos(v)) * Math.cos(m), d.y = (e + t * Math.cos(v)) * Math.sin(m), d.z = t * Math.sin(v), l.push(d.x, d.y, d.z), p.x = e * Math.cos(m), p.y = e * Math.sin(m), f.subVectors(d, p).normalize(), u.push(f.x, f.y, f.z), h.push(s / i), h.push(a / n)
            }
        for (a = 1; n >= a; a++)
            for (s = 1; i >= s; s++) {
                var g = (i + 1) * a + s - 1,
                    y = (i + 1) * (a - 1) + s - 1,
                    x = (i + 1) * (a - 1) + s,
                    b = (i + 1) * a + s;
                c.push(g, y, b), c.push(y, x, b)
            }
        this.setIndex(c), this.addAttribute("position", new _e(l, 3)), this.addAttribute("normal", new _e(u, 3)), this.addAttribute("uv", new _e(h, 2))
    }

    function cn(e, t, n, i, r) {
        var o, a;
        if (r === Dn(e, t, n, i) > 0)
            for (o = t; n > o; o += i) a = In(o, e[o], e[o + 1], a);
        else
            for (o = n - i; o >= t; o -= i) a = In(o, e[o], e[o + 1], a);
        return a && Sn(a, a.next) && (On(a), a = a.next), a
    }

    function ln(e, t) {
        if (!e) return e;
        t || (t = e);
        var n, i = e;
        do
            if (n = !1, i.steiner || !Sn(i, i.next) && 0 !== En(i.prev, i, i.next)) i = i.next;
            else {
                if (On(i), i = t = i.prev, i === i.next) break;
                n = !0
            } while (n || i !== t);
        return t
    }

    function un(e, t, n, i, r, o, a) {
        if (e) {
            !a && o && xn(e, i, r, o);
            for (var s, c, l = e; e.prev !== e.next;)
                if (s = e.prev, c = e.next, o ? pn(e, i, r, o) : hn(e)) t.push(s.i / n), t.push(e.i / n), t.push(c.i / n), On(e), e = c.next, l = c.next;
                else if (e = c, e === l) {
                a ? 1 === a ? (e = dn(e, t, n), un(e, t, n, i, r, o, 2)) : 2 === a && fn(e, t, n, i, r, o) : un(ln(e), t, n, i, r, o, 1);
                break
            }
        }
    }

    function hn(e) {
        var t = e.prev,
            n = e,
            i = e.next;
        if (En(t, n, i) >= 0) return !1;
        for (var r = e.next.next; r !== e.prev;) {
            if (Mn(t.x, t.y, n.x, n.y, i.x, i.y, r.x, r.y) && En(r.prev, r, r.next) >= 0) return !1;
            r = r.next
        }
        return !0
    }

    function pn(e, t, n, i) {
        var r = e.prev,
            o = e,
            a = e.next;
        if (En(r, o, a) >= 0) return !1;
        for (var s = r.x < o.x ? r.x < a.x ? r.x : a.x : o.x < a.x ? o.x : a.x, c = r.y < o.y ? r.y < a.y ? r.y : a.y : o.y < a.y ? o.y : a.y, l = r.x > o.x ? r.x > a.x ? r.x : a.x : o.x > a.x ? o.x : a.x, u = r.y > o.y ? r.y > a.y ? r.y : a.y : o.y > a.y ? o.y : a.y, h = wn(s, c, t, n, i), p = wn(l, u, t, n, i), d = e.nextZ; d && d.z <= p;) {
            if (d !== e.prev && d !== e.next && Mn(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) && En(d.prev, d, d.next) >= 0) return !1;
            d = d.nextZ
        }
        for (d = e.prevZ; d && d.z >= h;) {
            if (d !== e.prev && d !== e.next && Mn(r.x, r.y, o.x, o.y, a.x, a.y, d.x, d.y) && En(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        return !0
    }

    function dn(e, t, n) {
        var i = e;
        do {
            var r = i.prev,
                o = i.next.next;
            !Sn(r, o) && Cn(r, i, i.next, o) && Pn(r, o) && Pn(o, r) && (t.push(r.i / n), t.push(i.i / n), t.push(o.i / n), On(i), On(i.next), i = e = o), i = i.next
        } while (i !== e);
        return i
    }

    function fn(e, t, n, i, r, o) {
        var a = e;
        do {
            for (var s = a.next.next; s !== a.prev;) {
                if (a.i !== s.i && Tn(a, s)) {
                    var c = Ln(a, s);
                    return a = ln(a, a.next), c = ln(c, c.next), un(a, t, n, i, r, o), void un(c, t, n, i, r, o)
                }
                s = s.next
            }
            a = a.next
        } while (a !== e)
    }

    function mn(e, t, n, i) {
        var r, o, a, s, c, l = [];
        for (r = 0, o = t.length; o > r; r++) a = t[r] * i, s = o - 1 > r ? t[r + 1] * i : e.length, c = cn(e, a, s, i, !1), c === c.next && (c.steiner = !0), l.push(_n(c));
        for (l.sort(vn), r = 0; r < l.length; r++) gn(l[r], n), n = ln(n, n.next);
        return n
    }

    function vn(e, t) {
        return e.x - t.x
    }

    function gn(e, t) {
        if (t = yn(e, t)) {
            var n = Ln(t, e);
            ln(n, n.next)
        }
    }

    function yn(e, t) {
        var n, i = t,
            r = e.x,
            o = e.y,
            a = -(1 / 0);
        do {
            if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                var s = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                if (r >= s && s > a) {
                    if (a = s, s === r) {
                        if (o === i.y) return i;
                        if (o === i.next.y) return i.next
                    }
                    n = i.x < i.next.x ? i : i.next
                }
            }
            i = i.next
        } while (i !== t);
        if (!n) return null;
        if (r === a) return n.prev;
        var c, l = n,
            u = n.x,
            h = n.y,
            p = 1 / 0;
        for (i = n.next; i !== l;) r >= i.x && i.x >= u && r !== i.x && Mn(h > o ? r : a, o, u, h, h > o ? a : r, o, i.x, i.y) && (c = Math.abs(o - i.y) / (r - i.x), (p > c || c === p && i.x > n.x) && Pn(i, e) && (n = i, p = c)), i = i.next;
        return n
    }

    function xn(e, t, n, i) {
        var r = e;
        do null === r.z && (r.z = wn(r.x, r.y, t, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== e);
        r.prevZ.nextZ = null, r.prevZ = null, bn(r)
    }

    function bn(e) {
        var t, n, i, r, o, a, s, c, l = 1;
        do {
            for (n = e, e = null, o = null, a = 0; n;) {
                for (a++, i = n, s = 0, t = 0; l > t && (s++, i = i.nextZ, i); t++);
                for (c = l; s > 0 || c > 0 && i;) 0 !== s && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, s--) : (r = i, i = i.nextZ, c--), o ? o.nextZ = r : e = r, r.prevZ = o, o = r;
                n = i
            }
            o.nextZ = null, l *= 2
        } while (a > 1);
        return e
    }

    function wn(e, t, n, i, r) {
        return e = 32767 * (e - n) * r, t = 32767 * (t - i) * r, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e | t << 1
    }

    function _n(e) {
        var t = e,
            n = e;
        do t.x < n.x && (n = t), t = t.next; while (t !== e);
        return n
    }

    function Mn(e, t, n, i, r, o, a, s) {
        return (r - a) * (t - s) - (e - a) * (o - s) >= 0 && (e - a) * (i - s) - (n - a) * (t - s) >= 0 && (n - a) * (o - s) - (r - a) * (i - s) >= 0
    }

    function Tn(e, t) {
        return e.next.i !== t.i && e.prev.i !== t.i && !An(e, t) && Pn(e, t) && Pn(t, e) && Rn(e, t)
    }

    function En(e, t, n) {
        return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
    }

    function Sn(e, t) {
        return e.x === t.x && e.y === t.y
    }

    function Cn(e, t, n, i) {
        return Sn(e, t) && Sn(n, i) || Sn(e, i) && Sn(n, t) ? !0 : En(e, t, n) > 0 != En(e, t, i) > 0 && En(n, i, e) > 0 != En(n, i, t) > 0
    }

    function An(e, t) {
        var n = e;
        do {
            if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Cn(n, n.next, e, t)) return !0;
            n = n.next
        } while (n !== e);
        return !1
    }

    function Pn(e, t) {
        return En(e.prev, e, e.next) < 0 ? En(e, t, e.next) >= 0 && En(e, e.prev, t) >= 0 : En(e, t, e.prev) < 0 || En(e, e.next, t) < 0
    }

    function Rn(e, t) {
        var n = e,
            i = !1,
            r = (e.x + t.x) / 2,
            o = (e.y + t.y) / 2;
        do n.y > o != n.next.y > o && n.next.y !== n.y && r < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next; while (n !== e);
        return i
    }

    function Ln(e, t) {
        var n = new Bn(e.i, e.x, e.y),
            i = new Bn(t.i, t.x, t.y),
            r = e.next,
            o = t.prev;
        return e.next = t, t.prev = e, n.next = r, r.prev = n, i.next = n, n.prev = i, o.next = i, i.prev = o, i
    }

    function In(e, t, n, i) {
        var r = new Bn(e, t, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
    }

    function On(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
    }

    function Bn(e, t, n) {
        this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function Dn(e, t, n, i) {
        for (var r = 0, o = t, a = n - i; n > o; o += i) r += (e[a] - e[o]) * (e[o + 1] + e[a + 1]), a = o;
        return r
    }

    function Nn(e, t) {
        de.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e,
            options: t
        }, this.fromBufferGeometry(new Fn(e, t)), this.mergeVertices()
    }

    function Fn(e, t) {
        "undefined" != typeof e && (Se.call(this), this.type = "ExtrudeBufferGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), this.computeVertexNormals())
    }

    function Un(e, t) {
        de.call(this), this.type = "TextGeometry", this.parameters = {
            text: e,
            parameters: t
        }, this.fromBufferGeometry(new kn(e, t)), this.mergeVertices()
    }

    function kn(e, t) {
        t = t || {};
        var n = t.font;
        if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new de;
        var i = n.generateShapes(e, t.size, t.curveSegments);
        t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), Fn.call(this, i, t), this.type = "TextBufferGeometry"
    }

    function zn(e, t, n, i, r, o, a) {
        de.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        }, this.fromBufferGeometry(new Hn(e, t, n, i, r, o, a)), this.mergeVertices()
    }

    function Hn(e, t, n, i, r, a, s) {
        Se.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: s
        }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : Math.PI;
        var c, l, u = a + s,
            h = 0,
            p = [],
            d = new o,
            f = new o,
            m = [],
            v = [],
            g = [],
            y = [];
        for (l = 0; n >= l; l++) {
            var x = [],
                b = l / n;
            for (c = 0; t >= c; c++) {
                var w = c / t;
                d.x = -e * Math.cos(i + w * r) * Math.sin(a + b * s), d.y = e * Math.cos(a + b * s), d.z = e * Math.sin(i + w * r) * Math.sin(a + b * s), v.push(d.x, d.y, d.z), f.set(d.x, d.y, d.z).normalize(), g.push(f.x, f.y, f.z), y.push(w, 1 - b), x.push(h++)
            }
            p.push(x)
        }
        for (l = 0; n > l; l++)
            for (c = 0; t > c; c++) {
                var _ = p[l][c + 1],
                    M = p[l][c],
                    T = p[l + 1][c],
                    E = p[l + 1][c + 1];
                (0 !== l || a > 0) && m.push(_, M, E), (l !== n - 1 || u < Math.PI) && m.push(M, T, E)
            }
        this.setIndex(m), this.addAttribute("position", new _e(v, 3)), this.addAttribute("normal", new _e(g, 3)), this.addAttribute("uv", new _e(y, 2))
    }

    function Gn(e, t, n, i, r, o) {
        de.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: o
        }, this.fromBufferGeometry(new Vn(e, t, n, i, r, o)), this.mergeVertices()
    }

    function Vn(e, t, i, r, a, s) {
        Se.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: i,
            phiSegments: r,
            thetaStart: a,
            thetaLength: s
        }, e = e || .5, t = t || 1, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
        var c, l, u, h = [],
            p = [],
            d = [],
            f = [],
            m = e,
            v = (t - e) / r,
            g = new o,
            y = new n;
        for (l = 0; r >= l; l++) {
            for (u = 0; i >= u; u++) c = a + u / i * s, g.x = m * Math.cos(c), g.y = m * Math.sin(c), p.push(g.x, g.y, g.z), d.push(0, 0, 1), y.x = (g.x / t + 1) / 2, y.y = (g.y / t + 1) / 2, f.push(y.x, y.y);
            m += v
        }
        for (l = 0; r > l; l++) {
            var x = l * (i + 1);
            for (u = 0; i > u; u++) {
                c = u + x;
                var b = c,
                    w = c + i + 1,
                    _ = c + i + 2,
                    M = c + 1;
                h.push(b, w, M), h.push(w, _, M)
            }
        }
        this.setIndex(h), this.addAttribute("position", new _e(p, 3)), this.addAttribute("normal", new _e(d, 3)), this.addAttribute("uv", new _e(f, 2))
    }

    function jn(e, t, n, i) {
        de.call(this), this.type = "LatheGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: n,
            phiLength: i
        }, this.fromBufferGeometry(new $n(e, t, n, i)), this.mergeVertices()
    }

    function $n(e, t, i, r) {
        Se.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: e,
            segments: t,
            phiStart: i,
            phiLength: r
        }, t = Math.floor(t) || 12, i = i || 0, r = r || 2 * Math.PI, r = oc.clamp(r, 0, 2 * Math.PI);
        var a, s, c, l = [],
            u = [],
            h = [],
            p = 1 / t,
            d = new o,
            f = new n;
        for (s = 0; t >= s; s++) {
            var m = i + s * p * r,
                v = Math.sin(m),
                g = Math.cos(m);
            for (c = 0; c <= e.length - 1; c++) d.x = e[c].x * v, d.y = e[c].y, d.z = e[c].x * g, u.push(d.x, d.y, d.z), f.x = s / t, f.y = c / (e.length - 1), h.push(f.x, f.y)
        }
        for (s = 0; t > s; s++)
            for (c = 0; c < e.length - 1; c++) {
                a = c + s * e.length;
                var y = a,
                    x = a + e.length,
                    b = a + e.length + 1,
                    w = a + 1;
                l.push(y, x, w), l.push(x, b, w)
            }
        if (this.setIndex(l), this.addAttribute("position", new _e(u, 3)), this.addAttribute("uv", new _e(h, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
            var _ = this.attributes.normal.array,
                M = new o,
                T = new o,
                E = new o;
            for (a = t * e.length * 3, s = 0, c = 0; s < e.length; s++, c += 3) M.x = _[c + 0], M.y = _[c + 1], M.z = _[c + 2], T.x = _[a + c + 0], T.y = _[a + c + 1], T.z = _[a + c + 2], E.addVectors(M, T).normalize(), _[c + 0] = _[a + c + 0] = E.x, _[c + 1] = _[a + c + 1] = E.y, _[c + 2] = _[a + c + 2] = E.z
        }
    }

    function Wn(e, t) {
        de.call(this), this.type = "ShapeGeometry", "object" == typeof t && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
            shapes: e,
            curveSegments: t
        }, this.fromBufferGeometry(new Xn(e, t)), this.mergeVertices()
    }

    function Xn(e, t) {
        function n(e) {
            var n, s, l, u = r.length / 3,
                h = e.extractPoints(t),
                p = h.shape,
                d = h.holes;
            if (Su.isClockWise(p) === !1)
                for (p = p.reverse(), n = 0, s = d.length; s > n; n++) l = d[n], Su.isClockWise(l) === !0 && (d[n] = l.reverse());
            var f = Su.triangulateShape(p, d);
            for (n = 0, s = d.length; s > n; n++) l = d[n], p = p.concat(l);
            for (n = 0, s = p.length; s > n; n++) {
                var m = p[n];
                r.push(m.x, m.y, 0), o.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (n = 0, s = f.length; s > n; n++) {
                var v = f[n],
                    g = v[0] + u,
                    y = v[1] + u,
                    x = v[2] + u;
                i.push(g, y, x), c += 3
            }
        }
        Se.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: e,
            curveSegments: t
        }, t = t || 12;
        var i = [],
            r = [],
            o = [],
            a = [],
            s = 0,
            c = 0;
        if (Array.isArray(e) === !1) n(e);
        else
            for (var l = 0; l < e.length; l++) n(e[l]), this.addGroup(s, c, l), s += c, c = 0;
        this.setIndex(i), this.addAttribute("position", new _e(r, 3)), this.addAttribute("normal", new _e(o, 3)), this.addAttribute("uv", new _e(a, 2))
    }

    function qn(e, t) {
        if (t.shapes = [], Array.isArray(e))
            for (var n = 0, i = e.length; i > n; n++) {
                var r = e[n];
                t.shapes.push(r.uuid)
            } else t.shapes.push(e.uuid);
        return t
    }

    function Yn(e, t) {
        Se.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: t
        }, t = void 0 !== t ? t : 1;
        var n, i, r, o, a = [],
            s = Math.cos(oc.DEG2RAD * t),
            c = [0, 0],
            l = {},
            u = ["a", "b", "c"];
        e.isBufferGeometry ? (o = new de, o.fromBufferGeometry(e)) : o = e.clone(), o.mergeVertices(), o.computeFaceNormals();
        for (var h = o.vertices, p = o.faces, d = 0, f = p.length; f > d; d++)
            for (var m = p[d], v = 0; 3 > v; v++) n = m[u[v]], i = m[u[(v + 1) % 3]], c[0] = Math.min(n, i), c[1] = Math.max(n, i), r = c[0] + "," + c[1], void 0 === l[r] ? l[r] = {
                index1: c[0],
                index2: c[1],
                face1: d,
                face2: void 0
            } : l[r].face2 = d;
        for (r in l) {
            var g = l[r];
            if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
                var y = h[g.index1];
                a.push(y.x, y.y, y.z), y = h[g.index2], a.push(y.x, y.y, y.z)
            }
        }
        this.addAttribute("position", new _e(a, 3))
    }

    function Zn(e, t, n, i, r, o, a, s) {
        de.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: o,
            thetaStart: a,
            thetaLength: s
        }, this.fromBufferGeometry(new Jn(e, t, n, i, r, o, a, s)), this.mergeVertices()
    }

    function Jn(e, t, i, r, a, s, c, l) {
        function u() {
            var n, s, u = new o,
                h = new o,
                w = 0,
                _ = (t - e) / i;
            for (s = 0; a >= s; s++) {
                var M = [],
                    T = s / a,
                    E = T * (t - e) + e;
                for (n = 0; r >= n; n++) {
                    var S = n / r,
                        C = S * l + c,
                        A = Math.sin(C),
                        P = Math.cos(C);
                    h.x = E * A, h.y = -T * i + x, h.z = E * P, f.push(h.x, h.y, h.z), u.set(A, _, P).normalize(), m.push(u.x, u.y, u.z), v.push(S, 1 - T), M.push(g++)
                }
                y.push(M)
            }
            for (n = 0; r > n; n++)
                for (s = 0; a > s; s++) {
                    var R = y[s][n],
                        L = y[s + 1][n],
                        I = y[s + 1][n + 1],
                        O = y[s][n + 1];
                    d.push(R, L, O), d.push(L, I, O), w += 6
                }
            p.addGroup(b, w, 0), b += w
        }

        function h(i) {
            var a, s, u, h = new n,
                y = new o,
                w = 0,
                _ = i === !0 ? e : t,
                M = i === !0 ? 1 : -1;
            for (s = g, a = 1; r >= a; a++) f.push(0, x * M, 0), m.push(0, M, 0), v.push(.5, .5), g++;
            for (u = g, a = 0; r >= a; a++) {
                var T = a / r,
                    E = T * l + c,
                    S = Math.cos(E),
                    C = Math.sin(E);
                y.x = _ * C, y.y = x * M, y.z = _ * S, f.push(y.x, y.y, y.z), m.push(0, M, 0), h.x = .5 * S + .5, h.y = .5 * C * M + .5, v.push(h.x, h.y), g++
            }
            for (a = 0; r > a; a++) {
                var A = s + a,
                    P = u + a;
                i === !0 ? d.push(P, P + 1, A) : d.push(P + 1, P, A), w += 3
            }
            p.addGroup(b, w, i === !0 ? 1 : 2), b += w
        }
        Se.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: i,
            radialSegments: r,
            heightSegments: a,
            openEnded: s,
            thetaStart: c,
            thetaLength: l
        };
        var p = this;
        e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, i = i || 1, r = Math.floor(r) || 8, a = Math.floor(a) || 1, s = void 0 !== s ? s : !1, c = void 0 !== c ? c : 0, l = void 0 !== l ? l : 2 * Math.PI;
        var d = [],
            f = [],
            m = [],
            v = [],
            g = 0,
            y = [],
            x = i / 2,
            b = 0;
        u(), s === !1 && (e > 0 && h(!0), t > 0 && h(!1)), this.setIndex(d), this.addAttribute("position", new _e(f, 3)), this.addAttribute("normal", new _e(m, 3)), this.addAttribute("uv", new _e(v, 2))
    }

    function Qn(e, t, n, i, r, o, a) {
        Zn.call(this, 0, e, t, n, i, r, o, a), this.type = "ConeGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        }
    }

    function Kn(e, t, n, i, r, o, a) {
        Jn.call(this, 0, e, t, n, i, r, o, a), this.type = "ConeBufferGeometry", this.parameters = {
            radius: e,
            height: t,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        }
    }

    function ei(e, t, n, i) {
        de.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: i
        }, this.fromBufferGeometry(new ti(e, t, n, i)), this.mergeVertices()
    }

    function ti(e, t, i, r) {
        Se.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: r
        }, e = e || 1, t = void 0 !== t ? Math.max(3, t) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var a, s, c = [],
            l = [],
            u = [],
            h = [],
            p = new o,
            d = new n;
        for (l.push(0, 0, 0), u.push(0, 0, 1), h.push(.5, .5), s = 0, a = 3; t >= s; s++, a += 3) {
            var f = i + s / t * r;
            p.x = e * Math.cos(f), p.y = e * Math.sin(f), l.push(p.x, p.y, p.z), u.push(0, 0, 1), d.x = (l[a] / e + 1) / 2, d.y = (l[a + 1] / e + 1) / 2, h.push(d.x, d.y)
        }
        for (a = 1; t >= a; a++) c.push(a, a + 1, 0);
        this.setIndex(c), this.addAttribute("position", new _e(l, 3)), this.addAttribute("normal", new _e(u, 3)), this.addAttribute("uv", new _e(h, 2))
    }

    function ni(e) {
        Q.call(this), this.type = "ShadowMaterial", this.color = new X(0), this.opacity = 1, this.lights = !0, this.transparent = !0, this.setValues(e)
    }

    function ii(e) {
        Ie.call(this, e), this.type = "RawShaderMaterial"
    }

    function ri(e) {
        Q.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new X(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function oi(e) {
        ri.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(e)
    }

    function ai(e) {
        Q.call(this), this.type = "MeshPhongMaterial", this.color = new X(16777215), this.specular = new X(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Fa, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function si(e) {
        ai.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(e)
    }

    function ci(e) {
        Q.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function li(e) {
        Q.call(this), this.type = "MeshLambertMaterial", this.color = new X(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Fa, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
    }

    function ui(e) {
        It.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
    }

    function hi(e, t, n) {
        var i = this,
            r = !1,
            o = 0,
            a = 0,
            s = void 0;
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(e) {
            a++, r === !1 && void 0 !== i.onStart && i.onStart(e, o, a), r = !0
        }, this.itemEnd = function(e) {
            o++, void 0 !== i.onProgress && i.onProgress(e, o, a), o === a && (r = !1, void 0 !== i.onLoad && i.onLoad())
        }, this.itemError = function(e) {
            void 0 !== i.onError && i.onError(e)
        }, this.resolveURL = function(e) {
            return s ? s(e) : e
        }, this.setURLModifier = function(e) {
            return s = e, this
        }
    }

    function pi(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function di(e) {
        this.manager = void 0 !== e ? e : Ru, this._parser = null
    }

    function fi(e) {
        this.manager = void 0 !== e ? e : Ru, this._parser = null
    }

    function mi(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function vi(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function gi(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function yi() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    function xi(e, t, n, i, r, o, a, s) {
        yi.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = o || 2 * Math.PI, this.aClockwise = a || !1, this.aRotation = s || 0
    }

    function bi(e, t, n, i, r, o) {
        xi.call(this, e, t, n, n, i, r, o), this.type = "ArcCurve"
    }

    function wi() {
        function e(e, o, a, s) {
            t = e, n = a, i = -3 * e + 3 * o - 2 * a - s, r = 2 * e - 2 * o + a + s
        }
        var t = 0,
            n = 0,
            i = 0,
            r = 0;
        return {
            initCatmullRom: function(t, n, i, r, o) {
                e(n, i, o * (i - t), o * (r - n))
            },
            initNonuniformCatmullRom: function(t, n, i, r, o, a, s) {
                var c = (n - t) / o - (i - t) / (o + a) + (i - n) / a,
                    l = (i - n) / a - (r - n) / (a + s) + (r - i) / s;
                c *= a, l *= a, e(n, i, c, l)
            },
            calc: function(e) {
                var o = e * e,
                    a = o * e;
                return t + n * e + i * o + r * a
            }
        }
    }

    function _i(e, t, n, i) {
        yi.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = i || .5
    }

    function Mi(e, t, n, i, r) {
        var o = .5 * (i - t),
            a = .5 * (r - n),
            s = e * e,
            c = e * s;
        return (2 * n - 2 * i + o + a) * c + (-3 * n + 3 * i - 2 * o - a) * s + o * e + n
    }

    function Ti(e, t) {
        var n = 1 - e;
        return n * n * t
    }

    function Ei(e, t) {
        return 2 * (1 - e) * e * t
    }

    function Si(e, t) {
        return e * e * t
    }

    function Ci(e, t, n, i) {
        return Ti(e, t) + Ei(e, n) + Si(e, i)
    }

    function Ai(e, t) {
        var n = 1 - e;
        return n * n * n * t
    }

    function Pi(e, t) {
        var n = 1 - e;
        return 3 * n * n * e * t
    }

    function Ri(e, t) {
        return 3 * (1 - e) * e * e * t
    }

    function Li(e, t) {
        return e * e * e * t
    }

    function Ii(e, t, n, i, r) {
        return Ai(e, t) + Pi(e, n) + Ri(e, i) + Li(e, r)
    }

    function Oi(e, t, i, r) {
        yi.call(this), this.type = "CubicBezierCurve", this.v0 = e || new n, this.v1 = t || new n, this.v2 = i || new n, this.v3 = r || new n
    }

    function Bi(e, t, n, i) {
        yi.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new o, this.v1 = t || new o, this.v2 = n || new o, this.v3 = i || new o
    }

    function Di(e, t) {
        yi.call(this), this.type = "LineCurve", this.v1 = e || new n, this.v2 = t || new n
    }

    function Ni(e, t) {
        yi.call(this), this.type = "LineCurve3", this.v1 = e || new o, this.v2 = t || new o
    }

    function Fi(e, t, i) {
        yi.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new n, this.v1 = t || new n, this.v2 = i || new n
    }

    function Ui(e, t, n) {
        yi.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new o, this.v1 = t || new o, this.v2 = n || new o
    }

    function ki(e) {
        yi.call(this), this.type = "SplineCurve", this.points = e || []
    }

    function zi() {
        yi.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }

    function Hi(e) {
        zi.call(this), this.type = "Path", this.currentPoint = new n, e && this.setFromPoints(e)
    }

    function Gi(e) {
        Hi.call(this, e), this.uuid = oc.generateUUID(), this.type = "Shape", this.holes = []
    }

    function Vi(e, t) {
        le.call(this), this.type = "Light", this.color = new X(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
    }

    function ji(e, t, n) {
        Vi.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(le.DefaultUp), this.updateMatrix(), this.groundColor = new X(t)
    }

    function $i(e) {
        this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new n(512, 512), this.map = null, this.matrix = new i
    }

    function Wi() {
        $i.call(this, new mt(50, 1, .5, 500))
    }

    function Xi(e, t, n, i, r, o) {
        Vi.call(this, e, t), this.type = "SpotLight", this.position.copy(le.DefaultUp), this.updateMatrix(), this.target = new le, Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / Math.PI
            }
        }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new Wi
    }

    function qi(e, t, n, i) {
        Vi.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / (4 * Math.PI)
            }
        }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new $i(new mt(90, 1, .5, 500))
    }

    function Yi() {
        $i.call(this, new he(-5, 5, 5, -5, .5, 500))
    }

    function Zi(e, t) {
        Vi.call(this, e, t), this.type = "DirectionalLight", this.position.copy(le.DefaultUp), this.updateMatrix(), this.target = new le, this.shadow = new Yi
    }

    function Ji(e, t) {
        Vi.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
    }

    function Qi(e, t, n, i) {
        Vi.call(this, e, t), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
    }

    function Ki(e, t, n, i) {
        lr.call(this, e, t, n, i)
    }

    function er(e, t, n) {
        lr.call(this, e, t, n)
    }

    function tr(e, t, n, i) {
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n
    }

    function nr(e, t, n, i) {
        tr.call(this, e, t, n, i)
    }

    function ir(e, t, n, i) {
        lr.call(this, e, t, n, i)
    }

    function rr(e, t, n, i) {
        lr.call(this, e, t, n, i)
    }

    function or(e, t, n, i) {
        lr.call(this, e, t, n, i)
    }

    function ar(e, t, n, i) {
        tr.call(this, e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function sr(e, t, n, i) {
        tr.call(this, e, t, n, i)
    }

    function cr(e, t, n, i) {
        tr.call(this, e, t, n, i)
    }

    function lr(e, t, n, i) {
        if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = Fu.convertArray(t, this.TimeBufferType), this.values = Fu.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation), this.validate(), this.optimize()
    }

    function ur(e, t, n, i) {
        lr.call(this, e, t, n, i)
    }

    function hr(e, t, n) {
        this.name = e, this.tracks = n, this.duration = void 0 !== t ? t : -1, this.uuid = oc.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
    }

    function pr(e) {
        this.manager = void 0 !== e ? e : Ru, this.textures = {}
    }

    function dr(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function fr() {
        this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
    }

    function mr(e) {
        "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : Ru, this.withCredentials = !1
    }

    function vr(e) {
        this.manager = void 0 !== e ? e : Ru, this.texturePath = ""
    }

    function gr(e) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== e ? e : Ru, this.options = void 0
    }

    function yr() {
        this.type = "ShapePath", this.subPaths = [], this.currentPath = null
    }

    function xr(e) {
        this.type = "Font", this.data = e
    }

    function br(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function wr(e) {
        this.manager = void 0 !== e ? e : Ru
    }

    function _r() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new mt, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new mt, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    function Mr(e, t, n) {
        le.call(this), this.type = "CubeCamera";
        var i = 90,
            r = 1,
            a = new mt(i, r, e, t);
        a.up.set(0, -1, 0), a.lookAt(new o(1, 0, 0)), this.add(a);
        var s = new mt(i, r, e, t);
        s.up.set(0, -1, 0), s.lookAt(new o(-1, 0, 0)), this.add(s);
        var c = new mt(i, r, e, t);
        c.up.set(0, 0, 1), c.lookAt(new o(0, 1, 0)), this.add(c);
        var l = new mt(i, r, e, t);
        l.up.set(0, 0, -1), l.lookAt(new o(0, -1, 0)), this.add(l);
        var h = new mt(i, r, e, t);
        h.up.set(0, -1, 0), h.lookAt(new o(0, 0, 1)), this.add(h);
        var p = new mt(i, r, e, t);
        p.up.set(0, -1, 0), p.lookAt(new o(0, 0, -1)), this.add(p);
        var d = {
            format: ws,
            magFilter: os,
            minFilter: os
        };
        this.renderTarget = new u(n, n, d), this.renderTarget.texture.name = "CubeCamera", this.update = function(e, t) {
            null === this.parent && this.updateMatrixWorld();
            var n = this.renderTarget,
                i = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, n.activeCubeFace = 0, e.render(t, a, n), n.activeCubeFace = 1, e.render(t, s, n), n.activeCubeFace = 2, e.render(t, c, n), n.activeCubeFace = 3, e.render(t, l, n), n.activeCubeFace = 4, e.render(t, h, n), n.texture.generateMipmaps = i, n.activeCubeFace = 5, e.render(t, p, n), e.setRenderTarget(null)
        }, this.clear = function(e, t, n, i) {
            for (var r = this.renderTarget, o = 0; 6 > o; o++) r.activeCubeFace = o, e.setRenderTarget(r), e.clear(t, n, i);
            e.setRenderTarget(null)
        }
    }

    function Tr() {
        le.call(this), this.type = "AudioListener", this.context = ju.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    function Er(e) {
        le.call(this), this.type = "Audio", this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function Sr(e) {
        Er.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function Cr(e, t) {
        this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
    }

    function Ar(e, t, n) {
        this.binding = e, this.valueSize = n;
        var i, r = Float64Array;
        switch (t) {
            case "quaternion":
                i = this._slerp;
                break;
            case "string":
            case "bool":
                r = Array, i = this._select;
                break;
            default:
                i = this._lerp
        }
        this.buffer = new r(4 * n), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }

    function Pr(e, t, n) {
        var i = n || Rr.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i)
    }

    function Rr(e, t, n) {
        this.path = t, this.parsedPath = n || Rr.parseTrackName(t), this.node = Rr.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
    }

    function Lr() {
        this.uuid = oc.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var i = this;
        this.stats = {
            objects: {
                get total() {
                    return i._objects.length
                },
                get inUse() {
                    return this.total - i.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return i._bindings.length
            }
        }
    }

    function Ir(e, t, n) {
        this._mixer = e, this._clip = t, this._localRoot = n || null;
        for (var i = t.tracks, r = i.length, o = new Array(r), a = {
                endingStart: Vs,
                endingEnd: Vs
            }, s = 0; s !== r; ++s) {
            var c = i[s].createInterpolant(null);
            o[s] = c, c.settings = a
        }
        this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Us, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function Or(e) {
        this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function Br(e) {
        "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
    }

    function Dr() {
        Se.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function Nr(e, t, n, i) {
        this.uuid = oc.generateUUID(), this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0
    }

    function Fr(e, t) {
        this.uuid = oc.generateUUID(), this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function() {}, this.version = 0
    }

    function Ur(e, t, n) {
        Fr.call(this, e, t), this.meshPerAttribute = n || 1
    }

    function kr(e, t, n) {
        fe.call(this, e, t), this.meshPerAttribute = n || 1
    }

    function zr(e, t, n, i) {
        this.ray = new Oe(e, t), this.near = n || 0, this.far = i || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function Hr(e, t) {
        return e.distance - t.distance
    }

    function Gr(e, t, n, i) {
        if (e.visible !== !1 && (e.raycast(t, n), i === !0))
            for (var r = e.children, o = 0, a = r.length; a > o; o++) Gr(r[o], t, n, !0)
    }

    function Vr(e) {
        this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    function jr(e, t, n) {
        return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== n ? n : 0, this
    }

    function $r(e, t, n) {
        return this.radius = void 0 !== e ? e : 1, this.theta = void 0 !== t ? t : 0, this.y = void 0 !== n ? n : 0, this
    }

    function Wr(e) {
        le.call(this), this.material = e, this.render = function() {}
    }

    function Xr(e, t, n, i) {
        this.object = e, this.size = void 0 !== t ? t : 1;
        var r = void 0 !== n ? n : 16711680,
            o = void 0 !== i ? i : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count);
        var c = new Se,
            l = new _e(2 * a * 3, 3);
        c.addAttribute("position", l), Bt.call(this, c, new It({
            color: r,
            linewidth: o
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function qr(e, t) {
        le.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
        for (var n = new Se, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, o = 1, a = 32; a > r; r++, o++) {
            var s = r / a * Math.PI * 2,
                c = o / a * Math.PI * 2;
            i.push(Math.cos(s), Math.sin(s), 1, Math.cos(c), Math.sin(c), 1)
        }
        n.addAttribute("position", new _e(i, 3));
        var l = new It({
            fog: !1
        });
        this.cone = new Bt(n, l), this.add(this.cone), this.update()
    }

    function Yr(e) {
        var t = [];
        e && e.isBone && t.push(e);
        for (var n = 0; n < e.children.length; n++) t.push.apply(t, Yr(e.children[n]));
        return t
    }

    function Zr(e) {
        for (var t = Yr(e), n = new Se, i = [], r = [], o = new X(0, 0, 1), a = new X(0, 1, 0), s = 0; s < t.length; s++) {
            var c = t[s];
            c.parent && c.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(o.r, o.g, o.b), r.push(a.r, a.g, a.b))
        }
        n.addAttribute("position", new _e(i, 3)), n.addAttribute("color", new _e(r, 3));
        var l = new It({
            vertexColors: aa,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        Bt.call(this, n, l), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }

    function Jr(e, t, n) {
        this.light = e, this.light.updateMatrixWorld(), this.color = n;
        var i = new Hn(t, 4, 2),
            r = new Le({
                wireframe: !0,
                fog: !1
            });
        Ne.call(this, i, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function Qr(e, t) {
        le.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
        var n = new It({
                fog: !1
            }),
            i = new Se;
        i.addAttribute("position", new fe(new Float32Array(15), 3)), this.line = new Ot(i, n), this.add(this.line), this.update()
    }

    function Kr(e, t, n) {
        le.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
        var i = new Zt(t);
        i.rotateY(.5 * Math.PI), this.material = new Le({
            wireframe: !0,
            fog: !1
        }), void 0 === this.color && (this.material.vertexColors = aa);
        var r = i.getAttribute("position"),
            o = new Float32Array(3 * r.count);
        i.addAttribute("color", new fe(o, 3)), this.add(new Ne(i, this.material)), this.update()
    }

    function eo(e, t, n, i) {
        e = e || 10, t = t || 10, n = new X(void 0 !== n ? n : 4473924), i = new X(void 0 !== i ? i : 8947848);
        for (var r = t / 2, o = e / t, a = e / 2, s = [], c = [], l = 0, u = 0, h = -a; t >= l; l++, h += o) {
            s.push(-a, 0, h, a, 0, h), s.push(h, 0, -a, h, 0, a);
            var p = l === r ? n : i;
            p.toArray(c, u), u += 3, p.toArray(c, u), u += 3, p.toArray(c, u), u += 3, p.toArray(c, u), u += 3
        }
        var d = new Se;
        d.addAttribute("position", new _e(s, 3)), d.addAttribute("color", new _e(c, 3));
        var f = new It({
            vertexColors: aa
        });
        Bt.call(this, d, f)
    }

    function to(e, t, n, i, r, o) {
        e = e || 10, t = t || 16, n = n || 8, i = i || 64, r = new X(void 0 !== r ? r : 4473924), o = new X(void 0 !== o ? o : 8947848);
        var a, s, c, l, u, h, p, d = [],
            f = [];
        for (l = 0; t >= l; l++) c = l / t * (2 * Math.PI), a = Math.sin(c) * e, s = Math.cos(c) * e, d.push(0, 0, 0), d.push(a, 0, s), p = 1 & l ? r : o, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
        for (l = 0; n >= l; l++)
            for (p = 1 & l ? r : o, h = e - e / n * l, u = 0; i > u; u++) c = u / i * (2 * Math.PI), a = Math.sin(c) * h, s = Math.cos(c) * h, d.push(a, 0, s), f.push(p.r, p.g, p.b), c = (u + 1) / i * (2 * Math.PI), a = Math.sin(c) * h, s = Math.cos(c) * h, d.push(a, 0, s), f.push(p.r, p.g, p.b);
        var m = new Se;
        m.addAttribute("position", new _e(d, 3)), m.addAttribute("color", new _e(f, 3));
        var v = new It({
            vertexColors: aa
        });
        Bt.call(this, m, v)
    }

    function no(e, t, n, i) {
        this.object = e, this.size = void 0 !== t ? t : 1;
        var r = void 0 !== n ? n : 16776960,
            o = void 0 !== i ? i : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new Se,
            l = new _e(2 * a * 3, 3);
        c.addAttribute("position", l), Bt.call(this, c, new It({
            color: r,
            linewidth: o
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function io(e, t, n) {
        le.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === t && (t = 1);
        var i = new Se;
        i.addAttribute("position", new _e([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
        var r = new It({
            fog: !1
        });
        this.lightPlane = new Ot(i, r), this.add(this.lightPlane), i = new Se, i.addAttribute("position", new _e([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ot(i, r), this.add(this.targetLine), this.update()
    }

    function ro(e) {
        function t(e, t, i) {
            n(e, i), n(t, i)
        }

        function n(e, t) {
            o.push(0, 0, 0), a.push(t.r, t.g, t.b), void 0 === s[e] && (s[e] = []), s[e].push(o.length / 3 - 1)
        }
        var i = new Se,
            r = new It({
                color: 16777215,
                vertexColors: oa
            }),
            o = [],
            a = [],
            s = {},
            c = new X(16755200),
            l = new X(16711680),
            u = new X(43775),
            h = new X(16777215),
            p = new X(3355443);
        t("n1", "n2", c), t("n2", "n4", c), t("n4", "n3", c), t("n3", "n1", c), t("f1", "f2", c), t("f2", "f4", c), t("f4", "f3", c), t("f3", "f1", c), t("n1", "f1", c), t("n2", "f2", c), t("n3", "f3", c), t("n4", "f4", c), t("p", "n1", l), t("p", "n2", l), t("p", "n3", l), t("p", "n4", l), t("u1", "u2", u), t("u2", "u3", u), t("u3", "u1", u), t("c", "t", h), t("p", "c", p), t("cn1", "cn2", p), t("cn3", "cn4", p), t("cf1", "cf2", p), t("cf3", "cf4", p), i.addAttribute("position", new _e(o, 3)), i.addAttribute("color", new _e(a, 3)), Bt.call(this, i, r), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
    }

    function oo(e, t) {
        this.object = e, void 0 === t && (t = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            i = new Float32Array(24),
            r = new Se;
        r.setIndex(new fe(n, 1)), r.addAttribute("position", new fe(i, 3)), Bt.call(this, r, new It({
            color: t
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function ao(e, t) {
        this.type = "Box3Helper", this.box = e;
        var n = void 0 !== t ? t : 16776960,
            i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],
            o = new Se;
        o.setIndex(new fe(i, 1)), o.addAttribute("position", new _e(r, 3)), Bt.call(this, o, new It({
            color: n
        })), this.geometry.computeBoundingSphere()
    }

    function so(e, t, n) {
        this.type = "PlaneHelper", this.plane = e, this.size = void 0 === t ? 1 : t;
        var i = void 0 !== n ? n : 16776960,
            r = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
            o = new Se;
        o.addAttribute("position", new _e(r, 3)), o.computeBoundingSphere(), Ot.call(this, o, new It({
            color: i
        }));
        var a = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
            s = new Se;
        s.addAttribute("position", new _e(a, 3)), s.computeBoundingSphere(), this.add(new Ne(s, new Le({
            color: i,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }

    function co(e, t, n, i, r, o) {
        le.call(this), void 0 === i && (i = 16776960), void 0 === n && (n = 1), void 0 === r && (r = .2 * n), void 0 === o && (o = .2 * r), void 0 === $u && ($u = new Se, $u.addAttribute("position", new _e([0, 0, 0, 0, 1, 0], 3)), Wu = new Jn(0, .5, 1, 5, 1), Wu.translate(0, -.5, 0)), this.position.copy(t), this.line = new Ot($u, new It({
            color: i
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ne(Wu, new Le({
            color: i
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, r, o)
    }

    function lo(e) {
        e = e || 1;
        var t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
            n = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],
            i = new Se;
        i.addAttribute("position", new _e(t, 3)), i.addAttribute("color", new _e(n, 3));
        var r = new It({
            vertexColors: aa
        });
        Bt.call(this, i, r)
    }

    function uo(e, t, n, i, r, o, a) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new pe(e, t, n, r, o, a)
    }

    function ho(e) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), e
    }

    function po(e) {
        return void 0 === e && (e = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), e.isMultiMaterial = !0, e.materials = e, e.clone = function() {
            return e.slice()
        }, e
    }

    function fo(e, t) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Ft(e, t)
    }

    function mo(e) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new Ct(e)
    }

    function vo(e, t) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Ft(e, t)
    }

    function go(e) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new Nt(e)
    }

    function yo(e) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new Nt(e)
    }

    function xo(e) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new Nt(e)
    }

    function bo(e, t, n) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new o(e, t, n)
    }

    function wo(e, t) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new fe(e, t).setDynamic(!0)
    }

    function _o(e, t) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new me(e, t)
    }

    function Mo(e, t) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new ve(e, t)
    }

    function To(e, t) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new ge(e, t)
    }

    function Eo(e, t) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new ye(e, t)
    }

    function So(e, t) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new xe(e, t)
    }

    function Co(e, t) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new be(e, t)
    }

    function Ao(e, t) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new we(e, t)
    }

    function Po(e, t) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new _e(e, t)
    }

    function Ro(e, t) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new Me(e, t)
    }

    function Lo(e) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), _i.call(this, e), this.type = "catmullrom", this.closed = !0
    }

    function Io(e) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), _i.call(this, e), this.type = "catmullrom"
    }

    function Oo(e) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), _i.call(this, e), this.type = "catmullrom"
    }

    function Bo(e) {
        return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new lo(e)
    }

    function Do(e, t) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new oo(e, t)
    }

    function No(e, t) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new Bt(new Yn(e.geometry), new It({
            color: void 0 !== t ? t : 16777215
        }))
    }

    function Fo(e, t) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new Bt(new Gt(e.geometry), new It({
            color: void 0 !== t ? t : 16777215
        }))
    }

    function Uo(e) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new pi(e)
    }

    function ko(e) {
        return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new fi(e)
    }

    function zo() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(e, t) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
        }, this.unprojectVector = function(e, t) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
        }, this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }

    function Ho() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }), void 0 === Math.sign && (Math.sign = function(e) {
        return 0 > e ? -1 : e > 0 ? 1 : +e
    }), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && ! function() {
        Object.assign = function(e) {
            if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (void 0 !== i && null !== i)
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
            }
            return t
        }
    }(), Object.assign(t.prototype, {
        addEventListener: function(e, t) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
        },
        hasEventListener: function(e, t) {
            if (void 0 === this._listeners) return !1;
            var n = this._listeners;
            return void 0 !== n[e] && -1 !== n[e].indexOf(t)
        },
        removeEventListener: function(e, t) {
            if (void 0 !== this._listeners) {
                var n = this._listeners,
                    i = n[e];
                if (void 0 !== i) {
                    var r = i.indexOf(t); - 1 !== r && i.splice(r, 1)
                }
            }
        },
        dispatchEvent: function(e) {
            if (void 0 !== this._listeners) {
                var t = this._listeners,
                    n = t[e.type];
                if (void 0 !== n) {
                    e.target = this;
                    for (var i = n.slice(0), r = 0, o = i.length; o > r; r++) i[r].call(this, e)
                }
            }
        }
    });
    var Go = "89",
        Vo = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        },
        jo = 0,
        $o = 1,
        Wo = 2,
        Xo = 3,
        qo = 0,
        Yo = 1,
        Zo = 0,
        Jo = 1,
        Qo = 2,
        Ko = 0,
        ea = 1,
        ta = 2,
        na = 1,
        ia = 2,
        ra = 0,
        oa = 1,
        aa = 2,
        sa = 0,
        ca = 1,
        la = 2,
        ua = 3,
        ha = 4,
        pa = 5,
        da = 100,
        fa = 101,
        ma = 102,
        va = 103,
        ga = 104,
        ya = 200,
        xa = 201,
        ba = 202,
        wa = 203,
        _a = 204,
        Ma = 205,
        Ta = 206,
        Ea = 207,
        Sa = 208,
        Ca = 209,
        Aa = 210,
        Pa = 0,
        Ra = 1,
        La = 2,
        Ia = 3,
        Oa = 4,
        Ba = 5,
        Da = 6,
        Na = 7,
        Fa = 0,
        Ua = 1,
        ka = 2,
        za = 0,
        Ha = 1,
        Ga = 2,
        Va = 3,
        ja = 4,
        $a = 300,
        Wa = 301,
        Xa = 302,
        qa = 303,
        Ya = 304,
        Za = 305,
        Ja = 306,
        Qa = 307,
        Ka = 1e3,
        es = 1001,
        ts = 1002,
        ns = 1003,
        is = 1004,
        rs = 1005,
        os = 1006,
        as = 1007,
        ss = 1008,
        cs = 1009,
        ls = 1010,
        us = 1011,
        hs = 1012,
        ps = 1013,
        ds = 1014,
        fs = 1015,
        ms = 1016,
        vs = 1017,
        gs = 1018,
        ys = 1019,
        xs = 1020,
        bs = 1021,
        ws = 1022,
        _s = 1023,
        Ms = 1024,
        Ts = 1025,
        Es = _s,
        Ss = 1026,
        Cs = 1027,
        As = 2001,
        Ps = 2002,
        Rs = 2003,
        Ls = 2004,
        Is = 2100,
        Os = 2101,
        Bs = 2102,
        Ds = 2103,
        Ns = 2151,
        Fs = 2200,
        Us = 2201,
        ks = 2202,
        zs = 2300,
        Hs = 2301,
        Gs = 2302,
        Vs = 2400,
        js = 2401,
        $s = 2402,
        Ws = 0,
        Xs = 1,
        qs = 2,
        Ys = 3e3,
        Zs = 3001,
        Js = 3007,
        Qs = 3002,
        Ks = 3003,
        ec = 3004,
        tc = 3005,
        nc = 3006,
        ic = 3200,
        rc = 3201,
        oc = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                for (var e = [], t = 0; 256 > t; t++) e[t] = (16 > t ? "0" : "") + t.toString(16).toUpperCase();
                return function() {
                    var t = 4294967295 * Math.random() | 0,
                        n = 4294967295 * Math.random() | 0,
                        i = 4294967295 * Math.random() | 0,
                        r = 4294967295 * Math.random() | 0;
                    return e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & n] + e[n >> 8 & 255] + "-" + e[n >> 16 & 15 | 64] + e[n >> 24 & 255] + "-" + e[63 & i | 128] + e[i >> 8 & 255] + "-" + e[i >> 16 & 255] + e[i >> 24 & 255] + e[255 & r] + e[r >> 8 & 255] + e[r >> 16 & 255] + e[r >> 24 & 255]
                }
            }(),
            clamp: function(e, t, n) {
                return Math.max(t, Math.min(n, e))
            },
            euclideanModulo: function(e, t) {
                return (e % t + t) % t
            },
            mapLinear: function(e, t, n, i, r) {
                return i + (e - t) * (r - i) / (n - t)
            },
            lerp: function(e, t, n) {
                return (1 - n) * e + n * t
            },
            smoothstep: function(e, t, n) {
                return t >= e ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e))
            },
            smootherstep: function(e, t, n) {
                return t >= e ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (6 * e - 15) + 10))
            },
            randInt: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            },
            randFloat: function(e, t) {
                return e + Math.random() * (t - e)
            },
            randFloatSpread: function(e) {
                return e * (.5 - Math.random())
            },
            degToRad: function(e) {
                return e * oc.DEG2RAD
            },
            radToDeg: function(e) {
                return e * oc.RAD2DEG
            },
            isPowerOfTwo: function(e) {
                return 0 === (e & e - 1) && 0 !== e
            },
            ceilPowerOfTwo: function(e) {
                return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
            },
            floorPowerOfTwo: function(e) {
                return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
            }
        };
    Object.defineProperties(n.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(e) {
                this.x = e
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(e) {
                this.y = e
            }
        }
    }), Object.assign(n.prototype, {
        isVector2: !0,
        set: function(e, t) {
            return this.x = e, this.y = t, this
        },
        setScalar: function(e) {
            return this.x = e, this.y = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this
        },
        multiply: function(e) {
            return this.x *= e.x, this.y *= e.y, this
        },
        multiplyScalar: function(e) {
            return this.x *= e, this.y *= e, this
        },
        divide: function(e) {
            return this.x /= e.x, this.y /= e.y, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        applyMatrix3: function(e) {
            var t = this.x,
                n = this.y,
                i = e.elements;
            return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
        },
        clampScalar: function() {
            var e = new n,
                t = new n;
            return function(n, i) {
                return e.set(n, n), t.set(i, i), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            var e = Math.atan2(this.y, this.x);
            return 0 > e && (e += 2 * Math.PI), e
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x,
                n = this.y - e.y;
            return t * t + n * n
        },
        manhattanDistanceTo: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        },
        setLength: function(e) {
            return this.normalize().multiplyScalar(e)
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
        },
        lerpVectors: function(e, t, n) {
            return this.subVectors(t, e).multiplyScalar(n).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
        },
        fromBufferAttribute: function(e, t, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
        },
        rotateAround: function(e, t) {
            var n = Math.cos(t),
                i = Math.sin(t),
                r = this.x - e.x,
                o = this.y - e.y;
            return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this
        }
    }), Object.assign(i.prototype, {
        isMatrix4: !0,
        set: function(e, t, n, i, r, o, a, s, c, l, u, h, p, d, f, m) {
            var v = this.elements;
            return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = r, v[5] = o, v[9] = a, v[13] = s, v[2] = c, v[6] = l, v[10] = u, v[14] = h, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new i).fromArray(this.elements)
        },
        copy: function(e) {
            var t = this.elements,
                n = e.elements;
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
        },
        copyPosition: function(e) {
            var t = this.elements,
                n = e.elements;
            return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
        },
        extractBasis: function(e, t, n) {
            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function(e, t, n) {
            return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function() {
            var e = new o;
            return function(t) {
                var n = this.elements,
                    i = t.elements,
                    r = 1 / e.setFromMatrixColumn(t, 0).length(),
                    o = 1 / e.setFromMatrixColumn(t, 1).length(),
                    a = 1 / e.setFromMatrixColumn(t, 2).length();
                return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[4] = i[4] * o, n[5] = i[5] * o, n[6] = i[6] * o, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, this
            }
        }(),
        makeRotationFromEuler: function(e) {
            e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var t = this.elements,
                n = e.x,
                i = e.y,
                r = e.z,
                o = Math.cos(n),
                a = Math.sin(n),
                s = Math.cos(i),
                c = Math.sin(i),
                l = Math.cos(r),
                u = Math.sin(r);
            if ("XYZ" === e.order) {
                var h = o * l,
                    p = o * u,
                    d = a * l,
                    f = a * u;
                t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = p + d * c, t[5] = h - f * c, t[9] = -a * s, t[2] = f - h * c, t[6] = d + p * c, t[10] = o * s
            } else if ("YXZ" === e.order) {
                var m = s * l,
                    v = s * u,
                    g = c * l,
                    y = c * u;
                t[0] = m + y * a, t[4] = g * a - v, t[8] = o * c, t[1] = o * u, t[5] = o * l, t[9] = -a, t[2] = v * a - g, t[6] = y + m * a, t[10] = o * s
            } else if ("ZXY" === e.order) {
                var m = s * l,
                    v = s * u,
                    g = c * l,
                    y = c * u;
                t[0] = m - y * a, t[4] = -o * u, t[8] = g + v * a, t[1] = v + g * a, t[5] = o * l, t[9] = y - m * a, t[2] = -o * c, t[6] = a, t[10] = o * s
            } else if ("ZYX" === e.order) {
                var h = o * l,
                    p = o * u,
                    d = a * l,
                    f = a * u;
                t[0] = s * l, t[4] = d * c - p, t[8] = h * c + f, t[1] = s * u, t[5] = f * c + h, t[9] = p * c - d, t[2] = -c, t[6] = a * s, t[10] = o * s
            } else if ("YZX" === e.order) {
                var x = o * s,
                    b = o * c,
                    w = a * s,
                    _ = a * c;
                t[0] = s * l, t[4] = _ - x * u, t[8] = w * u + b, t[1] = u, t[5] = o * l, t[9] = -a * l, t[2] = -c * l, t[6] = b * u + w, t[10] = x - _ * u
            } else if ("XZY" === e.order) {
                var x = o * s,
                    b = o * c,
                    w = a * s,
                    _ = a * c;
                t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = x * u + _, t[5] = o * l, t[9] = b * u - w, t[2] = w * u - b, t[6] = a * l, t[10] = _ * u + x
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        },
        makeRotationFromQuaternion: function(e) {
            var t = this.elements,
                n = e._x,
                i = e._y,
                r = e._z,
                o = e._w,
                a = n + n,
                s = i + i,
                c = r + r,
                l = n * a,
                u = n * s,
                h = n * c,
                p = i * s,
                d = i * c,
                f = r * c,
                m = o * a,
                v = o * s,
                g = o * c;
            return t[0] = 1 - (p + f), t[4] = u - g, t[8] = h + v, t[1] = u + g, t[5] = 1 - (l + f), t[9] = d - m, t[2] = h - v, t[6] = d + m, t[10] = 1 - (l + p), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
        },
        lookAt: function() {
            var e = new o,
                t = new o,
                n = new o;
            return function(i, r, o) {
                var a = this.elements;
                return n.subVectors(i, r), 0 === n.lengthSq() && (n.z = 1), n.normalize(), e.crossVectors(o, n), 0 === e.lengthSq() && (1 === Math.abs(o.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), e.crossVectors(o, n)), e.normalize(), t.crossVectors(n, e), a[0] = e.x, a[4] = t.x, a[8] = n.x, a[1] = e.y, a[5] = t.y, a[9] = n.y, a[2] = e.z, a[6] = t.z, a[10] = n.z, this
            }
        }(),
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
        },
        premultiply: function(e) {
            return this.multiplyMatrices(e, this)
        },
        multiplyMatrices: function(e, t) {
            var n = e.elements,
                i = t.elements,
                r = this.elements,
                o = n[0],
                a = n[4],
                s = n[8],
                c = n[12],
                l = n[1],
                u = n[5],
                h = n[9],
                p = n[13],
                d = n[2],
                f = n[6],
                m = n[10],
                v = n[14],
                g = n[3],
                y = n[7],
                x = n[11],
                b = n[15],
                w = i[0],
                _ = i[4],
                M = i[8],
                T = i[12],
                E = i[1],
                S = i[5],
                C = i[9],
                A = i[13],
                P = i[2],
                R = i[6],
                L = i[10],
                I = i[14],
                O = i[3],
                B = i[7],
                D = i[11],
                N = i[15];
            return r[0] = o * w + a * E + s * P + c * O, r[4] = o * _ + a * S + s * R + c * B, r[8] = o * M + a * C + s * L + c * D, r[12] = o * T + a * A + s * I + c * N, r[1] = l * w + u * E + h * P + p * O, r[5] = l * _ + u * S + h * R + p * B, r[9] = l * M + u * C + h * L + p * D, r[13] = l * T + u * A + h * I + p * N, r[2] = d * w + f * E + m * P + v * O, r[6] = d * _ + f * S + m * R + v * B, r[10] = d * M + f * C + m * L + v * D, r[14] = d * T + f * A + m * I + v * N, r[3] = g * w + y * E + x * P + b * O, r[7] = g * _ + y * S + x * R + b * B, r[11] = g * M + y * C + x * L + b * D, r[15] = g * T + y * A + x * I + b * N, this
        },
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
        },
        applyToBufferAttribute: function() {
            var e = new o;
            return function(t) {
                for (var n = 0, i = t.count; i > n; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix4(this), t.setXYZ(n, e.x, e.y, e.z);
                return t
            }
        }(),
        determinant: function() {
            var e = this.elements,
                t = e[0],
                n = e[4],
                i = e[8],
                r = e[12],
                o = e[1],
                a = e[5],
                s = e[9],
                c = e[13],
                l = e[2],
                u = e[6],
                h = e[10],
                p = e[14],
                d = e[3],
                f = e[7],
                m = e[11],
                v = e[15];
            return d * (+r * s * u - i * c * u - r * a * h + n * c * h + i * a * p - n * s * p) + f * (+t * s * p - t * c * h + r * o * h - i * o * p + i * c * l - r * s * l) + m * (+t * c * u - t * a * p - r * o * u + n * o * p + r * a * l - n * c * l) + v * (-i * a * l - t * s * u + t * a * h + i * o * u - n * o * h + n * s * l)
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        },
        setPosition: function(e) {
            var t = this.elements;
            return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
        },
        getInverse: function(e, t) {
            var n = this.elements,
                i = e.elements,
                r = i[0],
                o = i[1],
                a = i[2],
                s = i[3],
                c = i[4],
                l = i[5],
                u = i[6],
                h = i[7],
                p = i[8],
                d = i[9],
                f = i[10],
                m = i[11],
                v = i[12],
                g = i[13],
                y = i[14],
                x = i[15],
                b = d * y * h - g * f * h + g * u * m - l * y * m - d * u * x + l * f * x,
                w = v * f * h - p * y * h - v * u * m + c * y * m + p * u * x - c * f * x,
                _ = p * g * h - v * d * h + v * l * m - c * g * m - p * l * x + c * d * x,
                M = v * d * u - p * g * u - v * l * f + c * g * f + p * l * y - c * d * y,
                T = r * b + o * w + a * _ + s * M;
            if (0 === T) {
                var E = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (t === !0) throw new Error(E);
                return console.warn(E), this.identity()
            }
            var S = 1 / T;
            return n[0] = b * S, n[1] = (g * f * s - d * y * s - g * a * m + o * y * m + d * a * x - o * f * x) * S, n[2] = (l * y * s - g * u * s + g * a * h - o * y * h - l * a * x + o * u * x) * S, n[3] = (d * u * s - l * f * s - d * a * h + o * f * h + l * a * m - o * u * m) * S, n[4] = w * S, n[5] = (p * y * s - v * f * s + v * a * m - r * y * m - p * a * x + r * f * x) * S, n[6] = (v * u * s - c * y * s - v * a * h + r * y * h + c * a * x - r * u * x) * S, n[7] = (c * f * s - p * u * s + p * a * h - r * f * h - c * a * m + r * u * m) * S, n[8] = _ * S, n[9] = (v * d * s - p * g * s - v * o * m + r * g * m + p * o * x - r * d * x) * S, n[10] = (c * g * s - v * l * s + v * o * h - r * g * h - c * o * x + r * l * x) * S, n[11] = (p * l * s - c * d * s - p * o * h + r * d * h + c * o * m - r * l * m) * S, n[12] = M * S, n[13] = (p * g * a - v * d * a + v * o * f - r * g * f - p * o * y + r * d * y) * S, n[14] = (v * l * a - c * g * a - v * o * u + r * g * u + c * o * y - r * l * y) * S, n[15] = (c * d * a - p * l * a + p * o * u - r * d * u - c * o * f + r * l * f) * S, this
        },
        scale: function(e) {
            var t = this.elements,
                n = e.x,
                i = e.y,
                r = e.z;
            return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
        },
        getMaxScaleOnAxis: function() {
            var e = this.elements,
                t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, n, i))
        },
        makeTranslation: function(e, t, n) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
        },
        makeRotationX: function(e) {
            var t = Math.cos(e),
                n = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(e) {
            var t = Math.cos(e),
                n = Math.sin(e);
            return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(e) {
            var t = Math.cos(e),
                n = Math.sin(e);
            return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(e, t) {
            var n = Math.cos(t),
                i = Math.sin(t),
                r = 1 - n,
                o = e.x,
                a = e.y,
                s = e.z,
                c = r * o,
                l = r * a;
            return this.set(c * o + n, c * a - i * s, c * s + i * a, 0, c * a + i * s, l * a + n, l * s - i * o, 0, c * s - i * a, l * s + i * o, r * s * s + n, 0, 0, 0, 0, 1), this
        },
        makeScale: function(e, t, n) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        },
        makeShear: function(e, t, n) {
            return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this
        },
        compose: function(e, t, n) {
            return this.makeRotationFromQuaternion(t), this.scale(n), this.setPosition(e), this
        },
        decompose: function() {
            var e = new o,
                t = new i;
            return function(n, i, r) {
                var o = this.elements,
                    a = e.set(o[0], o[1], o[2]).length(),
                    s = e.set(o[4], o[5], o[6]).length(),
                    c = e.set(o[8], o[9], o[10]).length(),
                    l = this.determinant();
                0 > l && (a = -a), n.x = o[12], n.y = o[13], n.z = o[14], t.copy(this);
                var u = 1 / a,
                    h = 1 / s,
                    p = 1 / c;
                return t.elements[0] *= u, t.elements[1] *= u, t.elements[2] *= u, t.elements[4] *= h, t.elements[5] *= h, t.elements[6] *= h, t.elements[8] *= p, t.elements[9] *= p, t.elements[10] *= p, i.setFromRotationMatrix(t), r.x = a, r.y = s, r.z = c, this
            }
        }(),
        makePerspective: function(e, t, n, i, r, o) {
            void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var a = this.elements,
                s = 2 * r / (t - e),
                c = 2 * r / (n - i),
                l = (t + e) / (t - e),
                u = (n + i) / (n - i),
                h = -(o + r) / (o - r),
                p = -2 * o * r / (o - r);
            return a[0] = s, a[4] = 0, a[8] = l, a[12] = 0, a[1] = 0, a[5] = c, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = h, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        },
        makeOrthographic: function(e, t, n, i, r, o) {
            var a = this.elements,
                s = 1 / (t - e),
                c = 1 / (n - i),
                l = 1 / (o - r),
                u = (t + e) * s,
                h = (n + i) * c,
                p = (o + r) * l;
            return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -h, a[2] = 0, a[6] = 0, a[10] = -2 * l, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        },
        equals: function(e) {
            for (var t = this.elements, n = e.elements, i = 0; 16 > i; i++)
                if (t[i] !== n[i]) return !1;
            return !0
        },
        fromArray: function(e, t) {
            void 0 === t && (t = 0);
            for (var n = 0; 16 > n; n++) this.elements[n] = e[n + t];
            return this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
        }
    }), Object.assign(r, {
        slerp: function(e, t, n, i) {
            return n.copy(e).slerp(t, i)
        },
        slerpFlat: function(e, t, n, i, r, o, a) {
            var s = n[i + 0],
                c = n[i + 1],
                l = n[i + 2],
                u = n[i + 3],
                h = r[o + 0],
                p = r[o + 1],
                d = r[o + 2],
                f = r[o + 3];
            if (u !== f || s !== h || c !== p || l !== d) {
                var m = 1 - a,
                    v = s * h + c * p + l * d + u * f,
                    g = v >= 0 ? 1 : -1,
                    y = 1 - v * v;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y),
                        b = Math.atan2(x, v * g);
                    m = Math.sin(m * b) / x, a = Math.sin(a * b) / x
                }
                var w = a * g;
                if (s = s * m + h * w, c = c * m + p * w, l = l * m + d * w, u = u * m + f * w, m === 1 - a) {
                    var _ = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
                    s *= _, c *= _, l *= _, u *= _
                }
            }
            e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u
        }
    }), Object.defineProperties(r.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(e) {
                this._x = e, this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(e) {
                this._y = e, this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(e) {
                this._z = e, this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(e) {
                this._w = e, this.onChangeCallback()
            }
        }
    }), Object.assign(r.prototype, {
        set: function(e, t, n, i) {
            return this._x = e, this._y = t, this._z = n, this._w = i, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
        },
        setFromEuler: function(e, t) {
            if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = e._x,
                i = e._y,
                r = e._z,
                o = e.order,
                a = Math.cos,
                s = Math.sin,
                c = a(n / 2),
                l = a(i / 2),
                u = a(r / 2),
                h = s(n / 2),
                p = s(i / 2),
                d = s(r / 2);
            return "XYZ" === o ? (this._x = h * l * u + c * p * d, this._y = c * p * u - h * l * d, this._z = c * l * d + h * p * u, this._w = c * l * u - h * p * d) : "YXZ" === o ? (this._x = h * l * u + c * p * d, this._y = c * p * u - h * l * d, this._z = c * l * d - h * p * u, this._w = c * l * u + h * p * d) : "ZXY" === o ? (this._x = h * l * u - c * p * d, this._y = c * p * u + h * l * d, this._z = c * l * d + h * p * u, this._w = c * l * u - h * p * d) : "ZYX" === o ? (this._x = h * l * u - c * p * d, this._y = c * p * u + h * l * d, this._z = c * l * d - h * p * u, this._w = c * l * u + h * p * d) : "YZX" === o ? (this._x = h * l * u + c * p * d, this._y = c * p * u + h * l * d, this._z = c * l * d - h * p * u, this._w = c * l * u - h * p * d) : "XZY" === o && (this._x = h * l * u - c * p * d, this._y = c * p * u - h * l * d, this._z = c * l * d + h * p * u, this._w = c * l * u + h * p * d), t !== !1 && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(e, t) {
            var n = t / 2,
                i = Math.sin(n);
            return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(e) {
            var t, n = e.elements,
                i = n[0],
                r = n[4],
                o = n[8],
                a = n[1],
                s = n[5],
                c = n[9],
                l = n[2],
                u = n[6],
                h = n[10],
                p = i + s + h;
            return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (u - c) * t, this._y = (o - l) * t, this._z = (a - r) * t) : i > s && i > h ? (t = 2 * Math.sqrt(1 + i - s - h), this._w = (u - c) / t, this._x = .25 * t, this._y = (r + a) / t, this._z = (o + l) / t) : s > h ? (t = 2 * Math.sqrt(1 + s - i - h), this._w = (o - l) / t, this._x = (r + a) / t, this._y = .25 * t, this._z = (c + u) / t) : (t = 2 * Math.sqrt(1 + h - i - s), this._w = (a - r) / t, this._x = (o + l) / t, this._y = (c + u) / t, this._z = .25 * t), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() {
            var e, t = new o,
                n = 1e-6;
            return function(i, r) {
                return void 0 === t && (t = new o), e = i.dot(r) + 1, n > e ? (e = 0, Math.abs(i.x) > Math.abs(i.z) ? t.set(-i.y, i.x, 0) : t.set(0, -i.z, i.y)) : t.crossVectors(i, r), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var e = this.length();
            return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
        },
        premultiply: function(e) {
            return this.multiplyQuaternions(e, this)
        },
        multiplyQuaternions: function(e, t) {
            var n = e._x,
                i = e._y,
                r = e._z,
                o = e._w,
                a = t._x,
                s = t._y,
                c = t._z,
                l = t._w;
            return this._x = n * l + o * a + i * c - r * s, this._y = i * l + o * s + r * a - n * c, this._z = r * l + o * c + n * s - i * a, this._w = o * l - n * a - i * s - r * c, this.onChangeCallback(), this
        },
        slerp: function(e, t) {
            if (0 === t) return this;
            if (1 === t) return this.copy(e);
            var n = this._x,
                i = this._y,
                r = this._z,
                o = this._w,
                a = o * e._w + n * e._x + i * e._y + r * e._z;
            if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
            var s = Math.sqrt(1 - a * a);
            if (Math.abs(s) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (n + this._x), this._y = .5 * (i + this._y), this._z = .5 * (r + this._z), this;
            var c = Math.atan2(s, a),
                l = Math.sin((1 - t) * c) / s,
                u = Math.sin(t * c) / s;
            return this._w = o * l + this._w * u, this._x = n * l + this._x * u, this._y = i * l + this._y * u, this._z = r * l + this._z * u, this.onChangeCallback(), this
        },
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
        },
        onChange: function(e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function() {}
    }), Object.assign(o.prototype, {
        isVector3: !0,
        set: function(e, t, n) {
            return this.x = e, this.y = t, this.z = n, this
        },
        setScalar: function(e) {
            return this.x = e, this.y = e, this.z = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setZ: function(e) {
            return this.z = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this.z += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this.z -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
        },
        multiplyScalar: function(e) {
            return this.x *= e, this.y *= e, this.z *= e, this
        },
        multiplyVectors: function(e, t) {
            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
        },
        applyEuler: function() {
            var e = new r;
            return function(t) {
                return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(e.setFromEuler(t))
            }
        }(),
        applyAxisAngle: function() {
            var e = new r;
            return function(t, n) {
                return this.applyQuaternion(e.setFromAxisAngle(t, n))
            }
        }(),
        applyMatrix3: function(e) {
            var t = this.x,
                n = this.y,
                i = this.z,
                r = e.elements;
            return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
        },
        applyMatrix4: function(e) {
            var t = this.x,
                n = this.y,
                i = this.z,
                r = e.elements,
                o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this
        },
        applyQuaternion: function(e) {
            var t = this.x,
                n = this.y,
                i = this.z,
                r = e.x,
                o = e.y,
                a = e.z,
                s = e.w,
                c = s * t + o * i - a * n,
                l = s * n + a * t - r * i,
                u = s * i + r * n - o * t,
                h = -r * t - o * n - a * i;
            return this.x = c * s + h * -r + l * -a - u * -o, this.y = l * s + h * -o + u * -r - c * -a, this.z = u * s + h * -a + c * -o - l * -r, this
        },
        project: function() {
            var e = new i;
            return function(t) {
                return e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyMatrix4(e)
            }
        }(),
        unproject: function() {
            var e = new i;
            return function(t) {
                return e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyMatrix4(e)
            }
        }(),
        transformDirection: function(e) {
            var t = this.x,
                n = this.y,
                i = this.z,
                r = e.elements;
            return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
        },
        divide: function(e) {
            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
        },
        clampScalar: function() {
            var e = new o,
                t = new o;
            return function(n, i) {
                return e.set(n, n, n), t.set(i, i, i), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(e) {
            return this.normalize().multiplyScalar(e)
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
        },
        lerpVectors: function(e, t, n) {
            return this.subVectors(t, e).multiplyScalar(n).add(e)
        },
        cross: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
        },
        crossVectors: function(e, t) {
            var n = e.x,
                i = e.y,
                r = e.z,
                o = t.x,
                a = t.y,
                s = t.z;
            return this.x = i * s - r * a, this.y = r * o - n * s, this.z = n * a - i * o, this
        },
        projectOnVector: function(e) {
            var t = e.dot(this) / e.lengthSq();
            return this.copy(e).multiplyScalar(t)
        },
        projectOnPlane: function() {
            var e = new o;
            return function(t) {
                return e.copy(this).projectOnVector(t), this.sub(e)
            }
        }(),
        reflect: function() {
            var e = new o;
            return function(t) {
                return this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
            }
        }(),
        angleTo: function(e) {
            var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
            return Math.acos(oc.clamp(t, -1, 1))
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x,
                n = this.y - e.y,
                i = this.z - e.z;
            return t * t + n * n + i * i
        },
        manhattanDistanceTo: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        },
        setFromSpherical: function(e) {
            var t = Math.sin(e.phi) * e.radius;
            return this.x = t * Math.sin(e.theta), this.y = Math.cos(e.phi) * e.radius, this.z = t * Math.cos(e.theta), this
        },
        setFromCylindrical: function(e) {
            return this.x = e.radius * Math.sin(e.theta), this.y = e.y, this.z = e.radius * Math.cos(e.theta), this
        },
        setFromMatrixPosition: function(e) {
            var t = e.elements;
            return this.x = t[12], this.y = t[13], this.z = t[14], this
        },
        setFromMatrixScale: function(e) {
            var t = this.setFromMatrixColumn(e, 0).length(),
                n = this.setFromMatrixColumn(e, 1).length(),
                i = this.setFromMatrixColumn(e, 2).length();
            return this.x = t, this.y = n, this.z = i, this
        },
        setFromMatrixColumn: function(e, t) {
            return this.fromArray(e.elements, 4 * t)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
        },
        fromBufferAttribute: function(e, t, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
        }
    }), Object.assign(a.prototype, {
        isMatrix3: !0,
        set: function(e, t, n, i, r, o, a, s, c) {
            var l = this.elements;
            return l[0] = e, l[1] = i, l[2] = a, l[3] = t, l[4] = r, l[5] = s, l[6] = n, l[7] = o, l[8] = c, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(e) {
            var t = this.elements,
                n = e.elements;
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
        },
        setFromMatrix4: function(e) {
            var t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
        },
        applyToBufferAttribute: function() {
            var e = new o;
            return function(t) {
                for (var n = 0, i = t.count; i > n; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix3(this), t.setXYZ(n, e.x, e.y, e.z);
                return t
            }
        }(),
        multiply: function(e) {
            return this.multiplyMatrices(this, e)
        },
        premultiply: function(e) {
            return this.multiplyMatrices(e, this)
        },
        multiplyMatrices: function(e, t) {
            var n = e.elements,
                i = t.elements,
                r = this.elements,
                o = n[0],
                a = n[3],
                s = n[6],
                c = n[1],
                l = n[4],
                u = n[7],
                h = n[2],
                p = n[5],
                d = n[8],
                f = i[0],
                m = i[3],
                v = i[6],
                g = i[1],
                y = i[4],
                x = i[7],
                b = i[2],
                w = i[5],
                _ = i[8];
            return r[0] = o * f + a * g + s * b, r[3] = o * m + a * y + s * w, r[6] = o * v + a * x + s * _, r[1] = c * f + l * g + u * b, r[4] = c * m + l * y + u * w, r[7] = c * v + l * x + u * _, r[2] = h * f + p * g + d * b, r[5] = h * m + p * y + d * w, r[8] = h * v + p * x + d * _, this
        },
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
        },
        determinant: function() {
            var e = this.elements,
                t = e[0],
                n = e[1],
                i = e[2],
                r = e[3],
                o = e[4],
                a = e[5],
                s = e[6],
                c = e[7],
                l = e[8];
            return t * o * l - t * a * c - n * r * l + n * a * s + i * r * c - i * o * s
        },
        getInverse: function(e, t) {
            e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var n = e.elements,
                i = this.elements,
                r = n[0],
                o = n[1],
                a = n[2],
                s = n[3],
                c = n[4],
                l = n[5],
                u = n[6],
                h = n[7],
                p = n[8],
                d = p * c - l * h,
                f = l * u - p * s,
                m = h * s - c * u,
                v = r * d + o * f + a * m;
            if (0 === v) {
                var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (t === !0) throw new Error(g);
                return console.warn(g), this.identity()
            }
            var y = 1 / v;
            return i[0] = d * y, i[1] = (a * h - p * o) * y, i[2] = (l * o - a * c) * y, i[3] = f * y, i[4] = (p * r - a * u) * y, i[5] = (a * s - l * r) * y, i[6] = m * y, i[7] = (o * u - h * r) * y, i[8] = (c * r - o * s) * y, this
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        getNormalMatrix: function(e) {
            return this.setFromMatrix4(e).getInverse(this).transpose()
        },
        transposeIntoArray: function(e) {
            var t = this.elements;
            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
        },
        setUvTransform: function(e, t, n, i, r, o, a) {
            var s = Math.cos(r),
                c = Math.sin(r);
            this.set(n * s, n * c, -n * (s * o + c * a) + o + e, -i * c, i * s, -i * (-c * o + s * a) + a + t, 0, 0, 1)
        },
        scale: function(e, t) {
            var n = this.elements;
            return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
        },
        rotate: function(e) {
            var t = Math.cos(e),
                n = Math.sin(e),
                i = this.elements,
                r = i[0],
                o = i[3],
                a = i[6],
                s = i[1],
                c = i[4],
                l = i[7];
            return i[0] = t * r + n * s, i[3] = t * o + n * c, i[6] = t * a + n * l, i[1] = -n * r + t * s, i[4] = -n * o + t * c, i[7] = -n * a + t * l, this
        },
        translate: function(e, t) {
            var n = this.elements;
            return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
        },
        equals: function(e) {
            for (var t = this.elements, n = e.elements, i = 0; 9 > i; i++)
                if (t[i] !== n[i]) return !1;
            return !0
        },
        fromArray: function(e, t) {
            void 0 === t && (t = 0);
            for (var n = 0; 9 > n; n++) this.elements[n] = e[n + t];
            return this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = 0);
            var n = this.elements;
            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
        }
    });
    var ac = 0;
    s.DEFAULT_IMAGE = void 0, s.DEFAULT_MAPPING = $a, s.prototype = Object.assign(Object.create(t.prototype), {
        constructor: s,
        isTexture: !0,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
        },
        toJSON: function(e) {
            function t(e) {
                var t;
                if (e instanceof HTMLCanvasElement) t = e;
                else {
                    t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), t.width = e.width, t.height = e.height;
                    var n = t.getContext("2d");
                    e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height)
                }
                return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
            }
            var n = void 0 === e || "string" == typeof e;
            if (!n && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var r = this.image;
                void 0 === r.uuid && (r.uuid = oc.generateUUID()), n || void 0 !== e.images[r.uuid] || (e.images[r.uuid] = {
                    uuid: r.uuid,
                    url: t(r)
                }), i.image = r.uuid
            }
            return n || (e.textures[this.uuid] = i), i
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(e) {
            if (this.mapping === $a) {
                if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                    case Ka:
                        e.x = e.x - Math.floor(e.x);
                        break;
                    case es:
                        e.x = e.x < 0 ? 0 : 1;
                        break;
                    case ts:
                        1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                }
                if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                    case Ka:
                        e.y = e.y - Math.floor(e.y);
                        break;
                    case es:
                        e.y = e.y < 0 ? 0 : 1;
                        break;
                    case ts:
                        1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                }
                this.flipY && (e.y = 1 - e.y)
            }
        }
    }), Object.defineProperty(s.prototype, "needsUpdate", {
        set: function(e) {
            e === !0 && this.version++
        }
    }), Object.assign(c.prototype, {
        isVector4: !0,
        set: function(e, t, n, i) {
            return this.x = e, this.y = t, this.z = n, this.w = i, this
        },
        setScalar: function(e) {
            return this.x = e, this.y = e, this.z = e, this.w = e, this
        },
        setX: function(e) {
            return this.x = e, this
        },
        setY: function(e) {
            return this.y = e, this
        },
        setZ: function(e) {
            return this.z = e, this
        },
        setW: function(e) {
            return this.w = e, this
        },
        setComponent: function(e, t) {
            switch (e) {
                case 0:
                    this.x = t;
                    break;
                case 1:
                    this.y = t;
                    break;
                case 2:
                    this.z = t;
                    break;
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function(e) {
            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
        },
        addScalar: function(e) {
            return this.x += e, this.y += e, this.z += e, this.w += e, this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
        },
        subScalar: function(e) {
            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
        },
        multiplyScalar: function(e) {
            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
        },
        applyMatrix4: function(e) {
            var t = this.x,
                n = this.y,
                i = this.z,
                r = this.w,
                o = e.elements;
            return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        setAxisAngleFromQuaternion: function(e) {
            this.w = 2 * Math.acos(e.w);
            var t = Math.sqrt(1 - e.w * e.w);
            return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
        },
        setAxisAngleFromRotationMatrix: function(e) {
            var t, n, i, r, o = .01,
                a = .1,
                s = e.elements,
                c = s[0],
                l = s[4],
                u = s[8],
                h = s[1],
                p = s[5],
                d = s[9],
                f = s[2],
                m = s[6],
                v = s[10];
            if (Math.abs(l - h) < o && Math.abs(u - f) < o && Math.abs(d - m) < o) {
                if (Math.abs(l + h) < a && Math.abs(u + f) < a && Math.abs(d + m) < a && Math.abs(c + p + v - 3) < a) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                var g = (c + 1) / 2,
                    y = (p + 1) / 2,
                    x = (v + 1) / 2,
                    b = (l + h) / 4,
                    w = (u + f) / 4,
                    _ = (d + m) / 4;
                return g > y && g > x ? o > g ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(g), i = b / n, r = w / n) : y > x ? o > y ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(y), n = b / i, r = _ / i) : o > x ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(x), n = w / r, i = _ / r), this.set(n, i, r, t), this
            }
            var M = Math.sqrt((m - d) * (m - d) + (u - f) * (u - f) + (h - l) * (h - l));
            return Math.abs(M) < .001 && (M = 1), this.x = (m - d) / M, this.y = (u - f) / M, this.z = (h - l) / M, this.w = Math.acos((c + p + v - 1) / 2), this
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
        },
        clampScalar: function() {
            var e, t;
            return function(n, i) {
                return void 0 === e && (e = new c, t = new c), e.set(n, n, n, n), t.set(i, i, i, i), this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(e) {
            return this.normalize().multiplyScalar(e)
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
        },
        lerpVectors: function(e, t, n) {
            return this.subVectors(t, e).multiplyScalar(n).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
        },
        fromBufferAttribute: function(e, t, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
        }
    }), l.prototype = Object.assign(Object.create(t.prototype), {
        constructor: l,
        isWebGLRenderTarget: !0,
        setSize: function(e, t) {
            (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), u.prototype = Object.create(l.prototype), u.prototype.constructor = u, u.prototype.isWebGLRenderTargetCube = !0, h.prototype = Object.create(s.prototype), h.prototype.constructor = h, h.prototype.isDataTexture = !0, p.prototype = Object.create(s.prototype), p.prototype.constructor = p, p.prototype.isCubeTexture = !0, Object.defineProperty(p.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(e) {
            this.image = e
        }
    });
    var sc = new s,
        cc = new p,
        lc = [],
        uc = [],
        hc = new Float32Array(16),
        pc = new Float32Array(9);
    V.prototype.setValue = function(e, t) {
        for (var n = this.seq, i = 0, r = n.length; i !== r; ++i) {
            var o = n[i];
            o.setValue(e, t[o.id])
        }
    };
    var dc = /([\w\d_]+)(\])?(\[|\.)?/g;
    W.prototype.setValue = function(e, t, n) {
        var i = this.map[t];
        void 0 !== i && i.setValue(e, n, this.renderer)
    }, W.prototype.setOptional = function(e, t, n) {
        var i = t[n];
        void 0 !== i && this.setValue(e, n, i)
    }, W.upload = function(e, t, n, i) {
        for (var r = 0, o = t.length; r !== o; ++r) {
            var a = t[r],
                s = n[a.id];
            s.needsUpdate !== !1 && a.setValue(e, s.value, i)
        }
    }, W.seqWithValue = function(e, t) {
        for (var n = [], i = 0, r = e.length; i !== r; ++i) {
            var o = e[i];
            o.id in t && n.push(o)
        }
        return n
    };
    var fc = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    Object.assign(X.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(e) {
            return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
        },
        setScalar: function(e) {
            return this.r = e, this.g = e, this.b = e, this
        },
        setHex: function(e) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
        },
        setRGB: function(e, t, n) {
            return this.r = e, this.g = t, this.b = n, this
        },
        setHSL: function() {
            function e(e, t, n) {
                return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? e + 6 * (t - e) * n : .5 > n ? t : 2 / 3 > n ? e + 6 * (t - e) * (2 / 3 - n) : e
            }
            return function(t, n, i) {
                if (t = oc.euclideanModulo(t, 1), n = oc.clamp(n, 0, 1), i = oc.clamp(i, 0, 1), 0 === n) this.r = this.g = this.b = i;
                else {
                    var r = .5 >= i ? i * (1 + n) : i + n - i * n,
                        o = 2 * i - r;
                    this.r = e(o, r, t + 1 / 3), this.g = e(o, r, t), this.b = e(o, r, t - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(e) {
            function t(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var i, r = n[1],
                    o = n[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[5]), this;
                        if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                            var a = parseFloat(i[1]) / 360,
                                s = parseInt(i[2], 10) / 100,
                                c = parseInt(i[3], 10) / 100;
                            return t(i[5]), this.setHSL(a, s, c)
                        }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                var l = n[1],
                    u = l.length;
                if (3 === u) return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
                if (6 === u) return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
            }
            if (e && e.length > 0) {
                var l = fc[e];
                void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + e)
            }
            return this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this
        },
        copyGammaToLinear: function(e, t) {
            return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
        },
        copyLinearToGamma: function(e, t) {
            void 0 === t && (t = 2);
            var n = t > 0 ? 1 / t : 1;
            return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
        },
        convertGammaToLinear: function() {
            var e = this.r,
                t = this.g,
                n = this.b;
            return this.r = e * e, this.g = t * t, this.b = n * n, this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(e) {
            var t, n, i = e || {
                    h: 0,
                    s: 0,
                    l: 0
                },
                r = this.r,
                o = this.g,
                a = this.b,
                s = Math.max(r, o, a),
                c = Math.min(r, o, a),
                l = (c + s) / 2;
            if (c === s) t = 0, n = 0;
            else {
                var u = s - c;
                switch (n = .5 >= l ? u / (s + c) : u / (2 - s - c), s) {
                    case r:
                        t = (o - a) / u + (a > o ? 6 : 0);
                        break;
                    case o:
                        t = (a - r) / u + 2;
                        break;
                    case a:
                        t = (r - o) / u + 4
                }
                t /= 6
            }
            return i.h = t, i.s = n, i.l = l, i
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(e, t, n) {
            var i = this.getHSL();
            return i.h += e, i.s += t, i.l += n, this.setHSL(i.h, i.s, i.l), this
        },
        add: function(e) {
            return this.r += e.r, this.g += e.g, this.b += e.b, this
        },
        addColors: function(e, t) {
            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
        },
        addScalar: function(e) {
            return this.r += e, this.g += e, this.b += e, this
        },
        sub: function(e) {
            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
        },
        multiply: function(e) {
            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
        },
        multiplyScalar: function(e) {
            return this.r *= e, this.g *= e, this.b *= e, this
        },
        lerp: function(e, t) {
            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
        },
        equals: function(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var mc = {
            common: {
                diffuse: {
                    value: new X(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new a
                },
                alphaMap: {
                    value: null
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new n(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new X(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new X(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new a
                }
            }
        },
        vc = {
            merge: function(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var i = this.clone(e[n]);
                    for (var r in i) t[r] = i[r]
                }
                return t
            },
            clone: function(e) {
                var t = {};
                for (var n in e) {
                    t[n] = {};
                    for (var i in e[n]) {
                        var r = e[n][i];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
                    }
                }
                return t
            }
        },
        gc = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
        yc = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n",
        xc = "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
        bc = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n",
        wc = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        _c = "\nvec3 transformed = vec3( position );\n",
        Mc = "\nvec3 objectNormal = vec3( normal );\n",
        Tc = "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		return distanceFalloff * maxDistanceCutoffFactor;\n#else\n		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n	}\n	return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE  = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS  = 0.5 / LUT_SIZE;\n	float theta = acos( dot( N, V ) );\n	vec2 uv = vec2(\n		sqrt( saturate( roughness ) ),\n		saturate( theta / ( 0.5 * PI ) ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n	float b = 3.45068 + (4.18814 + y) * y;\n	float v = a / b;\n	float theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	vec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n	return result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
        Ec = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n",
        Sc = "#if NUM_CLIPPING_PLANES > 0\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n		\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n			vec4 plane = clippingPlanes[ i ];\n			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		if ( clipped ) discard;\n	\n	#endif\n#endif\n",
        Cc = "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
        Ac = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n",
        Pc = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n",
        Rc = "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif",
        Lc = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n",
        Ic = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif",
        Oc = "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif",
        Bc = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\n",
        Dc = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif\n",
        Nc = "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n",
        Fc = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n",
        Uc = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
        kc = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
        zc = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n",
        Hc = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
        Gc = "\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n	float maxComponent = max( max( value.r, value.g ), value.b );\n	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.x, max( value.g, value.b ) );\n	float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n	M            = ceil( M * 255.0 ) / 255.0;\n	return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.x, max( value.g, value.b ) );\n	float D      = max( maxRange / maxRGB, 1.0 );\n	D            = min( floor( D ) / 255.0, 1.0 );\n	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n	vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n	Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n	vec4 vResult;\n	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n	vResult.w = fract(Le);\n	vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n	return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n	float Le = value.z * 255.0 + value.w;\n	vec3 Xp_Y_XYZp;\n	Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n	vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n	return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
        Vc = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		reflectVec = normalize( reflectVec );\n		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		reflectVec = normalize( reflectVec );\n		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n",
        jc = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n",
        $c = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif\n",
        Wc = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif\n",
        Xc = "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
        qc = "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
        Yc = "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
        Zc = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float fogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif\n",
        Jc = "#ifdef TOON\n	uniform sampler2D gradientMap;\n	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n		float dotNL = dot( normal, lightDirection );\n		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n		#ifdef USE_GRADIENTMAP\n			return texture2D( gradientMap, coord ).rgb;\n		#else\n			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n		#endif\n	}\n#endif\n",
        Qc = "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
        Kc = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        el = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n",
        tl = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n		float shadowCameraNear;\n		float shadowCameraFar;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltcMat;	uniform sampler2D ltcMag;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n",
        nl = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
        il = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifdef TOON\n		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#else\n		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n		vec3 irradiance = dotNL * directLight.color;\n	#endif\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n",
        rl = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
        ol = "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n	#ifndef STANDARD\n		float clearCoat;\n		float clearCoatRoughness;\n	#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.specularRoughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos - halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		float norm = texture2D( ltcMag, uv ).a;\n		vec4 t = texture2D( ltcMat, uv );\n		mat3 mInv = mat3(\n			vec3(   1,   0, t.y ),\n			vec3(   0, t.z,   0 ),\n			vec3( t.w,   0, t.x )\n		);\n		reflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifndef STANDARD\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	#ifndef STANDARD\n		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifndef STANDARD\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		float dotNL = dotNV;\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n	#ifndef STANDARD\n		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
        al = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n		irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	#ifndef STANDARD\n		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n	#else\n		vec3 clearCoatRadiance = vec3( 0.0 );\n	#endif\n	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
        sl = "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        cl = "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n",
        ll = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif",
        ul = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n		gl_Position.z *= gl_Position.w;\n	#endif\n#endif\n",
        hl = "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n",
        pl = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n",
        dl = "#ifdef USE_MAP\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	vec4 mapTexel = texture2D( map, uv );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
        fl = "#ifdef USE_MAP\n	uniform mat3 uvTransform;\n	uniform sampler2D map;\n#endif\n",
        ml = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif\n",
        vl = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        gl = "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
        yl = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
        xl = "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n",
        bl = "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#endif\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
        wl = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n",
        _l = "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
        Ml = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
        Tl = "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
        El = "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
        Sl = "#if defined( DITHERING )\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif\n",
        Cl = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif\n",
        Al = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        Pl = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			shadow = (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n",
        Rl = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n#endif\n",
        Ll = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n#endif\n",
        Il = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#endif\n	#endif\n	return shadow;\n}\n",
        Ol = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        Bl = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n",
        Dl = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
        Nl = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
        Fl = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        Ul = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        kl = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
        zl = "#ifndef saturate\n	#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
        Hl = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif",
        Gl = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\n",
        Vl = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        jl = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        $l = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif",
        Wl = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif",
        Xl = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n	vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
        ql = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	gl_FragColor.a *= opacity;\n}\n",
        Yl = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}\n",
        Zl = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}\n",
        Jl = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n",
        Ql = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}\n",
        Kl = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}\n",
        eu = "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
        tu = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n",
        nu = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        iu = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}\n",
        ru = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        ou = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}\n",
        au = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}\n",
        su = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
        cu = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}\n",
        lu = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
        uu = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n	uniform float clearCoat;\n	uniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}\n",
        hu = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
        pu = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
        du = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}\n",
        fu = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n",
        mu = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
        vu = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <fog_fragment>\n}\n",
        gu = "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}\n",
        yu = {
            alphamap_fragment: gc,
            alphamap_pars_fragment: yc,
            alphatest_fragment: xc,
            aomap_fragment: bc,
            aomap_pars_fragment: wc,
            begin_vertex: _c,
            beginnormal_vertex: Mc,
            bsdfs: Tc,
            bumpmap_pars_fragment: Ec,
            clipping_planes_fragment: Sc,
            clipping_planes_pars_fragment: Cc,
            clipping_planes_pars_vertex: Ac,
            clipping_planes_vertex: Pc,
            color_fragment: Rc,
            color_pars_fragment: Lc,
            color_pars_vertex: Ic,
            color_vertex: Oc,
            common: Bc,
            cube_uv_reflection_fragment: Dc,
            defaultnormal_vertex: Nc,
            displacementmap_pars_vertex: Fc,
            displacementmap_vertex: Uc,
            emissivemap_fragment: kc,
            emissivemap_pars_fragment: zc,
            encodings_fragment: Hc,
            encodings_pars_fragment: Gc,
            envmap_fragment: Vc,
            envmap_pars_fragment: jc,
            envmap_pars_vertex: $c,
            envmap_vertex: Wc,
            fog_vertex: Xc,
            fog_pars_vertex: qc,
            fog_fragment: Yc,
            fog_pars_fragment: Zc,
            gradientmap_pars_fragment: Jc,
            lightmap_fragment: Qc,
            lightmap_pars_fragment: Kc,
            lights_lambert_vertex: el,
            lights_pars: tl,
            lights_phong_fragment: nl,
            lights_phong_pars_fragment: il,
            lights_physical_fragment: rl,
            lights_physical_pars_fragment: ol,
            lights_template: al,
            logdepthbuf_fragment: sl,
            logdepthbuf_pars_fragment: cl,
            logdepthbuf_pars_vertex: ll,
            logdepthbuf_vertex: ul,
            map_fragment: hl,
            map_pars_fragment: pl,
            map_particle_fragment: dl,
            map_particle_pars_fragment: fl,
            metalnessmap_fragment: ml,
            metalnessmap_pars_fragment: vl,
            morphnormal_vertex: gl,
            morphtarget_pars_vertex: yl,
            morphtarget_vertex: xl,
            normal_fragment: bl,
            normalmap_pars_fragment: wl,
            packing: _l,
            premultiplied_alpha_fragment: Ml,
            project_vertex: Tl,
            dithering_fragment: El,
            dithering_pars_fragment: Sl,
            roughnessmap_fragment: Cl,
            roughnessmap_pars_fragment: Al,
            shadowmap_pars_fragment: Pl,
            shadowmap_pars_vertex: Rl,
            shadowmap_vertex: Ll,
            shadowmask_pars_fragment: Il,
            skinbase_vertex: Ol,
            skinning_pars_vertex: Bl,
            skinning_vertex: Dl,
            skinnormal_vertex: Nl,
            specularmap_fragment: Fl,
            specularmap_pars_fragment: Ul,
            tonemapping_fragment: kl,
            tonemapping_pars_fragment: zl,
            uv_pars_fragment: Hl,
            uv_pars_vertex: Gl,
            uv_vertex: Vl,
            uv2_pars_fragment: jl,
            uv2_pars_vertex: $l,
            uv2_vertex: Wl,
            worldpos_vertex: Xl,
            cube_frag: ql,
            cube_vert: Yl,
            depth_frag: Zl,
            depth_vert: Jl,
            distanceRGBA_frag: Ql,
            distanceRGBA_vert: Kl,
            equirect_frag: eu,
            equirect_vert: tu,
            linedashed_frag: nu,
            linedashed_vert: iu,
            meshbasic_frag: ru,
            meshbasic_vert: ou,
            meshlambert_frag: au,
            meshlambert_vert: su,
            meshphong_frag: cu,
            meshphong_vert: lu,
            meshphysical_frag: uu,
            meshphysical_vert: hu,
            normal_frag: pu,
            normal_vert: du,
            points_frag: fu,
            points_vert: mu,
            shadow_frag: vu,
            shadow_vert: gu
        },
        xu = {
            basic: {
                uniforms: vc.merge([mc.common, mc.specularmap, mc.envmap, mc.aomap, mc.lightmap, mc.fog]),
                vertexShader: yu.meshbasic_vert,
                fragmentShader: yu.meshbasic_frag
            },
            lambert: {
                uniforms: vc.merge([mc.common, mc.specularmap, mc.envmap, mc.aomap, mc.lightmap, mc.emissivemap, mc.fog, mc.lights, {
                    emissive: {
                        value: new X(0)
                    }
                }]),
                vertexShader: yu.meshlambert_vert,
                fragmentShader: yu.meshlambert_frag
            },
            phong: {
                uniforms: vc.merge([mc.common, mc.specularmap, mc.envmap, mc.aomap, mc.lightmap, mc.emissivemap, mc.bumpmap, mc.normalmap, mc.displacementmap, mc.gradientmap, mc.fog, mc.lights, {
                    emissive: {
                        value: new X(0)
                    },
                    specular: {
                        value: new X(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: yu.meshphong_vert,
                fragmentShader: yu.meshphong_frag
            },
            standard: {
                uniforms: vc.merge([mc.common, mc.envmap, mc.aomap, mc.lightmap, mc.emissivemap, mc.bumpmap, mc.normalmap, mc.displacementmap, mc.roughnessmap, mc.metalnessmap, mc.fog, mc.lights, {
                    emissive: {
                        value: new X(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: yu.meshphysical_vert,
                fragmentShader: yu.meshphysical_frag
            },
            points: {
                uniforms: vc.merge([mc.points, mc.fog]),
                vertexShader: yu.points_vert,
                fragmentShader: yu.points_frag
            },
            dashed: {
                uniforms: vc.merge([mc.common, mc.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: yu.linedashed_vert,
                fragmentShader: yu.linedashed_frag
            },
            depth: {
                uniforms: vc.merge([mc.common, mc.displacementmap]),
                vertexShader: yu.depth_vert,
                fragmentShader: yu.depth_frag
            },
            normal: {
                uniforms: vc.merge([mc.common, mc.bumpmap, mc.normalmap, mc.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: yu.normal_vert,
                fragmentShader: yu.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: yu.cube_vert,
                fragmentShader: yu.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: yu.equirect_vert,
                fragmentShader: yu.equirect_frag
            },
            distanceRGBA: {
                uniforms: vc.merge([mc.common, mc.displacementmap, {
                    referencePosition: {
                        value: new o
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: yu.distanceRGBA_vert,
                fragmentShader: yu.distanceRGBA_frag
            },
            shadow: {
                uniforms: vc.merge([mc.lights, mc.fog, {
                    color: {
                        value: new X(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: yu.shadow_vert,
                fragmentShader: yu.shadow_frag
            }
        };
    xu.physical = {
        uniforms: vc.merge([xu.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: yu.meshphysical_vert,
        fragmentShader: yu.meshphysical_frag
    }, Object.assign(q.prototype, {
        set: function(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, n = e.length; n > t; t++) this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new n;
            return function(t, n) {
                var i = e.copy(n).multiplyScalar(.5);
                return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = +(1 / 0), this.max.x = this.max.y = -(1 / 0), this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(e) {
            var t = e || new n;
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            var t = e || new n;
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function(e) {
            return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        containsPoint: function(e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
        },
        getParameter: function(e, t) {
            var i = t || new n;
            return i.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
        },
        clampPoint: function(e, t) {
            var i = t || new n;
            return i.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new n;
            return function(t) {
                var n = e.copy(t).clamp(this.min, this.max);
                return n.sub(t).length()
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min), this.max.min(e.max), this
        },
        union: function(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        },
        translate: function(e) {
            return this.min.add(e), this.max.add(e), this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }), Z.prototype = Object.create(s.prototype), Z.prototype.constructor = Z;
    var bu = 0;
    Q.prototype = Object.assign(Object.create(t.prototype), {
        constructor: Q,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(e) {
            if (void 0 !== e)
                for (var t in e) {
                    var n = e[t];
                    if (void 0 !== n)
                        if ("shading" !== t) {
                            var i = this[t];
                            void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : "overdraw" === t ? this[t] = Number(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                        } else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === na ? !0 : !1;
                    else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
                }
        },
        toJSON: function(e) {
            function t(e) {
                var t = [];
                for (var n in e) {
                    var i = e[n];
                    delete i.metadata, t.push(i)
                }
                return t
            }
            var n = void 0 === e || "string" == typeof e;
            n && (e = {
                textures: {},
                images: {}
            });
            var i = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, i.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== ca && (i.blending = this.blending), this.flatShading === !0 && (i.flatShading = this.flatShading), this.side !== Ko && (i.side = this.side), this.vertexColors !== ra && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, 0 !== this.rotation && (i.rotation = this.rotation), 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (i.morphTargets = !0), this.skinning === !0 && (i.skinning = !0), this.visible === !1 && (i.visible = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), n) {
                var r = t(e.textures),
                    o = t(e.images);
                r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o)
            }
            return i
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.overdraw = e.overdraw, this.visible = e.visible, this.userData = JSON.parse(JSON.stringify(e.userData)), this.clipShadows = e.clipShadows, this.clipIntersection = e.clipIntersection;
            var t = e.clippingPlanes,
                n = null;
            if (null !== t) {
                var i = t.length;
                n = new Array(i);
                for (var r = 0; r !== i; ++r) n[r] = t[r].clone()
            }
            return this.clippingPlanes = n, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), K.prototype = Object.create(Q.prototype), K.prototype.constructor = K, K.prototype.isMeshDepthMaterial = !0, K.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }, ee.prototype = Object.create(Q.prototype), ee.prototype.constructor = ee, ee.prototype.isMeshDistanceMaterial = !0, ee.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
    }, Object.assign(te.prototype, {
        isBox3: !0,
        set: function(e, t) {
            return this.min.copy(e), this.max.copy(t), this
        },
        setFromArray: function(e) {
            for (var t = +(1 / 0), n = +(1 / 0), i = +(1 / 0), r = -(1 / 0), o = -(1 / 0), a = -(1 / 0), s = 0, c = e.length; c > s; s += 3) {
                var l = e[s],
                    u = e[s + 1],
                    h = e[s + 2];
                t > l && (t = l), n > u && (n = u), i > h && (i = h), l > r && (r = l), u > o && (o = u), h > a && (a = h)
            }
            return this.min.set(t, n, i), this.max.set(r, o, a), this
        },
        setFromBufferAttribute: function(e) {
            for (var t = +(1 / 0), n = +(1 / 0), i = +(1 / 0), r = -(1 / 0), o = -(1 / 0), a = -(1 / 0), s = 0, c = e.count; c > s; s++) {
                var l = e.getX(s),
                    u = e.getY(s),
                    h = e.getZ(s);
                t > l && (t = l), n > u && (n = u), i > h && (i = h), l > r && (r = l), u > o && (o = u), h > a && (a = h)
            }
            return this.min.set(t, n, i), this.max.set(r, o, a), this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, n = e.length; n > t; t++) this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new o;
            return function(t, n) {
                var i = e.copy(n).multiplyScalar(.5);
                return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
            }
        }(),
        setFromObject: function(e) {
            return this.makeEmpty(), this.expandByObject(e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min), this.max.copy(e.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = +(1 / 0), this.max.x = this.max.y = this.max.z = -(1 / 0), this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(e) {
            var t = e || new o;
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            var t = e || new o;
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e), this.max.max(e), this
        },
        expandByVector: function(e) {
            return this.min.sub(e), this.max.add(e), this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e), this.max.addScalar(e), this
        },
        expandByObject: function() {
            function e(e) {
                var o = e.geometry;
                if (void 0 !== o)
                    if (o.isGeometry) {
                        var a = o.vertices;
                        for (n = 0, i = a.length; i > n; n++) r.copy(a[n]), r.applyMatrix4(e.matrixWorld), t.expandByPoint(r)
                    } else if (o.isBufferGeometry) {
                    var s = o.attributes.position;
                    if (void 0 !== s)
                        for (n = 0, i = s.count; i > n; n++) r.fromBufferAttribute(s, n).applyMatrix4(e.matrixWorld), t.expandByPoint(r)
                }
            }
            var t, n, i, r = new o;
            return function(n) {
                return t = this, n.updateMatrixWorld(!0), n.traverse(e), this
            }
        }(),
        containsPoint: function(e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
        },
        getParameter: function(e, t) {
            var n = t || new o;
            return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
        },
        intersectsSphere: function() {
            var e = new o;
            return function(t) {
                return this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
            }
        }(),
        intersectsPlane: function(e) {
            var t, n;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= e.constant && n >= e.constant
        },
        clampPoint: function(e, t) {
            var n = t || new o;
            return n.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new o;
            return function(t) {
                var n = e.copy(t).clamp(this.min, this.max);
                return n.sub(t).length()
            }
        }(),
        getBoundingSphere: function() {
            var e = new o;
            return function(t) {
                var n = t || new ne;
                return this.getCenter(n.center), n.radius = .5 * this.getSize(e).length(), n
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function(e) {
            return this.min.min(e.min), this.max.max(e.max), this
        },
        applyMatrix4: function() {
            var e = [new o, new o, new o, new o, new o, new o, new o, new o];
            return function(t) {
                return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(e), this)
            }
        }(),
        translate: function(e) {
            return this.min.add(e), this.max.add(e), this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    }), Object.assign(ne.prototype, {
        set: function(e, t) {
            return this.center.copy(e), this.radius = t, this
        },
        setFromPoints: function() {
            var e = new te;
            return function(t, n) {
                var i = this.center;
                void 0 !== n ? i.copy(n) : e.setFromPoints(t).getCenter(i);
                for (var r = 0, o = 0, a = t.length; a > o; o++) r = Math.max(r, i.distanceToSquared(t[o]));
                return this.radius = Math.sqrt(r), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.center.copy(e.center), this.radius = e.radius, this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(e) {
            return e.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(e) {
            var t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        },
        intersectsBox: function(e) {
            return e.intersectsSphere(this)
        },
        intersectsPlane: function(e) {
            return Math.abs(e.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(e, t) {
            var n = this.center.distanceToSquared(e),
                i = t || new o;
            return i.copy(e), n > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i
        },
        getBoundingBox: function(e) {
            var t = e || new te;
            return t.set(this.center, this.center), t.expandByScalar(this.radius), t
        },
        applyMatrix4: function(e) {
            return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
        },
        translate: function(e) {
            return this.center.add(e), this
        },
        equals: function(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
    }), Object.assign(ie.prototype, {
        set: function(e, t) {
            return this.normal.copy(e), this.constant = t, this
        },
        setComponents: function(e, t, n, i) {
            return this.normal.set(e, t, n), this.constant = i, this
        },
        setFromNormalAndCoplanarPoint: function(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
        },
        setFromCoplanarPoints: function() {
            var e = new o,
                t = new o;
            return function(n, i, r) {
                var o = e.subVectors(r, i).cross(t.subVectors(n, i)).normalize();
                return this.setFromNormalAndCoplanarPoint(o, n), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.normal.copy(e.normal), this.constant = e.constant, this
        },
        normalize: function() {
            var e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e), this.constant *= e, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(e) {
            return this.normal.dot(e) + this.constant
        },
        distanceToSphere: function(e) {
            return this.distanceToPoint(e.center) - e.radius
        },
        projectPoint: function(e, t) {
            var n = t || new o;
            return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
        },
        intersectLine: function() {
            var e = new o;
            return function(t, n) {
                var i = n || new o,
                    r = t.delta(e),
                    a = this.normal.dot(r);
                if (0 !== a) {
                    var s = -(t.start.dot(this.normal) + this.constant) / a;
                    if (!(0 > s || s > 1)) return i.copy(r).multiplyScalar(s).add(t.start)
                } else if (0 === this.distanceToPoint(t.start)) return i.copy(t.start)
            }
        }(),
        intersectsLine: function(e) {
            var t = this.distanceToPoint(e.start),
                n = this.distanceToPoint(e.end);
            return 0 > t && n > 0 || 0 > n && t > 0
        },
        intersectsBox: function(e) {
            return e.intersectsPlane(this)
        },
        intersectsSphere: function(e) {
            return e.intersectsPlane(this)
        },
        coplanarPoint: function(e) {
            var t = e || new o;
            return t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var e = new o,
                t = new a;
            return function(n, i) {
                var r = i || t.getNormalMatrix(n),
                    o = this.coplanarPoint(e).applyMatrix4(n),
                    a = this.normal.applyMatrix3(r).normalize();
                return this.constant = -o.dot(a), this
            }
        }(),
        translate: function(e) {
            return this.constant -= e.dot(this.normal), this
        },
        equals: function(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
    }), Object.assign(re.prototype, {
        set: function(e, t, n, i, r, o) {
            var a = this.planes;
            return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            for (var t = this.planes, n = 0; 6 > n; n++) t[n].copy(e.planes[n]);
            return this
        },
        setFromMatrix: function(e) {
            var t = this.planes,
                n = e.elements,
                i = n[0],
                r = n[1],
                o = n[2],
                a = n[3],
                s = n[4],
                c = n[5],
                l = n[6],
                u = n[7],
                h = n[8],
                p = n[9],
                d = n[10],
                f = n[11],
                m = n[12],
                v = n[13],
                g = n[14],
                y = n[15];
            return t[0].setComponents(a - i, u - s, f - h, y - m).normalize(), t[1].setComponents(a + i, u + s, f + h, y + m).normalize(), t[2].setComponents(a + r, u + c, f + p, y + v).normalize(), t[3].setComponents(a - r, u - c, f - p, y - v).normalize(), t[4].setComponents(a - o, u - l, f - d, y - g).normalize(), t[5].setComponents(a + o, u + l, f + d, y + g).normalize(), this
        },
        intersectsObject: function() {
            var e = new ne;
            return function(t) {
                var n = t.geometry;
                return null === n.boundingSphere && n.computeBoundingSphere(), e.copy(n.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(),
        intersectsSprite: function() {
            var e = new ne;
            return function(t) {
                return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
            }
        }(),
        intersectsSphere: function(e) {
            for (var t = this.planes, n = e.center, i = -e.radius, r = 0; 6 > r; r++) {
                var o = t[r].distanceToPoint(n);
                if (i > o) return !1
            }
            return !0
        },
        intersectsBox: function() {
            var e = new o,
                t = new o;
            return function(n) {
                for (var i = this.planes, r = 0; 6 > r; r++) {
                    var o = i[r];
                    e.x = o.normal.x > 0 ? n.min.x : n.max.x, t.x = o.normal.x > 0 ? n.max.x : n.min.x, e.y = o.normal.y > 0 ? n.min.y : n.max.y, t.y = o.normal.y > 0 ? n.max.y : n.min.y, e.z = o.normal.z > 0 ? n.min.z : n.max.z, t.z = o.normal.z > 0 ? n.max.z : n.min.z;
                    var a = o.distanceToPoint(e),
                        s = o.distanceToPoint(t);
                    if (0 > a && 0 > s) return !1
                }
                return !0
            }
        }(),
        containsPoint: function(e) {
            for (var t = this.planes, n = 0; 6 > n; n++)
                if (t[n].distanceToPoint(e) < 0) return !1;
            return !0
        }
    }), se.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], se.DefaultOrder = "XYZ", Object.defineProperties(se.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(e) {
                this._x = e, this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(e) {
                this._y = e, this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(e) {
                this._z = e, this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(e) {
                this._order = e, this.onChangeCallback()
            }
        }
    }), Object.assign(se.prototype, {
        isEuler: !0,
        set: function(e, t, n, i) {
            return this._x = e, this._y = t, this._z = n, this._order = i || this._order, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(e, t, n) {
            var i = oc.clamp,
                r = e.elements,
                o = r[0],
                a = r[4],
                s = r[8],
                c = r[1],
                l = r[5],
                u = r[9],
                h = r[2],
                p = r[6],
                d = r[10];
            return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(p, l), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-i(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, o), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, o))) : "ZYX" === t ? (this._y = Math.asin(-i(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-a, l))) : "YZX" === t ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, o)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-i(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(p, l), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, n !== !1 && this.onChangeCallback(), this
        },
        setFromQuaternion: function() {
            var e = new i;
            return function(t, n, i) {
                return e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, n, i)
            }
        }(),
        setFromVector3: function(e, t) {
            return this.set(e.x, e.y, e.z, t || this._order)
        },
        reorder: function() {
            var e = new r;
            return function(t) {
                return e.setFromEuler(this), this.setFromQuaternion(e, t)
            }
        }(),
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        },
        fromArray: function(e) {
            return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
        },
        toVector3: function(e) {
            return e ? e.set(this._x, this._y, this._z) : new o(this._x, this._y, this._z)
        },
        onChange: function(e) {
            return this.onChangeCallback = e, this
        },
        onChangeCallback: function() {}
    }), Object.assign(ce.prototype, {
        set: function(e) {
            this.mask = 1 << e | 0
        },
        enable: function(e) {
            this.mask |= 1 << e | 0
        },
        toggle: function(e) {
            this.mask ^= 1 << e | 0
        },
        disable: function(e) {
            this.mask &= ~(1 << e | 0)
        },
        test: function(e) {
            return 0 !== (this.mask & e.mask)
        }
    });
    var wu = 0;
    le.DefaultUp = new o(0, 1, 0), le.DefaultMatrixAutoUpdate = !0, le.prototype = Object.assign(Object.create(t.prototype), {
        constructor: le,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(e) {
            this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(e) {
            return this.quaternion.premultiply(e), this
        },
        setRotationFromAxisAngle: function(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        },
        setRotationFromEuler: function(e) {
            this.quaternion.setFromEuler(e, !0)
        },
        setRotationFromMatrix: function(e) {
            this.quaternion.setFromRotationMatrix(e)
        },
        setRotationFromQuaternion: function(e) {
            this.quaternion.copy(e)
        },
        rotateOnAxis: function() {
            var e = new r;
            return function(t, n) {
                return e.setFromAxisAngle(t, n), this.quaternion.multiply(e), this
            }
        }(),
        rotateOnWorldAxis: function() {
            var e = new r;
            return function(t, n) {
                return e.setFromAxisAngle(t, n), this.quaternion.premultiply(e), this
            }
        }(),
        rotateX: function() {
            var e = new o(1, 0, 0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateY: function() {
            var e = new o(0, 1, 0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateZ: function() {
            var e = new o(0, 0, 1);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        translateOnAxis: function() {
            var e = new o;
            return function(t, n) {
                return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(n)), this
            }
        }(),
        translateX: function() {
            var e = new o(1, 0, 0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateY: function() {
            var e = new o(0, 1, 0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateZ: function() {
            var e = new o(0, 0, 1);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        localToWorld: function(e) {
            return e.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var e = new i;
            return function(t) {
                return t.applyMatrix4(e.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var e = new i,
                t = new o;
            return function(n, i, r) {
                n.isVector3 ? t.copy(n) : t.set(n, i, r), this.isCamera ? e.lookAt(this.position, t, this.up) : e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
            }
        }(),
        add: function(e) {
            if (arguments.length > 1) {
                for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
                type: "added"
            }), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
        },
        remove: function(e) {
            if (arguments.length > 1) {
                for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
                return this
            }
            var n = this.children.indexOf(e);
            return -1 !== n && (e.parent = null, e.dispatchEvent({
                type: "removed"
            }), this.children.splice(n, 1)), this
        },
        getObjectById: function(e) {
            return this.getObjectByProperty("id", e)
        },
        getObjectByName: function(e) {
            return this.getObjectByProperty("name", e)
        },
        getObjectByProperty: function(e, t) {
            if (this[e] === t) return this;
            for (var n = 0, i = this.children.length; i > n; n++) {
                var r = this.children[n],
                    o = r.getObjectByProperty(e, t);
                if (void 0 !== o) return o
            }
        },
        getWorldPosition: function(e) {
            var t = e || new o;
            return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var e = new o,
                t = new o;
            return function(n) {
                var i = n || new r;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, i, t), i
            }
        }(),
        getWorldRotation: function() {
            var e = new r;
            return function(t) {
                var n = t || new se;
                return this.getWorldQuaternion(e), n.setFromQuaternion(e, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var e = new o,
                t = new r;
            return function(n) {
                var i = n || new o;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, i), i
            }
        }(),
        getWorldDirection: function() {
            var e = new r;
            return function(t) {
                var n = t || new o;
                return this.getWorldQuaternion(e), n.set(0, 0, 1).applyQuaternion(e)
            }
        }(),
        raycast: function() {},
        traverse: function(e) {
            e(this);
            for (var t = this.children, n = 0, i = t.length; i > n; n++) t[n].traverse(e)
        },
        traverseVisible: function(e) {
            if (this.visible !== !1) {
                e(this);
                for (var t = this.children, n = 0, i = t.length; i > n; n++) t[n].traverseVisible(e)
            }
        },
        traverseAncestors: function(e) {
            var t = this.parent;
            null !== t && (e(t), t.traverseAncestors(e))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
            for (var t = this.children, n = 0, i = t.length; i > n; n++) t[n].updateMatrixWorld(e)
        },
        toJSON: function(e) {
            function t(t, n) {
                return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
            }

            function n(e) {
                var t = [];
                for (var n in e) {
                    var i = e[n];
                    delete i.metadata, t.push(i)
                }
                return t
            }
            var i = void 0 === e || "string" == typeof e,
                r = {};
            i && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            }, r.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var o = {};
            if (o.uuid = this.uuid, o.type = this.type, "" !== this.name && (o.name = this.name), this.castShadow === !0 && (o.castShadow = !0), this.receiveShadow === !0 && (o.receiveShadow = !0), this.visible === !1 && (o.visible = !1), "{}" !== JSON.stringify(this.userData) && (o.userData = this.userData), o.matrix = this.matrix.toArray(), void 0 !== this.geometry) {
                o.geometry = t(e.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var s = a.shapes;
                    if (Array.isArray(s))
                        for (var c = 0, l = s.length; l > c; c++) {
                            var u = s[c];
                            t(e.shapes, u)
                        } else t(e.shapes, s)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (var h = [], c = 0, l = this.material.length; l > c; c++) h.push(t(e.materials, this.material[c]));
                    o.material = h
                } else o.material = t(e.materials, this.material);
            if (this.children.length > 0) {
                o.children = [];
                for (var c = 0; c < this.children.length; c++) o.children.push(this.children[c].toJSON(e).object)
            }
            if (i) {
                var p = n(e.geometries),
                    d = n(e.materials),
                    f = n(e.textures),
                    m = n(e.images),
                    s = n(e.shapes);
                p.length > 0 && (r.geometries = p), d.length > 0 && (r.materials = d), f.length > 0 && (r.textures = f), m.length > 0 && (r.images = m), s.length > 0 && (r.shapes = s)
            }
            return r.object = o, r
        },
        clone: function(e) {
            return (new this.constructor).copy(this, e)
        },
        copy: function(e, t) {
            if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
                for (var n = 0; n < e.children.length; n++) {
                    var i = e.children[n];
                    this.add(i.clone())
                }
            return this
        }
    }), ue.prototype = Object.assign(Object.create(le.prototype), {
        constructor: ue,
        isCamera: !0,
        copy: function(e, t) {
            return le.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
        },
        getWorldDirection: function() {
            var e = new r;
            return function(t) {
                var n = t || new o;
                return this.getWorldQuaternion(e), n.set(0, 0, -1).applyQuaternion(e)
            }
        }(),
        updateMatrixWorld: function(e) {
            le.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), he.prototype = Object.assign(Object.create(ue.prototype), {
        constructor: he,
        isOrthographicCamera: !0,
        copy: function(e, t) {
            return ue.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
        },
        setViewOffset: function(e, t, n, i, r, o) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = (this.right - this.left) / (2 * this.zoom),
                t = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2,
                i = (this.top + this.bottom) / 2,
                r = n - e,
                o = n + e,
                a = i + t,
                s = i - t;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / (this.view.width / this.view.fullWidth),
                    l = this.zoom / (this.view.height / this.view.fullHeight),
                    u = (this.right - this.left) / this.view.width,
                    h = (this.top - this.bottom) / this.view.height;
                r += u * (this.view.offsetX / c), o = r + u * (this.view.width / c), a -= h * (this.view.offsetY / l), s = a - h * (this.view.height / l)
            }
            this.projectionMatrix.makeOrthographic(r, o, a, s, this.near, this.far)
        },
        toJSON: function(e) {
            var t = le.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
        }
    }), Object.assign(pe.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
            for (var t = 0, n = e.vertexNormals.length; n > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
            for (var t = 0, n = e.vertexColors.length; n > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
            return this
        }
    });
    var _u = 0;
    de.prototype = Object.assign(Object.create(t.prototype), {
        constructor: de,
        isGeometry: !0,
        applyMatrix: function(e) {
            for (var t = (new a).getNormalMatrix(e), n = 0, i = this.vertices.length; i > n; n++) {
                var r = this.vertices[n];
                r.applyMatrix4(e)
            }
            for (var n = 0, i = this.faces.length; i > n; n++) {
                var o = this.faces[n];
                o.normal.applyMatrix3(t).normalize();
                for (var s = 0, c = o.vertexNormals.length; c > s; s++) o.vertexNormals[s].applyMatrix3(t).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function() {
            var e = new i;
            return function(t) {
                return e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(),
        rotateY: function() {
            var e = new i;
            return function(t) {
                return e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(),
        rotateZ: function() {
            var e = new i;
            return function(t) {
                return e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(),
        translate: function() {
            var e = new i;
            return function(t, n, i) {
                return e.makeTranslation(t, n, i), this.applyMatrix(e), this
            }
        }(),
        scale: function() {
            var e = new i;
            return function(t, n, i) {
                return e.makeScale(t, n, i), this.applyMatrix(e), this
            }
        }(),
        lookAt: function() {
            var e = new le;
            return function(t) {
                e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(),
        fromBufferGeometry: function(e) {
            function t(e, t, n, r) {
                var o = void 0 !== c ? [p[e].clone(), p[t].clone(), p[n].clone()] : [],
                    a = void 0 !== l ? [i.colors[e].clone(), i.colors[t].clone(), i.colors[n].clone()] : [],
                    s = new pe(e, t, n, o, a, r);
                i.faces.push(s), void 0 !== u && i.faceVertexUvs[0].push([d[e].clone(), d[t].clone(), d[n].clone()]), void 0 !== h && i.faceVertexUvs[1].push([f[e].clone(), f[t].clone(), f[n].clone()])
            }
            var i = this,
                r = null !== e.index ? e.index.array : void 0,
                a = e.attributes,
                s = a.position.array,
                c = void 0 !== a.normal ? a.normal.array : void 0,
                l = void 0 !== a.color ? a.color.array : void 0,
                u = void 0 !== a.uv ? a.uv.array : void 0,
                h = void 0 !== a.uv2 ? a.uv2.array : void 0;
            void 0 !== h && (this.faceVertexUvs[1] = []);
            for (var p = [], d = [], f = [], m = 0, v = 0; m < s.length; m += 3, v += 2) i.vertices.push(new o(s[m], s[m + 1], s[m + 2])), void 0 !== c && p.push(new o(c[m], c[m + 1], c[m + 2])), void 0 !== l && i.colors.push(new X(l[m], l[m + 1], l[m + 2])), void 0 !== u && d.push(new n(u[v], u[v + 1])), void 0 !== h && f.push(new n(h[v], h[v + 1]));
            var g = e.groups;
            if (g.length > 0)
                for (var m = 0; m < g.length; m++)
                    for (var y = g[m], x = y.start, b = y.count, v = x, w = x + b; w > v; v += 3) void 0 !== r ? t(r[v], r[v + 1], r[v + 2], y.materialIndex) : t(v, v + 1, v + 2, y.materialIndex);
            else if (void 0 !== r)
                for (var m = 0; m < r.length; m += 3) t(r[m], r[m + 1], r[m + 2]);
            else
                for (var m = 0; m < s.length / 3; m += 3) t(m, m + 1, m + 2);
            return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
        },
        center: function() {
            this.computeBoundingBox();
            var e = this.boundingBox.getCenter().negate();
            return this.translate(e.x, e.y, e.z), e
        },
        normalize: function() {
            this.computeBoundingSphere();
            var e = this.boundingSphere.center,
                t = this.boundingSphere.radius,
                n = 0 === t ? 1 : 1 / t,
                r = new i;
            return r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1), this.applyMatrix(r), this
        },
        computeFaceNormals: function() {
            for (var e = new o, t = new o, n = 0, i = this.faces.length; i > n; n++) {
                var r = this.faces[n],
                    a = this.vertices[r.a],
                    s = this.vertices[r.b],
                    c = this.vertices[r.c];
                e.subVectors(c, s), t.subVectors(a, s), e.cross(t), e.normalize(), r.normal.copy(e)
            }
        },
        computeVertexNormals: function(e) {
            void 0 === e && (e = !0);
            var t, n, i, r, a, s;
            for (s = new Array(this.vertices.length), t = 0, n = this.vertices.length; n > t; t++) s[t] = new o;
            if (e) {
                var c, l, u, h = new o,
                    p = new o;
                for (i = 0, r = this.faces.length; r > i; i++) a = this.faces[i], c = this.vertices[a.a], l = this.vertices[a.b], u = this.vertices[a.c], h.subVectors(u, l), p.subVectors(c, l), h.cross(p), s[a.a].add(h), s[a.b].add(h), s[a.c].add(h)
            } else
                for (this.computeFaceNormals(), i = 0, r = this.faces.length; r > i; i++) a = this.faces[i], s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
            for (t = 0, n = this.vertices.length; n > t; t++) s[t].normalize();
            for (i = 0, r = this.faces.length; r > i; i++) {
                a = this.faces[i];
                var d = a.vertexNormals;
                3 === d.length ? (d[0].copy(s[a.a]), d[1].copy(s[a.b]), d[2].copy(s[a.c])) : (d[0] = s[a.a].clone(), d[1] = s[a.b].clone(), d[2] = s[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var e, t, n;
            for (this.computeFaceNormals(), e = 0, t = this.faces.length; t > e; e++) {
                n = this.faces[e];
                var i = n.vertexNormals;
                3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var e, t, n, i, r;
            for (n = 0, i = this.faces.length; i > n; n++)
                for (r = this.faces[n], r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), e = 0, t = r.vertexNormals.length; t > e; e++) r.__originalVertexNormals[e] ? r.__originalVertexNormals[e].copy(r.vertexNormals[e]) : r.__originalVertexNormals[e] = r.vertexNormals[e].clone();
            var a = new de;
            for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                    var s, c, l = this.morphNormals[e].faceNormals,
                        u = this.morphNormals[e].vertexNormals;
                    for (n = 0, i = this.faces.length; i > n; n++) s = new o, c = {
                        a: new o,
                        b: new o,
                        c: new o
                    }, l.push(s), u.push(c)
                }
                var h = this.morphNormals[e];
                a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
                var s, c;
                for (n = 0, i = this.faces.length; i > n; n++) r = this.faces[n], s = h.faceNormals[n], c = h.vertexNormals[n], s.copy(r.normal), c.a.copy(r.vertexNormals[0]), c.b.copy(r.vertexNormals[1]), c.c.copy(r.vertexNormals[2])
            }
            for (n = 0, i = this.faces.length; i > n; n++) r = this.faces[n], r.normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        },
        computeLineDistances: function() {
            for (var e = 0, t = this.vertices, n = 0, i = t.length; i > n; n++) n > 0 && (e += t[n].distanceTo(t[n - 1])), this.lineDistances[n] = e
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new te), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new ne), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(e, t, n) {
            if (!e || !e.isGeometry) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
            var i, r = this.vertices.length,
                o = this.vertices,
                s = e.vertices,
                c = this.faces,
                l = e.faces,
                u = this.faceVertexUvs[0],
                h = e.faceVertexUvs[0],
                p = this.colors,
                d = e.colors;
            void 0 === n && (n = 0), void 0 !== t && (i = (new a).getNormalMatrix(t));
            for (var f = 0, m = s.length; m > f; f++) {
                var v = s[f],
                    g = v.clone();
                void 0 !== t && g.applyMatrix4(t), o.push(g)
            }
            for (var f = 0, m = d.length; m > f; f++) p.push(d[f].clone());
            for (f = 0, m = l.length; m > f; f++) {
                var y, x, b, w = l[f],
                    _ = w.vertexNormals,
                    M = w.vertexColors;
                y = new pe(w.a + r, w.b + r, w.c + r), y.normal.copy(w.normal), void 0 !== i && y.normal.applyMatrix3(i).normalize();
                for (var T = 0, E = _.length; E > T; T++) x = _[T].clone(), void 0 !== i && x.applyMatrix3(i).normalize(), y.vertexNormals.push(x);
                y.color.copy(w.color);
                for (var T = 0, E = M.length; E > T; T++) b = M[T], y.vertexColors.push(b.clone());
                y.materialIndex = w.materialIndex + n, c.push(y)
            }
            for (f = 0, m = h.length; m > f; f++) {
                var S = h[f],
                    C = [];
                if (void 0 !== S) {
                    for (var T = 0, E = S.length; E > T; T++) C.push(S[T].clone());
                    u.push(C)
                }
            }
        },
        mergeMesh: function(e) {
            return e && e.isMesh ? (e.matrixAutoUpdate && e.updateMatrix(), void this.merge(e.geometry, e.matrix)) : void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e)
        },
        mergeVertices: function() {
            var e, t, n, i, r, o, a, s, c = {},
                l = [],
                u = [],
                h = 4,
                p = Math.pow(10, h);
            for (n = 0, i = this.vertices.length; i > n; n++) e = this.vertices[n], t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p), void 0 === c[t] ? (c[t] = n, l.push(this.vertices[n]), u[n] = l.length - 1) : u[n] = u[c[t]];
            var d = [];
            for (n = 0, i = this.faces.length; i > n; n++) {
                r = this.faces[n], r.a = u[r.a], r.b = u[r.b], r.c = u[r.c], o = [r.a, r.b, r.c];
                for (var f = 0; 3 > f; f++)
                    if (o[f] === o[(f + 1) % 3]) {
                        d.push(n);
                        break
                    }
            }
            for (n = d.length - 1; n >= 0; n--) {
                var m = d[n];
                for (this.faces.splice(m, 1), a = 0, s = this.faceVertexUvs.length; s > a; a++) this.faceVertexUvs[a].splice(m, 1)
            }
            var v = this.vertices.length - l.length;
            return this.vertices = l, v
        },
        setFromPoints: function(e) {
            this.vertices = [];
            for (var t = 0, n = e.length; n > t; t++) {
                var i = e[t];
                this.vertices.push(new o(i.x, i.y, i.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            function e(e, t) {
                return e.materialIndex - t.materialIndex
            }
            for (var t = this.faces, n = t.length, i = 0; n > i; i++) t[i]._id = i;
            t.sort(e);
            var r, o, a = this.faceVertexUvs[0],
                s = this.faceVertexUvs[1];
            a && a.length === n && (r = []), s && s.length === n && (o = []);
            for (var i = 0; n > i; i++) {
                var c = t[i]._id;
                r && r.push(a[c]), o && o.push(s[c])
            }
            r && (this.faceVertexUvs[0] = r), o && (this.faceVertexUvs[1] = o)
        },
        toJSON: function() {
            function e(e, t, n) {
                return n ? e | 1 << t : e & ~(1 << t)
            }

            function t(e) {
                var t = e.x.toString() + e.y.toString() + e.z.toString();
                return void 0 !== p[t] ? p[t] : (p[t] = h.length / 3, h.push(e.x, e.y, e.z), p[t])
            }

            function n(e) {
                var t = e.r.toString() + e.g.toString() + e.b.toString();
                return void 0 !== f[t] ? f[t] : (f[t] = d.length, d.push(e.getHex()), f[t])
            }

            function i(e) {
                var t = e.x.toString() + e.y.toString();
                return void 0 !== v[t] ? v[t] : (v[t] = m.length / 2, m.push(e.x, e.y), v[t])
            }
            var r = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
                var o = this.parameters;
                for (var a in o) void 0 !== o[a] && (r[a] = o[a]);
                return r
            }
            for (var s = [], c = 0; c < this.vertices.length; c++) {
                var l = this.vertices[c];
                s.push(l.x, l.y, l.z)
            }
            for (var u = [], h = [], p = {}, d = [], f = {}, m = [], v = {}, c = 0; c < this.faces.length; c++) {
                var g = this.faces[c],
                    y = !0,
                    x = !1,
                    b = void 0 !== this.faceVertexUvs[0][c],
                    w = g.normal.length() > 0,
                    _ = g.vertexNormals.length > 0,
                    M = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
                    T = g.vertexColors.length > 0,
                    E = 0;
                if (E = e(E, 0, 0), E = e(E, 1, y), E = e(E, 2, x), E = e(E, 3, b), E = e(E, 4, w), E = e(E, 5, _), E = e(E, 6, M), E = e(E, 7, T), u.push(E), u.push(g.a, g.b, g.c), u.push(g.materialIndex), b) {
                    var S = this.faceVertexUvs[0][c];
                    u.push(i(S[0]), i(S[1]), i(S[2]))
                }
                if (w && u.push(t(g.normal)), _) {
                    var C = g.vertexNormals;
                    u.push(t(C[0]), t(C[1]), t(C[2]))
                }
                if (M && u.push(n(g.color)), T) {
                    var A = g.vertexColors;
                    u.push(n(A[0]), n(A[1]), n(A[2]))
                }
            }
            return r.data = {}, r.data.vertices = s, r.data.normals = h, d.length > 0 && (r.data.colors = d), m.length > 0 && (r.data.uvs = [m]), r.data.faces = u, r
        },
        clone: function() {
            return (new de).copy(this)
        },
        copy: function(e) {
            var t, n, i, r, o, a;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
            var s = e.vertices;
            for (t = 0, n = s.length; n > t; t++) this.vertices.push(s[t].clone());
            var c = e.colors;
            for (t = 0, n = c.length; n > t; t++) this.colors.push(c[t].clone());
            var l = e.faces;
            for (t = 0, n = l.length; n > t; t++) this.faces.push(l[t].clone());
            for (t = 0, n = e.faceVertexUvs.length; n > t; t++) {
                var u = e.faceVertexUvs[t];
                for (void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []), i = 0, r = u.length; r > i; i++) {
                    var h = u[i],
                        p = [];
                    for (o = 0, a = h.length; a > o; o++) {
                        var d = h[o];
                        p.push(d.clone())
                    }
                    this.faceVertexUvs[t].push(p)
                }
            }
            var f = e.morphTargets;
            for (t = 0, n = f.length; n > t; t++) {
                var m = {};
                if (m.name = f[t].name, void 0 !== f[t].vertices)
                    for (m.vertices = [], i = 0, r = f[t].vertices.length; r > i; i++) m.vertices.push(f[t].vertices[i].clone());
                if (void 0 !== f[t].normals)
                    for (m.normals = [], i = 0, r = f[t].normals.length; r > i; i++) m.normals.push(f[t].normals[i].clone());
                this.morphTargets.push(m)
            }
            var v = e.morphNormals;
            for (t = 0, n = v.length; n > t; t++) {
                var g = {};
                if (void 0 !== v[t].vertexNormals)
                    for (g.vertexNormals = [], i = 0, r = v[t].vertexNormals.length; r > i; i++) {
                        var y = v[t].vertexNormals[i],
                            x = {};
                        x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
                    }
                if (void 0 !== v[t].faceNormals)
                    for (g.faceNormals = [], i = 0, r = v[t].faceNormals.length; r > i; i++) g.faceNormals.push(v[t].faceNormals[i].clone());
                this.morphNormals.push(g)
            }
            var b = e.skinWeights;
            for (t = 0, n = b.length; n > t; t++) this.skinWeights.push(b[t].clone());
            var w = e.skinIndices;
            for (t = 0, n = w.length; n > t; t++) this.skinIndices.push(w[t].clone());
            var _ = e.lineDistances;
            for (t = 0, n = _.length; n > t; t++) this.lineDistances.push(_[t]);
            var M = e.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var T = e.boundingSphere;
            return null !== T && (this.boundingSphere = T.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(fe.prototype, "needsUpdate", {
        set: function(e) {
            e === !0 && this.version++
        }
    }), Object.assign(fe.prototype, {
        isBufferAttribute: !0,
        setArray: function(e) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== e ? e.length / this.itemSize : 0, this.array = e
        },
        setDynamic: function(e) {
            return this.dynamic = e, this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.dynamic = e.dynamic, this
        },
        copyAt: function(e, t, n) {
            e *= this.itemSize, n *= t.itemSize;
            for (var i = 0, r = this.itemSize; r > i; i++) this.array[e + i] = t.array[n + i];
            return this
        },
        copyArray: function(e) {
            return this.array.set(e), this
        },
        copyColorsArray: function(e) {
            for (var t = this.array, n = 0, i = 0, r = e.length; r > i; i++) {
                var o = e[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new X), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b
            }
            return this
        },
        copyIndicesArray: function(e) {
            for (var t = this.array, n = 0, i = 0, r = e.length; r > i; i++) {
                var o = e[i];
                t[n++] = o.a, t[n++] = o.b, t[n++] = o.c
            }
            return this
        },
        copyVector2sArray: function(e) {
            for (var t = this.array, i = 0, r = 0, o = e.length; o > r; r++) {
                var a = e[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new n), t[i++] = a.x, t[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function(e) {
            for (var t = this.array, n = 0, i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new o), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
            }
            return this
        },
        copyVector4sArray: function(e) {
            for (var t = this.array, n = 0, i = 0, r = e.length; r > i; i++) {
                var o = e[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new c), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w
            }
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        },
        getX: function(e) {
            return this.array[e * this.itemSize]
        },
        setX: function(e, t) {
            return this.array[e * this.itemSize] = t, this
        },
        getY: function(e) {
            return this.array[e * this.itemSize + 1]
        },
        setY: function(e, t) {
            return this.array[e * this.itemSize + 1] = t, this
        },
        getZ: function(e) {
            return this.array[e * this.itemSize + 2]
        },
        setZ: function(e, t) {
            return this.array[e * this.itemSize + 2] = t, this
        },
        getW: function(e) {
            return this.array[e * this.itemSize + 3]
        },
        setW: function(e, t) {
            return this.array[e * this.itemSize + 3] = t, this
        },
        setXY: function(e, t, n) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
        },
        setXYZ: function(e, t, n, i) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
        },
        setXYZW: function(e, t, n, i, r) {
            return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this
        },
        onUpload: function(e) {
            return this.onUploadCallback = e, this
        },
        clone: function() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    }), me.prototype = Object.create(fe.prototype), me.prototype.constructor = me, ve.prototype = Object.create(fe.prototype), ve.prototype.constructor = ve, ge.prototype = Object.create(fe.prototype), ge.prototype.constructor = ge, ye.prototype = Object.create(fe.prototype), ye.prototype.constructor = ye, xe.prototype = Object.create(fe.prototype), xe.prototype.constructor = xe, be.prototype = Object.create(fe.prototype), be.prototype.constructor = be, we.prototype = Object.create(fe.prototype), we.prototype.constructor = we, _e.prototype = Object.create(fe.prototype), _e.prototype.constructor = _e, Me.prototype = Object.create(fe.prototype), Me.prototype.constructor = Me, Object.assign(Te.prototype, {
        computeGroups: function(e) {
            for (var t, n = [], i = void 0, r = e.faces, o = 0; o < r.length; o++) {
                var a = r[o];
                a.materialIndex !== i && (i = a.materialIndex, void 0 !== t && (t.count = 3 * o - t.start, n.push(t)), t = {
                    start: 3 * o,
                    materialIndex: i
                })
            }
            void 0 !== t && (t.count = 3 * o - t.start, n.push(t)), this.groups = n
        },
        fromGeometry: function(e) {
            var t, i = e.faces,
                r = e.vertices,
                o = e.faceVertexUvs,
                a = o[0] && o[0].length > 0,
                s = o[1] && o[1].length > 0,
                c = e.morphTargets,
                l = c.length;
            if (l > 0) {
                t = [];
                for (var u = 0; l > u; u++) t[u] = [];
                this.morphTargets.position = t
            }
            var h, p = e.morphNormals,
                d = p.length;
            if (d > 0) {
                h = [];
                for (var u = 0; d > u; u++) h[u] = [];
                this.morphTargets.normal = h
            }
            for (var f = e.skinIndices, m = e.skinWeights, v = f.length === r.length, g = m.length === r.length, u = 0; u < i.length; u++) {
                var y = i[u];
                this.vertices.push(r[y.a], r[y.b], r[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
                else {
                    var b = y.normal;
                    this.normals.push(b, b, b)
                }
                var w = y.vertexColors;
                if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
                else {
                    var _ = y.color;
                    this.colors.push(_, _, _)
                }
                if (a === !0) {
                    var M = o[0][u];
                    void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", u), this.uvs.push(new n, new n, new n))
                }
                if (s === !0) {
                    var M = o[1][u];
                    void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", u), this.uvs2.push(new n, new n, new n))
                }
                for (var T = 0; l > T; T++) {
                    var E = c[T].vertices;
                    t[T].push(E[y.a], E[y.b], E[y.c])
                }
                for (var T = 0; d > T; T++) {
                    var S = p[T].vertexNormals[u];
                    h[T].push(S.a, S.b, S.c)
                }
                v && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), g && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
        }
    });
    var Mu = 1;
    Se.prototype = Object.assign(Object.create(t.prototype), {
        constructor: Se,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(e) {
            Array.isArray(e) ? this.index = new(Ee(e) > 65535 ? we : xe)(e, 1) : this.index = e
        },
        addAttribute: function(e, t) {
            return t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(t)) : (this.attributes[e] = t, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(e, new fe(arguments[1], arguments[2])))
        },
        getAttribute: function(e) {
            return this.attributes[e]
        },
        removeAttribute: function(e) {
            return delete this.attributes[e], this
        },
        addGroup: function(e, t, n) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: void 0 !== n ? n : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(e, t) {
            this.drawRange.start = e, this.drawRange.count = t
        },
        applyMatrix: function(e) {
            var t = this.attributes.position;
            void 0 !== t && (e.applyToBufferAttribute(t), t.needsUpdate = !0);
            var n = this.attributes.normal;
            if (void 0 !== n) {
                var i = (new a).getNormalMatrix(e);
                i.applyToBufferAttribute(n), n.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function() {
            var e = new i;
            return function(t) {
                return e.makeRotationX(t), this.applyMatrix(e), this
            }
        }(),
        rotateY: function() {
            var e = new i;
            return function(t) {
                return e.makeRotationY(t), this.applyMatrix(e), this
            }
        }(),
        rotateZ: function() {
            var e = new i;
            return function(t) {
                return e.makeRotationZ(t), this.applyMatrix(e), this
            }
        }(),
        translate: function() {
            var e = new i;
            return function(t, n, i) {
                return e.makeTranslation(t, n, i), this.applyMatrix(e), this
            }
        }(),
        scale: function() {
            var e = new i;
            return function(t, n, i) {
                return e.makeScale(t, n, i), this.applyMatrix(e), this
            }
        }(),
        lookAt: function() {
            var e = new le;
            return function(t) {
                e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var e = this.boundingBox.getCenter().negate();
            return this.translate(e.x, e.y, e.z), e
        },
        setFromObject: function(e) {
            var t = e.geometry;
            if (e.isPoints || e.isLine) {
                var n = new _e(3 * t.vertices.length, 3),
                    i = new _e(3 * t.colors.length, 3);
                if (this.addAttribute("position", n.copyVector3sArray(t.vertices)), this.addAttribute("color", i.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
                    var r = new _e(t.lineDistances.length, 1);
                    this.addAttribute("lineDistance", r.copyArray(t.lineDistances))
                }
                null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
            } else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
            return this
        },
        setFromPoints: function(e) {
            for (var t = [], n = 0, i = e.length; i > n; n++) {
                var r = e[n];
                t.push(r.x, r.y, r.z || 0)
            }
            return this.addAttribute("position", new _e(t, 3)), this
        },
        updateFromObject: function(e) {
            var t = e.geometry;
            if (e.isMesh) {
                var n = t.__directGeometry;
                if (t.elementsNeedUpdate === !0 && (n = void 0, t.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(t);
                n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n
            }
            var i;
            return t.verticesNeedUpdate === !0 && (i = this.attributes.position, void 0 !== i && (i.copyVector3sArray(t.vertices), i.needsUpdate = !0), t.verticesNeedUpdate = !1), t.normalsNeedUpdate === !0 && (i = this.attributes.normal, void 0 !== i && (i.copyVector3sArray(t.normals), i.needsUpdate = !0), t.normalsNeedUpdate = !1), t.colorsNeedUpdate === !0 && (i = this.attributes.color, void 0 !== i && (i.copyColorsArray(t.colors), i.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (i = this.attributes.uv, void 0 !== i && (i.copyVector2sArray(t.uvs), i.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (i = this.attributes.lineDistance, void 0 !== i && (i.copyArray(t.lineDistances), i.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(e) {
            return e.__directGeometry = (new Te).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
        },
        fromDirectGeometry: function(e) {
            var t = new Float32Array(3 * e.vertices.length);
            if (this.addAttribute("position", new fe(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
                var n = new Float32Array(3 * e.normals.length);
                this.addAttribute("normal", new fe(n, 3).copyVector3sArray(e.normals))
            }
            if (e.colors.length > 0) {
                var i = new Float32Array(3 * e.colors.length);
                this.addAttribute("color", new fe(i, 3).copyColorsArray(e.colors))
            }
            if (e.uvs.length > 0) {
                var r = new Float32Array(2 * e.uvs.length);
                this.addAttribute("uv", new fe(r, 2).copyVector2sArray(e.uvs))
            }
            if (e.uvs2.length > 0) {
                var o = new Float32Array(2 * e.uvs2.length);
                this.addAttribute("uv2", new fe(o, 2).copyVector2sArray(e.uvs2))
            }
            if (e.indices.length > 0) {
                var a = Ee(e.indices) > 65535 ? Uint32Array : Uint16Array,
                    s = new a(3 * e.indices.length);
                this.setIndex(new fe(s, 1).copyIndicesArray(e.indices))
            }
            this.groups = e.groups;
            for (var c in e.morphTargets) {
                for (var l = [], u = e.morphTargets[c], h = 0, p = u.length; p > h; h++) {
                    var d = u[h],
                        f = new _e(3 * d.length, 3);
                    l.push(f.copyVector3sArray(d))
                }
                this.morphAttributes[c] = l
            }
            if (e.skinIndices.length > 0) {
                var m = new _e(4 * e.skinIndices.length, 4);
                this.addAttribute("skinIndex", m.copyVector4sArray(e.skinIndices))
            }
            if (e.skinWeights.length > 0) {
                var v = new _e(4 * e.skinWeights.length, 4);
                this.addAttribute("skinWeight", v.copyVector4sArray(e.skinWeights))
            }
            return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new te);
            var e = this.attributes.position;
            void 0 !== e ? this.boundingBox.setFromBufferAttribute(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var e = new te,
                t = new o;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new ne);
                var n = this.attributes.position;
                if (n) {
                    var i = this.boundingSphere.center;
                    e.setFromBufferAttribute(n), e.getCenter(i);
                    for (var r = 0, o = 0, a = n.count; a > o; o++) t.x = n.getX(o), t.y = n.getY(o), t.z = n.getZ(o), r = Math.max(r, i.distanceToSquared(t));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var e = this.index,
                t = this.attributes,
                n = this.groups;
            if (t.position) {
                var i = t.position.array;
                if (void 0 === t.normal) this.addAttribute("normal", new fe(new Float32Array(i.length), 3));
                else
                    for (var r = t.normal.array, a = 0, s = r.length; s > a; a++) r[a] = 0;
                var c, l, u, h = t.normal.array,
                    p = new o,
                    d = new o,
                    f = new o,
                    m = new o,
                    v = new o;
                if (e) {
                    var g = e.array;
                    0 === n.length && this.addGroup(0, g.length);
                    for (var y = 0, x = n.length; x > y; ++y)
                        for (var b = n[y], w = b.start, _ = b.count, a = w, s = w + _; s > a; a += 3) c = 3 * g[a + 0], l = 3 * g[a + 1], u = 3 * g[a + 2], p.fromArray(i, c), d.fromArray(i, l), f.fromArray(i, u), m.subVectors(f, d), v.subVectors(p, d), m.cross(v), h[c] += m.x, h[c + 1] += m.y, h[c + 2] += m.z, h[l] += m.x, h[l + 1] += m.y, h[l + 2] += m.z, h[u] += m.x, h[u + 1] += m.y, h[u + 2] += m.z
                } else
                    for (var a = 0, s = i.length; s > a; a += 9) p.fromArray(i, a), d.fromArray(i, a + 3), f.fromArray(i, a + 6), m.subVectors(f, d), v.subVectors(p, d), m.cross(v), h[a] = m.x, h[a + 1] = m.y, h[a + 2] = m.z, h[a + 3] = m.x, h[a + 4] = m.y, h[a + 5] = m.z, h[a + 6] = m.x, h[a + 7] = m.y, h[a + 8] = m.z;
                this.normalizeNormals(), t.normal.needsUpdate = !0
            }
        },
        merge: function(e, t) {
            if (!e || !e.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
            void 0 === t && (t = 0);
            var n = this.attributes;
            for (var i in n)
                if (void 0 !== e.attributes[i])
                    for (var r = n[i], o = r.array, a = e.attributes[i], s = a.array, c = a.itemSize, l = 0, u = c * t; l < s.length; l++, u++) o[u] = s[l];
            return this
        },
        normalizeNormals: function() {
            var e = new o;
            return function() {
                for (var t = this.attributes.normal, n = 0, i = t.count; i > n; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.normalize(), t.setXYZ(n, e.x, e.y, e.z)
            }
        }(),
        toNonIndexed: function() {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var e = new Se,
                t = this.index.array,
                n = this.attributes;
            for (var i in n) {
                for (var r = n[i], o = r.array, a = r.itemSize, s = new o.constructor(t.length * a), c = 0, l = 0, u = 0, h = t.length; h > u; u++) {
                    c = t[u] * a;
                    for (var p = 0; a > p; p++) s[l++] = o[c++]
                }
                e.addAttribute(i, new fe(s, a))
            }
            return e
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
                var t = this.parameters;
                for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
                return e
            }
            e.data = {
                attributes: {}
            };
            var i = this.index;
            if (null !== i) {
                var r = Array.prototype.slice.call(i.array);
                e.data.index = {
                    type: i.array.constructor.name,
                    array: r
                }
            }
            var o = this.attributes;
            for (var n in o) {
                var a = o[n],
                    r = Array.prototype.slice.call(a.array);
                e.data.attributes[n] = {
                    itemSize: a.itemSize,
                    type: a.array.constructor.name,
                    array: r,
                    normalized: a.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (e.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }), e
        },
        clone: function() {
            return (new Se).copy(this)
        },
        copy: function(e) {
            var t, n, i;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
            var r = e.index;
            null !== r && this.setIndex(r.clone());
            var o = e.attributes;
            for (t in o) {
                var a = o[t];
                this.addAttribute(t, a.clone())
            }
            var s = e.morphAttributes;
            for (t in s) {
                var c = [],
                    l = s[t];
                for (n = 0, i = l.length; i > n; n++) c.push(l[n].clone());
                this.morphAttributes[t] = c
            }
            var u = e.groups;
            for (n = 0, i = u.length; i > n; n++) {
                var h = u[n];
                this.addGroup(h.start, h.count, h.materialIndex)
            }
            var p = e.boundingBox;
            null !== p && (this.boundingBox = p.clone());
            var d = e.boundingSphere;
            return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Ce.prototype = Object.create(de.prototype), Ce.prototype.constructor = Ce, Ae.prototype = Object.create(Se.prototype), Ae.prototype.constructor = Ae, Pe.prototype = Object.create(de.prototype), Pe.prototype.constructor = Pe, Re.prototype = Object.create(Se.prototype), Re.prototype.constructor = Re, Le.prototype = Object.create(Q.prototype), Le.prototype.constructor = Le, Le.prototype.isMeshBasicMaterial = !0, Le.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
    }, Ie.prototype = Object.create(Q.prototype), Ie.prototype.constructor = Ie, Ie.prototype.isShaderMaterial = !0, Ie.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = vc.clone(e.uniforms), this.defines = e.defines, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
    }, Ie.prototype.toJSON = function(e) {
        var t = Q.prototype.toJSON.call(this, e);
        return t.uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
    }, Object.assign(Oe.prototype, {
        set: function(e, t) {
            return this.origin.copy(e), this.direction.copy(t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
        },
        at: function(e, t) {
            var n = t || new o;
            return n.copy(this.direction).multiplyScalar(e).add(this.origin)
        },
        lookAt: function(e) {
            return this.direction.copy(e).sub(this.origin).normalize(), this
        },
        recast: function() {
            var e = new o;
            return function(t) {
                return this.origin.copy(this.at(t, e)), this
            }
        }(),
        closestPointToPoint: function(e, t) {
            var n = t || new o;
            n.subVectors(e, this.origin);
            var i = n.dot(this.direction);
            return 0 > i ? n.copy(this.origin) : n.copy(this.direction).multiplyScalar(i).add(this.origin)
        },
        distanceToPoint: function(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        },
        distanceSqToPoint: function() {
            var e = new o;
            return function(t) {
                var n = e.subVectors(t, this.origin).dot(this.direction);
                return 0 > n ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(n).add(this.origin), e.distanceToSquared(t))
            }
        }(),
        distanceSqToSegment: function() {
            var e = new o,
                t = new o,
                n = new o;
            return function(i, r, o, a) {
                e.copy(i).add(r).multiplyScalar(.5), t.copy(r).sub(i).normalize(), n.copy(this.origin).sub(e);
                var s, c, l, u, h = .5 * i.distanceTo(r),
                    p = -this.direction.dot(t),
                    d = n.dot(this.direction),
                    f = -n.dot(t),
                    m = n.lengthSq(),
                    v = Math.abs(1 - p * p);
                if (v > 0)
                    if (s = p * f - d, c = p * d - f, u = h * v, s >= 0)
                        if (c >= -u)
                            if (u >= c) {
                                var g = 1 / v;
                                s *= g, c *= g, l = s * (s + p * c + 2 * d) + c * (p * s + c + 2 * f) + m
                            } else c = h, s = Math.max(0, -(p * c + d)), l = -s * s + c * (c + 2 * f) + m;
                else c = -h, s = Math.max(0, -(p * c + d)), l = -s * s + c * (c + 2 * f) + m;
                else -u >= c ? (s = Math.max(0, -(-p * h + d)), c = s > 0 ? -h : Math.min(Math.max(-h, -f), h), l = -s * s + c * (c + 2 * f) + m) : u >= c ? (s = 0, c = Math.min(Math.max(-h, -f), h), l = c * (c + 2 * f) + m) : (s = Math.max(0, -(p * h + d)), c = s > 0 ? h : Math.min(Math.max(-h, -f), h), l = -s * s + c * (c + 2 * f) + m);
                else c = p > 0 ? -h : h, s = Math.max(0, -(p * c + d)), l = -s * s + c * (c + 2 * f) + m;
                return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(t).multiplyScalar(c).add(e), l
            }
        }(),
        intersectSphere: function() {
            var e = new o;
            return function(t, n) {
                e.subVectors(t.center, this.origin);
                var i = e.dot(this.direction),
                    r = e.dot(e) - i * i,
                    o = t.radius * t.radius;
                if (r > o) return null;
                var a = Math.sqrt(o - r),
                    s = i - a,
                    c = i + a;
                return 0 > s && 0 > c ? null : 0 > s ? this.at(c, n) : this.at(s, n)
            }
        }(),
        intersectsSphere: function(e) {
            return this.distanceToPoint(e.center) <= e.radius
        },
        distanceToPlane: function(e) {
            var t = e.normal.dot(this.direction);
            if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(e.normal) + e.constant) / t;
            return n >= 0 ? n : null
        },
        intersectPlane: function(e, t) {
            var n = this.distanceToPlane(e);
            return null === n ? null : this.at(n, t)
        },
        intersectsPlane: function(e) {
            var t = e.distanceToPoint(this.origin);
            if (0 === t) return !0;
            var n = e.normal.dot(this.direction);
            return 0 > n * t ? !0 : !1
        },
        intersectBox: function(e, t) {
            var n, i, r, o, a, s, c = 1 / this.direction.x,
                l = 1 / this.direction.y,
                u = 1 / this.direction.z,
                h = this.origin;
            return c >= 0 ? (n = (e.min.x - h.x) * c, i = (e.max.x - h.x) * c) : (n = (e.max.x - h.x) * c, i = (e.min.x - h.x) * c), l >= 0 ? (r = (e.min.y - h.y) * l, o = (e.max.y - h.y) * l) : (r = (e.max.y - h.y) * l, o = (e.min.y - h.y) * l), n > o || r > i ? null : ((r > n || n !== n) && (n = r), (i > o || i !== i) && (i = o), u >= 0 ? (a = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (a = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || a > i ? null : ((a > n || n !== n) && (n = a), (i > s || i !== i) && (i = s), 0 > i ? null : this.at(n >= 0 ? n : i, t)))
        },
        intersectsBox: function() {
            var e = new o;
            return function(t) {
                return null !== this.intersectBox(t, e)
            }
        }(),
        intersectTriangle: function() {
            var e = new o,
                t = new o,
                n = new o,
                i = new o;
            return function(r, o, a, s, c) {
                t.subVectors(o, r), n.subVectors(a, r), i.crossVectors(t, n);
                var l, u = this.direction.dot(i);
                if (u > 0) {
                    if (s) return null;
                    l = 1
                } else {
                    if (!(0 > u)) return null;
                    l = -1, u = -u
                }
                e.subVectors(this.origin, r);
                var h = l * this.direction.dot(n.crossVectors(e, n));
                if (0 > h) return null;
                var p = l * this.direction.dot(t.cross(e));
                if (0 > p) return null;
                if (h + p > u) return null;
                var d = -l * e.dot(i);
                return 0 > d ? null : this.at(d / u, c)
            }
        }(),
        applyMatrix4: function(e) {
            return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
        },
        equals: function(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
    }), Object.assign(Be.prototype, {
        set: function(e, t) {
            return this.start.copy(e), this.end.copy(t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.start.copy(e.start), this.end.copy(e.end), this
        },
        getCenter: function(e) {
            var t = e || new o;
            return t.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(e) {
            var t = e || new o;
            return t.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(e, t) {
            var n = t || new o;
            return this.delta(n).multiplyScalar(e).add(this.start)
        },
        closestPointToPointParameter: function() {
            var e = new o,
                t = new o;
            return function(n, i) {
                e.subVectors(n, this.start), t.subVectors(this.end, this.start);
                var r = t.dot(t),
                    o = t.dot(e),
                    a = o / r;
                return i && (a = oc.clamp(a, 0, 1)), a
            }
        }(),
        closestPointToPoint: function(e, t, n) {
            var i = this.closestPointToPointParameter(e, t),
                r = n || new o;
            return this.delta(r).multiplyScalar(i).add(this.start)
        },
        applyMatrix4: function(e) {
            return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
        },
        equals: function(e) {
            return e.start.equals(this.start) && e.end.equals(this.end)
        }
    }), Object.assign(De, {
        normal: function() {
            var e = new o;
            return function(t, n, i, r) {
                var a = r || new o;
                a.subVectors(i, n), e.subVectors(t, n), a.cross(e);
                var s = a.lengthSq();
                return s > 0 ? a.multiplyScalar(1 / Math.sqrt(s)) : a.set(0, 0, 0)
            }
        }(),
        barycoordFromPoint: function() {
            var e = new o,
                t = new o,
                n = new o;
            return function(i, r, a, s, c) {
                e.subVectors(s, r), t.subVectors(a, r), n.subVectors(i, r);
                var l = e.dot(e),
                    u = e.dot(t),
                    h = e.dot(n),
                    p = t.dot(t),
                    d = t.dot(n),
                    f = l * p - u * u,
                    m = c || new o;
                if (0 === f) return m.set(-2, -1, -1);
                var v = 1 / f,
                    g = (p * h - u * d) * v,
                    y = (l * d - u * h) * v;
                return m.set(1 - g - y, y, g)
            }
        }(),
        containsPoint: function() {
            var e = new o;
            return function(t, n, i, r) {
                var o = De.barycoordFromPoint(t, n, i, r, e);
                return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
            }
        }()
    }), Object.assign(De.prototype, {
        set: function(e, t, n) {
            return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
        },
        setFromPointsAndIndices: function(e, t, n, i) {
            return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
        },
        area: function() {
            var e = new o,
                t = new o;
            return function() {
                return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
            }
        }(),
        midpoint: function(e) {
            var t = e || new o;
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(e) {
            return De.normal(this.a, this.b, this.c, e)
        },
        plane: function(e) {
            var t = e || new ie;
            return t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(e, t) {
            return De.barycoordFromPoint(e, this.a, this.b, this.c, t)
        },
        containsPoint: function(e) {
            return De.containsPoint(e, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var e = new ie,
                t = [new Be, new Be, new Be],
                n = new o,
                i = new o;
            return function(r, a) {
                var s = a || new o,
                    c = 1 / 0;
                if (e.setFromCoplanarPoints(this.a, this.b, this.c), e.projectPoint(r, n), this.containsPoint(n) === !0) s.copy(n);
                else {
                    t[0].set(this.a, this.b), t[1].set(this.b, this.c), t[2].set(this.c, this.a);
                    for (var l = 0; l < t.length; l++) {
                        t[l].closestPointToPoint(n, !0, i);
                        var u = n.distanceToSquared(i);
                        c > u && (c = u, s.copy(i))
                    }
                }
                return s
            }
        }(),
        equals: function(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    }), Ne.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Ne,
        isMesh: !0,
        setDrawMode: function(e) {
            this.drawMode = e
        },
        copy: function(e) {
            return le.prototype.copy.call(this, e), this.drawMode = e.drawMode, void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
        },
        updateMorphTargets: function() {
            var e, t, n, i = this.geometry;
            if (i.isBufferGeometry) {
                var r = i.morphAttributes,
                    o = Object.keys(r);
                if (o.length > 0) {
                    var a = r[o[0]];
                    if (void 0 !== a)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = a.length; t > e; e++) n = a[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
                }
            } else {
                var s = i.morphTargets;
                if (void 0 !== s && s.length > 0)
                    for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = s.length; t > e; e++) n = s[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
            }
        },
        raycast: function() {
            function e(e, t, n, i, r, o, a) {
                return De.barycoordFromPoint(e, t, n, i, y), r.multiplyScalar(y.x), o.multiplyScalar(y.y), a.multiplyScalar(y.z), r.add(o).add(a), r.clone()
            }

            function t(e, t, n, i, r, o, a, s) {
                var c;
                if (c = t.side === ea ? i.intersectTriangle(a, o, r, !0, s) : i.intersectTriangle(r, o, a, t.side !== ta, s), null === c) return null;
                b.copy(s), b.applyMatrix4(e.matrixWorld);
                var l = n.ray.origin.distanceTo(b);
                return l < n.near || l > n.far ? null : {
                    distance: l,
                    point: b.clone(),
                    object: e
                }
            }

            function r(n, i, r, o, a, s, c, p) {
                l.fromBufferAttribute(o, s), u.fromBufferAttribute(o, c), h.fromBufferAttribute(o, p);
                var d = t(n, n.material, i, r, l, u, h, x);
                return d && (a && (m.fromBufferAttribute(a, s), v.fromBufferAttribute(a, c), g.fromBufferAttribute(a, p), d.uv = e(x, l, u, h, m, v, g)), d.face = new pe(s, c, p, De.normal(l, u, h)), d.faceIndex = s), d
            }
            var a = new i,
                s = new Oe,
                c = new ne,
                l = new o,
                u = new o,
                h = new o,
                p = new o,
                d = new o,
                f = new o,
                m = new n,
                v = new n,
                g = new n,
                y = new o,
                x = new o,
                b = new o;
            return function(n, i) {
                var o = this.geometry,
                    y = this.material,
                    b = this.matrixWorld;
                if (void 0 !== y && (null === o.boundingSphere && o.computeBoundingSphere(), c.copy(o.boundingSphere), c.applyMatrix4(b), n.ray.intersectsSphere(c) !== !1 && (a.getInverse(b), s.copy(n.ray).applyMatrix4(a), null === o.boundingBox || s.intersectsBox(o.boundingBox) !== !1))) {
                    var w;
                    if (o.isBufferGeometry) {
                        var _, M, T, E, S, C = o.index,
                            A = o.attributes.position,
                            P = o.attributes.uv;
                        if (null !== C)
                            for (E = 0, S = C.count; S > E; E += 3) _ = C.getX(E), M = C.getX(E + 1), T = C.getX(E + 2), w = r(this, n, s, A, P, _, M, T), w && (w.faceIndex = Math.floor(E / 3), i.push(w));
                        else if (void 0 !== A)
                            for (E = 0, S = A.count; S > E; E += 3) _ = E, M = E + 1, T = E + 2, w = r(this, n, s, A, P, _, M, T), w && (w.index = _, i.push(w))
                    } else if (o.isGeometry) {
                        var R, L, I, O, B = Array.isArray(y),
                            D = o.vertices,
                            N = o.faces,
                            F = o.faceVertexUvs[0];
                        F.length > 0 && (O = F);
                        for (var U = 0, k = N.length; k > U; U++) {
                            var z = N[U],
                                H = B ? y[z.materialIndex] : y;
                            if (void 0 !== H) {
                                if (R = D[z.a], L = D[z.b], I = D[z.c], H.morphTargets === !0) {
                                    var G = o.morphTargets,
                                        V = this.morphTargetInfluences;
                                    l.set(0, 0, 0), u.set(0, 0, 0), h.set(0, 0, 0);
                                    for (var j = 0, $ = G.length; $ > j; j++) {
                                        var W = V[j];
                                        if (0 !== W) {
                                            var X = G[j].vertices;
                                            l.addScaledVector(p.subVectors(X[z.a], R), W), u.addScaledVector(d.subVectors(X[z.b], L), W), h.addScaledVector(f.subVectors(X[z.c], I), W)
                                        }
                                    }
                                    l.add(R), u.add(L), h.add(I), R = l, L = u, I = h
                                }
                                if (w = t(this, H, n, s, R, L, I, x)) {
                                    if (O && O[U]) {
                                        var q = O[U];
                                        m.copy(q[0]), v.copy(q[1]), g.copy(q[2]), w.uv = e(x, R, L, I, m, v, g)
                                    }
                                    w.face = z, w.faceIndex = U, i.push(w)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });
    var Tu = 0;
    mt.prototype = Object.assign(Object.create(ue.prototype), {
        constructor: mt,
        isPerspectiveCamera: !0,
        copy: function(e, t) {
            return ue.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
        },
        setFocalLength: function(e) {
            var t = .5 * this.getFilmHeight() / e;
            this.fov = 2 * oc.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var e = Math.tan(.5 * oc.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / e
        },
        getEffectiveFOV: function() {
            return 2 * oc.RAD2DEG * Math.atan(Math.tan(.5 * oc.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(e, t, n, i, r, o) {
            this.aspect = e / t, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = this.near,
                t = e * Math.tan(.5 * oc.DEG2RAD * this.fov) / this.zoom,
                n = 2 * t,
                i = this.aspect * n,
                r = -.5 * i,
                o = this.view;
            if (null !== this.view && this.view.enabled) {
                var a = o.fullWidth,
                    s = o.fullHeight;
                r += o.offsetX * i / a, t -= o.offsetY * n / s, i *= o.width / a, n *= o.height / s
            }
            var c = this.filmOffset;
            0 !== c && (r += e * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far)
        },
        toJSON: function(e) {
            var t = le.prototype.toJSON.call(this, e);
            return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
        }
    }), vt.prototype = Object.assign(Object.create(mt.prototype), {
        constructor: vt,
        isArrayCamera: !0
    }), _t.prototype.isFogExp2 = !0, _t.prototype.clone = function() {
        return new _t(this.color.getHex(), this.density)
    }, _t.prototype.toJSON = function() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }, Mt.prototype.isFog = !0, Mt.prototype.clone = function() {
        return new Mt(this.color.getHex(), this.near, this.far)
    }, Mt.prototype.toJSON = function() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }, Tt.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Tt,
        copy: function(e, t) {
            return le.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
        },
        toJSON: function(e) {
            var t = le.prototype.toJSON.call(this, e);
            return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t
        }
    }), Et.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Et,
        isLensFlare: !0,
        copy: function(e) {
            le.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
            for (var t = 0, n = e.lensFlares.length; n > t; t++) this.lensFlares.push(e.lensFlares[t]);
            return this
        },
        add: function(e, t, n, i, r, o) {
            void 0 === t && (t = -1), void 0 === n && (n = 0), void 0 === o && (o = 1), void 0 === r && (r = new X(16777215)), void 0 === i && (i = ca), n = Math.min(n, Math.max(0, n)), this.lensFlares.push({
                texture: e,
                size: t,
                distance: n,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: o,
                color: r,
                blending: i
            })
        },
        updateLensFlares: function() {
            var e, t, n = this.lensFlares.length,
                i = 2 * -this.positionScreen.x,
                r = 2 * -this.positionScreen.y;
            for (e = 0; n > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + i * t.distance, t.y = this.positionScreen.y + r * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
        }
    }), St.prototype = Object.create(Q.prototype), St.prototype.constructor = St, St.prototype.isSpriteMaterial = !0, St.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this
    }, Ct.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Ct,
        isSprite: !0,
        raycast: function() {
            var e = new o,
                t = new o,
                n = new o;
            return function(i, r) {
                t.setFromMatrixPosition(this.matrixWorld), i.ray.closestPointToPoint(t, e), n.setFromMatrixScale(this.matrixWorld);
                var o = n.x * n.y / 4;
                if (!(t.distanceToSquared(e) > o)) {
                    var a = i.ray.origin.distanceTo(e);
                    a < i.near || a > i.far || r.push({
                        distance: a,
                        point: e.clone(),
                        face: null,
                        object: this
                    })
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }), At.prototype = Object.assign(Object.create(le.prototype), {
        constructor: At,
        copy: function(e) {
            le.prototype.copy.call(this, e, !1);
            for (var t = e.levels, n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function(e, t) {
            void 0 === t && (t = 0), t = Math.abs(t);
            for (var n = this.levels, i = 0; i < n.length && !(t < n[i].distance); i++);
            n.splice(i, 0, {
                distance: t,
                object: e
            }), this.add(e)
        },
        getObjectForDistance: function(e) {
            for (var t = this.levels, n = 1, i = t.length; i > n && !(e < t[n].distance); n++);
            return t[n - 1].object
        },
        raycast: function() {
            var e = new o;
            return function(t, n) {
                e.setFromMatrixPosition(this.matrixWorld);
                var i = t.ray.origin.distanceTo(e);
                this.getObjectForDistance(i).raycast(t, n)
            }
        }(),
        update: function() {
            var e = new o,
                t = new o;
            return function(n) {
                var i = this.levels;
                if (i.length > 1) {
                    e.setFromMatrixPosition(n.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
                    var r = e.distanceTo(t);
                    i[0].object.visible = !0;
                    for (var o = 1, a = i.length; a > o && r >= i[o].distance; o++) i[o - 1].object.visible = !1, i[o].object.visible = !0;
                    for (; a > o; o++) i[o].object.visible = !1
                }
            }
        }(),
        toJSON: function(e) {
            var t = le.prototype.toJSON.call(this, e);
            t.object.levels = [];
            for (var n = this.levels, i = 0, r = n.length; r > i; i++) {
                var o = n[i];
                t.object.levels.push({
                    object: o.object.uuid,
                    distance: o.distance
                })
            }
            return t
        }
    }), Object.assign(Pt.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; t > e; e++) {
                var n = new i;
                this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n)
            }
        },
        pose: function() {
            var e, t, n;
            for (t = 0, n = this.bones.length; n > t; t++) e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
            for (t = 0, n = this.bones.length; n > t; t++) e = this.bones[t], e && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
        },
        update: function() {
            var e = new i,
                t = new i;
            return function() {
                for (var n = this.bones, i = this.boneInverses, r = this.boneMatrices, o = this.boneTexture, a = 0, s = n.length; s > a; a++) {
                    var c = n[a] ? n[a].matrixWorld : t;
                    e.multiplyMatrices(c, i[a]), e.toArray(r, 16 * a)
                }
                void 0 !== o && (o.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new Pt(this.bones, this.boneInverses)
        }
    }), Rt.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Rt,
        isBone: !0
    }), Lt.prototype = Object.assign(Object.create(Ne.prototype), {
        constructor: Lt,
        isSkinnedMesh: !0,
        initBones: function() {
            var e, t, n, i, r = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (n = 0, i = this.geometry.bones.length; i > n; n++) t = this.geometry.bones[n], e = new Rt, r.push(e), e.name = t.name, e.position.fromArray(t.pos), e.quaternion.fromArray(t.rotq), void 0 !== t.scl && e.scale.fromArray(t.scl);
                for (n = 0, i = this.geometry.bones.length; i > n; n++) t = this.geometry.bones[n], -1 !== t.parent && null !== t.parent && void 0 !== r[t.parent] ? r[t.parent].add(r[n]) : this.add(r[n])
            }
            return this.updateMatrixWorld(!0), r
        },
        bind: function(e, t) {
            this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            var e, t;
            if (this.geometry && this.geometry.isGeometry)
                for (t = 0; t < this.geometry.skinWeights.length; t++) {
                    var n = this.geometry.skinWeights[t];
                    e = 1 / n.manhattanLength(), e !== 1 / 0 ? n.multiplyScalar(e) : n.set(1, 0, 0, 0)
                } else if (this.geometry && this.geometry.isBufferGeometry) {
                    var i = new c,
                        r = this.geometry.attributes.skinWeight;
                    for (t = 0; t < r.count; t++) i.x = r.getX(t), i.y = r.getY(t), i.z = r.getZ(t), i.w = r.getW(t), e = 1 / i.manhattanLength(), e !== 1 / 0 ? i.multiplyScalar(e) : i.set(1, 0, 0, 0), r.setXYZW(t, i.x, i.y, i.z, i.w)
                }
        },
        updateMatrixWorld: function(e) {
            Ne.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), It.prototype = Object.create(Q.prototype), It.prototype.constructor = It, It.prototype.isLineBasicMaterial = !0, It.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }, Ot.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Ot,
        isLine: !0,
        raycast: function() {
            var e = new i,
                t = new Oe,
                n = new ne;
            return function(i, r) {
                var a = i.linePrecision,
                    s = a * a,
                    c = this.geometry,
                    l = this.matrixWorld;
                if (null === c.boundingSphere && c.computeBoundingSphere(), n.copy(c.boundingSphere), n.applyMatrix4(l), i.ray.intersectsSphere(n) !== !1) {
                    e.getInverse(l), t.copy(i.ray).applyMatrix4(e);
                    var u = new o,
                        h = new o,
                        p = new o,
                        d = new o,
                        f = this && this.isLineSegments ? 2 : 1;
                    if (c.isBufferGeometry) {
                        var m = c.index,
                            v = c.attributes,
                            g = v.position.array;
                        if (null !== m)
                            for (var y = m.array, x = 0, b = y.length - 1; b > x; x += f) {
                                var w = y[x],
                                    _ = y[x + 1];
                                u.fromArray(g, 3 * w), h.fromArray(g, 3 * _);
                                var M = t.distanceSqToSegment(u, h, d, p);
                                if (!(M > s)) {
                                    d.applyMatrix4(this.matrixWorld);
                                    var T = i.ray.origin.distanceTo(d);
                                    T < i.near || T > i.far || r.push({
                                        distance: T,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            } else
                                for (var x = 0, b = g.length / 3 - 1; b > x; x += f) {
                                    u.fromArray(g, 3 * x), h.fromArray(g, 3 * x + 3);
                                    var M = t.distanceSqToSegment(u, h, d, p);
                                    if (!(M > s)) {
                                        d.applyMatrix4(this.matrixWorld);
                                        var T = i.ray.origin.distanceTo(d);
                                        T < i.near || T > i.far || r.push({
                                            distance: T,
                                            point: p.clone().applyMatrix4(this.matrixWorld),
                                            index: x,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                                }
                    } else if (c.isGeometry)
                        for (var E = c.vertices, S = E.length, x = 0; S - 1 > x; x += f) {
                            var M = t.distanceSqToSegment(E[x], E[x + 1], d, p);
                            if (!(M > s)) {
                                d.applyMatrix4(this.matrixWorld);
                                var T = i.ray.origin.distanceTo(d);
                                T < i.near || T > i.far || r.push({
                                    distance: T,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: x,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Bt.prototype = Object.assign(Object.create(Ot.prototype), {
        constructor: Bt,
        isLineSegments: !0
    }), Dt.prototype = Object.assign(Object.create(Ot.prototype), {
        constructor: Dt,
        isLineLoop: !0
    }), Nt.prototype = Object.create(Q.prototype), Nt.prototype.constructor = Nt, Nt.prototype.isPointsMaterial = !0, Nt.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
    }, Ft.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Ft,
        isPoints: !0,
        raycast: function() {
            var e = new i,
                t = new Oe,
                n = new ne;
            return function(i, r) {
                function a(e, n) {
                    var o = t.distanceSqToPoint(e);
                    if (p > o) {
                        var a = t.closestPointToPoint(e);
                        a.applyMatrix4(l);
                        var c = i.ray.origin.distanceTo(a);
                        if (c < i.near || c > i.far) return;
                        r.push({
                            distance: c,
                            distanceToRay: Math.sqrt(o),
                            point: a.clone(),
                            index: n,
                            face: null,
                            object: s
                        })
                    }
                }
                var s = this,
                    c = this.geometry,
                    l = this.matrixWorld,
                    u = i.params.Points.threshold;
                if (null === c.boundingSphere && c.computeBoundingSphere(), n.copy(c.boundingSphere), n.applyMatrix4(l), n.radius += u, i.ray.intersectsSphere(n) !== !1) {
                    e.getInverse(l), t.copy(i.ray).applyMatrix4(e);
                    var h = u / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        p = h * h,
                        d = new o;
                    if (c.isBufferGeometry) {
                        var f = c.index,
                            m = c.attributes,
                            v = m.position.array;
                        if (null !== f)
                            for (var g = f.array, y = 0, x = g.length; x > y; y++) {
                                var b = g[y];
                                d.fromArray(v, 3 * b), a(d, b)
                            } else
                                for (var y = 0, w = v.length / 3; w > y; y++) d.fromArray(v, 3 * y), a(d, y)
                    } else
                        for (var _ = c.vertices, y = 0, w = _.length; w > y; y++) a(_[y], y)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Ut.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Ut,
        isGroup: !0
    }), kt.prototype = Object.assign(Object.create(s.prototype), {
        constructor: kt,
        isVideoTexture: !0,
        update: function() {
            var e = this.image;
            e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }), zt.prototype = Object.create(s.prototype), zt.prototype.constructor = zt, zt.prototype.isCompressedTexture = !0, Ht.prototype = Object.create(s.prototype), Ht.prototype.constructor = Ht, Ht.prototype.isDepthTexture = !0, Gt.prototype = Object.create(Se.prototype), Gt.prototype.constructor = Gt, Vt.prototype = Object.create(de.prototype), Vt.prototype.constructor = Vt, jt.prototype = Object.create(Se.prototype), jt.prototype.constructor = jt, $t.prototype = Object.create(de.prototype), $t.prototype.constructor = $t, Wt.prototype = Object.create(Se.prototype), Wt.prototype.constructor = Wt, Xt.prototype = Object.create(de.prototype), Xt.prototype.constructor = Xt, qt.prototype = Object.create(Wt.prototype), qt.prototype.constructor = qt, Yt.prototype = Object.create(de.prototype), Yt.prototype.constructor = Yt, Zt.prototype = Object.create(Wt.prototype), Zt.prototype.constructor = Zt, Jt.prototype = Object.create(de.prototype), Jt.prototype.constructor = Jt, Qt.prototype = Object.create(Wt.prototype), Qt.prototype.constructor = Qt, Kt.prototype = Object.create(de.prototype), Kt.prototype.constructor = Kt, en.prototype = Object.create(Wt.prototype), en.prototype.constructor = en, tn.prototype = Object.create(de.prototype), tn.prototype.constructor = tn, nn.prototype = Object.create(Se.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create(de.prototype), rn.prototype.constructor = rn, on.prototype = Object.create(Se.prototype), on.prototype.constructor = on, an.prototype = Object.create(de.prototype), an.prototype.constructor = an, sn.prototype = Object.create(Se.prototype), sn.prototype.constructor = sn;
    var Eu = {
            triangulate: function(e, t, n) {
                n = n || 2;
                var i = t && t.length,
                    r = i ? t[0] * n : e.length,
                    o = cn(e, 0, r, n, !0),
                    a = [];
                if (!o) return a;
                var s, c, l, u, h, p, d;
                if (i && (o = mn(e, t, o, n)), e.length > 80 * n) {
                    s = l = e[0], c = u = e[1];
                    for (var f = n; r > f; f += n) h = e[f], p = e[f + 1], s > h && (s = h), c > p && (c = p), h > l && (l = h), p > u && (u = p);
                    d = Math.max(l - s, u - c), d = 0 !== d ? 1 / d : 0
                }
                return un(o, a, n, s, c, d), a
            }
        },
        Su = {
            area: function(e) {
                for (var t = e.length, n = 0, i = t - 1, r = 0; t > r; i = r++) n += e[i].x * e[r].y - e[r].x * e[i].y;
                return .5 * n
            },
            isClockWise: function(e) {
                return Su.area(e) < 0
            },
            triangulateShape: function(e, t) {
                function n(e) {
                    var t = e.length;
                    t > 2 && e[t - 1].equals(e[0]) && e.pop()
                }

                function i(e, t) {
                    for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y)
                }
                var r = [],
                    o = [],
                    a = [];
                n(e), i(r, e);
                var s = e.length;
                for (t.forEach(n), l = 0; l < t.length; l++) o.push(s), s += t[l].length, i(r, t[l]);
                for (var c = Eu.triangulate(r, o), l = 0; l < c.length; l += 3) a.push(c.slice(l, l + 3));
                return a
            }
        };
    Nn.prototype = Object.create(de.prototype), Nn.prototype.constructor = Nn, Fn.prototype = Object.create(Se.prototype), Fn.prototype.constructor = Fn, Fn.prototype.getArrays = function() {
        var e = this.getAttribute("position"),
            t = e ? Array.prototype.slice.call(e.array) : [],
            n = this.getAttribute("uv"),
            i = n ? Array.prototype.slice.call(n.array) : [],
            r = this.index,
            o = r ? Array.prototype.slice.call(r.array) : [];
        return {
            position: t,
            uv: i,
            index: o
        }
    }, Fn.prototype.addShapeList = function(e, t) {
        var n = e.length;
        t.arrays = this.getArrays();
        for (var i = 0; n > i; i++) {
            var r = e[i];
            this.addShape(r, t)
        }
        this.setIndex(t.arrays.index), this.addAttribute("position", new _e(t.arrays.position, 3)), this.addAttribute("uv", new _e(t.arrays.uv, 2))
    }, Fn.prototype.addShape = function(e, t) {
        function i(e, t, n) {
            return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(n).add(e)
        }

        function r(e, t, i) {
            var r, o, a, s = e.x - t.x,
                c = e.y - t.y,
                l = i.x - e.x,
                u = i.y - e.y,
                h = s * s + c * c,
                p = s * u - c * l;
            if (Math.abs(p) > Number.EPSILON) {
                var d = Math.sqrt(h),
                    f = Math.sqrt(l * l + u * u),
                    m = t.x - c / d,
                    v = t.y + s / d,
                    g = i.x - u / f,
                    y = i.y + l / f,
                    x = ((g - m) * u - (y - v) * l) / (s * u - c * l);
                r = m + s * x - e.x, o = v + c * x - e.y;
                var b = r * r + o * o;
                if (2 >= b) return new n(r, o);
                a = Math.sqrt(b / 2)
            } else {
                var w = !1;
                s > Number.EPSILON ? l > Number.EPSILON && (w = !0) : s < -Number.EPSILON ? l < -Number.EPSILON && (w = !0) : Math.sign(c) === Math.sign(u) && (w = !0), w ? (r = -c, o = s, a = Math.sqrt(h)) : (r = s, o = c, a = Math.sqrt(h / 2))
            }
            return new n(r / a, o / a)
        }

        function a() {
            var e = b.length / 3;
            if (A) {
                var n = 0,
                    i = Z * n;
                for (K = 0; J > K; K++) Y = G[K], u(Y[2] + i, Y[1] + i, Y[0] + i);
                for (n = R + 2 * C, i = Z * n, K = 0; J > K; K++) Y = G[K], u(Y[0] + i, Y[1] + i, Y[2] + i)
            } else {
                for (K = 0; J > K; K++) Y = G[K], u(Y[2], Y[1], Y[0]);
                for (K = 0; J > K; K++) Y = G[K], u(Y[0] + Z * R, Y[1] + Z * R, Y[2] + Z * R)
            }
            F.addGroup(e, b.length / 3 - e, void 0 !== t.material ? t.material : 0)
        }

        function s() {
            var e = b.length / 3,
                n = 0;
            for (c(V, n), n += V.length, D = 0, N = z.length; N > D; D++) B = z[D], c(B, n), n += B.length;
            F.addGroup(e, b.length / 3 - e, void 0 !== t.extrudeMaterial ? t.extrudeMaterial : 1)
        }

        function c(e, t) {
            var n, i;
            for (K = e.length; --K >= 0;) {
                n = K, i = K - 1, 0 > i && (i = e.length - 1);
                var r = 0,
                    o = R + 2 * C;
                for (r = 0; o > r; r++) {
                    var a = Z * r,
                        s = Z * (r + 1),
                        c = t + n + a,
                        l = t + i + a,
                        u = t + i + s,
                        p = t + n + s;
                    h(c, l, u, p)
                }
            }
        }

        function l(e, t, n) {
            M.push(e), M.push(t), M.push(n)
        }

        function u(e, t, n) {
            p(e), p(t), p(n);
            var i = b.length / 3,
                r = O.generateTopUV(F, b, i - 3, i - 2, i - 1);
            d(r[0]), d(r[1]), d(r[2])
        }

        function h(e, t, n, i) {
            p(e), p(t), p(i), p(t), p(n), p(i);
            var r = b.length / 3,
                o = O.generateSideWallUV(F, b, r - 6, r - 3, r - 2, r - 1);
            d(o[0]), d(o[1]), d(o[3]), d(o[1]), d(o[2]), d(o[3])
        }

        function p(e) {
            w.push(b.length / 3), b.push(M[3 * e + 0]), b.push(M[3 * e + 1]), b.push(M[3 * e + 2])
        }

        function d(e) {
            _.push(e.x), _.push(e.y)
        }
        var f, m, v, g, y, x = t.arrays ? t.arrays : this.getArrays(),
            b = x.position,
            w = x.index,
            _ = x.uv,
            M = [],
            T = void 0 !== t.amount ? t.amount : 100,
            E = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
            S = void 0 !== t.bevelSize ? t.bevelSize : E - 2,
            C = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
            A = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
            P = void 0 !== t.curveSegments ? t.curveSegments : 12,
            R = void 0 !== t.steps ? t.steps : 1,
            L = t.extrudePath,
            I = !1,
            O = void 0 !== t.UVGenerator ? t.UVGenerator : Nn.WorldUVGenerator;
        L && (f = L.getSpacedPoints(R), I = !0, A = !1, m = void 0 !== t.frames ? t.frames : L.computeFrenetFrames(R, !1), v = new o, g = new o, y = new o), A || (C = 0, E = 0, S = 0);
        var B, D, N, F = this,
            U = e.extractPoints(P),
            k = U.shape,
            z = U.holes,
            H = !Su.isClockWise(k);
        if (H)
            for (k = k.reverse(), D = 0, N = z.length; N > D; D++) B = z[D], Su.isClockWise(B) && (z[D] = B.reverse());
        var G = Su.triangulateShape(k, z),
            V = k;
        for (D = 0, N = z.length; N > D; D++) B = z[D], k = k.concat(B);
        for (var j, $, W, X, q, Y, Z = k.length, J = G.length, Q = [], K = 0, ee = V.length, te = ee - 1, ne = K + 1; ee > K; K++, te++, ne++) te === ee && (te = 0), ne === ee && (ne = 0), Q[K] = r(V[K], V[te], V[ne]);
        var ie, re = [],
            oe = Q.concat();
        for (D = 0, N = z.length; N > D; D++) {
            for (B = z[D], ie = [], K = 0, ee = B.length, te = ee - 1, ne = K + 1; ee > K; K++, te++, ne++) te === ee && (te = 0), ne === ee && (ne = 0), ie[K] = r(B[K], B[te], B[ne]);
            re.push(ie), oe = oe.concat(ie)
        }
        for (j = 0; C > j; j++) {
            for (W = j / C, X = E * Math.cos(W * Math.PI / 2), $ = S * Math.sin(W * Math.PI / 2), K = 0, ee = V.length; ee > K; K++) q = i(V[K], Q[K], $), l(q.x, q.y, -X);
            for (D = 0, N = z.length; N > D; D++)
                for (B = z[D], ie = re[D], K = 0, ee = B.length; ee > K; K++) q = i(B[K], ie[K], $), l(q.x, q.y, -X)
        }
        for ($ = S, K = 0; Z > K; K++) q = A ? i(k[K], oe[K], $) : k[K], I ? (g.copy(m.normals[0]).multiplyScalar(q.x), v.copy(m.binormals[0]).multiplyScalar(q.y), y.copy(f[0]).add(g).add(v), l(y.x, y.y, y.z)) : l(q.x, q.y, 0);
        var ae;
        for (ae = 1; R >= ae; ae++)
            for (K = 0; Z > K; K++) q = A ? i(k[K], oe[K], $) : k[K], I ? (g.copy(m.normals[ae]).multiplyScalar(q.x), v.copy(m.binormals[ae]).multiplyScalar(q.y), y.copy(f[ae]).add(g).add(v), l(y.x, y.y, y.z)) : l(q.x, q.y, T / R * ae);
        for (j = C - 1; j >= 0; j--) {
            for (W = j / C, X = E * Math.cos(W * Math.PI / 2), $ = S * Math.sin(W * Math.PI / 2), K = 0, ee = V.length; ee > K; K++) q = i(V[K], Q[K], $), l(q.x, q.y, T + X);
            for (D = 0, N = z.length; N > D; D++)
                for (B = z[D], ie = re[D], K = 0, ee = B.length; ee > K; K++) q = i(B[K], ie[K], $), I ? l(q.x, q.y + f[R - 1].y, f[R - 1].x + X) : l(q.x, q.y, T + X)
        }
        a(), s(), t.arrays || (this.setIndex(w), this.addAttribute("position", new _e(b, 3)), this.addAttribute("uv", new _e(_, 2)))
    }, Nn.WorldUVGenerator = {
        generateTopUV: function(e, t, i, r, o) {
            var a = t[3 * i],
                s = t[3 * i + 1],
                c = t[3 * r],
                l = t[3 * r + 1],
                u = t[3 * o],
                h = t[3 * o + 1];
            return [new n(a, s), new n(c, l), new n(u, h)]
        },
        generateSideWallUV: function(e, t, i, r, o, a) {
            var s = t[3 * i],
                c = t[3 * i + 1],
                l = t[3 * i + 2],
                u = t[3 * r],
                h = t[3 * r + 1],
                p = t[3 * r + 2],
                d = t[3 * o],
                f = t[3 * o + 1],
                m = t[3 * o + 2],
                v = t[3 * a],
                g = t[3 * a + 1],
                y = t[3 * a + 2];
            return Math.abs(c - h) < .01 ? [new n(s, 1 - l), new n(u, 1 - p), new n(d, 1 - m), new n(v, 1 - y)] : [new n(c, 1 - l), new n(h, 1 - p), new n(f, 1 - m), new n(g, 1 - y)]
        }
    }, Un.prototype = Object.create(de.prototype), Un.prototype.constructor = Un, kn.prototype = Object.create(Fn.prototype), kn.prototype.constructor = kn, zn.prototype = Object.create(de.prototype), zn.prototype.constructor = zn, Hn.prototype = Object.create(Se.prototype), Hn.prototype.constructor = Hn, Gn.prototype = Object.create(de.prototype), Gn.prototype.constructor = Gn, Vn.prototype = Object.create(Se.prototype), Vn.prototype.constructor = Vn, jn.prototype = Object.create(de.prototype), jn.prototype.constructor = jn, $n.prototype = Object.create(Se.prototype), $n.prototype.constructor = $n, Wn.prototype = Object.create(de.prototype), Wn.prototype.constructor = Wn, Wn.prototype.toJSON = function() {
        var e = de.prototype.toJSON.call(this),
            t = this.parameters.shapes;
        return qn(t, e)
    }, Xn.prototype = Object.create(Se.prototype), Xn.prototype.constructor = Xn, Xn.prototype.toJSON = function() {
        var e = Se.prototype.toJSON.call(this),
            t = this.parameters.shapes;
        return qn(t, e)
    }, Yn.prototype = Object.create(Se.prototype), Yn.prototype.constructor = Yn, Zn.prototype = Object.create(de.prototype), Zn.prototype.constructor = Zn, Jn.prototype = Object.create(Se.prototype), Jn.prototype.constructor = Jn, Qn.prototype = Object.create(Zn.prototype), Qn.prototype.constructor = Qn, Kn.prototype = Object.create(Jn.prototype), Kn.prototype.constructor = Kn, ei.prototype = Object.create(de.prototype), ei.prototype.constructor = ei, ti.prototype = Object.create(Se.prototype), ti.prototype.constructor = ti;
    var Cu = Object.freeze({
        WireframeGeometry: Gt,
        ParametricGeometry: Vt,
        ParametricBufferGeometry: jt,
        TetrahedronGeometry: Xt,
        TetrahedronBufferGeometry: qt,
        OctahedronGeometry: Yt,
        OctahedronBufferGeometry: Zt,
        IcosahedronGeometry: Jt,
        IcosahedronBufferGeometry: Qt,
        DodecahedronGeometry: Kt,
        DodecahedronBufferGeometry: en,
        PolyhedronGeometry: $t,
        PolyhedronBufferGeometry: Wt,
        TubeGeometry: tn,
        TubeBufferGeometry: nn,
        TorusKnotGeometry: rn,
        TorusKnotBufferGeometry: on,
        TorusGeometry: an,
        TorusBufferGeometry: sn,
        TextGeometry: Un,
        TextBufferGeometry: kn,
        SphereGeometry: zn,
        SphereBufferGeometry: Hn,
        RingGeometry: Gn,
        RingBufferGeometry: Vn,
        PlaneGeometry: Pe,
        PlaneBufferGeometry: Re,
        LatheGeometry: jn,
        LatheBufferGeometry: $n,
        ShapeGeometry: Wn,
        ShapeBufferGeometry: Xn,
        ExtrudeGeometry: Nn,
        ExtrudeBufferGeometry: Fn,
        EdgesGeometry: Yn,
        ConeGeometry: Qn,
        ConeBufferGeometry: Kn,
        CylinderGeometry: Zn,
        CylinderBufferGeometry: Jn,
        CircleGeometry: ei,
        CircleBufferGeometry: ti,
        BoxGeometry: Ce,
        BoxBufferGeometry: Ae
    });
    ni.prototype = Object.create(Q.prototype), ni.prototype.constructor = ni, ni.prototype.isShadowMaterial = !0, ii.prototype = Object.create(Ie.prototype), ii.prototype.constructor = ii, ii.prototype.isRawShaderMaterial = !0, ri.prototype = Object.create(Q.prototype), ri.prototype.constructor = ri, ri.prototype.isMeshStandardMaterial = !0, ri.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, oi.prototype = Object.create(ri.prototype), oi.prototype.constructor = oi, oi.prototype.isMeshPhysicalMaterial = !0, oi.prototype.copy = function(e) {
        return ri.prototype.copy.call(this, e), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
    }, ai.prototype = Object.create(Q.prototype), ai.prototype.constructor = ai, ai.prototype.isMeshPhongMaterial = !0, ai.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, si.prototype = Object.create(ai.prototype), si.prototype.constructor = si, si.prototype.isMeshToonMaterial = !0, si.prototype.copy = function(e) {
        return ai.prototype.copy.call(this, e), this.gradientMap = e.gradientMap, this
    }, ci.prototype = Object.create(Q.prototype), ci.prototype.constructor = ci, ci.prototype.isMeshNormalMaterial = !0, ci.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, li.prototype = Object.create(Q.prototype), li.prototype.constructor = li, li.prototype.isMeshLambertMaterial = !0, li.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
    }, ui.prototype = Object.create(It.prototype), ui.prototype.constructor = ui, ui.prototype.isLineDashedMaterial = !0, ui.prototype.copy = function(e) {
        return It.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    };
    var Au = Object.freeze({
            ShadowMaterial: ni,
            SpriteMaterial: St,
            RawShaderMaterial: ii,
            ShaderMaterial: Ie,
            PointsMaterial: Nt,
            MeshPhysicalMaterial: oi,
            MeshStandardMaterial: ri,
            MeshPhongMaterial: ai,
            MeshToonMaterial: si,
            MeshNormalMaterial: ci,
            MeshLambertMaterial: li,
            MeshDepthMaterial: K,
            MeshDistanceMaterial: ee,
            MeshBasicMaterial: Le,
            LineDashedMaterial: ui,
            LineBasicMaterial: It,
            Material: Q
        }),
        Pu = {
            enabled: !1,
            files: {},
            add: function(e, t) {
                this.enabled !== !1 && (this.files[e] = t)
            },
            get: function(e) {
                return this.enabled !== !1 ? this.files[e] : void 0
            },
            remove: function(e) {
                delete this.files[e]
            },
            clear: function() {
                this.files = {}
            }
        },
        Ru = new hi,
        Lu = {};
    Object.assign(pi.prototype, {
        load: function(e, t, n, i) {
            void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
            var r = this,
                o = Pu.get(e);
            if (void 0 !== o) return r.manager.itemStart(e), setTimeout(function() {
                t && t(o), r.manager.itemEnd(e)
            }, 0), o;
            if (void 0 !== Lu[e]) return void Lu[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
            var a = /^data:(.*?)(;base64)?,(.*)$/,
                s = e.match(a);
            if (s) {
                var c = s[1],
                    l = !!s[2],
                    u = s[3];
                u = window.decodeURIComponent(u), l && (u = window.atob(u));
                try {
                    var h, p = (this.responseType || "").toLowerCase();
                    switch (p) {
                        case "arraybuffer":
                        case "blob":
                            for (var d = new Uint8Array(u.length), f = 0; f < u.length; f++) d[f] = u.charCodeAt(f);
                            h = "blob" === p ? new Blob([d.buffer], {
                                type: c
                            }) : d.buffer;
                            break;
                        case "document":
                            var m = new DOMParser;
                            h = m.parseFromString(u, c);
                            break;
                        case "json":
                            h = JSON.parse(u);
                            break;
                        default:
                            h = u
                    }
                    window.setTimeout(function() {
                        t && t(h), r.manager.itemEnd(e)
                    }, 0)
                } catch (v) {
                    window.setTimeout(function() {
                        i && i(v), r.manager.itemEnd(e), r.manager.itemError(e)
                    }, 0)
                }
            } else {
                Lu[e] = [], Lu[e].push({
                    onLoad: t,
                    onProgress: n,
                    onError: i
                });
                var g = new XMLHttpRequest;
                g.open("GET", e, !0), g.addEventListener("load", function(t) {
                    var n = this.response;
                    Pu.add(e, n);
                    var i = Lu[e];
                    if (delete Lu[e], 200 === this.status) {
                        for (var o = 0, a = i.length; a > o; o++) {
                            var s = i[o];
                            s.onLoad && s.onLoad(n)
                        }
                        r.manager.itemEnd(e)
                    } else if (0 === this.status) {
                        console.warn("THREE.FileLoader: HTTP Status 0 received.");
                        for (var o = 0, a = i.length; a > o; o++) {
                            var s = i[o];
                            s.onLoad && s.onLoad(n)
                        }
                        r.manager.itemEnd(e)
                    } else {
                        for (var o = 0, a = i.length; a > o; o++) {
                            var s = i[o];
                            s.onError && s.onError(t)
                        }
                        r.manager.itemEnd(e), r.manager.itemError(e)
                    }
                }, !1), g.addEventListener("progress", function(t) {
                    for (var n = Lu[e], i = 0, r = n.length; r > i; i++) {
                        var o = n[i];
                        o.onProgress && o.onProgress(t)
                    }
                }, !1), g.addEventListener("error", function(t) {
                    var n = Lu[e];
                    delete Lu[e];
                    for (var i = 0, o = n.length; o > i; i++) {
                        var a = n[i];
                        a.onError && a.onError(t)
                    }
                    r.manager.itemEnd(e), r.manager.itemError(e)
                }, !1), void 0 !== this.responseType && (g.responseType = this.responseType), void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials), g.overrideMimeType && g.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
                for (var y in this.requestHeader) g.setRequestHeader(y, this.requestHeader[y]);
                g.send(null)
            }
            return r.manager.itemStart(e), g
        },
        setPath: function(e) {
            return this.path = e, this
        },
        setResponseType: function(e) {
            return this.responseType = e, this
        },
        setWithCredentials: function(e) {
            return this.withCredentials = e, this
        },
        setMimeType: function(e) {
            return this.mimeType = e, this
        },
        setRequestHeader: function(e) {
            return this.requestHeader = e, this
        }
    }), Object.assign(di.prototype, {
        load: function(e, t, n, i) {
            function r(r) {
                c.load(e[r], function(e) {
                    var n = o._parser(e, !0);
                    a[r] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, l += 1, 6 === l && (1 === n.mipmapCount && (s.minFilter = os), s.format = n.format, s.needsUpdate = !0, t && t(s))
                }, n, i)
            }
            var o = this,
                a = [],
                s = new zt;
            s.image = a;
            var c = new pi(this.manager);
            if (c.setPath(this.path), c.setResponseType("arraybuffer"), Array.isArray(e))
                for (var l = 0, u = 0, h = e.length; h > u; ++u) r(u);
            else c.load(e, function(e) {
                var n = o._parser(e, !0);
                if (n.isCubemap)
                    for (var i = n.mipmaps.length / n.mipmapCount, r = 0; i > r; r++) {
                        a[r] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < n.mipmapCount; c++) a[r].mipmaps.push(n.mipmaps[r * n.mipmapCount + c]), a[r].format = n.format, a[r].width = n.width, a[r].height = n.height
                    } else s.image.width = n.width, s.image.height = n.height, s.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (s.minFilter = os), s.format = n.format, s.needsUpdate = !0, t && t(s)
            }, n, i);
            return s
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(fi.prototype, {
        load: function(e, t, n, i) {
            var r = this,
                o = new h,
                a = new pi(this.manager);
            return a.setResponseType("arraybuffer"), a.load(e, function(e) {
                var n = r._parser(e);
                n && (void 0 !== n.image ? o.image = n.image : void 0 !== n.data && (o.image.width = n.width, o.image.height = n.height, o.image.data = n.data), o.wrapS = void 0 !== n.wrapS ? n.wrapS : es, o.wrapT = void 0 !== n.wrapT ? n.wrapT : es, o.magFilter = void 0 !== n.magFilter ? n.magFilter : os, o.minFilter = void 0 !== n.minFilter ? n.minFilter : ss, o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (o.format = n.format), void 0 !== n.type && (o.type = n.type), void 0 !== n.mipmaps && (o.mipmaps = n.mipmaps), 1 === n.mipmapCount && (o.minFilter = os), o.needsUpdate = !0, t && t(o, n))
            }, n, i), o
        }
    }), Object.assign(mi.prototype, {
        crossOrigin: "Anonymous",
        load: function(e, t, n, i) {
            void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
            var r = this,
                o = Pu.get(e);
            if (void 0 !== o) return r.manager.itemStart(e), setTimeout(function() {
                t && t(o), r.manager.itemEnd(e)
            }, 0), o;
            var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            return a.addEventListener("load", function() {
                Pu.add(e, this), t && t(this), r.manager.itemEnd(e)
            }, !1), a.addEventListener("error", function(t) {
                i && i(t), r.manager.itemEnd(e), r.manager.itemError(e)
            }, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(vi.prototype, {
        crossOrigin: "Anonymous",
        load: function(e, t, n, i) {
            function r(n) {
                a.load(e[n], function(e) {
                    o.images[n] = e, s++, 6 === s && (o.needsUpdate = !0, t && t(o))
                }, void 0, i)
            }
            var o = new p,
                a = new mi(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            for (var s = 0, c = 0; c < e.length; ++c) r(c);
            return o
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(gi.prototype, {
        crossOrigin: "Anonymous",
        load: function(e, t, n, i) {
            var r = new s,
                o = new mi(this.manager);
            return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(n) {
                r.image = n;
                var i = e.search(/\.(jpg|jpeg)$/) > 0 || 0 === e.search(/^data\:image\/jpeg/);
                r.format = i ? ws : _s, r.needsUpdate = !0, void 0 !== t && t(r)
            }, n, i), r
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e, this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }), Object.assign(yi.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null
        },
        getPointAt: function(e, t) {
            var n = this.getUtoTmapping(e);
            return this.getPoint(n, t)
        },
        getPoints: function(e) {
            void 0 === e && (e = 5);
            for (var t = [], n = 0; e >= n; n++) t.push(this.getPoint(n / e));
            return t
        },
        getSpacedPoints: function(e) {
            void 0 === e && (e = 5);
            for (var t = [], n = 0; e >= n; n++) t.push(this.getPointAt(n / e));
            return t
        },
        getLength: function() {
            var e = this.getLengths();
            return e[e.length - 1]
        },
        getLengths: function(e) {
            if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var t, n, i = [],
                r = this.getPoint(0),
                o = 0;
            for (i.push(0), n = 1; e >= n; n++) t = this.getPoint(n / e), o += t.distanceTo(r), i.push(o), r = t;
            return this.cacheArcLengths = i, i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function(e, t) {
            var n, i = this.getLengths(),
                r = 0,
                o = i.length;
            n = t ? t : e * i[o - 1];
            for (var a, s = 0, c = o - 1; c >= s;)
                if (r = Math.floor(s + (c - s) / 2), a = i[r] - n, 0 > a) s = r + 1;
                else {
                    if (!(a > 0)) {
                        c = r;
                        break
                    }
                    c = r - 1
                } if (r = c, i[r] === n) return r / (o - 1);
            var l = i[r],
                u = i[r + 1],
                h = u - l,
                p = (n - l) / h,
                d = (r + p) / (o - 1);
            return d
        },
        getTangent: function(e) {
            var t = 1e-4,
                n = e - t,
                i = e + t;
            0 > n && (n = 0), i > 1 && (i = 1);
            var r = this.getPoint(n),
                o = this.getPoint(i),
                a = o.clone().sub(r);
            return a.normalize()
        },
        getTangentAt: function(e) {
            var t = this.getUtoTmapping(e);
            return this.getTangent(t)
        },
        computeFrenetFrames: function(e, t) {
            var n, r, a, s = new o,
                c = [],
                l = [],
                u = [],
                h = new o,
                p = new i;
            for (n = 0; e >= n; n++) r = n / e, c[n] = this.getTangentAt(r), c[n].normalize();
            l[0] = new o, u[0] = new o;
            var d = Number.MAX_VALUE,
                f = Math.abs(c[0].x),
                m = Math.abs(c[0].y),
                v = Math.abs(c[0].z);
            for (d >= f && (d = f, s.set(1, 0, 0)), d >= m && (d = m, s.set(0, 1, 0)), d >= v && s.set(0, 0, 1), h.crossVectors(c[0], s).normalize(), l[0].crossVectors(c[0], h), u[0].crossVectors(c[0], l[0]), n = 1; e >= n; n++) l[n] = l[n - 1].clone(), u[n] = u[n - 1].clone(), h.crossVectors(c[n - 1], c[n]), h.length() > Number.EPSILON && (h.normalize(), a = Math.acos(oc.clamp(c[n - 1].dot(c[n]), -1, 1)), l[n].applyMatrix4(p.makeRotationAxis(h, a))), u[n].crossVectors(c[n], l[n]);
            if (t === !0)
                for (a = Math.acos(oc.clamp(l[0].dot(l[e]), -1, 1)), a /= e, c[0].dot(h.crossVectors(l[0], l[e])) > 0 && (a = -a), n = 1; e >= n; n++) l[n].applyMatrix4(p.makeRotationAxis(c[n], a * n)), u[n].crossVectors(c[n], l[n]);
            return {
                tangents: c,
                normals: l,
                binormals: u
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.arcLengthDivisions = e.arcLengthDivisions, this
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
        },
        fromJSON: function(e) {
            return this.arcLengthDivisions = e.arcLengthDivisions, this
        }
    }), xi.prototype = Object.create(yi.prototype), xi.prototype.constructor = xi, xi.prototype.isEllipseCurve = !0, xi.prototype.getPoint = function(e, t) {
        for (var i = t || new n, r = 2 * Math.PI, o = this.aEndAngle - this.aStartAngle, a = Math.abs(o) < Number.EPSILON; 0 > o;) o += r;
        for (; o > r;) o -= r;
        o < Number.EPSILON && (o = a ? 0 : r), this.aClockwise !== !0 || a || (o === r ? o = -r : o -= r);
        var s = this.aStartAngle + e * o,
            c = this.aX + this.xRadius * Math.cos(s),
            l = this.aY + this.yRadius * Math.sin(s);
        if (0 !== this.aRotation) {
            var u = Math.cos(this.aRotation),
                h = Math.sin(this.aRotation),
                p = c - this.aX,
                d = l - this.aY;
            c = p * u - d * h + this.aX, l = p * h + d * u + this.aY
        }
        return i.set(c, l)
    }, xi.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }, xi.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
    }, xi.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }, bi.prototype = Object.create(xi.prototype), bi.prototype.constructor = bi, bi.prototype.isArcCurve = !0;
    var Iu = new o,
        Ou = new wi,
        Bu = new wi,
        Du = new wi;
    _i.prototype = Object.create(yi.prototype), _i.prototype.constructor = _i, _i.prototype.isCatmullRomCurve3 = !0, _i.prototype.getPoint = function(e, t) {
        var n = t || new o,
            i = this.points,
            r = i.length,
            a = (r - (this.closed ? 0 : 1)) * e,
            s = Math.floor(a),
            c = a - s;
        this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / i.length) + 1) * i.length : 0 === c && s === r - 1 && (s = r - 2, c = 1);
        var l, u, h, p;
        if (this.closed || s > 0 ? l = i[(s - 1) % r] : (Iu.subVectors(i[0], i[1]).add(i[0]), l = Iu), u = i[s % r], h = i[(s + 1) % r], this.closed || r > s + 2 ? p = i[(s + 2) % r] : (Iu.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), p = Iu), "centripetal" === this.curveType || "chordal" === this.curveType) {
            var d = "chordal" === this.curveType ? .5 : .25,
                f = Math.pow(l.distanceToSquared(u), d),
                m = Math.pow(u.distanceToSquared(h), d),
                v = Math.pow(h.distanceToSquared(p), d);
            1e-4 > m && (m = 1), 1e-4 > f && (f = m), 1e-4 > v && (v = m), Ou.initNonuniformCatmullRom(l.x, u.x, h.x, p.x, f, m, v), Bu.initNonuniformCatmullRom(l.y, u.y, h.y, p.y, f, m, v), Du.initNonuniformCatmullRom(l.z, u.z, h.z, p.z, f, m, v)
        } else "catmullrom" === this.curveType && (Ou.initCatmullRom(l.x, u.x, h.x, p.x, this.tension), Bu.initCatmullRom(l.y, u.y, h.y, p.y, this.tension), Du.initCatmullRom(l.z, u.z, h.z, p.z, this.tension));
        return n.set(Ou.calc(c), Bu.calc(c), Du.calc(c)), n
    }, _i.prototype.copy = function(e) {
        yi.prototype.copy.call(this, e), this.points = [];
        for (var t = 0, n = e.points.length; n > t; t++) {
            var i = e.points[t];
            this.points.push(i.clone())
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }, _i.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        e.points = [];
        for (var t = 0, n = this.points.length; n > t; t++) {
            var i = this.points[t];
            e.points.push(i.toArray())
        }
        return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
    }, _i.prototype.fromJSON = function(e) {
        yi.prototype.fromJSON.call(this, e), this.points = [];
        for (var t = 0, n = e.points.length; n > t; t++) {
            var i = e.points[t];
            this.points.push((new o).fromArray(i))
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }, Oi.prototype = Object.create(yi.prototype), Oi.prototype.constructor = Oi, Oi.prototype.isCubicBezierCurve = !0, Oi.prototype.getPoint = function(e, t) {
        var i = t || new n,
            r = this.v0,
            o = this.v1,
            a = this.v2,
            s = this.v3;
        return i.set(Ii(e, r.x, o.x, a.x, s.x), Ii(e, r.y, o.y, a.y, s.y)), i
    }, Oi.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }, Oi.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }, Oi.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }, Bi.prototype = Object.create(yi.prototype), Bi.prototype.constructor = Bi, Bi.prototype.isCubicBezierCurve3 = !0, Bi.prototype.getPoint = function(e, t) {
        var n = t || new o,
            i = this.v0,
            r = this.v1,
            a = this.v2,
            s = this.v3;
        return n.set(Ii(e, i.x, r.x, a.x, s.x), Ii(e, i.y, r.y, a.y, s.y), Ii(e, i.z, r.z, a.z, s.z)), n
    }, Bi.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }, Bi.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }, Bi.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }, Di.prototype = Object.create(yi.prototype), Di.prototype.constructor = Di, Di.prototype.isLineCurve = !0, Di.prototype.getPoint = function(e, t) {
        var i = t || new n;
        return 1 === e ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i
    }, Di.prototype.getPointAt = function(e, t) {
        return this.getPoint(e, t)
    }, Di.prototype.getTangent = function() {
        var e = this.v2.clone().sub(this.v1);
        return e.normalize()
    }, Di.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Di.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Di.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, Ni.prototype = Object.create(yi.prototype), Ni.prototype.constructor = Ni, Ni.prototype.isLineCurve3 = !0, Ni.prototype.getPoint = function(e, t) {
        var n = t || new o;
        return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }, Ni.prototype.getPointAt = function(e, t) {
        return this.getPoint(e, t)
    }, Ni.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Ni.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Ni.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, Fi.prototype = Object.create(yi.prototype), Fi.prototype.constructor = Fi, Fi.prototype.isQuadraticBezierCurve = !0, Fi.prototype.getPoint = function(e, t) {
        var i = t || new n,
            r = this.v0,
            o = this.v1,
            a = this.v2;
        return i.set(Ci(e, r.x, o.x, a.x), Ci(e, r.y, o.y, a.y)), i
    }, Fi.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Fi.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Fi.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, Ui.prototype = Object.create(yi.prototype), Ui.prototype.constructor = Ui, Ui.prototype.isQuadraticBezierCurve3 = !0, Ui.prototype.getPoint = function(e, t) {
        var n = t || new o,
            i = this.v0,
            r = this.v1,
            a = this.v2;
        return n.set(Ci(e, i.x, r.x, a.x), Ci(e, i.y, r.y, a.y), Ci(e, i.z, r.z, a.z)), n
    }, Ui.prototype.copy = function(e) {
        return yi.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }, Ui.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }, Ui.prototype.fromJSON = function(e) {
        return yi.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }, ki.prototype = Object.create(yi.prototype), ki.prototype.constructor = ki, ki.prototype.isSplineCurve = !0, ki.prototype.getPoint = function(e, t) {
        var i = t || new n,
            r = this.points,
            o = (r.length - 1) * e,
            a = Math.floor(o),
            s = o - a,
            c = r[0 === a ? a : a - 1],
            l = r[a],
            u = r[a > r.length - 2 ? r.length - 1 : a + 1],
            h = r[a > r.length - 3 ? r.length - 1 : a + 2];
        return i.set(Mi(s, c.x, l.x, u.x, h.x), Mi(s, c.y, l.y, u.y, h.y)), i
    }, ki.prototype.copy = function(e) {
        yi.prototype.copy.call(this, e), this.points = [];
        for (var t = 0, n = e.points.length; n > t; t++) {
            var i = e.points[t];
            this.points.push(i.clone())
        }
        return this
    }, ki.prototype.toJSON = function() {
        var e = yi.prototype.toJSON.call(this);
        e.points = [];
        for (var t = 0, n = this.points.length; n > t; t++) {
            var i = this.points[t];
            e.points.push(i.toArray())
        }
        return e
    }, ki.prototype.fromJSON = function(e) {
        yi.prototype.fromJSON.call(this, e), this.points = [];
        for (var t = 0, i = e.points.length; i > t; t++) {
            var r = e.points[t];
            this.points.push((new n).fromArray(r))
        }
        return this
    };
    var Nu = Object.freeze({
        ArcCurve: bi,
        CatmullRomCurve3: _i,
        CubicBezierCurve: Oi,
        CubicBezierCurve3: Bi,
        EllipseCurve: xi,
        LineCurve: Di,
        LineCurve3: Ni,
        QuadraticBezierCurve: Fi,
        QuadraticBezierCurve3: Ui,
        SplineCurve: ki
    });
    zi.prototype = Object.assign(Object.create(yi.prototype), {
            constructor: zi,
            add: function(e) {
                this.curves.push(e)
            },
            closePath: function() {
                var e = this.curves[0].getPoint(0),
                    t = this.curves[this.curves.length - 1].getPoint(1);
                e.equals(t) || this.curves.push(new Di(t, e))
            },
            getPoint: function(e) {
                for (var t = e * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length;) {
                    if (n[i] >= t) {
                        var r = n[i] - t,
                            o = this.curves[i],
                            a = o.getLength(),
                            s = 0 === a ? 0 : 1 - r / a;
                        return o.getPointAt(s)
                    }
                    i++
                }
                return null
            },
            getLength: function() {
                var e = this.getCurveLengths();
                return e[e.length - 1]
            },
            updateArcLengths: function() {
                this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
            },
            getCurveLengths: function() {
                if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
                for (var e = [], t = 0, n = 0, i = this.curves.length; i > n; n++) t += this.curves[n].getLength(), e.push(t);
                return this.cacheLengths = e, e
            },
            getSpacedPoints: function(e) {
                void 0 === e && (e = 40);
                for (var t = [], n = 0; e >= n; n++) t.push(this.getPoint(n / e));
                return this.autoClose && t.push(t[0]), t
            },
            getPoints: function(e) {
                e = e || 12;
                for (var t, n = [], i = 0, r = this.curves; i < r.length; i++)
                    for (var o = r[i], a = o && o.isEllipseCurve ? 2 * e : o && o.isLineCurve ? 1 : o && o.isSplineCurve ? e * o.points.length : e, s = o.getPoints(a), c = 0; c < s.length; c++) {
                        var l = s[c];
                        t && t.equals(l) || (n.push(l), t = l)
                    }
                return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
            },
            copy: function(e) {
                yi.prototype.copy.call(this, e), this.curves = [];
                for (var t = 0, n = e.curves.length; n > t; t++) {
                    var i = e.curves[t];
                    this.curves.push(i.clone())
                }
                return this.autoClose = e.autoClose, this
            },
            toJSON: function() {
                var e = yi.prototype.toJSON.call(this);
                e.autoClose = this.autoClose, e.curves = [];
                for (var t = 0, n = this.curves.length; n > t; t++) {
                    var i = this.curves[t];
                    e.curves.push(i.toJSON())
                }
                return e
            },
            fromJSON: function(e) {
                yi.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
                for (var t = 0, n = e.curves.length; n > t; t++) {
                    var i = e.curves[t];
                    this.curves.push((new Nu[i.type]).fromJSON(i))
                }
                return this
            }
        }), Hi.prototype = Object.assign(Object.create(zi.prototype), {
            constructor: Hi,
            setFromPoints: function(e) {
                this.moveTo(e[0].x, e[0].y);
                for (var t = 1, n = e.length; n > t; t++) this.lineTo(e[t].x, e[t].y)
            },
            moveTo: function(e, t) {
                this.currentPoint.set(e, t)
            },
            lineTo: function(e, t) {
                var i = new Di(this.currentPoint.clone(), new n(e, t));
                this.curves.push(i), this.currentPoint.set(e, t)
            },
            quadraticCurveTo: function(e, t, i, r) {
                var o = new Fi(this.currentPoint.clone(), new n(e, t), new n(i, r));
                this.curves.push(o), this.currentPoint.set(i, r)
            },
            bezierCurveTo: function(e, t, i, r, o, a) {
                var s = new Oi(this.currentPoint.clone(), new n(e, t), new n(i, r), new n(o, a));
                this.curves.push(s), this.currentPoint.set(o, a)
            },
            splineThru: function(e) {
                var t = [this.currentPoint.clone()].concat(e),
                    n = new ki(t);
                this.curves.push(n), this.currentPoint.copy(e[e.length - 1])
            },
            arc: function(e, t, n, i, r, o) {
                var a = this.currentPoint.x,
                    s = this.currentPoint.y;
                this.absarc(e + a, t + s, n, i, r, o)
            },
            absarc: function(e, t, n, i, r, o) {
                this.absellipse(e, t, n, n, i, r, o)
            },
            ellipse: function(e, t, n, i, r, o, a, s) {
                var c = this.currentPoint.x,
                    l = this.currentPoint.y;
                this.absellipse(e + c, t + l, n, i, r, o, a, s)
            },
            absellipse: function(e, t, n, i, r, o, a, s) {
                var c = new xi(e, t, n, i, r, o, a, s);
                if (this.curves.length > 0) {
                    var l = c.getPoint(0);
                    l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
                }
                this.curves.push(c);
                var u = c.getPoint(1);
                this.currentPoint.copy(u)
            },
            copy: function(e) {
                return zi.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this
            },
            toJSON: function() {
                var e = zi.prototype.toJSON.call(this);
                return e.currentPoint = this.currentPoint.toArray(), e
            },
            fromJSON: function(e) {
                return zi.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this
            }
        }), Gi.prototype = Object.assign(Object.create(Hi.prototype), {
            constructor: Gi,
            getPointsHoles: function(e) {
                for (var t = [], n = 0, i = this.holes.length; i > n; n++) t[n] = this.holes[n].getPoints(e);
                return t
            },
            extractPoints: function(e) {
                return {
                    shape: this.getPoints(e),
                    holes: this.getPointsHoles(e)
                }
            },
            copy: function(e) {
                Hi.prototype.copy.call(this, e), this.holes = [];
                for (var t = 0, n = e.holes.length; n > t; t++) {
                    var i = e.holes[t];
                    this.holes.push(i.clone())
                }
                return this
            },
            toJSON: function() {
                var e = Hi.prototype.toJSON.call(this);
                e.uuid = this.uuid, e.holes = [];
                for (var t = 0, n = this.holes.length; n > t; t++) {
                    var i = this.holes[t];
                    e.holes.push(i.toJSON())
                }
                return e
            },
            fromJSON: function(e) {
                Hi.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
                for (var t = 0, n = e.holes.length; n > t; t++) {
                    var i = e.holes[t];
                    this.holes.push((new Hi).fromJSON(i))
                }
                return this
            }
        }), Vi.prototype = Object.assign(Object.create(le.prototype), {
            constructor: Vi,
            isLight: !0,
            copy: function(e) {
                return le.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
            },
            toJSON: function(e) {
                var t = le.prototype.toJSON.call(this, e);
                return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
            }
        }), ji.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: ji,
            isHemisphereLight: !0,
            copy: function(e) {
                return Vi.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
            }
        }), Object.assign($i.prototype, {
            copy: function(e) {
                return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            toJSON: function() {
                var e = {};
                return 0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius), (512 !== this.mapSize.x || 512 !== this.mapSize.y) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
            }
        }), Wi.prototype = Object.assign(Object.create($i.prototype), {
            constructor: Wi,
            isSpotLightShadow: !0,
            update: function(e) {
                var t = this.camera,
                    n = 2 * oc.RAD2DEG * e.angle,
                    i = this.mapSize.width / this.mapSize.height,
                    r = e.distance || t.far;
                (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix())
            }
        }), Xi.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: Xi,
            isSpotLight: !0,
            copy: function(e) {
                return Vi.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
            }
        }), qi.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: qi,
            isPointLight: !0,
            copy: function(e) {
                return Vi.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
            }
        }), Yi.prototype = Object.assign(Object.create($i.prototype), {
            constructor: Yi
        }),
        Zi.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: Zi,
            isDirectionalLight: !0,
            copy: function(e) {
                return Vi.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
            }
        }), Ji.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: Ji,
            isAmbientLight: !0
        }), Qi.prototype = Object.assign(Object.create(Vi.prototype), {
            constructor: Qi,
            isRectAreaLight: !0,
            copy: function(e) {
                return Vi.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this
            },
            toJSON: function(e) {
                var t = Vi.prototype.toJSON.call(this, e);
                return t.object.width = this.width, t.object.height = this.height, t
            }
        }), Ki.prototype = Object.assign(Object.create(lr.prototype), {
            constructor: Ki,
            ValueTypeName: "string",
            ValueBufferType: Array,
            DefaultInterpolation: zs,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }), er.prototype = Object.assign(Object.create(lr.prototype), {
            constructor: er,
            ValueTypeName: "bool",
            ValueBufferType: Array,
            DefaultInterpolation: zs,
            InterpolantFactoryMethodLinear: void 0,
            InterpolantFactoryMethodSmooth: void 0
        }), Object.assign(tr.prototype, {
            evaluate: function(e) {
                var t = this.parameterPositions,
                    n = this._cachedIndex,
                    i = t[n],
                    r = t[n - 1];
                e: {
                    t: {
                        var o;n: {
                            i: if (!(i > e)) {
                                for (var a = n + 2;;) {
                                    if (void 0 === i) {
                                        if (r > e) break i;
                                        return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, r)
                                    }
                                    if (n === a) break;
                                    if (r = i, i = t[++n], i > e) break t
                                }
                                o = t.length;
                                break n
                            } {
                                if (e >= r) break e;
                                var s = t[1];
                                s > e && (n = 2, r = s);
                                for (var a = n - 2;;) {
                                    if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                                    if (n === a) break;
                                    if (i = r, r = t[--n - 1], e >= r) break t
                                }
                                o = n, n = 0
                            }
                        }
                        for (; o > n;) {
                            var c = n + o >>> 1;
                            e < t[c] ? o = c : n = c + 1
                        }
                        if (i = t[n], r = t[n - 1], void 0 === r) return this._cachedIndex = 0,
                        this.beforeStart_(0, e, i);
                        if (void 0 === i) return n = t.length,
                        this._cachedIndex = n,
                        this.afterEnd_(n - 1, r, e)
                    }
                    this._cachedIndex = n,
                    this.intervalChanged_(n, r, i)
                }
                return this.interpolate_(n, r, e, i)
            },
            settings: null,
            DefaultSettings_: {},
            getSettings_: function() {
                return this.settings || this.DefaultSettings_
            },
            copySampleValue_: function(e) {
                for (var t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i, o = 0; o !== i; ++o) t[o] = n[r + o];
                return t
            },
            interpolate_: function() {
                throw new Error("call to abstract method")
            },
            intervalChanged_: function() {}
        }), Object.assign(tr.prototype, {
            beforeStart_: tr.prototype.copySampleValue_,
            afterEnd_: tr.prototype.copySampleValue_
        }), nr.prototype = Object.assign(Object.create(tr.prototype), {
            constructor: nr,
            interpolate_: function(e, t, n, i) {
                for (var o = this.resultBuffer, a = this.sampleValues, s = this.valueSize, c = e * s, l = (n - t) / (i - t), u = c + s; c !== u; c += 4) r.slerpFlat(o, 0, a, c - s, a, c, l);
                return o
            }
        }), ir.prototype = Object.assign(Object.create(lr.prototype), {
            constructor: ir,
            ValueTypeName: "quaternion",
            DefaultInterpolation: Hs,
            InterpolantFactoryMethodLinear: function(e) {
                return new nr(this.times, this.values, this.getValueSize(), e)
            },
            InterpolantFactoryMethodSmooth: void 0
        }), rr.prototype = Object.assign(Object.create(lr.prototype), {
            constructor: rr,
            ValueTypeName: "color"
        }), or.prototype = Object.assign(Object.create(lr.prototype), {
            constructor: or,
            ValueTypeName: "number"
        }), ar.prototype = Object.assign(Object.create(tr.prototype), {
            constructor: ar,
            DefaultSettings_: {
                endingStart: Vs,
                endingEnd: Vs
            },
            intervalChanged_: function(e, t, n) {
                var i = this.parameterPositions,
                    r = e - 2,
                    o = e + 1,
                    a = i[r],
                    s = i[o];
                if (void 0 === a) switch (this.getSettings_().endingStart) {
                    case js:
                        r = e, a = 2 * t - n;
                        break;
                    case $s:
                        r = i.length - 2, a = t + i[r] - i[r + 1];
                        break;
                    default:
                        r = e, a = n
                }
                if (void 0 === s) switch (this.getSettings_().endingEnd) {
                    case js:
                        o = e, s = 2 * n - t;
                        break;
                    case $s:
                        o = 1, s = n + i[1] - i[0];
                        break;
                    default:
                        o = e - 1, s = t
                }
                var c = .5 * (n - t),
                    l = this.valueSize;
                this._weightPrev = c / (t - a), this._weightNext = c / (s - n), this._offsetPrev = r * l, this._offsetNext = o * l
            },
            interpolate_: function(e, t, n, i) {
                for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = e * a, c = s - a, l = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, p = this._weightNext, d = (n - t) / (i - t), f = d * d, m = f * d, v = -h * m + 2 * h * f - h * d, g = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== a; ++b) r[b] = v * o[l + b] + g * o[c + b] + y * o[s + b] + x * o[u + b];
                return r
            }
        }), sr.prototype = Object.assign(Object.create(tr.prototype), {
            constructor: sr,
            interpolate_: function(e, t, n, i) {
                for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = e * a, c = s - a, l = (n - t) / (i - t), u = 1 - l, h = 0; h !== a; ++h) r[h] = o[c + h] * u + o[s + h] * l;
                return r
            }
        }), cr.prototype = Object.assign(Object.create(tr.prototype), {
            constructor: cr,
            interpolate_: function(e) {
                return this.copySampleValue_(e - 1)
            }
        });
    var Fu = {
        arraySlice: function(e, t, n) {
            return Fu.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
        },
        convertArray: function(e, t, n) {
            return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
        },
        isTypedArray: function(e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView)
        },
        getKeyframeOrder: function(e) {
            function t(t, n) {
                return e[t] - e[n]
            }
            for (var n = e.length, i = new Array(n), r = 0; r !== n; ++r) i[r] = r;
            return i.sort(t), i
        },
        sortedArray: function(e, t, n) {
            for (var i = e.length, r = new e.constructor(i), o = 0, a = 0; a !== i; ++o)
                for (var s = n[o] * t, c = 0; c !== t; ++c) r[a++] = e[s + c];
            return r
        },
        flattenJSON: function(e, t, n, i) {
            for (var r = 1, o = e[0]; void 0 !== o && void 0 === o[i];) o = e[r++];
            if (void 0 !== o) {
                var a = o[i];
                if (void 0 !== a)
                    if (Array.isArray(a)) {
                        do a = o[i], void 0 !== a && (t.push(o.time), n.push.apply(n, a)), o = e[r++]; while (void 0 !== o)
                    } else if (void 0 !== a.toArray) {
                    do a = o[i], void 0 !== a && (t.push(o.time), a.toArray(n, n.length)), o = e[r++]; while (void 0 !== o)
                } else
                    do a = o[i], void 0 !== a && (t.push(o.time), n.push(a)), o = e[r++]; while (void 0 !== o)
            }
        }
    };
    Object.assign(lr, {
        parse: function(e) {
            if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
            var t = lr._getTrackTypeForValueTypeName(e.type);
            if (void 0 === e.times) {
                var n = [],
                    i = [];
                Fu.flattenJSON(e.keys, n, i, "value"), e.times = n, e.values = i
            }
            return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
        },
        toJSON: function(e) {
            var t, n = e.constructor;
            if (void 0 !== n.toJSON) t = n.toJSON(e);
            else {
                t = {
                    name: e.name,
                    times: Fu.convertArray(e.times, Array),
                    values: Fu.convertArray(e.values, Array)
                };
                var i = e.getInterpolation();
                i !== e.DefaultInterpolation && (t.interpolation = i)
            }
            return t.type = e.ValueTypeName, t
        },
        _getTrackTypeForValueTypeName: function(e) {
            switch (e.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return or;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return ur;
                case "color":
                    return rr;
                case "quaternion":
                    return ir;
                case "bool":
                case "boolean":
                    return er;
                case "string":
                    return Ki
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
        }
    }), Object.assign(lr.prototype, {
        constructor: lr,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: Hs,
        InterpolantFactoryMethodDiscrete: function(e) {
            return new cr(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodLinear: function(e) {
            return new sr(this.times, this.values, this.getValueSize(), e)
        },
        InterpolantFactoryMethodSmooth: function(e) {
            return new ar(this.times, this.values, this.getValueSize(), e)
        },
        setInterpolation: function(e) {
            var t;
            switch (e) {
                case zs:
                    t = this.InterpolantFactoryMethodDiscrete;
                    break;
                case Hs:
                    t = this.InterpolantFactoryMethodLinear;
                    break;
                case Gs:
                    t = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === t) {
                var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (e === this.DefaultInterpolation) throw new Error(n);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return void console.warn("THREE.KeyframeTrack:", n)
            }
            this.createInterpolant = t
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return zs;
                case this.InterpolantFactoryMethodLinear:
                    return Hs;
                case this.InterpolantFactoryMethodSmooth:
                    return Gs
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(e) {
            if (0 !== e)
                for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] += e;
            return this
        },
        scale: function(e) {
            if (1 !== e)
                for (var t = this.times, n = 0, i = t.length; n !== i; ++n) t[n] *= e;
            return this
        },
        trim: function(e, t) {
            for (var n = this.times, i = n.length, r = 0, o = i - 1; r !== i && n[r] < e;) ++r;
            for (; - 1 !== o && n[o] > t;) --o;
            if (++o, 0 !== r || o !== i) {
                r >= o && (o = Math.max(o, 1), r = o - 1);
                var a = this.getValueSize();
                this.times = Fu.arraySlice(n, r, o), this.values = Fu.arraySlice(this.values, r * a, o * a)
            }
            return this
        },
        validate: function() {
            var e = !0,
                t = this.getValueSize();
            t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
            var n = this.times,
                i = this.values,
                r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
            for (var o = null, a = 0; a !== r; a++) {
                var s = n[a];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, s), e = !1;
                    break
                }
                if (null !== o && o > s) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, a, s, o), e = !1;
                    break
                }
                o = s
            }
            if (void 0 !== i && Fu.isTypedArray(i))
                for (var a = 0, c = i.length; a !== c; ++a) {
                    var l = i[a];
                    if (isNaN(l)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
                        break
                    }
                }
            return e
        },
        optimize: function() {
            for (var e = this.times, t = this.values, n = this.getValueSize(), i = this.getInterpolation() === Gs, r = 1, o = e.length - 1, a = 1; o > a; ++a) {
                var s = !1,
                    c = e[a],
                    l = e[a + 1];
                if (c !== l && (1 !== a || c !== c[0]))
                    if (i) s = !0;
                    else
                        for (var u = a * n, h = u - n, p = u + n, d = 0; d !== n; ++d) {
                            var f = t[u + d];
                            if (f !== t[h + d] || f !== t[p + d]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (a !== r) {
                        e[r] = e[a];
                        for (var m = a * n, v = r * n, d = 0; d !== n; ++d) t[v + d] = t[m + d]
                    }++r
                }
            }
            if (o > 0) {
                e[r] = e[o];
                for (var m = o * n, v = r * n, d = 0; d !== n; ++d) t[v + d] = t[m + d];
                ++r
            }
            return r !== e.length && (this.times = Fu.arraySlice(e, 0, r), this.values = Fu.arraySlice(t, 0, r * n)), this
        }
    }), ur.prototype = Object.assign(Object.create(lr.prototype), {
        constructor: ur,
        ValueTypeName: "vector"
    }), Object.assign(hr, {
        parse: function(e) {
            for (var t = [], n = e.tracks, i = 1 / (e.fps || 1), r = 0, o = n.length; r !== o; ++r) t.push(lr.parse(n[r]).scale(i));
            return new hr(e.name, e.duration, t)
        },
        toJSON: function(e) {
            for (var t = [], n = e.tracks, i = {
                    name: e.name,
                    duration: e.duration,
                    tracks: t
                }, r = 0, o = n.length; r !== o; ++r) t.push(lr.toJSON(n[r]));
            return i
        },
        CreateFromMorphTargetSequence: function(e, t, n, i) {
            for (var r = t.length, o = [], a = 0; r > a; a++) {
                var s = [],
                    c = [];
                s.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
                var l = Fu.getKeyframeOrder(s);
                s = Fu.sortedArray(s, 1, l), c = Fu.sortedArray(c, 1, l), i || 0 !== s[0] || (s.push(r), c.push(c[0])), o.push(new or(".morphTargetInfluences[" + t[a].name + "]", s, c).scale(1 / n))
            }
            return new hr(e, -1, o)
        },
        findByName: function(e, t) {
            var n = e;
            if (!Array.isArray(e)) {
                var i = e;
                n = i.geometry && i.geometry.animations || i.animations
            }
            for (var r = 0; r < n.length; r++)
                if (n[r].name === t) return n[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(e, t, n) {
            for (var i = {}, r = /^([\w-]*?)([\d]+)$/, o = 0, a = e.length; a > o; o++) {
                var s = e[o],
                    c = s.name.match(r);
                if (c && c.length > 1) {
                    var l = c[1],
                        u = i[l];
                    u || (i[l] = u = []), u.push(s)
                }
            }
            var h = [];
            for (var l in i) h.push(hr.CreateFromMorphTargetSequence(l, i[l], t, n));
            return h
        },
        parseAnimation: function(e, t) {
            if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            for (var n = function(e, t, n, i, r) {
                    if (0 !== n.length) {
                        var o = [],
                            a = [];
                        Fu.flattenJSON(n, o, a, i), 0 !== o.length && r.push(new e(t, o, a))
                    }
                }, i = [], r = e.name || "default", o = e.length || -1, a = e.fps || 30, s = e.hierarchy || [], c = 0; c < s.length; c++) {
                var l = s[c].keys;
                if (l && 0 !== l.length)
                    if (l[0].morphTargets) {
                        for (var u = {}, h = 0; h < l.length; h++)
                            if (l[h].morphTargets)
                                for (var p = 0; p < l[h].morphTargets.length; p++) u[l[h].morphTargets[p]] = -1;
                        for (var d in u) {
                            for (var f = [], m = [], p = 0; p !== l[h].morphTargets.length; ++p) {
                                var v = l[h];
                                f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
                            }
                            i.push(new or(".morphTargetInfluence[" + d + "]", f, m))
                        }
                        o = u.length * (a || 1)
                    } else {
                        var g = ".bones[" + t[c].name + "]";
                        n(ur, g + ".position", l, "pos", i), n(ir, g + ".quaternion", l, "rot", i), n(ur, g + ".scale", l, "scl", i)
                    }
            }
            if (0 === i.length) return null;
            var y = new hr(r, o, i);
            return y
        }
    }), Object.assign(hr.prototype, {
        resetDuration: function() {
            for (var e = this.tracks, t = 0, n = 0, i = e.length; n !== i; ++n) {
                var r = this.tracks[n];
                t = Math.max(t, r.times[r.times.length - 1])
            }
            this.duration = t
        },
        trim: function() {
            for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
            return this
        }
    }), Object.assign(pr.prototype, {
        load: function(e, t, n, i) {
            var r = this,
                o = new pi(r.manager);
            o.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, n, i)
        },
        setTextures: function(e) {
            this.textures = e
        },
        parse: function(e) {
            function t(e) {
                return void 0 === i[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), i[e]
            }
            var i = this.textures,
                r = new Au[e.type];
            if (void 0 !== e.uuid && (r.uuid = e.uuid), void 0 !== e.name && (r.name = e.name), void 0 !== e.color && r.color.setHex(e.color), void 0 !== e.roughness && (r.roughness = e.roughness), void 0 !== e.metalness && (r.metalness = e.metalness), void 0 !== e.emissive && r.emissive.setHex(e.emissive), void 0 !== e.specular && r.specular.setHex(e.specular), void 0 !== e.shininess && (r.shininess = e.shininess), void 0 !== e.clearCoat && (r.clearCoat = e.clearCoat), void 0 !== e.clearCoatRoughness && (r.clearCoatRoughness = e.clearCoatRoughness), void 0 !== e.uniforms && (r.uniforms = e.uniforms), void 0 !== e.vertexShader && (r.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (r.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (r.vertexColors = e.vertexColors), void 0 !== e.fog && (r.fog = e.fog), void 0 !== e.flatShading && (r.flatShading = e.flatShading), void 0 !== e.blending && (r.blending = e.blending), void 0 !== e.side && (r.side = e.side), void 0 !== e.opacity && (r.opacity = e.opacity), void 0 !== e.transparent && (r.transparent = e.transparent), void 0 !== e.alphaTest && (r.alphaTest = e.alphaTest), void 0 !== e.depthTest && (r.depthTest = e.depthTest), void 0 !== e.depthWrite && (r.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (r.colorWrite = e.colorWrite), void 0 !== e.wireframe && (r.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (r.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.wireframeLinecap && (r.wireframeLinecap = e.wireframeLinecap), void 0 !== e.wireframeLinejoin && (r.wireframeLinejoin = e.wireframeLinejoin), void 0 !== e.rotation && (r.rotation = e.rotation), 1 !== e.linewidth && (r.linewidth = e.linewidth), void 0 !== e.dashSize && (r.dashSize = e.dashSize), void 0 !== e.gapSize && (r.gapSize = e.gapSize), void 0 !== e.scale && (r.scale = e.scale), void 0 !== e.skinning && (r.skinning = e.skinning), void 0 !== e.morphTargets && (r.morphTargets = e.morphTargets), void 0 !== e.dithering && (r.dithering = e.dithering), void 0 !== e.visible && (r.visible = e.visible), void 0 !== e.userData && (r.userData = e.userData), void 0 !== e.shading && (r.flatShading = 1 === e.shading), void 0 !== e.size && (r.size = e.size), void 0 !== e.sizeAttenuation && (r.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (r.map = t(e.map)), void 0 !== e.alphaMap && (r.alphaMap = t(e.alphaMap), r.transparent = !0), void 0 !== e.bumpMap && (r.bumpMap = t(e.bumpMap)), void 0 !== e.bumpScale && (r.bumpScale = e.bumpScale), void 0 !== e.normalMap && (r.normalMap = t(e.normalMap)), void 0 !== e.normalScale) {
                var o = e.normalScale;
                Array.isArray(o) === !1 && (o = [o, o]), r.normalScale = (new n).fromArray(o)
            }
            return void 0 !== e.displacementMap && (r.displacementMap = t(e.displacementMap)), void 0 !== e.displacementScale && (r.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (r.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (r.roughnessMap = t(e.roughnessMap)), void 0 !== e.metalnessMap && (r.metalnessMap = t(e.metalnessMap)), void 0 !== e.emissiveMap && (r.emissiveMap = t(e.emissiveMap)), void 0 !== e.emissiveIntensity && (r.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (r.specularMap = t(e.specularMap)), void 0 !== e.envMap && (r.envMap = t(e.envMap)), void 0 !== e.reflectivity && (r.reflectivity = e.reflectivity), void 0 !== e.lightMap && (r.lightMap = t(e.lightMap)), void 0 !== e.lightMapIntensity && (r.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (r.aoMap = t(e.aoMap)), void 0 !== e.aoMapIntensity && (r.aoMapIntensity = e.aoMapIntensity), void 0 !== e.gradientMap && (r.gradientMap = t(e.gradientMap)), r
        }
    }), Object.assign(dr.prototype, {
        load: function(e, t, n, i) {
            var r = this,
                o = new pi(r.manager);
            o.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, n, i)
        },
        parse: function(e) {
            var t = new Se,
                n = e.data.index;
            if (void 0 !== n) {
                var i = new Uu[n.type](n.array);
                t.setIndex(new fe(i, 1))
            }
            var r = e.data.attributes;
            for (var a in r) {
                var s = r[a],
                    i = new Uu[s.type](s.array);
                t.addAttribute(a, new fe(i, s.itemSize, s.normalized))
            }
            var c = e.data.groups || e.data.drawcalls || e.data.offsets;
            if (void 0 !== c)
                for (var l = 0, u = c.length; l !== u; ++l) {
                    var h = c[l];
                    t.addGroup(h.start, h.count, h.materialIndex)
                }
            var p = e.data.boundingSphere;
            if (void 0 !== p) {
                var d = new o;
                void 0 !== p.center && d.fromArray(p.center), t.boundingSphere = new ne(d, p.radius)
            }
            return t
        }
    });
    var Uu = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    fr.Handlers = {
        handlers: [],
        add: function(e, t) {
            this.handlers.push(e, t)
        },
        get: function(e) {
            for (var t = this.handlers, n = 0, i = t.length; i > n; n += 2) {
                var r = t[n],
                    o = t[n + 1];
                if (r.test(e)) return o
            }
            return null
        }
    }, Object.assign(fr.prototype, {
        crossOrigin: void 0,
        initMaterials: function(e, t, n) {
            for (var i = [], r = 0; r < e.length; ++r) i[r] = this.createMaterial(e[r], t, n);
            return i
        },
        createMaterial: function() {
            var e = {
                    NoBlending: sa,
                    NormalBlending: ca,
                    AdditiveBlending: la,
                    SubtractiveBlending: ua,
                    MultiplyBlending: ha,
                    CustomBlending: pa
                },
                t = new X,
                n = new gi,
                i = new pr;
            return function(r, o, a) {
                function s(e, t, i, r, s) {
                    var l, u = o + e,
                        h = fr.Handlers.get(u);
                    null !== h ? l = h.load(u) : (n.setCrossOrigin(a), l = n.load(u)), void 0 !== t && (l.repeat.fromArray(t), 1 !== t[0] && (l.wrapS = Ka), 1 !== t[1] && (l.wrapT = Ka)), void 0 !== i && l.offset.fromArray(i), void 0 !== r && ("repeat" === r[0] && (l.wrapS = Ka), "mirror" === r[0] && (l.wrapS = ts), "repeat" === r[1] && (l.wrapT = Ka), "mirror" === r[1] && (l.wrapT = ts)), void 0 !== s && (l.anisotropy = s);
                    var p = oc.generateUUID();
                    return c[p] = l, p
                }
                var c = {},
                    l = {
                        uuid: oc.generateUUID(),
                        type: "MeshLambertMaterial"
                    };
                for (var u in r) {
                    var h = r[u];
                    switch (u) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            l.name = h;
                            break;
                        case "blending":
                            l.blending = e[h];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", u, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            l.color = t.fromArray(h).getHex();
                            break;
                        case "colorSpecular":
                            l.specular = t.fromArray(h).getHex();
                            break;
                        case "colorEmissive":
                            l.emissive = t.fromArray(h).getHex();
                            break;
                        case "specularCoef":
                            l.shininess = h;
                            break;
                        case "shading":
                            "basic" === h.toLowerCase() && (l.type = "MeshBasicMaterial"), "phong" === h.toLowerCase() && (l.type = "MeshPhongMaterial"), "standard" === h.toLowerCase() && (l.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            l.map = s(h, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            l.emissiveMap = s(h, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            l.lightMap = s(h, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            l.aoMap = s(h, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            l.bumpMap = s(h, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            l.bumpScale = h;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            l.normalMap = s(h, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            l.normalScale = [h, h];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            l.specularMap = s(h, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            l.metalnessMap = s(h, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            l.roughnessMap = s(h, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            l.alphaMap = s(h, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            l.side = ea;
                            break;
                        case "doubleSided":
                            l.side = ta;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), l.opacity = h;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            l[u] = h;
                            break;
                        case "vertexColors":
                            h === !0 && (l.vertexColors = aa), "face" === h && (l.vertexColors = oa);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", u, h)
                    }
                }
                return "MeshBasicMaterial" === l.type && delete l.emissive, "MeshPhongMaterial" !== l.type && delete l.specular, l.opacity < 1 && (l.transparent = !0), i.setTextures(c), i.parse(l)
            }
        }()
    });
    var ku = {
        decodeText: function(e) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(e);
            for (var t = "", n = 0, i = e.length; i > n; n++) t += String.fromCharCode(e[n]);
            return t
        },
        extractUrlBase: function(e) {
            var t = e.split("/");
            return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
        }
    };
    Object.assign(mr.prototype, {
        load: function(e, t, n, i) {
            var r = this,
                o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : ku.extractUrlBase(e),
                a = new pi(this.manager);
            a.setWithCredentials(this.withCredentials), a.load(e, function(n) {
                var i = JSON.parse(n),
                    a = i.metadata;
                if (void 0 !== a) {
                    var s = a.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var c = r.parse(i, o);
                t(c.geometry, c.materials)
            }, n, i)
        },
        setTexturePath: function(e) {
            this.texturePath = e
        },
        parse: function() {
            function e(e, t) {
                function i(e, t) {
                    return e & 1 << t
                }
                var r, a, s, c, l, u, h, p, d, f, m, v, g, y, x, b, w, _, M, T, E, S, C, A, P, R, L, I = e.faces,
                    O = e.vertices,
                    B = e.normals,
                    D = e.colors,
                    N = e.scale,
                    F = 0;
                if (void 0 !== e.uvs) {
                    for (r = 0; r < e.uvs.length; r++) e.uvs[r].length && F++;
                    for (r = 0; F > r; r++) t.faceVertexUvs[r] = []
                }
                for (c = 0, l = O.length; l > c;) _ = new o, _.x = O[c++] * N, _.y = O[c++] * N, _.z = O[c++] * N, t.vertices.push(_);
                for (c = 0, l = I.length; l > c;)
                    if (f = I[c++], m = i(f, 0), v = i(f, 1), g = i(f, 3), y = i(f, 4), x = i(f, 5), b = i(f, 6), w = i(f, 7), m) {
                        if (T = new pe, T.a = I[c], T.b = I[c + 1], T.c = I[c + 3], E = new pe, E.a = I[c + 1], E.b = I[c + 2], E.c = I[c + 3], c += 4, v && (d = I[c++], T.materialIndex = d, E.materialIndex = d), s = t.faces.length, g)
                            for (r = 0; F > r; r++)
                                for (A = e.uvs[r], t.faceVertexUvs[r][s] = [], t.faceVertexUvs[r][s + 1] = [], a = 0; 4 > a; a++) p = I[c++], R = A[2 * p], L = A[2 * p + 1], P = new n(R, L), 2 !== a && t.faceVertexUvs[r][s].push(P), 0 !== a && t.faceVertexUvs[r][s + 1].push(P);
                        if (y && (h = 3 * I[c++], T.normal.set(B[h++], B[h++], B[h]), E.normal.copy(T.normal)), x)
                            for (r = 0; 4 > r; r++) h = 3 * I[c++], C = new o(B[h++], B[h++], B[h]), 2 !== r && T.vertexNormals.push(C), 0 !== r && E.vertexNormals.push(C);
                        if (b && (u = I[c++], S = D[u], T.color.setHex(S), E.color.setHex(S)), w)
                            for (r = 0; 4 > r; r++) u = I[c++], S = D[u], 2 !== r && T.vertexColors.push(new X(S)), 0 !== r && E.vertexColors.push(new X(S));
                        t.faces.push(T), t.faces.push(E)
                    } else {
                        if (M = new pe, M.a = I[c++], M.b = I[c++], M.c = I[c++], v && (d = I[c++], M.materialIndex = d), s = t.faces.length, g)
                            for (r = 0; F > r; r++)
                                for (A = e.uvs[r], t.faceVertexUvs[r][s] = [], a = 0; 3 > a; a++) p = I[c++], R = A[2 * p], L = A[2 * p + 1], P = new n(R, L), t.faceVertexUvs[r][s].push(P);
                        if (y && (h = 3 * I[c++], M.normal.set(B[h++], B[h++], B[h])), x)
                            for (r = 0; 3 > r; r++) h = 3 * I[c++], C = new o(B[h++], B[h++], B[h]), M.vertexNormals.push(C);
                        if (b && (u = I[c++], M.color.setHex(D[u])), w)
                            for (r = 0; 3 > r; r++) u = I[c++], M.vertexColors.push(new X(D[u]));
                        t.faces.push(M)
                    }
            }

            function t(e, t) {
                var n = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                if (e.skinWeights)
                    for (var i = 0, r = e.skinWeights.length; r > i; i += n) {
                        var o = e.skinWeights[i],
                            a = n > 1 ? e.skinWeights[i + 1] : 0,
                            s = n > 2 ? e.skinWeights[i + 2] : 0,
                            l = n > 3 ? e.skinWeights[i + 3] : 0;
                        t.skinWeights.push(new c(o, a, s, l))
                    }
                if (e.skinIndices)
                    for (var i = 0, r = e.skinIndices.length; r > i; i += n) {
                        var u = e.skinIndices[i],
                            h = n > 1 ? e.skinIndices[i + 1] : 0,
                            p = n > 2 ? e.skinIndices[i + 2] : 0,
                            d = n > 3 ? e.skinIndices[i + 3] : 0;
                        t.skinIndices.push(new c(u, h, p, d))
                    }
                t.bones = e.bones, t.bones && t.bones.length > 0 && (t.skinWeights.length !== t.skinIndices.length || t.skinIndices.length !== t.vertices.length) && console.warn("When skinning, number of vertices (" + t.vertices.length + "), skinIndices (" + t.skinIndices.length + "), and skinWeights (" + t.skinWeights.length + ") should match.")
            }

            function i(e, t) {
                var n = e.scale;
                if (void 0 !== e.morphTargets)
                    for (var i = 0, r = e.morphTargets.length; r > i; i++) {
                        t.morphTargets[i] = {}, t.morphTargets[i].name = e.morphTargets[i].name, t.morphTargets[i].vertices = [];
                        for (var a = t.morphTargets[i].vertices, s = e.morphTargets[i].vertices, c = 0, l = s.length; l > c; c += 3) {
                            var u = new o;
                            u.x = s[c] * n, u.y = s[c + 1] * n, u.z = s[c + 2] * n, a.push(u)
                        }
                    }
                if (void 0 !== e.morphColors && e.morphColors.length > 0) {
                    console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                    for (var h = t.faces, p = e.morphColors[0].colors, i = 0, r = h.length; r > i; i++) h[i].color.fromArray(p, 3 * i)
                }
            }

            function r(e, t) {
                var n = [],
                    i = [];
                void 0 !== e.animation && i.push(e.animation), void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
                for (var r = 0; r < i.length; r++) {
                    var o = hr.parseAnimation(i[r], t.bones);
                    o && n.push(o)
                }
                if (t.morphTargets) {
                    var a = hr.CreateClipsFromMorphTargetSequences(t.morphTargets, 10);
                    n = n.concat(a)
                }
                n.length > 0 && (t.animations = n)
            }
            return function(n, o) {
                void 0 !== n.data && (n = n.data), void 0 !== n.scale ? n.scale = 1 / n.scale : n.scale = 1;
                var a = new de;
                if (e(n, a), t(n, a), i(n, a), r(n, a), a.computeFaceNormals(), a.computeBoundingSphere(), void 0 === n.materials || 0 === n.materials.length) return {
                    geometry: a
                };
                var s = fr.prototype.initMaterials(n.materials, o, this.crossOrigin);
                return {
                    geometry: a,
                    materials: s
                }
            }
        }()
    }), Object.assign(vr.prototype, {
        load: function(e, t, n, i) {
            "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
            var r = this,
                o = new pi(r.manager);
            o.load(e, function(n) {
                var o = null;
                try {
                    o = JSON.parse(n)
                } catch (a) {
                    return void 0 !== i && i(a), void console.error("THREE:ObjectLoader: Can't parse " + e + ".", a.message)
                }
                var s = o.metadata;
                return void 0 === s || void 0 === s.type || "geometry" === s.type.toLowerCase() ? void console.error("THREE.ObjectLoader: Can't load " + e + ". Use THREE.JSONLoader instead.") : void r.parse(o, t)
            }, n, i)
        },
        setTexturePath: function(e) {
            this.texturePath = e
        },
        setCrossOrigin: function(e) {
            this.crossOrigin = e
        },
        parse: function(e, t) {
            var n = this.parseShape(e.shapes),
                i = this.parseGeometries(e.geometries, n),
                r = this.parseImages(e.images, function() {
                    void 0 !== t && t(s)
                }),
                o = this.parseTextures(e.textures, r),
                a = this.parseMaterials(e.materials, o),
                s = this.parseObject(e.object, i, a);
            return e.animations && (s.animations = this.parseAnimations(e.animations)), (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(s), s
        },
        parseShape: function(e) {
            var t = {};
            if (void 0 !== e)
                for (var n = 0, i = e.length; i > n; n++) {
                    var r = (new Gi).fromJSON(e[n]);
                    t[r.uuid] = r
                }
            return t
        },
        parseGeometries: function(e, t) {
            var n = {};
            if (void 0 !== e)
                for (var i = new mr, r = new dr, o = 0, a = e.length; a > o; o++) {
                    var s, c = e[o];
                    switch (c.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            s = new Cu[c.type](c.width, c.height, c.widthSegments, c.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            s = new Cu[c.type](c.width, c.height, c.depth, c.widthSegments, c.heightSegments, c.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            s = new Cu[c.type](c.radius, c.segments, c.thetaStart, c.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            s = new Cu[c.type](c.radiusTop, c.radiusBottom, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            s = new Cu[c.type](c.radius, c.height, c.radialSegments, c.heightSegments, c.openEnded, c.thetaStart, c.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            s = new Cu[c.type](c.radius, c.widthSegments, c.heightSegments, c.phiStart, c.phiLength, c.thetaStart, c.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "DodecahedronBufferGeometry":
                        case "IcosahedronGeometry":
                        case "IcosahedronBufferGeometry":
                        case "OctahedronGeometry":
                        case "OctahedronBufferGeometry":
                        case "TetrahedronGeometry":
                        case "TetrahedronBufferGeometry":
                            s = new Cu[c.type](c.radius, c.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            s = new Cu[c.type](c.innerRadius, c.outerRadius, c.thetaSegments, c.phiSegments, c.thetaStart, c.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            s = new Cu[c.type](c.radius, c.tube, c.radialSegments, c.tubularSegments, c.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            s = new Cu[c.type](c.radius, c.tube, c.tubularSegments, c.radialSegments, c.p, c.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            s = new Cu[c.type](c.points, c.segments, c.phiStart, c.phiLength);
                            break;
                        case "PolyhedronGeometry":
                        case "PolyhedronBufferGeometry":
                            s = new Cu[c.type](c.vertices, c.indices, c.radius, c.details);
                            break;
                        case "ShapeGeometry":
                        case "ShapeBufferGeometry":
                            for (var l = [], o = 0, a = c.shapes.length; a > o; o++) {
                                var u = t[c.shapes[o]];
                                l.push(u)
                            }
                            s = new Cu[c.type](l, c.curveSegments);
                            break;
                        case "BufferGeometry":
                            s = r.parse(c);
                            break;
                        case "Geometry":
                            s = i.parse(c, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
                            continue
                    }
                    s.uuid = c.uuid, void 0 !== c.name && (s.name = c.name), n[c.uuid] = s
                }
            return n
        },
        parseMaterials: function(e, t) {
            var n = {};
            if (void 0 !== e) {
                var i = new pr;
                i.setTextures(t);
                for (var r = 0, o = e.length; o > r; r++) {
                    var a = e[r];
                    if ("MultiMaterial" === a.type) {
                        for (var s = [], c = 0; c < a.materials.length; c++) s.push(i.parse(a.materials[c]));
                        n[a.uuid] = s
                    } else n[a.uuid] = i.parse(a)
                }
            }
            return n
        },
        parseAnimations: function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var i = hr.parse(e[n]);
                t.push(i)
            }
            return t
        },
        parseImages: function(e, t) {
            function n(e) {
                return i.manager.itemStart(e), a.load(e, function() {
                    i.manager.itemEnd(e)
                }, void 0, function() {
                    i.manager.itemEnd(e), i.manager.itemError(e)
                })
            }
            var i = this,
                r = {};
            if (void 0 !== e && e.length > 0) {
                var o = new hi(t),
                    a = new mi(o);
                a.setCrossOrigin(this.crossOrigin);
                for (var s = 0, c = e.length; c > s; s++) {
                    var l = e[s],
                        u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : i.texturePath + l.url;
                    r[l.uuid] = n(u)
                }
            }
            return r
        },
        parseTextures: function(e, t) {
            function n(e, t) {
                return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e])
            }
            var i = {};
            if (void 0 !== e)
                for (var r = 0, o = e.length; o > r; r++) {
                    var a = e[r];
                    void 0 === a.image && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid), void 0 === t[a.image] && console.warn("THREE.ObjectLoader: Undefined image", a.image);
                    var c = new s(t[a.image]);
                    c.needsUpdate = !0, c.uuid = a.uuid, void 0 !== a.name && (c.name = a.name), void 0 !== a.mapping && (c.mapping = n(a.mapping, zu)), void 0 !== a.offset && c.offset.fromArray(a.offset), void 0 !== a.repeat && c.repeat.fromArray(a.repeat), void 0 !== a.center && c.center.fromArray(a.center), void 0 !== a.rotation && (c.rotation = a.rotation), void 0 !== a.wrap && (c.wrapS = n(a.wrap[0], Hu), c.wrapT = n(a.wrap[1], Hu)), void 0 !== a.minFilter && (c.minFilter = n(a.minFilter, Gu)), void 0 !== a.magFilter && (c.magFilter = n(a.magFilter, Gu)), void 0 !== a.anisotropy && (c.anisotropy = a.anisotropy), void 0 !== a.flipY && (c.flipY = a.flipY), i[a.uuid] = c
                }
            return i
        },
        parseObject: function() {
            var e = new i;
            return function(t, n, i) {
                function r(e) {
                    return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), n[e]
                }

                function o(e) {
                    if (void 0 !== e) {
                        if (Array.isArray(e)) {
                            for (var t = [], n = 0, r = e.length; r > n; n++) {
                                var o = e[n];
                                void 0 === i[o] && console.warn("THREE.ObjectLoader: Undefined material", o), t.push(i[o])
                            }
                            return t
                        }
                        return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined material", e), i[e]
                    }
                }
                var a;
                switch (t.type) {
                    case "Scene":
                        a = new Tt, void 0 !== t.background && Number.isInteger(t.background) && (a.background = new X(t.background)), void 0 !== t.fog && ("Fog" === t.fog.type ? a.fog = new Mt(t.fog.color, t.fog.near, t.fog.far) : "FogExp2" === t.fog.type && (a.fog = new _t(t.fog.color, t.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        a = new mt(t.fov, t.aspect, t.near, t.far), void 0 !== t.focus && (a.focus = t.focus), void 0 !== t.zoom && (a.zoom = t.zoom),
                            void 0 !== t.filmGauge && (a.filmGauge = t.filmGauge), void 0 !== t.filmOffset && (a.filmOffset = t.filmOffset), void 0 !== t.view && (a.view = Object.assign({}, t.view));
                        break;
                    case "OrthographicCamera":
                        a = new he(t.left, t.right, t.top, t.bottom, t.near, t.far);
                        break;
                    case "AmbientLight":
                        a = new Ji(t.color, t.intensity);
                        break;
                    case "DirectionalLight":
                        a = new Zi(t.color, t.intensity);
                        break;
                    case "PointLight":
                        a = new qi(t.color, t.intensity, t.distance, t.decay);
                        break;
                    case "RectAreaLight":
                        a = new Qi(t.color, t.intensity, t.width, t.height);
                        break;
                    case "SpotLight":
                        a = new Xi(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay);
                        break;
                    case "HemisphereLight":
                        a = new ji(t.color, t.groundColor, t.intensity);
                        break;
                    case "SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                    case "Mesh":
                        var s = r(t.geometry),
                            c = o(t.material);
                        a = s.bones && s.bones.length > 0 ? new Lt(s, c) : new Ne(s, c);
                        break;
                    case "LOD":
                        a = new At;
                        break;
                    case "Line":
                        a = new Ot(r(t.geometry), o(t.material), t.mode);
                        break;
                    case "LineLoop":
                        a = new Dt(r(t.geometry), o(t.material));
                        break;
                    case "LineSegments":
                        a = new Bt(r(t.geometry), o(t.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        a = new Ft(r(t.geometry), o(t.material));
                        break;
                    case "Sprite":
                        a = new Ct(o(t.material));
                        break;
                    case "Group":
                        a = new Ut;
                        break;
                    default:
                        a = new le
                }
                if (a.uuid = t.uuid, void 0 !== t.name && (a.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== t.position && a.position.fromArray(t.position), void 0 !== t.rotation && a.rotation.fromArray(t.rotation), void 0 !== t.quaternion && a.quaternion.fromArray(t.quaternion), void 0 !== t.scale && a.scale.fromArray(t.scale)), void 0 !== t.castShadow && (a.castShadow = t.castShadow), void 0 !== t.receiveShadow && (a.receiveShadow = t.receiveShadow), t.shadow && (void 0 !== t.shadow.bias && (a.shadow.bias = t.shadow.bias), void 0 !== t.shadow.radius && (a.shadow.radius = t.shadow.radius), void 0 !== t.shadow.mapSize && a.shadow.mapSize.fromArray(t.shadow.mapSize), void 0 !== t.shadow.camera && (a.shadow.camera = this.parseObject(t.shadow.camera))), void 0 !== t.visible && (a.visible = t.visible), void 0 !== t.userData && (a.userData = t.userData), void 0 !== t.children)
                    for (var l = t.children, u = 0; u < l.length; u++) a.add(this.parseObject(l[u], n, i));
                if ("LOD" === t.type)
                    for (var h = t.levels, p = 0; p < h.length; p++) {
                        var d = h[p],
                            f = a.getObjectByProperty("uuid", d.object);
                        void 0 !== f && a.addLevel(f, d.distance)
                    }
                return a
            }
        }()
    });
    var zu = {
            UVMapping: $a,
            CubeReflectionMapping: Wa,
            CubeRefractionMapping: Xa,
            EquirectangularReflectionMapping: qa,
            EquirectangularRefractionMapping: Ya,
            SphericalReflectionMapping: Za,
            CubeUVReflectionMapping: Ja,
            CubeUVRefractionMapping: Qa
        },
        Hu = {
            RepeatWrapping: Ka,
            ClampToEdgeWrapping: es,
            MirroredRepeatWrapping: ts
        },
        Gu = {
            NearestFilter: ns,
            NearestMipMapNearestFilter: is,
            NearestMipMapLinearFilter: rs,
            LinearFilter: os,
            LinearMipMapNearestFilter: as,
            LinearMipMapLinearFilter: ss
        };
    gr.prototype = {
        constructor: gr,
        setOptions: function(e) {
            return this.options = e, this
        },
        load: function(e, t, n, i) {
            void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e);
            var r = this,
                o = Pu.get(e);
            return void 0 !== o ? (r.manager.itemStart(e), setTimeout(function() {
                t && t(o), r.manager.itemEnd(e)
            }, 0), o) : void fetch(e).then(function(e) {
                return e.blob()
            }).then(function(e) {
                return createImageBitmap(e, r.options)
            }).then(function(n) {
                Pu.add(e, n), t && t(n), r.manager.itemEnd(e)
            })["catch"](function(t) {
                i && i(t), r.manager.itemEnd(e), r.manager.itemError(e)
            })
        },
        setCrossOrigin: function() {
            return this
        },
        setPath: function(e) {
            return this.path = e, this
        }
    }, Object.assign(yr.prototype, {
        moveTo: function(e, t) {
            this.currentPath = new Hi, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
        },
        lineTo: function(e, t) {
            this.currentPath.lineTo(e, t)
        },
        quadraticCurveTo: function(e, t, n, i) {
            this.currentPath.quadraticCurveTo(e, t, n, i)
        },
        bezierCurveTo: function(e, t, n, i, r, o) {
            this.currentPath.bezierCurveTo(e, t, n, i, r, o)
        },
        splineThru: function(e) {
            this.currentPath.splineThru(e)
        },
        toShapes: function(e, t) {
            function n(e) {
                for (var t = [], n = 0, i = e.length; i > n; n++) {
                    var r = e[n],
                        o = new Gi;
                    o.curves = r.curves, t.push(o)
                }
                return t
            }

            function i(e, t) {
                for (var n = t.length, i = !1, r = n - 1, o = 0; n > o; r = o++) {
                    var a = t[r],
                        s = t[o],
                        c = s.x - a.x,
                        l = s.y - a.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (0 > l && (a = t[o], c = -c, s = t[r], l = -l), e.y < a.y || e.y > s.y) continue;
                        if (e.y === a.y) {
                            if (e.x === a.x) return !0
                        } else {
                            var u = l * (e.x - a.x) - c * (e.y - a.y);
                            if (0 === u) return !0;
                            if (0 > u) continue;
                            i = !i
                        }
                    } else {
                        if (e.y !== a.y) continue;
                        if (s.x <= e.x && e.x <= a.x || a.x <= e.x && e.x <= s.x) return !0
                    }
                }
                return i
            }
            var r = Su.isClockWise,
                o = this.subPaths;
            if (0 === o.length) return [];
            if (t === !0) return n(o);
            var a, s, c, l = [];
            if (1 === o.length) return s = o[0], c = new Gi, c.curves = s.curves, l.push(c), l;
            var u = !r(o[0].getPoints());
            u = e ? !u : u;
            var h, p = [],
                d = [],
                f = [],
                m = 0;
            d[m] = void 0, f[m] = [];
            for (var v = 0, g = o.length; g > v; v++) s = o[v], h = s.getPoints(), a = r(h), a = e ? !a : a, a ? (!u && d[m] && m++, d[m] = {
                s: new Gi,
                p: h
            }, d[m].s.curves = s.curves, u && m++, f[m] = []) : f[m].push({
                h: s,
                p: h[0]
            });
            if (!d[0]) return n(o);
            if (d.length > 1) {
                for (var y = !1, x = [], b = 0, w = d.length; w > b; b++) p[b] = [];
                for (var b = 0, w = d.length; w > b; b++)
                    for (var _ = f[b], M = 0; M < _.length; M++) {
                        for (var T = _[M], E = !0, S = 0; S < d.length; S++) i(T.p, d[S].p) && (b !== S && x.push({
                            froms: b,
                            tos: S,
                            hole: M
                        }), E ? (E = !1, p[S].push(T)) : y = !0);
                        E && p[b].push(T)
                    }
                x.length > 0 && (y || (f = p))
            }
            for (var C, v = 0, A = d.length; A > v; v++) {
                c = d[v].s, l.push(c), C = f[v];
                for (var P = 0, R = C.length; R > P; P++) c.holes.push(C[P].h)
            }
            return l
        }
    }), Object.assign(xr.prototype, {
        isFont: !0,
        generateShapes: function(e, t, n) {
            function i(e) {
                for (var n = String(e).split(""), i = t / o.resolution, a = (o.boundingBox.yMax - o.boundingBox.yMin + o.underlineThickness) * i, s = 0, c = 0, l = [], u = 0; u < n.length; u++) {
                    var h = n[u];
                    if ("\n" === h) s = 0, c -= a;
                    else {
                        var p = r(h, i, s, c);
                        s += p.offsetX, l.push(p.path)
                    }
                }
                return l
            }

            function r(e, t, n, i) {
                var r = o.glyphs[e] || o.glyphs["?"];
                if (r) {
                    var a, s, c, l, u, h, p, d, f, m, v, g = new yr,
                        y = [];
                    if (r.o)
                        for (var x = r._cachedOutline || (r._cachedOutline = r.o.split(" ")), b = 0, w = x.length; w > b;) {
                            var _ = x[b++];
                            switch (_) {
                                case "m":
                                    a = x[b++] * t + n, s = x[b++] * t + i, g.moveTo(a, s);
                                    break;
                                case "l":
                                    a = x[b++] * t + n, s = x[b++] * t + i, g.lineTo(a, s);
                                    break;
                                case "q":
                                    c = x[b++] * t + n, l = x[b++] * t + i, p = x[b++] * t + n, d = x[b++] * t + i, g.quadraticCurveTo(p, d, c, l), v = y[y.length - 1], v && (u = v.x, h = v.y);
                                    break;
                                case "b":
                                    c = x[b++] * t + n, l = x[b++] * t + i, p = x[b++] * t + n, d = x[b++] * t + i, f = x[b++] * t + n, m = x[b++] * t + i, g.bezierCurveTo(p, d, f, m, c, l), v = y[y.length - 1], v && (u = v.x, h = v.y)
                            }
                        }
                    return {
                        offsetX: r.ha * t,
                        path: g
                    }
                }
            }
            void 0 === t && (t = 100), void 0 === n && (n = 4);
            for (var o = this.data, a = i(e), s = [], c = 0, l = a.length; l > c; c++) Array.prototype.push.apply(s, a[c].toShapes());
            return s
        }
    }), Object.assign(br.prototype, {
        load: function(e, t, n, i) {
            var r = this,
                o = new pi(this.manager);
            o.setPath(this.path), o.load(e, function(e) {
                var n;
                try {
                    n = JSON.parse(e)
                } catch (i) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(e.substring(65, e.length - 2))
                }
                var o = r.parse(n);
                t && t(o)
            }, n, i)
        },
        parse: function(e) {
            return new xr(e)
        },
        setPath: function(e) {
            return this.path = e, this
        }
    });
    var Vu, ju = {
        getContext: function() {
            return void 0 === Vu && (Vu = new(window.AudioContext || window.webkitAudioContext)), Vu
        },
        setContext: function(e) {
            Vu = e
        }
    };
    Object.assign(wr.prototype, {
        load: function(e, t, n, i) {
            var r = new pi(this.manager);
            r.setResponseType("arraybuffer"), r.load(e, function(e) {
                var n = ju.getContext();
                n.decodeAudioData(e, function(e) {
                    t(e)
                })
            }, n, i)
        }
    }), Object.assign(_r.prototype, {
        update: function() {
            var e, t, n, r, o, a, s, c, l = new i,
                u = new i;
            return function(i) {
                var h = e !== this || t !== i.focus || n !== i.fov || r !== i.aspect * this.aspect || o !== i.near || a !== i.far || s !== i.zoom || c !== this.eyeSep;
                if (h) {
                    e = this, t = i.focus, n = i.fov, r = i.aspect * this.aspect, o = i.near, a = i.far, s = i.zoom;
                    var p = i.projectionMatrix.clone();
                    c = this.eyeSep / 2;
                    var d, f, m = c * o / t,
                        v = o * Math.tan(oc.DEG2RAD * n * .5) / s;
                    u.elements[12] = -c, l.elements[12] = c, d = -v * r + m, f = v * r + m, p.elements[0] = 2 * o / (f - d), p.elements[8] = (f + d) / (f - d), this.cameraL.projectionMatrix.copy(p), d = -v * r - m, f = v * r - m, p.elements[0] = 2 * o / (f - d), p.elements[8] = (f + d) / (f - d), this.cameraR.projectionMatrix.copy(p)
                }
                this.cameraL.matrixWorld.copy(i.matrixWorld).multiply(u), this.cameraR.matrixWorld.copy(i.matrixWorld).multiply(l)
            }
        }()
    }), Mr.prototype = Object.create(le.prototype), Mr.prototype.constructor = Mr, Tr.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Tr,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(e) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(e) {
            this.gain.gain.value = e
        },
        updateMatrixWorld: function() {
            var e = new o,
                t = new r,
                n = new o,
                i = new o;
            return function(r) {
                le.prototype.updateMatrixWorld.call(this, r);
                var o = this.context.listener,
                    a = this.up;
                this.matrixWorld.decompose(e, t, n), i.set(0, 0, -1).applyQuaternion(t), o.positionX ? (o.positionX.setValueAtTime(e.x, this.context.currentTime), o.positionY.setValueAtTime(e.y, this.context.currentTime), o.positionZ.setValueAtTime(e.z, this.context.currentTime), o.forwardX.setValueAtTime(i.x, this.context.currentTime), o.forwardY.setValueAtTime(i.y, this.context.currentTime), o.forwardZ.setValueAtTime(i.z, this.context.currentTime), o.upX.setValueAtTime(a.x, this.context.currentTime), o.upY.setValueAtTime(a.y, this.context.currentTime), o.upZ.setValueAtTime(a.z, this.context.currentTime)) : (o.setPosition(e.x, e.y, e.z), o.setOrientation(i.x, i.y, i.z, a.x, a.y, a.z))
            }
        }()
    }), Er.prototype = Object.assign(Object.create(le.prototype), {
        constructor: Er,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(e) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
        },
        setBuffer: function(e) {
            return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function() {
            if (this.isPlaying === !0) return void console.warn("THREE.Audio: Audio is already playing.");
            if (this.hasPlaybackControl === !1) return void console.warn("THREE.Audio: this Audio has no playback control.");
            var e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.onended = this.onEnded.bind(this), e.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, e.start(this.startTime, this.offset), this.isPlaying = !0, this.source = e, this.connect()
        },
        pause: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.isPlaying === !0 && (this.source.stop(), this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this)
        },
        stop: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.offset = 0, this.isPlaying = !1, this)
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var e = 1, t = this.filters.length; t > e; e++) this.filters[e - 1].connect(this.filters[e]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var e = 1, t = this.filters.length; t > e; e++) this.filters[e - 1].disconnect(this.filters[e]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(e) {
            return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(e) {
            return this.setFilters(e ? [e] : [])
        },
        setPlaybackRate: function(e) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this)
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(e) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this)
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(e) {
            return this.gain.gain.value = e, this
        }
    }), Sr.prototype = Object.assign(Object.create(Er.prototype), {
        constructor: Sr,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(e) {
            this.panner.refDistance = e
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(e) {
            this.panner.rolloffFactor = e
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(e) {
            this.panner.distanceModel = e
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(e) {
            this.panner.maxDistance = e
        },
        updateMatrixWorld: function() {
            var e = new o;
            return function(t) {
                le.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
            }
        }()
    }), Object.assign(Cr.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function() {
            for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) e += t[n];
            return e / t.length
        }
    }), Object.assign(Ar.prototype, {
        accumulate: function(e, t) {
            var n = this.buffer,
                i = this.valueSize,
                r = e * i + i,
                o = this.cumulativeWeight;
            if (0 === o) {
                for (var a = 0; a !== i; ++a) n[r + a] = n[a];
                o = t
            } else {
                o += t;
                var s = t / o;
                this._mixBufferRegion(n, r, 0, s, i)
            }
            this.cumulativeWeight = o
        },
        apply: function(e) {
            var t = this.valueSize,
                n = this.buffer,
                i = e * t + t,
                r = this.cumulativeWeight,
                o = this.binding;
            if (this.cumulativeWeight = 0, 1 > r) {
                var a = 3 * t;
                this._mixBufferRegion(n, i, a, 1 - r, t)
            }
            for (var s = t, c = t + t; s !== c; ++s)
                if (n[s] !== n[s + t]) {
                    o.setValue(n, i);
                    break
                }
        },
        saveOriginalState: function() {
            var e = this.binding,
                t = this.buffer,
                n = this.valueSize,
                i = 3 * n;
            e.getValue(t, i);
            for (var r = n, o = i; r !== o; ++r) t[r] = t[i + r % n];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var e = 3 * this.valueSize;
            this.binding.setValue(this.buffer, e)
        },
        _select: function(e, t, n, i, r) {
            if (i >= .5)
                for (var o = 0; o !== r; ++o) e[t + o] = e[n + o]
        },
        _slerp: function(e, t, n, i) {
            r.slerpFlat(e, t, e, t, e, n, i)
        },
        _lerp: function(e, t, n, i, r) {
            for (var o = 1 - i, a = 0; a !== r; ++a) {
                var s = t + a;
                e[s] = e[s] * o + e[n + a] * i
            }
        }
    }), Object.assign(Pr.prototype, {
        getValue: function(e, t) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_,
                i = this._bindings[n];
            void 0 !== i && i.getValue(e, t)
        },
        setValue: function(e, t) {
            for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t)
        },
        bind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
        },
        unbind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
        }
    }), Object.assign(Rr, {
        Composite: Pr,
        create: function(e, t, n) {
            return e && e.isAnimationObjectGroup ? new Rr.Composite(e, t, n) : new Rr(e, t, n)
        },
        sanitizeNodeName: function(e) {
            return e.replace(/\s/g, "_").replace(/[^\w-]/g, "")
        },
        parseTrackName: function() {
            var e = /((?:[\w-]+[\/:])*)/,
                t = /([\w-\.]+)?/,
                n = /(?:\.([\w-]+)(?:\[(.+)\])?)?/,
                i = /\.([\w-]+)(?:\[(.+)\])?/,
                r = new RegExp("^" + e.source + t.source + n.source + i.source + "$"),
                o = ["material", "materials", "bones"];
            return function(e) {
                var t = r.exec(e);
                if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
                var n = {
                        nodeName: t[2],
                        objectName: t[3],
                        objectIndex: t[4],
                        propertyName: t[5],
                        propertyIndex: t[6]
                    },
                    i = n.nodeName && n.nodeName.lastIndexOf(".");
                if (void 0 !== i && -1 !== i) {
                    var a = n.nodeName.substring(i + 1); - 1 !== o.indexOf(a) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = a)
                }
                if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
                return n
            }
        }(),
        findNode: function(e, t) {
            if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
            if (e.skeleton) {
                var n = function(e) {
                        for (var n = 0; n < e.bones.length; n++) {
                            var i = e.bones[n];
                            if (i.name === t) return i
                        }
                        return null
                    },
                    i = n(e.skeleton);
                if (i) return i
            }
            if (e.children) {
                var r = function(e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (i.name === t || i.uuid === t) return i;
                            var o = r(i.children);
                            if (o) return o
                        }
                        return null
                    },
                    o = r(e.children);
                if (o) return o
            }
            return null
        }
    }), Object.assign(Rr.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(e, t) {
            e[t] = this.node[this.propertyName]
        }, function(e, t) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) e[t++] = n[i]
        }, function(e, t) {
            e[t] = this.resolvedProperty[this.propertyIndex]
        }, function(e, t) {
            this.resolvedProperty.toArray(e, t)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(e, t) {
                this.targetObject[this.propertyName] = e[t]
            }, function(e, t) {
                this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++]
            }, function(e, t) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
                this.targetObject.needsUpdate = !0
            }, function(e, t) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t]
            }, function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(e, t) {
                this.resolvedProperty.fromArray(e, t)
            }, function(e, t) {
                this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
            }, function(e, t) {
                this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ],
        getValue: function(e, t) {
            this.bind(), this.getValue(e, t)
        },
        setValue: function(e, t) {
            this.bind(), this.setValue(e, t)
        },
        bind: function() {
            var e = this.node,
                t = this.parsedPath,
                n = t.objectName,
                i = t.propertyName,
                r = t.propertyIndex;
            if (e || (e = Rr.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                var o = t.objectIndex;
                switch (n) {
                    case "materials":
                        if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        e = e.material.materials;
                        break;
                    case "bones":
                        if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        e = e.skeleton.bones;
                        for (var a = 0; a < e.length; a++)
                            if (e[a].name === o) {
                                o = a;
                                break
                            } break;
                    default:
                        if (void 0 === e[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        e = e[n]
                }
                if (void 0 !== o) {
                    if (void 0 === e[o]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    e = e[o]
                }
            }
            var s = e[i];
            if (void 0 === s) {
                var c = t.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e)
            }
            var l = this.Versioning.None;
            void 0 !== e.needsUpdate ? (l = this.Versioning.NeedsUpdate, this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (l = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = e);
            var u = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (e.geometry.isBufferGeometry) {
                        if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        for (var a = 0; a < this.node.geometry.morphAttributes.position.length; a++)
                            if (e.geometry.morphAttributes.position[a].name === r) {
                                r = a;
                                break
                            }
                    } else {
                        if (!e.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                        for (var a = 0; a < this.node.geometry.morphTargets.length; a++)
                            if (e.geometry.morphTargets[a].name === r) {
                                r = a;
                                break
                            }
                    }
                }
                u = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][l]
        },
        unbind: function() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }), Object.assign(Rr.prototype, {
        _getValue_unbound: Rr.prototype.getValue,
        _setValue_unbound: Rr.prototype.setValue
    }), Object.assign(Lr.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var e = this._objects, t = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._paths, o = this._parsedPaths, a = this._bindings, s = a.length, c = 0, l = arguments.length; c !== l; ++c) {
                var u = arguments[c],
                    h = u.uuid,
                    p = i[h],
                    d = void 0;
                if (void 0 === p) {
                    p = t++, i[h] = p, e.push(u);
                    for (var f = 0, m = s; f !== m; ++f) a[f].push(new Rr(u, r[f], o[f]))
                } else if (n > p) {
                    d = e[p];
                    var v = --n,
                        g = e[v];
                    i[g.uuid] = p, e[p] = g, i[h] = v, e[v] = u;
                    for (var f = 0, m = s; f !== m; ++f) {
                        var y = a[f],
                            x = y[v],
                            b = y[p];
                        y[p] = x, void 0 === b && (b = new Rr(u, r[f], o[f])), y[v] = b
                    }
                } else e[p] !== d && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        },
        remove: function() {
            for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, r = i.length, o = 0, a = arguments.length; o !== a; ++o) {
                var s = arguments[o],
                    c = s.uuid,
                    l = n[c];
                if (void 0 !== l && l >= t) {
                    var u = t++,
                        h = e[u];
                    n[h.uuid] = l, e[l] = h, n[c] = u, e[u] = s;
                    for (var p = 0, d = r; p !== d; ++p) {
                        var f = i[p],
                            m = f[u],
                            v = f[l];
                        f[l] = m, f[u] = v
                    }
                }
            }
            this.nCachedObjects_ = t
        },
        uncache: function() {
            for (var e = this._objects, t = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, o = r.length, a = 0, s = arguments.length; a !== s; ++a) {
                var c = arguments[a],
                    l = c.uuid,
                    u = i[l];
                if (void 0 !== u)
                    if (delete i[l], n > u) {
                        var h = --n,
                            p = e[h],
                            d = --t,
                            f = e[d];
                        i[p.uuid] = u, e[u] = p, i[f.uuid] = h, e[h] = f, e.pop();
                        for (var m = 0, v = o; m !== v; ++m) {
                            var g = r[m],
                                y = g[h],
                                x = g[d];
                            g[u] = y, g[h] = x, g.pop()
                        }
                    } else {
                        var d = --t,
                            f = e[d];
                        i[f.uuid] = u, e[u] = f, e.pop();
                        for (var m = 0, v = o; m !== v; ++m) {
                            var g = r[m];
                            g[u] = g[d], g.pop()
                        }
                    }
            }
            this.nCachedObjects_ = n
        },
        subscribe_: function(e, t) {
            var n = this._bindingsIndicesByPath,
                i = n[e],
                r = this._bindings;
            if (void 0 !== i) return r[i];
            var o = this._paths,
                a = this._parsedPaths,
                s = this._objects,
                c = s.length,
                l = this.nCachedObjects_,
                u = new Array(c);
            i = r.length, n[e] = i, o.push(e), a.push(t), r.push(u);
            for (var h = l, p = s.length; h !== p; ++h) {
                var d = s[h];
                u[h] = new Rr(d, e, t)
            }
            return u
        },
        unsubscribe_: function(e) {
            var t = this._bindingsIndicesByPath,
                n = t[e];
            if (void 0 !== n) {
                var i = this._paths,
                    r = this._parsedPaths,
                    o = this._bindings,
                    a = o.length - 1,
                    s = o[a],
                    c = e[a];
                t[c] = n, o[n] = s, o.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop()
            }
        }
    }), Object.assign(Ir.prototype, {
        play: function() {
            return this._mixer._activateAction(this), this
        },
        stop: function() {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(e) {
            return this._startTime = e, this
        },
        setLoop: function(e, t) {
            return this.loop = e, this.repetitions = t, this
        },
        setEffectiveWeight: function(e) {
            return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(e) {
            return this._scheduleFading(e, 0, 1)
        },
        fadeOut: function(e) {
            return this._scheduleFading(e, 1, 0)
        },
        crossFadeFrom: function(e, t, n) {
            if (e.fadeOut(t), this.fadeIn(t), n) {
                var i = this._clip.duration,
                    r = e._clip.duration,
                    o = r / i,
                    a = i / r;
                e.warp(1, o, t), this.warp(a, 1, t)
            }
            return this
        },
        crossFadeTo: function(e, t, n) {
            return e.crossFadeFrom(this, t, n)
        },
        stopFading: function() {
            var e = this._weightInterpolant;
            return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        setEffectiveTimeScale: function(e) {
            return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(e) {
            return this.timeScale = this._clip.duration / e, this.stopWarping()
        },
        syncWith: function(e) {
            return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
        },
        halt: function(e) {
            return this.warp(this._effectiveTimeScale, 0, e)
        },
        warp: function(e, t, n) {
            var i = this._mixer,
                r = i.time,
                o = this._timeScaleInterpolant,
                a = this.timeScale;
            null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
            var s = o.parameterPositions,
                c = o.sampleValues;
            return s[0] = r, s[1] = r + n, c[0] = e / a, c[1] = t / a, this
        },
        stopWarping: function() {
            var e = this._timeScaleInterpolant;
            return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(e, t, n, i) {
            if (!this.enabled) return void this._updateWeight(e);
            var r = this._startTime;
            if (null !== r) {
                var o = (e - r) * n;
                if (0 > o || 0 === n) return;
                this._startTime = null, t = n * o
            }
            t *= this._updateTimeScale(e);
            var a = this._updateTime(t),
                s = this._updateWeight(e);
            if (s > 0)
                for (var c = this._interpolants, l = this._propertyBindings, u = 0, h = c.length; u !== h; ++u) c[u].evaluate(a), l[u].accumulate(i, s)
        },
        _updateWeight: function(e) {
            var t = 0;
            if (this.enabled) {
                t = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var i = n.evaluate(e)[0];
                    t *= i, e > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = t, t
        },
        _updateTimeScale: function(e) {
            var t = 0;
            if (!this.paused) {
                t = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n) {
                    var i = n.evaluate(e)[0];
                    t *= i, e > n.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
                }
            }
            return this._effectiveTimeScale = t, t
        },
        _updateTime: function(e) {
            var t = this.time + e;
            if (0 === e) return t;
            var n = this._clip.duration,
                i = this.loop,
                r = this._loopCount;
            if (i === Fs) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                e: {
                    if (t >= n) t = n;
                    else {
                        if (!(0 > t)) break e;
                        t = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 > e ? -1 : 1
                    })
                }
            } else {
                var o = i === ks;
                if (-1 === r && (e >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), t >= n || 0 > t) {
                    var a = Math.floor(t / n);
                    t -= n * a, r += Math.abs(a);
                    var s = this.repetitions - r;
                    if (0 > s) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: e > 0 ? 1 : -1
                    });
                    else {
                        if (0 === s) {
                            var c = 0 > e;
                            this._setEndings(c, !c, o)
                        } else this._setEndings(!1, !1, o);
                        this._loopCount = r, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: a
                        })
                    }
                }
                if (o && 1 === (1 & r)) return this.time = t, n - t
            }
            return this.time = t, t
        },
        _setEndings: function(e, t, n) {
            var i = this._interpolantSettings;
            n ? (i.endingStart = js, i.endingEnd = js) : (e ? i.endingStart = this.zeroSlopeAtStart ? js : Vs : i.endingStart = $s, t ? i.endingEnd = this.zeroSlopeAtEnd ? js : Vs : i.endingEnd = $s)
        },
        _scheduleFading: function(e, t, n) {
            var i = this._mixer,
                r = i.time,
                o = this._weightInterpolant;
            null === o && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
            var a = o.parameterPositions,
                s = o.sampleValues;
            return a[0] = r, s[0] = t, a[1] = r + e, s[1] = n, this
        }
    }), Or.prototype = Object.assign(Object.create(t.prototype), {
        constructor: Or,
        _bindAction: function(e, t) {
            var n = e._localRoot || this._root,
                i = e._clip.tracks,
                r = i.length,
                o = e._propertyBindings,
                a = e._interpolants,
                s = n.uuid,
                c = this._bindingsByRootAndName,
                l = c[s];
            void 0 === l && (l = {}, c[s] = l);
            for (var u = 0; u !== r; ++u) {
                var h = i[u],
                    p = h.name,
                    d = l[p];
                if (void 0 !== d) o[u] = d;
                else {
                    if (d = o[u], void 0 !== d) {
                        null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
                        continue
                    }
                    var f = t && t._propertyBindings[u].binding.parsedPath;
                    d = new Ar(Rr.create(n, p, f), h.ValueTypeName, h.getValueSize()), ++d.referenceCount, this._addInactiveBinding(d, s, p), o[u] = d
                }
                a[u].resultBuffer = d.buffer
            }
        },
        _activateAction: function(e) {
            if (!this._isActiveAction(e)) {
                if (null === e._cacheIndex) {
                    var t = (e._localRoot || this._root).uuid,
                        n = e._clip.uuid,
                        i = this._actionsByClip[n];
                    this._bindAction(e, i && i.knownActions[0]), this._addInactiveAction(e, n, t)
                }
                for (var r = e._propertyBindings, o = 0, a = r.length; o !== a; ++o) {
                    var s = r[o];
                    0 === s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(e)
            }
        },
        _deactivateAction: function(e) {
            if (this._isActiveAction(e)) {
                for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
                    var r = t[n];
                    0 === --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(e)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var e = this;
            this.stats = {
                actions: {
                    get total() {
                        return e._actions.length
                    },
                    get inUse() {
                        return e._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return e._bindings.length
                    },
                    get inUse() {
                        return e._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return e._controlInterpolants.length
                    },
                    get inUse() {
                        return e._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(e) {
            var t = e._cacheIndex;
            return null !== t && t < this._nActiveActions
        },
        _addInactiveAction: function(e, t, n) {
            var i = this._actions,
                r = this._actionsByClip,
                o = r[t];
            if (void 0 === o) o = {
                knownActions: [e],
                actionByRoot: {}
            }, e._byClipCacheIndex = 0, r[t] = o;
            else {
                var a = o.knownActions;
                e._byClipCacheIndex = a.length, a.push(e)
            }
            e._cacheIndex = i.length, i.push(e), o.actionByRoot[n] = e
        },
        _removeInactiveAction: function(e) {
            var t = this._actions,
                n = t[t.length - 1],
                i = e._cacheIndex;
            n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
            var r = e._clip.uuid,
                o = this._actionsByClip,
                a = o[r],
                s = a.knownActions,
                c = s[s.length - 1],
                l = e._byClipCacheIndex;
            c._byClipCacheIndex = l, s[l] = c, s.pop(), e._byClipCacheIndex = null;
            var u = a.actionByRoot,
                h = (e._localRoot || this._root).uuid;
            delete u[h], 0 === s.length && delete o[r], this._removeInactiveBindingsForAction(e)
        },
        _removeInactiveBindingsForAction: function(e) {
            for (var t = e._propertyBindings, n = 0, i = t.length; n !== i; ++n) {
                var r = t[n];
                0 === --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(e) {
            var t = this._actions,
                n = e._cacheIndex,
                i = this._nActiveActions++,
                r = t[i];
            e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _takeBackAction: function(e) {
            var t = this._actions,
                n = e._cacheIndex,
                i = --this._nActiveActions,
                r = t[i];
            e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _addInactiveBinding: function(e, t, n) {
            var i = this._bindingsByRootAndName,
                r = i[t],
                o = this._bindings;
            void 0 === r && (r = {}, i[t] = r), r[n] = e, e._cacheIndex = o.length, o.push(e)
        },
        _removeInactiveBinding: function(e) {
            var t = this._bindings,
                n = e.binding,
                i = n.rootNode.uuid,
                r = n.path,
                o = this._bindingsByRootAndName,
                a = o[i],
                s = t[t.length - 1],
                c = e._cacheIndex;
            s._cacheIndex = c, t[c] = s, t.pop(), delete a[r];
            e: {
                for (var l in a) break e;delete o[i]
            }
        },
        _lendBinding: function(e) {
            var t = this._bindings,
                n = e._cacheIndex,
                i = this._nActiveBindings++,
                r = t[i];
            e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _takeBackBinding: function(e) {
            var t = this._bindings,
                n = e._cacheIndex,
                i = --this._nActiveBindings,
                r = t[i];
            e._cacheIndex = i, t[i] = e, r._cacheIndex = n, t[n] = r
        },
        _lendControlInterpolant: function() {
            var e = this._controlInterpolants,
                t = this._nActiveControlInterpolants++,
                n = e[t];
            return void 0 === n && (n = new sr(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n
        },
        _takeBackControlInterpolant: function(e) {
            var t = this._controlInterpolants,
                n = e.__cacheIndex,
                i = --this._nActiveControlInterpolants,
                r = t[i];
            e.__cacheIndex = i, t[i] = e, r.__cacheIndex = n, t[n] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(e, t) {
            var n = t || this._root,
                i = n.uuid,
                r = "string" == typeof e ? hr.findByName(n, e) : e,
                o = null !== r ? r.uuid : e,
                a = this._actionsByClip[o],
                s = null;
            if (void 0 !== a) {
                var c = a.actionByRoot[i];
                if (void 0 !== c) return c;
                s = a.knownActions[0], null === r && (r = s._clip)
            }
            if (null === r) return null;
            var l = new Ir(this, r, t);
            return this._bindAction(l, s), this._addInactiveAction(l, o, i), l
        },
        existingAction: function(e, t) {
            var n = t || this._root,
                i = n.uuid,
                r = "string" == typeof e ? hr.findByName(n, e) : e,
                o = r ? r.uuid : e,
                a = this._actionsByClip[o];
            return void 0 !== a ? a.actionByRoot[i] || null : null
        },
        stopAllAction: function() {
            var e = this._actions,
                t = this._nActiveActions,
                n = this._bindings,
                i = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var r = 0; r !== t; ++r) e[r].reset();
            for (var r = 0; r !== i; ++r) n[r].useCount = 0;
            return this
        },
        update: function(e) {
            e *= this.timeScale;
            for (var t = this._actions, n = this._nActiveActions, i = this.time += e, r = Math.sign(e), o = this._accuIndex ^= 1, a = 0; a !== n; ++a) {
                var s = t[a];
                s._update(i, e, r, o)
            }
            for (var c = this._bindings, l = this._nActiveBindings, a = 0; a !== l; ++a) c[a].apply(o);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(e) {
            var t = this._actions,
                n = e.uuid,
                i = this._actionsByClip,
                r = i[n];
            if (void 0 !== r) {
                for (var o = r.knownActions, a = 0, s = o.length; a !== s; ++a) {
                    var c = o[a];
                    this._deactivateAction(c);
                    var l = c._cacheIndex,
                        u = t[t.length - 1];
                    c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = l, t[l] = u, t.pop(), this._removeInactiveBindingsForAction(c)
                }
                delete i[n]
            }
        },
        uncacheRoot: function(e) {
            var t = e.uuid,
                n = this._actionsByClip;
            for (var i in n) {
                var r = n[i].actionByRoot,
                    o = r[t];
                void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
            }
            var a = this._bindingsByRootAndName,
                s = a[t];
            if (void 0 !== s)
                for (var c in s) {
                    var l = s[c];
                    l.restoreOriginalState(), this._removeInactiveBinding(l)
                }
        },
        uncacheAction: function(e, t) {
            var n = this.existingAction(e, t);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
    }), Br.prototype.clone = function() {
        return new Br(void 0 === this.value.clone ? this.value : this.value.clone())
    }, Dr.prototype = Object.assign(Object.create(Se.prototype), {
        constructor: Dr,
        isInstancedBufferGeometry: !0,
        copy: function(e) {
            return Se.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), Object.defineProperties(Nr.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }), Object.assign(Nr.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset] = t, this
        },
        setY: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 1] = t, this
        },
        setZ: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 2] = t, this
        },
        setW: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 3] = t, this
        },
        getX: function(e) {
            return this.data.array[e * this.data.stride + this.offset]
        },
        getY: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 1]
        },
        getZ: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 2]
        },
        getW: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 3]
        },
        setXY: function(e, t, n) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
        },
        setXYZ: function(e, t, n, i) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
        },
        setXYZW: function(e, t, n, i, r) {
            return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this
        }
    }), Object.defineProperty(Fr.prototype, "needsUpdate", {
        set: function(e) {
            e === !0 && this.version++
        }
    }), Object.assign(Fr.prototype, {
        isInterleavedBuffer: !0,
        setArray: function(e) {
            if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== e ? e.length / this.stride : 0, this.array = e
        },
        setDynamic: function(e) {
            return this.dynamic = e, this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.dynamic = e.dynamic, this
        },
        copyAt: function(e, t, n) {
            e *= this.stride, n *= t.stride;
            for (var i = 0, r = this.stride; r > i; i++) this.array[e + i] = t.array[n + i];
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0), this.array.set(e, t), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(e) {
            return this.onUploadCallback = e, this
        }
    }), Ur.prototype = Object.assign(Object.create(Fr.prototype), {
        constructor: Ur,
        isInstancedInterleavedBuffer: !0,
        copy: function(e) {
            return Fr.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }
    }), kr.prototype = Object.assign(Object.create(fe.prototype), {
        constructor: kr,
        isInstancedBufferAttribute: !0,
        copy: function(e) {
            return fe.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }
    }), Object.assign(zr.prototype, {
        linePrecision: 1,
        set: function(e, t) {
            this.ray.set(e, t)
        },
        setFromCamera: function(e, t) {
            t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(e, t) {
            var n = [];
            return Gr(e, this, n, t), n.sort(Hr), n
        },
        intersectObjects: function(e, t) {
            var n = [];
            if (Array.isArray(e) === !1) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
            for (var i = 0, r = e.length; r > i; i++) Gr(e[i], this, n, t);
            return n.sort(Hr), n
        }
    }), Object.assign(Vr.prototype, {
        start: function() {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var e = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var t = ("undefined" == typeof performance ? Date : performance).now();
                e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
            }
            return e
        }
    }), Object.assign(jr.prototype, {
        set: function(e, t, n) {
            return this.radius = e, this.phi = t, this.theta = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
        },
        makeSafe: function() {
            var e = 1e-6;
            return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this
        },
        setFromVector3: function(e) {
            return this.radius = e.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e.x, e.z), this.phi = Math.acos(oc.clamp(e.y / this.radius, -1, 1))), this
        }
    }), Object.assign($r.prototype, {
        set: function(e, t, n) {
            return this.radius = e, this.theta = t, this.y = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this
        },
        setFromVector3: function(e) {
            return this.radius = Math.sqrt(e.x * e.x + e.z * e.z), this.theta = Math.atan2(e.x, e.z), this.y = e.y, this
        }
    }), Wr.prototype = Object.create(le.prototype), Wr.prototype.constructor = Wr, Wr.prototype.isImmediateRenderObject = !0, Xr.prototype = Object.create(Bt.prototype), Xr.prototype.constructor = Xr, Xr.prototype.update = function() {
        var e = new o,
            t = new o,
            n = new a;
        return function() {
            var i = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var r = this.object.matrixWorld,
                o = this.geometry.attributes.position,
                a = this.object.geometry;
            if (a && a.isGeometry)
                for (var s = a.vertices, c = a.faces, l = 0, u = 0, h = c.length; h > u; u++)
                    for (var p = c[u], d = 0, f = p.vertexNormals.length; f > d; d++) {
                        var m = s[p[i[d]]],
                            v = p.vertexNormals[d];
                        e.copy(m).applyMatrix4(r), t.copy(v).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), o.setXYZ(l, e.x, e.y, e.z), l += 1, o.setXYZ(l, t.x, t.y, t.z), l += 1
                    } else if (a && a.isBufferGeometry)
                        for (var g = a.attributes.position, y = a.attributes.normal, l = 0, d = 0, f = g.count; f > d; d++) e.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(r), t.set(y.getX(d), y.getY(d), y.getZ(d)), t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), o.setXYZ(l, e.x, e.y, e.z), l += 1, o.setXYZ(l, t.x, t.y, t.z), l += 1;
            o.needsUpdate = !0
        }
    }(), qr.prototype = Object.create(le.prototype), qr.prototype.constructor = qr, qr.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, qr.prototype.update = function() {
        var e = new o,
            t = new o;
        return function() {
            this.light.updateMatrixWorld();
            var n = this.light.distance ? this.light.distance : 1e3,
                i = n * Math.tan(this.light.angle);
            this.cone.scale.set(i, i, n), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }(), Zr.prototype = Object.create(Bt.prototype), Zr.prototype.constructor = Zr, Zr.prototype.updateMatrixWorld = function() {
        var e = new o,
            t = new i,
            n = new i;
        return function(i) {
            var r = this.bones,
                o = this.geometry,
                a = o.getAttribute("position");
            n.getInverse(this.root.matrixWorld);
            for (var s = 0, c = 0; s < r.length; s++) {
                var l = r[s];
                l.parent && l.parent.isBone && (t.multiplyMatrices(n, l.matrixWorld), e.setFromMatrixPosition(t), a.setXYZ(c, e.x, e.y, e.z), t.multiplyMatrices(n, l.parent.matrixWorld), e.setFromMatrixPosition(t), a.setXYZ(c + 1, e.x, e.y, e.z), c += 2)
            }
            o.getAttribute("position").needsUpdate = !0, le.prototype.updateMatrixWorld.call(this, i)
        }
    }(), Jr.prototype = Object.create(Ne.prototype), Jr.prototype.constructor = Jr, Jr.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, Jr.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }, Qr.prototype = Object.create(le.prototype), Qr.prototype.constructor = Qr, Qr.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Qr.prototype.update = function() {
        var e = .5 * this.light.width,
            t = .5 * this.light.height,
            n = this.line.geometry.attributes.position,
            i = n.array;
        i[0] = e, i[1] = -t, i[2] = 0, i[3] = e, i[4] = t, i[5] = 0, i[6] = -e, i[7] = t, i[8] = 0, i[9] = -e, i[10] = -t, i[11] = 0, i[12] = e, i[13] = -t, i[14] = 0, n.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
    }, Kr.prototype = Object.create(le.prototype), Kr.prototype.constructor = Kr, Kr.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Kr.prototype.update = function() {
        var e = new o,
            t = new X,
            n = new X;
        return function() {
            var i = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                var r = i.geometry.getAttribute("color");
                t.copy(this.light.color), n.copy(this.light.groundColor);
                for (var o = 0, a = r.count; a > o; o++) {
                    var s = a / 2 > o ? t : n;
                    r.setXYZ(o, s.r, s.g, s.b)
                }
                r.needsUpdate = !0
            }
            i.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }(), eo.prototype = Object.create(Bt.prototype), eo.prototype.constructor = eo, to.prototype = Object.create(Bt.prototype), to.prototype.constructor = to, no.prototype = Object.create(Bt.prototype), no.prototype.constructor = no, no.prototype.update = function() {
        var e = new o,
            t = new o,
            n = new a;
        return function() {
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            for (var i = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, c = 0, l = 0, u = s.length; u > l; l++) {
                var h = s[l],
                    p = h.normal;
                e.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(i), t.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), r.setXYZ(c, e.x, e.y, e.z), c += 1, r.setXYZ(c, t.x, t.y, t.z), c += 1
            }
            r.needsUpdate = !0
        }
    }(), io.prototype = Object.create(le.prototype), io.prototype.constructor = io, io.prototype.dispose = function() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, io.prototype.update = function() {
        var e = new o,
            t = new o,
            n = new o;
        return function() {
            e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(t, e), this.lightPlane.lookAt(n), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(n), this.targetLine.scale.z = n.length()
        }
    }(), ro.prototype = Object.create(Bt.prototype), ro.prototype.constructor = ro, ro.prototype.update = function() {
        function e(e, o, a, s) {
            i.set(o, a, s).unproject(r);
            var c = n[e];
            if (void 0 !== c)
                for (var l = t.getAttribute("position"), u = 0, h = c.length; h > u; u++) l.setXYZ(c[u], i.x, i.y, i.z)
        }
        var t, n, i = new o,
            r = new ue;
        return function() {
            t = this.geometry, n = this.pointMap;
            var i = 1,
                o = 1;
            r.projectionMatrix.copy(this.camera.projectionMatrix), e("c", 0, 0, -1), e("t", 0, 0, 1), e("n1", -i, -o, -1), e("n2", i, -o, -1), e("n3", -i, o, -1), e("n4", i, o, -1), e("f1", -i, -o, 1), e("f2", i, -o, 1), e("f3", -i, o, 1), e("f4", i, o, 1), e("u1", .7 * i, 1.1 * o, -1), e("u2", .7 * -i, 1.1 * o, -1), e("u3", 0, 2 * o, -1), e("cf1", -i, 0, 1), e("cf2", i, 0, 1), e("cf3", 0, -o, 1), e("cf4", 0, o, 1), e("cn1", -i, 0, -1), e("cn2", i, 0, -1), e("cn3", 0, -o, -1), e("cn4", 0, o, -1), t.getAttribute("position").needsUpdate = !0
        }
    }(), oo.prototype = Object.create(Bt.prototype), oo.prototype.constructor = oo, oo.prototype.update = function() {
        var e = new te;
        return function(t) {
            if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && e.setFromObject(this.object), !e.isEmpty()) {
                var n = e.min,
                    i = e.max,
                    r = this.geometry.attributes.position,
                    o = r.array;
                o[0] = i.x, o[1] = i.y, o[2] = i.z, o[3] = n.x, o[4] = i.y, o[5] = i.z, o[6] = n.x, o[7] = n.y, o[8] = i.z, o[9] = i.x, o[10] = n.y, o[11] = i.z, o[12] = i.x, o[13] = i.y, o[14] = n.z, o[15] = n.x, o[16] = i.y, o[17] = n.z, o[18] = n.x, o[19] = n.y, o[20] = n.z, o[21] = i.x, o[22] = n.y, o[23] = n.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), oo.prototype.setFromObject = function(e) {
        return this.object = e, this.update(), this
    }, ao.prototype = Object.create(Bt.prototype), ao.prototype.constructor = ao, ao.prototype.updateMatrixWorld = function(e) {
        var t = this.box;
        t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), le.prototype.updateMatrixWorld.call(this, e))
    }, so.prototype = Object.create(Ot.prototype), so.prototype.constructor = so, so.prototype.updateMatrixWorld = function(e) {
        var t = -this.plane.constant;
        Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.lookAt(this.plane.normal), le.prototype.updateMatrixWorld.call(this, e)
    };
    var $u, Wu;
    co.prototype = Object.create(le.prototype), co.prototype.constructor = co, co.prototype.setDirection = function() {
        var e, t = new o;
        return function(n) {
            n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(n.z, 0, -n.x).normalize(), e = Math.acos(n.y), this.quaternion.setFromAxisAngle(t, e))
        }
    }(), co.prototype.setLength = function(e, t, n) {
        void 0 === t && (t = .2 * e), void 0 === n && (n = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix()
    }, co.prototype.setColor = function(e) {
        this.line.material.color.copy(e), this.cone.material.color.copy(e)
    }, lo.prototype = Object.create(Bt.prototype), lo.prototype.constructor = lo;
    var Xu = {
            createMultiMaterialObject: function(e, t) {
                for (var n = new Ut, i = 0, r = t.length; r > i; i++) n.add(new Ne(e, t[i]));
                return n
            },
            detach: function(e, t, n) {
                e.applyMatrix(t.matrixWorld), t.remove(e), n.add(e)
            },
            attach: function(e, t, n) {
                e.applyMatrix((new i).getInverse(n.matrixWorld)), t.remove(e), n.add(e)
            }
        },
        qu = 0,
        Yu = 1;
    yi.create = function(e, t) {
        return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(yi.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
    }, Object.assign(zi.prototype, {
        createPointsGeometry: function(e) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var t = this.getPoints(e);
            return this.createGeometry(t)
        },
        createSpacedPointsGeometry: function(e) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var t = this.getSpacedPoints(e);
            return this.createGeometry(t)
        },
        createGeometry: function(e) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var t = new de, n = 0, i = e.length; i > n; n++) {
                var r = e[n];
                t.vertices.push(new o(r.x, r.y, r.z || 0))
            }
            return t
        }
    }), Object.assign(Hi.prototype, {
        fromPoints: function(e) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
        }
    }), Lo.prototype = Object.create(_i.prototype), Io.prototype = Object.create(_i.prototype), Oo.prototype = Object.create(_i.prototype), Object.assign(Oo.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }), eo.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, Zr.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }, Object.assign(fr.prototype, {
        extractUrlBase: function(e) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), ku.extractUrlBase(e)
        }
    }), Object.assign(q.prototype, {
        center: function(e) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        size: function(e) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
        }
    }), Object.assign(te.prototype, {
        center: function(e) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        },
        size: function(e) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
        }
    }), Be.prototype.center = function(e) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
    }, Object.assign(oc, {
        random16: function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
        },
        nearestPowerOfTwo: function(e) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), oc.floorPowerOfTwo(e)
        },
        nextPowerOfTwo: function(e) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), oc.ceilPowerOfTwo(e)
        }
    }), Object.assign(a.prototype, {
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(e) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(i.prototype, {
        extractPosition: function(e) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
        },
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
        },
        getPosition: function() {
            var e;
            return function() {
                return void 0 === e && (e = new o), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(e) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        multiplyVector4: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(e) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
        },
        crossVector: function(e) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(e) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(e, t, n, i, r, o) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, i, n, r, o)
        }
    }), ie.prototype.isIntersectionLine = function(e) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
    }, r.prototype.multiplyVector3 = function(e) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
    }, Object.assign(Oe.prototype, {
        isIntersectionBox: function(e) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
        },
        isIntersectionPlane: function(e) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
        }
    }), Object.assign(Gi.prototype, {
        extractAllPoints: function(e) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
        },
        extrude: function(e) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Nn(this, e)
        },
        makeGeometry: function(e) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Wn(this, e)
        }
    }), Object.assign(n.prototype, {
        fromAttribute: function(e, t, n) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
        },
        distanceToManhattan: function(e) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(o.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
        },
        getScaleFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
        },
        getColumnFromMatrix: function(e, t) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
        },
        applyProjection: function(e) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
        },
        fromAttribute: function(e, t, n) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
        },
        distanceToManhattan: function(e) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), Object.assign(c.prototype, {
        fromAttribute: function(e, t, n) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
        }
    }), de.prototype.computeTangents = function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    }, Object.assign(le.prototype, {
        getChildByName: function(e) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(e, t) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
        }
    }), Object.defineProperties(le.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function(e) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(At.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Object.defineProperty(Pt.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }), Object.defineProperty(yi.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
        },
        set: function(e) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e
        }
    }), mt.prototype.setLens = function(e, t) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
    }, Object.defineProperties(Vi.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
            }
        },
        shadowCameraLeft: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
            }
        },
        shadowCameraRight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
            }
        },
        shadowCameraTop: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
            }
        },
        shadowCameraBottom: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
            }
        },
        shadowCameraNear: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
            }
        },
        shadowCameraFar: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(e) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
            }
        },
        shadowMapHeight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
            }
        }
    }), Object.defineProperties(fe.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        }
    }), Object.assign(Se.prototype, {
        addIndex: function(e) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
        },
        addDrawCall: function(e, t, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(Se.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(Br.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(Q.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new X
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(e) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === na
            }
        }
    }), Object.defineProperties(ai.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
            }
        }
    }), Object.defineProperties(Ie.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function(e) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
            }
        }
    }), Object.assign(wt.prototype, {
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        },
        resetGLState: function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(e) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties(wt.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = e
            }
        }
    }), Object.defineProperties(oe.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? Wo : $o
            },
            set: function(e) {
                var t = e !== $o;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + t + "."), this.renderReverseSided = t
            }
        }
    }), Object.defineProperties(l.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
            }
        }
    }), Object.assign(gt.prototype, {
        getStandingMatrix: function() {
            console.warn("THREE.WebVRManager: .getStandingMatrix() has been removed.")
        }
    }), Object.defineProperties(gt.prototype, {
        standing: {
            set: function() {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        }
    }), Er.prototype.load = function(e) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var t = this,
            n = new wr;
        return n.load(e, function(e) {
            t.setBuffer(e)
        }), this
    }, Cr.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, Mr.prototype.updateCubeMap = function(e, t) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
    };
    var Zu = {
            merge: function(e, t, n) {
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                var i;
                t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), i = t.matrix, t = t.geometry), e.merge(t, i, n)
            },
            center: function(e) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
            }
        },
        Ju = {
            crossOrigin: void 0,
            loadTexture: function(e, t, n, i) {
                console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
                var r = new gi;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(e, n, void 0, i);
                return t && (o.mapping = t), o
            },
            loadTextureCube: function(e, t, n, i) {
                console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
                var r = new vi;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(e, n, void 0, i);
                return t && (o.mapping = t), o
            },
            loadCompressedTexture: function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            },
            loadCompressedTextureCube: function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            }
        };
    e.WebGLRenderTargetCube = u, e.WebGLRenderTarget = l, e.WebGLRenderer = wt, e.ShaderLib = xu, e.UniformsLib = mc, e.UniformsUtils = vc, e.ShaderChunk = yu, e.FogExp2 = _t, e.Fog = Mt, e.Scene = Tt, e.LensFlare = Et, e.Sprite = Ct, e.LOD = At, e.SkinnedMesh = Lt, e.Skeleton = Pt, e.Bone = Rt, e.Mesh = Ne, e.LineSegments = Bt, e.LineLoop = Dt, e.Line = Ot, e.Points = Ft, e.Group = Ut, e.VideoTexture = kt, e.DataTexture = h, e.CompressedTexture = zt, e.CubeTexture = p, e.CanvasTexture = Z, e.DepthTexture = Ht, e.Texture = s, e.CompressedTextureLoader = di, e.DataTextureLoader = fi, e.CubeTextureLoader = vi, e.TextureLoader = gi, e.ObjectLoader = vr, e.MaterialLoader = pr, e.BufferGeometryLoader = dr, e.DefaultLoadingManager = Ru, e.LoadingManager = hi, e.JSONLoader = mr, e.ImageLoader = mi, e.ImageBitmapLoader = gr, e.FontLoader = br, e.FileLoader = pi, e.Loader = fr, e.LoaderUtils = ku, e.Cache = Pu, e.AudioLoader = wr, e.SpotLightShadow = Wi, e.SpotLight = Xi, e.PointLight = qi, e.RectAreaLight = Qi, e.HemisphereLight = ji, e.DirectionalLightShadow = Yi, e.DirectionalLight = Zi, e.AmbientLight = Ji, e.LightShadow = $i, e.Light = Vi, e.StereoCamera = _r, e.PerspectiveCamera = mt, e.OrthographicCamera = he, e.CubeCamera = Mr, e.ArrayCamera = vt, e.Camera = ue, e.AudioListener = Tr, e.PositionalAudio = Sr, e.AudioContext = ju, e.AudioAnalyser = Cr, e.Audio = Er, e.VectorKeyframeTrack = ur, e.StringKeyframeTrack = Ki, e.QuaternionKeyframeTrack = ir, e.NumberKeyframeTrack = or, e.ColorKeyframeTrack = rr, e.BooleanKeyframeTrack = er, e.PropertyMixer = Ar, e.PropertyBinding = Rr, e.KeyframeTrack = lr, e.AnimationUtils = Fu, e.AnimationObjectGroup = Lr, e.AnimationMixer = Or, e.AnimationClip = hr, e.Uniform = Br, e.InstancedBufferGeometry = Dr, e.BufferGeometry = Se, e.Geometry = de, e.InterleavedBufferAttribute = Nr, e.InstancedInterleavedBuffer = Ur, e.InterleavedBuffer = Fr, e.InstancedBufferAttribute = kr, e.Face3 = pe, e.Object3D = le, e.Raycaster = zr, e.Layers = ce, e.EventDispatcher = t, e.Clock = Vr, e.QuaternionLinearInterpolant = nr, e.LinearInterpolant = sr, e.DiscreteInterpolant = cr, e.CubicInterpolant = ar, e.Interpolant = tr, e.Triangle = De, e.Math = oc, e.Spherical = jr, e.Cylindrical = $r, e.Plane = ie, e.Frustum = re, e.Sphere = ne, e.Ray = Oe, e.Matrix4 = i, e.Matrix3 = a, e.Box3 = te, e.Box2 = q, e.Line3 = Be, e.Euler = se, e.Vector4 = c, e.Vector3 = o, e.Vector2 = n, e.Quaternion = r, e.Color = X, e.ImmediateRenderObject = Wr, e.VertexNormalsHelper = Xr, e.SpotLightHelper = qr, e.SkeletonHelper = Zr, e.PointLightHelper = Jr, e.RectAreaLightHelper = Qr, e.HemisphereLightHelper = Kr, e.GridHelper = eo, e.PolarGridHelper = to, e.FaceNormalsHelper = no, e.DirectionalLightHelper = io, e.CameraHelper = ro, e.BoxHelper = oo, e.Box3Helper = ao, e.PlaneHelper = so, e.ArrowHelper = co, e.AxesHelper = lo, e.Shape = Gi, e.Path = Hi, e.ShapePath = yr, e.Font = xr, e.CurvePath = zi, e.Curve = yi, e.ShapeUtils = Su, e.SceneUtils = Xu, e.WebGLUtils = bt, e.WireframeGeometry = Gt, e.ParametricGeometry = Vt, e.ParametricBufferGeometry = jt, e.TetrahedronGeometry = Xt, e.TetrahedronBufferGeometry = qt, e.OctahedronGeometry = Yt, e.OctahedronBufferGeometry = Zt, e.IcosahedronGeometry = Jt, e.IcosahedronBufferGeometry = Qt, e.DodecahedronGeometry = Kt, e.DodecahedronBufferGeometry = en, e.PolyhedronGeometry = $t, e.PolyhedronBufferGeometry = Wt, e.TubeGeometry = tn, e.TubeBufferGeometry = nn, e.TorusKnotGeometry = rn, e.TorusKnotBufferGeometry = on, e.TorusGeometry = an, e.TorusBufferGeometry = sn, e.TextGeometry = Un, e.TextBufferGeometry = kn, e.SphereGeometry = zn, e.SphereBufferGeometry = Hn, e.RingGeometry = Gn, e.RingBufferGeometry = Vn, e.PlaneGeometry = Pe, e.PlaneBufferGeometry = Re, e.LatheGeometry = jn, e.LatheBufferGeometry = $n, e.ShapeGeometry = Wn, e.ShapeBufferGeometry = Xn, e.ExtrudeGeometry = Nn, e.ExtrudeBufferGeometry = Fn, e.EdgesGeometry = Yn, e.ConeGeometry = Qn, e.ConeBufferGeometry = Kn, e.CylinderGeometry = Zn, e.CylinderBufferGeometry = Jn, e.CircleGeometry = ei, e.CircleBufferGeometry = ti, e.BoxGeometry = Ce, e.BoxBufferGeometry = Ae, e.ShadowMaterial = ni, e.SpriteMaterial = St, e.RawShaderMaterial = ii, e.ShaderMaterial = Ie, e.PointsMaterial = Nt, e.MeshPhysicalMaterial = oi, e.MeshStandardMaterial = ri, e.MeshPhongMaterial = ai, e.MeshToonMaterial = si, e.MeshNormalMaterial = ci, e.MeshLambertMaterial = li, e.MeshDepthMaterial = K, e.MeshDistanceMaterial = ee, e.MeshBasicMaterial = Le, e.LineDashedMaterial = ui, e.LineBasicMaterial = It, e.Material = Q, e.Float64BufferAttribute = Me, e.Float32BufferAttribute = _e, e.Uint32BufferAttribute = we, e.Int32BufferAttribute = be, e.Uint16BufferAttribute = xe, e.Int16BufferAttribute = ye, e.Uint8ClampedBufferAttribute = ge, e.Uint8BufferAttribute = ve, e.Int8BufferAttribute = me, e.BufferAttribute = fe, e.ArcCurve = bi, e.CatmullRomCurve3 = _i, e.CubicBezierCurve = Oi, e.CubicBezierCurve3 = Bi, e.EllipseCurve = xi, e.LineCurve = Di, e.LineCurve3 = Ni, e.QuadraticBezierCurve = Fi, e.QuadraticBezierCurve3 = Ui, e.SplineCurve = ki, e.REVISION = Go, e.MOUSE = Vo, e.CullFaceNone = jo, e.CullFaceBack = $o, e.CullFaceFront = Wo, e.CullFaceFrontBack = Xo, e.FrontFaceDirectionCW = qo, e.FrontFaceDirectionCCW = Yo, e.BasicShadowMap = Zo, e.PCFShadowMap = Jo, e.PCFSoftShadowMap = Qo, e.FrontSide = Ko, e.BackSide = ea, e.DoubleSide = ta, e.FlatShading = na, e.SmoothShading = ia, e.NoColors = ra, e.FaceColors = oa, e.VertexColors = aa, e.NoBlending = sa, e.NormalBlending = ca, e.AdditiveBlending = la, e.SubtractiveBlending = ua, e.MultiplyBlending = ha, e.CustomBlending = pa, e.AddEquation = da, e.SubtractEquation = fa, e.ReverseSubtractEquation = ma, e.MinEquation = va, e.MaxEquation = ga, e.ZeroFactor = ya, e.OneFactor = xa, e.SrcColorFactor = ba, e.OneMinusSrcColorFactor = wa, e.SrcAlphaFactor = _a, e.OneMinusSrcAlphaFactor = Ma, e.DstAlphaFactor = Ta, e.OneMinusDstAlphaFactor = Ea, e.DstColorFactor = Sa, e.OneMinusDstColorFactor = Ca, e.SrcAlphaSaturateFactor = Aa, e.NeverDepth = Pa, e.AlwaysDepth = Ra, e.LessDepth = La, e.LessEqualDepth = Ia, e.EqualDepth = Oa, e.GreaterEqualDepth = Ba, e.GreaterDepth = Da, e.NotEqualDepth = Na, e.MultiplyOperation = Fa, e.MixOperation = Ua, e.AddOperation = ka, e.NoToneMapping = za, e.LinearToneMapping = Ha, e.ReinhardToneMapping = Ga, e.Uncharted2ToneMapping = Va, e.CineonToneMapping = ja, e.UVMapping = $a, e.CubeReflectionMapping = Wa, e.CubeRefractionMapping = Xa, e.EquirectangularReflectionMapping = qa, e.EquirectangularRefractionMapping = Ya, e.SphericalReflectionMapping = Za, e.CubeUVReflectionMapping = Ja, e.CubeUVRefractionMapping = Qa, e.RepeatWrapping = Ka, e.ClampToEdgeWrapping = es, e.MirroredRepeatWrapping = ts, e.NearestFilter = ns, e.NearestMipMapNearestFilter = is, e.NearestMipMapLinearFilter = rs, e.LinearFilter = os, e.LinearMipMapNearestFilter = as, e.LinearMipMapLinearFilter = ss, e.UnsignedByteType = cs, e.ByteType = ls, e.ShortType = us, e.UnsignedShortType = hs, e.IntType = ps, e.UnsignedIntType = ds, e.FloatType = fs, e.HalfFloatType = ms, e.UnsignedShort4444Type = vs, e.UnsignedShort5551Type = gs, e.UnsignedShort565Type = ys, e.UnsignedInt248Type = xs, e.AlphaFormat = bs, e.RGBFormat = ws, e.RGBAFormat = _s, e.LuminanceFormat = Ms, e.LuminanceAlphaFormat = Ts, e.RGBEFormat = Es, e.DepthFormat = Ss, e.DepthStencilFormat = Cs, e.RGB_S3TC_DXT1_Format = As, e.RGBA_S3TC_DXT1_Format = Ps, e.RGBA_S3TC_DXT3_Format = Rs, e.RGBA_S3TC_DXT5_Format = Ls, e.RGB_PVRTC_4BPPV1_Format = Is, e.RGB_PVRTC_2BPPV1_Format = Os, e.RGBA_PVRTC_4BPPV1_Format = Bs, e.RGBA_PVRTC_2BPPV1_Format = Ds, e.RGB_ETC1_Format = Ns, e.LoopOnce = Fs, e.LoopRepeat = Us, e.LoopPingPong = ks, e.InterpolateDiscrete = zs, e.InterpolateLinear = Hs, e.InterpolateSmooth = Gs, e.ZeroCurvatureEnding = Vs, e.ZeroSlopeEnding = js, e.WrapAroundEnding = $s, e.TrianglesDrawMode = Ws, e.TriangleStripDrawMode = Xs, e.TriangleFanDrawMode = qs, e.LinearEncoding = Ys, e.sRGBEncoding = Zs, e.GammaEncoding = Js, e.RGBEEncoding = Qs, e.LogLuvEncoding = Ks, e.RGBM7Encoding = ec, e.RGBM16Encoding = tc, e.RGBDEncoding = nc, e.BasicDepthPacking = ic, e.RGBADepthPacking = rc, e.CubeGeometry = Ce, e.Face4 = uo, e.LineStrip = qu, e.LinePieces = Yu, e.MeshFaceMaterial = ho, e.MultiMaterial = po, e.PointCloud = fo, e.Particle = mo, e.ParticleSystem = vo, e.PointCloudMaterial = go, e.ParticleBasicMaterial = yo, e.ParticleSystemMaterial = xo, e.Vertex = bo, e.DynamicBufferAttribute = wo, e.Int8Attribute = _o, e.Uint8Attribute = Mo, e.Uint8ClampedAttribute = To, e.Int16Attribute = Eo, e.Uint16Attribute = So, e.Int32Attribute = Co, e.Uint32Attribute = Ao, e.Float32Attribute = Po, e.Float64Attribute = Ro, e.ClosedSplineCurve3 = Lo, e.SplineCurve3 = Io, e.Spline = Oo, e.AxisHelper = Bo, e.BoundingBoxHelper = Do, e.EdgesHelper = No, e.WireframeHelper = Fo, e.XHRLoader = Uo, e.BinaryTextureLoader = ko, e.GeometryUtils = Zu, e.ImageUtils = Ju, e.Projector = zo, e.CanvasRenderer = Ho, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
THREE.CopyShader = {
    uniforms: {
        tDiffuse: {
            value: null
        },
        opacity: {
            value: 1
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
};
THREE.DigitalGlitch = {
    uniforms: {
        tDiffuse: {
            value: null
        },
        tDisp: {
            value: null
        },
        byp: {
            value: 0
        },
        amount: {
            value: .08
        },
        angle: {
            value: .02
        },
        seed: {
            value: .02
        },
        seed_x: {
            value: .02
        },
        seed_y: {
            value: .02
        },
        distortion_x: {
            value: .5
        },
        distortion_y: {
            value: .6
        },
        col_s: {
            value: .05
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform int byp;", "uniform sampler2D tDiffuse;", "uniform sampler2D tDisp;", "uniform float amount;", "uniform float angle;", "uniform float seed;", "uniform float seed_x;", "uniform float seed_y;", "uniform float distortion_x;", "uniform float distortion_y;", "uniform float col_s;", "varying vec2 vUv;", "float rand(vec2 co){", "return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);", "}", "void main() {", "if(byp<1) {", "vec2 p = vUv;", "float xs = floor(gl_FragCoord.x / 0.5);", "float ys = floor(gl_FragCoord.y / 0.5);", "vec4 normal = texture2D (tDisp, p*seed*seed);", "if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {", "if(seed_x>0.){", "p.y = 1. - (p.y + distortion_y);", "}", "else {", "p.y = distortion_y;", "}", "}", "if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {", "if(seed_y>0.){", "p.x=distortion_x;", "}", "else {", "p.x = 1. - (p.x + distortion_x);", "}", "}", "p.x+=normal.x*seed_x*(seed/5.);", "p.y+=normal.y*seed_y*(seed/5.);", "vec2 offset = amount * vec2( cos(angle), sin(angle));", "vec4 cr = texture2D(tDiffuse, p + offset);", "vec4 cga = texture2D(tDiffuse, p);", "vec4 cb = texture2D(tDiffuse, p - offset);", "gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);", "vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);", "gl_FragColor = gl_FragColor+ snow;", "}", "else {", "gl_FragColor=texture2D (tDiffuse, vUv);", "}", "}"].join("\n")
};
THREE.EffectComposer = function(e, t) {
    if (this.renderer = e, void 0 === t) {
        var n = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat,
                stencilBuffer: !1
            },
            i = e.getDrawingBufferSize();
        t = new THREE.WebGLRenderTarget(i.width, i.height, n), t.texture.name = "EffectComposer.rt1"
    }
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [], void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"), void 0 === THREE.ShaderPass && console.error("THREE.EffectComposer relies on THREE.ShaderPass"), this.copyPass = new THREE.ShaderPass(THREE.CopyShader)
}, Object.assign(THREE.EffectComposer.prototype, {
    swapBuffers: function() {
        var e = this.readBuffer;
        this.readBuffer = this.writeBuffer, this.writeBuffer = e
    },
    addPass: function(e) {
        this.passes.push(e);
        var t = this.renderer.getDrawingBufferSize();
        e.setSize(t.width, t.height)
    },
    insertPass: function(e, t) {
        this.passes.splice(t, 0, e)
    },
    render: function(e) {
        var t, n, i = !1,
            r = this.passes.length;
        for (n = 0; r > n; n++)
            if (t = this.passes[n], t.enabled !== !1) {
                if (t.render(this.renderer, this.writeBuffer, this.readBuffer, e, i), t.needsSwap) {
                    if (i) {
                        var o = this.renderer.context;
                        o.stencilFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), o.stencilFunc(o.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                void 0 !== THREE.MaskPass && (t instanceof THREE.MaskPass ? i = !0 : t instanceof THREE.ClearMaskPass && (i = !1))
            }
    },
    reset: function(e) {
        if (void 0 === e) {
            var t = this.renderer.getDrawingBufferSize();
            e = this.renderTarget1.clone(), e.setSize(t.width, t.height)
        }
        this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
    },
    setSize: function(e, t) {
        this.renderTarget1.setSize(e, t), this.renderTarget2.setSize(e, t);
        for (var n = 0; n < this.passes.length; n++) this.passes[n].setSize(e, t)
    }
}), THREE.Pass = function() {
    this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
}, Object.assign(THREE.Pass.prototype, {
    setSize: function() {},
    render: function() {
        console.error("THREE.Pass: .render() must be implemented in derived pass.")
    }
});
THREE.RenderPass = function(e, t, n, i, r) {
    THREE.Pass.call(this), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = void 0 !== r ? r : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1
}, THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.RenderPass,
    render: function(e, t, n) {
        var i = e.autoClear;
        e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial;
        var r, o;
        this.clearColor && (r = e.getClearColor().getHex(), o = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.render(this.scene, this.camera, this.renderToScreen ? null : n, this.clear), this.clearColor && e.setClearColor(r, o), this.scene.overrideMaterial = null, e.autoClear = i
    }
});
THREE.MaskPass = function(e, t) {
    THREE.Pass.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1
}, THREE.MaskPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.MaskPass,
    render: function(e, t, n) {
        var i = e.context,
            r = e.state;
        r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0);
        var o, a;
        this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295), r.buffers.stencil.setClear(a), e.render(this.scene, this.camera, n, this.clear), e.render(this.scene, this.camera, t, this.clear), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP)
    }
}), THREE.ClearMaskPass = function() {
    THREE.Pass.call(this), this.needsSwap = !1
}, THREE.ClearMaskPass.prototype = Object.create(THREE.Pass.prototype), Object.assign(THREE.ClearMaskPass.prototype, {
    render: function(e) {
        e.state.buffers.stencil.setTest(!1)
    }
});
THREE.ShaderPass = function(e, t) {
    THREE.Pass.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof THREE.ShaderMaterial ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.material = new THREE.ShaderMaterial({
        defines: e.defines || {},
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader
    })), this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), this.scene = new THREE.Scene, this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.quad.frustumCulled = !1, this.scene.add(this.quad)
}, THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.ShaderPass,
    render: function(e, t, n) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.quad.material = this.material, this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
    }
});
THREE.GlitchPass = function(e) {
    THREE.Pass.call(this), void 0 === THREE.DigitalGlitch && console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");
    var t = THREE.DigitalGlitch;
    this.uniforms = THREE.UniformsUtils.clone(t.uniforms), void 0 == e && (e = 64), this.uniforms.tDisp.value = this.generateHeightmap(e), this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader
    }), this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), this.scene = new THREE.Scene, this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null), this.quad.frustumCulled = !1, this.scene.add(this.quad), this.goWild = !1, this.curF = 0, this.permanentEfect = !1, this.generateTrigger()
}, THREE.GlitchPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
    constructor: THREE.GlitchPass,
    render: function(e, t, n) {
        this.uniforms.tDiffuse.value = n.texture, this.uniforms.seed.value = Math.random(), this.uniforms.byp.value = 0, this.curF % this.randX == 0 || 1 == this.goWild ? (this.uniforms.amount.value = Math.random() / 30, this.uniforms.angle.value = THREE.Math.randFloat(-Math.PI, Math.PI), this.uniforms.seed_x.value = THREE.Math.randFloat(-1, 1), this.uniforms.seed_y.value = THREE.Math.randFloat(-1, 1), this.uniforms.distortion_x.value = THREE.Math.randFloat(0, 1), this.uniforms.distortion_y.value = THREE.Math.randFloat(0, 1), this.curF = 0, this.generateTrigger()) : this.curF % this.randX < this.randX / 5 || 1 == this.permanentEfect ? (this.uniforms.amount.value = Math.random() / 90, this.uniforms.angle.value = THREE.Math.randFloat(-Math.PI, Math.PI), this.uniforms.seed_x.value = THREE.Math.randFloat(-.3, .3), this.uniforms.seed_y.value = THREE.Math.randFloat(-.3, .3), this.uniforms.distortion_x.value = THREE.Math.randFloat(0, 1), this.uniforms.distortion_y.value = THREE.Math.randFloat(0, 1)) : 0 == this.goWild && (this.uniforms.byp.value = 1), this.curF++, this.quad.material = this.material, this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
    },
    generateTrigger: function() {
        this.randX = THREE.Math.randInt(120, 240)
    },
    generateHeightmap: function(e) {
        for (var t = new Float32Array(e * e * 3), n = e * e, i = 0; n > i; i++) {
            var r = THREE.Math.randFloat(0, 1);
            t[3 * i + 0] = r, t[3 * i + 1] = r, t[3 * i + 2] = r
        }
        var o = new THREE.DataTexture(t, e, e, THREE.RGBFormat, THREE.FloatType);
        return o.needsUpdate = !0, o
    }
});
var Detector = {
    canvas: !!window.CanvasRenderingContext2D,
    webgl: function() {
        try {
            var e = document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
        } catch (t) {
            return !1
        }
    }(),
    workers: !!window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,
    getWebGLErrorMessage: function() {
        var e = document.createElement("div");
        return e.id = "webgl-error-message", e.style.fontFamily = "monospace", e.style.fontSize = "13px", e.style.fontWeight = "normal", e.style.textAlign = "center", e.style.background = "#fff", e.style.color = "#000", e.style.padding = "1.5em", e.style.width = "400px", e.style.margin = "5em auto 0", this.webgl || (e.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")), e
    },
    addGetWebGLMessage: function(e) {
        var t, n, i;
        e = e || {}, t = void 0 !== e.parent ? e.parent : document.body, n = void 0 !== e.id ? e.id : "oldie", i = Detector.getWebGLErrorMessage(), i.id = n, t.appendChild(i)
    }
};
"object" == typeof module && (module.exports = Detector);
THREE.OBJLoader = function() {
    function e() {
        var e = {
            objects: [],
            object: {},
            vertices: [],
            normals: [],
            colors: [],
            uvs: [],
            materialLibraries: [],
            startObject: function(e, t) {
                if (this.object && this.object.fromDeclaration === !1) return this.object.name = e, void(this.object.fromDeclaration = t !== !1);
                var n = this.object && "function" == typeof this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                if (this.object && "function" == typeof this.object._finalize && this.object._finalize(!0), this.object = {
                        name: e || "",
                        fromDeclaration: t !== !1,
                        geometry: {
                            vertices: [],
                            normals: [],
                            colors: [],
                            uvs: []
                        },
                        materials: [],
                        smooth: !0,
                        startMaterial: function(e, t) {
                            var n = this._finalize(!1);
                            n && (n.inherited || n.groupCount <= 0) && this.materials.splice(n.index, 1);
                            var i = {
                                index: this.materials.length,
                                name: e || "",
                                mtllib: Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "",
                                smooth: void 0 !== n ? n.smooth : this.smooth,
                                groupStart: void 0 !== n ? n.groupEnd : 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: !1,
                                clone: function(e) {
                                    var t = {
                                        index: "number" == typeof e ? e : this.index,
                                        name: this.name,
                                        mtllib: this.mtllib,
                                        smooth: this.smooth,
                                        groupStart: 0,
                                        groupEnd: -1,
                                        groupCount: -1,
                                        inherited: !1
                                    };
                                    return t.clone = this.clone.bind(t), t
                                }
                            };
                            return this.materials.push(i), i
                        },
                        currentMaterial: function() {
                            return this.materials.length > 0 ? this.materials[this.materials.length - 1] : void 0
                        },
                        _finalize: function(e) {
                            var t = this.currentMaterial();
                            if (t && -1 === t.groupEnd && (t.groupEnd = this.geometry.vertices.length / 3, t.groupCount = t.groupEnd - t.groupStart, t.inherited = !1), e && this.materials.length > 1)
                                for (var n = this.materials.length - 1; n >= 0; n--) this.materials[n].groupCount <= 0 && this.materials.splice(n, 1);
                            return e && 0 === this.materials.length && this.materials.push({
                                name: "",
                                smooth: this.smooth
                            }), t
                        }
                    }, n && n.name && "function" == typeof n.clone) {
                    var i = n.clone(0);
                    i.inherited = !0, this.object.materials.push(i)
                }
                this.objects.push(this.object)
            },
            finalize: function() {
                this.object && "function" == typeof this.object._finalize && this.object._finalize(!0)
            },
            parseVertexIndex: function(e, t) {
                var n = parseInt(e, 10);
                return 3 * (n >= 0 ? n - 1 : n + t / 3)
            },
            parseNormalIndex: function(e, t) {
                var n = parseInt(e, 10);
                return 3 * (n >= 0 ? n - 1 : n + t / 3)
            },
            parseUVIndex: function(e, t) {
                var n = parseInt(e, 10);
                return 2 * (n >= 0 ? n - 1 : n + t / 2)
            },
            addVertex: function(e, t, n) {
                var i = this.vertices,
                    r = this.object.geometry.vertices;
                r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
            },
            addVertexLine: function(e) {
                var t = this.vertices,
                    n = this.object.geometry.vertices;
                n.push(t[e + 0], t[e + 1], t[e + 2])
            },
            addNormal: function(e, t, n) {
                var i = this.normals,
                    r = this.object.geometry.normals;
                r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
            },
            addColor: function(e, t, n) {
                var i = this.colors,
                    r = this.object.geometry.colors;
                r.push(i[e + 0], i[e + 1], i[e + 2]), r.push(i[t + 0], i[t + 1], i[t + 2]), r.push(i[n + 0], i[n + 1], i[n + 2])
            },
            addUV: function(e, t, n) {
                var i = this.uvs,
                    r = this.object.geometry.uvs;
                r.push(i[e + 0], i[e + 1]), r.push(i[t + 0], i[t + 1]), r.push(i[n + 0], i[n + 1])
            },
            addUVLine: function(e) {
                var t = this.uvs,
                    n = this.object.geometry.uvs;
                n.push(t[e + 0], t[e + 1])
            },
            addFace: function(e, t, n, i, r, o, a, s, c) {
                var l = this.vertices.length,
                    u = this.parseVertexIndex(e, l),
                    h = this.parseVertexIndex(t, l),
                    p = this.parseVertexIndex(n, l);
                if (this.addVertex(u, h, p), void 0 !== i) {
                    var d = this.uvs.length;
                    u = this.parseUVIndex(i, d), h = this.parseUVIndex(r, d), p = this.parseUVIndex(o, d), this.addUV(u, h, p)
                }
                if (void 0 !== a) {
                    var f = this.normals.length;
                    u = this.parseNormalIndex(a, f), h = a === s ? u : this.parseNormalIndex(s, f), p = a === c ? u : this.parseNormalIndex(c, f), this.addNormal(u, h, p)
                }
                this.colors.length > 0 && this.addColor(u, h, p)
            },
            addLineGeometry: function(e, t) {
                this.object.geometry.type = "Line";
                for (var n = this.vertices.length, i = this.uvs.length, r = 0, o = e.length; o > r; r++) this.addVertexLine(this.parseVertexIndex(e[r], n));
                for (var a = 0, o = t.length; o > a; a++) this.addUVLine(this.parseUVIndex(t[a], i))
            }
        };
        return e.startObject("", !1), e
    }

    function t(e) {
        this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager, this.materials = null
    }
    var n = /^[og]\s*(.+)?/,
        i = /^mtllib /,
        r = /^usemtl /;
    return t.prototype = {
        constructor: t,
        load: function(e, t, n, i) {
            var r = this,
                o = new THREE.FileLoader(r.manager);
            o.setPath(this.path), o.load(e, function(e) {
                t(r.parse(e))
            }, n, i)
        },
        setPath: function(e) {
            this.path = e
        },
        setMaterials: function(e) {
            return this.materials = e, this
        },
        parse: function(t) {
            console.time("OBJLoader");
            var o = new e; - 1 !== t.indexOf("\r\n") && (t = t.replace(/\r\n/g, "\n")), -1 !== t.indexOf("\\\n") && (t = t.replace(/\\\n/g, ""));
            for (var a = t.split("\n"), s = "", c = "", l = 0, u = [], h = "function" == typeof "".trimLeft, p = 0, d = a.length; d > p; p++)
                if (s = a[p], s = h ? s.trimLeft() : s.trim(), l = s.length, 0 !== l && (c = s.charAt(0), "#" !== c))
                    if ("v" === c) {
                        var f = s.split(/\s+/);
                        switch (f[0]) {
                            case "v":
                                o.vertices.push(parseFloat(f[1]), parseFloat(f[2]), parseFloat(f[3])), 8 === f.length && o.colors.push(parseFloat(f[4]), parseFloat(f[5]), parseFloat(f[6]));
                                break;
                            case "vn":
                                o.normals.push(parseFloat(f[1]), parseFloat(f[2]), parseFloat(f[3]));
                                break;
                            case "vt":
                                o.uvs.push(parseFloat(f[1]), parseFloat(f[2]))
                        }
                    } else if ("f" === c) {
                for (var m = s.substr(1).trim(), v = m.split(/\s+/), g = [], y = 0, x = v.length; x > y; y++) {
                    var b = v[y];
                    if (b.length > 0) {
                        var w = b.split("/");
                        g.push(w)
                    }
                }
                for (var _ = g[0], y = 1, x = g.length - 1; x > y; y++) {
                    var M = g[y],
                        T = g[y + 1];
                    o.addFace(_[0], M[0], T[0], _[1], M[1], T[1], _[2], M[2], T[2])
                }
            } else if ("l" === c) {
                var E = s.substring(1).trim().split(" "),
                    S = [],
                    C = [];
                if (-1 === s.indexOf("/")) S = E;
                else
                    for (var A = 0, P = E.length; P > A; A++) {
                        var R = E[A].split("/");
                        "" !== R[0] && S.push(R[0]), "" !== R[1] && C.push(R[1])
                    }
                o.addLineGeometry(S, C)
            } else if (null !== (u = n.exec(s))) {
                var L = (" " + u[0].substr(1).trim()).substr(1);
                o.startObject(L)
            } else if (r.test(s)) o.object.startMaterial(s.substring(7).trim(), o.materialLibraries);
            else if (i.test(s)) o.materialLibraries.push(s.substring(7).trim());
            else {
                if ("s" !== c) {
                    if ("\x00" === s) continue;
                    throw new Error('THREE.OBJLoader: Unexpected line: "' + s + '"')
                }
                if (u = s.split(" "), u.length > 1) {
                    var I = u[1].trim().toLowerCase();
                    o.object.smooth = "0" !== I && "off" !== I
                } else o.object.smooth = !0;
                var O = o.object.currentMaterial();
                O && (O.smooth = o.object.smooth)
            }
            o.finalize();
            var D = new THREE.Group;
            D.materialLibraries = [].concat(o.materialLibraries);
            for (var p = 0, d = o.objects.length; d > p; p++) {
                var B = o.objects[p],
                    N = B.geometry,
                    F = B.materials,
                    U = "Line" === N.type;
                if (0 !== N.vertices.length) {
                    var k = new THREE.BufferGeometry;
                    k.addAttribute("position", new THREE.Float32BufferAttribute(N.vertices, 3)), N.normals.length > 0 ? k.addAttribute("normal", new THREE.Float32BufferAttribute(N.normals, 3)) : k.computeVertexNormals(), N.colors.length > 0 && k.addAttribute("color", new THREE.Float32BufferAttribute(N.colors, 3)), N.uvs.length > 0 && k.addAttribute("uv", new THREE.Float32BufferAttribute(N.uvs, 2));
                    for (var z = [], H = 0, G = F.length; G > H; H++) {
                        var V = F[H],
                            O = void 0;
                        if (null !== this.materials && (O = this.materials.create(V.name), U && O && !(O instanceof THREE.LineBasicMaterial))) {
                            var j = new THREE.LineBasicMaterial;
                            j.copy(O), O = j
                        }
                        O || (O = U ? new THREE.LineBasicMaterial : new THREE.MeshPhongMaterial, O.name = V.name), O.flatShading = V.smooth ? !1 : !0, z.push(O)
                    }
                    var $;
                    if (z.length > 1) {
                        for (var H = 0, G = F.length; G > H; H++) {
                            var V = F[H];
                            k.addGroup(V.groupStart, V.groupCount, H)
                        }
                        $ = U ? new THREE.LineSegments(k, z) : new THREE.Mesh(k, z)
                    } else $ = U ? new THREE.LineSegments(k, z[0]) : new THREE.Mesh(k, z[0]);
                    $.name = B.name, D.add($)
                }
            }
            return console.timeEnd("OBJLoader"), D
        }
    }, t
}();
